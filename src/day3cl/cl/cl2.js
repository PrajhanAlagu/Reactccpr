import React from "react";

class TwoWayBinding extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state={
            inputValue:' '
        };
    }
    handle=(event)=>{
        this.setState({
            inputValue:event.target.value
        })
    }
    render()
    {
        return(
            <div>
                <h1>Two-Way Binding Example</h1>
                <input type="text" value={this.state.value} onChange={this.handle}/>
                <p>{this.state.inputValue}</p>
            </div>
        )
    }
}
export default TwoWayBinding;