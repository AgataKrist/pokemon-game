import React from "react";
import cn from "classnames";
import s from "./navBar.module.css";

const NavBar = ({ isMenuActive, onChangeMenuStatus }) => {
  return (
    <nav class={s.root}>
      <div className={s.navWrapper}>
        <p className={s.brand}>LOGO</p>
        <a
          onClick={onChangeMenuStatus}
          className={cn(s.menuButton, { [s.active]: isMenuActive })}
        >
          <span />
        </a>
      </div>
    </nav>
  );
};

export default NavBar;
