# codepath — IT learning platform

A W3Schools-style learning platform built with React, Vite, React Router, and Tailwind CSS.

## Features

- **Home** — hero with an animated multi-language code editor, featured courses, how-it-works section
- **Courses** — searchable, filterable grid of all courses
- **Lessons** — per-course lesson viewer with sidebar navigation, code snippets, and progress tracking
- **Quiz** — scored multiple-choice quiz per course with instant feedback
- **Login** — mock sign in / sign up (stored in `localStorage`, no backend required)
- **Dashboard** — overall progress, per-course completion, and quiz scores (protected route)

## Folder structure

```
src/
  components/     Reusable UI: Navbar, Footer, Button, CourseCard, Sidebar,
                   QuizQuestion, CodeEditorHero
  pages/          Route-level pages: Home, Courses, Lessons, Quiz, Login, Dashboard
  context/        AuthContext — mock auth + progress tracking (localStorage-backed)
  data/           courses.js — course, lesson, and quiz content
  App.jsx         Route definitions
  main.jsx        App entry point, providers
  index.css       Tailwind directives + global styles
```

## Getting started

```bash
npm install
npm run dev
```

Then open the printed local URL (typically http://localhost:5173).

## Build for production

```bash
npm run build
npm run preview
```

## Notes

- Auth is a mock implementation for demo purposes — any email/password combination works, and data is stored only in your browser's `localStorage`.
- To add a new course, add an entry to `src/data/courses.js` with `lessons` and a `quiz` array; it will automatically appear on the Courses page and become navigable.
