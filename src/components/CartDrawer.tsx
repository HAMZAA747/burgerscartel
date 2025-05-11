// src/components/CartDrawer.tsx
import React from 'react';
import Button from './ui/Button';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  item: any; // replace with your MenuItem type when you wire it up
}

export default function CartDrawer({ isOpen, onClose, item }: CartDrawerProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-end z-50">
      <div className="w-80 bg-white h-full p-6 flex flex-col">
        <button onClick={onClose} className="self-end mb-4 text-2xl leading-none">×</button>

        <h2 className="text-2xl font-heading mb-2">{item.name}</h2>
        <span className="text-lg font-bold mb-4">Rs {item.price}</span>

        {/* Quantity selector */}
        <div className="mb-4">
          <label className="mr-2">Quantity:</label>
          <input
            type="number"
            defaultValue={1}
            min={1}
            className="w-16 border rounded px-2 py-1"
          />
        </div>

        {/* Category-specific options will go here */}
        <div className="flex-1 overflow-y-auto mb-4">
          {/* e.g. Extra Cheese checkbox, Add-Ons, Special Instructions */}
        </div>

        {/* Price breakdown */}
        <div className="space-y-2 mb-6">
          <div className="flex justify-between">
            <span>Subtotal:</span>
            <span>Rs {/* dynamically calculated */}</span>
          </div>
          <div className="flex justify-between">
            <span>GST 17%:</span>
            <span>Rs {/* dynamically calculated */}</span>
          </div>
          <div className="flex justify-between font-bold text-primary">
            <span>Total:</span>
            <span>Rs {/* dynamically calculated */}</span>
          </div>
        </div>

        <Button>Place Order</Button>
      </div>
    </div>
  );
}
