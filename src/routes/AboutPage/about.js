// import React, { useContext } from "react";
// import { TestContext } from "../../context/testContext";

import s from './style.module.css';

const AboutPage = () => {
  // const themeContext = useContext(TestContext);
  // console.log('####: themeContext', themeContext);

  const handleClick = () => {
    // themeContext.onChangeTheme(themeContext.theme === 'light' ? 'dark' : 'light')
  };

  return (
    <div>
      <h1 className={s.aboutTitle}>This is page About</h1>
      <button className={s.aboutButton} onClick={handleClick} >
        Change Theme
      </button>
    </div>
  )
};

export default AboutPage;