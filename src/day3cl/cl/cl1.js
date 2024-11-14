import React from "react";
class Statemanip extends React.Component{
    constructor()
    {
        super()
        this.state={
            message:"ON"
        }
    }
    toggleMessage=()=>{
        this.setState(prevstate=>({
            message: prevstate.message === "ON"? "OFF" :"ON"
        }))
    }
    render()
    {
        return(
            <div>
              <h1>{this.state.message}</h1>
              <button onClick={this.toggleMessage}>click on</button>
            </div>
        );
    }
};
export default Statemanip;