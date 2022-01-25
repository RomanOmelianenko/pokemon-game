import { useState } from 'react';
import classNames from 'classnames';

import cardBackSide from './assets/card-back-side.jpg';
import s from './style.module.css';

const PokemonCard = ( props, /*{...props }*/) => {
  // console.log(props);
  const { name, img, id, type, values } = props;
  // console.log('PROPS', props);

  const [isActive, setActive] = useState(false);
  // isActive - текущее состояние
  // setActive - функция, которая изменяет нашу переменную isActive
  // console.log('isActive', isActive);

  const handleClick = () => {
    // console.log('Click to Pokemon with name' + name)
    setActive(!isActive);
  };

  return (
    <div className={s.root} onClick={handleClick}>
      {/* <div className={`${s.pokemonCard} ${isActive ? s.active : ''}`}> */}
      <div className={classNames(s.pokemonCard, {[s.active] : isActive})}>
        <div className={s.cardFront}>
          {/* <div className={`${s.wrap} ${s.front}`}> */}
          <div className={classNames(s.wrap, s.front)}>
            <div className={`${s.pokemon} ${s[type]}` }>
              <div className={s.values}>
                <div className={classNames(s.count, s.top)}>{values.top}</div>
                <div className={classNames(s.count, s.right)}>{values.right}</div>
                <div className={classNames(s.count, s.bottom)}>{values.bottom}</div>
                <div className={classNames(s.count, s.left)}>{values.left}</div>
              </div>
              <div className={s.imgContainer}>
                <img src={img} alt={name} />
              </div>
              <div className={s.info}>
                <span className={s.number}>#{id}</span>
                <h3 className={s.name}>{name}</h3>
                <small className={s.type}>Type: <span>{type}</span></small>
              </div>
            </div>
          </div>
        </div>
        <div className={s.cardBack}>
          <div className={classNames(s.wrap, s.back)}>
            <img src={cardBackSide} alt={name} />
          </div>
        </div>
      </div>
    </div>

  )
};

export default PokemonCard;