import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const [name, setName] = useState("")


  const handleSubmit = () => {
    console.log(name)
  }

  return (
    <div className="App">
      <label>First_Name: </label>
      <input type="text" value={name} onChange={(e)=>setName(e.target.value)} />
      <label>Last_Name: </label>
      <input type="text" />
      <label>Email</label>
      <input type="email" />
      <label>Mobile Number </label>
      <input type="number" />
      <button onClick={handleSubmit}>Submit</button>
        
    </div>
  )
}

export default App
