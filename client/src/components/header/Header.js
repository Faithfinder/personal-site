import React from "react";
import { Menu, Image } from "semantic-ui-react";
import { Link } from "react-router-dom";

import LanguageSelector from "./LanguageSelector";
import translate from "../../i18n/translate";
import paths from "./paths";
import "./Header.css";

const Header = ({ strings }) => {
  return (
    <>
      <Image src="https://placekitten.com/640/100" fluid />
      <Menu className="menuTweaked">
        <Menu.Item as={Link} to={paths.root} className="item">
          {strings.menuAboutMe}
        </Menu.Item>
        <Menu.Item as={Link} to={paths.experience} className="item">
          {strings.menuExperience}
        </Menu.Item>
        <Menu.Item as={Link} to={paths.portfolio} className="item">
          {strings.menuPortfolio}
        </Menu.Item>
        <Menu.Item as={Link} to={paths.contacts} className="item">
          {strings.menuContacts}
        </Menu.Item>
        <Menu.Menu position="right">
          <Menu.Item>
            <LanguageSelector />
          </Menu.Item>
        </Menu.Menu>
      </Menu>
    </>
  );
};

export default translate("Header")(Header);
