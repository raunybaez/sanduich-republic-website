import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { MapPin, Clock, Star } from "lucide-react";
import OrderModal from "../components/OrderModal";
import menuData from "../data/menu.json";

const Home = () => {
  const [isOrderModalOpen, setIsOrderModalOpen] = useState(false);

  // Get specific featured items.
  const featuredItems = [
    {
      name: "The OG",
      price: 14,
      desc: "Grilled ham, cheese, mayo, ketchup, green tomatoes, and onion.",
      image: "/og-icon.avif",
      category: "Sandüiches"
    },
    {
      name: "The Chick Magnet", 
      price: 16,
      desc: "Shredded chicken, cheese, mayo, ketchup, green tomatoes, and onion (BBQ, buffalo, chipotle).",
      image: "/chick-magnet-icon.avif",
      category: "Sandüiches"
    },
    {
      name: "Mamey",
      price: 8,
      desc: "Rich, creamy blend of mamey fruit, evaporated milk, vanilla extract and ice delivering a naturally sweet and smooth flavor.",
      image: "/mamey-icon.avif",
      category: "Smoothies"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}

      <section className="relative py-40 px-4 overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover filter blur-[3px]"
        >
          <source src="/bg-video-4.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <div className="absolute inset-0 bg-black/20"></div>

        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left text-white">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                <span className="text-amber-400">Latin-Inspired</span> Flavors,
                <br />
                Made Fresh Daily.
              </h1>

              <p className="text-xl mb-8 max-w-lg mx-auto lg:mx-0">
                Discover authentic Latin-inspired gourmet sandwiches crafted
                with the finest ingredients and traditional flavors.
              </p>

              <Button
                onClick={() => setIsOrderModalOpen(true)}
                className="bg-amber-600 hover:bg-amber-700 text-white font-bold text-lg px-8 py-4 rounded-lg shadow-lg transform hover:scale-105 transition-all duration-200"
              >
                Order Now
              </Button>

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
              <div className="mb-4">
                <img src="/imag2.png" alt="Authentic Latin Flavors" className="w-16 h-16 mx-auto rounded-full object-cover" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Authentic Latin Flavors
              </h3>
              <p className="text-gray-600">
                Traditional recipes with a modern twist, bringing you the best
                of Latin cuisine.
              </p>
            </div>

            <div className="p-6">
              <div className="mb-4">
                <img src="/imag1.png" alt="Fresh Daily Ingredients" className="w-16 h-16 mx-auto rounded-full object-cover" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Fresh Daily Ingredients
              </h3>
              <p className="text-gray-600">
                We source the freshest ingredients daily to ensure every bite is
                perfect.
              </p>
            </div>

            <div className="p-6">
              <div className="mb-4">
                <img src="/imag3.png" alt="Quick & Convenient" className="w-16 h-16 mx-auto rounded-full object-cover" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Quick & Convenient
              </h3>
              <p className="text-gray-600">
                Fast service and multiple delivery options to fit your busy
                lifestyle.
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
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                {/* Product Image */}
                <div className="aspect-w-16 aspect-h-9 bg-gray-100">
                  <img 
                    src={item.image} 
                    alt={item.name}
                    className="w-full h-48 object-cover"
                  />
                </div>
                
                {/* Product Info */}
                <div className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-2xl font-bold text-amber-600">
                      {item.name}
                    </h3>
                    <span className="text-3xl font-bold text-gray-900">
                      ${item.price}
                    </span>
                  </div>
                  
                  <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                    {item.desc}
                  </p>
                  
                  {/* Category and Rating */}
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-sm font-medium text-orange-600 bg-orange-100 px-3 py-1 rounded-full">
                      {item.category}
                    </span>
                    <div className="flex items-center space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          size={16}
                          className="text-yellow-400 fill-current"
                        />
                      ))}
                    </div>
                  </div>
                  
                  {/* Add to Order Button */}
                  <Button 
                    onClick={() => setIsOrderModalOpen(true)}
                    className="w-full bg-amber-600 hover:bg-amber-700 text-white font-semibold py-3 rounded-lg transition-colors"
                  >
                    Add to Order
                  </Button>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/menu">
              <Button className="bg-amber-600 hover:bg-amber-700 text-white font-semibold px-8 py-3">
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
            Order now and taste the difference that fresh, authentic ingredients
            make.
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

