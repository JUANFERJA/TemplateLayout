import logo from './logo.svg';
import './App.css';
import { Sidebar } from './components/Sidebar';
import './styles/layout.scss'
import { NavBar } from './components/NavBar';
function App() {

  
  return (
    <div className="App">
      <div className='navbarCustom'>
        <NavBar/>
      </div>
      <div className="cuerpo d-flex flex-row" id='cuerpo'>
        <div className='sidebar'>
          <Sidebar/>
        </div>
        <div className='main'>

        </div>
      </div>
    </div>
  );
}

export default App;
