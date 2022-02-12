import React from 'react';
import ReactDOM from 'react-dom';
import './assets/fonts/Proxima-Nova/FontsFree-Net-ProximaNova-Regular.ttf'
import './index.css'
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store";
import { Auth0Provider } from '@auth0/auth0-react';

const domain = process.env.REACT_APP_AUTH0_DOMAIN;
const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID;

ReactDOM.render(
    
    <Provider store={store}>
      {/* <Auth0Provider
        domain="dev-38ua6zwk.us.auth0.com"
        clientId="gyuU0tvEJsSnjjYbA5dFZBVYno8g1pyS"
        redirectUri={window.location.origin}
  > */}
        <Router>
            <App />
        </Router>
    
    {/* </Auth0Provider> */}
    </Provider>,
  document.getElementById('root')
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
