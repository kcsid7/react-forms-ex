import "./Box.css";

function Box(props) {
    const { id, height=100, width=100, color="Red", removeBox } = props;

    const remove = () => removeBox(id);

    return (
        <div>
            <div 
                className="Box"
                style={{backgroundColor: color, height: `${height}px`, width: `${width}px`}} >
            <button className="Box-Delete-Btn" onClick={remove} style={{fontSize: `${height/2}px`}}>X</button>
            </div>
        </div>
    )
}

export default Box;