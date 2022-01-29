// import React, { useState } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom/cjs/react-router-dom.min";

import HomePage from "./routes/Home/home";
import GamePage from "./routes/Game/game";

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' exact component={HomePage} />
        <Route path='/home' component={HomePage} />
        <Route path='/game' component={GamePage} />
        <Route path='/about' render={() => (
          <h1>This is page About</h1>
        )} />
        <Route path='/contact' render={() => (
          <h1>This is page Contact</h1>
        )} />
        <Route render={() => (
          <h1>404 Not Found</h1>
        )} />
      </Switch>
    </BrowserRouter>
  )
};

export default App;