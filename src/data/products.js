export const products = [
  // Electronics
  {
    id: 1,
    name: 'Wireless Noise-Cancelling Headphones',
    category: 'Electronics',
    price: 24999,
    oldPrice: 32999,
    rating: 4.8,
    reviews: 1243,
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=600&q=80',
    description: 'Premium over-ear headphones with active noise cancellation, 30-hour battery life, and studio-quality sound.',
    badge: 'Hot',
    stock: 25
  },
  {
    id: 2,
    name: 'Smart Watch Series X',
    category: 'Electronics',
    price: 19999,
    oldPrice: 24999,
    rating: 4.6,
    reviews: 856,
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=600&q=80',
    description: 'Track your fitness, heart rate, sleep and notifications with this sleek smartwatch featuring a bright AMOLED display.',
    badge: 'New',
    stock: 40
  },
  {
    id: 3,
    name: '4K Ultra HD Smart TV 55"',
    category: 'Electronics',
    price: 54999,
    oldPrice: 69999,
    rating: 4.7,
    reviews: 432,
    image: 'https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?auto=format&fit=crop&w=600&q=80',
    description: 'Immersive 4K UHD display with HDR10+, built-in smart assistant, and ultra-thin bezel-less design.',
    badge: null,
    stock: 15
  },
  {
    id: 4,
    name: 'Wireless Earbuds Pro',
    category: 'Electronics',
    price: 8999,
    oldPrice: 12999,
    rating: 4.4,
    reviews: 2107,
    image: 'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?auto=format&fit=crop&w=600&q=80',
    description: 'True wireless earbuds with crystal-clear calls, wireless charging case, and immersive sound.',
    badge: 'Sale',
    stock: 60
  },
  {
    id: 5,
    name: 'DSLR Camera Bundle',
    category: 'Electronics',
    price: 89999,
    oldPrice: 109999,
    rating: 4.9,
    reviews: 318,
    image: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=600&q=80',
    description: 'Professional-grade DSLR with 24.2MP sensor, 4K video, and versatile zoom lens included.',
    badge: null,
    stock: 8
  },
  // Fashion
  {
    id: 6,
    name: 'Classic Denim Jacket',
    category: 'Fashion',
    price: 6499,
    oldPrice: 8999,
    rating: 4.5,
    reviews: 754,
    image: 'https://images.unsplash.com/photo-1576871337622-98d48d1cf531?auto=format&fit=crop&w=600&q=80',
    description: 'Timeless denim jacket with a comfortable fit, durable stitching, and versatile style.',
    badge: 'Trending',
    stock: 30
  },
  {
    id: 7,
    name: 'Leather Crossbody Bag',
    category: 'Fashion',
    price: 7999,
    oldPrice: 9999,
    rating: 4.6,
    reviews: 289,
    image: 'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&w=600&q=80',
    description: 'Elegant genuine leather crossbody bag with adjustable strap and multiple compartments.',
    badge: null,
    stock: 22
  },
  {
    id: 8,
    name: 'Premium Running Sneakers',
    category: 'Fashion',
    price: 11999,
    oldPrice: 14999,
    rating: 4.7,
    reviews: 1892,
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=600&q=80',
    description: 'Lightweight running shoes with responsive cushioning and breathable knit upper.',
    badge: 'Hot',
    stock: 45
  },
  {
    id: 9,
    name: 'Aviator Sunglasses',
    category: 'Fashion',
    price: 4599,
    oldPrice: 6999,
    rating: 4.3,
    reviews: 965,
    image: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?auto=format&fit=crop&w=600&q=80',
    description: 'Classic aviator sunglasses with polarized UV400 lenses and gold-tone frame.',
    badge: 'Sale',
    stock: 55
  },
  {
    id: 10,
    name: 'Slim Fit Chinos',
    category: 'Fashion',
    price: 3999,
    oldPrice: 5499,
    rating: 4.4,
    reviews: 1104,
    image: 'https://images.unsplash.com/photo-1473966968600-fa801b869a1a?auto=format&fit=crop&w=600&q=80',
    description: 'Modern slim-fit chinos in premium stretch cotton for all-day comfort.',
    badge: null,
    stock: 38
  },
  // Home
  {
    id: 11,
    name: 'Modern Ceramic Vase Set',
    category: 'Home',
    price: 4999,
    oldPrice: 6499,
    rating: 4.6,
    reviews: 234,
    image: 'https://images.unsplash.com/photo-1578500494198-246f612d3b3d?auto=format&fit=crop&w=600&q=80',
    description: 'Handcrafted ceramic vase set that adds a touch of modern elegance to any room.',
    badge: 'New',
    stock: 18
  },
  {
    id: 12,
    name: 'Ergonomic Desk Chair',
    category: 'Home',
    price: 19999,
    oldPrice: 27999,
    rating: 4.5,
    reviews: 567,
    image: 'https://images.unsplash.com/photo-1580480055273-228ff5388ef8?auto=format&fit=crop&w=600&q=80',
    description: 'Ergonomic office chair with lumbar support, breathable mesh, and adjustable armrests.',
    badge: null,
    stock: 12
  },
  {
    id: 13,
    name: 'Scandinavian Floor Lamp',
    category: 'Home',
    price: 8999,
    oldPrice: 11999,
    rating: 4.7,
    reviews: 148,
    image: 'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=600&q=80',
    description: 'Minimalist floor lamp with warm ambient lighting and solid wood base.',
    badge: 'Trending',
    stock: 20
  },
  {
    id: 14,
    name: 'Cotton Bedding Set',
    category: 'Home',
    price: 7499,
    oldPrice: 9999,
    rating: 4.8,
    reviews: 891,
    image: 'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&w=600&q=80',
    description: 'Luxurious 100% Egyptian cotton bedding set, soft, breathable and durable.',
    badge: 'Hot',
    stock: 28
  },
  {
    id: 15,
    name: 'Decorative Wall Art',
    category: 'Home',
    price: 2999,
    oldPrice: 3999,
    rating: 4.2,
    reviews: 312,
    image: 'https://images.unsplash.com/photo-1561838091-3c85217e0d70?auto=format&fit=crop&w=600&q=80',
    description: 'Abstract canvas wall art print that brings color and personality to your walls.',
    badge: 'Sale',
    stock: 42
  },
  // Beauty
  {
    id: 16,
    name: 'Hydrating Face Serum',
    category: 'Beauty',
    price: 3499,
    oldPrice: 4499,
    rating: 4.7,
    reviews: 2345,
    image: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=600&q=80',
    description: 'Vitamin C and hyaluronic acid serum for radiant, hydrated skin.',
    badge: 'Hot',
    stock: 50
  },
  {
    id: 17,
    name: 'Rose Gold Makeup Set',
    category: 'Beauty',
    price: 5999,
    oldPrice: 7999,
    rating: 4.5,
    reviews: 1023,
    image: 'https://images.unsplash.com/photo-1512496015851-a90fb38ba796?auto=format&fit=crop&w=600&q=80',
    description: 'Complete makeup kit with eyeshadows, lipsticks, blush and brushes.',
    badge: null,
    stock: 35
  },
  {
    id: 18,
    name: 'Aromatherapy Essential Oil Diffuser',
    category: 'Beauty',
    price: 2499,
    oldPrice: 3499,
    rating: 4.4,
    reviews: 678,
    image: 'https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?auto=format&fit=crop&w=600&q=80',
    description: 'Ultrasonic diffuser with seven LED colors and whisper-quiet operation.',
    badge: 'Sale',
    stock: 33
  },
  // Sports
  {
    id: 19,
    name: 'Yoga Mat Premium',
    category: 'Sports',
    price: 3999,
    oldPrice: 5499,
    rating: 4.6,
    reviews: 1456,
    image: 'https://images.unsplash.com/photo-1601925260368-ae2f83cf8b7f?auto=format&fit=crop&w=600&q=80',
    description: 'Non-slip, eco-friendly yoga mat with alignment lines and carrying strap.',
    badge: 'Trending',
    stock: 48
  },
  {
    id: 20,
    name: 'Adjustable Dumbbell Set',
    category: 'Sports',
    price: 14999,
    oldPrice: 18999,
    rating: 4.8,
    reviews: 743,
    image: 'https://images.unsplash.com/photo-1586401100295-7a8096fd231a?auto=format&fit=crop&w=600&q=80',
    description: 'Space-saving adjustable dumbbells from 5-52.5 lbs with quick dial system.',
    badge: null,
    stock: 14
  }
]

export const categories = [
  'All',
  'Electronics',
  'Fashion',
  'Home',
  'Beauty',
  'Sports'
]

export const getProductsByCategory = (category) =>
  category === 'All' ? products : products.filter((p) => p.category === category)

export const getProductById = (id) => products.find((p) => p.id === Number(id))

