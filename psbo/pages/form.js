// import { Button } from "@material-ui/core";
import Head from "next/head"
import Style from '../styles/Home.module.css'
import Image from 'next/image'
import React from "react";
import Formulir from "../component/form"
import Input from "@material-tailwind/react/Input";
import Button from "@material-tailwind/react/Button";
import { GetServerSideProps } from 'next'
import cookie from "cookie"
import axios from "axios"

export const getServerSideProps = async ({ req, res }) => {
    if (req.headers.cookie === undefined) {
        return {
            props: {  },
            redirect: {
                destination: '/login',
                permanent: false,
            },
        };
    }
    let cookies = cookie.parse(req.headers.cookie);
    // console.log(cookies)
    
    let axiosConfig = {
        headers: {
            'X-IPBAPI-TOKEN': 'Bearer 1f70343f-5478-38da-8aa7-47d662d2078a',
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + cookies.token
        }
    };

    const api_call = await axios.get(
        'https://api.ipb.ac.id/v1/Orang/Mahasiswa/BiodataSaya', 
        axiosConfig)
    .catch((err) => {
        console.log("Request api error : ", err.response.status);
    });

    if (api_call === undefined) {
        return {
            props: {  },
            redirect: {
                destination: '/login',
                permanent: false,
            },
        };

    } else {
        const user_data = api_call.data;
        // console.log(user_data);
        return {
            props: { user_data,
                cookies },
            };
        }
    };
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
        )
    }

    export default formSubmit;