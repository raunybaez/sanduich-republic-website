import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const TermsOfService = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <Link to="/" className="inline-flex items-center text-amber-600 hover:text-amber-700 mb-6">
            <ArrowLeft size={20} className="mr-2" />
            Back to Home
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Terms of Service
          </h1>
          <p className="text-lg text-gray-600">
            Last updated: January 2025
          </p>
        </div>

        {/* Content */}
        <div className="bg-white rounded-xl shadow-lg p-8 md:p-12">
          <div className="prose prose-lg max-w-none">
            
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-amber-600 mb-4">Agreement to Terms</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                These Terms of Service ("Terms") govern your use of Sandüich Republic's website, services, and any related applications (collectively, the "Service"). By accessing or using our Service, you agree to be bound by these Terms.
              </p>
              <p className="text-gray-700 leading-relaxed">
                If you disagree with any part of these terms, you may not access the Service.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-amber-600 mb-4">About Sandüich Republic</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Sandüich Republic is a Latin-inspired gourmet sandwich shop located inside Wonderful Mart at 2368 Massachusetts Avenue, Cambridge, MA 02140. We specialize in fresh, authentic Latin flavors made daily.
              </p>
              <div className="bg-gray-50 p-6 rounded-lg">
                <p className="text-gray-700 mb-2">
                  <strong>Business Hours:</strong> Monday - Saturday: 9:00 AM - 7:00 PM<br />
                  <strong>Phone:</strong> (617) 279-7252<br />
                  <strong>Email:</strong> sanduichrepublic@gmail.com
                </p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-amber-600 mb-4">Use of Our Service</h2>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Permitted Uses</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                You may use our Service to:
              </p>
              <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
                <li>Browse our menu and learn about our offerings</li>
                <li>Place orders for pickup or delivery</li>
                <li>Contact us for inquiries or feedback</li>
                <li>Subscribe to our newsletter</li>
                <li>Access information about our location and hours</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">Prohibited Uses</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                You may not use our Service to:
              </p>
              <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
                <li>Violate any applicable laws or regulations</li>
                <li>Transmit harmful or malicious code</li>
                <li>Attempt to gain unauthorized access to our systems</li>
                <li>Interfere with the proper functioning of the Service</li>
                <li>Use the Service for any unlawful or prohibited purpose</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-amber-600 mb-4">Orders and Payment</h2>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Order Processing</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                All orders are subject to acceptance by Sandüich Republic. We reserve the right to refuse or cancel any order at our discretion.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">Pricing and Payment</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Prices are subject to change without notice. Payment is processed through our third-party delivery partners (DoorDash, UberEats, Grubhub) or at the time of pickup.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">Order Modifications and Cancellations</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Order modifications or cancellations must be made before food preparation begins. Contact us immediately if you need to modify or cancel your order.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-amber-600 mb-4">Delivery and Pickup</h2>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Delivery Services</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                We partner with third-party delivery services (DoorDash, UberEats, Grubhub). Delivery terms, fees, and policies are governed by these third-party services.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">Pickup Orders</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Pickup orders must be collected within a reasonable time after preparation. We are not responsible for orders that are not picked up within 2 hours of preparation.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">Food Safety</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                We maintain high food safety standards. However, customers are responsible for proper storage and consumption of food after pickup or delivery.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-amber-600 mb-4">Intellectual Property</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                The Service and its original content, features, and functionality are owned by Sandüich Republic and are protected by international copyright, trademark, patent, trade secret, and other intellectual property laws.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                You may not reproduce, distribute, modify, or create derivative works of our content without our express written permission.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-amber-600 mb-4">User Content</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                If you submit any content to us (reviews, feedback, photos), you grant us a non-exclusive, royalty-free license to use, modify, and distribute such content for business purposes.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                You are responsible for ensuring that any content you submit does not violate any third-party rights or applicable laws.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-amber-600 mb-4">Limitation of Liability</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                To the maximum extent permitted by law, Sandüich Republic shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                Our total liability to you for any damages arising from or related to these Terms or the Service shall not exceed the amount you paid us in the 12 months preceding the claim.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-amber-600 mb-4">Indemnification</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                You agree to defend, indemnify, and hold harmless Sandüich Republic and its officers, directors, employees, and agents from and against any claims, damages, obligations, losses, liabilities, costs, or debt arising from your use of the Service or violation of these Terms.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-amber-600 mb-4">Privacy</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Your privacy is important to us. Please review our Privacy Policy, which also governs your use of the Service, to understand our practices.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-amber-600 mb-4">Termination</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We may terminate or suspend your access to our Service immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-amber-600 mb-4">Governing Law</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                These Terms shall be interpreted and governed by the laws of the Commonwealth of Massachusetts, without regard to its conflict of law provisions.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-amber-600 mb-4">Changes to Terms</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material, we will try to provide at least 30 days notice prior to any new terms taking effect.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-amber-600 mb-4">Contact Information</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                If you have any questions about these Terms of Service, please contact us:
              </p>
              <div className="bg-gray-50 p-6 rounded-lg">
                <p className="text-gray-700 mb-2">
                  <strong>Sandüich Republic</strong><br />
                  Inside Wonderful Mart<br />
                  2368 Massachusetts Avenue<br />
                  Cambridge, MA 02140
                </p>
                <p className="text-gray-700 mb-2">
                  <strong>Phone:</strong> (617) 279-7252<br />
                  <strong>Email:</strong> sanduichrepublic@gmail.com
                </p>
              </div>
            </section>

          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsOfService;
