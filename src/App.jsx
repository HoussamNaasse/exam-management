import Footer from './components/Footer';
import Navbar from './components/MyNavbar';
import Landing from './pages/Landing'
import Login from './pages/Login'
import './assets/Main.scss';

import {BrowserRouter,Routes,Route} from 'react-router-dom'
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Landing />}/>
        <Route path='/login' element={<Login />}/>
      </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
