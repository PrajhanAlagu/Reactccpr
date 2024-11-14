import React from 'react'

class Visual extends React.Component
{
  constructor()
  {
    super();
    this.state={
      c:0
    }
 }
 inc=()=>{
     this.setState({
         c:this.state.c+1
        });
    }
    dec=()=>{
     this.setState({
       c:this.state.c-1
     })
    }

  render()
  {
    return(
      <div>
        <h1>{this.state.c}</h1>
        <button onClick={this.inc}>Click</button>
        <button onClick={this.dec}>Decrement</button>
      </div>
    )
  }
}
export default Visual;