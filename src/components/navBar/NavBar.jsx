import React from "react";
import cn from "classnames";
import s from "./navBar.module.css";

const NavBar = ({ isMenuActive, onChangeMenuStatus, bgActive }) => {
  return (
    <nav className={cn(s.root, { [s.bgActive]: bgActive })}>
      <div className={s.navWrapper}>
        <p className={s.brand}>LOGO</p>
        <div
          onClick={onChangeMenuStatus}
          className={cn(s.menuButton, { [s.active]: isMenuActive })}
        >
          <span />
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
