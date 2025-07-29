import { Route, Routes } from 'react-router-dom';
import About from './About';
import Contact from './Contact';
import './App.css';
import Topbar from './Topbar';

function Home() {
  return (
    <div className="home-content">
      <h1>Welcome to Digital Library</h1>
      <p>Discover and download books from our vast collection</p>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <Topbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        {/* Add more routes as needed */}
      </Routes>
    </div>
  );
}

export default App;