import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { api } from "../../config/Api";

export const fetchSellerProfile = createAsyncThunk("/seller/fetchSellerProfile",
    async (jwt: string, { rejectWithValue }) => {
        try {
            const response = await api.get("/seller/profile", {
                headers: {
                    Authorization: `Bearer ${jwt}`,
                },
            })
            console.log("fetch seller profile : ", response.data)
            return response.data;
        } catch (error) {
            console.log("error !----", error);
            return rejectWithValue("Failed to fetch sellers");
        }
    }
)

interface SellerState {
    sellers: any,
    selectedSeller: any,
    profile: any,
    report: any,
    loading: boolean,
    error: any
}

const initialState: SellerState = {
    sellers: [],
    selectedSeller: null,
    profile: null,
    report: null,
    loading: false,
    error: null
}

const sellerSlice = createSlice({
    name: "seller",             //same name as above createAsyncThunk("/seller")
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchSellerProfile.pending, (state) => {
            state.loading = true;
        })
        .addCase(fetchSellerProfile.fulfilled, (state, action) => {
            state.loading = false;
            state.profile = action.payload;
        })
        .addCase(fetchSellerProfile.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
        })
    },
})

export default sellerSlice.reducer;