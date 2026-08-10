import { useState } from 'react'
import Display from './components/Display'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <section id="center">
        <div>
          <h1>building a new feature and adding it to main.</h1>
          
        </div>
        <button
          type="button"
          className="counter"
          onClick={() => setCount((count) => count + 1)}
        >
          Count is not {count}
        </button>
        <Display />
      </section>
    </>
  )
}

export default App
