import React, { useState } from "react";

import "./ToDoList.css"

import ToDoForm from "./ToDoForm.js";
import ToDo from "./ToDo.js";

function ToDoList() {

    const [ todos, setToDos ] = useState([])


    function addToDo(todo) {
        setToDos( t => [...todos, todo]);
    }

    function removeToDo(id) {
        setToDos( todo => todo.filter( t => t.id !== id));
    }

    function toggleComplete(id) {
        setToDos( todos => (
            todos.map( todo => todo.id === id ? {...todo, completed: !todo.completed} : todo)
        ))
    }
    
    const allTodos = todos.map( t => (
            <ToDo 
                key={t.id} 
                todo={t.todo} 
                completed={t.completed} 
                id={t.id} 
                toggleComplete={toggleComplete}
                toggleRemove={removeToDo}
            />
    ))


    return (
        <div className="ToDoList">
            <h1 className="ToDoList-Head">To Do List</h1>
            <ToDoForm addToDo={addToDo}/>
            
            <ul className="ToDoList-List">
                {allTodos}
            </ul>

        </div>
    )
}

export default ToDoList;