import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Contact from './components/Contact'
import Home from './components/Home'
function App() {
 
  return (
    <div className="App">
      <nav>
        <ul>
          <a href="/">Home</a>
          <a href="/contact">Contact</a>
        </ul>
      </nav>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </div>
    )
}

export default App