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
  } 

  getInitialState(){
    return({index:0})
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

  render() {
    let prevTitle = "";
    let nextTitle = "";

    if( this.state.index === 0 )
    {
      prevTitle = "Prev";
    }
    else
    {
      prevTitle = this.jsonDataArray[this.state.index-1].title;
    }

    if( this.state.index === (this.jsonDataArray.length - 1) )
    {
      nextTitle = "Next";
    }
    else
    {
      nextTitle = this.jsonDataArray[this.state.index+1].title;
    }    

    let currentContent = this.jsonDataArray[this.state.index].description;    

    return (
      <div className="App">

        <div className="ContentBox">
          <div className="TitleBar">
            <TitleBar titleText="Buying an iPad Mini?" isFold={true} />
          </div>
          <div className="ContentBarClass">
            <ContentBar 
              content={currentContent}
            />
          </div>
          <hr />
          <div className="FootBar">
            <FootBar 
              prevText={prevTitle} 
              nextText={nextTitle}               
              buttonClick={this.handleClick}    // pass function pointer as callback to get value from child
            />
            
          </div>
        </div>
      </div>      
    );
  }
}

export default App;




// var BarList = React.createClass({
//   render(){
//       var index=this.props.index;
//       var onhandleClick=this.props.onhandleClick;
//       var bars = this.props.msg.map(function(m){
//               return (<Bar icon={m.icon}  
//                   onhandleClick={onhandleClick} index={index} myIndex={m.index}
//               name={m.name} />)       
//        }
//       );
//       return(
//       <div className="bars">{bars}</div>
//       );
//   }
// });


// var Bar = React.createClass({

//   getInitialState:function(){
//       return({isSelect:0})
//   },
//   handleClick:function(event){
//    this.props.onhandleClick(this.props.myIndex)
//   },
//   onhandleOver:function(){  
//       this.setState({isSelect:this.props.myIndex})
//   },
//   onhandleOut:function(){  
//       this.setState({isSelect:0})
//   },
//   render(){
// // 当选中的值和父组件相同时，Index的值就是那一栏被选中
// //当鼠标以上是状态为1，离开为零通过Index和IsSlecct的值确定每一栏的状态
//       var style="bar"; 
//       style=this.props.index===this.props.myIndex?"bar active":"bar";
//       if(this.state.isSelect==0&&this.props.index!=this.props.myIndex)
//           style="bar"
//       if(this.state.isSelect!=0)
//           style="bar active"
//       return(
//           <div className={style} 
//            onMouseOver={this.onhandleOver} onMouseOut={this.onhandleOut}
//            onClick={this.handleClick} >
//               <a className="bara" >
//                   <i></i>
//                   {this.props.name}
//               </a>
//           </div>
//       );
//   }
// })```