function Lists(props) {
//   const fruits = [{name:"Apple",calories:50},
//     {name:"Cherry",calories:60},
//     {name:"Banana",calories:100},
//     {name:"Date",calories:75}];

// fruits.sort((a,b) => a.calories - b.calories); // Sorting in ascending order of calories
// fruits.sort((a,b) => a.name.localeCompare(b.name)); // Sorting in alphabetical order of names

// const lowCalFruits = fruits.filter(fruit => fruit.calories < 70); // use this var to filter fruits basedon calories
// const highCalFruits = fruits.filter(fruit => fruit.calories >= 70);

const category = props.category
const itemList = props.items


  const listItems = itemList.map((item, index) => 
    <li key={index} >
        <h3>{index}.</h3> &nbsp;
        <b>{item.name}</b>: &nbsp;
        <h4>{item.calories} cal</h4>
    </li>)

  return (<>
  <h3 className="list-category">{category} List:</h3>
  <ul className="list-item">{listItems}</ul>
  </>);
}
export default Lists;