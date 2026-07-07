import React from 'react'

export default function Footer() {
  return (
    <footer className="border-t border-surface-border bg-ink-light">
      <div className="mx-auto max-w-7xl px-5 py-10">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
          <div>
            <div className="flex items-center gap-2 font-display text-base font-semibold text-white">
              <span className="flex h-7 w-7 items-center justify-center rounded-md bg-amber/15 font-mono text-xs text-amber">
                &lt;/&gt;
              </span>
              codepath
            </div>
            <p className="mt-2 max-w-xs font-mono text-xs leading-relaxed text-ink2">
              // learn to build things, one commit at a time.
            </p>
          </div>

          <div className="flex gap-10 font-mono text-xs text-ink2">
            <div className="flex flex-col gap-2">
              <span className="text-slate-400">Learn</span>
              <a href="#" className="hover:text-amber">HTML</a>
              <a href="#" className="hover:text-amber">CSS</a>
              <a href="#" className="hover:text-amber">JavaScript</a>
            </div>
            <div className="flex flex-col gap-2">
              <span className="text-slate-400">Platform</span>
              <a href="#" className="hover:text-amber">Courses</a>
              <a href="#" className="hover:text-amber">Dashboard</a>
              <a href="#" className="hover:text-amber">Quizzes</a>
            </div>
          </div>
        </div>

        <div className="mt-8 flex flex-col gap-2 border-t border-surface-border pt-5 text-xs text-ink2 md:flex-row md:items-center md:justify-between">
          <span>© {new Date().getFullYear()} codepath. All rights reserved.</span>
          <span className="font-mono">status: <span className="text-mint">● all systems compiling</span></span>
        </div>
      </div>
    </footer>
  )
}
