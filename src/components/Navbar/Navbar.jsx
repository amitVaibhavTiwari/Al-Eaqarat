import { useEffect, useState } from "react";
import "./Navbar.scss";
import { BsList } from "react-icons/bs";
import { useGlobalContext } from "../../GlobalContext";
import { IoSunnyOutline } from "react-icons/io5";
import { IoIosMoon } from "react-icons/io";
import Logo from "../Logo.jsx/Logo";

const navlinks = ["Home", "Buying", "Renting", "Selling", "Features"];

const Navbar = () => {
  const { userPreferredTheme, dispatch } = useGlobalContext();
  const [showSidebar, setShowSidebar] = useState(false);

  const handleThemeChange = () => {
    if (userPreferredTheme === "dark") {
      dispatch({
        type: "CHANGE_USER_THEME_PREFERENCE",
        payload: { theme: "default" },
      });
    }
    if (userPreferredTheme === "default") {
      dispatch({
        type: "CHANGE_USER_THEME_PREFERENCE",
        payload: { theme: "dark" },
      });
    }
  };

  // this below useEffect is to freeze the screen when sidebar is opened
  useEffect(() => {
    const body = document.documentElement;
    if (showSidebar) {
      body.style =
        "overflow-y: hidden; position: absolute; width: 100%; top: 0px; ";
    } else {
      body.style =
        "overflow-y: overlay; position: initial; width: auto; top: initial ;";
    }
  }, [showSidebar]);

  return (
    <nav>
      {/* this nav-center div will keep the contents of navbar in the center after a max width */}
      <div className="nav-center">
        <div className="nav-logo">
          <Logo />
        </div>
        <ul className="navbar-links">
          {navlinks.map((link, index) => {
            return (
              <li className="cursor-pointer" key={index}>
                {link}
              </li>
            );
          })}
        </ul>
        <span>
          {/* Theme changing icon */}
          <div
            onClick={() => handleThemeChange()}
            className="theme cursor-pointer"
          >
            {userPreferredTheme === "dark" ? <IoSunnyOutline /> : <IoIosMoon />}
          </div>
          {/*Hamburgur menu to show sidebar */}
          <div
            onClick={() => setShowSidebar(!showSidebar)}
            className="toggle-btn"
          >
            <BsList />
          </div>
        </span>
      </div>
      {/* nav-center ends */}
      {/* below is sidebar visible only on mobile */}
      <div
        onClick={() => setShowSidebar(false)}
        className={
          showSidebar
            ? "sidebar-parent sidebar-parent-visible"
            : "sidebar-parent"
        }
      >
        {/* below is actual sidebar above is its parent */}
        <div
          onClick={(e) => {
            e.stopPropagation();
            return;
          }}
          className="sidebar"
        >
          <div className="sidebar-logo">
            <Logo />
          </div>

          <ul className="sidebar-links">
            {navlinks.map((link, index) => {
              return (
                <li className="cursor-pointer" key={index}>
                  {link}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
