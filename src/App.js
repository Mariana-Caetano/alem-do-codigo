import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Footer from './components/Footer';
import Carreiras from './pages/Carreiras';
import Colabore from './pages/Colabore';


function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' exact element={<Home />} />
          <Route path='/carreiras' exact element={<Carreiras />} />
          <Route path='/colabore' exact element={<Colabore />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
