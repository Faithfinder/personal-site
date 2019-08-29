import React from "react";
import { Segment } from "semantic-ui-react";

import "./Logo.css";

export default () => {
  return (
    <Segment attached id="logo">
      <span className="jsKeyword">import</span>
      <span className="jsVariable"> React</span>
      <span className="hide-for-arrow">
        {", { "}
        <span className="jsVariable">Component</span>
        {" }"}
      </span>
      <span className="jsKeyword"> from</span>
      <span className="jsString">{' "react"'}</span>
      <br /> <br />
      <span className="jsKeyword">export default </span>
      <span className="hide-for-arrow">
        <span className="jsKeyword2">class </span>
        <span className="jsClass">Logo </span>
        <span className="jsKeyword2">extends </span>
        <span className="jsClass">Component</span>
      </span>
      <span className="hide-for-class">
        {"() "}
        <span className="jsKeyword2">=></span>
      </span>
      {" {"} <br />
      <div className="swing-out-for-arrow">
        <span className="jsMethod">{"    render"}</span>
        {"() {"} <br />
      </div>
      <span className="hide-for-arrow">{"    "}</span>
      <span className="jsKeyword">{"    return"}</span>
      <span className="jsSymbol">{"<"}</span>
      <span className="jsKeyword2">div</span>
      <span className="jsSymbol">{">"}</span>
      {"Logo"}
      <span className="jsSymbol">{"</"}</span>
      <span className="jsKeyword2">div</span>
      <span className="jsSymbol">{">"}</span>
      <br />
      <div className="swing-out-for-arrow">
        {"    }"} <br />
      </div>
      {"}"}
    </Segment>
  );
};
