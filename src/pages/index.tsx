// src/pages/index.tsx

import HeroVideo from '../components/HeroVideo'

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-black">
      <HeroVideo src="/videos/hero.mp4" />
    </div>
  )
}
