import React from 'react'

const shopLinks = ['New Arrivals', 'Best Sellers', 'Deals & Offers', 'Gift Cards']
const companyLinks = ['About Us', 'Careers', 'Blog', 'Press']
const helpLinks = ['Help Center', 'Shipping Info', 'Returns', 'Contact Us']

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-about">
            <div className="logo">
              <span className="logo-icon">🛍️</span>
              ShopVerse
            </div>
            <p>
              Your one-stop destination for quality products at great prices.
              We're committed to providing the best shopping experience with
              premium products and outstanding customer service.
            </p>
          </div>

          <div className="footer-links">
            <h3>Shop</h3>
            <ul>
              {shopLinks.map((link) => (
                <li key={link}><a href="#">{link}</a></li>
              ))}
            </ul>
          </div>

          <div className="footer-links">
            <h3>Company</h3>
            <ul>
              {companyLinks.map((link) => (
                <li key={link}><a href="#">{link}</a></li>
              ))}
            </ul>
          </div>

          <div className="footer-links">
            <h3>Support</h3>
            <ul>
              {helpLinks.map((link) => (
                <li key={link}><a href="#">{link}</a></li>
              ))}
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© 2024 ShopVerse. All rights reserved. | Made with ❤️ for online shoppers</p>
        </div>
      </div>
    </footer>
  )
}

