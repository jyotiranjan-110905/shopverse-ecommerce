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

export default function ProductModal({ product, onClose }) {
  const { addToCart } = useCart()

  const handleAdd = () => {
    addToCart(product)
    onClose()
  }

  const discount = product.oldPrice
    ? Math.round(((product.oldPrice - product.price) / product.oldPrice) * 100)
    : 0

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="product-modal" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose} aria-label="Close">✕</button>
        <div className="modal-img">
          <img src={product.image} alt={product.name} />
        </div>
        <div className="modal-body">
          <span className="product-category">{product.category}</span>
          <h2>{product.name}</h2>
          <div className="product-rating">
            <span><Stars rating={product.rating} /></span>
            <span>{product.rating} ({product.reviews} reviews)</span>
          </div>
          <p className="modal-description">{product.description}</p>
          <div className="modal-price">
            <span className="price">{formatINR(product.price)}</span>
            {product.oldPrice && (
              <span className="old-price">{formatINR(product.oldPrice)}</span>
            )}
            {discount > 0 && (
              <span className="badge sale" style={{ position: 'static' }}>Save {discount}%</span>
            )}
          </div>
          <div className="stock-info">
            <span>✅</span> In Stock ({product.stock} available)
          </div>
          <button className="modal-add-btn" onClick={handleAdd}>
            Add to Cart
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
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

