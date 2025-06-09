
import React, { useState } from 'react';
import { Sun, Moon, Globe, Settings } from 'lucide-react';

const ThemeToggle = () => {
  const [isDark, setIsDark] = useState(false);
  const [showOptions, setShowOptions] = useState(false);

  const toggleTheme = () => {
    setIsDark(!isDark);
    // Here you would implement actual theme switching logic
    document.documentElement.classList.toggle('dark');
  };

  const preferences = [
    { name: 'Light Mode', icon: Sun, active: !isDark },
    { name: 'Dark Mode', icon: Moon, active: isDark },
    { name: 'Language', icon: Globe, action: () => console.log('Language settings') },
    { name: 'Settings', icon: Settings, action: () => console.log('Quick settings') }
  ];

  return (
    <div className="relative">
      <button
        onClick={() => setShowOptions(!showOptions)}
        className="p-2 bg-accent hover:bg-accent/80 rounded-lg transition-all duration-300 hover:scale-105"
      >
        {isDark ? (
          <Moon className="h-4 w-4 text-foreground" />
        ) : (
          <Sun className="h-4 w-4 text-foreground" />
        )}
      </button>

      {showOptions && (
        <div className="absolute right-0 mt-2 w-48 bg-card border border-border rounded-lg shadow-lg z-50 animate-fade-in">
          <div className="p-2 space-y-1">
            {preferences.map((pref, index) => {
              const IconComponent = pref.icon;
              return (
                <button
                  key={index}
                  onClick={pref.name.includes('Mode') ? toggleTheme : pref.action}
                  className={`w-full flex items-center space-x-3 p-2 rounded-md transition-all duration-200 hover:bg-accent ${
                    pref.active ? 'bg-primary/10 text-primary' : 'text-foreground'
                  }`}
                >
                  <IconComponent className="h-4 w-4" />
                  <span className="text-sm">{pref.name}</span>
                  {pref.active && (
                    <div className="ml-auto w-2 h-2 bg-primary rounded-full"></div>
                  )}
                </button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default ThemeToggle;
