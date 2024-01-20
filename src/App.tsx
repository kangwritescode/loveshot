import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="bg-blue-500 text-white p-6 rounded-md shadow-lg">
        <h1 className="text-2xl font-bold mb-2">Hello Tailwind CSS!</h1>
        <p className="mb-4">
          This is a simple React app with Tailwind CSS styling.
        </p>
        <div className="flex items-center">
          <button
            className="bg-green-500 hover:bg-green-600 text-white px-3 py-1 rounded-md"
            onClick={() => setCount((prevCount) => prevCount + 1)}
          >
            Click me!
          </button>
          <p className="ml-2">Count: {count}</p>
        </div>
      </div>
    </div>
  );
}

export default App;
