import React, { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Categories from './components/Categories'
import ProductGrid from './components/ProductGrid'
import Features from './components/Features'
import Newsletter from './components/Newsletter'
import Footer from './components/Footer'
import CartDrawer from './components/CartDrawer'
import ProductModal from './components/ProductModal'
import { categories } from './data/products'

export default function App() {
  const [activeCategory, setActiveCategory] = useState('All')
  const [searchQuery, setSearchQuery] = useState('')
  const [isCartOpen, setIsCartOpen] = useState(false)
  const [selectedProduct, setSelectedProduct] = useState(null)

  return (
    <div className="app">
      <Navbar
        onCartClick={() => setIsCartOpen(true)}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
      />
      <main>
        <Hero />
        <Categories
          categories={categories}
          activeCategory={activeCategory}
          onSelect={setActiveCategory}
        />
        <ProductGrid
          category={activeCategory}
          searchQuery={searchQuery}
          onQuickView={setSelectedProduct}
        />
        <Features />
        <Newsletter />
      </main>
      <Footer />
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
      />
      {selectedProduct && (
        <ProductModal
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
        />
      )}
    </div>
  )
}
