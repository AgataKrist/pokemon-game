import React, { useState } from "react";
import Menu from "../menu/Menu";
import NavBar from "../navBar/NavBar";

const MenuHeader = ({ bgActive }) => {
  const [isMenuActive, setMenuAcive] = useState(null);

  const handlerChangeMenuStatus = () => {
    setMenuAcive(!isMenuActive);
  };
  return (
    <>
      <Menu
        isMenuActive={isMenuActive}
        onChangeMenuStatus={handlerChangeMenuStatus}
      />
      <NavBar
        bgActive={bgActive}
        isMenuActive={isMenuActive}
        onChangeMenuStatus={handlerChangeMenuStatus}
      />
    </>
  );
};

export default MenuHeader;
