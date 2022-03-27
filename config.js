import firebase from 'firebase'
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBkJvZuEBIev6OzxNxeXPf-6NO8rxkfidI",
  authDomain: "project60-school-attende-f06f0.firebaseapp.com",
  databaseURL: "https://project60-school-attende-f06f0-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "project60-school-attende-f06f0",
  storageBucket: "project60-school-attende-f06f0.appspot.com",
  messagingSenderId: "340331279372",
  appId: "1:340331279372:web:2dd1d1abd08af497adaa29"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export default firebase.database();