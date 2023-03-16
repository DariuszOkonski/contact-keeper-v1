import './App.css';
import Navbar from './components/layout/Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Fragment } from 'react';
import Home from './components/pages/Home';
import About from './components/pages/About';

const App = () => {
  return (
    <BrowserRouter>
      <Fragment className='App'>
        <Navbar />
        <div className='container'>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
          </Routes>
        </div>
      </Fragment>
    </BrowserRouter>
  );
};

export default App;
