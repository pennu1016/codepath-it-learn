import React, { useMemo, useState } from 'react'
import CourseCard from '../components/CourseCard.jsx'
import { courses } from '../data/courses.js'

const tags = ['all', ...new Set(courses.map((c) => c.tag))]

export default function Courses() {
  const [filter, setFilter] = useState('all')
  const [query, setQuery] = useState('')

  const filtered = useMemo(() => {
    return courses.filter((c) => {
      const matchesTag = filter === 'all' || c.tag === filter
      const matchesQuery = c.title.toLowerCase().includes(query.toLowerCase())
      return matchesTag && matchesQuery
    })
  }, [filter, query])

  return (
    <div className="mx-auto max-w-7xl px-5 py-14">
      <p className="font-mono text-xs uppercase tracking-wide text-amber">// courses.js</p>
      <h1 className="mt-2 font-display text-3xl font-semibold text-white md:text-4xl">
        All courses
      </h1>
      <p className="mt-2 max-w-xl text-sm text-ink2">
        Every course pairs short readings with runnable code and ends in a quiz. Pick one and jump straight to lesson one.
      </p>

      <div className="mt-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <button
              key={tag}
              onClick={() => setFilter(tag)}
              className={`rounded-md border px-3 py-1.5 font-mono text-xs transition-colors ${
                filter === tag
                  ? 'border-amber bg-amber/10 text-amber'
                  : 'border-surface-border text-ink2 hover:text-slate-200'
              }`}
            >
              {tag}
            </button>
          ))}
        </div>

        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="search courses…"
          className="w-full rounded-md border border-surface-border bg-surface px-3 py-2 font-mono text-sm text-slate-200 placeholder:text-ink2 focus:border-amber md:w-64"
        />
      </div>

      <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((course) => (
          <CourseCard key={course.id} course={course} />
        ))}
        {filtered.length === 0 && (
          <p className="col-span-full rounded-lg border border-dashed border-surface-border p-10 text-center font-mono text-sm text-ink2">
            No courses match "{query}". Try a different search.
          </p>
        )}
      </div>
    </div>
  )
}
