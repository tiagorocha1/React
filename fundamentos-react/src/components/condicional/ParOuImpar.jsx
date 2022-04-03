import React from "react";

export default props => {
    const IsPar = props.number % 2 === 0 
    return (
        <div>

            { IsPar ? <span>Par</span> : <span>Ímpar</span>}
            
            
        </div>
    )
}