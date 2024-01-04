import React from 'react';
import Home from './Components/Home';
import Login from './Components/Login';
import Register from './Components/Register';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { Provider } from 'react-redux'
import store from './Redux/store';
import { AuthProvider } from './utils/Auth';




const App = () => {
  

  return (
    <div>
      <Provider store={store}>
        <AuthProvider>
      <ToastContainer theme='colored'></ToastContainer>
      <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home />}> </Route>
            <Route path='/login' element={<Login />}> </Route>
            <Route path='/register' element={<Register />}> </Route>
          </Routes>
        </BrowserRouter>
        </AuthProvider>
        </Provider>
    </div>
  )
}

export default App