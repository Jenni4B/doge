import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Contact from './components/Contact'
import Home from './components/Home'
function App() {
 
  return (
    <div className="App">
      <nav className='nav'>
        <ul>
          <a href="/">Home</a>
          <a href="/contact">Contact</a>
        </ul>
      </nav>
      <div className="content">  
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Router>
      </div>
    </div>
    )
}

export default App