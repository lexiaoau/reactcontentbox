import React from 'react';
import './FootBar.css';
import leftArrow from '../resources/leftArrow.png'
import rightArrow from '../resources/rightArrow.png'

const FootBar = (props) => {        // need to keep props rather than 3 single parameter 
    return(
            <div className='footBar'>
            <span className="left-span">
                <img src={leftArrow} alt="" />
                <button 
                    type="button"
                    className="link-button"
                    onClick={() => props.buttonClick(-1)}   // ? why need to use arrow function, not onClick={this.handleTextClick()}              
                >{props.prevText}</button>
            </span>
            
            <span className="right-span">
                <button 
                    type="button"
                    className="link-button"
                    onClick={() => props.buttonClick(1)}                 
                >{props.nextText}</button>
                <img src={rightArrow} alt="" />
            </span>
        </div>        
    );
}

export default FootBar;