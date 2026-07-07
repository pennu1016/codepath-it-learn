import React, { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext.jsx'

const links = [
  { to: '/', label: 'home.md' },
  { to: '/courses', label: 'courses.js' },
  { to: '/dashboard', label: 'dashboard.tsx' },
]

export default function Navbar() {
  const { user, logout } = useAuth()
  const navigate = useNavigate()
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-40 border-b border-surface-border bg-ink/90 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3">
        <NavLink to="/" className="flex items-center gap-2 font-display text-lg font-semibold text-white">
          <span className="flex h-8 w-8 items-center justify-center rounded-md bg-amber/15 font-mono text-amber">
            &lt;/&gt;
          </span>
          codepath
        </NavLink>

        <nav className="hidden items-center gap-1 md:flex">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === '/'}
              className={({ isActive }) =>
                `rounded-t-md border-b-2 px-4 py-2 font-mono text-sm transition-colors ${
                  isActive
                    ? 'border-amber text-white'
                    : 'border-transparent text-ink2 hover:text-slate-200'
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          {user ? (
            <>
              <span className="font-mono text-xs text-ink2">
                {'>'} {user.name}
              </span>
              <button
                onClick={() => {
                  logout()
                  navigate('/')
                }}
                className="rounded-md border border-surface-border px-3 py-1.5 text-sm text-slate-300 transition-colors hover:border-rose/50 hover:text-rose"
              >
                Log out
              </button>
            </>
          ) : (
            <NavLink
              to="/login"
              className="rounded-md bg-amber px-4 py-1.5 text-sm font-semibold text-ink shadow-glow transition-transform hover:scale-[1.03]"
            >
              Sign in
            </NavLink>
          )}
        </div>

        <button
          className="text-slate-300 md:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M4 6h16M4 12h16M4 18h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </button>
      </div>

      {open && (
        <div className="flex flex-col gap-1 border-t border-surface-border px-5 py-3 md:hidden">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === '/'}
              onClick={() => setOpen(false)}
              className="rounded-md px-3 py-2 font-mono text-sm text-slate-300 hover:bg-surface"
            >
              {link.label}
            </NavLink>
          ))}
          {user ? (
            <button
              onClick={() => {
                logout()
                setOpen(false)
                navigate('/')
              }}
              className="rounded-md px-3 py-2 text-left text-sm text-rose"
            >
              Log out
            </button>
          ) : (
            <NavLink
              to="/login"
              onClick={() => setOpen(false)}
              className="rounded-md bg-amber px-3 py-2 text-center text-sm font-semibold text-ink"
            >
              Sign in
            </NavLink>
          )}
        </div>
      )}
    </header>
  )
}
