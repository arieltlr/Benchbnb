import React from 'react';
import { Link } from 'react-router-dom';

class Greeting extends React.Component {
    constructor(props){
        super(props)
    }



    render(){
        debugger
        if (this.props.currentUser){
            debugger
            return (
                <div>
                    <h1>Hello, {this.props.currentUser}</h1>
                    <h2>Explore all the benches the world has to offer</h2>
                    <button onClick={this.props.logout}>Logout</button>
                </div>
            )
        } else {
            return (
                <div>
                    <h2>Welcome!</h2>
                    <Link to="/signup">Sign up</Link>
                    <br/>
                    <Link to="/login">Login</Link>
                </div>
            )
        }
    }

}

export default Greeting;