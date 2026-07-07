import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Button from '../components/Button.jsx'
import { useAuth } from '../context/AuthContext.jsx'

export default function Login() {
  const { login } = useAuth()
  const navigate = useNavigate()
  const [mode, setMode] = useState('signin')
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  function handleSubmit(e) {
    e.preventDefault()
    if (!email || !password) {
      setError('Enter an email and password to continue.')
      return
    }
    if (mode === 'signup' && !name) {
      setError('Enter your name to create an account.')
      return
    }
    setError('')
    login(name, email)
    navigate('/dashboard')
  }

  return (
    <div className="mx-auto flex max-w-md flex-col px-5 py-16">
      <div className="overflow-hidden rounded-xl border border-surface-border bg-surface shadow-card">
        <div className="flex items-center gap-2 border-b border-surface-border bg-surface-raised px-4 py-3">
          <span className="dot bg-rose/70" />
          <span className="dot bg-amber/70" />
          <span className="dot bg-mint/70" />
          <span className="ml-2 font-mono text-xs text-ink2">auth.js</span>
        </div>

        <div className="p-6">
          <div className="mb-6 flex rounded-md border border-surface-border p-1">
            {['signin', 'signup'].map((m) => (
              <button
                key={m}
                onClick={() => setMode(m)}
                className={`flex-1 rounded-md py-2 font-mono text-xs transition-colors ${
                  mode === m ? 'bg-amber text-ink' : 'text-ink2'
                }`}
              >
                {m === 'signin' ? 'Sign in' : 'Create account'}
              </button>
            ))}
          </div>

          <h1 className="font-display text-xl font-semibold text-white">
            {mode === 'signin' ? 'Welcome back' : 'Start learning'}
          </h1>
          <p className="mt-1 text-sm text-ink2">
            {mode === 'signin'
              ? 'Sign in to pick up where you left off.'
              : 'Create a free account to track lessons and quiz scores.'}
          </p>

          <form onSubmit={handleSubmit} className="mt-6 flex flex-col gap-4">
            {mode === 'signup' && (
              <label className="flex flex-col gap-1.5">
                <span className="font-mono text-xs text-ink2">name</span>
                <input
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Ada Lovelace"
                  className="rounded-md border border-surface-border bg-ink px-3 py-2.5 text-sm text-slate-200 placeholder:text-ink2/60 focus:border-amber"
                />
              </label>
            )}

            <label className="flex flex-col gap-1.5">
              <span className="font-mono text-xs text-ink2">email</span>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                className="rounded-md border border-surface-border bg-ink px-3 py-2.5 text-sm text-slate-200 placeholder:text-ink2/60 focus:border-amber"
              />
            </label>

            <label className="flex flex-col gap-1.5">
              <span className="font-mono text-xs text-ink2">password</span>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="rounded-md border border-surface-border bg-ink px-3 py-2.5 text-sm text-slate-200 placeholder:text-ink2/60 focus:border-amber"
              />
            </label>

            {error && (
              <p className="rounded-md border border-rose/40 bg-rose/10 px-3 py-2 font-mono text-xs text-rose">
                {error}
              </p>
            )}

            <Button type="submit" className="mt-2 w-full">
              {mode === 'signin' ? 'Sign in' : 'Create account'}
            </Button>
          </form>

          <p className="mt-5 text-center font-mono text-xs text-ink2">
            demo only — no data leaves your browser.
          </p>
        </div>
      </div>
    </div>
  )
}
