import React from 'react'
import { useCart } from '../context/CartContext'
import { formatINR } from '../utils/format'

export default function CartDrawer({ isOpen, onClose }) {
  const { cart, subtotal, increment, decrement, removeFromCart, clearCart } = useCart()

  return (
    <>
      <div
        className={`drawer-overlay ${isOpen ? 'open' : ''}`}
        onClick={onClose}
      />
      <aside className={`drawer ${isOpen ? 'open' : ''}`}>
        <div className="drawer-header">
          <h2>Shopping Cart ({cart.length})</h2>
          <button className="close-btn" onClick={onClose} aria-label="Close cart">✕</button>
        </div>

        {cart.length === 0 ? (
          <div className="drawer-empty">
            <div className="cart-empty-icon">🛒</div>
            <h3>Your cart is empty</h3>
            <p>Add some products to get started!</p>
          </div>
        ) : (
          <>
            <div className="drawer-items">
              {cart.map((item) => (
                <div className="cart-item" key={item.id}>
                  <img src={item.image} alt={item.name} />
                  <div className="cart-item-info">
                    <div className="cart-item-name">{item.name}</div>
                    <div className="cart-item-price">
                      {formatINR(item.price * item.qty)}
                    </div>
                    <div className="qty-controls">
                      <button className="qty-btn" onClick={() => decrement(item.id)}>−</button>
                      <span style={{ fontWeight: 700, minWidth: 20, textAlign: 'center' }}>{item.qty}</span>
                      <button className="qty-btn" onClick={() => increment(item.id)}>+</button>
                    </div>
                  </div>
                  <button className="remove-btn" onClick={() => removeFromCart(item.id)}>Remove</button>
                </div>
              ))}
            </div>

            <div className="drawer-footer">
              <div className="subtotal-row">
                <span>Subtotal</span>
                <span>{formatINR(subtotal)}</span>
              </div>
              <button className="checkout-btn">Proceed to Checkout</button>
            </div>
          </>
        )}
      </aside>
    </>
  )
}

