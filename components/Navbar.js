import React from "react";
import Link from "next/link";
import Image from "next/image";
import classes from "../styles/Navbar.module.css";
import { useRouter } from "next/router";

const menuItems = [
  { text: "Meals List", path: "/" },
  { text: "Add Meal", path: "/new-meal" },
];

const Navbar = () => {
  const router = useRouter();

  return (
    <nav className={classes.navbar}>
      <div className={classes.logo}>
        <Image
          src="/6287c1323c62428191b8fcaf3c633b96.png"
          alt="site logo"
          width={240}
          height={160}
        />
      </div>
      <div className={classes.links}>
        {menuItems.map((item, index) => {
          return (
            <Link href={item.path} key={index}>
              <a
                className={
                  router.pathname == item.path ? classes.active : classes.anchor
                }
              >
                {item.text}
              </a>
            </Link>
          );
        })}
      </div>
    </nav>
  );
};

export default Navbar;
