import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import './styles/bootstrap.css'
import './App.css'
import { Button } from 'reactstrap'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
  <Button color='primary' onClick={()=>{setCount(old=> old++)}}>{count}</Button>
    </>
  )
}

export default App
