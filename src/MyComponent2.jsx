import React, { useState } from "react";

function MyComponent(){

    const [car, setCar] = useState({
        year: 2024,
        make: "Ford",
        model: "Mustang"
    })

    function onYearChange(event){
        setCar({...car, year: event.target.value})
    }
    function onMakeChange(event){
        setCar({...car, make: event.target.value})
    }
    function onModelChange(event){
        setCar({...car, model: event.target.value})
    }

    return(
        <>
        <div className="car-form">
        <h2>Your favourite car is: {car.year} {car.make} {car.model}</h2>   
        <div className="car-inputs">    
        <input type="text" value={car.year} onChange={onYearChange}/>
        <input type="text" value={car.make} onChange={onMakeChange}/>
        <input type="text" value={car.model} onChange={onModelChange}/>
        </div>
        </div>
        </>
    )


}
export default MyComponent;