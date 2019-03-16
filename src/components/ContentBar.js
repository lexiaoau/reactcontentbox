import React from 'react';
import './ContentBar.css';
import ipadMiniPic from '../resources/ipad-mini.jpg'

const ContentBar = (props) => {
    
    let contentText = props.content;   // props is parameter set from parent component
    
    return (    
        <div className='contentBar'>
            <img src={ipadMiniPic} alt="" />
            <p>
            {contentText.split('<br />').map((item, key) => {   // replace <br /> in text with line break
                return <span key={key}>{item}<br/></span>
            })}
            </p>
        </div>

    );
}

export default ContentBar;
