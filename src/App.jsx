import React, { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/home/home';
import Services from './pages/services/services';

function App() {
  // State to manage dark mode
  const [darkMode, setDarkMode] = useState(() => {
    // Check local storage and media query to determine dark mode preference
    return (
      localStorage.theme === 'dark' ||
      (!('theme' in localStorage) &&
        window.matchMedia('(prefers-color-scheme: dark)').matches)
    );
  });

  // Effect to apply dark mode class and update localStorage when the component mounts or darkMode changes
  useEffect(() => {
    document.documentElement.classList.toggle('dark', darkMode);
    localStorage.theme = darkMode ? 'dark' : 'light'; // Update localStorage.theme
  }, [darkMode]);

  // Function to toggle dark mode
  const toggleDarkMode = () => {
    setDarkMode((prevDarkMode) => !prevDarkMode);
  };

  return (
    <Routes>
      <Route
        path="/"
        element={<Home changeDarkMode={toggleDarkMode} darkMode={darkMode} />}
      />
      <Route
        path="/services"
        element={<Services changeDarkMode={toggleDarkMode} darkMode={darkMode} />}
      />
    </Routes>
  );
}

export default App;
