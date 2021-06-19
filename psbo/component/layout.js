import Cookies from "js-cookie";
import AdminNavbar from "./adminNavbar";
import Navbar from "./navbar";

const Layout = ({ children }) => {
  if (Cookies.get("role") === "admin") {
    return (
      <>
        {Cookies.get("token") === null || Cookies.get("token") === undefined ? (
          <></>
        ) : (
          <>
            <AdminNavbar />
          </>
        )}

        {children}
      </>
    );
  } else {
    return (
      <>
        {Cookies.get("token") === null || Cookies.get("token") === undefined ? (
          <></>
        ) : (
          <>
            <Navbar />
          </>
        )}

        {children}
      </>
    );
  }
};

export default Layout;
