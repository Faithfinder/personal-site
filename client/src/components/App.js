import React from "react";
import { Container } from "semantic-ui-react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Header from "./header/Header";
import AboutMe from "./aboutMe/AboutMe";
import ExperienceList from "./experience/ExperienceList";
import ProjectList from "./portfolio/ProjectList";
import Contacts from "./contacts/Contacts";

const App = () => {
  return (
    <Container>
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact component={AboutMe}></Route>
          <Route path="/experience" exact component={ExperienceList}></Route>
          <Route path="/portfolio" exact component={ProjectList}></Route>
          <Route path="/contacts" exact component={Contacts}></Route>
        </Switch>
      </Router>
    </Container>
  );
};

export default App;
