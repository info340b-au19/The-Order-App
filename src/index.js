import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter} from 'react-router-dom';

//import and configure firebase here
import firebase from 'firebase/app';
import 'firebase/auth'; 
import 'firebase/database'

var firebaseConfig = {
    apiKey: "AIzaSyAzigPBTiunKxWmnAzHttexr3uRiaxnxjw",
    authDomain: "order-mingyieric.firebaseapp.com",
    databaseURL: "https://order-mingyieric.firebaseio.com",
    projectId: "order-mingyieric",
    storageBucket: "order-mingyieric.appspot.com",
    messagingSenderId: "461226707165",
    appId: "1:461226707165:web:2ee2b1169e867339b37334",
    measurementId: "G-2LMGNEDYR2"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

ReactDOM.render(<BrowserRouter><App /></BrowserRouter>, document.getElementById('root'));