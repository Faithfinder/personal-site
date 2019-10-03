import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Card } from "semantic-ui-react";

import "./Experience.css";
import translate from "../../i18n/translate";
import momentLocale from "../../i18n/moment";
import { fetchPositions } from "../../actions";

const ExperienceList = () => {

  const dispatch = useDispatch();
  const [positions, currentLanguage] = useSelector(state => [state.positions, state.currentLanguage]);

  useEffect(() => {
    dispatch(fetchPositions());
  }, [dispatch]);

  const formatDate = date => {
    const moment = momentLocale(currentLanguage);
    return moment(date).format("MMMM YYYY");
  };

  const renderItem = position => {
    return (
      <Card as="section" key={position.id} fluid>
        <Card.Content>
          <Card.Header as="header">{position.title}</Card.Header>
          <Card.Meta className="capitalize">
            {formatDate(position.startDate)} —{" "}
            {formatDate(position.endDate)}
          </Card.Meta>
          <Card.Description>{position.description}</Card.Description>
        </Card.Content>
      </Card>
    );
  };

  return (
      <>
        {positions.map(position => {
          return renderItem(position);
        })}
      </>
    );
  
}

const translatedComponent = translate("ExperienceList")(ExperienceList);

export default translatedComponent;
