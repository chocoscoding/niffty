import './App.css';
import { Routes, Route } from "react-router-dom";
import {Error, Home} from './routes'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </div>
  );
}

export default App;
