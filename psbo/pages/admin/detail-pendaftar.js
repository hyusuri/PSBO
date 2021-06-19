import Formulir from "../../component/form";
import Sidebar from "../../component/sidebar";

const Pendaftar = () => {
  return (
    <>
      <div className="ml-80">
        <h1 href="/form" className="font-sans text-3xl m-10">
          Detail Pendaftar
        </h1>
        <Sidebar></Sidebar>
        <Formulir></Formulir>
      </div>
    </>
  );
};

export default Pendaftar;
