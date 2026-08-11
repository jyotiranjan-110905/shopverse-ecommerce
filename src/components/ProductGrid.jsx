import React, { useEffect, useMemo, useState } from 'react'
import ProductCard from './ProductCard'

export default function ProductGrid({ category, searchQuery, onQuickView }) {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const [toast, setToast] = useState('')

  // Fetch products from dummy API
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true)
        setError('')

        const response = await fetch('http://localhost:3000/products')

        if (!response.ok) {
          throw new Error('Failed to fetch products')
        }

        const data = await response.json()
        setProducts(data)
      } catch (err) {
        console.error('Error fetching products:', err)
        setError('Unable to load products. Please make sure the API is running.')
      } finally {
        setLoading(false)
      }
    }

    fetchProducts()
  }, [])

  const showToast = (message) => {
    setToast(message)
    setTimeout(() => setToast(''), 2500)
  }

  const filtered = useMemo(() => {
    let result =
      category === 'All'
        ? products
        : products.filter((p) => p.category === category)

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
  }, [products, category, searchQuery])

  return (
    <section className="products-section" id="products">
      <div className="container">

        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'baseline',
            flexWrap: 'wrap',
            gap: 8
          }}
        >
          <div>
            <h2 className="section-title">
              {category === 'All'
                ? 'Featured Products'
                : `${category} Products`}
            </h2>

            <p
              className="section-subtitle"
              style={{ marginBottom: 0 }}
            >
              {loading
                ? 'Loading products...'
                : `${filtered.length} product${
                    filtered.length !== 1 ? 's' : ''
                  } available`}
            </p>
          </div>
        </div>

        {/* Loading */}
        {loading && (
          <div className="no-results">
            <div style={{ fontSize: 40, marginBottom: 16 }}>⏳</div>
            <h3>Loading products...</h3>
          </div>
        )}

        {/* Error */}
        {!loading && error && (
          <div className="no-results">
            <div style={{ fontSize: 40, marginBottom: 16 }}>⚠️</div>
            <h3>Unable to load products</h3>
            <p>{error}</p>
          </div>
        )}

        {/* Products */}
        {!loading && !error && filtered.length > 0 && (
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
        )}

        {/* No results */}
        {!loading && !error && filtered.length === 0 && (
          <div className="no-results">
            <div style={{ fontSize: 48, marginBottom: 16 }}>🔍</div>
            <h3>No products found</h3>
            <p>
              Try adjusting your search or selecting a different category.
            </p>
          </div>
        )}
      </div>

      <div className={`toast ${toast ? 'show' : ''}`}>
        <span>✓</span> {toast}
      </div>
    </section>
  )
}