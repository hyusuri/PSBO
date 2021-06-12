import "../styles/globals.css";
import "@material-tailwind/react/tailwind.css";
import "tailwindcss/tailwind.css";
import Router from "next/router";
import Layout from "../component/layout";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
