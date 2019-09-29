import React from "react";
import { Link } from "react-router-dom";
import { Image, Divider, Header, Segment, Grid } from "semantic-ui-react";
import translate from "../../i18n/translate";
import paths from "../header/paths";
import "./AboutMe.css";

const AboutMe = ({ strings }) => {
  return (
    <Segment basic>
      <Grid stackable verticalAlign="middle" columns="equal">
      <Grid.Column width={3} />
        <Grid.Column width={3}>
          <Image src="me.jpg" rounded size="medium" centered />
        </Grid.Column>
        <Grid.Column>
          <Header size="huge" textAlign="center">
            {strings.helloThere}
          </Header>
          {strings.introStart + " "}
          <Link to={paths.experience}>{strings.introJobExperience}</Link>
          {" " + strings.introAnd + " "}
          <Link to={paths.portfolio}>{strings.introPortfolio}</Link>
          {". " + strings.introEnd + " "}
          <Link to={paths.contacts}>{strings.getInTouch}</Link>
        </Grid.Column>
        <Grid.Column width={3} />
      </Grid>
      <Divider />
      <Image.Group size="tiny">
        <Image
          src="tool-icons\VSC.svg"
          alt="Visual Studio Code"
          inline
          width="30%"
        />
        <Image src="tool-icons\HTML.svg" alt="HTML" inline width="30%" />
        <Image src="tool-icons\CSS.svg" alt="CSS" inline width="30%" />
        <Image src="tool-icons\JS.svg" alt="JS" inline width="30%" />
        <Image src="tool-icons\CSharp.svg" alt="C#" inline width="30%" />
      </Image.Group>
    </Segment>
  );
};

export default translate("AboutMe")(AboutMe);
