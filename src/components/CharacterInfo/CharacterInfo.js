import React from "react";

import "./CharacterInfo.css";

const CharacterInfo = (props) => {
  return (
    <span className="CharacterInfo">
      <label 
        htmlFor="characterName"
        className="characterNameLabel"
      >
        Character Name
      </label>
      <input 
        id="characterName"
        className="characterName" 
        type="text" 
        autoCorrect="false" 
      />
      <label 
        htmlFor="initiative"
        className="initiativeLabel"
      >
        Initiative
      </label>
      <br />
      <input 
        id="initiative"
        className="initiative"
        type="text" 
        autoCorrect="false"
        size="2"
      />
    </span>
  );
}

export default CharacterInfo;