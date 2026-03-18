import { useState } from 'react';

function App() {
  const [counter, setCounter] = useState(0);

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-900">Welcome to React + Vite</h1>
        </div>
      </header>
      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <section className="text-center space-y-8">
          <div>
            <h2 className="text-2xl font-semibold text-gray-900">
              Getting Started
            </h2>
            <p className="mt-2 text-lg text-gray-600">
              This is your first React component with Tailwind CSS styling.
            </p>
          </div>
          <div className="space-y-4">
            <button
              onClick={() => setCounter(counter + 1)}
              className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Click me! ({counter})
            </button>
            <div className="bg-white rounded-lg p-6 shadow-md">
              <h3 className="text-lg font-semibold mb-2">Counter Example</h3>
              <p className="text-gray-600">Shows how React state works</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;