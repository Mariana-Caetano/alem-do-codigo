import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Footer from './components/Footer';
import Carreiras from './pages/Carreiras';


function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' exact element={<Home />} />
          <Route path='/carreiras' exact element={<Carreiras />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
