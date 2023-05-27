
import { db } from "../services/firebase";
import { collection, getDocs } from "firebase/firestore";

const cRef = collection(db, "testCollection");

try {
    const snap = getDocs(cRef);
    console.log(snap.exists());
}
catch(error) {
    console.log(error)
}