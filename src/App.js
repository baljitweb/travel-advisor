import logo from "./logo.svg";
import "./App.css";

// import firebase from "./firebaseconfig";
import { initializeApp } from "firebase/app";
import { getFirestore, doc, getDoc } from "firebase/firestore/lite";

function App() {
  // const firebaseApp = firebase.apps[0];
  const firebaseApp = initializeApp({
    apiKey: "AIzaSyCe7urObgdMYYSuYr1NnEaHNG9OSEoFEoQ",
    authDomain: "travel-advisor-9840c.firebaseapp.com",
    projectId: "travel-advisor-9840c",
    storageBucket: "travel-advisor-9840c.appspot.com",
    messagingSenderId: "11565646389",
    appId: "1:11565646389:web:6c65bc93bcff2eae43677c",
    measurementId: "G-F18FLJ6KZM",
  });
  const db = getFirestore(firebaseApp);

  async function loadCity(name) {
    const cityDoc = doc(db, `cities/${name}`);
    const snapshot = await getDoc(cityDoc);
    console.log(snapshot)
    return {
      id: snapshot.id,
      ...snapshot.data(),
    };
  }
  loadCity('london');

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <pre>{JSON.stringify(firebaseApp.options, null, 2)}</pre>
        <pre>Baljit Singh</pre>
      </header>
    </div>
  );
}

export default App;
