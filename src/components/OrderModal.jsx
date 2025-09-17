import { X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const OrderModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const deliveryPartners = [
    {
      name: 'DoorDash',
      url: 'https://order.online/business/sanduich-republic-14288787',
      logo: '🚗', // Placeholder - would be replaced with actual logo
      available: true,
    },
    {
      name: 'UberEats',
      url: 'https://www.order.store/store/sanduich-republic/_EmmdgNPXn23sQEPLZNScg',
      logo: '🍔', // Placeholder - would be replaced with actual logo
      available: true,
    },
    {
      name: 'Grubhub',
      url: 'https://sanduichrepublic.dine.online/',
      logo: '🥪', // Placeholder - would be replaced with actual logo
      available: true,
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
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black bg-opacity-50"
        onClick={onClose}
      />
      
      {/* Modal */}
      <div className="relative bg-white rounded-lg shadow-xl max-w-md w-full mx-4 p-6">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-gray-900">Order Online</h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <X size={20} />
          </button>
        </div>

        {/* Content */}
        <p className="text-gray-600 mb-6">
          Choose your preferred delivery partner to order from Sandüich Republic:
        </p>

        {/* Delivery Partners */}
        <div className="space-y-3">
          {deliveryPartners.map((partner) => (
            <button
              key={partner.name}
              onClick={() => handlePartnerClick(partner)}
              disabled={!partner.available}
              className={`w-full p-4 rounded-lg border-2 transition-all ${
                partner.available
                  ? 'border-gray-200 hover:border-amber-600 hover:bg-amber-50 cursor-pointer'
                  : 'border-gray-100 bg-gray-50 cursor-not-allowed opacity-50'
              }`}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <span className="text-2xl">{partner.logo}</span>
                  <span className="font-semibold text-lg">{partner.name}</span>
                </div>
                {!partner.available && (
                  <span className="text-sm text-gray-500">
                    Currently unavailable
                  </span>
                )}
              </div>
            </button>
          ))}
        </div>

        {/* Footer */}
        <div className="mt-6 text-center">
          <p className="text-sm text-gray-500">
            Links will open in a new tab. Delivery times and fees may vary by partner.
          </p>
        </div>
      </div>
    </div>
  );
};

export default OrderModal;

