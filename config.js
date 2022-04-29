import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyARf5tTMIXa4Qobo2kfLfFOJ6GDwbwxADY",
  authDomain: "pro-c60-c4657.firebaseapp.com",
  databaseURL: "https://pro-c60-c4657-default-rtdb.firebaseio.com",
  projectId: "pro-c60-c4657",
  storageBucket: "pro-c60-c4657.appspot.com",
  messagingSenderId: "275540242827",
  appId: "1:275540242827:web:61dbe2fe8fe565d892ff8e"
};

if(!firebase.apps.length)
firebase.initializeApp(firebaseConfig);

export default firebase.database();