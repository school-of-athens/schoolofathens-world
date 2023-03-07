import { getAuth } from "@firebase/auth";
import { initializeApp } from "@firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyBjsg82duVqy8NwexQSdQskIhzv9N9xx2A",
    authDomain: "school-of-athens-122422.firebaseapp.com",
    projectId: "school-of-athens-122422",
    storageBucket: "school-of-athens-122422.appspot.com",
    messagingSenderId: "767259328870",
    appId: "1:767259328870:web:cbce73385e22ed49e3c8a7",
    measurementId: "G-THP2YBH90N"
};

export const app = initializeApp(firebaseConfig);