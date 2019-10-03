import React from "react";
import { useSelector } from "react-redux";
import en from "./en";
import ru from "./ru";

const languages = { en, ru };

const translate = key => {
  return WrappedComponent => {
    return props => {
      const currentLanguage = useSelector(state => state.currentLanguage);

      const strings = languages[currentLanguage][key];
      
      return (
        <WrappedComponent
          {...props}
          strings={strings}
          currentLanguage={props.currentLanguage}
        />
      ); 
    }
  };
};

export default translate;
