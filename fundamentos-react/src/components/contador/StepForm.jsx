import React from "react";

export default props => {

    return (
        <div>
            <label htmlFor="stepInput" >Passo:</label>
            <input id="stepInput" 
            type="number"
            value={props.step} 
            onChange={e => props.setStep(+e.target.value)} />
        </div>
    )
}