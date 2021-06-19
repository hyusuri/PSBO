import React from "react";
import Button from "@material-tailwind/react/Button";
import Link from "next/link";
import Input from "@material-tailwind/react/Input";
import Textarea from "@material-tailwind/react/Textarea";
import Sidebar from "../../component/sidebar";
import Head from "next/head";

const AddBeasiswa = () => {
  return (
    <div>
      <Head>
        <title>IPB Scholar | Admin</title>
        <link rel="icon" href="./favicon.png" />
      </Head>
      <Sidebar></Sidebar>

      <div className="ml-80">
        <h1 href="/form" className="font-sans text-3xl m-10">
          Tambah Beasiswa
        </h1>
        <div className="container space-y-4">
          <div className="container flex ">
            <div className="flex-1 mr-20">
              <Input
                type="text"
                color="lightBlue"
                size="lg"
                outline={true}
                placeholder="Nama Beasiswa"
                required
              />
            </div>
            <div className="mr-20 mt-2">
              <Button>Simpan</Button>
            </div>
          </div>
          <div className="container flex ">
            <div className="flex-1 mr-20">
              <Textarea
                type="text"
                color="lightBlue"
                size="lg"
                outline={true}
                placeholder="Deskripsi Beasiswa"
                required
              />
            </div>
            <div className="mr-20 mt-20">
              <Button>Simpan</Button>
            </div>
          </div>
          <div className="container flex">
            <div className="flex-1 mr-20">
              <Textarea
                type="text"
                color="lightBlue"
                size="lg"
                outline={true}
                placeholder="Persyaratan Beasiswa"
                required
              />
            </div>
            <div className="mr-20 mt-20">
              <Button>Simpan</Button>
            </div>
          </div>
        </div>

        <h1 className="font-sans text-3xl m-10">
          Pengaturan Formulir Beasiswa
        </h1>

        <div className="grid justify-items-center space-y-2">
          <section className=" input_section">
            <h2>Tambah Input Baru di Formulir</h2>
            <form id="inputBeasiswa">
              <div className="input">
                <Input
                  type="text"
                  color="lightBlue"
                  size="regular"
                  outline={true}
                  placeholder="Nama input"
                  value=""
                  required
                />
              </div>
              <div className="">
                <select className="md:mx-16 sm:mr-16" id="ktm" name="cars">
                  <option value="" selected disabled hidden>
                    Pilih Tipe input
                  </option>
                  <option value="file">File</option>
                  <option value="text">Text</option>
                  <option value="number">Number</option>
                </select>
              </div>
              <div className="mt-2 ml-20">
                <Button className=" " type="submit">
                  Tambah
                </Button>
              </div>
            </form>
          </section>
        </div>
      </div>
    </div>
  );
};

export default AddBeasiswa;
