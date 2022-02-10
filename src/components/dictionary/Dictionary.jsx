import React from "react";
import Entry from "../entry/Entry";
import emojipedia from "../../emojipedia.js";

let createEntry = (entry) => {
  return <Entry emoji={entry.emoji} dt={entry.name} dd={entry.meaning} />;
};

let Dictionary = () => {
  return <dl className="dictionary">{emojipedia.map(createEntry)}</dl>;
};

export default Dictionary;
