// src/pages/index.tsx

import CategoryFilter from '../components/CategoryFilter'

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-black p-8">
      <CategoryFilter
        categories={['All', 'Grilled Burgers', 'Beef Burgers']}
        selected="All"
        onSelect={() => {}}
        searchQuery=""
        onSearch={() => {}}
      />
    </div>
  )
}
