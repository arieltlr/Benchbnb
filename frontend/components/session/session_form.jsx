import React from 'react';
import { Link, Redirect } from 'react-router-dom';

class SessionForm extends React.Component{

    constructor(props) {
        super(props)
        this.state = {
            username: "",
            password: "",
        }
        debugger
    this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({username: event.target.value})
    }

    handleSubmit(e){
        debugger
        e.preventDefault();
        const user = Object.assign({}, this.state);
        debugger
        this.props.processForm(user);
    }

    render(){
        const displayText = this.props.formType === 'login' ? "Login Page" : "Signup Page";
        const linkText = this.props.formType === 'login' ? "Signup Page" : "Login Page";
        const otherLink = this.props.formType === 'login' ? "/signup" : "/login";
        const errors = this.props.errors.map(error =>{ 
            <li>{error}</li>
         })
        debugger
        return (
            <div>
                <h1>{displayText}</h1>
                    <form className="session-form" onSubmit={this.handleSubmit}>
                        <label>Username: 
                            <br/>
                        <input type="text"/>
                        </label>
                        <br/>
                        <label>Password: 
                            <br/>
                            <input type="password"/>
                        </label>
                        <br/>
                        <button>Submit</button>
                        <br/>
                        <Link
                            to={otherLink}
                            >{linkText}</Link>
                        <ul>
                            {errors}
                        </ul>

                    </form>
            </div>
        )

    }
}

export default SessionForm;