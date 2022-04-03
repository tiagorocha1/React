import React, { cloneElement } from "react";
import FamilyMember from "./FamilyMember";

export default props => {

    return (
        <div>
            {/*
            <FamilyMember name="Pedro" {...props} />
            <FamilyMember name="Ana"  lasName= {props.lastName}/>
            <FamilyMember name="Julia" lastName= "Silva" />
            */}

            {/*
            React.Children.map( props.children, child => {
                return cloneElement(child,props);
            })
            */}

            {props.children.map((child, i) => {
                return cloneElement(child, {...props, key: i});
            })}
        </div>
    )
}