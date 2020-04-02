import React from 'react'

export default class DelayedButton extends React.Component{


  handleClick = (e) =>{

   

    setTimeout(() => {
      
      this.props.onDelayedClick(e)
    }, this.props.delay)
  }


  render(){
    return(
     <button onClick={this.handleClick}>Delay Button</button>
    )
  }
}

// onDelayedClick={ event => console.log(event) } delay={1500}