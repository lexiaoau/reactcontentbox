import React from 'react';
import './TitleBar.css';
import upArrow from '../resources/upArrow.png'
import downArrow from '../resources/downArrow.png'

const TitleBar = (props) => {
  
  let arrowPicture;
  if (props.isFold) {
    arrowPicture = (
      <img src={downArrow} alt="" onClick={props.foldClick}/>
    )
  }
  else {
    arrowPicture = (
      <img src={upArrow} alt="" onClick={props.foldClick}/>
    )
  }
  return (    
    <div className='titleBar'>
      <p  className='titleBarText'>{props.titleText}</p>  
      <div  className='Image'>
        {arrowPicture}    
      </div> 
    </div>
  );
}

export default TitleBar;