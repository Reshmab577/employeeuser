import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Login from './Components/Login';
import Userregester from './Components/Userregester';

function App() {
  return (
    <div>
      <Login/>
      <Userregester/>
    </div>
  );
}

export default App;
