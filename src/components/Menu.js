
const bubbleFruitTeaFlavors = [
  "Acai Berry", "Blueberry", "Cherry", "Grapefruit", "Guava", "Green Apple", "Mulberry", "Orange", "Papaya", "Passionfruit", "Pina Colada", "Peach", "Honey Ginger", "Pineapple", "Honey Lemon", "Pomegranate", "Honeydew", "Rose", "Kiwi", "Raspberry", "Lemon", "Strawberry", "Lavender", "Lychee", "White Peach", "Mango"
];

const bubbleMilkTeaFlavors = [
  "Blueberry Milk Tea", "Brown Caramel", "Guava Milk Tea", "Honeydew Milk Tea", "Irish Coffee", "Lavender Milk Tea", "Lychee Milk Tea", "Mango Milk Tea", "Mocha Caramel Deluxe", "White Peach Milk Tea", "Rose Milk Tea", "Pomegranate Milk Tea", "Pineapple Milk Tea", "Pina Colada Milk Tea", "Passion Fruit Milk Tea", "Papaya Milk Tea", "Almond Milk Tea", "Avocado Milk Tea", "Banana Milk Tea", "Black Milk Tea", "Black Sesame Milk Tea", "Caramel Milk Tea", "Chai Tea Milk Tea", "Chocolate Milk Tea", "Coconut Milk Tea", "Cookies n' Cream Milk Tea", "Hazelnut Milk Tea", "Matcha Green Milk Tea", "Mocha Milk Tea", "Mocha Caramel Milk Tea", "Taro Milk Tea", "Thai Tea Milk Tea", "Vanilla Tea Milk Tea", "Coffee Milk Tea"
];

const froyoFloatFlavors = [
  "Almond", "Avocado", "Banana", "Black Milk Tea", "Black Sesame", "Caramel", "Chai Tea", "Chocolate", "Coconut", "Cookies n' Cream", "Hazelnut", "Matcha Green Tea", "Mocha", "Mocha Caramel", "Taro", "Thai Tea", "Vanilla Tea", "Coffee", "Acai Berry", "Blueberry", "Cherry", "Grapefruit", "Guava", "Green Apple", "Mulberry", "Orange", "Papaya", "Passionfruit", "Pina Colada", "Peach", "Honey Ginger", "Pineapple", "Honey Lemon", "Pomegranate", "Honeydew", "Rose", "Raspberry", "Lemon", "Strawberry", "Lavender", "Lychee", "White Peach", "Mango"
];

const slushieFlavors = froyoFloatFlavors;

const smoothieFlavors = [
  "Banana", "Banana Peanut Butter", "Brown Caramel Deluxe", "Brownie dough", "Caramel", "Chocolate Peanut Butter", "Coffee", "Cookie Dough", "Cookie n' Cream", "Guava Passion Fruit", "Honeydew Coconut", "Lychee", "Mango", "Mango Kiwi", "Mango Passionfruit", "Mango Peach", "Mango Pineapple", "Mango Strawberry", "Matcha Green Tea", "Mixed Berry", "Peanut Butter", "Pina Colada", "Red Bean", "Red Bean Coconut", "Rose Lychee", "S'mores", "Strawberry", "Strawberry Banana", "Strawberry Kiwi", "Strawberry Papaya", "Taro", "Taro Oreo", "Thai Tea", "Vanilla"
];

const smoothieOTMFlavors = [
    "Birthday Cake", "Brown Sugar", "Cheese Cake", "CoCo Mango", "Feeling Taro-ific", "M&M Crunch", "Nutella", "Oreo Blast", "Over the Rainbow", "Scarlett Night", "Strawberry Delexe", "Vanilla Berry", "World Cup"
];

const FlavorSection = ({ title, items }) => (
  <div className="mb-10">
    <h3 className="text-2xl font-semibold text-amber-400 mb-4 border-b pb-2 border-orange-200">{title}</h3>
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 text-gray-700 text-sm">
      {items.map((item, index) => (
        <span key={index} className="bg-sky-100 px-2 py-1 rounded-md">{item}</span>
      ))}
    </div>
  </div>
);

const MenuSection = () => {
  return (
    <section id="menu" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Menu</h2>
          <div className="w-24 h-1 bg-amber-400 mx-auto mb-4"></div>
          <p className="text-lg text-gray-600">
            Discover our delicious selection of frozen yogurt, bubble teas, smoothies, slushies, and more.
          </p>
        </div>

        <div className="max-w-6xl mx-auto bg-white rounded-lg shadow-lg p-8">
          <FlavorSection title="Bubble Fruit Tea Flavors" items={bubbleFruitTeaFlavors} />
          <FlavorSection title="Bubble Milk Tea Flavors" items={bubbleMilkTeaFlavors} />
          <FlavorSection title="Froyo Float Flavors" items={froyoFloatFlavors} />
          <FlavorSection title="Slushie Flavors" items={slushieFlavors} />
          <FlavorSection title="Smoothie Flavors" items={smoothieFlavors} />
          <FlavorSection title="Smoothie of the Month Flavors" items={smoothieOTMFlavors} />

        </div>
      </div>
    </section>
  );
};

export default MenuSection;