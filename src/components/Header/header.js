// import React from 'react';
import { useHistory } from 'react-router-dom';

import s from './style.module.css';

const Header = (props) => {
  const { title, descr, /*onClickButton*/ } = props;

  const history = useHistory();

  const handleClick = () => {
    // console.log('####: <Header />');

    //  onClickButton && onClickButton('game');

    history.push('/game');
  }

  return (
    <header className={s.root}>
      <div className={s.forest}></div>
      <div className={s.silhouette}></div>
      <div className={s.moon}></div>
      <div className={s.container}>
        <h1>{title}</h1>
        <p>{descr}</p>
        <button className={s.headerBtn} onClick={handleClick}>
          Start Game
        </button>
      </div>
    </header>
  )
};

export default Header;