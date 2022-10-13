import { configureStore } from "@reduxjs/toolkit";
import playlistSlice from "../features/songs/playlistSlice";
import songSlice from "../features/songs/playingSong";

export const store = configureStore({
    reducer: {
        playlist: playlistSlice,
        song: songSlice,
    },
});