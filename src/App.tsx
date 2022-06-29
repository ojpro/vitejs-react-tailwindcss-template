import { useState } from "react";
import logo from "./logo.svg";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="text-center">
      <header className="bg-gray-700 min-h-screen text-xl text-white flex flex-col items-center justify-center">
        <img src={logo} className="w-80" alt="logo" />
        <p>Hello Vitejs + TailwindCSS + React (TypeScript)!</p>
        <p>
          <button
            type="button"
            className="bg-blue-400 px-2 py-1.5 rounded"
            onClick={() => setCount((count) => count + 1)}
          >
            count is: {count}
          </button>
        </p>
        <p>
          Edit <code>App.tsx</code> and save to test HMR updates.
        </p>
        <p>
          <a
            className="text-blue-400"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          {" | "}
          <a
            className="text-blue-400"
            href="https://tailwindcss.com/docs/"
            target="_blank"
            rel="noopener noreferrer"
          >
            TailwindCSS
          </a>
          {" | "}
          <a
            className="text-blue-400"
            href="https://vitejs.dev/guide/features.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            Vite Docs
          </a>
        </p>
      </header>
    </div>
  );
}

export default App;
