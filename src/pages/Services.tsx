import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Brain, Activity, Smartphone, Heart, TrendingUp, Zap, CheckCircle2, ChevronRight } from 'lucide-react';

const services = [
  {
    id: 'digital-rehab',
    icon: Brain,
    title: 'Digital Rehabilitation',
    tagline: 'AI-Powered Recovery Pathways',
    description: 'Our flagship digital rehabilitation platform uses advanced machine learning to create fully personalized recovery programs. Every exercise, every milestone, every adjustment is driven by real-time patient data and clinical best practices.',
    color: '#0F6FFF',
    benefits: [
      'Personalized AI recovery plans updated daily',
      'Real-time progress tracking & analytics',
      'Video-guided exercise library with 2,000+ movements',
      'Clinician dashboard with patient insights',
      'Automated adherence monitoring & alerts',
      'Outcome prediction modeling',
    ],
    outcomes: [
      { metric: '40%', label: 'Faster Recovery' },
      { metric: '85%', label: 'Program Adherence' },
      { metric: '95%', label: 'Patient Satisfaction' },
    ],
    img: '/images/services-rehabilitation.jpg',
  },
  {
    id: 'physical-therapy',
    icon: Activity,
    title: 'Physical Therapy Solutions',
    tagline: 'Advanced Motion Intelligence',
    description: 'Revolutionary physical therapy tools powered by computer vision and biomechanical analysis. Our system provides real-time feedback on movement quality, compensatory patterns, and injury risk — giving therapists unprecedented clinical insight.',
    color: '#00D1B2',
    benefits: [
      'Computer vision motion capture (no wearables)',
      'Real-time biomechanical feedback',
      'Compensatory movement detection',
      'Digital home exercise programs (HEP)',
      'Gait analysis & reporting',
      'Integration with major EMR/EHR systems',
    ],
    outcomes: [
      { metric: '3x', label: 'More Patient Data' },
      { metric: '60%', label: 'Reduced Revisits' },
      { metric: '92%', label: 'Clinician Adoption' },
    ],
    img: '/images/tech-dashboard.jpg',
  },
  {
    id: 'telehealth',
    icon: Smartphone,
    title: 'Telehealth Programs',
    tagline: 'Care Without Boundaries',
    description: 'A complete telehealth ecosystem purpose-built for rehabilitation. Connect patients with world-class specialists instantly, run live therapy sessions with built-in motion analysis, and manage entire care teams from a single intuitive platform.',
    color: '#7C3AED',
    benefits: [
      'HD video consultations with motion overlay',
      'Real-time remote exercise supervision',
      'Secure HIPAA-compliant messaging',
      'Integrated appointment scheduling',
      'Multi-provider care coordination',
      'Patient app for iOS & Android',
    ],
    outcomes: [
      { metric: '70%', label: 'Cost Reduction' },
      { metric: '4x', label: 'Patient Access' },
      { metric: '88%', label: 'No-show Reduction' },
    ],
    img: '/images/about-bg.jpg',
  },
  {
    id: 'monitoring',
    icon: Heart,
    title: 'Patient Monitoring',
    tagline: '24/7 Continuous Health Intelligence',
    description: 'Comprehensive remote patient monitoring that tracks vital signs, activity levels, pain scores, and recovery metrics around the clock. Our AI detects concerning patterns and alerts care teams before complications escalate.',
    color: '#DC2626',
    benefits: [
      'Continuous biometric monitoring',
      'AI-powered complication prediction',
      'Automated clinical alert system',
      'Family & caregiver portal access',
      'Integration with wearables & IoT devices',
      'Customizable monitoring protocols',
    ],
    outcomes: [
      { metric: '65%', label: 'Reduced Hospitalizations' },
      { metric: '99%', label: 'Alert Accuracy' },
      { metric: '48hr', label: 'Earlier Intervention' },
    ],
    img: '/images/hero-bg.jpg',
  },
  {
    id: 'wellness',
    icon: TrendingUp,
    title: 'Wellness Programs',
    tagline: 'Optimizing Long-term Health',
    description: 'Beyond recovery, our wellness programs keep patients healthy and engaged for life. Personalized fitness plans, nutrition guidance, mental health support, and preventive care strategies — all delivered through our intelligent health platform.',
    color: '#059669',
    benefits: [
      'Personalized fitness & nutrition plans',
      'Mental health & stress management tools',
      'Sleep tracking & optimization',
      'Preventive care reminders',
      'Community wellness challenges',
      'Health coaching integration',
    ],
    outcomes: [
      { metric: '55%', label: 'Improved Wellness Scores' },
      { metric: '3x', label: 'Long-term Engagement' },
      { metric: '40%', label: 'Re-injury Prevention' },
    ],
    img: '/images/patient-success.jpg',
  },
  {
    id: 'recovery',
    icon: Zap,
    title: 'Recovery Management',
    tagline: 'Intelligent Recovery Orchestration',
    description: 'End-to-end recovery management that coordinates all aspects of a patient\'s healing journey. From surgical discharge to return-to-sport, our platform intelligently orchestrates care across specialties, providers, and settings.',
    color: '#D97706',
    benefits: [
      'Care pathway automation & coordination',
      'Multi-disciplinary team collaboration',
      'Patient-reported outcome tracking',
      'Goal-setting & milestone celebration',
      'Return-to-activity progression protocols',
      'Post-discharge follow-up automation',
    ],
    outcomes: [
      { metric: '45%', label: 'Faster RTW/RTS' },
      { metric: '78%', label: 'Goal Achievement' },
      { metric: '90%', label: 'Care Continuity' },
    ],
    img: '/images/services-rehabilitation.jpg',
  },
];

export default function Services() {
  return (
    <div className="page-transition">
      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-[#0B1F3A] overflow-hidden">
        <div className="absolute inset-0 mesh-bg" />
        <div className="absolute inset-0 grid-pattern opacity-20" />
        <div className="container-custom relative z-10 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <p className="section-eyebrow justify-center mb-4" style={{ color: '#00D1B2' }}>Our Solutions</p>
            <h1 className="text-5xl md:text-6xl font-black text-white tracking-tight mb-6">
              Healthcare Solutions <span className="text-gradient">Built for Impact</span>
            </h1>
            <p className="text-white/60 text-xl max-w-2xl mx-auto leading-relaxed mb-10">
              Six comprehensive programs designed to transform every aspect of the patient recovery journey — from diagnosis to lifelong wellness.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {services.map((s) => (
                <a
                  key={s.id}
                  href={`#${s.id}`}
                  className="px-4 py-2 rounded-full text-sm font-medium text-white/70 hover:text-white border border-white/10 hover:border-white/30 transition-all"
                >
                  {s.title}
                </a>
              ))}
            </div>
          </motion.div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-[#F8FAFC] to-transparent" />
      </section>

      {/* Services Detail */}
      {services.map((service, i) => (
        <section
          key={service.id}
          id={service.id}
          className={`section-padding ${i % 2 === 0 ? 'bg-[#F8FAFC]' : 'bg-white'}`}
        >
          <div className="container-custom">
            <div className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center ${i % 2 !== 0 ? 'lg:grid-flow-dense' : ''}`}>
              {/* Content */}
              <motion.div
                initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className={i % 2 !== 0 ? 'lg:col-start-2' : ''}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center"
                    style={{ background: `${service.color}20`, border: `1px solid ${service.color}40` }}
                  >
                    <service.icon size={22} style={{ color: service.color }} />
                  </div>
                  <span className="tag-badge" style={{ background: `${service.color}15`, color: service.color }}>
                    {service.tagline}
                  </span>
                </div>

                <h2 className="text-4xl font-black text-[#0B1F3A] tracking-tight mb-4">{service.title}</h2>
                <p className="text-gray-600 text-lg leading-relaxed mb-8">{service.description}</p>

                {/* Outcomes */}
                <div className="flex gap-6 mb-8 p-6 bg-white rounded-2xl border border-gray-100 shadow-sm">
                  {service.outcomes.map((outcome) => (
                    <div key={outcome.label} className="text-center flex-1">
                      <div className="text-3xl font-black mb-1" style={{ color: service.color }}>
                        {outcome.metric}
                      </div>
                      <div className="text-gray-500 text-xs font-medium">{outcome.label}</div>
                    </div>
                  ))}
                </div>

                {/* Benefits */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                  {service.benefits.map((benefit) => (
                    <div key={benefit} className="flex items-start gap-2.5">
                      <CheckCircle2 size={16} className="mt-0.5 flex-shrink-0" style={{ color: service.color }} />
                      <span className="text-sm text-gray-600">{benefit}</span>
                    </div>
                  ))}
                </div>

                <div className="flex gap-4">
                  <Link to="/book-appointment">
                    <button
                      className="flex items-center gap-2 font-semibold px-6 py-3 rounded-full text-sm text-white transition-all hover:-translate-y-1"
                      style={{ background: `linear-gradient(135deg, ${service.color}, ${service.color}cc)` }}
                    >
                      Get Started
                      <ArrowRight size={16} />
                    </button>
                  </Link>
                  <Link to="/contact">
                    <button className="flex items-center gap-2 font-semibold px-6 py-3 rounded-full text-sm text-gray-700 border border-gray-200 hover:border-gray-400 transition-all">
                      Learn More
                      <ChevronRight size={16} />
                    </button>
                  </Link>
                </div>
              </motion.div>

              {/* Image */}
              <motion.div
                initial={{ opacity: 0, x: i % 2 === 0 ? 40 : -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className={`relative ${i % 2 !== 0 ? 'lg:col-start-1 lg:row-start-1' : ''}`}
              >
                <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                  <img src={service.img} alt={service.title} className="w-full h-80 object-cover" />
                  <div
                    className="absolute inset-0"
                    style={{ background: `linear-gradient(135deg, ${service.color}40 0%, transparent 60%)` }}
                  />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <div className="glass rounded-xl p-4">
                      <div className="flex items-center gap-3">
                        <div
                          className="w-10 h-10 rounded-xl flex items-center justify-center"
                          style={{ background: `${service.color}30` }}
                        >
                          <service.icon size={18} style={{ color: service.color }} />
                        </div>
                        <div>
                          <p className="text-white font-semibold text-sm">{service.title}</p>
                          <p className="text-white/60 text-xs">{service.tagline}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Decorative element */}
                <div
                  className="absolute -z-10 -bottom-6 -right-6 w-48 h-48 rounded-full blur-3xl opacity-30"
                  style={{ background: service.color }}
                />
              </motion.div>
            </div>
          </div>
        </section>
      ))}

      {/* CTA */}
      <section className="section-padding bg-[#0B1F3A] relative overflow-hidden">
        <div className="absolute inset-0 mesh-bg" />
        <div className="container-custom relative z-10 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Not Sure Which Solution Is Right for You?
            </h2>
            <p className="text-white/60 text-lg mb-10 max-w-xl mx-auto">
              Our clinical team will assess your needs and recommend the perfect combination of services.
            </p>
            <Link to="/book-appointment">
              <button className="btn-primary px-10 py-4 text-base">
                Book a Free Consultation
                <ArrowRight size={18} />
              </button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
