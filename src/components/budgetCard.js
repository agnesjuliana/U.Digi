import React from 'react'

export default function budgetCard({ chart, category, percentage, sisaBudget, pengeluaran, totalBudget }) {
  return (
    <div>
      <div className="budgetCard">
        <div className="labelBudget">
          <p>{category}<span>{percentage}</span></p>
          {chart}
        </div>
        <div className="detailBudget">
          <div className="rowBudget">
            <span className="sisa">Sisa budget</span>
            <span className="detailTextBudget">Rp{sisaBudget}</span>
          </div>
          <div className="rowBudget">
            <span className="detailTextBudget">Pengeluaran</span>
            <span className="detailTextBudget">Rp{pengeluaran}</span>
          </div>
          <div className="rowBudget">
            <span className="detailTextBudget">Total budget</span>
            <span className="detailTextBudget">Rp{totalBudget}</span>
          </div>
        </div>
      </div>
    </div>
  )
}
