import React from 'react';
import ReactDOM from 'react-dom';
import {login, logout, signup} from './util/session_api_util';
import configureStore from './store/store';

window.login = login;
window.logout = logout;
window.signup = signup;
const store = configureStore();
window.store = store;
window.getState = store.getState;
window.dispatch = store.dispatch;

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');
  // const store = configureStore();
  ReactDOM.render(<h1>111</h1>, root);
});
