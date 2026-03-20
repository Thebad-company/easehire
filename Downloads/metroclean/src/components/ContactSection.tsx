import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { mockData } from "../data/mockData";

export const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "Industrial Waste Management",
    message: ""
  });

  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Invalid email format";
    }
    if (!formData.message.trim()) newErrors.message = "Message is required";
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setStatus("submitting");
    
    // Simulate API call
    setTimeout(() => {
      setStatus("success");
      setFormData({ name: "", email: "", subject: "Industrial Waste Management", message: "" });
      
      // Auto-reset success message after 5 seconds
      setTimeout(() => setStatus("idle"), 5000);
    }, 1500);
  };

  return (
    <div className="max-w-7xl mx-auto px-6">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-3xl md:text-5xl font-headline font-black text-primary mb-6">Get in Touch</h2>
        <p className="text-lg lg:text-xl text-on-surface-variant max-w-2xl mx-auto">
          Have a project or partnership in mind? Our team is ready to deliver technology-powered waste management solutions tailored to your needs.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Contact Info Card */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="bg-primary text-white p-8 md:p-12 rounded-[1.5rem] md:rounded-[2.5rem] shadow-2xl relative overflow-hidden h-full"
        >
          <div className="relative z-10">
            <h2 className="text-2xl md:text-3xl font-headline font-bold mb-8">Contact Information</h2>
            <div className="space-y-8">
              <div className="flex items-start gap-4 md:gap-6">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-2xl bg-white/10 flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined">call</span>
                </div>
                <div>
                  <p className="text-white/60 text-[10px] md:text-xs uppercase tracking-widest font-bold mb-1">Phone Numbers</p>
                  {mockData.contact.phones.map((p, i) => (
                    <p key={i} className="text-base md:text-lg font-bold">{p}</p>
                  ))}
                </div>
              </div>

              <div className="flex items-start gap-4 md:gap-6">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-2xl bg-white/10 flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined">mail</span>
                </div>
                <div>
                  <p className="text-white/60 text-[10px] md:text-xs uppercase tracking-widest font-bold mb-1">Email Addresses</p>
                  {mockData.contact.emails.map((e, i) => (
                    <p key={i} className="text-base md:text-lg font-bold truncate max-w-[200px] sm:max-w-none">{e}</p>
                  ))}
                </div>
              </div>

              <div className="flex items-start gap-4 md:gap-6">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-2xl bg-white/10 flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined">location_on</span>
                </div>
                <div>
                  <p className="text-white/60 text-[10px] md:text-xs uppercase tracking-widest font-bold mb-1">Headquarters</p>
                  <p className="text-sm md:text-lg leading-relaxed">{mockData.contact.address}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-secondary/20 rounded-full blur-3xl"></div>
        </motion.div>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="bg-white p-8 md:p-12 rounded-[1.5rem] md:rounded-[2.5rem] border border-outline-variant/10 shadow-xl relative"
        >
          <AnimatePresence mode="wait">
            {status === "success" ? (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className="absolute inset-0 z-20 bg-white rounded-[1.5rem] md:rounded-[2.5rem] flex flex-col items-center justify-center p-8 md:p-12 text-center"
              >
                <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-green-100 flex items-center justify-center mb-6">
                  <span className="material-symbols-outlined text-green-600 text-4xl md:text-5xl">check_circle</span>
                </div>
                <h3 className="text-2xl md:text-3xl font-headline font-bold text-primary mb-4">Message Sent!</h3>
                <p className="text-on-surface-variant text-base md:text-lg max-w-sm mb-8">
                  Thank you for reaching out. Our technical team will review your inquiry and get back to you within 24 hours.
                </p>
                <button 
                  onClick={() => setStatus("idle")}
                  className="text-secondary font-bold hover:underline"
                >
                  Send another message
                </button>
              </motion.div>
            ) : (
              <motion.div key="form" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                <h2 className="text-2xl md:text-3xl font-headline font-bold text-primary mb-8">Send us a Message</h2>
                <form className="space-y-6" onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs font-bold text-on-surface-variant mb-2 uppercase tracking-wide">Full Name</label>
                      <input 
                        type="text" 
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        placeholder="John Doe"
                        className={`w-full px-5 py-3.5 rounded-xl bg-surface-container-low border ${errors.name ? 'border-red-500' : 'border-outline-variant/20'} focus:outline-none focus:ring-2 focus:ring-secondary/50 transition-all font-body text-sm md:text-base`}
                      />
                      {errors.name && <p className="text-red-500 text-[10px] font-bold mt-1">{errors.name}</p>}
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-on-surface-variant mb-2 uppercase tracking-wide">Email Address</label>
                      <input 
                        type="email" 
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        placeholder="john@example.com"
                        className={`w-full px-5 py-3.5 rounded-xl bg-surface-container-low border ${errors.email ? 'border-red-500' : 'border-outline-variant/20'} focus:outline-none focus:ring-2 focus:ring-secondary/50 transition-all font-body text-sm md:text-base`}
                      />
                      {errors.email && <p className="text-red-500 text-[10px] font-bold mt-1">{errors.email}</p>}
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-on-surface-variant mb-2 uppercase tracking-wide">Subject</label>
                    <div className="relative">
                      <select 
                        value={formData.subject}
                        onChange={(e) => setFormData({...formData, subject: e.target.value})}
                        className="w-full px-5 py-3.5 rounded-xl bg-surface-container-low border border-outline-variant/20 focus:outline-none focus:ring-2 focus:ring-secondary/50 transition-all font-body appearance-none cursor-pointer text-sm md:text-base"
                      >
                        <option>Industrial Waste Management</option>
                        <option>Municipal Sewer Cleaning</option>
                        <option>Equipment Hire / O&amp;M</option>
                        <option>General Inquiry</option>
                      </select>
                      <span className="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-on-surface-variant">expand_more</span>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-on-surface-variant mb-2 uppercase tracking-wide">Your Message</label>
                    <textarea 
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      placeholder="Tell us about your requirements..."
                      className={`w-full px-5 py-3.5 rounded-xl bg-surface-container-low border ${errors.message ? 'border-red-500' : 'border-outline-variant/20'} focus:outline-none focus:ring-2 focus:ring-secondary/50 transition-all font-body resize-none text-sm md:text-base`}
                    ></textarea>
                    {errors.message && <p className="text-red-500 text-[10px] font-bold mt-1">{errors.message}</p>}
                  </div>

                  <button 
                    disabled={status === "submitting"}
                    className="w-full bg-secondary text-white font-headline font-bold py-4 md:py-5 px-8 rounded-xl shadow-lg hover:bg-secondary-container hover:shadow-xl transition-all active:scale-[0.98] flex items-center justify-center gap-3 disabled:opacity-70 disabled:cursor-not-allowed group text-sm md:text-base"
                  >
                    {status === "submitting" ? (
                      <>
                        Processing...
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                      </>
                    ) : (
                      <>
                        Send Message
                        <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">send</span>
                      </>
                    )}
                  </button>
                </form>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Full Width Map */}
      <motion.div
         initial={{ opacity: 0, y: 20 }}
         whileInView={{ opacity: 1, y: 0 }}
         viewport={{ once: true }}
         className="mt-20 h-[300px] md:h-[500px] rounded-[1.5rem] md:rounded-[3rem] overflow-hidden shadow-2xl relative border-4 md:border-8 border-white"
      >
         <iframe
            title="MetroClean Google Map"
            width="100%"
            height="100%"
            frameBorder="0"
            style={{ border: 0 }}
            src="https://maps.google.com/maps?q=C-14,Dhumaspur%20Industrial%20Area,Sector-66,Gurugram,Haryana%20122101&amp;t=&amp;z=15&amp;ie=UTF8&amp;iwloc=&amp;output=embed"
            allowFullScreen
          ></iframe>
      </motion.div>
    </div>
  );
};
