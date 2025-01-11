import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/navbar'
import Homepage from './pages/homepage'
import Signuppage from './pages/signuppage'
import Services from './pages/services'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Aboutpage from './pages/about'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/signup" element= {<Signuppage />} />
      <Route path="/services" element= {<Services />} />
      <Route path="/about" element= {<Aboutpage />} />
    </Routes>
  );
}

export default App
