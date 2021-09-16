import React, { useState } from "react";
import { useRouteMatch, Route, Switch, Redirect } from "react-router-dom";
import HomePage from "./routes/Home/HomePage";
import GamePage from "./routes/Game/GamePage";
import MenuHeader from "./components/menuHeader/MenuHeader";
import AboutPage from "./routes/About/AboutPage";
import NotFoundPage from "./routes/NotFound/NotFoundPage";
import ContactPage from "./routes/Contact/ContactPage";
import Footer from "./components/footer/Footer";
import s from "./App.module.css";
import cn from "classnames";

const App = () => {
  const match = useRouteMatch("/");
  return (
    <Switch>
      <Route path={"/404"} component={NotFoundPage} />
      <Route>
        <>
          <MenuHeader bgActive={!match.isExact} />
          <div className={cn(s.wrap, { [s.isHomePage]: match.isExact })}>
            <Switch>
              <Route path="/" exact component={HomePage} />
              <Route path="/game" component={GamePage} />
              <Route path="/about" component={AboutPage} />
              <Route path="/contact" component={ContactPage} />
              <Route render={() => <Redirect to="/404" />} />
            </Switch>
          </div>
          <Footer />
        </>
      </Route>
    </Switch>
  );
};

export default App;
