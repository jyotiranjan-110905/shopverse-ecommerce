import React, { useState } from 'react'

export default function Newsletter() {
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (email.trim()) {
      setSubscribed(true)
      setEmail('')
      setTimeout(() => setSubscribed(false), 3000)
    }
  }

  return (
    <section className="newsletter">
      <div className="container">
        <h2>Get Exclusive Offers & Updates</h2>
        <p>Subscribe to our newsletter and get 10% off your first order!</p>
        {subscribed ? (
          <div style={{ fontWeight: 700, color: '#fdcb6e' }}>🎉 Thanks for subscribing! Check your inbox.</div>
        ) : (
          <form className="newsletter-form" onSubmit={handleSubmit}>
            <input
              type="email"
              required
              placeholder="Enter your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <button type="submit" className="btn">Subscribe</button>
          </form>
        )}
      </div>
    </section>
  )
}

