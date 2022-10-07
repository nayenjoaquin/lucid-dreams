import { db } from "../firebase";
import { collection, addDoc } from "firebase/firestore";

export const postSong = async (song) => {
    const songs = collection(db, "songs");
    await addDoc(songs, song)
};
