import { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, ArrowRight, CheckCircle2 } from 'lucide-react';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', phone: '', subject: '', message: '', type: 'General Inquiry' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="page-transition">
      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-[#0B1F3A] overflow-hidden">
        <div className="absolute inset-0 mesh-bg" />
        <div className="absolute inset-0 grid-pattern opacity-20" />
        <div className="container-custom relative z-10 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <p className="section-eyebrow justify-center mb-4" style={{ color: '#00D1B2' }}>Get in Touch</p>
            <h1 className="text-5xl md:text-6xl font-black text-white tracking-tight mb-6">
              Let's Start a <span className="text-gradient">Conversation</span>
            </h1>
            <p className="text-white/60 text-xl max-w-2xl mx-auto">
              Whether you're a patient, provider, or partner — we'd love to hear from you.
            </p>
          </motion.div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-[#F8FAFC] to-transparent" />
      </section>

      {/* Contact Section */}
      <section className="section-padding bg-[#F8FAFC]">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Info */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-2"
            >
              <h2 className="text-3xl font-bold text-[#0B1F3A] mb-6">
                Reflexion Health
              </h2>
              <p className="text-gray-500 leading-relaxed mb-8">
                Our team of healthcare technology experts is ready to help you transform patient care. Reach out and we'll get back to you within one business day.
              </p>

              <div className="space-y-5">
                <div className="flex items-start gap-4 p-5 bg-white rounded-2xl border border-gray-100 shadow-sm">
                  <div className="icon-box">
                    <MapPin size={20} className="text-[#0F6FFF]" />
                  </div>
                  <div>
                    <p className="font-semibold text-[#0B1F3A] mb-1">Our Office</p>
                    <p className="text-gray-500 text-sm leading-relaxed">
                      225 Broadway<br />
                      San Diego, CA 92101<br />
                      United States
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-5 bg-white rounded-2xl border border-gray-100 shadow-sm">
                  <div className="icon-box">
                    <Phone size={20} className="text-[#0F6FFF]" />
                  </div>
                  <div>
                    <p className="font-semibold text-[#0B1F3A] mb-1">Phone</p>
                    <a href="tel:+16195504500" className="text-[#0F6FFF] font-semibold hover:underline">
                      +1 619-550-4500
                    </a>
                    <p className="text-gray-400 text-xs mt-1">Mon-Fri, 8AM - 6PM PST</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-5 bg-white rounded-2xl border border-gray-100 shadow-sm">
                  <div className="icon-box">
                    <Mail size={20} className="text-[#0F6FFF]" />
                  </div>
                  <div>
                    <p className="font-semibold text-[#0B1F3A] mb-1">Email</p>
                    <a href="mailto:info@reflexionhealth.com" className="text-[#0F6FFF] hover:underline text-sm">
                      info@reflexionhealth.com
                    </a>
                    <br />
                    <a href="mailto:providers@reflexionhealth.com" className="text-gray-400 text-sm hover:text-[#0F6FFF]">
                      providers@reflexionhealth.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-5 bg-white rounded-2xl border border-gray-100 shadow-sm">
                  <div className="icon-box">
                    <Clock size={20} className="text-[#0F6FFF]" />
                  </div>
                  <div>
                    <p className="font-semibold text-[#0B1F3A] mb-1">Office Hours</p>
                    <p className="text-gray-500 text-sm">Monday – Friday: 8:00 AM – 6:00 PM PST</p>
                    <p className="text-gray-500 text-sm">Saturday: 9:00 AM – 2:00 PM PST</p>
                    <p className="text-gray-400 text-xs mt-1">After-hours support available for existing clients</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-3"
            >
              {submitted ? (
                <div className="bg-white rounded-3xl p-12 border border-gray-100 shadow-sm text-center h-full flex flex-col items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-6">
                    <CheckCircle2 size={32} className="text-green-500" />
                  </div>
                  <h3 className="text-2xl font-bold text-[#0B1F3A] mb-3">Message Sent!</h3>
                  <p className="text-gray-500 max-w-sm leading-relaxed">
                    Thank you for reaching out. Our team will get back to you within one business day.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm">
                  <h3 className="text-2xl font-bold text-[#0B1F3A] mb-6">Send Us a Message</h3>

                  {/* Type selection */}
                  <div className="grid grid-cols-3 gap-2 mb-6">
                    {['General Inquiry', 'Provider Info', 'Book Demo'].map((t) => (
                      <button
                        key={t}
                        type="button"
                        onClick={() => setForm({ ...form, type: t })}
                        className={`px-3 py-2.5 rounded-xl text-sm font-medium transition-all ${
                          form.type === t
                            ? 'bg-[#0F6FFF] text-white'
                            : 'bg-gray-100 text-gray-500 hover:bg-gray-200'
                        }`}
                      >
                        {t}
                      </button>
                    ))}
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Full Name *</label>
                      <input
                        type="text"
                        required
                        placeholder="Dr. John Smith"
                        className="input-field"
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Email Address *</label>
                      <input
                        type="email"
                        required
                        placeholder="john@hospital.com"
                        className="input-field"
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                      <input
                        type="tel"
                        placeholder="+1 (619) 000-0000"
                        className="input-field"
                        value={form.phone}
                        onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Subject *</label>
                      <input
                        type="text"
                        required
                        placeholder="How can we help?"
                        className="input-field"
                        value={form.subject}
                        onChange={(e) => setForm({ ...form, subject: e.target.value })}
                      />
                    </div>
                  </div>

                  <div className="mb-6">
                    <label className="block text-sm font-medium text-gray-700 mb-2">Message *</label>
                    <textarea
                      required
                      rows={5}
                      placeholder="Tell us about your needs, your practice, or what you'd like to accomplish with Reflexion Health..."
                      className="input-field resize-none"
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                    />
                  </div>

                  <button type="submit" className="btn-primary w-full justify-center py-4 text-base">
                    Send Message
                    <ArrowRight size={18} />
                  </button>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="bg-white pb-20">
        <div className="container-custom">
          <div className="map-container">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3356.8124386!2d-117.1610935!3d32.7157508!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80d9535a7e6d3d1d%3A0x7f9c8b0c5c0c5c0c!2s225%20Broadway%2C%20San%20Diego%2C%20CA%2092101!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Reflexion Health Office Location"
            />
          </div>
          <div className="flex items-center justify-center gap-3 mt-6">
            <MapPin size={16} className="text-[#0F6FFF]" />
            <span className="text-gray-500 text-sm">225 Broadway, San Diego, CA 92101, United States</span>
            <a
              href="https://maps.google.com/maps?q=225+Broadway+San+Diego+CA+92101"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#0F6FFF] text-sm font-medium hover:underline flex items-center gap-1"
            >
              Get Directions <ArrowRight size={14} />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
