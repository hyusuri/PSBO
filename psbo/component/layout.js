import Cookies from "js-cookie";
import Navbar from "./navbar";
import PrimarySearchAppBar from "./navCob";

const Layout = ({ children }) => {
  return (
    <div className="content">
      {Cookies.get("token") === null || Cookies.get("token") === undefined ? (
        <></>
      ) : (
        <>
          <Navbar />
        </>
      )}
      {children}
    </div>
  );
};

export default Layout;
