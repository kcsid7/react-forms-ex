import React, { useState } from "react";

import {v4 as uuid} from "uuid";

import "./ToDoForm.css";



function ToDoForm({ addToDo }) {

    const [ data, setData ] = useState({
        todo: ""
    });

    function handleChange(e) {
        setData( d => ({
            ...d,
            [e.target.name]: e.target.value
        }))
    }

    function handleSubmit(e) {
        e.preventDefault();
        if (data.todo !== "") {
            addToDo({
                todo: data.todo,
                completed: false,
                id: uuid()
            })
            setData({
                todo: ""
            })
        }
    }

    return (
        <div className="ToDoForm">
            <form className="ToDoForm-Main" onSubmit={handleSubmit}>
                <input type="text" name="todo" id="todo" onChange={handleChange} value={data.todo} placeholder="New Todo"/>
                <button className="ToDoForm-Submit">Add To Do</button>
            </form>
        </div>
    )
}

export default ToDoForm;