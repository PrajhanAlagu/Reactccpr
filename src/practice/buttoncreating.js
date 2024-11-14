import React from "react";
const sum=(a,b)=>a+b
const mul=(a,b)=>a*b
const calculator=(type)=>{
    if(type==='sum')
        return sum;
    else if(type==='mul')
        return mul;
}
const newFunc=calculator('sum');
function Work(){
    return(
        <div>
            <h1>{newFunc(10,2)}</h1>
        </div>
    );
}
export default Work;