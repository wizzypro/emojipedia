import React from "react";
import Entry from "../entry/Entry";

let Dictionary = (props) => {
  let createEntry = (entry, index) => {
    return (
      <Entry
        key={index}
        emoji={entry.emoji}
        dt={entry.name}
        dd={entry.meaning}
      />
    );
  };
  return <dl className="dictionary">{props.data.map(createEntry)}</dl>;
};

export default Dictionary;
