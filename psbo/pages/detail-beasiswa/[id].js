// import { Button } from "@material-ui/core";
import React from "react";
import Button from "@material-tailwind/react/Button";
import Link from "next/link";


export const getStaticPaths = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/comments');
    const data = await res.json();

    const paths = data.map(beasiswa => {
        return {
            params: {id: beasiswa.id.toString() }
        }
    })

    return {
        paths,
        fallback: false
    }

}

export const getStaticProps =  async (context) => {
    const id = context.params.id;
    const res = await fetch('https://jsonplaceholder.typicode.com/comments/' + id);
    const data = await res.json();
    console.log(res)
    return {
        props: { beasiswa: data }
    }
}

const Details = ({ beasiswa }) => {
    return (  
    <div >
        <h1 href="/form" className="font-sans text-3xl m-10">Detail Beasiswa</h1>
        <div className="detail">
            <h3 className="font-sans text-2xl m-5">{ beasiswa.name }</h3>
            <p className="font-sans text-base m-5">{ beasiswa.email }</p>
            <p className="font-sans text-base m-5">{ beasiswa.body }</p>
        </div>

        <h1 className="font-sans text-3xl m-10">Persyaratan Beasiswa</h1>
        <div className="detail">
            <h3 className="font-sans text-2xl m-5">{ beasiswa.name }</h3>
            <p className="font-sans text-base m-5">{ beasiswa.email }</p>
            <p className="font-sans text-base m-5">{ beasiswa.body }</p>
        </div>
        <Button className="daftar"><Link href='/form'>Daftar</Link></Button>
        {/* <Button href="/form" className="daftar"
            color="teal"
            buttonType="filled"
            size="regular"
            rounded={false}
            block={false}
            iconOnly={false}
            ripple="light"
        >
            Daftar
        </Button> */}
    </div>
        
    );
}

export default Details;