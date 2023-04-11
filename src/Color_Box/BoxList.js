import React, { useState } from "react";
import "./BoxList.css"
import NewBoxForm from "./NewBoxForm.js"
import Box from "./Box.js"

function BoxList() {
    const [ boxes, setBoxes ] = useState([])

    function addBox(newBox) {
        setBoxes( b => [...boxes, newBox])
    }

    function removeBox(boxId) {
        setBoxes( b => b.filter(box => box.id !== boxId))
    }


    const dispBoxes = boxes.map( b => (
        <Box height={b.height} width={b.width} color={b.color} key={b.id} id={b.id} removeBox={removeBox}/>
    ))

    return (
        <div className="BoxList">
            <h1> Box List </h1>

            <NewBoxForm addBox={addBox} />
            
            <div className="BoxList-List">
                {dispBoxes}
            </div>
        </div>
    )
}

export default BoxList;