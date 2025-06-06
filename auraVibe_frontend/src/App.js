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
          
          {/* Main Feed: Elegant Sample Posts */}
          <section className="av-feed-container" aria-label="Feed">
            <div className="av-feed-post">
              <div className="av-feed-post-header">
                <span className="av-feed-avatar" aria-label="avatar">🦋</span>
                <span className="av-feed-author">aura_artist</span>
                <span className="av-feed-dot">·</span>
                <span className="av-feed-time">2h ago</span>
              </div>
              <div className="av-feed-post-body">
                Glowing with midnight energy 🌌✨ – set your intentions and let your aura shine.
              </div>
              <div className="av-feed-post-footer">
                <span className="av-feed-action" aria-label="like">❤️ 24</span>
                <span className="av-feed-action" aria-label="comment">💬 6</span>
                <span className="av-feed-action" aria-label="save">🔖</span>
              </div>
            </div>

            <div className="av-feed-post">
              <div className="av-feed-post-header">
                <span className="av-feed-avatar" aria-label="avatar">🌙</span>
                <span className="av-feed-author">night.muse</span>
                <span className="av-feed-dot">·</span>
                <span className="av-feed-time">32m ago</span>
              </div>
              <div className="av-feed-post-body">
                Tonight's vibe: violet calm layered with hopes for tomorrow. Dream big, dream in color.
              </div>
              <div className="av-feed-post-footer">
                <span className="av-feed-action" aria-label="like">💜 18</span>
                <span className="av-feed-action" aria-label="comment">💬 2</span>
                <span className="av-feed-action" aria-label="save">🔖</span>
              </div>
            </div>

            <div className="av-feed-post">
              <div className="av-feed-post-header">
                <span className="av-feed-avatar" aria-label="avatar">🪐</span>
                <span className="av-feed-author">cosmic_flow</span>
                <span className="av-feed-dot">·</span>
                <span className="av-feed-time">1h ago</span>
              </div>
              <div className="av-feed-post-body">
                Aura check: turquoise bursts and silver linings. Sending all those cosmic waves your way!
              </div>
              <div className="av-feed-post-footer">
                <span className="av-feed-action" aria-label="like">💫 33</span>
                <span className="av-feed-action" aria-label="comment">💬 9</span>
                <span className="av-feed-action" aria-label="save">🔖</span>
              </div>
            </div>

            <div className="av-feed-post">
              <div className="av-feed-post-header">
                <span className="av-feed-avatar" aria-label="avatar">🌺</span>
                <span className="av-feed-author">serene.bloom</span>
                <span className="av-feed-dot">·</span>
                <span className="av-feed-time">8m ago</span>
              </div>
              <div className="av-feed-post-body">
                Deep breaths, soft light, gentle souls—your aura radiates beauty. 🌸
              </div>
              <div className="av-feed-post-footer">
                <span className="av-feed-action" aria-label="like">🌷 9</span>
                <span className="av-feed-action" aria-label="comment">💬 0</span>
                <span className="av-feed-action" aria-label="save">🔖</span>
              </div>
            </div>
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