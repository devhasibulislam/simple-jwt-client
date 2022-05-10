import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './routes/About/About';
import Home from './routes/Home/Home';
import Inventory from './routes/Inventory/Inventory';
import Login from './routes/Login/Login';
import NavBar from './routes/NavBar/NavBar';
import Order from './routes/Order/Order';

function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/home' element={<Home />} />
        <Route path='/order' element={<Order/>}/>
        <Route path='/inventory' element={<Inventory/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/about' element={<About/>}/>
      </Routes>
    </div>
  );
}

export default App;
