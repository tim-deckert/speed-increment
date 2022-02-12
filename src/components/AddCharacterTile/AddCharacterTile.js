import React from "react";
import PlusIcon from "../../assets/icons8-plus-+.svg";
import { useList } from "../../contexts/ListOfCharacters";
import { ADD_CHARACTER } from "../CharacterTile/CharacterTileActions";
import "./AddCharacterTile.css";

const AddCharacterTile = (props) => {
  const characterList = useList();

  const handleAddCharacterTile = () => {
    props.addCharacter();
  }

  return (
    <span className="AddCharacterTile" onClick={handleAddCharacterTile} >
      <img src={PlusIcon} alt="Add New User" />
    </span>
  );
}

export default AddCharacterTile;