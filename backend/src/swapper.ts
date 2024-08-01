// todo: take the assettransfer data and return the output to call the

import { ethers } from "ethers";
import { chainflipVaultABI } from "./abi/chainflipVault";
import { AssetTransferInterface } from "./models/AssetTransfer";
import { erc20ABI } from "./abi/erc20";
import { assetReceiverABI } from "./abi/assetReceiver";
import { ChainflipVaults, convertChainIdToChainFlipId, getWallet, tokenAddressToChainFlipAssetId } from "./utils/helpers";
import { chainflipInterface, erc20Interface } from "./utils/interface";

const emptyByteString = ethers.encodeBytes32String("");



const swap = async (assetTransfer: AssetTransferInterface) => {
  // todo: create a transaction to sign for calling chainflip vault function
  const srcChain = assetTransfer.chain;
  const chainflipVaultAddress = ChainflipVaults[srcChain];
  const wallet = getWallet(srcChain);

  const dstChainId = convertChainIdToChainFlipId(assetTransfer.dstChain); // todo: right now the only dst chain is ETH SEPOLIA
  const dstAddress = ethers.getBytes(assetTransfer.dstAddress); // todo: change this to the desitnation address
  const dstToken = tokenAddressToChainFlipAssetId(assetTransfer.dstToken, assetTransfer.dstChain); // todo: change this to the asset from the user
  const assetReceiverAddress = assetTransfer.to;
  const srcTokenAmount = assetTransfer.rawAmount;
  const assetReceiverContract = new ethers.Contract(
    assetReceiverAddress,
    assetReceiverABI,
    wallet
  );
  let tx;
  if (assetTransfer.native) {
    const swapTxData = chainflipInterface.encodeFunctionData("xSwapNative", [
      dstChainId,
      dstAddress,
      dstToken,
      emptyByteString,
    ]);
    tx = await assetReceiverContract.execute(
      [chainflipVaultAddress],
      [swapTxData],
      [srcTokenAmount]
    );
  } else {
    const srcToken = assetTransfer.token;
    const approveTxData = erc20Interface.encodeFunctionData("approve", [
      chainflipVaultAddress,
      srcTokenAmount,
    ]);
    const swapTxData = chainflipInterface.encodeFunctionData("xSwapToken", [
      dstChainId,
      dstAddress,
      dstToken,
      srcToken,
      srcTokenAmount,
    ]);
    tx = await assetReceiverContract.execute(
      [srcToken, chainflipVaultAddress],
      [approveTxData, swapTxData],
      [0]
    );
  }
  const receipt = await tx.wait();
};
export { swap };