// import { Button } from "@material-ui/core";
import Head from "next/head";
import Style from "../styles/Home.module.css";
import Image from "next/image";
import React from "react";
import Formulir from "../component/form";
import Input from "@material-tailwind/react/Input";
import Button from "@material-tailwind/react/Button";

const formSubmit = () => {
  return (
    <>
      <Head>
        <title>IPB Scholar | Daftar</title>
      </Head>
      <div>
        <h1 className="text-4xl m-10">Daftar Beasiswa</h1>
      </div>

      <Formulir />
    </>
  );
};

export default formSubmit;
