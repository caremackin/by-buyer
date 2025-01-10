import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/navbar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Navbar />
      <main>
        <h1>Welcome to App Name</h1>
        {/* Other content */}
      </main>
    </div>
  );
}

export default App
