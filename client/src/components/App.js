import React from "react";
import { Container, Segment } from "semantic-ui-react";
import { Router, Route, Switch } from "react-router-dom";

import "./App.css";
import Header from "./header/Header";
import AboutMe from "./aboutMe/AboutMe";
import ExperienceList from "./experience/ExperienceList";
import ProjectList from "./portfolio/ProjectList";
import Contacts from "./contacts/Contacts";
import paths from "./header/paths";
import history from "../history";
import Footer from "./footer/Footer";

const App = () => {
  return (
    <Container id="main-wrapper">
      <Router history={history}>
        <Header />
        <Segment attached id="body">
          <Switch>
            <Route path={paths.root} exact component={AboutMe} />
            <Route path={paths.experience} exact component={ExperienceList} />
            <Route path={paths.portfolio} exact component={ProjectList} />
            <Route path={paths.contacts} exact component={Contacts} />
          </Switch>
        </Segment>
        <Footer />
      </Router>
      
    </Container>
  );
};

export default App;
