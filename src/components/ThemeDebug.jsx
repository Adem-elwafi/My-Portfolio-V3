import React from 'react';
import { useTheme } from '../context/ThemeContext';

const ThemeDebug = () => {
  const { isDarkMode } = useTheme();
  
  return (
    <div className="fixed bottom-4 right-4 bg-black dark:bg-gray-800 text-white p-4 rounded-lg shadow-xl z-50 border-2 border-primary dark:border-blue-400">
      <div className="text-sm font-mono space-y-1">
        <p className="font-bold text-primary dark:text-blue-400">🔧 Dark Mode Debug</p>
        <p>
          <span className="text-gray-400">Mode:</span>{' '}
          <span className={isDarkMode ? 'text-green-400' : 'text-yellow-400'}>
            {isDarkMode ? '🌙 DARK' : '☀️ LIGHT'}
          </span>
        </p>
        <p>
          <span className="text-gray-400">HTML Class:</span>{' '}
          <span className="text-blue-300">
            {document.documentElement.className || 'none'}
          </span>
        </p>
        <p>
          <span className="text-gray-400">LocalStorage:</span>{' '}
          <span className="text-purple-300">
            {localStorage.getItem('theme') || 'not set'}
          </span>
        </p>
      </div>
    </div>
  );
};

export default ThemeDebug;
