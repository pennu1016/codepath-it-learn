import React from 'react'
import { Link } from 'react-router-dom'
import CodeEditorHero from '../components/CodeEditorHero.jsx'
import CourseCard from '../components/CourseCard.jsx'
import Button from '../components/Button.jsx'
import { courses } from '../data/courses.js'

const stats = [
  { label: 'lessons', value: '18' },
  { label: 'languages', value: '6' },
  { label: 'quizzes', value: '6' },
]

export default function Home() {
  return (
    <div>
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-grid bg-[length:32px_32px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,black,transparent)]" />
        <div className="relative mx-auto flex max-w-7xl flex-col items-center gap-12 px-5 pb-20 pt-16 md:flex-row md:pt-24">
          <div className="max-w-lg">
            <span className="inline-flex items-center gap-2 rounded-full border border-surface-border bg-surface px-3 py-1 font-mono text-xs text-mint">
              ● now compiling: 6 new lessons
            </span>
            <h1 className="mt-5 font-display text-4xl font-bold leading-tight text-white md:text-5xl">
              Learn to build things,
              <span className="text-amber"> not just read about them.</span>
            </h1>
            <p className="mt-4 text-base leading-relaxed text-ink2">
              codepath teaches HTML, CSS, JavaScript, Python, SQL, and React through
              short lessons, real code, and quizzes that check your understanding —
              no fluff, no fifty-tab syllabus.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Button as={Link} to="/courses">
                Browse courses
              </Button>
              <Button as={Link} to="/login" variant="secondary">
                Create free account
              </Button>
            </div>

            <div className="mt-10 flex gap-8 border-t border-surface-border pt-6">
              {stats.map((s) => (
                <div key={s.label}>
                  <div className="font-display text-2xl font-semibold text-white">{s.value}</div>
                  <div className="font-mono text-xs text-ink2">{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex w-full justify-center md:justify-end">
            <CodeEditorHero />
          </div>
        </div>
      </section>

      <section className="border-t border-surface-border bg-ink-light py-16">
        <div className="mx-auto max-w-7xl px-5">
          <div className="mb-8 flex items-end justify-between">
            <div>
              <p className="font-mono text-xs uppercase tracking-wide text-amber">// popular courses</p>
              <h2 className="mt-2 font-display text-2xl font-semibold text-white md:text-3xl">
                Pick a language, start today
              </h2>
            </div>
            <Link to="/courses" className="hidden font-mono text-sm text-mint hover:underline md:block">
              view all →
            </Link>
          </div>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {courses.slice(0, 3).map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-7xl px-5">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {[
              {
                title: 'Read',
                desc: 'Bite-sized lessons explain one idea at a time, with real code you can study line by line.',
                mark: '01',
              },
              {
                title: 'Run',
                desc: 'See exactly what each snippet does before you touch your own editor.',
                mark: '02',
              },
              {
                title: 'Recall',
                desc: 'Short quizzes after every course lock in what you learned — no re-reading required.',
                mark: '03',
              },
            ].map((step) => (
              <div key={step.mark} className="rounded-lg border border-surface-border bg-surface p-6">
                <span className="font-mono text-xs text-amber">{step.mark}</span>
                <h3 className="mt-3 font-display text-lg font-semibold text-white">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink2">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
