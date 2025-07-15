import React from 'react';

import img1 from '../images/TrulyYogurts_BrownCaramel.jpg';
import img2 from '../images/TrulyYogurts_CocoMangoDeluxe.jpg';
import img3 from '../images/TrulyYogurts_FeelingTarolfic.jpg';
import img4 from '../images/TrulyYogurts_GreenAppleSlushy.jpg';
import img5 from '../images/TrulyYogurts_MangoFruitTea.jpg';
import img6 from '../images/TrulyYogurts_MangoPassionFruitSmoothie.jpg';
import img7 from '../images/TrulyYogurts_MangoYogurtWithToppings.jpg';
import img8 from '../images/TrulyYogurts_OreoBlast.jpg';
import img9 from '../images/TrulyYogurts_StrawberryMilkTea.jpg';
import img10 from '../images/TrulyYogurts_Taro.jpg';
import img11 from '../images/TrulyYogurts_TwiceIceCreamWithTopings.jpg';

const galleryImages = [
  { src: img1, name: 'Brown Caramel Milk Tea' },
  { src: img2, name: 'Coco Mango Deluxe Smoothie' },
  { src: img3, name: 'Feeling Tarolfic Smoothie' },
  { src: img4, name: 'Green Apple Slushy' },
  { src: img5, name: 'Mango Fruit Tea' },
  { src: img6, name: 'Mango Passion Fruit Smoothie' },
  { src: img7, name: 'Mango Yogurt with Toppings' },
  { src: img8, name: 'Oreo Blast' },
  { src: img9, name: 'Strawberry Milk Tea' },
  { src: img10, name: 'Taro Bubble Tea' },
  { src: img11, name: 'Vanilla Ice Cream with Toppings' }
];

// Gallery Section Component
const Gallery = () => {
  return (
    <section id="gallery" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Gallery</h2>
          <div className="w-24 h-1 bg-amber-400 mx-auto mb-4"></div>
          <p className="text-lg text-gray-600">Take a look at our delicious creations, from bubble teas to smoothies</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map(({ src, name }, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
            >
              <img
                src={src}
                alt={`Gallery Image ${index + 1}`}
                className="object-cover w-full h-74"
              />
              <div className="bg-orange-100 py-2 text-center text-sm font-medium text-gray-800">
                {name}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;