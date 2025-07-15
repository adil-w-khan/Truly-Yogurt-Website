
// About Section Component
const About = () => {
  return (
    <section id="about" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">About Truly Yogurt</h2>
          <div className="w-24 h-1 bg-amber-400 mx-auto"></div>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <p className="text-lg text-gray-600 mb-8 text-center leading-relaxed">
            At Truly Yogurt, we believe that great taste comes from great ingredients. Our premium frozen yogurt is made with the finest ingredients, offering a perfect balance of creamy texture and delicious flavors that will satisfy your cravings and delight your taste buds. But we don't stop there — we also serve refreshing bubble teas, fruity slushies, delicious smoothies, shaved ice, and more.
         </p>
          
          <p className="text-lg text-gray-600 mb-8 text-center leading-relaxed">
            Located in the heart of New Brunswick, we're committed to serving our community with fresh, high-quality frozen yogurt, drinks, and exceptional service. Whether you're looking for a snack, a refreshing treat, or a guilt-free dessert, we have something special waiting for you.
          </p>

          <div className="text-center">
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">Order Online</h3>
            <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6">
              <a 
                href="https://www.doordash.com/store/truly-yogurts-new-brunswick-24390844/20027018/?rwg_token=ACgRB3eSInOyuIUqyzSon5RMDHDR3aBbHLxl7sDd5lVuHNFiyebo_zzceOI9eA8tD_7wrpmSL5OF751KhuSqocfKD7AWJagRag==&utm_campaign=gpa"
                className="bg-red-500 hover:bg-red-600 text-white font-bold py-3 px-6 rounded-lg transition-colors"
                target="_blank"
                >
                DoorDash
              </a>
              <a 
              href="https://www.ubereats.com/store/truly-yogurts/s9WS4V2ZU7uc-LPtkZ4iyg?srsltid=AfmBOorCStKyWGX9Ca0ehO8oF27vQmHxOoxt7JnRt-BymZv8Bd1ghqLz" 
              className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-lg transition-colors"
                target="_blank"
              >
                Uber Eats
              </a>
              <a 
              href="https://www.grubhub.com/restaurant/truly-yogurt-38-easton-ave-new-brunswick/6905336" 
              className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-6 rounded-lg transition-colors"
               target="_blank"
              >
                GrubHub
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;