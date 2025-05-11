// src/pages/index.tsx

import CartDrawer from '../components/CartDrawer'

export default function Home() {
  return (
    <div className="p-8">
      <CartDrawer
        isOpen={true}
        onClose={() => {}}
        item={{
          name: 'Test Item',
          price: 100,
          description: 'Test description',
          category: 'Test',
        }}
      />
    </div>
  )
}
