import Link from "next/link";
import Image from "next/image";
import { useContext } from "react";
import Cookies from "js-cookie";

const AdminNavbar = () => {
  const handleLogout = () => {
    Cookies.remove("token");
    Cookies.remove("username");
    Cookies.remove("counter");
    Cookies.remove("role");
    // setUser(null);
    localStorage.clear();

    // return (
    //   <>
    //     <Link className="font-sans" href="/home">
    //       <a>Home</a>
    //     </Link>
    //     <Link className="font-sans" href="/profile">
    //       <a>Profile</a>
    //     </Link>
    //     <Link className="font-sans" href="/login">
    //       <a onClick={handleLogout}>Logout</a>
    //     </Link>
    //   </>
    // );
  };

  return (
    <nav className="font-sans">
      <div className="logo">
        <Image src="/logo.png" width={170} height={50} />
      </div>

      {Cookies.get("token") === null || Cookies.get("token") === undefined ? (
        <>
          {/* <Link className="font-sans" href="/login">
            <a>Login</a>
          </Link> */}
        </>
      ) : Cookies.get("role" === "admin") ? (
        <>
          <Link className="font-sans" href="/login">
            <a onClick={handleLogout}>Logout</a>
          </Link>
        </>
      ) : (
        (<></>)(
          <>
            <Link className="font-sans" href="/home">
              <a>Home</a>
            </Link>
            <Link className="font-sans" href="/profile">
              <a>Profile</a>
            </Link>
            <Link className="font-sans" href="/login">
              <a onClick={handleLogout}>Logout</a>
            </Link>
          </>
        )
      )}
    </nav>
  );
};

export default AdminNavbar;
