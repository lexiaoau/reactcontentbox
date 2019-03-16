import React from 'react';
import './TitleBar.css';
import upArrow from '../resources/upArrow.png'
import downArrow from '../resources/downArrow.png'

const TitleBar = ({ titleText , isFold  }) => {
  
  let arrowPicture;
  if (isFold) {
    arrowPicture = (
      <img src={downArrow} alt="" />
    )
  }
  else {
    arrowPicture = (
      <img src={upArrow} alt="" />
    )
  }
  return (    
    <div className='titleBar'>
      <p  className='titleBarText'>{titleText}</p>  
      <div  className='Image'>
        {arrowPicture}    
      </div> 
    </div>
  );
}

export default TitleBar;