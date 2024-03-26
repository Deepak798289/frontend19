import { configureStore } from "@reduxjs/toolkit";

import authSliceReducer from "./Slices/authSlices";

const store = configureStore({
    reducer: {
        auth: authSliceReducer,
        
    },
    devTools: true
});

export default store;
