import React, { Component } from 'react';
import './App.css';
import TitleBar from './components/TitleBar'; 
import ContentBar from './components/ContentBar'; 
import FootBar from './components/FootBar'; 
import jsonData from "./resources/content.json";  // read json data from local file

class App extends Component {
  
  constructor() {
    super()
    this.jsonDataArray = jsonData.content;    
    
    this.state = {                // set class state
      isFolded: false,
      index: 0
    }
    this.handleClick=this.handleClick.bind(this);   // ? need to be bind to include function handleClick in this class scope to use "this"
    this.handleFoldClick=this.handleFoldClick.bind(this);
  } 

  getInitialState(){
    return({index:0, isFolded: false})
  }

  handleClick(thispram) {
    let newIndex = this.state.index + thispram ;
    
    if ( newIndex < 0 || newIndex > (this.jsonDataArray.length - 1) )
    {
      console.log("index out of range:" + newIndex);
      return;
    } 

    this.setState({index: newIndex});

  }

  handleFoldClick() {
    console.log("handleFoldClick")
    var oDiv = document.getElementById("hiddenPart"); 
    oDiv.style.display = (oDiv.style.display === "none") ? "block" : "none"; 
    let newIsFolded = (this.state.isFolded === true) ? false : true;
    this.setState({isFolded: newIsFolded});
  }

  render() {
    let prevTitle = "";
    let nextTitle = "";

    prevTitle = ( this.state.index === 0 ) ? "Prev" : this.jsonDataArray[this.state.index-1].title;
   
    nextTitle = ( this.state.index === (this.jsonDataArray.length - 1) ) ? "Next" : this.jsonDataArray[this.state.index+1].title;

    let currentContent = this.jsonDataArray[this.state.index].description;    

    return (
      <div className="App">

        <div className="ContentBox">
          <div className="TitleBar">
            <TitleBar 
                titleText="Buying an iPad Mini?" 
                isFold={this.state.isFolded} 
                foldClick={this.handleFoldClick} 
            />
          </div>
          <div id="hiddenPart">
            <div className="ContentBarClass">
              <ContentBar 
                content={currentContent}
              />
            </div>                   
            <div className="FootBar">
              <hr className="hrline" /> 
              <FootBar 
                prevText={prevTitle} 
                nextText={nextTitle}               
                buttonClick={this.handleClick}    // pass function pointer as callback to get value from child
              />            
            </div>
          </div>
        </div>
        <h1>end</h1>
      </div>  

    );
  }
}

export default App;

