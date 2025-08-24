import Footer from "./Footer.jsx"
import Header from "./Header.jsx"
import Card from "./Card.jsx"
import Buttons from "./Buttons.jsx"
import Students from "./Students.jsx"
import Greetings from "./Greetings.jsx"
import Lists from "./Lists.jsx"

function App() {
var fruits = [{name:"Apple",calories:"app"},
                {name:"Cherry",calories:60},
                {name:"Banana",calories:100},
                {name:"Date",calories:75}];
                
var vegetables = [];

var desserts = [{name:"Ice Cream",calories:207},
                  {name:"Brownie",calories:112},
                  {name:"Cupcake",calories:305},
                  {name:"Donut",calories:195}];
  return (
    <>
      <Header />
      <hr/>
      <Greetings isLoggedIn={true} username="Rishabh"/>
      <hr />
      <Card />
      <hr/>
      <Students name="Peter Parker" age={27} isEnrolled={true} />
      <Students name="Aunt May" age={50} isEnrolled={false} />
      <Students name="Uncle John" age={52} isEnrolled={false} />
      <Students/>
      <hr />
      <Buttons />
      <hr />
      {fruits.length > 0 ? (<Lists items={fruits} category="Fruits"/>) : undefined}
      {vegetables.length > 0 ? (<Lists items={vegetables} category="Vegetables"/>) : undefined}
      {desserts.length > 0 ? (<Lists items={desserts} category="Desserts"/>) : undefined}
      <hr />
      <Footer />
    </>
  )
}

export default App
