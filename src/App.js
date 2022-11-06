import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import About from './Page/About/index';
import Contact from './Page/Contact/index';
import Home from './Page/Home/index';
import Portfolio from './Page/Portfolio/index';
import Skill from './Page/Skill/index';

function App() {
    return (
        <Router>
            <div className="App">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/Portfolio" element={<Portfolio />} />
                    <Route path="/Skill" element={<Skill />} />
                    <Route path="/Contact" element={<Contact />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
