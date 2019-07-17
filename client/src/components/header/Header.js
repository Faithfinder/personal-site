import React from "react";
import { Menu, Image, Dropdown } from "semantic-ui-react";
import { Link, withRouter } from "react-router-dom";

import LanguageSelector from "./LanguageSelector";
import translate from "../../i18n/translate";
import paths from "./paths";
import "./Header.css";

const Header = ({ strings, location }) => {
  const menuLinks = [
    { path: paths.root, label: strings.menuAboutMe },
    { path: paths.experience, label: strings.menuExperience },
    { path: paths.portfolio, label: strings.menuPortfolio },
    { path: paths.contacts, label: strings.menuContacts }
  ];

  const renderLink = ({ path, label }) => {
    const active = location.pathname === path ? "active" : "";
    return (
      <Link key={path} className={`item ${active}`} to={path}>
        {label}
      </Link>
    );
  };

  const renderMainMenu = () => {
    return menuLinks.map(link => {
      return renderLink(link);
    });
  };

  const renderRightMenu = renderLabel => {
    return (
      <div className="item">
        <LanguageSelector renderLabel={renderLabel} />
      </div>
    );
  };

  return (
    <>
      <Image src="https://placekitten.com/640/100" fluid />
      <Menu className="menuTweaked">
        <Menu.Item id="nav-btn">
          <Dropdown icon={{ name: "content", size: "large" }}>
            <Dropdown.Menu>
              {renderMainMenu()}
              {renderRightMenu(true)}
            </Dropdown.Menu>
          </Dropdown>
        </Menu.Item>

        <Menu.Menu id="menu-left">{renderMainMenu()}</Menu.Menu>

        <Menu.Menu id="menu-right" position="right">
          {renderRightMenu()}
        </Menu.Menu>
      </Menu>
    </>
  );
};

const traslatedComponent = translate("Header")(Header);

export default withRouter(traslatedComponent);
