import React, { Component } from "react";

import "./Signin.components.styles.scss";

class SignIn extends Component {
  state = {
    email: "",
    password: ""
  };

  handleSubmit = e => {
    e.preventDefault();

    this.setState({
      email: "",
      password: ""
    });
  }

  handleEmail = ( e ) => {
    this.setState(
        {
            email: e.target.value 
        }
    )
  }

  handlePassword = ( e ) => {
    this.setState(
        {
            password: ( e.target.value ) 
        }
    )
  }

  render() {
    return (
      <div className="sign-in">
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>

        <form onSubmit={this.handleSubmit}>
          <input name="email" type="email" value={this.state.email} onChange={this.handleEmail} required />
          <label>Email</label>
          <input name="password" type="password" value={this.state.password} onChange={this.handlePassword}/>
          <label>Password</label>

          <input type="submit" value="Submit form" />
        </form>
      </div>
    );
  }
}
export default SignIn;
