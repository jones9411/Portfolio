import React, { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";

import "./navbar.scss";
import { images } from "../../constants";

const links = ["home", "about", "work", "skills", "contact"];

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        <img src={images.logo} alt="logo" />
      </div>
      <ul className="app__navbar-links">
        {links.map((item) => (
          <li className="app__flex p-text" key={`link-${item}`}>
            <div />
            <a href={`#${item}`}>{item}</a>
          </li>
        ))}
      </ul>
      <div className="app__navbar-menu">
        <FiMenu onClick={() => setToggle(true)} />

        <AnimatePresence>
          {toggle && (
            <motion.div
              key="navbar"
              whileInView={{ x: [600, 0] }}
              transition={{ duration: 0.65, ease: "easeOut", delay: 0 }}
              exit={{ x: 1400 }}
            >
              <FiX onClick={() => setToggle(false)} />
              <ul>
                {links.map((item, index) => (
                  <li key={item}>
                    <a href={`#${item}`} onClick={() => setToggle(false)}>
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navbar;
