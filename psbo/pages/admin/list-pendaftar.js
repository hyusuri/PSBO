import { Tab } from "@material-ui/icons";
import Head from "next/head";
import ListPendaftar from "../../component/list";
import Sidebar from "../../component/sidebar";
import PageVisitsCard from "../../component/table";

const Pendaftar = () => {
  return (
    <div>
      <Head>
        <title>IPB Scholar | Admin</title>
        <link rel="icon" href="./favicon.png" />
      </Head>

      <Sidebar></Sidebar>

      <div className="mt-20 ml-72 mr-16">
        <ListPendaftar></ListPendaftar>
        {/* <PageVisitsCard></PageVisitsCard> */}
      </div>
    </div>
  );
};

export default Pendaftar;
