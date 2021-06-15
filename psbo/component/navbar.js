import Link from "next/link";
import Image from "next/image";
import { useContext } from "react";
import Cookies from "js-cookie";

const Navbar = () => {
  const handleLogout = () => {
    Cookies.remove("token");
    Cookies.remove("username");
    Cookies.remove("counter");
    // setUser(null);
    localStorage.clear();

    return (
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
    );
  };

  return (
    <nav className="font-sans">
      <div className="logo">
        <Image src="/ipbscholar.png" width={150} height={60} />
      </div>

      {Cookies.get("token") === null || Cookies.get("token") === undefined ? (
        <>
          <Link className="font-sans" href="/login">
            <a>Login</a>
          </Link>
        </>
      ) : (
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
      )}
    </nav>
  );
};

export default Navbar;
