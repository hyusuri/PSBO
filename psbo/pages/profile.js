// import { Button } from "@material-ui/core";
import React from "react";
import Button from "@material-tailwind/react/Button";
import Head from "next/head";
import Image from "next/image";
// import {getCookies} from "../utils/utils"
// import Cookies from "js-cookie";
import cookie from "cookie";
import axios from "axios";
import { GetServerSideProps } from "next";
import { useState, useEffect } from "react";
import { data } from "autoprefixer";
import Cookies from "js-cookie";
import Document from "next/document";
import { useForm, Controller } from "react-hook-form";

import ReactDOM from "react-dom";
import Input from "@material-tailwind/react/Input";

export const getServerSideProps = async ({ req, res }) => {
  if (req.headers.cookie === undefined) {
    return {
      props: {},
      redirect: {
        destination: "/login",
        permanent: false,
      },
    };
  }
  let cookies = cookie.parse(req.headers.cookie);
  // console.log(cookies)

  let axiosConfig = {
    headers: {
      "X-IPBAPI-TOKEN": "Bearer 1f70343f-5478-38da-8aa7-47d662d2078a",
      "Content-Type": "application/json",
      Authorization: "Bearer " + cookies.token,
    },
  };

  const api_call = await axios
    .get("https://api.ipb.ac.id/v1/Orang/Mahasiswa/BiodataSaya", axiosConfig)
    .catch((err) => {
      console.log("Request api error : ", err.response.status);
    });

  const userdata = {
    username: cookies.username,
  };
  let axiosconf = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  //get image
  await axios
    .post("http://34.101.142.194:3001/lampiran/user", userdata, axiosconf)
    .then((response) => {
      console.log(response.data.message[0].link_kk);
      const link_kk = response.data.message[0].link_kk;
      const link_ktm = response.data.message[0].link_ktm;
      cookies.link_kk = link_kk;
      cookies.link_ktm = link_ktm;
    })
    .catch((err) => {
      console.log(err);
    });

  //return
  if (api_call === undefined) {
    return {
      props: {},
      redirect: {
        destination: "/login",
        permanent: false,
      },
    };
  } else {
    const user_data = api_call.data;
    // console.log(user_data);
    return {
      props: { user_data, cookies },
    };
  }
};

const Profile = ({ user_data, cookies }) => {
  const [image_kk, setImageKK] = useState(null);
  const [image_ktm, setImageKTM] = useState(null);
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Update document title using the browser API

    var btn = document.createElement("BUTTON");
    document.body.appendChild(btn);
  });

  const handleSubmitkk = async (event) => {
    event.preventDefault();
    const datanya = new FormData();
    datanya.append("username", cookies.username);
    datanya.append("image-kk", image_kk);

    await axios
      .post("http://34.101.142.194:3001/lampiran/upload-kk", datanya)
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
        console.log(err.response);
      });
  };

  const handleSubmitktm = async (event) => {
    event.preventDefault();
    const datanya = new FormData();
    datanya.append("username", cookies.username);
    datanya.append("image-ktm", image_ktm);

    await axios
      .post("http://34.101.142.194:3001/lampiran/upload-ktm", datanya)
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
        console.log(err.response);
      });
  };

  // useEffect(function updateTitle() {
  //   document.title = `You clicked ${count} times`;
  // });
  const handleTambahBerkas = () => {
    const element = <h1 className="greeting">Halo, Dunia!</h1>;
    const coba = document.createElement("div");
    coba.innerHTML = "TES";

    var btn = document.createElement("BUTTON");
    document.body.appendChild(btn);

    const menu = document.getElementsByClassName("tes");

    // menu.append(coba);
    console.log("tes");
  };

  return (
    <>
      <Head>
        <title>IPB Scholar | Profile</title>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <div>
        <h1 className="text-4xl m-10">Profile</h1>

        <div className="count">
          <div className="diterima">
            <h1>0</h1>
            <h2>Beasiswa Diterima</h2>
          </div>
          <div className="dilamar">
            <h1>{Cookies.get("counter")}</h1>
            <h2>Beasiswa Dilamar</h2>
          </div>
        </div>

        <div className="text-center m-20 md:flex rounded-xl p-8 md:p-0 gap-x-16 justify-center ">
          <Image
            className="w-32 h-32 md:w-48 md:h-auto md:rounded-none rounded-full"
            src={user_data.PathFoto}
            alt=""
            width="200.5"
            height="200"
          />
          <div className="pt-6 md:p-8 text-center md:text-left space-x-9 space-y-4">
            <div className="text-cyan-600"></div>

            {/* <div className="font-medium"> */}
            <div className="font-medium text-black-600">{user_data.Nama}</div>
            <div className="text-black-600">{user_data.NIM}</div>
            <div className="text-black-600">{user_data.Fakultas}</div>
            <div className="text-black-500">{user_data.Departemen}</div>
            {/* </div> */}
          </div>
        </div>

        <div className="grid justify-items-center text-center m-10 space-y-2">
          <label>Ubah Foto</label>
          <div>
            <input id="foto" type="file"></input>
          </div>
          <Button className="">simpan</Button>
        </div>

        <h2 className="text-3xl m-10">Berkas Tambahan</h2>

        <div className="text-center m-8 md:flex rounded-xl p-8 md:p-0 gap-x-16 justify-center">
          <form onSubmit={handleSubmitktm}>
            <div className="m-10 space-y-2">
              <label>Kartu Tanda Mahasiswa</label>
              <div>
                <a
                  href={"http://34.101.142.194:3001/" + cookies.link_ktm}
                  target="_blank"
                >
                  {cookies.link_ktm}
                </a>
              </div>
              <div>
                <input
                  id="ktm"
                  type="file"
                  onChange={(e) => setImageKTM(e.target.files[0])}
                ></input>
              </div>
              <Button className="mx-20">simpan</Button>
            </div>
          </form>

          <form onSubmit={handleSubmitkk}>
            <div className="m-10 space-y-2">
              <label className="mr-10">Kartu Keluarga</label>
              <div>
                <a
                  href={"http://34.101.142.194:3001/" + cookies.link_kk}
                  target="_blank"
                >
                  {cookies.link_kk}
                </a>
              </div>
              <div>
                <input
                  id="kk"
                  type="file"
                  onChange={(e) => setImageKK(e.target.files[0])}
                ></input>
              </div>
              <Button className="mx-20">simpan</Button>
            </div>
          </form>
        </div>
      </div>

      {/* <div className="tambah_berkas flex justify-center">
        <Button className="flex justify-center" onClick={handleTambahBerkas}>
          Tambah Berkas
        </Button>
        <p className="tes"> You clicked {count} times </p>
      </div> */}

      <div className="grid justify-items-center space-y-2">
        <section className=" input_section">
          <h2>Tambah Berkas Baru</h2>
          <form id="inputBeasiswa">
            <div className="input">
              <Input
                type="text"
                color="lightBlue"
                size="regular"
                outline={true}
                placeholder="Nama Berkas"
                value=""
                required
              />
            </div>
            <div className="">
              <input id="" type="file"></input>
            </div>
            <div className="mt-2 ml-24">
              <Button className=" " type="submit">
                Tambah
              </Button>
            </div>
          </form>
        </section>
      </div>
    </>
  );
};

export default Profile;
