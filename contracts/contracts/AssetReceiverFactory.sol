// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.24;

// Uncomment this line to use console.log
// import "hardhat/console.sol";
import "./AssetReceiver.sol";

contract AssetReceiverFactory {
    address payable public owner;

    // hash - 0x6f5c3fd72a76cee4eae5b19c7d170e5ffb7f132ef0f26296a1f46ec2bb3faaf2
    event AssetReceiverDeployed(address indexed assetReceiverAddress, address indexed owner, address token, uint256 chainId);
    constructor()  {
        owner = payable(msg.sender);
    }

    function deploy(bytes32 _salt, address token, uint256 chainId)
        public
        returns (address)
    {
        AssetReceiver assetReceiver = new AssetReceiver{salt: _salt}(msg.sender, token, chainId);
        emit AssetReceiverDeployed(address(assetReceiver), msg.sender, token, chainId);
        return address(assetReceiver);
    }
}

