// import React, { useState } from "react";
import { useHistory } from 'react-router-dom';

import s from './style.module.css';

const GamePage = ({ onChangePage }) => {
  const history = useHistory();

  // const [page, setPage] = useState('game')

  const handleClick = (page) => {
    // console.log('####: <GamePage />');

    // onChangePage && onChangePage(page);
    // setPage(page);

    history.push('/');
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