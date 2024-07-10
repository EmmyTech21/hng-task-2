import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Nav from './components/Nav';
import Home from './components/Home';
 import Shop from './components/Shop'
 import About from './components/About'
 import Contact from './components/Contact'
function App() {
  return (
    <div>
      <Router>
        <Nav />
        <Routes>
          <Route path='/' element={<Home />} />
            <Route path='/shop' element={< Shop/>} />
              <Route path='/About' element={<About />} />
                <Route path='/Contact' element={<Contact/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
