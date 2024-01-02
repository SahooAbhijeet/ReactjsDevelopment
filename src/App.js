import React from 'react';
import Home from './Components/Home';
import Login from './Components/Login';
import Register from './Components/Register';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';





const App = () => {
  

  return (
    <div>
      <ToastContainer theme='colored'></ToastContainer>
      <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home />}> </Route>
            <Route path='/login' element={<Login />}> </Route>
            <Route path='/register' element={<Register />}> </Route>
          </Routes>
        </BrowserRouter>
    </div>
  )
}

export default App
