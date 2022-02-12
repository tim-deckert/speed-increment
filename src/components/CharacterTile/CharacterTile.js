import React, { useState } from 'react';
import './CharacterTile.css';

const CharacterTile = (props) => {
  const [ portrait, setPortrait ] = useState();
  const [ isPortraitPicked, setIsPortraitPicked ] = useState(false);

  const handleChange = (event) => {
    const fileURL = URL.createObjectURL(event.target.files[0]);
    setPortrait(fileURL);
    setIsPortraitPicked(true);
  };

  let characterTile = !isPortraitPicked ? (
    <input type='file' name='portrait' onChange={handleChange} />
  ) 
  : (
    <img src={portrait} alt='Not Loaded' />
  );

  return (
    <span className='CharacterTile'>
      {characterTile}
    </span>
  );
}

export default CharacterTile;