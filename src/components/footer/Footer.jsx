import React from "react";
import s from "./footer.module.css";

const Footer = () => {
  return (
    <footer>
      <div className={s.wrapper}>
        <h3>Thanks for visited</h3>
        <p>© 2021 #ReactMarathon.</p>
      </div>
    </footer>
  );
};

export default Footer;
