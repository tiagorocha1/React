import React, { useState } from "react";
import IndiretaFilho from "./IndiretaFilho";

export default props => {

    const [name, setName] = useState('?')
    const [age, setAge] = useState(0)
    const [nerd, setNerd] = useState(false)

    function informacoes(name, age, nerd) {
        setName(name)
        setAge(age)
        setNerd(nerd)
    }
    return (
        <div>

            <div>Pai</div>
            <span> {name} </span>
            <span> {age} </span>
            <span> {nerd ? 'Verdadeiro' : 'Falso'} </span>
            <IndiretaFilho quandoClicar={informacoes}></IndiretaFilho>
        </div>
    )
}