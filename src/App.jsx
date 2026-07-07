import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import Home from './pages/Home.jsx'
import Courses from './pages/Courses.jsx'
import Lessons from './pages/Lessons.jsx'
import Quiz from './pages/Quiz.jsx'
import Login from './pages/Login.jsx'
import Dashboard from './pages/Dashboard.jsx'

export default function App() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/lessons/:courseId" element={<Lessons />} />
          <Route path="/quiz/:courseId" element={<Quiz />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route
            path="*"
            element={
              <div className="mx-auto max-w-2xl px-5 py-24 text-center">
                <p className="font-mono text-sm text-amber">404</p>
                <h1 className="mt-2 font-display text-3xl text-white">Page not found</h1>
                <p className="mt-2 text-ink2">That route doesn't exist yet.</p>
              </div>
            }
          />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}
