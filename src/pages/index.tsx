// src/pages/index.tsx

import React, { useState } from 'react';
import HeroVideo from '../components/HeroVideo';
import CategoryFilter from '../components/CategoryFilter';
import MenuSection from '../components/MenuSection/MenuSection';
import CartDrawer from '../components/CartDrawer';
import FloatingActions from '../components/FloatingActions';
import { menuItems } from '../data/menuItems';

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
  ];

  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [cartItem, setCartItem] = useState<any>(null);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const filteredItems = menuItems
    .filter(
      (item) =>
        selectedCategory === 'All' || item.category === selectedCategory
    )
    .filter(
      (item) =>
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description.toLowerCase().includes(searchQuery.toLowerCase())
    );

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
          setCartItem(item);
          setIsCartOpen(true);
        }}
      />

      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        item={cartItem}
      />

      <FloatingActions />
    </div>
  );
}
