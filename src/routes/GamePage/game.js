import React, { useState, useEffect, useContext } from "react";
import { useHistory } from 'react-router-dom';

import PokemonCard from '../../components/PokemonCard/pokemon';

import database from "../../services/firebase";
import data from '../../db/data.json';
import { FireBaseContext } from "../../context/firebaseContext";

import s from './style.module.css';

const DATA = data;

const GamePage = () => {
  const history = useHistory();

  const handleClickToHome = (page) => {
    history.push('/');
  };

  const firebase = useContext(FireBaseContext);

  const [pokemons, setPokemons] = useState({});

  console.log('####: firebase', firebase);

  // Получаем данные с базы
  // const getPokemons = async () => {
  //   const response = await firebase.getPokemonsOnce();
  //   // console.log('####: response', response);
  // };

  useEffect(() => {
    // getPokemons();
    firebase.getPokemonSocet((pokemons) => {
      setPokemons(pokemons);
    });
  }, []);

  // Состояние переворачивания карточки которое записывается в базу
  const handleChangeActive = (id) => {
    setPokemons(prevState => {
      return Object.entries(prevState).reduce((acc, item) => {
        const pokemon = {...item[1]};
        if (pokemon.id === id) {
          pokemon.active = !pokemon.active;
        };

        acc[item[0]] = pokemon;

        // database.ref('pokemons/' + item[0]).set(pokemon)

        firebase.postPokemons(item[0], pokemon)

        return acc;
      }, {});
    });
  };

  // Добавляются карточки из базы
  const handleAddPokemon = () => {
    const data = DATA;
    // const newKey = database.ref().child('pokemons').push().key;
    // database.ref('pokemons/' + newKey).set(data).then(() => getPokemons());
    firebase.addPokemon(data);
  };

  return (
    <>
      <div className={s.buttons}>
        <button 
          className={s.headerBtn}
          onClick={handleClickToHome}
        >
          Back to home
        </button>
        <button 
          className={s.headerBtn}
          onClick={handleAddPokemon}
        >
          Add new pokemon
        </button>
      </div>
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
              isActive={active}
              onClickCard={handleChangeActive}
            />
          ))
        }
      </div>
    </>
  )
};

export default GamePage;