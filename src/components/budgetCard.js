import React from 'react'

export default function budgetCard({chart, category, percentage}) {
  return (
    <div>
      <div className="budgetCard">
        <div className="labelBudget">
          <p>{category}<span>{percentage}</span></p>
          {chart}
        </div>
        <p>halo halo gaaaass</p>
      </div>
    </div>
  )
}
