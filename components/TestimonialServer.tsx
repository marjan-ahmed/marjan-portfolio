import React from 'react';
import { getTestimonials } from '@/lib/sanity.utils';
import TestimonialDynamic from './TestimonialDynamic';

// Server Component wrapper that fetches data
async function TestimonialServer() {
  const testimonials = await getTestimonials();
  
  return <TestimonialDynamic testimonials={testimonials} />;
}

export default TestimonialServer;
