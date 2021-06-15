import { Tab } from "@material-ui/icons";
import Head from "next/head";
import AdminNavbar from "../../component/adminNavbar";
import Sidebar from "../../component/sidebar";
import ScholarCard from "../../component/table";

const AdminPage = () => {
  return (
    <div>
      <Head>
        <title>IPB Scholar | Admin</title>
      </Head>

      {/* <AdminNavbar></AdminNavbar> */}
      <Sidebar></Sidebar>
      {/* <Tabb></Tabb> */}
      <div className="mt-20 ml-72 mr-16">
        <ScholarCard></ScholarCard>
      </div>
    </div>
  );
};

export default AdminPage;
