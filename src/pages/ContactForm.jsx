import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Checkbox } from '@/components/ui/checkbox';
import emailjs from '@emailjs/browser';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    message: ''
  });

  const [consentData, setConsentData] = useState({
    offersAndNews: false,
    termsAndPrivacy: false
  });

  const [formStatus, setFormStatus] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  // ✅ Input field updates
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  // ✅ Checkbox updates
  const handleCheckboxChange = (field) => {
    setConsentData((prev) => ({
      ...prev,
      [field]: !prev[field]
    }));
  };

  // ✅ Basic form validation
  const validateForm = () => {
    if (!formData.firstName.trim()) return 'First name is required';
    if (!formData.email.trim()) return 'Email is required';
    if (!/\S+@\S+\.\S+/.test(formData.email)) return 'Please enter a valid email';
    if (!formData.message.trim()) return 'Message is required';
    if (!consentData.termsAndPrivacy)
      return 'You must accept the Terms of Service & Privacy Policy';
    return null;
  };

  // ✅ Form submit handler
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
      const serviceId = 'service_9zm41o8';
      const templateId = 'template_0oz5u2s';
      const publicKey = '1aOtP7_P2FsKwIJM8';

      // ✅ Template parameters must match EmailJS template variables
      const templateParams = {
        from_name: `${formData.firstName} ${formData.lastName}`.trim(),
        from_email: formData.email,
        phone_number: formData.phoneNumber || 'Not provided',
        message: formData.message,
        offers_and_news: consentData.offersAndNews ? 'Yes' : 'No',
        terms_and_privacy: consentData.termsAndPrivacy ? 'Accepted' : 'Not accepted',
        to_name: 'Sandüich Republic'
      };

      // ✅ Send the email
      await emailjs.send(serviceId, templateId, templateParams, publicKey);

      // ✅ Reset form + show success
      setFormStatus('success');
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber: '',
        message: ''
      });
      setConsentData({
        offersAndNews: false,
        termsAndPrivacy: false
      });

      // Hide message after delay
      setTimeout(() => setFormStatus(''), 5000);
    } catch (error) {
      console.error('EmailJS Error:', error);
      setFormStatus('error');
      setErrorMessage(
        'Failed to send message. Please try again or contact us directly.'
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-16 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Contact Us
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Please provide your contact details and we'll get back to you as soon as possible.
          </p>
        </div>

        {/* Form Container */}
        <div className="bg-white rounded-xl shadow-lg p-8 md:p-12">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold text-amber-600 mb-8 text-center">
              Please provide your contact details
            </h2>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* First Name */}
              <div>
                <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                  First name*
                </label>
                <Input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  placeholder="First Name Example"
                  className="w-full border-dashed border-gray-300 focus:border-amber-500 focus:ring-amber-500 h-12"
                  required
                />
              </div>

              {/* Last Name */}
              <div>
                <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                  Last name
                </label>
                <Input
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  placeholder="Last Name Example"
                  className="w-full border-dashed border-gray-300 focus:border-amber-500 focus:ring-amber-500 h-12"
                />
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email*
                </label>
                <Input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="example@smsoptin.com"
                  className="w-full border-dashed border-gray-300 focus:border-amber-500 focus:ring-amber-500 h-12"
                  required
                />
              </div>

              {/* Phone Number */}
              <div>
                <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700 mb-2">
                  Phone number
                </label>
                <Input
                  type="tel"
                  id="phoneNumber"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleInputChange}
                  placeholder="+1234567891"
                  className="w-full border-dashed border-gray-300 focus:border-amber-500 focus:ring-amber-500 h-12"
                />
              </div>

              {/* Message */}
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
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-colors resize-vertical"
                  placeholder="Tell us how we can help you..."
                  required
                ></textarea>
              </div>

              {/* Checkboxes */}
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Checkbox
                    id="offersAndNews"
                    checked={consentData.offersAndNews}
                    onCheckedChange={() => handleCheckboxChange('offersAndNews')}
                    className="mt-1"
                  />
                  <label htmlFor="offersAndNews" className="text-sm text-gray-700 cursor-pointer">
                    I would like to receive offers and news
                  </label>
                </div>

                <div className="flex items-start space-x-3">
                  <Checkbox
                    id="termsAndPrivacy"
                    checked={consentData.termsAndPrivacy}
                    onCheckedChange={() => handleCheckboxChange('termsAndPrivacy')}
                    className="mt-1"
                    required
                  />
                  <label htmlFor="termsAndPrivacy" className="text-sm text-gray-700 cursor-pointer">
                    I accept the{' '}
                    <a href="/terms" className="text-amber-600 underline hover:text-amber-800">
                      Terms of Service
                    </a>{' '}
                    &{' '}
                    <a href="/privacy" className="text-amber-600 underline hover:text-amber-800">
                      Privacy Policy
                    </a>
                    .
                  </label>
                </div>
              </div>

              {/* SMS Consent */}
              <div className="text-xs text-gray-500 leading-relaxed bg-gray-50 p-4 rounded-lg">
                By providing your phone number you agree to receive informational text messages from Sandüich Republic.
                Consent is not a condition of purchase. Message frequency will vary. Msg & data rates may apply.
                Reply HELP for help or STOP to cancel.
              </div>

              {/* Form Messages */}
              {formStatus === 'success' && (
                <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
                  <p className="text-green-800 font-medium text-sm">
                    ✅ Thank you! Your contact details have been submitted successfully.
                  </p>
                </div>
              )}

              {formStatus === 'error' && (
                <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
                  <p className="text-red-800 font-medium text-sm">❌ {errorMessage}</p>
                </div>
              )}

              {/* Submit Button */}
              <div className="flex justify-end pt-6">
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-amber-600 hover:bg-amber-700 text-white font-semibold px-12 py-3 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'SUBMITTING...' : 'CONTINUE'}
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
