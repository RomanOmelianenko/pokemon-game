// import React from 'react';

import style from './style.module.css';

const Header = (props) => {
  const { title, descr, onClickButton } = props;

  const handleClick = () => {
    console.log('####: <Header />');

     onClickButton && onClickButton('game');
  }

  return (
    <header className={style.root}>
      <div className={style.forest}></div>
      <div className={style.container}>
        <h1>{title}</h1>
        <p>{descr}</p>
        <button onClick={handleClick}>
          Start Game
        </button>
      </div>
    </header>
  )
};

export default Header;