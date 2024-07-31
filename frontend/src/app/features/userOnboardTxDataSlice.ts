import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { PublicTransactionHistory } from "../../types/types";

type initialPublicTransactionDataType = {
    loading: boolean;
    publicTransactionHistory: PublicTransactionHistory[] | null;
    error: string | null;
}
const initialPublicTransactionData: initialPublicTransactionDataType = {
    loading: false,
    publicTransactionHistory: null,
    error: null
}

export const fetchOnBoardingTxData = createAsyncThunk("fetchOnBoardingTxData", async ({ contract }: { contract: string }, { rejectWithValue }) => {
    try {
        let publicTransactionHistory: PublicTransactionHistory[] = [];
        const data = (await axios.get(`http://localhost:3000/get-transfer-info?address=${contract}`)).data || [];
        console.log(data);

        for (let i = 0; i < data.length; i++) {
            const publicTransaction: PublicTransactionHistory = {
                sender: data[i]?.from,
                chain: data[i]?.chain,
                date: data[i]?.timestamp,
                asset: data[i]?.dstToken,
                amount: data[i]?.amount,
                txnhash: data[i]?.transactionHash,
                type: "public"
            }
            publicTransactionHistory.push(publicTransaction);
        }

        return { publicTransactionHistory };
    } catch (error) {
        return rejectWithValue(error);
    }
})

const onBoardingTxData = createSlice({
    name: "onBoardingData",
    initialState: initialPublicTransactionData,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchOnBoardingTxData.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(fetchOnBoardingTxData.fulfilled, (state, action) => {
            state.loading = false;
            state.publicTransactionHistory = action.payload.publicTransactionHistory as PublicTransactionHistory[]
        });
        builder.addCase(fetchOnBoardingTxData.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload as string;
        });
    }
});

export default onBoardingTxData.reducer;