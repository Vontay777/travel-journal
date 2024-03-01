import './App.css'
import NavBar from "./components/NavBar"
import Place from "./components/place"
import Data from "./data"


// logo icon
import world from "./images/world1.png"
import pin from "./images/pin.png"

export function App() {
  const dataset = Data.map((items) => {
    return(

      <Place 
      pin={pin}
      details={items}
      />
      )
})
  return (
  <div className='react--app--container'>

    <div className='nav--cont--bar'>
      <NavBar img={world}/>
    </div>
    <div className='app-container'>
      {dataset}  
    </div>
  </div>
  )
}

export default App
