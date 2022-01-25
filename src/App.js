import React, { useState } from "react";
import HomePage from "./routes/Home/home";
import GamePage from "./routes/Game/game";

const App = () => {
  const [page, setPage] = useState('app');

  const handleChangePage = (page) => {
    // console.log('####: <App />');

    setPage(page);
  }

    switch (page) {
      case 'app':
        return <HomePage onChangePage={handleChangePage} />

      case 'game': 
        return <GamePage onChangePage={handleChangePage}/>

      default:
        return <HomePage />
    }
};

export default App;