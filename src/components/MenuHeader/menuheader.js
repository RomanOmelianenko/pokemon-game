import React, { useState } from "react";
import Menu from "../Menu/menu";
import Navbar from "../NavBar/navbar";

const MenuHeader = ({bgActive}) => {

  const [isOpen, setOpen] = useState(null);

  const handleClickHumburg = () => {
    setOpen(prevState => !prevState)
  };

  return (
    <>
      <Menu 
        isOpen={isOpen} 
        // onClickHumburg={handleClickHumburg}
      />
      <Navbar 
        isOpen={isOpen} 
        bgActive={bgActive} 
        onClickHumburg={handleClickHumburg} 
      />
    </>
  )
};

export default MenuHeader;