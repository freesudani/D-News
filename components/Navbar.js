import React from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "../styles/Navbar.module.css";

const menuItems = [
  { text: "About", path: "/" },
  { text: "News", path: "/news" },
];

const Navbar = () => {
  <nav className={styles.navbar}>
    <div className={styles.logo}>
      <Image
        src="/f00ee5966c204ac58a3f256f435f2f92.png"
        alt="site logo"
        width={128}
        height={77}
      />
    </div>
    {menuItems.map((item, index) => {
      return (
        <Link href={item.path} key={index}>
          <a className={styles.anchor}>{item.text}</a>
        </Link>
      );
    })}
  </nav>;
};

export default Navbar;
