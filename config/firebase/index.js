import firebase from "firebase/compat/app";
import "firebase/compat/auth";

const app = firebase.initializeApp({
  apiKey: "AIzaSyDK1EOeWyou4zGwYv3wPQlVfYbC1D8um98",
  authDomain: "auth-development-413ad.firebaseapp.com",
  projectId: "auth-development-413ad",
  storageBucket: "auth-development-413ad.appspot.com",
  messagingSenderId: "936820103116",
  appId: "1:936820103116:web:3cef28d55a3d19841eaf69",
});

export const auth = app.auth();
export default app;
