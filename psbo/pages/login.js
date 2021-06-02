// import { Button } from "@material-ui/core";
import Head from "next/head"
import Style from '../styles/Home.module.css'
import Image from 'next/image'
import React from "react";
import Input from "@material-tailwind/react/Input";
import Button from "@material-tailwind/react/Button";

import Card from "@material-tailwind/react/Card";
import CardHeader from "@material-tailwind/react/CardHeader";
import CardBody from "@material-tailwind/react/CardBody";
import CardFooter from "@material-tailwind/react/CardFooter";
import InputIcon from "@material-tailwind/react/InputIcon";
import H5 from "@material-tailwind/react/Heading5";

const login = () => {
    return (
    <>
        <Head>
            <title>IPB Scholar | Daftar</title>
        </Head>
        {/* <div>
            <h1 className="text-4xl m-10">Daftar Beasiswa</h1> 
        </div> */}

        <div className="md:mx-80 mt-20 sm:mx-80">

          <Card>
              <CardHeader color="lightBlue" size="lg">
                  <H5 color="white">Login</H5>
              </CardHeader>

              <CardBody>
                  <div className="mt-4 mb-8 px-4">
                      <InputIcon
                          type="text"
                          color="lightBlue"
                          placeholder="Username"
                      />
                  </div>
                  {/* <div className="mb-8 px-4">
                      <InputIcon
                          type="email"
                          color="lightBlue"
                          placeholder="Email Address"
                          iconName="email"
                      />
                  </div> */}
                  <div className="mb-4 px-4">
                      <InputIcon
                          type="password"
                          color="lightBlue"
                          placeholder="Password"
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
        </div>
        
    </>
    )
}

export default login;
