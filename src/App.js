import './App.css';
import Login from './components/Login';
import Home from './components/Home';
import { useState } from "react";
function App() {
  const [isLoggedIn,setLogin] = useState(false);

  return (
    <div className="App">
      <header className="App-header">
      {isLoggedIn?<Login setLogin={setLogin}></Login>:<Home></Home>}
      </header>
    </div>
  );
}

export default App;
