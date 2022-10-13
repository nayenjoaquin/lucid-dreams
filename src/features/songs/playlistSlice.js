import { createSlice } from "@reduxjs/toolkit";

export const playlistSlice = createSlice({
    name: "playlist",
    initialState: [],
    reducers: {
        addSong: (state, action) => {
            if (state.some(song => song.id === action.payload.id)) {
                return state
            } else {
                state.push(action.payload)
            }
        },
    },
});

export const  {addSong} = playlistSlice.actions;
export default playlistSlice.reducer;