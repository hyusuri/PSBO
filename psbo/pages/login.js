// import { Button } from "@material-ui/core";
import Head from "next/head";
import Style from "../styles/Home.module.css";
import Image from "next/image";
import Input from "@material-tailwind/react/Input";
import Button from "@material-tailwind/react/Button";
import { MdLock } from "react-icons/md";

import Card from "@material-tailwind/react/Card";
import CardHeader from "@material-tailwind/react/CardHeader";
import CardBody from "@material-tailwind/react/CardBody";
import CardFooter from "@material-tailwind/react/CardFooter";
import InputIcon from "@material-tailwind/react/InputIcon";
import H5 from "@material-tailwind/react/Heading5";

import React, { useContext, useState, Component } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import { useCallback, useEffect } from "react";
import { useRouter } from "next/router";

const LoginPage = () => {
  const [user, setUser] = useState(null);

  const router = useRouter();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const dismissError = () => {
    setError({ error: "" });
  };
  const handleUserChange = (evt) => {
    setUsername(evt.target.value);
  };
  const handlePassChange = (evt) => {
    setPassword(evt.target.value);
  };

  const handleSubmit = async (evt) => {
    evt.preventDefault();
    const postData = {
      Username: username,
      Password: password,
    };
    if (username === "") {
      alert("Username is required");
      // return setError({ error: "Username is required" });
    }
    if (password === "") {
      alert("Password is required");
      // return setState({ error: "Password is required" });
    }
    const axiosConfig = {
      headers: {
        "X-IPBAPI-TOKEN": "Bearer 1f70343f-5478-38da-8aa7-47d662d2078a",
        "Content-Type": "application/json",
      },
    };
    const api_call = await axios
      .post(
        "https://api.ipb.ac.id/v1/Authentication/LoginMahasiswa",
        postData,
        axiosConfig
      )
      .then((res) => {
        console.log("Login Success", res.data);
        const { Token, Username } = res.data;
        Cookies.set("token", Token, { sameSite: "strict", expires: 1 });
        Cookies.set("username", Username, { sameSite: "strict", expires: 1 });
        setError({ error: "" });

        Cookies.set("counter", 0);

        setUser(localStorage.getItem("userAuth"));

        localStorage.setItem("userAuth", res.data.Username);
        localStorage.setItem("token", Token);

        router.push("/home");
      })
      .catch((err) => {
        console.log("API login error : ", err);
        setError({ error: "Something went wrong" });
      });
  };

  useEffect(() => {
    // Prefetch the dashboard page
    router.prefetch("/home");
  }, []);

  return (
    <div className="login grid justify-items-center">
      <Head>
        <title>IPB Scholar | Login</title>
      </Head>

      <form
        onSubmit={handleSubmit}
        className="sm:mx-10 md:mx-40 lg:mx-80 mt-32"
      >
        <Card>
          <CardHeader color="lightBlue" size="lg">
            <H5 color="gray">IPB Scholar</H5>
          </CardHeader>

          <CardBody>
            <div className="mt-4 mb-8 px-4">
              <InputIcon
                type="text"
                color="lightBlue"
                placeholder="Username"
                value={username}
                onChange={handleUserChange}
              />
            </div>
            <div className="mb-4 px-4">
              <InputIcon
                type="password"
                color="lightBlue"
                placeholder="Password"
                value={password}
                onChange={handlePassChange}
              >
                {/* <MdLock size="20px"></MdLock> */}
              </InputIcon>
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
};

export default LoginPage;
