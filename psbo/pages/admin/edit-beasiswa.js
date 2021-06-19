import React from "react";
import Button from "@material-tailwind/react/Button";
import Link from "next/link";
import Input from "@material-tailwind/react/Input";
import Textarea from "@material-tailwind/react/Textarea";
import Sidebar from "../../component/sidebar";
import Head from "next/head";

const Detailss = () => {
  return (
    <div>
      <Head>
        <title>IPB Scholar | Admin</title>
        <link rel="icon" href="./favicon.png" />
      </Head>
      <Sidebar></Sidebar>

      <div className="ml-80">
        <h1 href="/form" className="font-sans text-3xl m-10">
          Edit Beasiswa
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
                placeholder="Deskripsi"
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
                placeholder="Persyaratan"
                required
              />
            </div>
            <div className="mr-20 mt-20">
              <Button>Simpan</Button>
            </div>
          </div>
          {/* <h3 className="font-sans text-2xl m-5">Beasiswa A</h3>
          <p className="font-sans text-base m-5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce id
            quam eros. Cras sagittis, est at porttitor sagittis, ante odio
            mollis ante, placerat venenatis nisl nibh eu dui. Fusce nec pulvinar
            ex, eget mollis tortor. Cras mollis augue ut nisi accumsan volutpat.
            Nam a nisl lorem. Donec vestibulum nulla ligula.
          </p> */}
        </div>

        <h1 className="font-sans text-3xl m-10">
          Pengaturan Formulir Beasiswa
        </h1>

        <div className="grid justify-items-center">
          <section className="input_section">
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
              <div className="space-y-8">
                <input id="" type="file"></input>
              </div>
              <Button className=" " type="submit">
                Tambah
              </Button>
            </form>
          </section>
        </div>
        {/* <div className="detail">
          <p className="font-sans text-base m-5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce id
            quam eros. Cras sagittis, est at porttitor sagittis, ante odio
            mollis ante, placerat venenatis nisl nibh eu dui. Fusce nec pulvinar
            ex, eget mollis tortor. Cras mollis augue ut nisi accumsan volutpat.
            Nam a nisl lorem. Donec vestibulum nulla ligula.
          </p>
        </div> */}

        {/* <div className="flex justify-evenly">
          <Button className="edit">
            <Link href="/admin">Ubah</Link>
          </Button>
        </div> */}

        {/* <div className="flex justify-evenly">
          <Button className="edit">
            <Link href="/admin">Ubah</Link>
          </Button>
        </div> */}
      </div>
    </div>
  );
};

export default Detailss;
