import React, { useState, useContext } from "react";
import CharacterTile from "../../components/CharacterTile/CharacterTile";
import AddCharacterTile from "../../components/AddCharacterTile/AddCharacterTile";
import Modal from "../Modal/Modal";
import { useList } from "../../contexts/ListOfCharacters";

import "./InitiativeContainer.css";
import NewCharacterForm from "../../components/NewCharacterForm/NewCharacterForm";

const InitiativeContainer = () => {
  const [ isAddingCharacter, setIsAddingCharacter ] = useState(false);
  const characterList = useList().state.characters;

  const newCharacterHandler = () => {
    setIsAddingCharacter(true);
  }

  const cancelNewCharacter = () => {
    setIsAddingCharacter(false);
  }

  return (
    <>
      <Modal 
        show={isAddingCharacter}
        closeModal={cancelNewCharacter}
      >
        <NewCharacterForm />
      </Modal>
      <div className="InitiativeContainer">
        {characterList}
        <AddCharacterTile addCharacter={newCharacterHandler} />
      </div>
    </>
  );
}

export default InitiativeContainer;