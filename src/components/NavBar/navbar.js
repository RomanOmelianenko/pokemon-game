// import React from "react";
import classNames from 'classnames';

import s from './style.module.css';

const Navbar = (props) => {
  const { isOpen, bgActive = false, onClickHamburg } = props;

  return (
    <nav 
      // id={s.navbar} 
      className={classNames(s.root, {[s.bgActive]: bgActive})}
    >
      <div className={s.navWrapper}>
        <p className={s.brand}>
          LOGO
        </p>
        <div 
          className={classNames(s.menuButton, {
            [s.active]: isOpen
          })}
          onClick={onClickHamburg}
        >
          <span />
        </div>
      </div>
    </nav>
  )
};

export default Navbar;