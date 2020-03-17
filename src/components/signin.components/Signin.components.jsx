import React, { Component } from "react";
import FormInput from "../form-input/Form-input.component";
import CustomButton from "../custom-button.component/Custom-button.component";

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
  };

  handleChange = e => {
    const { name, value } = e.target;

    this.setState({
      [name]: value
    });
  };

  render() {
    return (
      <div className="sign-in title">
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput
            name="email"
            type="email"
            value={this.state.email}
            handleChange={this.handleChange}
            label="email"
            required
          />
          <FormInput
            name="password"
            type="password"
            value={this.state.password}
            label="password"
            handleChange={this.handleChange}
          />
          <CustomButton type="submit"> Sign In</CustomButton>
        </form>
      </div>
    );
  }
}
export default SignIn;
