import { createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "../../config/Api";

export const sellerLogin = createAsyncThunk<any, any>("/seller/sellerLogin",
    async (loginRequest, { rejectWithValue }) => {
        try {
            const response = await api.post("/seller/login", loginRequest)
            console.log("signin : ", response.data)
            const jwt = response.data.jwt;
            localStorage.setItem("jwt", jwt);
        } catch (error) {
            console.log("error !----", error);
            return rejectWithValue(error || 'Failed to login');
        }
    }
)