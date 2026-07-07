import React, { useEffect, useState } from 'react'

const snippets = [
  {
    lang: 'html',
    color: '#F5738C',
    lines: [
      '<!DOCTYPE html>',
      '<body>',
      '  <h1>Hello, world!</h1>',
      '</body>',
    ],
  },
  {
    lang: 'css',
    color: '#2DD4BF',
    lines: [
      '.card {',
      '  display: flex;',
      '  padding: 16px;',
      '}',
    ],
  },
  {
    lang: 'javascript',
    color: '#F5A623',
    lines: [
      'const learn = () => {',
      '  return "one lesson";',
      '};',
      'learn();',
    ],
  },
  {
    lang: 'python',
    color: '#8B96A8',
    lines: [
      'def greet(name):',
      '    return f"Hi {name}"',
      '',
      'greet("you")',
    ],
  },
]

export default function CodeEditorHero() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % snippets.length)
    }, 3200)
    return () => clearInterval(id)
  }, [])

  const active = snippets[index]

  return (
    <div className="w-full max-w-xl overflow-hidden rounded-xl border border-surface-border bg-surface shadow-card">
      <div className="flex items-center gap-2 border-b border-surface-border bg-surface-raised px-4 py-3">
        <span className="dot bg-rose/70" />
        <span className="dot bg-amber/70" />
        <span className="dot bg-mint/70" />
        <div className="ml-3 flex gap-1">
          {snippets.map((s, i) => (
            <span
              key={s.lang}
              className={`rounded-t-md px-3 py-1 font-mono text-xs transition-colors ${
                i === index ? 'bg-ink text-white' : 'text-ink2'
              }`}
            >
              lesson.{s.lang === 'javascript' ? 'js' : s.lang === 'python' ? 'py' : s.lang}
            </span>
          ))}
        </div>
      </div>

      <div className="flex min-h-[220px]">
        <div className="select-none border-r border-surface-border px-3 py-4 text-right font-mono text-xs text-ink2/60">
          {active.lines.map((_, i) => (
            <div key={i} className="leading-7">{i + 1}</div>
          ))}
        </div>
        <pre className="flex-1 overflow-x-auto px-4 py-4 font-mono text-sm leading-7">
          <code>
            {active.lines.map((line, i) => (
              <div key={i} style={{ color: i === 0 ? active.color : '#CBD5E1' }}>
                {line || '\u00A0'}
              </div>
            ))}
          </code>
        </pre>
      </div>

      <div className="flex items-center justify-between border-t border-surface-border bg-surface-raised px-4 py-2 font-mono text-[11px] text-ink2">
        <span>UTF-8</span>
        <span style={{ color: active.color }}>● {active.lang}</span>
      </div>
    </div>
  )
}
