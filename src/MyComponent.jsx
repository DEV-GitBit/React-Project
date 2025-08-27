import React, {useState} from 'react';

function MyComponent() {
    const [name, setName] = useState("Guest");
    const [age, setAge] = useState(18);
    const [isEmployed, setIsEmployed] = useState(false);

    const [city, setCity] = useState("Select City");
    const [shippingtype, setShippingType] = useState("");
    const [feedback, setFeedback] = useState("");

    const onUpdateName = () => {
        let newName = prompt("Enter your name:",name);
        setName(newName);
    }   
    const onAgeIncrease = () => {
        setAge(age + 1);
    }
    const onAgeReset = () => {
        setAge(18);
    }
    const onAgeDecrease = () => {
        setAge(age - 1);
    }
    const chkEmployed = () => {
        setIsEmployed(!isEmployed);
    }   

    const onCityChange = (event) => {
        setCity(event.target.value);
    }
    const onShippingTypeChange = (event) => {
        setShippingType(event.target.value);
    }
    const onFeedbackChange = (event) => {
        setFeedback(event.target.value);
    }


    return (
        <>
        <div className='main-component'>
            <div className='my-component'>
                <p>Name: {name}</p>
                <button onClick={onUpdateName}>Update</button>
            </div>
            <div className='my-component2'>
                <p>Your age is {age}</p>
                <button onClick={onAgeDecrease}>-</button>
                &nbsp;
                <button onClick={onAgeReset}>Reset</button>
                &nbsp;
                <button onClick={onAgeIncrease}>+</button>
            </div>
            <div className='my-component3'>
                <p>Employed: {isEmployed ? "Yes" : "No"}</p>
                <button onClick={chkEmployed}>Toggle</button>
            </div>

            <div className='my-component4'>
                <p>City: {city}</p>
                <select value={city} onChange={onCityChange}>
                    <option value="Select City" disabled>Select City</option>
                    <option value="New York">New York</option>
                    <option value="Los Angeles">Los Angeles</option>
                    <option value="Chicago">Chicago</option>
                    <option value="Houston">Houston</option>
                    <option value="Phoenix">Phoenix</option>
                </select>
            </div>
            <div className='my-component5'>
                <p>Shipping Type: {shippingtype}</p>
                <input type="radio" name="shipping" value="Standard" checked={shippingtype === "Standard"} onChange={onShippingTypeChange}/>
                <label htmlFor="standard">Standard</label>
                &nbsp;
                <input type="radio" name="shipping" value="Express" checked={shippingtype === "Express"} onChange={onShippingTypeChange}/>
                <label htmlFor="express">Express</label>
                &nbsp;
                <input type="radio" name="shipping" value="Overnight" checked={shippingtype === "Overnight"} onChange={onShippingTypeChange}/>
                <label htmlFor="overnight">Overnight</label>
            </div>
            <div className='my-component6'>
                <p>Feedback: {feedback}</p>
                <textarea value={feedback} onChange={onFeedbackChange} rows="4" cols="50"/>
            </div>
        </div>
        </>
    );
}
export default MyComponent;