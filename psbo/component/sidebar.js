import { useState } from "react";
import { MdDashboard } from "react-icons/md";
import { MdAddCircle } from "react-icons/md";
import NavItem from "@material-tailwind/react/NavItem";
import NavLink from "@material-tailwind/react/NavLink";

// import { Link } from "react-router-dom";

import AdminNavbar from "./adminNavbar";
import Icon from "@material-tailwind/react/Icon";
import H6 from "@material-tailwind/react/Heading6";
import Link from "next/link";
// import { Link } from "@material-ui/icons";

export default function Sidebar() {
  const [showSidebar, setShowSidebar] = useState("-left-64");
  return (
    <>
      {/* <AdminNavbar showSidebar={showSidebar} setShowSidebar={setShowSidebar} /> */}
      <div
        className={`h-screen fixed top-0 md:left-0 ${showSidebar} overflow-y-auto flex-row flex-nowrap overflow-hidden shadow-xl bg-white w-64 z-10 py-4 px-6 transition-all duration-300`}
      >
        <div className="flex-col items-stretch min-h-full flex-nowrap px-0 relative">
          <a
            target="_blank"
            rel="noreferrer"
            className="mt-2 text-center w-full inline-block"
          >
            <H6 color="gray">IPB Scholar</H6>
          </a>
          <div className="flex flex-col">
            <hr className="my-4 min-w-full" />

            <ul className="flex-col min-w-full flex list-none">
              {/* <li className="rounded-lg mb-4">
                <Link
                  to="/"
                  exact
                  className="flex items-center gap-4 text-sm text-gray-700 font-light px-4 py-3 rounded-lg"
                  activeClassName="bg-gradient-to-tr from-light-blue-500 to-light-blue-700 text-white shadow-md"
                >
                  <a>
                    <MdDashboard size="24px" />
                    Dashboard
                  </a>
                </Link>
              </li> */}

              {/* <li className="rounded-lg mb-2">
                <Link
                  to="/settings"
                  className="flex items-center gap-4 text-sm text-gray-700 font-light px-4 py-3 rounded-lg"
                  activeClassName="bg-gradient-to-tr from-light-blue-500 to-light-blue-700 text-white shadow-md"
                >
                  <Icon name="settings" size="2xl" />
                  Settings
                </Link>
              </li> */}

              {/* <li className="rounded-lg mb-2 ">
                <Link
                  to="/tables"
                  className="flex items-center gap-4 text-sm text-gray-700 font-light px-4 py-3 rounded-lg"
                  activeClassName="bg-gradient-to-tr from-light-blue-500 to-light-blue-700 text-white shadow-md"
                >
                  <Icon name="toc" size="2xl" />
                  Tables
                </Link>
              </li> */}

              {/* <li className="rounded-lg mb-2 text-gray-700">
                <Link
                  to="/maps"
                  className="flex items-center gap-4 text-sm text-gray-700 font-light px-4 py-3 rounded-lg"
                  activeClassName="bg-gradient-to-tr from-light-blue-500 to-light-blue-700 text-white shadow-md"
                >
                  <Icon name="map" size="2xl" />
                  Maps
                </Link>
              </li> */}
              <li className="px-4 rounded-lg mb-2 text-gray-700">
                <a
                  href="http://localhost:3000/admin"
                  //   target="_blank"
                  //   rel="noreferrer"
                  className="flex items-center gap-4 text-sm font-light py-3"
                  //   active="blue"
                  //   onMouseMove="dark"
                  activeClassName="bg-gradient-to-tr from-light-blue-500 to-light-blue-700 text-white shadow-md"
                >
                  <MdDashboard size="24px" />
                  Dashboard
                </a>
              </li>

              <li className="px-4 rounded-lg mb-2 text-gray-700">
                <a
                  href="http://localhost:3000/admin/tambah-beasiswa"
                  //   target="_blank"
                  //   rel="noreferrer"
                  className="flex items-center gap-4 text-sm font-light py-3"
                >
                  <MdAddCircle size="24px"></MdAddCircle>
                  <span className="blue">Tambah Beasiswa</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
