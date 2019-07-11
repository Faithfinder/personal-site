import React from "react";
import { Container } from "semantic-ui-react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Header from "./header/Header";
import AboutMe from "./aboutMe/AboutMe";
import ExperienceList from "./experience/ExperienceList";
import ProjectList from "./portfolio/ProjectList";
import Contacts from "./contacts/Contacts";
import paths from "./header/paths";

const App = () => {
  return (
    <Container>
      <Router>
        <Header />
        <Switch>
          <Route path={paths.root} exact component={AboutMe} />
          <Route path={paths.experience} exact component={ExperienceList} />
          <Route path={paths.portfolio} exact component={ProjectList} />
          <Route path={paths.contacts} exact component={Contacts} />
        </Switch>
      </Router>
    </Container>
  );
};

export default App;
