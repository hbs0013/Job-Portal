import './App.css';
import {BrowserRouter} from 'react-router-dom';
import HomePage from "./components/HomePage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <HomePage/>
      </BrowserRouter>
    </div>
  );
}

export default App;
