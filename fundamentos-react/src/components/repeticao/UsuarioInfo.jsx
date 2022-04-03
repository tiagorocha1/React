import React from "react";
import If from "./If";

export default props =>{
    const usuario = props.usuario || {}
    return (
        <div>

            <If test={usuario && usuario.name}>
                    Seja bem vindo <strong>{usuario.name}</strong>!
            </If>
            

            <If test={!usuario || !usuario.name}>
                    Seja bem vindo <strong>Hacker!!!</strong>!
            </If>
        </div>
    )
}