'use client';

import { useEffect, useState } from 'react';
import { ArrowUp } from 'lucide-react'; 

const BackToTopButton = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const heroSection = document.getElementById('hero');

    const handleScroll = () => {
      if (!heroSection) return;
      const heroBottom = heroSection.getBoundingClientRect().bottom;
      setShow(heroBottom < 0); 
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {show && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-10 right-12 z-50 p-3 rounded-2xl bg-gray-200 text-black shadow-lg hover:bg-gray-300 active:bg-gray-400 transition duration-300"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      )}
    </>
  );
};

export default BackToTopButton;
