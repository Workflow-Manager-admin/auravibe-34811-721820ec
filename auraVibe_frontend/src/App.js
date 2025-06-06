import React, { useState } from 'react';
import './App.css';
import LogoAura from "./LogoAura";

// Placeholder icons via emoji for navigation
const NAV_ITEMS = [
  { name: "Home", icon: "🏠" },
  { name: "Explore", icon: "🔍" },
  { name: "Messages", icon: "💬" },
  { name: "Notifications", icon: "🔔" },
  { name: "Profile", icon: "👤" },
  { name: "Settings", icon: "🛠️" }, // Changed from "Admin" to "Settings"
];

// PUBLIC_INTERFACE
function App() {
  // Theme toggle logic (just simulates for now)
  const [dark, setDark] = useState(true);

  const toggleTheme = () => setDark((d) => !d);

  return (
    <div className={`app${dark ? ' dark' : ' light'}`}>
      {/* Header */}
      <header className="av-header">
        <div className="av-header-logo">
          <LogoAura size={40} accent="#c0bec5" />
        </div>
        <button className="av-theme-toggle" onClick={toggleTheme} aria-label="Toggle theme">
          {dark ? "🌙" : "🌞"}
        </button>
      </header>

      <div className="av-main-layout">
        {/* Left Sidebar */}
        <nav className="av-sidebar-left" aria-label="Main navigation">
          <ul>
            {NAV_ITEMS.map((item) => (
              <li key={item.name}>
                <a href="#">
                  <span className="av-nav-icon">{item.icon}</span>
                  <span className="av-nav-label">{item.name}</span>
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <main className="av-feed-main">
          {/* Stories Carousel Placeholder */}
          <section className="av-stories-carousel" aria-label="Stories">
            <div className="av-stories-placeholder">Stories Carousel (placeholder)</div>
          </section>
          
          {/* Main Feed Placeholder */}
          <section className="av-feed-placeholder" aria-label="Feed">
            <div className="av-feed-card">Main Feed Area (placeholder)</div>
          </section>
        </main>

        {/* Right Sidebar */}
        <aside className="av-sidebar-right" aria-label="Trending and Suggestions">
          <div className="av-sidebar-section">
            <div className="av-sidebar-title">Trending Hashtags</div>
            <div className="av-placeholder">
              #workoutmotivation<br />
              #healthylifestyle<br />
              #wellnessjourney<br />
              #SummerIsHere<br />
              #love<br />
              #photooftheday
            </div>
          </div>
          <div className="av-sidebar-section">
            <div className="av-sidebar-title">Suggested Users</div>
            <div className="av-placeholder">
              @cristiano<br />
              @selenagomez<br />
              @leomessi<br />
              @virat.kohli<br />
              @kendalljenner
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}

export default App;