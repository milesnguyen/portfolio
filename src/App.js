import { createContext, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ToggleTheme from './Component/ToggleTheme/ToggleTheme';
import About from './Page/About/index';
import Contact from './Page/Contact/index';
import Home from './Page/Home/index';
import Portfolio from './Page/Portfolio/index';
import Skill from './Page/Skill/index';

export const ThemeContext = createContext(null);

function App() {
    const [theme, setTheme] = useState('dark');

    const toggleTheme = () => {
        setTheme((curr) => (curr === 'light' ? 'dark' : 'light'));
    };

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            <Router>
                <div className="App" id={theme}>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/Portfolio" element={<Portfolio />} />
                        <Route path="/Skill" element={<Skill />} />
                        <Route path="/Contact" element={<Contact />} />
                    </Routes>
                    <ToggleTheme onChanges={toggleTheme} checkeds={theme === 'light'} />
                </div>
            </Router>
        </ThemeContext.Provider>
    );
}

export default App;
