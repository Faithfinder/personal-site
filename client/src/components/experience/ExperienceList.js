import React, { Component } from "react";
import { connect } from "react-redux";
import { Card } from "semantic-ui-react";

import "./Experience.css";
import translate from "../../i18n/translate";
import momentLocale from "../../i18n/moment";
import { fetchPositions } from "../../actions";

class ExperienceList extends Component {
  componentDidMount() {
    this.props.fetchPositions();
  }

  formatDate = date => {
    const moment = momentLocale(this.props.currentLanguage);
    return moment(date).format("MMMM YYYY");
  };

  renderItem = position => {
    return (
      <Card as="section" key={position.id} fluid>
        <Card.Content>
          <Card.Header as="header">{position.title}</Card.Header>
          <Card.Meta className="capitalize">
            {this.formatDate(position.startDate)} —{" "}
            {this.formatDate(position.endDate)}
          </Card.Meta>
          <Card.Description>{position.description}</Card.Description>
        </Card.Content>
      </Card>
    );
  };

  render() {
    return (
      <>
        {this.props.positions.map(position => {
          return this.renderItem(position);
        })}
      </>
    );
  }
}

const mapStateToProps = state => ({ positions: state.positions });
const mapDispatchToProps = { fetchPositions };

const translatedComponent = translate("ExperienceList")(ExperienceList);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(translatedComponent);
