import React from 'react'

export default class CoordinatesButton extends React.Component{

passArgument = (event) =>{

  const x = event.clientX;
  const y = event.clientY;

  const newArray = [x, y].map(coordinate => this.props.onReceiveCoordinates(coordinate))
}

  render(){
    return (
      <div>
       <button onClick={this.passArgument} >Click Me!</button>
      </div>
      
    )
  }

}
