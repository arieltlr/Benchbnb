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
    this.handleUsername=this.handleUsername.bind(this);
    this.handlePassword = this.handlePassword.bind(this);
    }

   

    handleSubmit(e){
        debugger
        e.preventDefault();
        const user = Object.assign({}, this.state);
        debugger
        this.props.processForm(user)
        .then(() => this.props.history.push('/'));
    }

    handleUsername(e){
        this.setState({username: e.target.value})
    }
    handlePassword(e) {
        this.setState({ password: e.target.value })
    }

    render(){
        const displayText = this.props.formType === 'login' ? "Login Page" : "Signup Page";
        const linkText = this.props.formType === 'login' ? "Signup Page" : "Login Page";
        const otherLink = this.props.formType === 'login' ? "/signup" : "/login";
        const redirectLink = this.props.formType === 'login' ? "/login" : "/signup";
        const errors = this.props.errors.map(error =>{ 
            return <li>{error}</li>
         })
        debugger
        return (
            <div>
                <h1>{displayText}</h1>
                    <form className="session-form" onSubmit={this.handleSubmit}>
                        <label>Username: 
                            <br/>
                        <input type="text" onChange={this.handleUsername}/>
                        </label>
                        <br/>
                        <label>Password: 
                            <br/>
                            <input type="password" onChange={this.handlePassword}/>
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
                        {this.props.currentUser ? <Redirect to="/" /> : <Redirect to={redirectLink} />}
                    </form>
            </div>
        )

    }
}

export default SessionForm;