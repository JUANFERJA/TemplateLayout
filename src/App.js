import './App.css';
import './styles/layout.scss'

import { UserProvider } from './context/UserProvider';
import { MasterPage } from './pages/MasterPage';
import { BrowserRouter } from 'react-router-dom';
import { CompanyProvider } from './context/CompanyProvider';
function App() {

  
  return (
    <UserProvider>
      <BrowserRouter>      
        <div className="App d-flex flex-column">
          <CompanyProvider>
            <MasterPage/>
          </CompanyProvider>
        </div>
      </BrowserRouter>
    </UserProvider>
  );
}

export default App;
