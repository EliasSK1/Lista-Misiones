import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios";

export const getLaunches = createAsyncThunk("launches/getLaunches", async () => {
    return axios.get("https://api.spacexdata.com/v3/launches")
        .then((response) => response.data
        );
});

const launchSlice = createSlice(({
    name: "launches",
    initialState: {
        launches: [],
        loading: false
    },
    extraReducers: (builder)=> {
        builder
        .addCase(getLaunches.pending, (state, action) => {
            state.loading = true;
        })
        .addCase(getLaunches.fulfilled, (state, action) => {
            state.loading = false;
            state.launches = action.payload;
        })
        .addCase(getLaunches.rejected, (state, action) => {
            state.loading = false;
        })
    },
}));

export default launchSlice.reducer