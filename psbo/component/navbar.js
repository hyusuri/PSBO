import Link from "next/link";
import Image from "next/image";
import { useContext } from "react";
import Cookies from "js-cookie";

const Navbar = () => {
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
      ) : (
        <>
          <ul className="flex justify-center list-none">
            <li>
              {/* <Link
                className="hover:bg-white hover:text-blue-900 font-sans"
                
              > */}
              <a
                href="/home"
                className="inline-block hover:bg-white hover:text-blue-900 rounded-lg px-4"
              >
                Home
              </a>
              {/* </Link> */}
            </li>
            <li className="">
              {/* <Link
              className="hover:bg-white hover:text-blue-900 font-sans"
              href="/profile"
            > */}
              <a
                href="/profile"
                className="inline-block hover:bg-white hover:text-blue-900 rounded-lg px-4"
              >
                Profile
              </a>
              {/* </Link> */}
            </li>
            <li>
              {/* <Link
                className="hover:bg-white hover:text-blue-900 font-sans"
                href="/login"
              > */}
              <a
                href="/login"
                onClick={handleLogout}
                className="inline-block hover:bg-white hover:text-blue-900 rounded-lg px-4"
              >
                Logout
              </a>
              {/* </Link> */}
            </li>
          </ul>
        </>
      )}
    </nav>
  );
};

export default Navbar;
