import React from "react";
import { useHistory } from "react-router";
import s from "./header.module.css";

const Header = ({ title, description }) => {
  const history = useHistory();
  const handlerClick = () => {
    history.push("/game");
  };
  return (
    <header className={s.root}>
      <div className={s.forest}></div>
      <div className={s.silhouette}></div>
      <div className={s.moon}></div>
      <div className={s.container}>
        <h1>{title}</h1>
        <p>{description}</p>
        <button onClick={handlerClick}> Start Game</button>
      </div>
    </header>
  );
};

export default Header;
