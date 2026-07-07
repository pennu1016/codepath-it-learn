import React, { createContext, useContext, useEffect, useState } from 'react'

const AuthContext = createContext(null)

const STORAGE_KEY = 'codepath.user'
const PROGRESS_KEY = 'codepath.progress'

export function AuthProvider({ children }) {
  const [user, setUser] = useState(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY)
      return raw ? JSON.parse(raw) : null
    } catch {
      return null
    }
  })

  const [progress, setProgress] = useState(() => {
    try {
      const raw = localStorage.getItem(PROGRESS_KEY)
      return raw ? JSON.parse(raw) : {}
    } catch {
      return {}
    }
  })

  useEffect(() => {
    if (user) localStorage.setItem(STORAGE_KEY, JSON.stringify(user))
    else localStorage.removeItem(STORAGE_KEY)
  }, [user])

  useEffect(() => {
    localStorage.setItem(PROGRESS_KEY, JSON.stringify(progress))
  }, [progress])

  function login(name, email) {
    setUser({ name: name || email.split('@')[0], email })
  }

  function logout() {
    setUser(null)
  }

  function markLessonComplete(courseId, lessonId) {
    setProgress((prev) => {
      const courseSet = new Set(prev[courseId] || [])
      courseSet.add(lessonId)
      return { ...prev, [courseId]: Array.from(courseSet) }
    })
  }

  function recordQuizScore(courseId, score, total) {
    setProgress((prev) => ({
      ...prev,
      quizzes: {
        ...(prev.quizzes || {}),
        [courseId]: { score, total, date: new Date().toISOString() },
      },
    }))
  }

  return (
    <AuthContext.Provider
      value={{ user, login, logout, progress, markLessonComplete, recordQuizScore }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const ctx = useContext(AuthContext)
  if (!ctx) throw new Error('useAuth must be used within AuthProvider')
  return ctx
}
