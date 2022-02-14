import React, { useState } from 'react';
import { useRouteMatch, Switch, Route } from "react-router-dom";

import StartPage from "./routes/Start/start";
import BoardPage from "./routes/Board/board";
import FinishPage from "./routes/Finish/finish";
import { PokemonContext } from "../../context/pokemonContext";

const GamePage = () => {
  const [selectedPokemons, setSelectedPokemons] = useState({});
  // console.log('####: selectedPokemons', selectedPokemons);

  const match = useRouteMatch();

  const handleSelectedPokemons = (key, pokemon) => {
    // console.log('####: handleSelectedPokemons');
    // console.log('####: key', key);
    // console.log('####: pokemon', pokemon);

    setSelectedPokemons(prevState => {
      if (prevState[key]) {
        const copyState = {...prevState};
        delete copyState[key];

        return copyState;
      };

      return {
        ...prevState,
        [key]: pokemon,
      }
    })
  }

  return (
    <PokemonContext.Provider value={{
      pokemons: selectedPokemons,
      onSelectedPokemons: handleSelectedPokemons
    }} >
      <Switch>
        <Route path={`${match.path}/`} exact component={StartPage} />
        <Route path={`${match.path}/board`} component={BoardPage} />
        <Route path={`${match.path}/finish`} component={FinishPage} />
      </Switch>
    </PokemonContext.Provider>
  );
};

export default GamePage;