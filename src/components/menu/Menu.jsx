import React from "react";
import { Link } from "react-router-dom";
import cn from "classnames";
import s from "./menu.module.css";

const MENU = [
  { title: "HOME", to: "/" },
  { title: "GAME", to: "/game" },
  { title: "ABOUT", to: "/about" },
  { title: "CONTACT", to: "/contact" },
];

const Menu = ({ isMenuActive, onChangeMenuStatus }) => {
  return (
    <div
      className={cn(s.menuContainer, {
        [s.active]: isMenuActive === true,
        [s.deactive]: isMenuActive === false,
      })}
    >
      <div className={s.overlay} />
      <div className={s.menuItems}>
        <ul>
          {MENU.map(({ title, to }) => (
            <li key={to}>
              <Link onClick={onChangeMenuStatus} to={to}>
                {title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Menu;
