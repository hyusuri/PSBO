// import { Button } from "@material-ui/core";
import Head from "next/head"
import Style from '../styles/Home.module.css'
import Image from 'next/image'
import Input from "@material-tailwind/react/Input";
import Button from "@material-tailwind/react/Button";

import Card from "@material-tailwind/react/Card";
import CardHeader from "@material-tailwind/react/CardHeader";
import CardBody from "@material-tailwind/react/CardBody";
import CardFooter from "@material-tailwind/react/CardFooter";
import InputIcon from "@material-tailwind/react/InputIcon";
import H5 from "@material-tailwind/react/Heading5";

import React, { useContext, useState, Component } from "react"

class LoginPage extends Component {
  constructor() {
    super();
    this.state = {
      username: '',
      password: '',
      error: '',
    };

    this.handlePassChange = this.handlePassChange.bind(this);
    this.handleUserChange = this.handleUserChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.dismissError = this.dismissError.bind(this);
  }

  dismissError() {
    this.setState({ error: '' });
  }

  handleSubmit(evt) {
    alert('Username: ' + this.state.username + ' Password : ' + this.state.password);
      evt.preventDefault();
    // evt.preventDefault();

    if (!this.state.username) {
      return this.setState({ error: 'Username is required' });
    }
    if (!this.state.password) {
      return this.setState({ error: 'Password is required' });
    }
    return this.setState({ error: '' });
    
  }

  handleUserChange(evt) {
    this.setState({
      username: evt.target.value,
    });
  };

  handlePassChange(evt) {
    this.setState({
      password: evt.target.value,
    });

  }
  
    render() {
      return (
        <div>
        <Head>
            <title>IPB Scholar | Daftar</title>
        </Head>

        <form onSubmit={this.handleSubmit} className="sm:mx-10 md:mx-40 lg:mx-80 mt-20">
            <Card >
            {
            this.state.error &&
            <h3 data-test="error" onClick={this.dismissError}>
              <button onClick={this.dismissError}>✖</button>
              {this.state.error}
            </h3>
            }
                <CardHeader color="lightBlue" size="lg">
                    <H5 color="white">IPB Scholar</H5>
                </CardHeader>

                <CardBody >
                    <div className="mt-4 mb-8 px-4">
                        <InputIcon
                            type="text"
                            color="lightBlue"
                            placeholder="Username"
                            value={this.state.username} onChange={this.handleUserChange}
                        />
                    </div>
                    <div className="mb-4 px-4">
                        <InputIcon
                            type="password"
                            color="lightBlue"
                            placeholder="Password"
                            value={this.state.password} onChange={this.handlePassChange}
                        />
                    </div>
                </CardBody>
                <CardFooter>
                    <div className="flex justify-center">
                        <Button
                            color="lightBlue"
                            buttonType="link"
                            size="lg"
                            ripple="dark"
                        >
                            Login
                        </Button>
                    </div>
                </CardFooter>
            </Card>
        </form>
        </div>

      );
    }
  }
  
export default LoginPage;
