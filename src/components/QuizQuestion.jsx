import React from 'react'

export default function QuizQuestion({ question, index, selected, revealed, onSelect }) {
  return (
    <div className="rounded-lg border border-surface-border bg-surface p-5">
      <p className="mb-4 font-mono text-xs text-ink2">Question {index + 1}</p>
      <h3 className="mb-4 text-lg font-medium text-white">{question.q}</h3>
      <div className="flex flex-col gap-2">
        {question.options.map((opt, i) => {
          const isSelected = selected === i
          const isCorrect = i === question.answer
          let stateClasses = 'border-surface-border hover:border-mint/40'
          if (revealed) {
            if (isCorrect) stateClasses = 'border-mint bg-mint/10 text-mint'
            else if (isSelected && !isCorrect) stateClasses = 'border-rose bg-rose/10 text-rose'
          } else if (isSelected) {
            stateClasses = 'border-amber bg-amber/10'
          }
          return (
            <button
              key={i}
              disabled={revealed}
              onClick={() => onSelect(i)}
              className={`flex items-center gap-3 rounded-md border px-4 py-3 text-left text-sm text-slate-200 transition-colors disabled:cursor-default ${stateClasses}`}
            >
              <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-current font-mono text-[10px]">
                {String.fromCharCode(65 + i)}
              </span>
              {opt}
            </button>
          )
        })}
      </div>
    </div>
  )
}
