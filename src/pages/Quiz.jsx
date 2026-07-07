import React, { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import QuizQuestion from '../components/QuizQuestion.jsx'
import Button from '../components/Button.jsx'
import { getCourse } from '../data/courses.js'
import { useAuth } from '../context/AuthContext.jsx'

export default function Quiz() {
  const { courseId } = useParams()
  const course = getCourse(courseId)
  const { user, recordQuizScore } = useAuth()

  const [answers, setAnswers] = useState({})
  const [submitted, setSubmitted] = useState(false)

  if (!course) {
    return (
      <div className="mx-auto max-w-3xl px-5 py-20 text-center">
        <h1 className="font-display text-2xl text-white">Course not found</h1>
        <Button as={Link} to="/courses" className="mt-6">Back to courses</Button>
      </div>
    )
  }

  const total = course.quiz.length
  const score = course.quiz.reduce(
    (acc, q, i) => acc + (answers[i] === q.answer ? 1 : 0),
    0,
  )
  const allAnswered = Object.keys(answers).length === total

  function handleSubmit() {
    setSubmitted(true)
    if (user) recordQuizScore(course.id, score, total)
  }

  function handleRetry() {
    setAnswers({})
    setSubmitted(false)
  }

  return (
    <div className="mx-auto max-w-3xl px-5 py-14" id="quiz">
      <div className="mb-6 flex items-center gap-2 font-mono text-xs text-ink2">
        <Link to={`/lessons/${course.id}`} className="hover:text-amber">{course.title.toLowerCase()}</Link>
        <span>/</span>
        <span className="text-amber">quiz</span>
      </div>

      <h1 className="font-display text-3xl font-semibold text-white">
        {course.title} quiz
      </h1>
      <p className="mt-2 text-sm text-ink2">
        {total} questions · check your understanding of what you just learned.
      </p>

      {submitted && (
        <div
          className={`mt-6 rounded-lg border p-5 ${
            score === total
              ? 'border-mint/40 bg-mint/10'
              : score >= total / 2
              ? 'border-amber/40 bg-amber/10'
              : 'border-rose/40 bg-rose/10'
          }`}
        >
          <p className="font-display text-xl font-semibold text-white">
            You scored {score}/{total}
          </p>
          <p className="mt-1 text-sm text-ink2">
            {score === total
              ? 'Perfect score — nicely done.'
              : score >= total / 2
              ? 'Solid work. Review the highlighted answers below.'
              : 'Worth a re-read of the lesson before trying again.'}
          </p>
        </div>
      )}

      <div className="mt-6 flex flex-col gap-4">
        {course.quiz.map((q, i) => (
          <QuizQuestion
            key={i}
            question={q}
            index={i}
            selected={answers[i]}
            revealed={submitted}
            onSelect={(choice) =>
              !submitted && setAnswers((prev) => ({ ...prev, [i]: choice }))
            }
          />
        ))}
      </div>

      <div className="mt-8 flex flex-wrap items-center gap-3">
        {!submitted ? (
          <Button onClick={handleSubmit} disabled={!allAnswered} className="disabled:opacity-40">
            Submit answers
          </Button>
        ) : (
          <Button onClick={handleRetry} variant="secondary">
            Try again
          </Button>
        )}
        <Button as={Link} to="/courses" variant="ghost">
          Back to courses
        </Button>
        {!user && (
          <span className="font-mono text-xs text-ink2">
            <Link to="/login" className="text-amber hover:underline">sign in</Link> to save this score
          </span>
        )}
      </div>
    </div>
  )
}
