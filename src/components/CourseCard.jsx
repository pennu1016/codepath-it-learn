import React from 'react'
import { Link } from 'react-router-dom'

export default function CourseCard({ course }) {
  return (
    <Link
      to={`/lessons/${course.id}`}
      className="group relative flex flex-col overflow-hidden rounded-lg border border-surface-border bg-surface p-5 shadow-card transition-all hover:-translate-y-1 hover:border-amber/40"
    >
      <div
        className="absolute inset-x-0 top-0 h-1"
        style={{ backgroundColor: course.color }}
      />
      <div className="flex items-center justify-between">
        <span
          className="rounded-md px-2 py-1 font-mono text-[11px] uppercase tracking-wide"
          style={{ backgroundColor: `${course.color}20`, color: course.color }}
        >
          {course.tag}
        </span>
        <span className="font-mono text-[11px] text-ink2">{course.duration}</span>
      </div>

      <h3 className="mt-4 font-display text-xl font-semibold text-white">
        {course.title}
      </h3>
      <p className="mt-1 text-sm text-ink2">{course.tagline}</p>

      <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-400">
        {course.description}
      </p>

      <div className="mt-5 flex items-center justify-between border-t border-surface-border pt-4">
        <span className="font-mono text-xs text-ink2">{course.level}</span>
        <span className="font-mono text-sm text-amber opacity-0 transition-opacity group-hover:opacity-100">
          start →
        </span>
      </div>
    </Link>
  )
}
