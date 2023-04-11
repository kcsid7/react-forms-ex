import React, { useState } from "react";

import "./ToDo.css"

function ToDo(props) {

    const { todo, completed, id, toggleComplete, toggleRemove } = props;

    function handleClick() {
        toggleComplete(id);
    }

    function removeToDo() {
        toggleRemove(id);
    }

    return(
        <li>
            <div className="ToDo" onClick={handleClick}>
                <p className={`ToDo-Text ${completed ? "ToDo-Completed": ""}`}>{todo}</p>
                <button className="ToDo-Remove-Btn" onClick={removeToDo}>X</button>
            </div>
        </li>
    )
}

export default ToDo;