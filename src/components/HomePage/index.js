import React, { Component } from "react";
import SignupForm from "../SignupForm";
import "../../global-styles";

export default class HomePage extends Component {
  render() {
    return (
      <main>
        <div className="container">
          <SignupForm />
        </div>
        <div className="container dark">
          <SignupForm dark />
        </div>
      </main>
    );
  }
}
