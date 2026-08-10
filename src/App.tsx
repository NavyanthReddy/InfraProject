import { useState } from 'react'
import Display from './components/Display'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <section id="center">
        <div>
          <h1>I made change to local feature and trying to merge with main</h1>
        </div>
        <Display />
      </section>
    </>
  )
}

export default App
