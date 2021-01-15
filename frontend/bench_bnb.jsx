import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import { signup, login, logout} from "../frontend/actions/session_actions"
import Root from "../frontend/components/root";





document.addEventListener("DOMContentLoaded", () => {
    const root = document.getElementById("root")
    const store = configureStore()
    window.signup = signup;
    window.login = login;
    window.logout = logout;
    window.getState = store.getState;
    window.dispatch = store.dispatch;
    debugger
    ReactDOM.render(<Root store={store}/>,root)
})