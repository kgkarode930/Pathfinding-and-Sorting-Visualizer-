import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import NavBar from './components/NavBar/NavBar'
import Sort from './components/SortingVisualizer/Sort'
import Path from './components/PathFinder/Path'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element = {<NavBar />} />
        <Route exact path='/path-find' element = {<Path />} />
        <Route exact path='/sort-vis' element = {<Sort />} />
      </Routes>
    </BrowserRouter>
  )

  // const [count, setCount] = useState(0)

  // return (
  //   <div className="App">
  //     <div>
  //       <a href="https://vitejs.dev" target="_blank">
  //         <img src="/vite.svg" className="logo" alt="Vite logo" />
  //       </a>
  //       <a href="https://reactjs.org" target="_blank">
  //         <img src={reactLogo} className="logo react" alt="React logo" />
  //       </a>
  //     </div>
  //     <h1>Vite + React</h1>
  //     <div className="card">
  //       <button onClick={() => setCount((count) => count + 1)}>
  //         count is {count}
  //       </button>
  //       <p>
  //         Edit <code>src/App.jsx</code> and save to test HMR
  //       </p>
  //     </div>
  //     <p className="read-the-docs">
  //       Click on the Vite and React logos to learn more
  //     </p>
  //   </div>
  // )
}

export default App
