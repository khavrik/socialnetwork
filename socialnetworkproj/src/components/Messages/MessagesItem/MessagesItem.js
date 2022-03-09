import React from "react";
import { NavLink } from "react-router-dom";

function MessagesItem(props){
    return(
        <div>
            <NavLink exact="false" to={`${props.name}`}>{props.name}</NavLink>
        </div>
    )
}

export default MessagesItem