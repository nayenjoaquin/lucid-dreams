import { db } from "../firebase";
import { collection, getDocs } from "firebase/firestore";

export const listSongs = async () => {
    const songs = collection(db, "songs");
    const songsSnapshot = await getDocs(songs);
    const songsList = songsSnapshot.docs.map((doc) => doc.data());
    return songsList;
};
