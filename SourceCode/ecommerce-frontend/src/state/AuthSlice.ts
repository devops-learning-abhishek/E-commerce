import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { api } from "../config/Api";
import { User } from "../types/UserTypes";

export const sendLoginSignupOtp = createAsyncThunk("/auth/sendLoginSignupOtp",
    async ({ email }: { email: string }, { rejectWithValue }) => {
        try {
            const response = await api.post("/auth/sent/login-signup-otp", { email })
            console.log("login otp : ", response)
        } catch (error: any) {
            console.log("error !----", error);
            return rejectWithValue(error.response?.data?.message || error.message || 'Failed to send OTP');
        }
    }
)

export const signin = createAsyncThunk<any, any>("/auth/signin",
    async (loginRequest, { rejectWithValue }) => {
        try {
            const response = await api.post("/auth/signin", loginRequest)
            console.log("login user : ", response.data)
            const jwt = response.data.jwt;
            localStorage.setItem("jwt", jwt)
            return jwt;
        } catch (error: any) {
            console.log("error !----", error);
            return rejectWithValue(error.response?.data?.message || error.message || 'Failed to login');
        }
    }
)

export const signup = createAsyncThunk<any, any>("/auth/signup",
    async (signupRequest, { rejectWithValue }) => {
        try {
            const response = await api.post("/auth/signup", signupRequest)
            console.log("signup user : ", response.data)
            const jwt = response.data.jwt;
            localStorage.setItem("jwt", jwt)
            return jwt;
        } catch (error: any) {
            console.log("error !----", error);
            return rejectWithValue(error.response?.data?.message || error.message || 'Failed to signup');
        }
    }
)

export const fetchUserProfile = createAsyncThunk<any, any>("/auth/fetchUserProfile",
    async ({ jwt }, { rejectWithValue }) => {
        try {
            const response = await api.get("/api/user/profile", {
                headers: {
                    Authorization: `Bearer ${jwt}`,
                }
            })
            console.log("user profile : ", response.data)
            return response.data;
        } catch (error: any) {
            console.log("error !----", error);
            return rejectWithValue(error.response?.data?.message || error.message || 'Failed to fetch user details');
        }
    }
)

export const logout = createAsyncThunk<any, any>("/auth/logout",
    async (navigate, { rejectWithValue }) => {
        try {
            localStorage.clear()
            console.log("logout successful")
            navigate("/")
        } catch (error: any) {
            console.log("error !---", error);
            rejectWithValue(error.message)
        }
    }
)

interface AuthState {
    jwt: string | null,
    otpSent: boolean,
    isLoggedIn: boolean,
    user: User | null,
    loading: boolean,
}

const initialState: AuthState = {
    jwt: null,
    otpSent: false,
    isLoggedIn: false,
    user: null,
    loading: false,
}

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(sendLoginSignupOtp.pending, (state) => {
            state.loading = true;
        })
        builder.addCase(sendLoginSignupOtp.fulfilled, (state) => {
            state.loading = false;
            state.otpSent = true;
        })
        builder.addCase(sendLoginSignupOtp.rejected, (state) => {
            state.loading = false;
        })

        builder.addCase(signin.fulfilled, (state, action) => {
            state.jwt = action.payload
            state.isLoggedIn = true
        })

        builder.addCase(signup.fulfilled, (state, action) => {
            state.jwt = action.payload
            state.isLoggedIn = true
        })

        builder.addCase(fetchUserProfile.fulfilled, (state, action) => {
            state.user = action.payload
            state.isLoggedIn = true
        })

        builder.addCase(logout.fulfilled, (state) => {
            state.jwt = null
            state.isLoggedIn = false
            state.user = null
        })
    },
})

export default authSlice.reducer;