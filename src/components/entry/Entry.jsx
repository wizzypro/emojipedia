import React from "react";

let Entry = (props) => {
  return (
    <div className="term">
      <dt>
        <span className="emoji" role="img" aria-label="Tense Biceps">
          {props.emoji}
        </span>
        <span>{props.dt}</span>
      </dt>
      <dd>{props.dd}</dd>
    </div>
  );
};

export default Entry;
