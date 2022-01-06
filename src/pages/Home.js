import React, { Component } from "react";
import Header from "../components/Header";

import { Link } from "react-router-dom";

export default class HomePage extends Component {
  render() {
    return (
      <div className="w-full">
        <Header />
        <section>
          <div className="w-full">
            <div className="flex flex-col w-full  justify-between max-w-xl mx-auto">
              <h1 className=" text-center text-6xl">Welcome to Chatty</h1>
              <p className="text-center text-2xl">
                A great place to share your thoughts with friends
              </p>
              <div className="mt-20">
                <Link className="btn__btn-primary-px-5-mr-3" to="/signup">
                  Create New Account
                </Link>
                <Link className="btn px-5" to="/login">
                  Login to Your Account
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}