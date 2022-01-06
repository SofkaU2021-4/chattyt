import React, { Component } from "react";
import { Link } from "react-router-dom";
import { signup, signInWithGoogle, signInWithGitHub } from "../helpers/auth";

export default class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      email: "",
      password: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.googleSignIn = this.googleSignIn.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  async handleSubmit(event) {
    event.preventDefault();
    this.setState({ error: "" });
    try {
      await signup(this.state.email, this.state.password);
    } catch (error) {
      this.setState({ error: error.message });
    }
  }

  async googleSignIn() {
    try {
      await signInWithGoogle();
    } catch (error) {
      this.setState({ error: error.message });
    }
  }

  render() {
    return (
      <div className="">
        <form className="mt-5 py-5 px-5" onSubmit={this.handleSubmit}>
          <h1>
            Sign Up to
            <Link className="" to="/">
              Chatty
            </Link>
          </h1>
          <p className="">Fill in the form below to create an account.</p>
          <div className="">
            <input
              className=""
              placeholder="Email"
              name="email"
              type="email"
              onChange={this.handleChange}
              value={this.state.email}
            ></input>
          </div>
          <div className="">
            <input
              className=""
              placeholder="Password"
              name="password"
              onChange={this.handleChange}
              value={this.state.password}
              type="password"
            ></input>
          </div>
          <div className="">
            {this.state.error ? (
              <p className="">{this.state.error}</p>
            ) : null}
            <button className=" px-5" type="submit">
              Sign up
            </button>
          </div>
          <p>You can also sign up with any of these services</p>
          <div className="">
            <button
              className=""
              type="button"
              onClick={this.googleSignIn}
            >
              Sign up with Google
            </button>
          </div>
          <hr></hr>
          <p>
            Already have an account? <Link to="/login">Login</Link>
          </p>
        </form>
      </div>
    );
  }
}
