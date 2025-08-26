import React, {useState} from 'react';

function MyComponent() {
    const [name, setName] = useState("Guest");
    const [age, setAge] = useState(18);
    const [isEmployed, setIsEmployed] = useState(false);

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
        </div>
        </>
    );
}
export default MyComponent;