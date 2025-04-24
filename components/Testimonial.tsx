'use client'
import { StarIcon } from 'lucide-react'
import React from 'react'

const Testimonial = () => {
  return (
    <section className="py-16 border-t border-gray-800 bg-transparent text-white" id="testimonials">
      <div className="container max-w-4xl mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-4xl font-bold tracking-tight">What People Say</h2>
          <p className="text-gray-400 mt-2 font-light">A few kind words from awesome users</p>
        </div>
        <div className="relative">
  {/* Red background box positioned backward and offset to the left */}
  <div className="absolute top-0 left-0 w-full h-full bg-zinc-800 rounded-xl translate-y-3 translate-x-3 z-0" />

  {/* Foreground testimonial box */}
  <div className="relative bg-zinc-900 shadow-zinc-600  shadow-sm border-none rounded-xl p-6 sm:p-8 z-10">
    <div className="flex items-center gap-1 mb-4">
      {Array(5).fill(null).map((_, i) => (
        <StarIcon key={i} className="text-yellow-400 w-4 h-4 fill-yellow-400" />
      ))}
    </div>
    <p className="text-sm sm:text-md  text-gray-300">
      A beautifully designed website with a clean layout, clear data visuals, and seamless video integration.
      Both intuitive and visually appealing, truly a pleasure to explore.
    </p>
    <div className="mt-6">
      <p className="text-white font-semibold text-sm">Zain Ali Arain</p>
      <p className="text-gray-500 text-xs">NASA Space App Challenge Hackathon Team Leader</p>
    </div>
  </div>
</div>

      </div>
    </section>
  )
}

export default Testimonial
