import React from "react";
import translate from "../i18n/translate";

const Header = props => {
  return <div>{props.strings.someText}</div>;
};

export default translate("Header")(Header);
