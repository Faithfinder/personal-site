import React from "react";
import { Segment } from "semantic-ui-react";
import translate from "../../i18n/translate";

const Footer = ({ strings }) => {
  return (
    <Segment basic inverted attached="bottom" textAlign="center" size="mini">
      {strings.footer}
    </Segment>
  );
};

export default translate("Footer")(Footer);
