import './App.css';
import './styles/layout.scss'

import { UserProvider } from './context/UserProvider';
import { MasterPage } from './pages/MasterPage';
import { BrowserRouter } from 'react-router-dom';
function App() {

  
  return (
    <UserProvider>
      <BrowserRouter>      
        <div className="App">
          <MasterPage/>
        </div>
      </BrowserRouter>
    </UserProvider>
  );
}

export default App;
