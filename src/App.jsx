import React, { useState } from 'react'
import UTMApp from './components/UTMApp'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <UTMApp/>
    </div>
  )
}

export default App
