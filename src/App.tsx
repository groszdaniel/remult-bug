import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { remult } from "remult";
import { Foo } from "./shared/Foo";

function App() {
  const [result, setResult] = useState(0);
  const [foos, setFoos] = useState<Foo[]>([]);
  useEffect(() => {
    // Make sure there are at least two foos
    (async () => {
      if (foos.length < 2) {
        const _foos = await remult.repo(Foo).find();
        for (let i = _foos.length; i < 2; ++i) {
          const foo = remult.repo(Foo).create({ a: 1 });
          await foo.save();
          _foos.push(foo);
        }
        setFoos(_foos);
      }
    })();
  }, []);

  async function onClick() {
    /*
     * If the parameter is passed as an object, the result will be 101. If it's passed as an id,
     * the changed field does not get passed to the server, so the result will be 2.
     * 
     * With the react-vite-express-server setup, if paramTypes is not specified, it gets passed
     * as an object (even if the line below is commented out). */
    foos[1].a = 100;

    const _result = await foos[0].backendMethod(foos[1]);
    setResult(_result);
  }

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
        <button onClick={onClick}>count is {result}</button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  );
}

export default App;
