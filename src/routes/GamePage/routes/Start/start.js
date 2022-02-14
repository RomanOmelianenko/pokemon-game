import React, { useState, useEffect, useContext } from "react";
import { useHistory } from 'react-router-dom';

import PokemonCard from '../../../../components/PokemonCard/pokemon';

import { FireBaseContext } from "../../../../context/firebaseContext";
import { PokemonContext } from "../../../../context/pokemonContext";

import s from './style.module.css';

const StartPage = () => {
  const history = useHistory();

  const handleClickToHome = () => {
    history.push('/');
  };

  const firebase = useContext(FireBaseContext);

  const pokemonsContext = useContext(PokemonContext);
  // console.log('####: pokemonsContext', pokemonsContext);

  const [pokemons, setPokemons] = useState({});

  // console.log('####: firebase', firebase);

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

    return () => firebase.offPokemonSocet();
  }, [firebase]);

  // Состояние переворачивания карточки которое записывается в базу
  const handleChangeSelected = (key) => {
    const pokemon = {...pokemons[key]};

    pokemonsContext.onSelectedPokemons(key, pokemon);

    setPokemons(prevState => ({
      ...prevState,
      [key]: {
        ...prevState[key],
        selected: !prevState[key].selected,
      }
    }))
  };

  const handleStartGameClick = () => {
    history.push('/game/board');
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
          onClick={handleStartGameClick}
          disabled={Object.keys(pokemonsContext.pokemons).length < 5}
        >
          Start game
        </button>
      </div>
      <div className={s.flex}>
        {
          // В firebase не массив, а обьект и для того чтобы отображались покемоны надо обернуть в Object.entries() и он возвращает массив массивов
          Object.entries(pokemons).map(([key, {name, img, id, type, values, selected}]) => (
            <PokemonCard
              className={s.card} 
              key={key}
              name={name}
              img={img}
              id={id}
              type={type}
              values={values}
              isActive={true}
              isSelected={selected}
              onClickCard={() => {
                if (Object.keys(pokemonsContext.pokemons).length < 5 || selected) {
                  handleChangeSelected(key);
                };
              }}
            />
          ))
        }
      </div>
    </>
  )
};

export default StartPage;