import React from "react";

export default function ComParametros(props){

    const status = props.nota >= 7 ? 'Aprovado(a)' : "Em em recuperação"

    return (
        <div>

            <h2>{props.titulo}</h2>

            <p>
                O Aluno <strong>{props.aluno}</strong> tem nota <strong> {props.nota} </strong>
                e está <strong> {status}</strong>
            </p>
            
        </div>
    )
}