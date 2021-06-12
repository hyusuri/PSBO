import Head from "next/head";
import Image from "next/image";
import Navbar from "../component/navbar";
import Style from "../styles/Home.module.css";
import Link from "next/link";
import LoginPage from "./login";

const Dashboard = () => {
  return (
    <div>
      <LoginPage></LoginPage>
    </div>
  );
};

export default Dashboard;
