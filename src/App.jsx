import { useState } from 'react'

import './App.css'
import TillButton from './components/TillButtons.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="app-grid">
        <div className="order-display">
          <h1>Order Display</h1>
        </div>

        <div className="basket">
          <h1> Basket </h1>
        </div>

        <div className="button-grid">
          <div className="row">
            <div className='col-2'>
              <TillButton name="Drink" />
            </div>
            <div className='col-2'>
              <TillButton name="Drink" />
            </div>
            <div className='col-2'>
              <TillButton name="Drink" />
            </div>
            <div className='col-2'>
              <TillButton name="Drink" />
            </div>
            <div className='col-2'>
              <TillButton name="Drink" />
            </div>
            <div className='col-2'>
              <TillButton name="Drink" />
            </div>
          </div>
        </div>

        <div className="function-buttons">
          <h1> Basket </h1>
        </div>
      </div>
    </>
  )
}

export default App
