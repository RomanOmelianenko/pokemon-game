// import React from "react";
import { Link } from 'react-router-dom';
import classNames from 'classnames';

import s from './style.module.css';

const MENU = [
  {
    title: 'HOME',
    to: 'welcome'
  },
  {
    title: 'GAME',
    to: 'game'
  },
  {
    title: 'ABOUT',
    to: 'about'
  },
  {
    title: 'CONTACT',
    to: 'contact'
  }
]

const Menu = ({isOpen, onCloseHamburg}) => {
  return (
    <div className={classNames(s.menuContainer, {
      [s.active]: isOpen === true,
      [s.deactive]: isOpen === false,
    })}>
      <div className={s.overlay} />
      <div className={s.menuItems}>
        <ul>

          {
            MENU.map(({title, to}, index) => (
              <li key={index}>
                <Link to={to} onClick={onCloseHamburg}>
                  {title}
                </Link>
              </li>
            ))
          }

          {/* <li>
            <a href="#welcome">
              HOME
            </a>
          </li>
          <li>
            <a href="#game">
              GAME
            </a>
          </li>
          <li>
            <a href="#about">
              ABOUT
            </a>
          </li>
          <li>
            <a href="#contact">
              CONTACT
            </a>
          </li> */}
        </ul>
      </div>
    </div>
  )
};

export default Menu;