import React, { useState } from "react";
import { v4 as uuid } from "uuid";

import "./NewBoxForm.css"


function NewBoxForm(props) {

    const [ data, setData ] = useState({
        height: "",
        width: "",
        color: ""
    })

    function handleSubmit(e) {
        e.preventDefault();
        props.addBox({...data, id: uuid()});

        console.log("Pressed Handle SUbmit")
        setData({
            height: "",
            width: "",
            color: ""
        })
    }

    function handleChange(e) {
        setData( d => ({
            ...d,
            [e.target.name]: e.target.value
        }))
    }

    return (
        <div>
            <h1>New Box Form</h1>
            <form onSubmit={handleSubmit}>
                <div className="Form-Div">
                    <label htmlFor="height">Height: </label>
                    <input type="number" name="height" id="height" value={data.height} onChange={handleChange}
                            min="0" max="1000"/>
                </div>
                <div className="Form-Div">
                    <label htmlFor="width">Width: </label>
                    <input type="number" name="width" id="width" value={data.width} onChange={handleChange}
                            min="0" max="1000" />
                </div>
                <div className="Form-Div">
                    <label htmlFor="color">Color: </label>
                    <input type="color" name="color" id="color" value={data.color} onChange={handleChange}/>
                </div>
                <button className="Form-Submit"> Add </button>
            </form>
        </div>
    )
}

export default NewBoxForm;