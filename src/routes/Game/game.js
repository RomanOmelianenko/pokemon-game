// import React, { useState } from "react";

const GamePage = ({ onChangePage }) => {

  // const [page, setPage] = useState('game')

  const handleClick = (page) => {
    console.log('####: <GamePage />');

    onChangePage && onChangePage(page);
    // setPage(page);
  };

  return (
    <div>
      This is Game Page!!!
      <button onClick={handleClick}>
        Go Home Page
      </button>
    </div>
  )
};

export default GamePage;