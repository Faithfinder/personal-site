import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { changeLanguage } from "../../actions";
import languages from "../../i18n/languages";
import { Flag, Dropdown } from "semantic-ui-react";
import translate from "../../i18n/translate";

const LanguageSelector = ({shouldRenderLabel, strings}) => {

  const dispatch = useDispatch();
  const currentLanguage = useSelector(state => state.currentLanguage);

  const onClick = language => {
    dispatch(changeLanguage(language.value));
  };

  const renderItem = language => {
    return (
      <Dropdown.Item
        key={language.value}
        active={languages[currentLanguage].value === language.value}
        onClick={() => onClick(language)}
      >
        <Flag name={language.iso}></Flag>
        <span className="text">{language.name}</span>
        <div className="description">{language.englishName}</div>
      </Dropdown.Item>
    );
  };

  const renderList = () => {
    return Object.values(languages).map(language => {
      return renderItem(language);
    });
  };

  const renderLabel = () => {
    
    if (shouldRenderLabel) {
      return strings.language;
    } else {
      return null;
    }
  };
  
  return (
    <Dropdown
      trigger={
        <>
          <Flag
            aria-label={`${strings.language} - ${languages[currentLanguage].name}`}
            name={languages[currentLanguage].iso}
          />
          {renderLabel()}
        </>
      }
    >
      <Dropdown.Menu>{renderList()}</Dropdown.Menu>
    </Dropdown>
  );  
}

export default translate("LanguageSelector")(LanguageSelector);
