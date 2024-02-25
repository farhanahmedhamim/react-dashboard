import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Dashboard from '../src/pages/Dashboard'
import Usermanagement from '../src/pages/Usermanagement'
import Assinment from './pages/Assinment';
import Data from '../src/pages/Data'
import Predictive from '../src/pages/Predictive'
import Notifications from '../src/pages/Notifications'
import Profile from '../src/pages/Profile'
import Logout from '../src/pages/Logout'
import { useState } from 'react';

function App() {
  const [hide, setHide] = useState(false)

  const toggol = () => {
    setHide(prev => prev ? false : true)
  }
  return (
    <div className="App">
      <BrowserRouter>
        <Header setToggleValue={toggol} toggleValue={hide} />
        <Sidebar toggleValue={hide}>
          <Routes>
            <Route path="/" element={<Dashboard toggleValue={hide} setToggleValue={toggol} />} />
            <Route path="/Usermanagement" element={<Usermanagement toggleValue={hide} setToggleValue={toggol} />} />
            <Route path="/Assainment" element={<Assinment toggleValue={hide} setToggleValue={toggol} />} />
            <Route path="/Data" element={<Data toggleValue={hide} setToggleValue={toggol} />} />
            <Route path="/Predictive" element={<Predictive toggleValue={hide} setToggleValue={toggol} />} />
            <Route path="/Notifications" element={<Notifications toggleValue={hide} setToggleValue={toggol} />} />
            <Route path="/Profile" element={<Profile toggleValue={hide} setToggleValue={toggol} />} />
            <Route path="/Logout" element={<Logout />} />
          </Routes>
        </Sidebar>
      </BrowserRouter>
    </div>
  );
}

export default App;
