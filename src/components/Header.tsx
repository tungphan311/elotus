import { motion } from "framer-motion";
import { Link, NavLink, useLocation } from "react-router-dom";
import { ROUTES } from "../constants";
import { useState, useEffect } from "react";
import { CgMenuHotdog } from "react-icons/cg";
import { MdOutlineRestaurantMenu } from "react-icons/md";
import { IoTv, IoHome, IoFilm, IoBookmarks } from "react-icons/io5";
import "../styles/header.scss";

function Header() {
  const [open, setOpen] = useState(false);
  const [navFixed, setNavFixed] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () =>
      setNavFixed(window.pageYOffset > 300)
    );
  }, []);

  return (
    <header className={`header ${navFixed ? "fixednav" : ""}`}>
      <motion.div
        initial={{ y: -200 }}
        animate={{ y: 0 }}
        className="container"
      >
        <h1 className="app-logo">
          <Link to={ROUTES.HOME}>Movie</Link>
        </h1>

        <nav className={`nav ${open ? "open" : ""}`}>
          <ul className="nav-list">
            <li>
              <NavLink
                className={(navData) => (navData.isActive ? "active" : "")}
                to={ROUTES.HOME}
                onClick={() => setOpen(!open)}
              >
                <IoHome />
                <span>home</span>
              </NavLink>
            </li>

            <li>
              <NavLink
                className={(navData) => (navData.isActive ? "active" : "")}
                to={ROUTES.NOW_PLAYING}
                onClick={() => setOpen(!open)}
              >
                <IoFilm />
                <span>Now Playing</span>
              </NavLink>
            </li>

            <li>
              <NavLink
                className={(navData) => (navData.isActive ? "active" : "")}
                to={ROUTES.TOP_RATED}
                onClick={() => setOpen(!open)}
              >
                <IoTv />
                <span>Top Rated</span>
              </NavLink>
            </li>
          </ul>
        </nav>

        <div className="hamburger" onClick={() => setOpen(!open)}>
          {!open ? (
            <CgMenuHotdog style={{ fontSize: "25px" }} />
          ) : (
            <MdOutlineRestaurantMenu style={{ fontSize: "25px" }} />
          )}
        </div>
      </motion.div>
    </header>
  );
}

export default Header;
