import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { MapPin, Clock, Phone, Mail, Car, Navigation } from 'lucide-react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [formStatus, setFormStatus] = useState(''); // 'success', 'error', or ''
  const [errorMessage, setErrorMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  // Newsletter state
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsletterStatus, setNewsletterStatus] = useState(''); // 'success', 'error', or ''
  const [isNewsletterSubmitting, setIsNewsletterSubmitting] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const validateForm = () => {
    if (!formData.name.trim()) return 'Name is required';
    if (!formData.email.trim()) return 'Email is required';
    if (!/\S+@\S+\.\S+/.test(formData.email)) return 'Please enter a valid email';
    if (!formData.message.trim()) return 'Message is required';
    return null;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const error = validateForm();
    if (error) {
      setFormStatus('error');
      setErrorMessage(error);
      return;
    }

    setIsSubmitting(true);
    
    try {
      // EmailJS configuration
      const serviceId = 'service_x0hicea';
      const templateId = 'template_ejjatym';
      const publicKey = '0hbDyxmBE_sLF5rpY';
      
      // Template parameters
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
        to_name: 'Sandüich Republic',
      };
      
      // Send email using EmailJS
      await emailjs.send(serviceId, templateId, templateParams, publicKey);
      
      setFormStatus('success');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('EmailJS Error:', error);
      setFormStatus('error');
      setErrorMessage('Failed to send message. Please try again or contact us directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleNewsletterSubmit = async (e) => {
    e.preventDefault();
    
    // Basic email validation
    if (!newsletterEmail.trim()) {
      setNewsletterStatus('error');
      return;
    }
    
    if (!/\S+@\S+\.\S+/.test(newsletterEmail)) {
      setNewsletterStatus('error');
      return;
    }

    setIsNewsletterSubmitting(true);
    
    try {
      // EmailJS configuration for newsletter
      const serviceId = 'service_x0hicea';
      const templateId = 'template_ejjatym'; // You might want a separate template for newsletter
      const publicKey = '0hbDyxmBE_sLF5rpY';
      
      // Template parameters for newsletter
      const templateParams = {
        from_name: 'Newsletter Subscriber',
        from_email: newsletterEmail,
        message: `New newsletter subscription request from: ${newsletterEmail}`,
        to_name: 'Sandüich Republic',
        subject: 'Newsletter Subscription'
      };
      
      // Send email using EmailJS
      await emailjs.send(serviceId, templateId, templateParams, publicKey);
      
      setNewsletterStatus('success');
      setNewsletterEmail('');
      
      // Auto-hide success message after 3 seconds
      setTimeout(() => {
        setNewsletterStatus('');
      }, 3000);
      
    } catch (error) {
      console.error('Newsletter EmailJS Error:', error);
      setNewsletterStatus('error');
    } finally {
      setIsNewsletterSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <section className="bg-gradient-to-r from-amber-50 to-orange-50 py-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Location & Contact
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Visit us inside Wonderful Mart or get in touch with any questions. 
            We'd love to hear from you!
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Location Information */}
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Find Us</h2>
            
            {/* Address Card */}
            <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
              <div className="flex items-start space-x-4 mb-6">
                <MapPin className="text-amber-600 mt-1" size={24} />
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Our Location
                  </h3>
                  <p className="text-gray-600 mb-2">
                    <strong>Inside Wonderful Mart</strong>
                  </p>
                  <p className="text-gray-600">
                    2368 Massachusetts Avenue<br />
                    Cambridge, MA 02140
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4 mb-6">
                <Clock className="text-green-600 mt-1" size={24} />
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Hours
                  </h3>
                  <div className="text-gray-600 space-y-1">
                    <p>Monday - Saturday: 9:00 AM - 7:00 PM</p>
                    <p className="text-sm text-gray-500">
                      Hours may vary on holidays
                    </p>
                  </div>
                </div>
              </div>

            </div>

            {/* Google Maps Embed */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="p-6 border-b">
                <h3 className="text-xl font-semibold text-gray-900 flex items-center">
                  <Navigation className="mr-2 text-amber-600" size={20} />
                  Map & Directions
                </h3>
              </div>
              <div className="h-64 bg-gray-200 flex items-center justify-center">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2947.8!2d-71.1167!3d42.3875!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e370a5cb30cc5f%3A0x1234567890abcdef!2s2368%20Massachusetts%20Ave%2C%20Cambridge%2C%20MA%2002140!5e0!3m2!1sen!2sus!4v1234567890123"
                  width="100%"
                  height="256"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Sandüich Republic Location"
                ></iframe>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Get In Touch</h2>
            
            <div className="bg-white rounded-xl shadow-lg p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-600 focus:border-transparent transition-colors"
                    placeholder="Your full name"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-600 focus:border-transparent transition-colors"
                    placeholder="your.email@example.com"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-600 focus:border-transparent transition-colors resize-vertical"
                    placeholder="Tell us how we can help you..."
                    required
                  ></textarea>
                </div>

                {/* Form Status Messages */}
                {formStatus === 'success' && (
                  <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
                    <p className="text-green-800 font-medium">
                      Thank you! Your message has been sent successfully. We'll get back to you soon.
                    </p>
                  </div>
                )}

                {formStatus === 'error' && (
                  <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
                    <p className="text-red-800 font-medium">
                      {errorMessage || 'Please fill in all required fields correctly.'}
                    </p>
                  </div>
                )}

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-amber-600 hover:bg-amber-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </Button>
              </form>

              {/* Contact Info */}
              <div className="mt-8 pt-8 border-t border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  Other Ways to Reach Us
                </h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <Phone className="text-amber-600" size={20} />
                    <span className="text-gray-600">(617)279-7252</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Mail className="text-amber-600" size={20} />
                    <span className="text-gray-600">sanduichrepublic@gmail.com</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Newsletter Section */}
      <section className="py-16 px-4 bg-amber-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Stay Updated
          </h2>
          <p className="text-xl text-amber-100 mb-8">
            Subscribe to our newsletter for special offers and new menu items.
          </p>
          <form onSubmit={handleNewsletterSubmit} className="max-w-md mx-auto">
            <div className="flex flex-col sm:flex-row gap-4 items-center">
              <div className="flex-1 w-full sm:w-auto">
                <input
                  type="email"
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="w-full px-4 py-3 rounded-xl border-2 border-white bg-transparent text-white placeholder-amber-200 focus:ring-2 focus:ring-white focus:border-white focus:outline-none h-[50px]"
                  required
                />
              </div>
              <Button 
                type="submit"
                disabled={isNewsletterSubmitting}
                className="bg-white text-amber-600 hover:bg-gray-100 font-semibold px-6 py-3 rounded-xl transition-colors disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap h-[50px] flex items-center"
              >
                {isNewsletterSubmitting ? 'Subscribing...' : 'Subscribe'}
              </Button>
            </div>
            
            {/* Newsletter Status Messages */}
            {newsletterStatus === 'success' && (
              <div className="mt-4 p-3 bg-green-100 border border-green-300 rounded-lg">
                <p className="text-green-800 font-medium text-sm">
                  🎉 Thank you for subscribing! You'll receive updates about special offers and new menu items.
                </p>
              </div>
            )}
            
            {newsletterStatus === 'error' && (
              <div className="mt-4 p-3 bg-red-100 border border-red-300 rounded-lg">
                <p className="text-red-800 font-medium text-sm">
                  ❌ Please enter a valid email address.
                </p>
              </div>
            )}
          </form>
        </div>
      </section>
    </div>
  );
};

export default Contact;

