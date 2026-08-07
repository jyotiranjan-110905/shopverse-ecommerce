import React from 'react'

export default function Categories({ categories, activeCategory, onSelect }) {
  return (
    <section className="container categories">
      <h2 className="section-title">Shop by Category</h2>
      <p className="section-subtitle">Find exactly what you're looking for</p>
      <div className="category-tabs">
        {categories.map((cat) => (
          <button
            key={cat}
            className={`category-tab ${activeCategory === cat ? 'active' : ''}`}
            onClick={() => onSelect(cat)}
          >
            {cat}
          </button>
        ))}
      </div>
    </section>
  )
}

