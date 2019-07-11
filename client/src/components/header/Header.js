import React from "react";
import { Menu, Image } from "semantic-ui-react";
import { Link, withRouter } from "react-router-dom";

import LanguageSelector from "./LanguageSelector";
import translate from "../../i18n/translate";
import paths from "./paths";
import "./Header.css";

const Header = ({ strings, location }) => {
  const renderLink = (to, label) => {
    return (
      <Menu.Item as={Link} to={to} active={location.pathname === to}>
        {label}
      </Menu.Item>
    );
  };

  return (
    <>
      <Image src="https://placekitten.com/640/100" fluid />
      <Menu className="menuTweaked">
        {renderLink(paths.root, strings.menuAboutMe)}
        {renderLink(paths.experience, strings.menuExperience)}
        {renderLink(paths.portfolio, strings.menuPortfolio)}
        {renderLink(paths.contacts, strings.menuContacts)}
        <Menu.Menu position="right">
          <Menu.Item>
            <LanguageSelector />
          </Menu.Item>
        </Menu.Menu>
      </Menu>
    </>
  );
};

const traslatedComponent = translate("Header")(Header);

export default withRouter(traslatedComponent);
