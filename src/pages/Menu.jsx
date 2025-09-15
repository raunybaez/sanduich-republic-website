import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Star, Clock, Leaf } from 'lucide-react';
import OrderModal from '../components/OrderModal';
import menuData from '../data/menu.json';

const Menu = () => {
  const [isOrderModalOpen, setIsOrderModalOpen] = useState(false);

  const handleAddToOrder = (itemName, category) => {
    // Track click for analytics
    if (window.gtag) {
      window.gtag('event', 'click', {
        event_category: 'menu_item',
        event_label: `${category} - ${itemName}`,
        event_action: 'add_to_order'
      });
    }
    setIsOrderModalOpen(true);
  };

  const handleOrderNowClick = () => {
    // Track click for analytics
    if (window.gtag) {
      window.gtag('event', 'click', {
        event_category: 'cta_button',
        event_label: 'menu_page_order_now',
        event_action: 'order_now'
      });
    }
    setIsOrderModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <section className="bg-gradient-to-r from-amber-50 to-orange-50 py-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our Menu
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Discover our selection of Latin-inspired gourmet sandwiches and refreshing smoothies, 
            all made fresh daily with the finest ingredients.
          </p>
          <Button
            onClick={handleOrderNowClick}
            className="bg-amber-600 hover:bg-amber-700 text-white font-bold text-lg px-8 py-4 rounded-lg shadow-lg transform hover:scale-105 transition-all duration-200"
          >
            Order Now
          </Button>
        </div>
      </section>

      {/* Menu Categories */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          {menuData.categories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="mb-16">
              {/* Category Header */}
              <div className="text-center mb-12">
                <h2 className="text-4xl md:text-5xl font-bold text-orange-600 mb-4">
                  {category.name}
                </h2>
                <div className="w-24 h-1 bg-orange-600 mx-auto rounded-full"></div>
              </div>

              {/* Menu Items Grid */}
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {category.items.map((item, itemIndex) => (
                  <div 
                    key={itemIndex} 
                    className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                  >
                    {/* Item Image Placeholder */}
                    <div className="h-48 bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center">
                      <div className="text-6xl">
                        {category.name === 'Sandüich' ? '🥪' : '🥤'}
                      </div>
                    </div>

                    {/* Item Content */}
                    <div className="p-6">
                      {/* Item Header */}
                      <div className="flex justify-between items-start mb-3">
                        <h3 className="text-2xl font-bold text-green-600">
                          {item.name}
                        </h3>
                        <span className="text-3xl font-bold text-gray-900">
                          ${item.price}
                        </span>
                      </div>

                      {/* Item Description */}
                      <p className="text-gray-600 mb-4 leading-relaxed">
                        {item.desc}
                      </p>

                      {/* Item Features */}
                      <div className="flex items-center space-x-4 mb-4">
                        <div className="flex items-center space-x-1">
                          <Leaf size={16} className="text-green-500" />
                          <span className="text-sm text-gray-500">Fresh</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Clock size={16} className="text-orange-500" />
                          <span className="text-sm text-gray-500">5-7 min</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} size={14} className="text-yellow-400 fill-current" />
                          ))}
                        </div>
                      </div>

                      {/* Order Button */}
                      <Button
                        onClick={() => handleAddToOrder(item.name, category.name)}
                        className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 rounded-lg transition-colors"
                      >
                        Add to Order
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12">
            Frequently Asked Questions
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-6 bg-gray-50 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                What are your hours?
              </h3>
              <p className="text-gray-600">
                We're open Monday through Sunday, 10:00 AM to 9:00 PM. 
                Hours may vary on holidays.
              </p>
            </div>

            <div className="p-6 bg-gray-50 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Where can I find you?
              </h3>
              <p className="text-gray-600">
                We're located inside Wonderful Mart at 2368 Massachusetts Avenue, 
                Cambridge, MA 02140. Look for us near the food court area.
              </p>
            </div>

            <div className="p-6 bg-gray-50 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Which delivery partners do you use?
              </h3>
              <p className="text-gray-600">
                We partner with DoorDash, UberEats, and Grubhub for delivery. 
                Availability may vary by time and location.
              </p>
            </div>

            <div className="p-6 bg-gray-50 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Do you accommodate food allergies?
              </h3>
              <p className="text-gray-600">
                Please inform us of any allergies when ordering. We'll do our best 
                to accommodate dietary restrictions and provide ingredient information.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-16 px-4 bg-gradient-to-r from-green-600 to-green-700">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Hungry? Let's Get You Fed!
          </h2>
          <p className="text-xl text-green-100 mb-8">
            Order your favorite items now and experience the authentic flavors of Latin cuisine.
          </p>
          <Button
            onClick={handleOrderNowClick}
            className="bg-white text-green-600 hover:bg-gray-100 font-bold text-lg px-8 py-4 rounded-lg shadow-lg transform hover:scale-105 transition-all duration-200"
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

export default Menu;

