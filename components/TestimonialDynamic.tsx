'use client'

import { StarIcon } from 'lucide-react'
import { Button } from "@/components/ui/button"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel"

import React, { useEffect, useState } from 'react'
import type { Testimonial as TestimonialType } from '@/types/sanity'

// Client component that receives testimonials as props
export default function TestimonialDynamic({ testimonials }: { testimonials: TestimonialType[] }) {
  const [api, setApi] = useState<CarouselApi | null>(null)
  const [current, setCurrent] = useState(0)
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!api) return

    setCount(api.scrollSnapList().length)
    setCurrent(api.selectedScrollSnap())

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap())
    })
  }, [api])

  if (testimonials.length === 0) {
    return (
      <section className="py-16 border-t border-gray-800" id="testimonials">
        <div className="container max-w-4xl mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-gray-400">What People Say</h2>
            <p className="text-gray-600 dark:text-gray-400 mt-2 font-light">A few kind words from awesome users</p>
          </div>
          <p className="text-gray-500 text-center">No testimonials available yet.</p>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 border-t border-gray-800" id="testimonials">
      <div className="container max-w-4xl mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-gray-400">What People Say</h2>
          <p className="text-gray-600 dark:text-gray-400 mt-2 font-light">A few kind words from awesome users</p>
        </div>

        <Carousel setApi={setApi} className="w-full max-w-2xl mx-auto">
          <CarouselContent>
            {testimonials.map((testimonial) => (
              <CarouselItem key={testimonial._id}>
                <div className="relative">
                  <div className="absolute top-0 left-0 w-full h-full bg-zinc-200 dark:bg-zinc-800 rounded-xl translate-y-3 translate-x-3 z-0" />
                  <div className="relative bg-gray-100 dark:bg-zinc-900 shadow-zinc-600 shadow-sm border-none rounded-xl p-6 sm:p-8 z-10">
                    <div className="flex items-center gap-1 mb-4">
                      {Array(testimonial.rating || 5).fill(null).map((_, i) => (
                        <StarIcon key={i} className="text-yellow-400 w-4 h-4 fill-yellow-400" />
                      ))}
                    </div>
                    <p className="text-sm sm:text-md text-gray-900 dark:text-gray-300">{testimonial.message}</p>
                    <div className="mt-6">
                      <p className="text-gray-900 dark:text-white font-semibold text-sm">{testimonial.name}</p>
                      <p className="text-gray-600 dark:text-gray-400 text-xs">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>

          <div className="flex justify-center gap-4 mt-6">
            <CarouselPrevious className="static translate-y-0">
              <Button variant="outline">Previous</Button>
            </CarouselPrevious>
            <CarouselNext className="static translate-y-0">
              <Button variant="outline">Next</Button>
            </CarouselNext>
          </div>

          {/* Custom Dots */}
          <div className="flex justify-center mt-4 gap-2">
            {Array.from({ length: count }).map((_, i) => (
              <div
                key={i}
                className={`w-3 h-3 rounded-full ${
                  i === current ? "bg-gray-900 dark:bg-white" : "bg-gray-400 dark:bg-gray-600"
                }`}
              />
            ))}
          </div>
        </Carousel>
      </div>
    </section>
  )
}
