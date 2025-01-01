import React from "react";
import { FiShoppingCart } from "react-icons/fi";
import logo from "../../assets/logo.png";
import { IoCartOutline } from "react-icons/io5";
import { motion } from "framer-motion";

const NavMenu = [
  {
    id: 1,
    title: "Home",
    path: "/home",
    delay: 0.1,
  },
  {
    id: 2,
    title: "About",
    path: "/about",
    delay: 0.2,
  },
  {
    id: 3,
    title: "Menu",
    path: "/menu",
    delay: 0.3,
  },
  {
    id: 4,
    title: "Delivery",
    path: "/delivery",
    delay: 0.4,
  },
  {
    id: 5,
    title: "Contact us",
    path: "/contact",
    delay: 0.5,
  },
];

const Navbar = () => {
  return (
    <nav>
      <div className="container flex justify-between items-center font-leagueGothic">
        {/* logo section */}
        <motion.img
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          src={logo}
          alt=""
          className="w-36"
        />
        {/* menu section  */}
        <div className="hidden md:block">
          <ul className="flex gap-6">
            {NavMenu.map((menu) => {
              return (
                <li key={menu.id} className="nav-menu" data-delay={menu.delay}>
                  <a
                    href={menu.path}
                    className="inline-block px-2 py-2 text-2xl "
                  >
                    {menu.title}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
        {/* button section  */}
        <div>
          <button className="h-[40px] w-[40px] grid place-items-center rounded-full text-white bg-dark">
            <IoCartOutline />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
