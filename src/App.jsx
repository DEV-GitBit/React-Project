import Footer from "./Footer.jsx"
import Header from "./Header.jsx"
import Card from "./Card.jsx"
import Buttons from "./Buttons.jsx"
import Students from "./Students.jsx"

function App() {
  return (
    <>
      <Header></Header>
      <hr></hr>
      <Card></Card>
      <hr></hr>
      <Students name="Peter Parker" age={27} isEnrolled={true} />
      <Students name="Aunt May" age={50} isEnrolled={false} />
      <Students name="Uncle John" age={52} isEnrolled={false} />
      <Students/>
      <hr></hr>
      <Buttons></Buttons>
      <hr></hr>
      <Footer></Footer>
    </>
  )
}

export default App
