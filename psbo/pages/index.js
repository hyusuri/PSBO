import Head from 'next/head'
import Image from 'next/image'
import Navbar from '../component/navbar'
import Style from '../styles/Home.module.css'
import Link from 'next/link'


export const getStaticProps = async () => {

  const res = await fetch('https://jsonplaceholder.typicode.com/comments');
  const data = await res.json();

  return {
    props: { beasiswas: data }
  }
}

export default function Home({ beasiswas }) {
  return (
  <>
    <Head>
      <title>IPB Scholar | Home</title>
    </Head>

    <div>
      <h1>Selamat Datang di IPB Scholar</h1>
      {beasiswas.map(beasiswa => (
        <Link href={'detail-beasiswa/'+ beasiswa.id} key={beasiswa.id}>
          <a className = {Style.single}>
            <h3>{beasiswa.name}</h3>
            <h3>{beasiswa.body}</h3>
          </a>
        </Link>
      ))}
    </div>
  </>
  )
}
