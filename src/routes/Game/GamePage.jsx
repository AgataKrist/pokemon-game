import React from "react";
import s from "./style.module.css";

const GamePage = ({ onChangePage }) => {
  const handlerClick = () => {
    onChangePage("app");
  };
  return (
    <>
      <div>This is game page!!!</div>
      <button onClick={handlerClick}>HomePage</button>
    </>
  );
};

export default GamePage;
