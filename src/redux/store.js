import { configureStore } from "@reduxjs/toolkit";
import LaunchReducer from "./features/launchSlice";

export default configureStore({
    reducer: {
        launch: LaunchReducer,
    },
});
