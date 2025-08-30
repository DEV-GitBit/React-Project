import React, {useState} from "react";
import MyComponent2 from "./MyComponent2";

function ColorPicker() {
    const [color, setColor] = useState("#FFFFFF");

    const handleChange = (event) => {
        setColor(event.target.value);
    };

    return (
        <>
        <div className="main-component-container"> 
        <div className="main-color-picker">
        <h2>Color Picker</h2>
        <div className="color-picker-container" style={{backgroundColor: color}}>
            <p>Selected Color: {color}</p>
        </div>
        <label>Choose a Color:
            <input type="color" value={color} onChange={handleChange}/>
        </label>
        </div>

        <MyComponent2 />

        </div>
        </>
    );
}
export default ColorPicker;