import React, { useEffect, useRef } from 'react';

const reviews = [
  {
    text: "Great place for frozen yogurt & they have the best bubble tea! Very convenient due to the fact it's located in one of the busiest areas on Rutgers campus surrounded by some of the more popular restaurants. I'm here almost religiously for their bubble tea alone. They have a nice little seating area in the back as well. Took me a while to even notice it, but the option is there. Definitely a place you should go check out after a night out with friends or even alone.",
    name: "David White Jr"
  },
  {
    text: "I come here for their bubble tea! I honestly love love love their bubble tea the spot is such a cute little spot to bring anyone here truly. They are very welcoming! I mean I might just be picky about their froyo but it’s not bad I’ve just had a lot better. But COME HERE FOR THE BUBBLE TEA! It’s soooo good!! Taro is my go to for the most part In the summers I’m always getting something fruity & a lot of their flavors are AMAZING!!! I’ve been coming here for over 10 years & still everytime I’m back in NJ I always want their bubble tea!! ",
    name: "YayIts K"
  },
  {
    text: "I stumbled upon this hidden gem, and I'm absolutely thrilled with the experience! The fusion of bubble tea and coffee offerings here is a match made in heaven. From the moment I walked in, the inviting aroma of freshly brewed coffee greeted me. Their bubble tea selection is extensive, offering a delightful range of flavors that cater to both traditionalists and adventurous taste buds. The tapioca pearls were perfectly chewy, providing that satisfying texture I always look for in a good bubble tea.",
    name: "Iliasse Dardoure"
  },
  {
    text: "Truly Yogurt is by far the best Frozen Yogurt place around. The customer service is always phenomenal and caring. I have gone to truly on multiple occasions and will continue to do so in the future. My favorite is the Birthday Cake smoothie by far!",
    name: "Marc Berran"
  },
  {
    text: "I had the birthday cake milkshake it was so bussin. Everything is so fresh and i love it. Also they let me make a tiktok taht got so many views!! (20mil). They are all so chill and my name is BigZ and since I usually get about 30 Pounds worth of yogurt, it cost a lot but its worth it.",
    name: "Zain Saeed"
  },
  {
    text: "This is some of the best frozen yogurt I have gotten in the New Brunswick area. The manager changes flavors every now and then so you can enjoy the selection for a while, but will still have other options from time to time. The toppings are always fresh and the music is great. Always a pleasant experience.",
    name: "Pamela Gomez"
  }
];

const Reviews = () => {
  const scrollRef = useRef(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    let animationFrame;

    const scroll = () => {
      if (scrollContainer && scrollContainer.scrollLeft !== scrollContainer.scrollWidth / 2) {
        scrollContainer.scrollLeft += 1.5;
        if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth / 2) {
          scrollContainer.scrollLeft = 0;
        }
      }
      animationFrame = requestAnimationFrame(scroll);
    };

    animationFrame = requestAnimationFrame(scroll);
    return () => cancelAnimationFrame(animationFrame);
  }, []);

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
          style={{ scrollBehavior: 'smooth', WebkitOverflowScrolling: 'touch' }}
        >
          {[...reviews, ...reviews].map((review, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-80 sm:w-96 bg-white rounded-lg shadow-md p-6 text-center text-wrap"
            >
              <div className="text-6xl text-amber-400 mb-2">“</div>
              <p className="text-base text-gray-700 italic mb-2 leading-relaxed px-1">
                {review.text}
              </p>
              <div className="text-6xl text-amber-400 mb-4 mt-6">”</div>
              <p className="text-md font-bold text-gray-900">{review.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
