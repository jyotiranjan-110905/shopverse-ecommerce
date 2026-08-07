import React from 'react'

const features = [
  {
    icon: '🚚',
    title: 'Free Shipping',
    desc: 'Free shipping on all orders over ₹2,000. Delivered to your door in 2-4 days.'
  },
  {
    icon: '🔒',
    title: 'Secure Payment',
    desc: '256-bit SSL encryption. Shop with confidence using any payment method.'
  },
  {
    icon: '↩️',
    title: 'Easy Returns',
    desc: 'Changed your mind? Enjoy hassle-free returns within 30 days of purchase.'
  },
  {
    icon: '🛡️',
    title: 'Warranty',
    desc: 'All products come with a minimum 1-year manufacturer warranty.'
  }
]

export default function Features() {
  return (
    <section className="features" id="features">
      <div className="container">
        <div className="features-grid">
          {features.map((f) => (
            <div className="feature-card" key={f.title}>
              <div className="feature-icon">{f.icon}</div>
              <h3>{f.title}</h3>
              <p>{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

