import React from "react";
 function Va(prop){
    return (
        <div>
            <h1>Let us see details about{prop.name}</h1>
            <p>This is the information about {prop.name} a{prop.age} year old interested in {prop.in}</p>
        </div>
    );
};
export default Va;