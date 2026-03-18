import { useState, useRef, useEffect } from "react";

const NAV_LINKS = [
  { label: "Products", sub: ["Overview", "Pricing", "Changelog", "Roadmap"] },
  { label: "Solutions", sub: ["For Teams", "For Startups", "Enterprise", "Agencies"] },
  { label: "Docs", sub: [] },
  { label: "Blog", sub: [] },
];

export default function Navbar() {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState(null);
  const navRef = useRef(null);

  useEffect(() => {
    const handler = (e) => {
      if (navRef.current && !navRef.current.contains(e.target)) {
        setActiveDropdown(null);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500&family=IBM+Plex+Sans:wght@300;400;500&display=swap');

        * { box-sizing: border-box; }
        .nb { font-family: 'IBM Plex Sans', sans-serif; }
        .nb-mono { font-family: 'IBM Plex Mono', monospace; }

        .nb-link {
          position: relative;
          padding: 6px 0;
          font-size: 13px;
          font-weight: 400;
          letter-spacing: 0.02em;
          color: #a0a0a0;
          cursor: pointer;
          transition: color 0.15s;
          background: none;
          border: none;
          display: flex;
          align-items: center;
          gap: 4px;
          white-space: nowrap;
        }
        .nb-link:hover, .nb-link.open { color: #f5f5f5; }

        .nb-chevron {
          display: inline-block;
          width: 10px;
          height: 10px;
          transition: transform 0.2s;
        }
        .nb-link.open .nb-chevron { transform: rotate(180deg); }

        .nb-dropdown {
          position: absolute;
          top: calc(100% + 12px);
          left: 0;
          min-width: 160px;
          background: #0a0a0a;
          border: 1px solid #2a2a2a;
          padding: 6px 0;
          opacity: 0;
          transform: translateY(-6px);
          pointer-events: none;
          transition: opacity 0.18s ease, transform 0.18s ease;
        }
        .nb-dropdown.visible {
          opacity: 1;
          transform: translateY(0);
          pointer-events: all;
        }
        .nb-dropdown a {
          display: block;
          padding: 8px 16px;
          font-size: 12px;
          color: #888;
          text-decoration: none;
          letter-spacing: 0.02em;
          transition: color 0.12s, background 0.12s;
        }
        .nb-dropdown a:hover { color: #f5f5f5; background: #141414; }

        .nb-badge {
          font-family: 'IBM Plex Mono', monospace;
          font-size: 9px;
          letter-spacing: 0.08em;
          padding: 2px 6px;
          border: 1px solid #2a2a2a;
          color: #666;
          text-transform: uppercase;
        }

        .nb-cta {
          font-family: 'IBM Plex Mono', monospace;
          font-size: 11px;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          padding: 7px 16px;
          background: #f5f5f5;
          color: #0a0a0a;
          border: none;
          cursor: pointer;
          transition: background 0.15s;
          text-decoration: none;
        }
        .nb-cta:hover { background: #d4d4d4; }

        .nb-cta-ghost {
          font-family: 'IBM Plex Mono', monospace;
          font-size: 11px;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          padding: 7px 16px;
          background: transparent;
          color: #888;
          border: 1px solid #2a2a2a;
          cursor: pointer;
          transition: color 0.15s, border-color 0.15s;
          text-decoration: none;
        }
        .nb-cta-ghost:hover { color: #f5f5f5; border-color: #555; }

        .nb-mobile-menu {
          max-height: 0;
          overflow: hidden;
          transition: max-height 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .nb-mobile-menu.open { max-height: 600px; }

        .nb-mobile-section {
          max-height: 0;
          overflow: hidden;
          transition: max-height 0.3s ease;
        }
        .nb-mobile-section.open { max-height: 200px; }

        .nb-burger span {
          display: block;
          width: 18px;
          height: 1px;
          background: #a0a0a0;
          transition: transform 0.25s, opacity 0.25s, margin 0.25s;
          margin-bottom: 4px;
        }
        .nb-burger span:last-child { margin-bottom: 0; }
        .nb-burger.open span:nth-child(1) { transform: rotate(45deg) translate(3px, 3px); }
        .nb-burger.open span:nth-child(2) { opacity: 0; }
        .nb-burger.open span:nth-child(3) { transform: rotate(-45deg) translate(3px, -3px); }
      `}</style>

      <div style={{ background: "#0a0a0a", minHeight: "100vh" }}>
        <header
          ref={navRef}
          className="nb"
          style={{
            background: "#0a0a0a",
            borderBottom: "1px solid #1e1e1e",
            position: "sticky",
            top: 0,
            zIndex: 50,
          }}
        >
          {/* Top strip */}
          <div style={{ borderBottom: "1px solid #1a1a1a", padding: "5px 0", display: "flex", justifyContent: "center" }}>
            <span className="nb-mono" style={{ fontSize: 10, color: "#555", letterSpacing: "0.1em", textTransform: "uppercase" }}>
              Now in public beta — <a href="#" style={{ color: "#888", textDecoration: "underline" }}>Read the announcement</a>
            </span>
          </div>

          <div style={{ maxWidth: 1120, margin: "0 auto", padding: "0 24px", height: 52, display: "flex", alignItems: "center", gap: 32 }}>
            {/* Logo */}
            <a href="#" style={{ textDecoration: "none", display: "flex", alignItems: "center", gap: 8, flexShrink: 0 }}>
              <div style={{ width: 20, height: 20, background: "#f5f5f5", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <div style={{ width: 8, height: 8, background: "#0a0a0a" }} />
              </div>
              <span className="nb-mono" style={{ fontSize: 13, color: "#f5f5f5", letterSpacing: "0.06em", fontWeight: 500 }}>KODEX</span>
              <span className="nb-badge">v2.1</span>
            </a>

            {/* Separator */}
            <div style={{ width: 1, height: 20, background: "#1e1e1e", flexShrink: 0 }} />

            {/* Desktop nav */}
            <nav style={{ display: "flex", alignItems: "center", gap: 24, flex: 1 }}>
              {NAV_LINKS.map(({ label, sub }) => (
                <div key={label} style={{ position: "relative" }}>
                  {sub.length > 0 ? (
                    <>
                      <button
                        className={`nb-link${activeDropdown === label ? " open" : ""}`}
                        onClick={() => setActiveDropdown(activeDropdown === label ? null : label)}
                      >
                        {label}
                        <svg className="nb-chevron" viewBox="0 0 10 10" fill="none">
                          <path d="M2 4l3 3 3-3" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </button>
                      <div className={`nb-dropdown${activeDropdown === label ? " visible" : ""}`}>
                        {sub.map((s) => <a key={s} href="#">{s}</a>)}
                      </div>
                    </>
                  ) : (
                    <a href="#" className="nb-link" style={{ textDecoration: "none" }}>{label}</a>
                  )}
                </div>
              ))}
            </nav>

            {/* Right side — desktop */}
            <div style={{ display: "flex", alignItems: "center", gap: 8, flexShrink: 0 }}>
              <a href="#" className="nb-cta-ghost">Log in</a>
              <a href="#" className="nb-cta">Get access</a>
            </div>

            {/* Mobile burger */}
            <button
              className={`nb-burger${mobileOpen ? " open" : ""}`}
              onClick={() => setMobileOpen(!mobileOpen)}
              style={{ background: "none", border: "none", cursor: "pointer", padding: 4, flexShrink: 0 }}
            >
              <span /><span /><span />
            </button>
          </div>

          {/* Mobile menu */}
          <div className={`nb-mobile-menu${mobileOpen ? " open" : ""}`}>
            <div style={{ borderTop: "1px solid #1e1e1e", padding: "8px 24px 16px" }}>
              {NAV_LINKS.map(({ label, sub }) => (
                <div key={label}>
                  <button
                    onClick={() => setMobileExpanded(mobileExpanded === label ? null : label)}
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      width: "100%",
                      padding: "12px 0",
                      borderBottom: "1px solid #141414",
                      background: "none",
                      border: "none",
                      color: "#a0a0a0",
                      fontSize: 13,
                      cursor: "pointer",
                      textAlign: "left",
                    }}
                  >
                    {label}
                    {sub.length > 0 && (
                      <svg width="10" height="10" viewBox="0 0 10 10" fill="none" style={{ transition: "transform 0.2s", transform: mobileExpanded === label ? "rotate(180deg)" : "none" }}>
                        <path d="M2 4l3 3 3-3" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    )}
                  </button>
                  {sub.length > 0 && (
                    <div className={`nb-mobile-section${mobileExpanded === label ? " open" : ""}`}>
                      {sub.map((s) => (
                        <a key={s} href="#" style={{ display: "block", padding: "9px 12px", fontSize: 12, color: "#666", textDecoration: "none", letterSpacing: "0.02em" }}>
                          {s}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <div style={{ display: "flex", flexDirection: "column", gap: 8, marginTop: 16 }}>
                <a href="#" className="nb-cta-ghost" style={{ textAlign: "center" }}>Log in</a>
                <a href="#" className="nb-cta" style={{ textAlign: "center" }}>Get access</a>
              </div>
            </div>
          </div>
        </header>

        {/* Demo body */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", height: "calc(100vh - 80px)" }}>
          <p className="nb-mono" style={{ fontSize: 11, color: "#2a2a2a", letterSpacing: "0.12em", textTransform: "uppercase" }}>
            Click nav items to explore
          </p>
        </div>
      </div>
    </>
  );
}