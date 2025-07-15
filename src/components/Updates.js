import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

// News updates array (easy to add/remove/edit posts)
const updates = [
  {
    title: "Check Out Our Backyard Seating!",
    description: "Just walk through the green door in the back to enjoy our new outdoor seating area. Perfect for a summer day!",
    image: require('../images/TY_Backyard.jpeg')
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

  return (
    <section id="updates" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Latest News</h2>
          <div className="w-24 h-1 bg-amber-400 mx-auto mb-4"></div>
          <p className="text-lg text-gray-600">Stay updated with our newest flavors and announcements</p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div
            className="h-96 bg-contain bg-center rounded-lg shadow-lg flex items-center justify-center text-center text-white px-6"
            style={{
              backgroundImage: `url(${updates[currentIndex].image})`
            }}
          >
            <div className="bg-black bg-opacity-40 p-6 rounded-lg">
              <h3 className="text-2xl font-bold mb-2">{updates[currentIndex].title}</h3>
              <p className="text-md leading-relaxed">{updates[currentIndex].description}</p>
            </div>
          </div>

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
