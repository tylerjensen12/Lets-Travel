import React from "react";
import { BsYoutube, BsFacebook, BsTwitter, BsInstagram } from "react-icons/bs";
import style from "./Footer.module.css";

const Footer = () => {
  return (
    <footer>
      <div className={style.icons}>
        <a
          href="https://www.youtube.com/parodeejay"
          target="_blank"
          rel="noreferrer"
        >
          <BsYoutube className={style.icon} />
        </a>
        <a
          href="https://www.facebook.com/parodeejay"
          target="_blank"
          rel="noreferrer"
        >
          <BsFacebook className={style.icon} />
        </a>
        <a
          href="https://twitter.com/parodeejay"
          target="_blank"
          rel="noreferrer"
        >
          <BsTwitter className={style.icon} />
        </a>
        <a
          href="https://www.instagram.com/parodeejay/"
          target="_blank"
          rel="noreferrer"
        >
          <BsInstagram className={style.icon} />
        </a>
      </div>
      <p className={style.copy}>
        ©2013-2023 ParoDeeJay • P.O. Box 117 • Grandy, NC 27939 •
        info@parodeejay.com • All Rights Reserved
      </p>
    </footer>
  );
};

export default Footer;
