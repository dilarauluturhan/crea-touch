import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import Detail from './pages/Detail';

function App() {
  return (
    <div className='bg-firstColor'>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products/:id" element={<Detail />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  )
}

export default App;