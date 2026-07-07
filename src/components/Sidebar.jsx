import React from 'react'

export default function Sidebar({ course, activeLessonId, onSelect, completedIds = [] }) {
  return (
    <aside className="w-full shrink-0 rounded-lg border border-surface-border bg-surface p-3 md:w-64">
      <div className="mb-2 px-2 font-mono text-[11px] uppercase tracking-wide text-ink2">
        {course.title} / lessons
      </div>
      <nav className="flex flex-col gap-1">
        {course.lessons.map((lesson, i) => {
          const isActive = lesson.id === activeLessonId
          const done = completedIds.includes(lesson.id)
          return (
            <button
              key={lesson.id}
              onClick={() => onSelect(lesson.id)}
              className={`flex items-center gap-2 rounded-md px-3 py-2 text-left text-sm transition-colors ${
                isActive
                  ? 'bg-surface-raised text-white'
                  : 'text-ink2 hover:bg-surface-raised/60 hover:text-slate-200'
              }`}
            >
              <span
                className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-full font-mono text-[10px] ${
                  done ? 'bg-mint/20 text-mint' : 'bg-ink text-ink2'
                }`}
              >
                {done ? '✓' : i + 1}
              </span>
              {lesson.title}
            </button>
          )
        })}
        <a
          href={`#quiz`}
          className="mt-2 flex items-center gap-2 rounded-md border border-dashed border-surface-border px-3 py-2 text-sm text-amber hover:bg-surface-raised/60"
        >
          <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-amber/15 font-mono text-[10px]">
            ?
          </span>
          Take the quiz
        </a>
      </nav>
    </aside>
  )
}
