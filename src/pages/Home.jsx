import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { MapPin, Clock, Star } from 'lucide-react';
import OrderModal from '../components/OrderModal';
import menuData from '../data/menu.json';

const Home = () => {
  const [isOrderModalOpen, setIsOrderModalOpen] = useState(false);

  // Get featured items (first item from each category)
  const featuredItems = menuData.categories.map(category => ({
    ...category.items[0],
    category: category.name
  }));

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-amber-50 to-orange-50 py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Hero Content */}
            <div className="text-center lg:text-left">
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                <span className="text-amber-600">Latin-Inspired</span> Flavors,
                <br />
                Made Fresh Daily.
              </h1>
              
              <p className="text-xl text-gray-600 mb-8 max-w-lg">
                Discover authentic Latin-inspired gourmet sandwiches crafted with 
                the finest ingredients and traditional flavors.
              </p>

              {/* Primary CTA */}
              <Button
                onClick={() => setIsOrderModalOpen(true)}
                className="bg-amber-600 hover:bg-amber-700 text-white font-bold text-lg px-8 py-4 rounded-lg shadow-lg transform hover:scale-105 transition-all duration-200"
              >
                Order Now
              </Button>

              {/* Location Callout */}
              <div className="mt-8 p-4 bg-white rounded-lg shadow-md inline-block">
                <div className="flex items-center space-x-2 text-amber-600">
                  <MapPin size={20} />
                  <span className="font-semibold">Find us inside Wonderful Mart</span>
                </div>
                <p className="text-gray-600 text-sm mt-1">
                  2368 Massachusetts Avenue, Cambridge, MA 02140
                </p>
              </div>
            </div>

            {/* Hero Image */}
            <div className="relative">
              <div className="bg-gradient-to-br from-amber-400 to-orange-500 rounded-2xl p-8 shadow-2xl">
                <div className="bg-white rounded-xl p-6 text-center">
                  <div className="text-6xl mb-4">🥪</div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    Mouthwatering Sandwiches
                  </h3>
                  <p className="text-gray-600">
                    Fresh ingredients, bold flavors, authentic recipes
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
            Why Choose Sandüich Republic?
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6">
              <div className="text-4xl mb-4">🌶️</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Authentic Latin Flavors
              </h3>
              <p className="text-gray-600">
                Traditional recipes with a modern twist, bringing you the best of Latin cuisine.
              </p>
            </div>
            
            <div className="p-6">
              <div className="text-4xl mb-4">🥬</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Fresh Daily Ingredients
              </h3>
              <p className="text-gray-600">
                We source the freshest ingredients daily to ensure every bite is perfect.
              </p>
            </div>
            
            <div className="p-6">
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Quick & Convenient
              </h3>
              <p className="text-gray-600">
                Fast service and multiple delivery options to fit your busy lifestyle.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Menu Items */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Featured Items
            </h2>
            <p className="text-xl text-gray-600">
              Try our most popular sandwiches and smoothies
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredItems.map((item, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                <div className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-xl font-bold text-green-600">{item.name}</h3>
                    <span className="text-2xl font-bold text-gray-900">${item.price}</span>
                  </div>
                  <p className="text-gray-600 mb-4">{item.desc}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-orange-600 bg-orange-100 px-3 py-1 rounded-full">
                      {item.category}
                    </span>
                    <div className="flex items-center space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} size={16} className="text-yellow-400 fill-current" />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/menu">
              <Button className="bg-green-600 hover:bg-green-700 text-white font-semibold px-8 py-3">
                View Full Menu
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-4 bg-amber-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Experience Latin Flavors?
          </h2>
          <p className="text-xl text-amber-100 mb-8">
            Order now and taste the difference that fresh, authentic ingredients make.
          </p>
          <Button
            onClick={() => setIsOrderModalOpen(true)}
            className="bg-white text-amber-600 hover:bg-gray-100 font-bold text-lg px-8 py-4 rounded-lg shadow-lg transform hover:scale-105 transition-all duration-200"
          >
            Order Now
          </Button>
        </div>
      </section>

      <OrderModal 
        isOpen={isOrderModalOpen} 
        onClose={() => setIsOrderModalOpen(false)} 
      />
    </div>
  );
};

export default Home;

