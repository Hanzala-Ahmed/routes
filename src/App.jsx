import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Components/About';
import Contact from './Components/Contact';
import Feedback from './Components/Feedback';
import Home from './Components/Home';

function App() {
  return (
    <>
    <Routes>
      <Route index element={<Home />}></Route>
      <Route path='about' element={<About />}></Route>
      <Route path='contact' element={<Contact />}></Route>
      <Route path='feedback' element={<Feedback />}></Route>
    </Routes>
    </>
  );
}

export default App;
