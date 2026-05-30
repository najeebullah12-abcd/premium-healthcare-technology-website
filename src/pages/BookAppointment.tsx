import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ArrowLeft, Clock, CheckCircle2, Stethoscope, Brain, Smartphone, Activity } from 'lucide-react';

const services = [
  { id: 'digital-rehab', icon: Brain, title: 'Digital Rehabilitation', desc: 'AI-powered recovery program assessment', duration: '60 min', color: '#0F6FFF' },
  { id: 'physical-therapy', icon: Activity, title: 'Physical Therapy', desc: 'Motion analysis & therapy planning', duration: '45 min', color: '#00D1B2' },
  { id: 'telehealth', icon: Smartphone, title: 'Telehealth Consultation', desc: 'Remote consultation with a specialist', duration: '30 min', color: '#7C3AED' },
  { id: 'general', icon: Stethoscope, title: 'General Consultation', desc: 'Platform overview & care planning', duration: '30 min', color: '#D97706' },
];

const timeSlots = ['8:00 AM', '9:00 AM', '10:00 AM', '11:00 AM', '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM'];

const getDaysInMonth = (year: number, month: number) => {
  const days = [];
  const firstDay = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  for (let i = 0; i < firstDay; i++) days.push(null);
  for (let i = 1; i <= daysInMonth; i++) days.push(i);
  return days;
};

const MONTHS = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

export default function BookAppointment() {
  const [step, setStep] = useState(1);
  const [selectedService, setSelectedService] = useState('');
  const [selectedDate, setSelectedDate] = useState<number | null>(null);
  const [selectedTime, setSelectedTime] = useState('');
  const [calMonth, setCalMonth] = useState(new Date().getMonth());
  const [calYear, setCalYear] = useState(new Date().getFullYear());
  const [form, setForm] = useState({ firstName: '', lastName: '', email: '', phone: '', dob: '', notes: '' });
  const [confirmed, setConfirmed] = useState(false);

  const days = getDaysInMonth(calYear, calMonth);
  const today = new Date().getDate();
  const thisMonth = new Date().getMonth();
  const thisYear = new Date().getFullYear();

  const selectedServiceObj = services.find((s) => s.id === selectedService);

  const steps = [
    { num: 1, label: 'Service' },
    { num: 2, label: 'Date & Time' },
    { num: 3, label: 'Your Info' },
    { num: 4, label: 'Confirm' },
  ];

  const handleSubmit = () => {
    setConfirmed(true);
  };

  if (confirmed) {
    return (
      <div className="page-transition min-h-screen bg-[#F8FAFC] flex items-center justify-center py-32">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-white rounded-3xl p-16 max-w-lg w-full mx-4 text-center shadow-xl border border-gray-100"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: 'spring' }}
            className="w-20 h-20 rounded-full bg-gradient-to-br from-green-400 to-emerald-500 flex items-center justify-center mx-auto mb-8"
          >
            <CheckCircle2 size={40} className="text-white" />
          </motion.div>
          <h2 className="text-3xl font-black text-[#0B1F3A] mb-3">Appointment Confirmed!</h2>
          <p className="text-gray-500 leading-relaxed mb-6">
            Your {selectedServiceObj?.title} appointment has been scheduled for{' '}
            <strong>{MONTHS[calMonth]} {selectedDate}, {calYear}</strong> at{' '}
            <strong>{selectedTime}</strong>.
          </p>
          <div className="bg-[#F8FAFC] rounded-2xl p-5 mb-8 text-left">
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-400">Patient</span>
                <span className="font-medium text-[#0B1F3A]">{form.firstName} {form.lastName}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Service</span>
                <span className="font-medium text-[#0B1F3A]">{selectedServiceObj?.title}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Date</span>
                <span className="font-medium text-[#0B1F3A]">{MONTHS[calMonth]} {selectedDate}, {calYear}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Time</span>
                <span className="font-medium text-[#0B1F3A]">{selectedTime} PST</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Duration</span>
                <span className="font-medium text-[#0B1F3A]">{selectedServiceObj?.duration}</span>
              </div>
            </div>
          </div>
          <p className="text-gray-400 text-sm">
            A confirmation has been sent to <strong>{form.email}</strong>. We look forward to seeing you!
          </p>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="page-transition">
      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-[#0B1F3A] overflow-hidden">
        <div className="absolute inset-0 mesh-bg" />
        <div className="container-custom relative z-10 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <p className="section-eyebrow justify-center mb-4" style={{ color: '#00D1B2' }}>Book Appointment</p>
            <h1 className="text-5xl md:text-6xl font-black text-white tracking-tight mb-4">
              Your Recovery <span className="text-gradient">Starts Here</span>
            </h1>
            <p className="text-white/60 text-lg max-w-lg mx-auto">
              Schedule your consultation in minutes. Our team will review your needs and connect you with the right specialist.
            </p>
          </motion.div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-[#F8FAFC] to-transparent" />
      </section>

      <section className="section-padding bg-[#F8FAFC]">
        <div className="container-custom max-w-3xl">
          {/* Step Indicators */}
          <div className="flex items-center justify-center gap-2 mb-12 flex-wrap">
            {steps.map((s, i) => (
              <div key={s.num} className="flex items-center gap-2">
                <div
                  className={`step-indicator ${step === s.num ? 'active' : step > s.num ? 'completed' : 'pending'}`}
                >
                  <span className={`w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 ${
                    step > s.num ? 'bg-[#00D1B2]/20 text-[#00D1B2]' : step === s.num ? 'bg-white/20' : 'bg-gray-200/50'
                  }`}>
                    {step > s.num ? '✓' : s.num}
                  </span>
                  {s.label}
                </div>
                {i < steps.length - 1 && (
                  <div className={`w-8 h-0.5 ${step > s.num ? 'bg-[#00D1B2]' : 'bg-gray-200'} transition-colors`} />
                )}
              </div>
            ))}
          </div>

          <AnimatePresence mode="wait">
            {/* Step 1: Service Selection */}
            {step === 1 && (
              <motion.div
                key="step1"
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -30 }}
                transition={{ duration: 0.3 }}
              >
                <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm">
                  <h2 className="text-2xl font-bold text-[#0B1F3A] mb-2">Select a Service</h2>
                  <p className="text-gray-400 text-sm mb-6">Choose the type of consultation you're looking for</p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {services.map((svc) => (
                      <button
                        key={svc.id}
                        onClick={() => setSelectedService(svc.id)}
                        className={`p-5 rounded-2xl border-2 text-left transition-all ${
                          selectedService === svc.id
                            ? 'border-[#0F6FFF] bg-blue-50/50'
                            : 'border-gray-100 hover:border-gray-300 bg-gray-50/50'
                        }`}
                      >
                        <div className="flex items-start gap-3">
                          <div
                            className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                            style={{ background: `${svc.color}15` }}
                          >
                            <svc.icon size={18} style={{ color: svc.color }} />
                          </div>
                          <div>
                            <p className="font-semibold text-[#0B1F3A] text-sm">{svc.title}</p>
                            <p className="text-gray-400 text-xs mt-0.5">{svc.desc}</p>
                            <div className="flex items-center gap-1 mt-2">
                              <Clock size={10} className="text-gray-300" />
                              <span className="text-gray-300 text-xs">{svc.duration}</span>
                            </div>
                          </div>
                          {selectedService === svc.id && (
                            <CheckCircle2 size={18} className="text-[#0F6FFF] ml-auto flex-shrink-0" />
                          )}
                        </div>
                      </button>
                    ))}
                  </div>
                  <div className="mt-6 flex justify-end">
                    <button
                      onClick={() => setStep(2)}
                      disabled={!selectedService}
                      className="btn-primary disabled:opacity-40 disabled:cursor-not-allowed"
                    >
                      Continue
                      <ArrowRight size={18} />
                    </button>
                  </div>
                </div>
              </motion.div>
            )}

            {/* Step 2: Date & Time */}
            {step === 2 && (
              <motion.div
                key="step2"
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -30 }}
                transition={{ duration: 0.3 }}
              >
                <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm">
                  <h2 className="text-2xl font-bold text-[#0B1F3A] mb-2">Choose Date & Time</h2>
                  <p className="text-gray-400 text-sm mb-6">Select your preferred appointment slot</p>

                  {/* Calendar */}
                  <div className="mb-6">
                    <div className="flex items-center justify-between mb-4">
                      <button
                        onClick={() => {
                          if (calMonth === 0) { setCalMonth(11); setCalYear(calYear - 1); }
                          else setCalMonth(calMonth - 1);
                        }}
                        className="p-2 rounded-xl hover:bg-gray-100 text-gray-400 hover:text-gray-700 transition-colors"
                      >‹</button>
                      <span className="font-semibold text-[#0B1F3A]">{MONTHS[calMonth]} {calYear}</span>
                      <button
                        onClick={() => {
                          if (calMonth === 11) { setCalMonth(0); setCalYear(calYear + 1); }
                          else setCalMonth(calMonth + 1);
                        }}
                        className="p-2 rounded-xl hover:bg-gray-100 text-gray-400 hover:text-gray-700 transition-colors"
                      >›</button>
                    </div>
                    <div className="grid grid-cols-7 gap-1 mb-2">
                      {['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'].map((d) => (
                        <div key={d} className="text-center text-xs font-semibold text-gray-400 py-2">{d}</div>
                      ))}
                    </div>
                    <div className="grid grid-cols-7 gap-1">
                      {days.map((day, i) => {
                        const isPast = day && (calYear < thisYear || (calYear === thisYear && calMonth < thisMonth) || (calYear === thisYear && calMonth === thisMonth && day < today));
                        const isSelected = day === selectedDate;
                        const isWeekend = [0, 6].includes((i) % 7);
                        return (
                          <button
                            key={i}
                            disabled={!day || !!isPast || isWeekend}
                            onClick={() => day && setSelectedDate(day)}
                            className={`p-2 rounded-xl text-sm transition-all ${
                              !day ? 'invisible' :
                              isSelected ? 'bg-[#0F6FFF] text-white font-bold' :
                              isPast || isWeekend ? 'text-gray-200 cursor-not-allowed' :
                              'hover:bg-blue-50 text-gray-700 hover:text-[#0F6FFF] cursor-pointer'
                            }`}
                          >
                            {day}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Time Slots */}
                  {selectedDate && (
                    <div>
                      <p className="font-medium text-[#0B1F3A] text-sm mb-3">Available Times for {MONTHS[calMonth]} {selectedDate}</p>
                      <div className="grid grid-cols-4 gap-2">
                        {timeSlots.map((time) => (
                          <button
                            key={time}
                            onClick={() => setSelectedTime(time)}
                            className={`time-slot-btn ${selectedTime === time ? 'selected' : ''}`}
                          >
                            {time}
                          </button>
                        ))}
                      </div>
                    </div>
                  )}

                  <div className="mt-6 flex justify-between">
                    <button onClick={() => setStep(1)} className="flex items-center gap-2 text-gray-400 hover:text-gray-600 font-medium text-sm">
                      <ArrowLeft size={16} /> Back
                    </button>
                    <button
                      onClick={() => setStep(3)}
                      disabled={!selectedDate || !selectedTime}
                      className="btn-primary disabled:opacity-40 disabled:cursor-not-allowed"
                    >
                      Continue
                      <ArrowRight size={18} />
                    </button>
                  </div>
                </div>
              </motion.div>
            )}

            {/* Step 3: Patient Info */}
            {step === 3 && (
              <motion.div
                key="step3"
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -30 }}
                transition={{ duration: 0.3 }}
              >
                <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm">
                  <h2 className="text-2xl font-bold text-[#0B1F3A] mb-2">Your Information</h2>
                  <p className="text-gray-400 text-sm mb-6">We'll use this to contact you and prepare for your appointment</p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">First Name *</label>
                      <input type="text" required placeholder="John" className="input-field" value={form.firstName} onChange={(e) => setForm({ ...form, firstName: e.target.value })} />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Last Name *</label>
                      <input type="text" required placeholder="Smith" className="input-field" value={form.lastName} onChange={(e) => setForm({ ...form, lastName: e.target.value })} />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Email Address *</label>
                      <input type="email" required placeholder="john@email.com" className="input-field" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number *</label>
                      <input type="tel" required placeholder="+1 (619) 000-0000" className="input-field" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Date of Birth</label>
                      <input type="date" className="input-field" value={form.dob} onChange={(e) => setForm({ ...form, dob: e.target.value })} />
                    </div>
                  </div>
                  <div className="mb-6">
                    <label className="block text-sm font-medium text-gray-700 mb-2">Additional Notes (Optional)</label>
                    <textarea rows={3} placeholder="Tell us about your condition, what you'd like to discuss, or any special needs..." className="input-field resize-none" value={form.notes} onChange={(e) => setForm({ ...form, notes: e.target.value })} />
                  </div>
                  <div className="mt-6 flex justify-between">
                    <button onClick={() => setStep(2)} className="flex items-center gap-2 text-gray-400 hover:text-gray-600 font-medium text-sm">
                      <ArrowLeft size={16} /> Back
                    </button>
                    <button
                      onClick={() => setStep(4)}
                      disabled={!form.firstName || !form.lastName || !form.email || !form.phone}
                      className="btn-primary disabled:opacity-40 disabled:cursor-not-allowed"
                    >
                      Review Booking
                      <ArrowRight size={18} />
                    </button>
                  </div>
                </div>
              </motion.div>
            )}

            {/* Step 4: Confirmation */}
            {step === 4 && (
              <motion.div
                key="step4"
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -30 }}
                transition={{ duration: 0.3 }}
              >
                <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm">
                  <h2 className="text-2xl font-bold text-[#0B1F3A] mb-2">Review & Confirm</h2>
                  <p className="text-gray-400 text-sm mb-6">Please review your appointment details before confirming</p>

                  <div className="bg-[#F8FAFC] rounded-2xl p-6 mb-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                      {[
                        { label: 'Service', value: selectedServiceObj?.title },
                        { label: 'Duration', value: selectedServiceObj?.duration },
                        { label: 'Date', value: `${MONTHS[calMonth]} ${selectedDate}, ${calYear}` },
                        { label: 'Time', value: `${selectedTime} PST` },
                        { label: 'Patient', value: `${form.firstName} ${form.lastName}` },
                        { label: 'Contact', value: form.email },
                      ].map((item) => (
                        <div key={item.label}>
                          <p className="text-gray-400 text-xs uppercase tracking-widest font-medium mb-1">{item.label}</p>
                          <p className="font-semibold text-[#0B1F3A]">{item.value}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-4 bg-blue-50 rounded-xl mb-6">
                    <CheckCircle2 size={16} className="text-[#0F6FFF] mt-0.5 flex-shrink-0" />
                    <p className="text-sm text-[#0B1F3A]/70">
                      A confirmation email will be sent to <strong>{form.email}</strong>. 
                      You'll receive a reminder 24 hours before your appointment.
                    </p>
                  </div>

                  <div className="flex justify-between">
                    <button onClick={() => setStep(3)} className="flex items-center gap-2 text-gray-400 hover:text-gray-600 font-medium text-sm">
                      <ArrowLeft size={16} /> Back
                    </button>
                    <button onClick={handleSubmit} className="btn-primary px-10">
                      Confirm Appointment
                      <CheckCircle2 size={18} />
                    </button>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Info panel */}
          <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { icon: '🔒', title: 'HIPAA Secure', desc: 'All data encrypted & protected' },
              { icon: '📱', title: 'Telehealth Ready', desc: 'Join from any device' },
              { icon: '✅', title: 'Free Cancellation', desc: 'Up to 24 hours before' },
            ].map((item) => (
              <div key={item.title} className="bg-white rounded-xl p-4 border border-gray-100 flex items-center gap-3">
                <span className="text-2xl">{item.icon}</span>
                <div>
                  <p className="font-semibold text-[#0B1F3A] text-sm">{item.title}</p>
                  <p className="text-gray-400 text-xs">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
