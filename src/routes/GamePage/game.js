import React, { useState, useEffect } from "react";
import { useHistory } from 'react-router-dom';

import PokemonCard from '../../components/PokemonCard/pokemon';
// import POKEMONS from '../../db/db.json';

import database from "../../services/firebase";

import s from './style.module.css';

const GamePage = ({ onChangePage }) => {
  const history = useHistory();

  const handleClick = (page) => {

    history.push('/');
  };

  // const [pokemons, setPokemons] = useState({POKEMONS});

  const [pokemons, setPokemons] = useState({});

  // Получаем данные с базы
  useEffect(() => {
    database.ref('pokemons').once('value', (snapshot) => {
      setPokemons(snapshot.val());
    })
  }, []);

  const handleChangeActive = (id) => {
    // console.log('Click');
    setPokemons(prevState => {
      return Array.from(prevState, (item) => {
        
        if (item.id === id) {
          item.active = true;
        }
        return item;
      })
    });

    // setPokemons(prevState => {
    //   return Object.entries(prevState).reduce((acc, item) => {
    //     const pokemon = {...item[1]};
    //     if (pokemon.id === id) {
    //       pokemon.active = true;
    //     };
    //     acc[item[0]] = pokemon;
    //     return acc;
    //   }, {});
    // });
  };

  return (
    <>
      <div className={s.flex}>
        {
          // В firebase не массив, а обьект и для того чтобы отображались покемоны надо обернуть в Object.entries() и он возвращает массив массивов
          Object.entries(pokemons).map(([key, {name, img, id, type, values, active}]) => (
            <PokemonCard 
              key={key}
              name={name}
              img={img}
              id={id}
              type={type}
              values={values}
              isActive={true}
              onClickCard={handleChangeActive}
            />
          ))
          // pokemons.map(({name, img, id, type, values, active}) => (
          //   <PokemonCard 
          //     key={id}
          //     name={name}
          //     img={img}
          //     id={id}
          //     type={type}
          //     values={values}
          //     isActive={active}
          //     onClickCard={handleChangeActive}
          //   />
          // ))
        }
      </div>
      <button 
        className={s.headerBtn}
        onClick={handleClick}
      >
        Back to home
      </button>
    </>

    // <div className={s.game}>
    //   This is Game Page!!!
    //   <button 
    //     onClick={handleClick}
    //     className={s.headerBtn}
    //   >
    //     Back to home
    //   </button>
    // </div>
  )
};

export default GamePage;