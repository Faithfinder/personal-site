import React, { Component } from "react";
import { connect } from "react-redux";
import { changeLanguage } from "../../actions";
import languages from "../../i18n/languages";
import { Flag, Dropdown } from "semantic-ui-react";
import translate from "../../i18n/translate";

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

  renderLabel = () => {
    const { renderLabel, strings } = this.props;
    if (renderLabel) {
      return strings.language;
    } else {
      return null;
    }
  };

  render() {
    return (
      <Dropdown
        trigger={
          <>
            <Flag
              aria-label={`${this.props.strings.language} - ${languages[this.props.currentLanguage].name}`}
              name={languages[this.props.currentLanguage].iso}
            />
            {this.renderLabel()}
          </>
        }
      >
        <Dropdown.Menu>{this.renderList()}</Dropdown.Menu>
      </Dropdown>
    );
  }
}

const mapStateToProps = state => ({
  currentLanguage: state.currentLanguage
});

const translatedComponent = translate("LanguageSelector")(LanguageSelector);

export default connect(
  mapStateToProps,
  { changeLanguage }
)(translatedComponent);
