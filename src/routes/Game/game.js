// import React, { useState } from "react";

import s from './style.module.css';

const GamePage = ({ onChangePage }) => {

  // const [page, setPage] = useState('game')

  const handleClick = (page) => {
    // console.log('####: <GamePage />');

    onChangePage && onChangePage(page);
    // setPage(page);
  };

  return (
    <div className={s.game}>
      This is Game Page!!!
      <button 
        onClick={handleClick}
        className={s.headerBtn}
      >
        Back to home
      </button>
    </div>
  )
};

export default GamePage;