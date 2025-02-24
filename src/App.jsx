import './App.css'
import GetRandomDoge from './components/GetRandomDoge'

function App() {
 
  return (

    <div className="App">
      <div>
        <h1>Random Doge Generator</h1>
      </div>
      <div className='doge-container'>
        <GetRandomDoge />
      </div>
    </div>
    )
}

export default App