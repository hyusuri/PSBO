import React from "react";
import Button from "@material-tailwind/react/Button";
import Link from "next/link";
import Sidebar from "../../component/sidebar";
import Formulir from "../../component/form";

const Detailss = () => {
  return (
    <div>
      <Sidebar></Sidebar>

      <div className="ml-80">
        <h1 href="/form" className="font-sans text-3xl m-10">
          Detail Beasiswa
        </h1>
        <div className="detail">
          <h3 className="font-sans text-2xl m-5">Beasiswa A</h3>
          <p className="font-sans text-base m-5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce id
            quam eros. Cras sagittis, est at porttitor sagittis, ante odio
            mollis ante, placerat venenatis nisl nibh eu dui. Fusce nec pulvinar
            ex, eget mollis tortor. Cras mollis augue ut nisi accumsan volutpat.
            Nam a nisl lorem. Donec vestibulum nulla ligula.
          </p>
        </div>

        <h1 className="font-sans text-3xl m-10">Persyaratan Beasiswa</h1>
        <div className="detail">
          <p className="font-sans text-base m-5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce id
            quam eros. Cras sagittis, est at porttitor sagittis, ante odio
            mollis ante, placerat venenatis nisl nibh eu dui. Fusce nec pulvinar
            ex, eget mollis tortor. Cras mollis augue ut nisi accumsan volutpat.
            Nam a nisl lorem. Donec vestibulum nulla ligula.
          </p>
        </div>

        <div className="flex justify-evenly">
          <Button className="edit">
            <Link href="">Ubah</Link>
          </Button>
        </div>

        <Formulir></Formulir>

        <div className="flex justify-evenly">
          <Button className="edit">
            <Link href="">Ubah</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Detailss;
