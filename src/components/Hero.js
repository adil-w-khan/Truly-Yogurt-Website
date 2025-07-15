import React from 'react';
import heroImage from '../images/TrulyYogurts_Hero.jpg';

const Hero = () => {
  return (
    <section 
      id="hero" 
      className="relative h-screen bg-cover bg-center bg-no-repeat flex items-center justify-center"
      style={{
        backgroundImage: `${`url(${heroImage})`}`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
      }}
    >
      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      
      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
          Truly Yogurt
        </h1>
        <p className="text-lg md:text-xl lg:text-2xl mb-8 max-w-2xl mx-auto leading-relaxed">
          It's truly delicious!
          <br />
            Located in the heart of New Brunswick, just a 5-minute walk from The Yard!
        </p>
        <a
          className="bg-amber-400 hover:bg-orange-600 text-white font-bold py-4 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-105 shadow-lg inline-block"
          href="https://www.doordash.com/store/truly-yogurts-new-brunswick-24390844/20027018/?rwg_token=ACgRB3eSInOyuIUqyzSon5RMDHDR3aBbHLxl7sDd5lVuHNFiyebo_zzceOI9eA8tD_7wrpmSL5OF751KhuSqocfKD7AWJagRag==&utm_campaign=gpa"
          target="_blank"
          rel="noopener noreferrer"
        >
          Order Now
        </a>
      </div>
    </section>
  );
};

export default Hero;