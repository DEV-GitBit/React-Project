import React, {useState} from "react";

function ArrayHandler(){

    const [food, setfood] = useState(["Apple","Banana","Cherry"]);

    function addItem(){
    
        const Newfood = document.getElementById("newfood").value;
        if(Newfood.trim() === "" || food.some(item => item.toLowerCase() === Newfood.trim().toLowerCase())) return;
        setfood(f => [...f, Newfood]);
        document.getElementById("newfood").value = "";
        }

    function removeItem(index){
        setfood(f => f.filter((_, i) => i !== index));
    }
    

    return(
        <>
        <div className="array-handler">
        <h2>Food Items:</h2>
        <ul>
            {food.map((item, index) => (
                <li
                    key={index}
                    className="food-items"
                    onClick={() => removeItem(index)}
                    style={{ cursor: 'pointer' }}
                >
                    {item}
                </li>
            ))}
        </ul>
        <input type="text" id="newfood" placeholder="Add new food item"/>
        <button className="addfoodbutton" onClick={addItem}>Add Item</button>
        </div>
        </>
    )
}
export default ArrayHandler;