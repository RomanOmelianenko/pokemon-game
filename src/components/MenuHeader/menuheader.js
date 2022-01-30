import React, { useState } from "react";
import Menu from "../Menu/menu";
import Navbar from "../NavBar/navbar";

const MenuHeader = ({bgActive}) => {

  const [isOpen, setOpen] = useState(null);

  const handleClickHamburg = () => {
    setOpen(prevState => !prevState)
  };

  return (
    <>
      <Menu 
        isOpen={isOpen}
        onCloseHamburg={handleClickHamburg}
      />
      <Navbar 
        isOpen={isOpen} 
        bgActive={bgActive} 
        onClickHamburg={handleClickHamburg} 
      />
    </>
  )
};

export default MenuHeader;