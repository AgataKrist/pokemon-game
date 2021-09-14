import React, { useState } from "react";
import Menu from "../menu/Menu";
import NavBar from "../navBar/NavBar";

const MenuHeader = () => {
  const [isMenuActive, setMenuAcive] = useState(false);

  const handlerChangeMenuStatus = () => {
    setMenuAcive(!isMenuActive);
  };
  return (
    <>
      <Menu isMenuActive={isMenuActive} />
      <NavBar
        isMenuActive={isMenuActive}
        onChangeMenuStatus={handlerChangeMenuStatus}
      />
    </>
  );
};

export default MenuHeader;
