import React, { useEffect, useState } from 'react';
import { ArrowUpIcon } from '@heroicons/react/24/outline';

const GoUp = () => {
  const [showTopBtn, setShowTopBtn] = useState(false);
  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 100) {
        setShowTopBtn(true);
      } else {
        setShowTopBtn(false);
      }
    });
  }, []);
  const goToTop = () => {
    // window.scrollTo({
    //   top: 0,
    //   behavior: 'smooth',
    // });
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  };
  return (
    <button
      onClick={goToTop}
      className={`fixed ${
        showTopBtn ? 'right-4' : '-right-20'
      } bottom-4 bg-yellow-500 text-black z-10 rounded-lg flex justify-center items-center w-14 h-14 transition-all`}
    >
      <ArrowUpIcon className="w-6" />
    </button>
  );
};

export default GoUp;
