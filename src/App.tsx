import { ChevronRight, Book, Users, GraduationCap, Github, Linkedin, Mail, ArrowRight } from 'lucide-react';
import Logofsf from "./Logofsf.jpeg";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { AP1 } from './pages/AP1';
import { AP2 } from './pages/AP2';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ap1" element={<AP1 />} />
        <Route path="/ap2" element={<AP2 />} />
      </Routes>
    </Router>
  );
}

export default App;