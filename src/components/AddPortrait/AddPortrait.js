import React, { useRef, useState } from "react";
import BlankPortrait from "../../assets/blank_portrait_plus_opt.svg";
import "./AddPortrait.css"

const AddPortrait = (props) => {
  const inputFile = useRef(null);
  const [ portrait, setPortrait ] = useState();
  const [ isPortraitPicked, setIsPortraitPicked ] = useState(false);

  const onSpanClick = () => {
    inputFile.current.click();
  }

  const handleChange = (event) => {
    const fileURL = URL.createObjectURL(event.target.files[0]);
    setPortrait(fileURL);
    setIsPortraitPicked(true);
  };

  let characterTile = !isPortraitPicked ? (
    <img src={BlankPortrait} alt="Add Portrait" />
  ) 
  : (
    <img src={portrait} alt='Not Loaded' />
  );

  return (
      <span 
        onClick={onSpanClick}
        className="AddPortrait"
      >
        {characterTile}
        <input 
          type='file' 
          ref={inputFile} 
          style={{display: 'none'}} 
          onChange={handleChange}
        />
      </span>
  );
}

export default AddPortrait;