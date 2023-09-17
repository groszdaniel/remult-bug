import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { Foo } from './shared/Foo'
import { remult } from 'remult'

async function getFoo() {
  const foo = await remult.repo(Foo).findFirst();
  if (foo) return foo;
  else return await remult.repo(Foo).insert({});
}

function App() {
  const [foo, setFoo] = useState(new Foo());
  const retrieveFoo = () => {
    (async () => setFoo(await getFoo()))();
  };
  useEffect(retrieveFoo, []);

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
        <button onClick={async () => {
            await remult.repo(Foo).update(foo.id, { a: foo.a + 1 });
            retrieveFoo();
        }}>
          a is {foo.a}
        </button>
        <button onClick={async () => {
            await remult.repo(Foo).update(foo.id, { b: foo.b + 1 });
            retrieveFoo();
        }}>
          b is {foo.b}
        </button>
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

export default App
