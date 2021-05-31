import Head from 'next/head'
import Image from 'next/image'
import Navbar from '../component/navbar'

export default function Home() {
  return (
  <>
    <Head>
      <title>IPB Scholar | Home</title>
    </Head>

    <div>
      <h1>Selamat Datang di IPB Scholar</h1>
      
      <div class="row">
        <div class="column">
          <h2>Column 1</h2>
          <p>Some text..</p>
        </div>
        <div class="column">
          <h2>Column 2</h2>
          <p>Some text..</p>
        </div>
      </div>

      <div class="row">
        <div class="column">
          <h2>Column 3</h2>
          <p>Some text..</p>
        </div>
        <div class="column">
        <h2>Column 4</h2>
        <p>Some text..</p>
        </div>
      </div>
    </div>
  </>
  )
}
