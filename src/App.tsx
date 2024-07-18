import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { remult } from 'remult'
import { Foo, FooController } from './shared/Foo'

function App() {
  const [foos, setFoos] = useState<Foo[]>([])

  useEffect(() => {
    ;(async () => {
      remult
        .repo(Foo)
        .liveQuery({})
        .subscribe(({ items }) => setFoos(items))
    })()
  }, [])

  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={async () => await FooController.backendMethod()}>
          Foo
        </button>
        <div>
          {foos.map(({ id, a }) => (
            <p key={id}>{a}</p>
          ))}
        </div>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  )
}

Object.assign(window, { remult, Foo })

export default App
