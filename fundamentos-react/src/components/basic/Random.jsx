import React from "react";

export default props => {

    const {min, max} = props;
    const random =  parseInt((Math.random() * (max - min)) + min)
    return (
        <div>
            <h2>Valor aleatório</h2>

            <p> Valor Mínimo: {min}</p>
            <p> Valor Máximo: {max} </p>
            <p> Valor Aleatório: {random}</p>

        </div>

    )
}