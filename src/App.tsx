import { useState } from 'react'
import Display from './components/Display'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <section id="center">
        <div>
          <h1>This is my test.</h1>
          
          <h1>Get started</h1>
          <p>
            Dont See changes on github
          </p>
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
