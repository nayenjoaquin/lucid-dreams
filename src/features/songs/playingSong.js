import { createSlice } from "@reduxjs/toolkit";

export const songSlice = createSlice({
    name: "song",
    initialState: null,
    reducers: {
        setSong: (state, action) => {
            return action.payload
        },
    },
});

export const  {setSong} = songSlice.actions;
export default songSlice.reducer;