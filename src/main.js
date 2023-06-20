import { createApp } from 'vue'
import App from './App.vue'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDAUXGlqyMEdJsPDofy_QleC8IhHw4Tk1U",
  authDomain: "frontend-project-5f69e.firebaseapp.com",
  projectId: "frontend-project-5f69e",
  storageBucket: "frontend-project-5f69e.appspot.com",
  messagingSenderId: "546779369246",
  appId: "1:546779369246:web:abfe88861cfc70a0b6830f"
};

// Initialize Firebase
initializeApp(firebaseConfig);
createApp(App).mount('#app')
