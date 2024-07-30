import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { ConnectWalletInterface } from "../../types/types";
import { Umbra, StealthKeyRegistry } from "@umbracash/umbra-js";
import { ethers } from "ethers";

const initialState: ConnectWalletInterface = {
    provider: null,
    signer: null,
    address: null,
    umbra: null,
    stealthKeyRegistry: null,
    loading: false,
    error: null
}

type ConnectWalletReturnType = {
    provider: ethers.providers.Web3Provider;
    signer: ethers.providers.JsonRpcSigner;
    address: string;
    umbra: Umbra;
    stealthKeyRegistry: StealthKeyRegistry;
} | undefined;

export const connectWallet = createAsyncThunk<ConnectWalletReturnType, void, {}>("connectWallet", async (_, { rejectWithValue }) => {
    try {
        if (typeof (window as any).ethereum != "undefined") {
            console.log("ConnectWallet: connected");
            
            const web3Provider = new ethers.providers.Web3Provider((window as any).ethereum);
            console.log(web3Provider);


            const signer = web3Provider.getSigner();
            console.log(signer);
            const address = await signer.getAddress();
            const network = await web3Provider.getNetwork();
            const umbra = new Umbra(web3Provider, network.chainId);
            const stealthKeyRegistry = new StealthKeyRegistry(web3Provider);
            console.log(web3Provider, signer, address, umbra, stealthKeyRegistry)
            return { provider: web3Provider, signer, address, umbra, stealthKeyRegistry };
        }
    } catch (error) {
        return rejectWithValue(error);
    }
});

const connectWalletSlice = createSlice({
    name: "connectWallet",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(connectWallet.pending, (state, action) => {
            state.loading = true;
        });
        builder.addCase(connectWallet.fulfilled, (state, action) => {
            console.log(action.payload);
            state.loading = false;
            state.provider = action.payload?.provider ?? null;
            state.signer = action.payload?.signer ?? null;
            state.address = action.payload?.address ?? null;
            state.umbra = action.payload?.umbra as any ?? null;
            state.stealthKeyRegistry = action.payload?.stealthKeyRegistry as any ?? null;
        });
        builder.addCase(connectWallet.rejected, (state, action) => {
            console.log("error: ")
            state.loading = false;
            state.error = action.payload as string;
        });
    }
});

export default connectWalletSlice.reducer;



// const sepoliaChainParams = {
//     chainId: numberToHex(sepolia.id),
//     chainName: sepolia.name,
//     nativeCurrency: {
//         name: sepolia.nativeCurrency.name,
//         symbol: sepolia.nativeCurrency.symbol,
//         decimals: sepolia.nativeCurrency.decimals,
//     },
//     rpcUrls: sepolia.rpcUrls.default.http,
//     blockExplorerUrls: [sepolia.blockExplorers.default.url],
// };

// 0x5ccD6B18468fe0Be6E9CAd0fc60D4Ae94159b85b
// 0x5ccD6B18468fe0Be6E9CAd0fc60D4Ae94159b85b

// await (window as any).ethereum.request({
            //   method: 'wallet_addEthereumChain',
            //   params: [sepoliaChainParams],
            // });
            // const userChainId = await (window as any).ethereum.request({ method: "eth_chainId" });
            // if (userChainId != sepoliaChainParams.chainId) {
            //   console.log("Failed to switch chain");
            //   return;
            // }
            // await (window as any).ethereum.request({ method: "eth_requestAccounts" });