import './App.css';
import Navbar from './components/layout/Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/pages/Home';
import About from './components/pages/About';
import ContactState from './context/contact/ContactState';
import AuthState from './context/auth/AuthState';
import Register from './components/auth/Register';
import Login from './components/auth/Login';

const App = () => {
  return (
    <AuthState>
      <ContactState>
        <BrowserRouter>
          <div className='App'>
            <Navbar />
            <div className='container'>
              <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/about' element={<About />} />
                <Route path='/register' element={<Register />} />
                <Route path='/login' element={<Login />} />
              </Routes>
            </div>
          </div>
        </BrowserRouter>
      </ContactState>
    </AuthState>
  );
};

export default App;
