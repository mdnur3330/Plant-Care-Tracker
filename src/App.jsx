import React, { useState, createContext, useContext } from 'react';
import './App.css'; // CSS ফাইল ডার্ক/লাইট স্টাইল রাখার জন্য

const ThemeContext = createContext();

const App = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleTheme = () => {
    setDarkMode(prev => !prev);
  };

  return (
    <ThemeContext.Provider value={{ darkMode, toggleTheme }}>
      <div className={darkMode ? 'app dark' : 'app light'}>
        <Header />
        <MainContent />
      </div>
    </ThemeContext.Provider>
  );
};

const Header = () => {
  const { darkMode, toggleTheme } = useContext(ThemeContext);

  return (
    <header>
      <button onClick={toggleTheme}>
        {darkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
      </button>
    </header>
  );
};

const MainContent = () => (
  <main>
    <h1>Hello, this is the {new Date().toLocaleDateString()}!</h1>
    <p>This is your content area.</p>
  </main>
);

export default App;
