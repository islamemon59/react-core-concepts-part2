import Counter from './Counter'
import New from './Newcount';
import Batsman from './Batsman';
import Bowlers from './Bowlers';
import './App.css'

function App() {

  function handleClick(){
    alert("I am clicked");
  }

  const handleClick2 = () => {
    alert("I am click three")
  }

  const handlerClick3 = (num) => {
    alert(num + 5);
  }

  const handleClicker = () => {
    alert("Playing")
  }

  const handleSong = (play) => {
    alert(play)
  }

  return (
    <>
    <Bowlers></Bowlers>
    <Batsman></Batsman>
    <New></New>
    <Counter></Counter>
      <h1>Vite + React</h1>
      {/* one number way  */}
      <button onClick={handleClick}>Click Me</button>
      {/* tow number way */}
      <button onClick={function handler(){
        alert("I am click tow")
      }}>Click Me2</button>
      {/* three number way  */}
      <button onClick={handleClick2}>Click ME3</button>
      {/* four way  */}
      <button onClick={() => alert("Click me bro...")}>Click ME4</button>
      <button onClick={() => handlerClick3(10)}>Click Me5</button>

      <button onClick={handleClicker}>Play Movie</button>
      <button onClick={() => handleSong("Playing Song")}>Play Song</button>
    </>
  )
}

export default App
