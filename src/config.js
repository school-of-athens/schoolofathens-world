import { initializeApp } from "@firebase/app";
import { createContext, useState } from "react";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBjsg82duVqy8NwexQSdQskIhzv9N9xx2A",
  authDomain: "school-of-athens-122422.firebaseapp.com",
  projectId: "school-of-athens-122422",
  storageBucket: "school-of-athens-122422.appspot.com",
  messagingSenderId: "767259328870",
  appId: "1:767259328870:web:cbce73385e22ed49e3c8a7",
  measurementId: "G-THP2YBH90N",
};

const app = initializeApp(firebaseConfig);
const AuthContext = createContext(null);
const MessageContext = createContext(null);

const storage = getStorage(app);
const db = getFirestore(app);

const projectFiles = {
  logo: "https://firebasestorage.googleapis.com/v0/b/school-of-athens-122422.appspot.com/o/projectFiles%2Fimages%2Fclassical-building.png?alt=media&token=50c141e7-bfea-45ef-8469-61b7c3dc056b",
  acropolisAtAthens:
    "https://firebasestorage.googleapis.com/v0/b/school-of-athens-122422.appspot.com/o/projectFiles%2Fimages%2Facropolis_of_athens.jpg?alt=media&token=0d3b78b9-07b4-4493-8287-f8c4364eb138",
  aristotle:
    "https://firebasestorage.googleapis.com/v0/b/school-of-athens-122422.appspot.com/o/projectFiles%2Fimages%2Faristotle_in_soa.jpg?alt=media&token=c4401049-f1e3-43f4-a67a-e1eb846f6868",
  bazarOfAthens:
    "https://firebasestorage.googleapis.com/v0/b/school-of-athens-122422.appspot.com/o/projectFiles%2Fimages%2Fbazar_of_athens.jpg?alt=media&token=4ceeb8ca-1a4c-4ef0-b2fe-77d821f7b323",
  blockchain:
    "https://firebasestorage.googleapis.com/v0/b/school-of-athens-122422.appspot.com/o/projectFiles%2Fimages%2Fblockchain.png?alt=media&token=af76a06e-d900-4ba7-8226-ff5d767ce335",
  deathOfSocrates:
    "https://firebasestorage.googleapis.com/v0/b/school-of-athens-122422.appspot.com/o/projectFiles%2Fimages%2Fdeath_of_socrates.jpg?alt=media&token=cc487709-5d1b-48e7-bc06-d1ba4dc2818e",
  decentralization:
    "https://firebasestorage.googleapis.com/v0/b/school-of-athens-122422.appspot.com/o/projectFiles%2Fimages%2Fdecentralization.svg?alt=media&token=584b0cfb-b8b5-4407-b611-09cac2b3aaac",
  google:
    "https://firebasestorage.googleapis.com/v0/b/school-of-athens-122422.appspot.com/o/projectFiles%2Fimages%2Fgoogle_logo.svg?alt=media&token=9b140921-6897-43eb-a4bc-55e4db9a98ec",
  groups:
    "https://firebasestorage.googleapis.com/v0/b/school-of-athens-122422.appspot.com/o/projectFiles%2Fimages%2Fgroup.jfif?alt=media&token=9e003796-3195-4de4-9a52-e0463ca95765",
  periclesFuneralOration:
    "https://firebasestorage.googleapis.com/v0/b/school-of-athens-122422.appspot.com/o/projectFiles%2Fimages%2Fpericles_funeral_oration.png?alt=media&token=812d8736-8ae3-47b5-96f5-d04927061cf1",
  plato:
    "https://firebasestorage.googleapis.com/v0/b/school-of-athens-122422.appspot.com/o/projectFiles%2Fimages%2Fplato_in_soa.jpg?alt=media&token=a9b6650d-99d9-42c5-b0ec-f4adbc0fe474",
  entryOfKingOthon:
    "https://firebasestorage.googleapis.com/v0/b/school-of-athens-122422.appspot.com/o/projectFiles%2Fimages%2Fthe_entry_of_king_othon_of_greece_in_athens.jpg?alt=media&token=1ff2e9b7-39ab-418a-982e-7a04ec257152",
  schoolOfAthens:
    "https://firebasestorage.googleapis.com/v0/b/school-of-athens-122422.appspot.com/o/projectFiles%2Fimages%2Fthe_school_of_athens.jpg?alt=media&token=9aa05cf7-e20d-4919-a006-77e425425ce3",
  schoolOfAthensCropped:
    "https://firebasestorage.googleapis.com/v0/b/school-of-athens-122422.appspot.com/o/projectFiles%2Fimages%2Fthe_school_of_athens_cropped.jpg?alt=media&token=693a8941-6bf4-44fc-a1d0-b0e159af9039",
  schoolOfAthensDraft:
    "https://firebasestorage.googleapis.com/v0/b/school-of-athens-122422.appspot.com/o/projectFiles%2Fimages%2Fthe_school_of_athens_draft.jpg?alt=media&token=5212af2c-470f-4324-9086-8df86e7a6863",
};

export { app, storage, db, AuthContext, MessageContext, projectFiles };
