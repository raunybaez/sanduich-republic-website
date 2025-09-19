import { useState } from 'react';
import { MapPin, Clock, Phone, Instagram, Facebook, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import emailjs from '@emailjs/browser';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const [newsletterStatus, setNewsletterStatus] = useState(''); // 'success', 'error', or ''
  const [isNewsletterSubmitting, setIsNewsletterSubmitting] = useState(false);

  const handleNewsletterSubmit = async (e) => {
    e.preventDefault();
    
    // Basic email validation
    if (!email.trim()) {
      setNewsletterStatus('error');
      return;
    }
    
    if (!/\S+@\S+\.\S+/.test(email)) {
      setNewsletterStatus('error');
      return;
    }

    setIsNewsletterSubmitting(true);
    
    try {
      // EmailJS configuration for newsletter
      const serviceId = 'service_x0hicea';
      const templateId = 'template_ejjatym';
      const publicKey = '0hbDyxmBE_sLF5rpY';
      
      // Template parameters for newsletter
      const templateParams = {
        from_name: 'Newsletter Subscriber',
        from_email: email,
        message: `New newsletter subscription request from: ${email}`,
        to_name: 'Sandüich Republic',
        subject: 'Newsletter Subscription'
      };
      
      // Send email using EmailJS
      await emailjs.send(serviceId, templateId, templateParams, publicKey);
      
      setNewsletterStatus('success');
      setSubscribed(true);
      setEmail('');
      
      // Auto-hide success message after 3 seconds
      setTimeout(() => {
        setNewsletterStatus('');
        setSubscribed(false);
      }, 3000);
      
    } catch (error) {
      console.error('Footer Newsletter EmailJS Error:', error);
      setNewsletterStatus('error');
    } finally {
      setIsNewsletterSubmitting(false);
    }
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            {/* Logo */}
              <div className="mb-6">
                <img
                  src="/noBgBlack.png"
                  alt="Sandüich Republic"
                  className="h-16 w-auto filter invert"
                />
              </div>
            {/* <h3 className="text-2xl font-bold text-amber-400 mb-4">
              Sandüich Republic
            </h3> */}
            <p className="text-gray-300 mb-6 max-w-md">
              Latin-inspired gourmet sandwiches made fresh daily. 
              Experience authentic flavors in every bite.
            </p>
            
            {/* Address */}
            <div className="flex items-start space-x-3 mb-4">
              <MapPin className="text-amber-400 mt-1" size={20} />
              <div>
                <p className="text-gray-300">
                  <strong>Inside Wonderful Mart</strong><br />
                  2368 Massachusetts Avenue<br />
                  Cambridge, MA 02140
                </p>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-start space-x-3 mb-4">
              <Phone className="text-amber-400 mt-1" size={20} />
              <div>
                <p className="text-gray-300">
                  <strong>Tel:</strong> (617)279-7252
                </p>
              </div>
            </div>

            {/* Hours */}
            <div className="flex items-start space-x-3">
              <Clock className="text-amber-400 mt-1" size={20} />
              <div>
                <p className="text-gray-300">
                  <strong>Hours:</strong><br />
                  Monday - Saturday: 9:00 AM - 7:00 PM
                </p>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="/" className="text-gray-300 hover:text-amber-400 transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="/menu" className="text-gray-300 hover:text-amber-400 transition-colors">
                  Menu
                </a>
              </li>
              <li>
                <a href="/order" className="text-gray-300 hover:text-amber-400 transition-colors">
                  Order Online
                </a>
              </li>
              <li>
                <a href="/contact" className="text-gray-300 hover:text-amber-400 transition-colors">
                  Location & Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter & Social */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Stay Connected</h4>
            
            {/* Newsletter */}
            <form onSubmit={handleNewsletterSubmit} className="mb-6">
              <div className="flex flex-col space-y-2">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="px-3 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-amber-400 focus:border-transparent"
                  required
                />
                <Button
                  type="submit"
                  disabled={isNewsletterSubmitting}
                  className="bg-amber-600 hover:bg-amber-700 text-white font-medium py-2 px-4 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isNewsletterSubmitting ? 'Subscribing...' : 'Subscribe'}
                </Button>
              </div>
              
              {/* Status Messages */}
              {(subscribed || newsletterStatus === 'success') && (
                <p className="text-green-400 text-sm mt-2">
                  🎉 Thanks for subscribing! You'll receive updates about special offers.
                </p>
              )}
              
              {newsletterStatus === 'error' && (
                <p className="text-red-400 text-sm mt-2">
                  ❌ Please enter a valid email address.
                </p>
              )}
            </form>

            {/* Social Links */}
            <div>
              <p className="text-gray-300 mb-3">Follow Us:</p>
              <div className="flex space-x-4">
                <a
                  href="https://www.instagram.com/sanduichrepublic/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-amber-400 transition-colors"
                >
                  <Instagram size={24} />
                </a>
                <a
                  href="https://www.instagram.com/sanduichrepublic/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-amber-400 transition-colors"
                >
                  <Facebook size={24} />
                </a>
                <a
                  href="mailto:sanduichrepublic@gmail.com"
                  className="text-gray-300 hover:text-amber-400 transition-colors"
                >
                  <Mail size={24} />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2025 Sandüich Republic. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-amber-400 transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-amber-400 transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-gray-400 hover:text-amber-400 transition-colors">
                Accessibility
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* LocalBusiness Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Restaurant",
            "name": "Sandüich Republic",
            "description": "Latin-inspired gourmet sandwich shop offering fresh, authentic flavors made daily.",
            "url": "https://sanduichrepublic.com",
            "telephone": "(617)279-7252",
            "email": "sanduichrepublic@gmail.com",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "2368 Massachusetts Avenue (Inside Wonderful Mart)",
              "addressLocality": "Cambridge",
              "addressRegion": "MA",
              "postalCode": "02140",
              "addressCountry": "US"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": "42.3875",
              "longitude": "-71.1167"
            },
            "openingHours": [
              "Mo-Sa 9:00-7:00"
            ],
            "servesCuisine": "Latin American",
            "priceRange": "$",
            "acceptsReservations": false,
            "hasDeliveryService": true,
            "deliveryService": [
              {
                "@type": "DeliveryService",
                "name": "DoorDash"
              },
              {
                "@type": "DeliveryService", 
                "name": "UberEats"
              },
              {
                "@type": "DeliveryService",
                "name": "Grubhub"
              }
            ]
          })
        }}
      />
    </footer>
  );
};

export default Footer;

