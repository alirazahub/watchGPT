import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyD9F9_FoQ8oaalfXXuJ4N12Vhy6onbXFqs",
  authDomain: "test-app-9d1b8.firebaseapp.com",
  databaseURL: "https://test-app-9d1b8-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "test-app-9d1b8",
  storageBucket: "test-app-9d1b8.appspot.com",
  messagingSenderId: "1070667080410",
  appId: "1:1070667080410:web:863a5441b356dd49f43be3",
  measurementId: "G-QCCBYLJ624"
};


const app = initializeApp(firebaseConfig);
export default app;
