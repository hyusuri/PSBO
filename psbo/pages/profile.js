// import { Button } from "@material-ui/core";
import React from "react";
import Button from "@material-tailwind/react/Button";
import Head from "next/head"
import Image from 'next/image'
// import {getCookies} from "../utils/utils"
import Cookies from 'js-cookie';
import cookie from "cookie"
import axios from "axios"
import { GetServerSideProps } from 'next'
import { useState } from "react";

export const getServerSideProps = async ({ req, res }) => {
	let cookies = cookie.parse(req.headers.cookie);
	// console.log(cookies)
	if (req.headers.cookie === undefined) {
		return {
			props: {  },
			redirect: {
				destination: '/login',
				permanent: false,
			},
		};
	}
	let axiosConfig = {
		headers: {
			'X-IPBAPI-TOKEN': 'Bearer 1f70343f-5478-38da-8aa7-47d662d2078a',
			'Content-Type': 'application/json',
			'Authorization': 'Bearer ' + cookies.token
		}
	};
	const api_call = await axios.get(
		'https://api.ipb.ac.id/v1/Orang/Mahasiswa/BiodataSaya', 
		axiosConfig).catch((err) => {
			return {
				props: {  },
				redirect: {
					destination: '/login',
					permanent: false,
				},
			};
		});
		const user_data = api_call.data;

		return {
			props: { user_data,
			cookies },
		};
	};

	const Profile =  ({ user_data, cookies }) => {

		const [image_kk, setImageKK] = useState(null);
		const [image_ktm, setImageKTM] = useState(null);

		const handleimageKKChange = (evt) => {
			console.log(evt.target.files[0])
			
	 	};
		 const handleimageKTMChange = (evt) => {
			console.log(evt.target.files[0])
	 	};
		const handleSubmit = async (event) => {
			event.prefentDefault();
			const datapost = {
				'image-kk': image_kk,
				'image-ktm': image_ktm
			}

		const axiosConfig = {
			headers: {
			  "Content-Type": "multipart/form-data",
			},
		  };
		
		const api_call = await axios
		.post(
			"http://localhost:3001/lampiran/upload-kk",
			datapost,
			axiosConfig
		  )
		  .post(
			"http://localhost:3001/lampiran/upload-ktm",
			datapost,
			axiosConfig
		  )
		  .then((res) => {
			  console.log(res)
		  })
		  .catch((err) => {
			  console.log(err)
		  })
		}
		const fetch = require('node-fetch')
		const payload = fetch('http://localhost:3001/lampiran/user',
		{
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				"username": cookies.username
			})
		});

		payload.then(response => response.json())
		.then(jsonResponse => {
			//console.log(jsonResponse);
		}).catch(error => {
			console.log(error);
		})

	// let cookies = getCookies(req);
	// console.log(cookies);

	// buat ngambil data lewat api
	// const api_call = async() => {
	// 	const res = await axios.get('https://api.ipb.ac.id/v1/Orang/Mahasiswa/BiodataSaya', axiosConfig);
	// 	const result = res.json();
	// 	console.log(res.data);
	// }
	// // 
	// console.log(api_call.res);
	// console.log(api_call.result);

	return (
		<>
		<Head>
		<title>IPB Scholar | Profile</title>
		</Head>
		<div>
		<h1 className="text-4xl m-10">Profile</h1>

		<div className="count">
		<div className="diterima">
		<h1>0</h1>
		<h2>Beasiswa Diterima</h2>
		</div>
		<div className="dilamar">
		<h1>2</h1>
		<h2>Beasiswa Dilamar</h2>
		</div>
		</div>
			{/* <div className="flex m-8">
				<Image className="row-span-3  " src="/ipbscholar.png" width={400} height={100} ></Image>
				<div className="flex-2 space-y-4 block">
					<h3>Nama Lengkap - G64192002</h3>
					<h3>Fakultas X</h3>w-32 h-32 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto
					<h3>Departemen Y</h3> 
				</div>
			</div> */}
			<div className="text-center m-20 md:flex rounded-xl p-8 md:p-0 gap-x-16 justify-center ">
			<Image className="w-32 h-32 md:w-48 md:h-auto md:rounded-none rounded-full" src="/profil.png" alt="" width="150" height="150"/>
			<div className="pt-6 md:p-8 text-center md:text-left space-x-9 space-y-4">
			<div className="text-cyan-600">

			</div>

		{/* <div className="font-medium"> */}
		<div className="font-medium text-black-600">
		{user_data.Nama}
		</div>
		<div className="text-black-600">
		{user_data.NIM}
		</div>
		<div className="text-black-600">
		{user_data.Fakultas}
		</div>
		<div className="text-black-500">
		{user_data.Departemen}
		</div>
	{/* </div> */}
	</div>
	</div>

	<div className="grid justify-items-center text-center m-10 space-y-2">
	<label for="foto">Ubah Foto</label>
	<div>
	<input id="foto" type="file"></input>
	</div>
	<Button className="">simpan</Button>
	</div>

	<h2 className="text-3xl m-10">Berkas Tambahan</h2>
	
	<form onSubmit={handleSubmit} >

	<div className="text-center m-8 md:flex rounded-xl p-8 md:p-0 gap-x-16 justify-center">
	<div className="m-10 space-y-2">
	<label for="ktm">Kartu Tanda Mahasiswa</label>
	<div>
	<input id="ktm" value={image_ktm} type="file" onChange={handleimageKTMChange}></input>
	</div>
	<Button className="mx-20">simpan</Button>
	</div>

	<div className="m-10 space-y-2">
	<label className="mr-10" for="kk">Kartu Keluarga</label>
	<div>
	<input id="kk" value={image_kk} type="file" onChange={handleimageKKChange}></input>
	</div>
	<Button className="mx-20">simpan</Button>
	</div>
	</div>

	</form>



	</div>
	</>
	)
}



export default Profile;