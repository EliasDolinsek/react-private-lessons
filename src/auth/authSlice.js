import { createSlice } from "@reduxjs/toolkit";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth"

export const AUTH_SIGNED_OUT_STATE = "signed_out"
export const AUTH_SIGNED_IN_STATE = "signed_in"
export const AUTH_LOADING_STATE = "loading"

export const authSlice = createSlice({
    name: 'auth',
    initialState: { authState: AUTH_SIGNED_OUT_STATE, user: null },
    reducers: {
        signInWithGoogle: (state, action) => {
            const provider = new GoogleAuthProvider()
            const auth = getAuth()

            signInWithPopup(auth, provider)
                .then((result) => {
                    const credential = GoogleAuthProvider.credentialFromResult(result);
                    const token = credential.accessToken;
                    const user = result.user;
                }).catch((error) => {
                    // Handle Errors here.
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    const email = error.email;
                    const credential = GoogleAuthProvider.credentialFromError(error);
                });
        },
        signOut: (state, action) => {
            console.log("SIGN OUT")
            state.authState = AUTH_SIGNED_OUT_STATE
        }
    }
});

export const { signInWithGoogle, signout } = authSlice.actions
export default authSlice.reducer