// src/components/MenuSection/MenuCard.tsx
import React from 'react';
import { MenuItem } from '../../data/menuItems';
import Button from '../ui/Button';

interface MenuCardProps {
  item: MenuItem;
  onClick: () => void;
}

export default function MenuCard({ item, onClick }: MenuCardProps) {
  return (
    <div
      onClick={onClick}
      className="bg-white rounded-2xl shadow p-6 flex flex-col hover:shadow-lg transition-shadow cursor-pointer"
    >
      {item.imageUrl && (
        <img
          src={item.imageUrl}
          alt={item.name}
          className="w-full h-44 object-cover mb-4 rounded"
        />
      )}
      <h3 className="text-xl font-semibold mb-2">{item.name}</h3>
      <p className="flex-1 text-sm mb-4">{item.description}</p>
      <div className="mt-auto flex items-center justify-between">
        <span className="text-lg font-bold">Rs {item.price}</span>
        <Button onClick={(e) => { e.stopPropagation(); onClick(); }}>
          Add to Cart
        </Button>
      </div>
    </div>
  );
}
