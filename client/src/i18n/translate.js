import React from "react";
import { connect } from "react-redux";
import en from "./en";
import ru from "./ru";

const languages = { en, ru };

const translate = key => {
  return WrappedComponent => {
    class TranslationComponent extends React.Component {
      render() {
        const strings = languages[this.props.currentLanguage][key];
        const merged = {
          ...this.props.strings,
          ...strings
        };
        if (strings) {
          return (
            <WrappedComponent
              {...this.props}
              strings={merged}
              currentLanguage={this.props.currentLanguage}
            />
          );
        }

        return (
          <WrappedComponent
            {...this.props}
            currentLanguage={this.props.currentLanguage}
          />
        );
      }
    }

    const mapStateToProps = state => ({
      currentLanguage: state.currentLanguage
    });

    return connect(mapStateToProps)(TranslationComponent);
  };
};

export default translate;
