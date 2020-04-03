import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router} from "react-router-dom";

window.$resume_url = "https://drive.google.com/file/d/144uWqd-PyC7_9tkN_zvEbR-IYBL-HdAd/view";

ReactDOM.render(
    <Router basename={process.env.PUBLIC_URL}>
        <React.StrictMode>
        <App />
        </React.StrictMode>
    </Router>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
