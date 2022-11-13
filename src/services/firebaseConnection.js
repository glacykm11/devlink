import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB2nlulwOogzXQ6KmFyRArFoEqCrVOplzA",
  authDomain: "devlinks-43c54.firebaseapp.com",
  projectId: "devlinks-43c54",
  storageBucket: "devlinks-43c54.appspot.com",
  messagingSenderId: "985077643019",
  appId: "1:985077643019:web:523023683b05a4463a940e",
  measurementId: "G-49KK7NVLYT",
};

const firebaseApp = initializeApp(firebaseConfig);

const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);

export { db, auth };
