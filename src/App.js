import './App.css';
import NavLeft from './Components/NavLEft/NavLeft';
import Search from './Components/Search/Search';
import {Outlet} from 'react-router-dom'

function App() {
  return (
    <div>
      <div className='row'>
        <div className='col-2'>
          <NavLeft />
        </div>
        <div className='col-10'>
        <Search />
        <div className='scroll'>
        <Outlet />
        </div>
        </div>
      </div>
    </div>
  );
}

export default App;
