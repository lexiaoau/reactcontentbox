import React from 'react';
import './FootBar.css';
import leftArrow from '../resources/leftArrow.png'
import rightArrow from '../resources/rightArrow.png'

// need to create class since it need to have internal function(handleTextClick)
export class FootBar extends React.Component {

    handleTextClick = (text) => {    
        this.props.buttonClick(text);  //  buttonClick is function pointer passed from parent         
    }

    render() {
        return (    
            <div className='footBar'>
                <span className="left-span">
                    <img src={leftArrow} alt="" />
                    <button 
                        type="button"
                        className="link-button"
                        onClick={() => this.handleTextClick(-1)}   // ? why need to use arrow function, not onClick={this.handleTextClick()}              
                    >{this.props.prevText}</button>
                </span>
                
                <span className="right-span">
                    <button 
                        type="button"
                        className="link-button"
                        onClick={() => this.handleTextClick(1)}                 
                    >{this.props.nextText}</button>
                    <img src={rightArrow} alt="" />
                </span>
            </div>
        );
    }
}

export default FootBar;