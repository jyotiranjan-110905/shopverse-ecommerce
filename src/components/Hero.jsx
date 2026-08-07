import React from 'react'

export default function Hero() {
  const scrollToProducts = () => {
    document.getElementById('products').scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="hero">
      <div className="container hero-inner">
        <div>
          <span className="hero-badge">✨ Season Sale - Up to 40% Off</span>
          <h1>Shop the Future of <span>Everyday Style</span></h1>
          <p>
            Discover thousands of premium products at unbeatable prices.
            Fast shipping, easy returns, and secure checkout — all in one place.
          </p>
          <div className="hero-buttons">
            <button className="btn btn-primary" onClick={scrollToProducts}>
              Shop Now →
            </button>
            <a href="#features" className="btn btn-outline">Explore Deals</a>
          </div>
          <div className="hero-stats">
            <div>
              <h3>50K+</h3>
              <span>Happy Customers</span>
            </div>
            <div>
              <h3>4.9★</h3>
              <span>Average Rating</span>
            </div>
            <div>
              <h3>100%</h3>
              <span>Secure Payments</span>
            </div>
          </div>
        </div>

        <div className="hero-visual">
          <div className="hero-card">
            <img
              src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=600&q=80"
              alt="Featured product"
            />
          </div>
          <div className="floating-badge fb-1">
            <span className="dot">🎧</span>
            <div>
              <strong>Hi-Fi Sound</strong>
              <br />
              <small>Best seller</small>
            </div>
          </div>
          <div className="floating-badge fb-2">
            <span className="dot">🚚</span>
            <div>
              <strong>Free Shipping</strong>
              <br />
              <small>On orders ₹2,000+</small>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

