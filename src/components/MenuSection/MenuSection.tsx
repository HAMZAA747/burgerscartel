// src/components/MenuSection/MenuSection.tsx
import React from 'react';
import { MenuItem } from '../../data/menuItems';
import MenuCard from './MenuCard';

interface MenuSectionProps {
  title: string;
  items: MenuItem[];
  onItemClick: (item: MenuItem) => void;
}

export default function MenuSection({
  title,
  items,
  onItemClick,
}: MenuSectionProps) {
  if (items.length === 0) return null;
  return (
    <section className="py-12 px-4">
      <h2 className="text-3xl font-heading mb-6">{title}</h2>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {items.map(item => (
          <MenuCard
            key={item.name}
            item={item}
            onClick={() => onItemClick(item)}
          />
        ))}
      </div>
    </section>
  );
}
