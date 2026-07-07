import React from 'react'
import { Link, Navigate } from 'react-router-dom'
import Button from '../components/Button.jsx'
import { useAuth } from '../context/AuthContext.jsx'
import { courses } from '../data/courses.js'

export default function Dashboard() {
  const { user, progress } = useAuth()

  if (!user) return <Navigate to="/login" replace />

  const quizzes = progress.quizzes || {}
  const totalLessons = courses.reduce((acc, c) => acc + c.lessons.length, 0)
  const completedLessons = courses.reduce(
    (acc, c) => acc + (progress[c.id]?.length || 0),
    0,
  )
  const percent = Math.round((completedLessons / totalLessons) * 100)

  return (
    <div className="mx-auto max-w-6xl px-5 py-12">
      <p className="font-mono text-xs uppercase tracking-wide text-amber">// dashboard.tsx</p>
      <h1 className="mt-2 font-display text-3xl font-semibold text-white">
        Welcome back, {user.name}
      </h1>
      <p className="mt-2 text-sm text-ink2">{user.email}</p>

      <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-3">
        <div className="rounded-lg border border-surface-border bg-surface p-5">
          <p className="font-mono text-xs text-ink2">overall progress</p>
          <p className="mt-2 font-display text-3xl font-semibold text-white">{percent || 0}%</p>
          <div className="mt-3 h-2 overflow-hidden rounded-full bg-ink">
            <div className="h-full bg-amber" style={{ width: `${percent || 0}%` }} />
          </div>
        </div>
        <div className="rounded-lg border border-surface-border bg-surface p-5">
          <p className="font-mono text-xs text-ink2">lessons completed</p>
          <p className="mt-2 font-display text-3xl font-semibold text-white">
            {completedLessons}<span className="text-base text-ink2">/{totalLessons}</span>
          </p>
        </div>
        <div className="rounded-lg border border-surface-border bg-surface p-5">
          <p className="font-mono text-xs text-ink2">quizzes taken</p>
          <p className="mt-2 font-display text-3xl font-semibold text-white">
            {Object.keys(quizzes).length}<span className="text-base text-ink2">/{courses.length}</span>
          </p>
        </div>
      </div>

      <h2 className="mt-10 font-display text-xl font-semibold text-white">Your courses</h2>
      <div className="mt-4 flex flex-col gap-3">
        {courses.map((course) => {
          const done = progress[course.id]?.length || 0
          const quizResult = quizzes[course.id]
          const coursePercent = Math.round((done / course.lessons.length) * 100)
          return (
            <div
              key={course.id}
              className="flex flex-col gap-4 rounded-lg border border-surface-border bg-surface p-5 sm:flex-row sm:items-center sm:justify-between"
            >
              <div className="flex items-center gap-3">
                <span
                  className="flex h-10 w-10 items-center justify-center rounded-md font-mono text-xs"
                  style={{ backgroundColor: `${course.color}20`, color: course.color }}
                >
                  {course.title.slice(0, 2).toUpperCase()}
                </span>
                <div>
                  <p className="font-medium text-white">{course.title}</p>
                  <p className="font-mono text-xs text-ink2">
                    {done}/{course.lessons.length} lessons
                    {quizResult ? ` · quiz ${quizResult.score}/${quizResult.total}` : ' · quiz not taken'}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="hidden h-2 w-32 overflow-hidden rounded-full bg-ink sm:block">
                  <div
                    className="h-full"
                    style={{ width: `${coursePercent}%`, backgroundColor: course.color }}
                  />
                </div>
                <Button as={Link} to={`/lessons/${course.id}`} variant="secondary">
                  {done === 0 ? 'Start' : 'Continue'}
                </Button>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
