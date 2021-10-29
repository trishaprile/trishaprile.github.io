import React, { useState, useEffect } from 'react';
import { FiMoon } from "react-icons/fi";
import { FiSun } from "react-icons/fi";

const ThemeChanger = () => {
  const [themeState, setThemeState] = useState(false);

  useEffect(() => {
    const getTheme = localStorage.getItem('Theme');
    if (getTheme === 'dark') {
      setThemeState(true);
    }
  }, []);

  useEffect(() => {
    if (themeState) {
      localStorage.setItem('Theme', 'dark');
      document.body.classList.add('dark-mode');
    } else {
      localStorage.setItem('Theme', 'light');
      document.body.classList.remove('dark-mode');
    }
  }, [themeState]);

  return (
    <div onClick={() => setThemeState(!themeState)}>
      {themeState ? <FiSun size={25} style={{cursor: 'pointer', margin: '.5rem 2rem .5rem 0'}} /> : <FiMoon size={25} style={{cursor: 'pointer', margin: '.5rem 2rem .5rem 0'}} />}
    </div>
  )
}

export default ThemeChanger;