// src/pages/index.tsx

import dynamic from 'next/dynamic'
import { useState } from 'react'
import { menuItems } from '../data/menuItems'

// Client-only wrappers to avoid "undefined" at build time:
const HeroVideo = dynamic(
  () => import('../components/HeroVideo'),
  { ssr: false }
)
const CategoryFilter = dynamic(
  () => import('../components/CategoryFilter'),
  { ssr: false }
)
const MenuSection = dynamic(
  () => import('../components/MenuSection/MenuSection'),
  { ssr: false }
)
const CartDrawer = dynamic(
  () => import('../components/CartDrawer'),
  { ssr: false }
)
const FloatingActions = dynamic(
  () => import('../components/FloatingActions'),
  { ssr: false }
)

export default function Home() {
  const categories = [
    'All',
    'Grilled Burgers',
    'Beef Burgers',
    'Crispy Burgers',
    'Wraps',
    'Loaded Fries',
    'Shakes',
    'Sides',
    'Add-Ons',
    'Cartel Deals',
    'Theme Days',
  ]

  const [selectedCategory, setSelectedCategory] = useState('All')
  const [searchQuery, setSearchQuery] = useState('')
  const [cartItem, setCartItem] = useState<any>(null)
  const [isCartOpen, setIsCartOpen] = useState(false)

  const filteredItems = menuItems
    .filter(
      (item) =>
        selectedCategory === 'All' || item.category === selectedCategory
    )
    .filter(
      (item) =>
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description.toLowerCase().includes(searchQuery.toLowerCase())
    )

  return (
    <div className="min-h-screen bg-white text-black relative">
      <HeroVideo src="/videos/hero.mp4" />

      <CategoryFilter
        categories={categories}
        selected={selectedCategory}
        onSelect={setSelectedCategory}
        searchQuery={searchQuery}
        onSearch={setSearchQuery}
      />

      <MenuSection
        title={selectedCategory}
        items={filteredItems}
        onItemClick={(item) => {
          setCartItem(item)
          setIsCartOpen(true)
        }}
      />

      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        item={cartItem}
      />

      <FloatingActions />
    </div>
  )
}
