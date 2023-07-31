import React from 'react'
import {BrowserRouter,Routes,Route,Link} from 'react-router-dom'
import './App.css';
import Home from './components/Home'
import Reciepe from './components/Reciepe';
// import NavBar from './components/Navbar';


function App() {
  return (
    <BrowserRouter>
      <div className='nav'>
        <h2>Recipy</h2>
        <ul className='navbar'>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/reciepe'>Recipy</Link></li>
        </ul>
      </div>
        {/* <NavBar/> */}
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path='/reciepe' element={<Reciepe/>}/>
        </Routes>
    </BrowserRouter>
  );
}

export default App;
