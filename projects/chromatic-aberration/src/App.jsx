import { useState } from 'react'
import './App.css'

function App() {
  const [space, setSpace] = useState(500)

  return (
    <>
      <div
        className="container"
        style={{ width: `${space}px`, height: `${space}px` }}
      >
        <div className="item" />
        <div className="item" />
        <div className="item" />
      </div>
      <input
        className="rangeSelector"
        value={space}
        type="range"
        name="space"
        id="space"
        min={150}
        max={500}
        onChange={(event) => {
          setSpace(event.target.value)
        }}
      />
    </>
  )
}

export default App
