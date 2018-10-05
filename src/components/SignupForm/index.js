import React, { Component } from "react";
import styled, { ThemeProvider } from "styled-components";

const Form = styled.form`
  margin: 0 auto;
  width: 50%;
  min-width: 400px;
  maxt-width: 800px;
  text-align: center;
  padding-top: 0px;
  padding-bottom: 90px;
  border: 1px solid ${props => props.theme.borderColor};
  color: ${props => props.theme.primaryColor};
  background-color: ${props => props.theme.secondaryColor};
`;

const Title = styled.h2`
  margin-top: 40px;
  margin-bottom: 70px;
  font-size: 1.5em;
  color: ${props => props.theme.primaryColor};
  background-color: ${props => props.theme.secondaryColor};
`;

const Button = styled.button`
  font-size: 1.5em;
  background-color: ${props => props.theme.primaryColor};
  color: ${props => props.theme.secondaryColor};
`;

const Input = styled.input`
  font-size: 1.45em;
  border: 1px solid ${props => props.theme.borderColor};
`;

export default class SignupForm extends Component {
  constructor(props) {
    super(props);

    this.theme = {
      secondaryColor: "white",
      primaryColor: "#282828",
      borderColor: "#ccc"
    };

    if (props.dark) {
      this.theme.secondaryColor = "#282828";
      this.theme.primaryColor = "#fff";
    }
  }

  signUp = e => {
    const email = new FormData(e.target).get("email");
    e.preventDefault();
    console.log(`New signup from ${email}`);
  };

  render() {
    return (
      <ThemeProvider theme={this.theme}>
        <Form onSubmit={this.signUp}>
          <Title> Sign up to my newsletter </Title>
          <Input type="email" name="email" />
          <Button> Sign up</Button>
        </Form>
      </ThemeProvider>
    );
  }
}
