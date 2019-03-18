import React from 'react';
import './TitleBar.css';
import upArrow from '../resources/upArrow.png'
import downArrow from '../resources/downArrow.png'

const TitleBar = (props) => {
  
  return (    
    <div className='titleBar'>
      <p  className='titleBarText'>{props.titleText}</p>  
      <div  className='Image'>
        <img src={props.isFold ? downArrow : upArrow} alt="" onClick={props.foldClick}/>        
      </div> 
    </div>
  );
}

export default TitleBar;