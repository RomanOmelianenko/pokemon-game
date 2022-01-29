// import React, { useState } from "react";
import { useRouteMatch, Switch, Route } from "react-router-dom/cjs/react-router-dom.min";
import classNames from "classnames";

import HomePage from "./routes/Home/home";
import GamePage from "./routes/Game/game";
import MenuHeader from "./components/MenuHeader/menuheader";
import Footer from "./components/Footer/footer";

import s from './style.module.css';

const App = () => {
  const match = useRouteMatch('/');
  console.log('####: match', match);
  return (
    
      <Switch>
        <Route>
          <>
            <MenuHeader bgActive={!match.isExact} />
              <div className={classNames(s.wrap, {[s.isHomePage]: match.isExact})}>
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
                </Switch>
              </div>
            <Footer />
          </>
        </Route>
        
        <Route render={() => (
          <h1>404 Not Found</h1>
        )} />
      </Switch>
  )
};

export default App;