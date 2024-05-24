import { Outlet } from 'react-router';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import HomePage from './pages/HomePage/HomePage';

function App() {
  return <>
    <NavBar/>
    <Outlet/>
    {/* <HomePage/> */}
  </>;
}

export default App;
