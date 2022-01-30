// import React, { useState } from "react";
import { useRouteMatch, Switch, Route, Redirect } from "react-router-dom";
import classNames from "classnames";

import HomePage from "./routes/HomePage/home";
import GamePage from "./routes/GamePage/game";
import MenuHeader from "./components/MenuHeader/menuheader";
import Footer from "./components/Footer/footer";
import AboutPage from "./routes/AboutPage/about";
import ContactPage from "./routes/ContactPage/contact";
import NotFoundPage from "./routes/NotFoundPage/notFound";

import s from './style.module.css';

const App = () => {
  const match = useRouteMatch('/');
  // console.log('####: match', match);
  return (
    
      <Switch>
        <Route path='/404' component={NotFoundPage}
          // render={() => (
          //   <h1>404 Not Found</h1>
          // )} 
        />
        <Route>
          <>
            <MenuHeader bgActive={!match.isExact} />
              <div className={classNames(s.wrap, {[s.isHomePage]: match.isExact})}>
                <Switch>
                  <Route path='/' exact component={HomePage} />
                  <Route path='/home' component={HomePage} />
                  <Route path='/game' component={GamePage} />
                  <Route path='/about' component={AboutPage}
                    // render={() => (
                    //   <h1>This is page About</h1>
                    // )} 
                  />
                  <Route path='/contact' component={ContactPage}
                    // render={() => (
                    //   <h1>This is page Contact</h1>
                    // )} 
                  />
                  <Route render={() => (
                    <Redirect to='/404' />
                  )} />
                </Switch>
              </div>
            <Footer />
          </>
        </Route>
      </Switch>
  )
};

export default App;