import { createSlice } from "@reduxjs/toolkit";

export const AUTH_SIGNED_OUT_STATE = "signed_out"
export const AUTH_SIGNED_IN_STATE = "signed_in"
export const AUTH_LOADING_STATE = "loading"

export const authSlice = createSlice({
    name: 'auth',
    initialState: { authState: AUTH_SIGNED_OUT_STATE, user: null },
    reducers: {
        signInWithGoogle: (state, action) => {
            console.log("SIGN IN")
            state.authState = AUTH_SIGNED_IN_STATE
        },
        signOut: (state, action) => {
            console.log("SIGN OUT")
            state.authState = AUTH_SIGNED_OUT_STATE
        }
    }
});

export const { signInWithGoogle, signout } = authSlice.actions
export default authSlice.reducer