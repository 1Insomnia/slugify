import React, { useState } from 'react'
import Hero from './components/Hero'
import Result from './components/Result'
import UserInput from './components/UserInput'

interface IState {
  result: string
}

function App() {
  const [result, setResult] = useState<IState['result']>('')

  return (
    <div className="font-sans text-dark bg-light min-h-screen">
      <Hero />
      <UserInput result={result} setResult={setResult} />
      <Result result={result} />
    </div>
  )
}

export default App
