import React, { Component } from "react";
import { connect } from "react-redux";
import { changeLanguage } from "../actions";
import languages from "../i18n/languages";
import { Flag, Dropdown } from "semantic-ui-react";

class LanguageSelector extends Component {
  onClick = language => {
    this.props.changeLanguage(language.value);
  };

  renderItem = language => {
    return (
      <Dropdown.Item
        key={language.value}
        active={languages[this.props.currentLanguage].value === language.value}
        onClick={() => this.onClick(language)}
        fluid
      >
        <Flag name={language.iso}></Flag>
        <span className="text">{language.name}</span>
        <div className="description">{language.englishName}</div>
      </Dropdown.Item>
    );
  };

  renderList = () => {
    return Object.values(languages).map(language => {
      return this.renderItem(language);
    });
  };

  render() {
    return (
      <Dropdown
        text={<Flag name={languages[this.props.currentLanguage].iso}></Flag>}
        button
        floating
      >
        <Dropdown.Menu>{this.renderList()}</Dropdown.Menu>
      </Dropdown>
    );
  }
}

const mapStateToProps = state => ({
  currentLanguage: state.currentLanguage
});

export default connect(
  mapStateToProps,
  { changeLanguage }
)(LanguageSelector);
