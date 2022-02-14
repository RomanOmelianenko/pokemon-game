import React, { useState } from "react";
import { useRouteMatch, Switch, Route, Redirect } from "react-router-dom";
import classNames from "classnames";

import HomePage from "./routes/HomePage/home";
import GamePage from "./routes/GamePage/game";
import MenuHeader from "./components/MenuHeader/menuheader";
import Footer from "./components/Footer/footer";
import AboutPage from "./routes/AboutPage/about";
import ContactPage from "./routes/ContactPage/contact";
import NotFoundPage from "./routes/NotFoundPage/notFound";

// import { TestContext } from "./context/testContext";
import { FireBaseContext } from './context/firebaseContext';
import Firebase from './services/firebase';

import s from './style.module.css';

const App = () => {

  const match = useRouteMatch('/');

  return (
    <FireBaseContext.Provider 
      value={new Firebase()}
    >
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
    </FireBaseContext.Provider>
  )
};

export default App;