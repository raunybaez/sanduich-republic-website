import { ExternalLink, Clock, Truck, Star } from 'lucide-react';

const Order = () => {
  const deliveryPartners = [
    {
      name: 'DoorDash',
      url: 'https://order.online/business/sanduich-republic-14288787',
      logo: '/DoorDash2.png',
      available: true,
      estimatedTime: '25-35 min',
      deliveryFee: '$2.99',
      rating: 4.8,
      description: 'Fast and reliable delivery with real-time tracking'
    },
    {
      name: 'UberEats',
      url: 'https://www.order.store/store/sanduich-republic/_EmmdgNPXn23sQEPLZNScg',
      logo: '/UberEats.png',
      available: true,
      estimatedTime: '20-30 min',
      deliveryFee: '$1.99',
      rating: 4.7,
      description: 'Quick delivery with upfront pricing'
    },
    {
      name: 'Grubhub',
      url: 'https://sanduichrepublic.dine.online',
      logo: '/Grubhub2.png',
      available: true,
      estimatedTime: 'N/A',
      deliveryFee: 'N/A',
      rating: 4.6,
      description: 'Currently unavailable - try another partner'
    },
  ];

  const handlePartnerClick = (partner) => {
    if (partner.available) {
      // Track click for analytics
      if (window.gtag) {
        window.gtag('event', 'click', {
          event_category: 'delivery_partner',
          event_label: partner.name,
        });
      }
      window.open(partner.url, '_blank');
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <section className="bg-gradient-to-r from-amber-50 to-orange-50 py-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Order Online
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Choose your preferred delivery partner to order from Sandüich Republic. 
            All partners offer the same delicious menu with different delivery options.
          </p>
        </div>
      </section>

      {/* Delivery Partners */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="grid gap-8">
            {deliveryPartners.map((partner, index) => (
              <div
                key={index}
                className={`bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 ${
                  partner.available 
                    ? 'hover:shadow-xl hover:-translate-y-1 cursor-pointer' 
                    : 'opacity-60'
                }`}
                onClick={() => handlePartnerClick(partner)}
              >
                <div className="p-8">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                    {/* Partner Info */}
                    <div className="flex items-center space-x-6 mb-6 md:mb-0">
                      <div className="w-16 h-16">
                        <img src={partner.logo} alt={partner.name} className="w-full h-full object-contain" />
                      </div>
                      <div>
                        <h3 className="text-3xl font-bold text-gray-900 mb-2">
                          {partner.name}
                        </h3>
                        <p className="text-gray-600 mb-3">
                          {partner.description}
                        </p>
                      </div>
                    </div>

                    {/* Action Button */}
                    <div className="flex flex-col items-center md:items-end">
                      {partner.available ? (
                        <div className="text-center md:text-right">
                          <div className="bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium mb-4">
                            Available Now
                          </div>
                          <div className="flex items-center space-x-2 text-amber-600 font-semibold">
                            <span>Order Now</span>
                            <ExternalLink size={20} />
                          </div>
                        </div>
                      ) : (
                        <div className="text-center md:text-right">
                          <div className="bg-gray-100 text-gray-600 px-4 py-2 rounded-full text-sm font-medium mb-4">
                            Currently Unavailable
                          </div>
                          <p className="text-sm text-gray-500">
                            Try another partner
                          </p>
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                {/* Hover Effect Border */}
                {partner.available && (
                  <div className="h-1 bg-gradient-to-r from-amber-400 to-orange-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
                )}
              </div>
            ))}
          </div>

          {/* Additional Information */}
          <div className="mt-16 bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              Delivery Information
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-3xl mb-4">📱</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Easy Ordering
                </h3>
                <p className="text-gray-600">
                  Order through your favorite app with just a few taps
                </p>
              </div>
              
              <div className="text-center">
                <div className="text-3xl mb-4">🚚</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Fast Delivery
                </h3>
                <p className="text-gray-600">
                  Fresh food delivered hot to your door in 20-35 minutes
                </p>
              </div>
              
              <div className="text-center">
                <div className="text-3xl mb-4">📍</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Real-Time Tracking
                </h3>
                <p className="text-gray-600">
                  Track your order from kitchen to your doorstep
                </p>
              </div>
            </div>
          </div>

          {/* Pickup Option */}
          <div className="mt-8 bg-gradient-to-r from-green-50 to-green-100 rounded-xl p-8 text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Prefer Pickup?
            </h2>
            <p className="text-gray-600 mb-6">
              Call ahead and pick up your order at our location inside Wonderful Mart. 
              Skip the delivery fees and get your food even faster!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <div className="flex items-center space-x-2">
                <span className="text-2xl">📞</span>
                <span className="font-semibold text-gray-900">(617)279-7252</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-2xl">📍</span>
                <span className="text-gray-600">2368 Massachusetts Ave, Cambridge, MA 02140</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Order;

