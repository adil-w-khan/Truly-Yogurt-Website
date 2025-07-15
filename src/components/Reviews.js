import { useEffect, useRef, useState } from 'react';

const reviews = [
  {
    text: "Great place for frozen yogurt & they have the best bubble tea! Very convenient due to the fact it's located in one of the busiest areas on Rutgers campus surrounded by some of the more popular restaurants. I'm here almost religiously for their bubble tea alone...",
    name: "David White Jr"
  },
  {
    text: "I come here for their bubble tea! I honestly love love love their bubble tea. The spot is such a cute little spot to bring anyone. They are very welcoming! Taro is my go-to...",
    name: "YayIts K"
  },
  {
    text: "The fusion of bubble tea and coffee here is a match made in heaven. Their selection is extensive, and the tapioca pearls were perfectly chewy...",
    name: "Iliasse Dardoure"
  },
  {
    text: "Truly Yogurt is by far the best Frozen Yogurt place around. The customer service is always phenomenal and caring. My favorite is the Birthday Cake smoothie!",
    name: "Marc Berran"
  },
  {
    text: "I had the birthday cake milkshake — it was so bussin. Everything is fresh and I love it. I made a TikTok that got 20mil views!!",
    name: "Zain Saeed"
  },
  {
    text: "This is some of the best frozen yogurt I've gotten in New Brunswick. Fresh toppings and rotating flavors. Always a pleasant experience.",
    name: "Pamela Gomez"
  }
];

const Reviews = () => {
  const scrollRef = useRef(null);
  const scrollInterval = useRef(null);
  const pauseTimeout = useRef(null);
  const [isPaused, setIsPaused] = useState(false);

  // Auto-scroll logic
  useEffect(() => {
    const scrollContainer = scrollRef.current;

    const startScroll = () => {
      if (scrollInterval.current) return;

      scrollInterval.current = setInterval(() => {
        if (scrollContainer && !isPaused) {
          scrollContainer.scrollLeft += 1.5;
          if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth / 2) {
            scrollContainer.scrollLeft = 0;
          }
        }
      }, 16);
    };

    const stopScroll = () => {
      clearInterval(scrollInterval.current);
      scrollInterval.current = null;
    };

    const pauseScrolling = () => {
      setIsPaused(true);
      stopScroll();
      clearTimeout(pauseTimeout.current);
      pauseTimeout.current = setTimeout(() => {
        setIsPaused(false);
        startScroll();
      }, 3000); // resume after 3s idle
    };

    if (scrollContainer) {
      scrollContainer.addEventListener('touchstart', pauseScrolling);
      scrollContainer.addEventListener('wheel', pauseScrolling, { passive: true });
    }

    startScroll();

    return () => {
      stopScroll();
      if (scrollContainer) {
        scrollContainer.removeEventListener('touchstart', pauseScrolling);
        scrollContainer.removeEventListener('wheel', pauseScrolling);
      }
    };
  }, [isPaused]);

  return (
    <section id="reviews" className="py-16 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Customer Reviews</h2>
          <div className="w-24 h-1 bg-amber-400 mx-auto mb-4"></div>
          <p className="text-lg text-gray-600">See what our customers are saying about us</p>
        </div>

        <div
          ref={scrollRef}
          className="flex space-x-6 overflow-x-auto scroll-smooth whitespace-nowrap pb-4 px-2"
          style={{ WebkitOverflowScrolling: 'touch', scrollBehavior: 'smooth' }}
        >
          {[...reviews, ...reviews].map((review, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-80 sm:w-96 bg-white rounded-lg shadow-md p-6 text-center text-wrap"
            >
              <div className="text-6xl text-amber-400 mb-2">“</div>
              <p className="text-base text-gray-700 italic mb-4 leading-relaxed">
                {review.text}
              </p>
              <div className="text-6xl text-amber-400 mb-4 mt-2">”</div>
              <p className="text-md font-bold text-gray-900">{review.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
