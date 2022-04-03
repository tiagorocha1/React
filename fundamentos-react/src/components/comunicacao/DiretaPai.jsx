import React from "react";
import DiretaFilho from "./DiretaFilho";


export default props =>{

    return (
        <div>
            <DiretaFilho name="Joao" age={19} nerd={true} />
            <DiretaFilho name="Pedro" age={10} nerd={false} />
            <DiretaFilho name="Bruna" age={12} nerd={true} />
        </div>
    )
}