import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

// News updates array (easy to add/remove/edit posts)
const updates = [
  {
    title: "Try Our New Biscoff Smoothie!",
    description: "Perfect Treat for a Summer Day! It's Truly Delicious!",
    image: require('../images/ty_biscoff_smoothie.jpeg'),
    bgSize: 'bg-contain bg-no-repeat'
  },
  {
    title: "Check Out Our Backyard Seating!",
    description: "Just walk through the green door in the back to enjoy our new outdoor seating area. Perfect for a summer day!",
    image: require('../images/TY_Backyard.jpeg'),
    bgSize: 'bg-cover'
  }
];


const Updates = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % updates.length);
  };

  const prev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + updates.length) % updates.length);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      next();
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  const currentUpdate = updates[currentIndex];

  return (
    <section id="updates" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Latest News</h2>
          <div className="w-24 h-1 bg-amber-400 mx-auto mb-4"></div>
          <p className="text-lg text-gray-600">Stay updated with our newest drinks, flavors, and announcements</p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Background Image */}
          <div
            className={`h-72 md:h-96 bg-center rounded-t-lg ${currentUpdate.bgSize}`}
            style={{ backgroundImage: `url(${currentUpdate.image})` }}
          ></div>

          {/* Text Card */}
          <div className="bg-sky-100 text-gray-800 p-6 rounded-b-lg shadow-md text-center">
            <h3 className="text-2xl font-bold mb-2">{currentUpdate.title}</h3>
            <p className="text-md leading-relaxed">{currentUpdate.description}</p>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prev}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 p-2 rounded-full bg-amber-400 text-white hover:bg-orange-500 transition-colors"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={next}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 p-2 rounded-full bg-amber-400 text-white hover:bg-orange-500 transition-colors"
          >
            <ChevronRight size={24} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Updates;
