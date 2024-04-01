


import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './Header.css';
import AboutMeSection from './AboutMeSection';
import HomePage from "./HomePage";
import SkillSlider from "./SkillSlider";

function App() {
  return (
      <Router>
          <div className="App">
              <HomePage></HomePage>
              <Routes>
                  <Route path="/skills" element={<SkillSlider></SkillSlider>}></Route>
                  <Route path="/about" element={<AboutMeSection/>} />

              </Routes>
          </div>
      </Router>


  );
}

export default App;
