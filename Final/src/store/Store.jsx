import { configureStore } from "@reduxjs/toolkit";
import { authSlice } from "./slice/auth/index.jsx";

const store = configureStore({
    reducer: {
        auth: authSlice.reducer // Используйте .reducer
    }
});

export const AppDispatch = store.dispatch;
export const RootState = store.getState;

export default store;

