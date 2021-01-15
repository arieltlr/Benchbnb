import React from 'react';
import GreetingContainer from "../components/greeting/greeting_container";
import { Route } from 'react-router-dom';
import LoginFormContainer from './session/login_form_container';
import SignupFormContainer from './session/signup_form_container';
const App = () => (
    <div>
        <h1>Bench BnB</h1>
        <GreetingContainer />
        <Route path="/signup" component={SignupFormContainer} />
        <Route path="/login" component={LoginFormContainer} />
    </div>
);

export default App;