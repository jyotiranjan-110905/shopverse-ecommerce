import React from 'react'
import { useCart } from '../context/CartContext'
import { formatINR } from '../utils/format'

function Stars({ rating }) {
  const fullStars = Math.floor(rating)
  const hasHalf = rating - fullStars >= 0.5
  const emptyStars = hasHalf ? 4 - fullStars : 5 - fullStars
  return (
    <span aria-label={`${rating} out of 5 stars`}>
      {'★'.repeat(fullStars)}
      {hasHalf && '★'}
      {emptyStars > 0 && '☆'.repeat(emptyStars)}
    </span>
  )
}

export default function ProductCard({ product, onQuickView, onToast }) {
  const { addToCart } = useCart()

  const badgeClass = product.badge
    ? product.badge.toLowerCase().replace(/\s+/g, '')
    : ''

  const handleAdd = (e) => {
    e.stopPropagation()
    addToCart(product)
    onToast && onToast(`${product.name} added to cart!`)
  }

  return (
    <div className="product-card">
      <div className="product-img-wrap" onClick={() => onQuickView(product)}>
        {product.badge && (
          <span className={`badge ${badgeClass}`}>{product.badge}</span>
        )}
        <img src={product.image} alt={product.name} loading="lazy" />
        <button className="quick-view-btn">Quick View</button>
      </div>
      <div className="product-info">
        <span className="product-category">{product.category}</span>
        <h3 className="product-name">{product.name}</h3>
        <div className="product-rating">
          <span><Stars rating={product.rating} /></span>
          <span>{product.rating} ({product.reviews})</span>
        </div>
        <div className="product-price-row">
          <div>
            <span className="price">{formatINR(product.price)}</span>
            {product.oldPrice && (
              <span className="old-price">{formatINR(product.oldPrice)}</span>
            )}
          </div>
          <button className="add-btn" aria-label="Add to cart" onClick={handleAdd}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="8" cy="21" r="1" />
              <circle cx="19" cy="21" r="1" />
              <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  )
}

