import React, { useState } from 'react';

const LeadForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    city: '',
    experience: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call - replace with your actual API endpoint
    try {
      // Example: await fetch('/api/leads', { method: 'POST', body: JSON.stringify(formData) });
      console.log('Form submitted:', formData);
      
      // Simulate delay
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        phone: '',
        city: '',
        experience: '',
        message: ''
      });
      
      // Reset success message after 5 seconds
      setTimeout(() => setSubmitStatus(null), 5000);
    } catch {
      setSubmitStatus('error');
      setTimeout(() => setSubmitStatus(null), 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-24 px-6 bg-gradient-to-b from-[#0a0a0a] via-[#131313] to-[#1a1410] relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(229,196,131,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(229,196,131,0.02)_1px,transparent_1px)] bg-[size:80px_80px]"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[150px]"></div>
      
      <div className="max-w-4xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-gradient-to-r from-primary/15 to-amber-600/10 border border-primary/30 mb-6 backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
            <p className="font-label text-[#e5c483] tracking-[0.25em] uppercase text-xs font-semibold">Get Started</p>
          </div>
          <h2 className="font-headline text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
            Ready to Transform Your <span className="text-[#e5c483]">Career?</span>
          </h2>
          <p className="text-[#d0c5b5] text-lg max-w-2xl mx-auto">
            Fill out the form below and our team will get in touch with you within 24 hours
          </p>
        </div>

        {/* Form Card */}
        <div className="bg-gradient-to-br from-[#1a1816]/95 to-[#151413]/95 backdrop-blur-xl rounded-3xl border border-primary/20 p-8 md:p-12 shadow-[0_20px_60px_rgba(229,196,131,0.15)] ring-1 ring-white/5">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name */}
            <div>
              <label htmlFor="name" className="block text-[#e5c483] text-sm font-semibold mb-2 uppercase tracking-wider">
                Full Name *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-5 py-4 bg-[#0a0a0a]/50 border border-primary/20 rounded-xl text-white placeholder-[#998f81] focus:outline-none focus:border-primary/50 focus:ring-2 focus:ring-primary/20 transition-all"
                placeholder="Enter your full name"
              />
            </div>

            {/* Email and Phone */}
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="email" className="block text-[#e5c483] text-sm font-semibold mb-2 uppercase tracking-wider">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-5 py-4 bg-[#0a0a0a]/50 border border-primary/20 rounded-xl text-white placeholder-[#998f81] focus:outline-none focus:border-primary/50 focus:ring-2 focus:ring-primary/20 transition-all"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-[#e5c483] text-sm font-semibold mb-2 uppercase tracking-wider">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-5 py-4 bg-[#0a0a0a]/50 border border-primary/20 rounded-xl text-white placeholder-[#998f81] focus:outline-none focus:border-primary/50 focus:ring-2 focus:ring-primary/20 transition-all"
                  placeholder="+91 XXXXX XXXXX"
                />
              </div>
            </div>

            {/* City and Experience */}
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="city" className="block text-[#e5c483] text-sm font-semibold mb-2 uppercase tracking-wider">
                  City
                </label>
                <input
                  type="text"
                  id="city"
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  className="w-full px-5 py-4 bg-[#0a0a0a]/50 border border-primary/20 rounded-xl text-white placeholder-[#998f81] focus:outline-none focus:border-primary/50 focus:ring-2 focus:ring-primary/20 transition-all"
                  placeholder="Your city"
                />
              </div>
              <div>
                <label htmlFor="experience" className="block text-[#e5c483] text-sm font-semibold mb-2 uppercase tracking-wider">
                  Experience Level
                </label>
                <select
                  id="experience"
                  name="experience"
                  value={formData.experience}
                  onChange={handleChange}
                  className="w-full px-5 py-4 bg-[#0a0a0a]/50 border border-primary/20 rounded-xl text-white focus:outline-none focus:border-primary/50 focus:ring-2 focus:ring-primary/20 transition-all appearance-none cursor-pointer"
                >
                  <option value="">Select experience</option>
                  <option value="beginner">Beginner (0-1 years)</option>
                  <option value="intermediate">Intermediate (1-3 years)</option>
                  <option value="advanced">Advanced (3+ years)</option>
                  <option value="student">Student</option>
                </select>
              </div>
            </div>

            {/* Message */}
            <div>
              <label htmlFor="message" className="block text-[#e5c483] text-sm font-semibold mb-2 uppercase tracking-wider">
                Message (Optional)
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="4"
                className="w-full px-5 py-4 bg-[#0a0a0a]/50 border border-primary/20 rounded-xl text-white placeholder-[#998f81] focus:outline-none focus:border-primary/50 focus:ring-2 focus:ring-primary/20 transition-all resize-none"
                placeholder="Tell us about your goals and what you hope to achieve..."
              ></textarea>
            </div>

            {/* Submit Button */}
            <div className="pt-4">
              <div className="relative group">
                <div className="absolute -inset-1.5 bg-gradient-to-r from-primary via-amber-400 to-primary opacity-75 blur-xl group-hover:opacity-100 group-hover:blur-2xl transition-all duration-500 rounded-full"></div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="relative w-full bg-gradient-to-r from-[#e5c483] via-[#f0d499] to-[#e5c483] text-[#2a1f0a] px-10 py-5 rounded-full font-bold text-sm tracking-[0.15em] uppercase hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 shadow-[0_20px_60px_-15px_rgba(229,196,131,0.5)] disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <span className="flex items-center justify-center gap-3">
                      <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Submitting...
                    </span>
                  ) : (
                    'Get Free Consultation'
                  )}
                </button>
              </div>
            </div>

            {/* Status Messages */}
            {submitStatus === 'success' && (
              <div className="flex items-center gap-3 p-4 bg-green-500/10 border border-green-500/30 rounded-xl">
                <span className="material-symbols-outlined text-green-500" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                <p className="text-green-500 text-sm font-semibold">Thank you! We'll contact you within 24 hours.</p>
              </div>
            )}

            {submitStatus === 'error' && (
              <div className="flex items-center gap-3 p-4 bg-red-500/10 border border-red-500/30 rounded-xl">
                <span className="material-symbols-outlined text-red-500">error</span>
                <p className="text-red-500 text-sm font-semibold">Something went wrong. Please try again.</p>
              </div>
            )}
          </form>

          {/* Privacy Note */}
          <p className="text-[#998f81] text-xs text-center mt-6">
            By submitting this form, you agree to our privacy policy. We respect your data and will never share it with third parties.
          </p>
        </div>

        {/* Trust Indicators */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-8 text-[#d0c5b5] text-sm">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-[#e5c483]" style={{ fontVariationSettings: "'FILL' 1" }}>verified</span>
            <span>100% Secure</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-[#e5c483]" style={{ fontVariationSettings: "'FILL' 1" }}>schedule</span>
            <span>24hr Response Time</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-[#e5c483]" style={{ fontVariationSettings: "'FILL' 1" }}>support_agent</span>
            <span>Free Consultation</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LeadForm;
