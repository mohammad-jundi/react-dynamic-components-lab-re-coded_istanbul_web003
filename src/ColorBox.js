import React, { Component } from 'react';

export default class ColorBox extends Component {

  state = {
    todos: [
      
    ]
  }

  render() {
    const opa = this.props.opacity 
    const newOpa = this.props.opacity -0.1;
    if (opa >= 0.2){
      return (
        <div className="color-box" style={{opacity: opa /*replace null with the value*/}}>
          <ColorBox opacity={newOpa} />
        </div>
      )
    } else {
      return null
    }
    //const opa = this.props.opacity 
    //const newOpa = this.props.opacity = 1;
    // return this.props.opacity >=2 ?  
    // return (
    //   <div className="color-box" style={{opacity: 1}}>
    //     {/* your conditional code here! */}
    //   </div>
    // )
  }

}



