import React from "react";
import s from "./header.module.css";

const Header = ({ title, description, onClickButton }) => {
  const handlerClick = () => {
    onClickButton && onClickButton("game");
  };
  return (
    <header className={s.root}>
      <div className={s.forest}></div>
      <div className={s.container}>
        <h1>{title}</h1>
        <p>{description}</p>
        <button onClick={handlerClick}> Start Game</button>
      </div>
    </header>
  );
};

export default Header;
