import React, { useMemo, useState } from 'react'
import ProductCard from './ProductCard'
import { products } from '../data/products'

export default function ProductGrid({ category, searchQuery, onQuickView }) {
  const [toast, setToast] = useState('')

  const showToast = (message) => {
    setToast(message)
    setTimeout(() => setToast(''), 2500)
  }

  const filtered = useMemo(() => {
    let result = category === 'All' ? products : products.filter((p) => p.category === category)
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase()
      result = result.filter(
        (p) =>
          p.name.toLowerCase().includes(q) ||
          p.category.toLowerCase().includes(q) ||
          p.description.toLowerCase().includes(q)
      )
    }
    return result
  }, [category, searchQuery])

  return (
    <section className="products-section" id="products">
      <div className="container">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', flexWrap: 'wrap', gap: 8 }}>
          <div>
            <h2 className="section-title">{category === 'All' ? 'Featured Products' : `${category} Products`}</h2>
            <p className="section-subtitle" style={{ marginBottom: 0 }}>
              {filtered.length} product{filtered.length !== 1 ? 's' : ''} available
            </p>
          </div>
        </div>

        {filtered.length > 0 ? (
          <div className="product-grid" style={{ marginTop: 28 }}>
            {filtered.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onQuickView={onQuickView}
                onToast={showToast}
              />
            ))}
          </div>
        ) : (
          <div className="no-results">
            <div style={{ fontSize: 48, marginBottom: 16 }}>🔍</div>
            <h3>No products found</h3>
            <p>Try adjusting your search or selecting a different category.</p>
          </div>
        )}
      </div>

      <div className={`toast ${toast ? 'show' : ''}`}>
        <span>✓</span> {toast}
      </div>
    </section>
  )
}

