import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import {Provider} from "react-redux";
import {store} from "./store";

import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyD1QV8W2VfTQLaZ8hwDTVw8oj2gUb3PIJg",
  authDomain: "react-private-lessons.firebaseapp.com",
  projectId: "react-private-lessons",
  storageBucket: "react-private-lessons.appspot.com",
  messagingSenderId: "1044337351651",
  appId: "1:1044337351651:web:79931dee827945d0cb1ed6"
};

export const app = initializeApp(firebaseConfig);

ReactDOM.render(
    <Provider store={store}>
        <App/>,
    </Provider>,
    document.getElementById('root')
);