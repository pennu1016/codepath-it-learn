import React, { useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import Sidebar from '../components/Sidebar.jsx'
import Button from '../components/Button.jsx'
import { getCourse } from '../data/courses.js'
import { useAuth } from '../context/AuthContext.jsx'

export default function Lessons() {
  const { courseId } = useParams()
  const navigate = useNavigate()
  const course = getCourse(courseId)
  const { user, progress, markLessonComplete } = useAuth()

  const [activeLessonId, setActiveLessonId] = useState(course?.lessons[0]?.id)

  if (!course) {
    return (
      <div className="mx-auto max-w-3xl px-5 py-20 text-center">
        <p className="font-mono text-sm text-ink2">// 404</p>
        <h1 className="mt-2 font-display text-2xl text-white">Course not found</h1>
        <Button as={Link} to="/courses" className="mt-6">
          Back to courses
        </Button>
      </div>
    )
  }

  const lesson = course.lessons.find((l) => l.id === activeLessonId)
  const lessonIndex = course.lessons.findIndex((l) => l.id === activeLessonId)
  const completedIds = progress[course.id] || []
  const isLast = lessonIndex === course.lessons.length - 1

  function handleComplete() {
    if (user) markLessonComplete(course.id, lesson.id)
    if (isLast) {
      navigate(`/quiz/${course.id}`)
    } else {
      setActiveLessonId(course.lessons[lessonIndex + 1].id)
    }
  }

  return (
    <div className="mx-auto max-w-6xl px-5 py-10">
      <div className="mb-6 flex items-center gap-2 font-mono text-xs text-ink2">
        <Link to="/courses" className="hover:text-amber">courses</Link>
        <span>/</span>
        <span style={{ color: course.color }}>{course.title.toLowerCase()}</span>
      </div>

      <div className="flex flex-col gap-6 md:flex-row">
        <Sidebar
          course={course}
          activeLessonId={activeLessonId}
          onSelect={setActiveLessonId}
          completedIds={completedIds}
        />

        <div className="flex-1 rounded-lg border border-surface-border bg-surface p-6 md:p-8">
          <p className="font-mono text-xs text-ink2">
            Lesson {lessonIndex + 1} of {course.lessons.length}
          </p>
          <h1 className="mt-2 font-display text-2xl font-semibold text-white md:text-3xl">
            {lesson.title}
          </h1>
          <p className="mt-4 text-sm leading-relaxed text-slate-300">{lesson.content}</p>

          <div className="mt-6 overflow-hidden rounded-lg border border-surface-border">
            <div className="flex items-center gap-2 border-b border-surface-border bg-surface-raised px-4 py-2">
              <span className="dot bg-rose/70" />
              <span className="dot bg-amber/70" />
              <span className="dot bg-mint/70" />
              <span className="ml-2 font-mono text-xs text-ink2">example.{course.id === 'javascript' ? 'js' : course.id}</span>
            </div>
            <pre className="overflow-x-auto bg-ink px-4 py-4 font-mono text-sm leading-6 text-slate-200">
              <code>{lesson.snippet}</code>
            </pre>
          </div>

          {!user && (
            <p className="mt-6 rounded-md border border-dashed border-surface-border px-4 py-3 font-mono text-xs text-ink2">
              tip: <Link to="/login" className="text-amber hover:underline">sign in</Link> to save your lesson progress.
            </p>
          )}

          <div className="mt-8 flex items-center justify-between border-t border-surface-border pt-6">
            <button
              disabled={lessonIndex === 0}
              onClick={() => setActiveLessonId(course.lessons[lessonIndex - 1].id)}
              className="font-mono text-sm text-ink2 hover:text-slate-200 disabled:opacity-30"
            >
              ← previous
            </button>
            <Button onClick={handleComplete}>
              {isLast ? 'Finish & take quiz' : 'Mark complete & continue'}
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
