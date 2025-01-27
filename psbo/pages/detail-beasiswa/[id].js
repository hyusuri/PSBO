// import { Button } from "@material-ui/core";
import React from "react";
import Button from "@material-tailwind/react/Button";
import Link from "next/link";
import Head from "next/dist/next-server/lib/head";

export const getStaticPaths = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();

  const paths = data.map((beasiswa) => {
    return {
      params: { id: beasiswa.id.toString() },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const id = context.params.id;
  const res = await fetch("https://jsonplaceholder.typicode.com/users/" + id);
  const data = await res.json();
  console.log(res);
  return {
    props: { beasiswa: data },
  };
};

const Details = ({ beasiswa }) => {
  return (
    <div>
      <Head>
        <title>IPB Scholar | Beasiswa</title>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <h1 href="/form" className="font-sans text-3xl m-10">
        Detail Beasiswa
      </h1>
      <div className="detail">
        <h3 className="font-sans text-2xl m-5">{beasiswa.name}</h3>
        <p className="font-sans text-base m-5">{beasiswa.email}</p>
        <p className="font-sans text-base m-5">{beasiswa.phone}</p>
      </div>

      <h1 className="font-sans text-3xl m-10">Persyaratan Beasiswa</h1>
      <div className="detail">
        <h3 className="font-sans text-2xl m-5">{beasiswa.name}</h3>
        <p className="font-sans text-base m-5">{beasiswa.email}</p>
        <p className="font-sans text-base m-5">{beasiswa.phone}</p>
      </div>
      <Button className="daftar">
        <Link
          href={{
            pathname: "/form",
            query: { data: JSON.stringify(beasiswa.id) },
          }}
        >
          Daftar
        </Link>
      </Button>
    </div>
  );
};

export default Details;
