// import React from "react";
import {BallTriangle} from 'react-loader-spinner';

import s from './style.module.css';

const Spinner = () => {
  return (
    <BallTriangle
      className={s.Loader}
      type="Circles"
      color="#3f51b5"
      height={60}
      width={60}
    />
  )
};

export default Spinner;