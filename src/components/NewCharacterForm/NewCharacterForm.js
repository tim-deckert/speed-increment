import React from "react";
import AddPortrait from "../AddPortrait/AddPortrait";
import CharacterInfo from "../CharacterInfo/CharacterInfo";

import './NewCharacterForm.css';

const NewCharacterForm = (props) => {
  return (
      <div>
        <form className="NewCharacterForm">
          <AddPortrait />
          <CharacterInfo />
        </form>
      </div>
  );
}

export default NewCharacterForm;