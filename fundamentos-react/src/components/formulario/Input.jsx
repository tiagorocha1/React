import React, { useState } from 'react';

export default props => {

    const [valor,setValor] = useState("inicial");

    function quandoClicar (e){
        setValor(e.target.value);
    }
    return (
        <div>
            <h1>{valor}</h1>
            <input   value={valor}  onChange={quandoClicar}/>
            <input   value={valor} readOnly  />
            <input   value={undefined}/>
        </div>
    )
}