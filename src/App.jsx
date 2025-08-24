import Footer from "./Footer.jsx"
import Header from "./Header.jsx"
import Card from "./Card.jsx"
import Buttons from "./Buttons.jsx"
import Students from "./Students.jsx"
import Greetings from "./Greetings.jsx"
import Lists from "./Lists.jsx"

function App() {
const fruits = [{name:"Apple",calories:50},
                {name:"Cherry",calories:60},
                {name:"Banana",calories:100},
                {name:"Date",calories:75}];
const vegetables = [{name:"Broccoli",calories:55},
                    {name:"Carrot",calories:41},
                    {name:"Spinach",calories:23},
                    {name:"Potato",calories:77}];

const desserts = [{name:"Ice Cream",calories:207},
                  {name:"Brownie",calories:112},
                  {name:"Cupcake",calories:305},
                  {name:"Donut",calories:195}];
  return (
    <>
      <Header></Header>
      <hr></hr>
      <Greetings isLoggedIn={true} username="Rishabh"/>
      <hr></hr>
      <Card></Card>
      <hr></hr>
      <Students name="Peter Parker" age={27} isEnrolled={true} />
      <Students name="Aunt May" age={50} isEnrolled={false} />
      <Students name="Uncle John" age={52} isEnrolled={false} />
      <Students/>
      <hr></hr>
      <Buttons />
      <hr></hr>
      <Lists items={fruits} category="Fruits"/>
      <Lists items={vegetables} category="Vegetables"/>
      <Lists items={desserts} category="Desserts"/>
      <hr></hr>
      <Footer />
    </>
  )
}

export default App
