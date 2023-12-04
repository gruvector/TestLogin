import React from 'react';
import './App.css';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import { useAppSelector } from './app/hooks';


function App() {
  const select = useAppSelector((state) => state.select.value);
  return (
    <div className="App">

      { select === 0 ? <SignIn /> : <SignUp />}
      
    </div>
  );
}

export default App;
