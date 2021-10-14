import { useState } from "react"
import './App.css';
import Fun from './components/Fun';
import Greeting from './components/Greeting';
import Age from './components/Age';

function App() {
  const [magicNumber, setMagicNumber] = useState(0)
  const [show, setShow] = useState(true)
  const [age, setAge] = useState()

  return (
    <div className="App">
      { show && <h1>{ magicNumber }</h1> }
      <Fun 
        magicNumber={magicNumber} 
        setMagicNumber={setMagicNumber}
        show={show}
        setShow={setShow}
      />
      <Fun 
        magicNumber={magicNumber} 
        setMagicNumber={setMagicNumber} 
        amount={5}
        show={show}
        setShow={setShow}
      />
      <Fun 
        magicNumber={magicNumber} 
        setMagicNumber={setMagicNumber} 
        amount={25}
        show={show}
        setShow={setShow}
      />
      <Greeting name="Liisa" age="21"/>
      <h3>What's your age?</h3>
      <form onSubmit={(e)=>{
          e.preventDefault()
          setAge(e.target[0].value)
        }}>
        <input type="text" name="age"></input>
        <input type="submit" />
      </form>
      {age && <Age age={age} />}
    </div>
  );
}

export default App;
