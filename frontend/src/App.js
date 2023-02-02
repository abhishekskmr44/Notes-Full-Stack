import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Register from './components/Register';
import Login from './components/Login';
import Notes from './components/Notes';

function App() {
  return (
    <div className="App">
    <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/register" element={<Register/>}/>
    <Route path="/login" element={<Login/>}/>
    <Route path="/notes" element={<Notes/>}/>
    </Routes>

    </div>
  );
}

export default App;
