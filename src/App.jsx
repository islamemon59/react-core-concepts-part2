import Counter from './Counter'
import New from './Newcount';
import Batsman from './Batsman';
import Bowlers from './Bowlers';
import './App.css'
import Users from './Users';
import { Suspense } from 'react';
import Friends from './Friends';
import Uncles from './Uncles';
import Posts from './Posts';
import Players from './Players';

const fetchUsers = fetch("https://jsonplaceholder.typicode.com/users")
.then(res => res.json())

const fetchFriends = fetch("https://jsonplaceholder.typicode.com/users")
.then(res => res.json())

const fetchUncles = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users")
  return response.json();
}

const fetchPosts = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts")
  return response.json()
}

function App() {

  const callUncles = fetchUncles()
  const callPosts = fetchPosts()
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
    <Players></Players>
    <Suspense fallback={<h3>Posts are coming...</h3>}>
      <Posts callPosts={callPosts}></Posts>
    </Suspense>

    <Suspense fallback={<h3>Uncles are coming...</h3>}>
      <Uncles callUncles={callUncles}></Uncles>
    </Suspense>


    <Suspense fallback={<h2>Data loading....</h2>}>
    <Friends fetchFriends={fetchFriends}></Friends>
    </Suspense>

    <Suspense fallback={<h3>Data loading...</h3>}>
    <Users fetchUsers={fetchUsers}></Users>
    </Suspense>
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
