import React, { useState } from "react";
function ContextPattern(){
    const [name,setname]=useState('nikhil');
    const [admin, isadmin]=useState('false');
    return(
        <StepContext.Provider value={{name,isadmin}}>
            <h1>Parent Component</h1>
            <ChildA />
        </StepContext.Provider>
    );
}
export default ContextPattern;
