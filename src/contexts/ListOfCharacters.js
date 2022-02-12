import React, { createContext, useReducer } from "react";
import * as characterActions from "../components/CharacterTile/CharacterTileActions";
import CharacterTile from "../components/CharacterTile/CharacterTile";
import { useContext } from "react/cjs/react.development";

const CharacterListContext = createContext();

const newCharacterTile = <CharacterTile />;

const addCharacter = (state, action) => {
  console.log("State and action at this point: ", state, action);
  const characterList = [ newCharacterTile, ...state.characters ];
  state = {"characters": characterList};
  return state;
}

const removeCharacter = (state, action) => {
  console.log("State and action at this point: ", state, action);
  return state;
}

const characterListReducer = (state, action) => {
  switch(action.type) {
    case characterActions.ADD_CHARACTER: return addCharacter(state, action);
    case characterActions.REMOVE_CHARACTER: return removeCharacter(state, action);
    default: return state;
  }
}

const CharacterListProvider = ({children}) => {
  const [state, dispatch] = useReducer(characterListReducer, {characters: []});

  const value = {state, dispatch};
  console.log("Value in Provider: ", value);
  return <CharacterListContext.Provider value={value}>{children}</CharacterListContext.Provider>
}

const useList = () => {
  const context = useContext(CharacterListContext);

  console.log("useList called. Context: ", context);
  if (context === undefined) {
    throw new Error('useList must be within a CharacterListProvider')
  }

  return context;
}

export {CharacterListProvider, useList};