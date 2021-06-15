import Head from "next/head";
import AdminNavbar from "../../component/adminNavbar";
import Formulir from "../../component/form";
import Sidebar from "../../component/sidebar";

const AddBeasiswa = () => {
  return (
    <div>
      <Head>
        <title>IPB Scholar | Admin</title>
      </Head>

      {/* <AdminNavbar></AdminNavbar> */}
      <Sidebar></Sidebar>

      <div className="ml-80 ">
        <Formulir></Formulir>
      </div>
    </div>
  );
};

export default AddBeasiswa;
