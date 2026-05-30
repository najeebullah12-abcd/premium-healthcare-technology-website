import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, BarChart3, Shield, Zap, Users, BookOpen, Star, Building2 } from 'lucide-react';

const benefits = [
  {
    icon: BarChart3,
    title: 'Clinical Analytics Dashboard',
    desc: 'Real-time insights across your entire patient panel. Track outcomes, predict complications, and optimize care pathways with AI-powered analytics.',
    color: '#0F6FFF',
  },
  {
    icon: Shield,
    title: 'Compliance & Documentation',
    desc: 'Automated documentation, billing code suggestions, and MIPS/MACRA compliance tracking built directly into your clinical workflow.',
    color: '#059669',
  },
  {
    icon: Zap,
    title: 'EHR Integration',
    desc: 'Native integrations with Epic, Cerner, Athenahealth, and 50+ other systems. No double documentation. No workflow disruption.',
    color: '#D97706',
  },
  {
    icon: Users,
    title: 'Collaborative Care Teams',
    desc: 'Coordinate care across physical therapists, physicians, nurses, and specialists with our unified communication and care management platform.',
    color: '#7C3AED',
  },
  {
    icon: BookOpen,
    title: 'Clinical Decision Support',
    desc: 'AI-generated care recommendations based on the latest clinical evidence, patient history, and outcome data from our 50,000+ patient database.',
    color: '#DC2626',
  },
  {
    icon: Star,
    title: 'Quality Improvement',
    desc: 'Automated quality measure tracking, benchmarking against national standards, and identification of improvement opportunities.',
    color: '#00D1B2',
  },
];

const plans = [
  {
    name: 'Starter',
    tagline: 'For independent practices',
    price: 'Contact Us',
    features: [
      'Up to 50 active patients',
      'Core digital rehabilitation tools',
      'Basic analytics dashboard',
      'Email & chat support',
      'Standard EHR integration',
    ],
    color: '#0F6FFF',
    highlighted: false,
  },
  {
    name: 'Professional',
    tagline: 'For growing clinics',
    price: 'Contact Us',
    features: [
      'Up to 250 active patients',
      'Full rehabilitation suite',
      'Advanced AI analytics',
      'Priority 24/7 support',
      'Full EHR integration',
      'Telehealth module included',
      'Custom care protocols',
    ],
    color: '#00D1B2',
    highlighted: true,
  },
  {
    name: 'Enterprise',
    tagline: 'For health systems',
    price: 'Contact Us',
    features: [
      'Unlimited patients',
      'Complete platform access',
      'Custom AI model training',
      'Dedicated success team',
      'Custom integrations',
      'SLA guarantees',
      'White-label options',
      'Population health tools',
    ],
    color: '#7C3AED',
    highlighted: false,
  },
];

const partnerLogos = [
  'Sharp Healthcare',
  'UC San Diego Health',
  'Scripps Health',
  'Rady Children\'s',
  'Kaiser Permanente',
  'Providence Health',
];

export default function Providers() {
  return (
    <div className="page-transition">
      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-[#0B1F3A] overflow-hidden">
        <div className="absolute inset-0 mesh-bg" />
        <div className="absolute inset-0 grid-pattern opacity-20" />
        <div className="container-custom relative z-10 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <p className="section-eyebrow justify-center mb-4" style={{ color: '#00D1B2' }}>For Healthcare Providers</p>
            <h1 className="text-5xl md:text-6xl font-black text-white tracking-tight mb-6">
              Empower Your Practice with <span className="text-gradient">Intelligent Tools</span>
            </h1>
            <p className="text-white/60 text-xl max-w-2xl mx-auto leading-relaxed mb-10">
              Everything a modern healthcare practice needs to deliver exceptional rehabilitation outcomes — in one powerful, integrated platform.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link to="/book-appointment">
                <button className="btn-primary px-8 py-4">
                  Schedule a Demo
                  <ArrowRight size={18} />
                </button>
              </Link>
              <Link to="/contact">
                <button className="btn-secondary px-8 py-4">
                  Contact Sales
                </button>
              </Link>
            </div>
          </motion.div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-[#F8FAFC] to-transparent" />
      </section>

      {/* Partner Logos */}
      <section className="bg-white py-12 border-b border-gray-100">
        <div className="container-custom">
          <p className="text-center text-gray-400 text-sm font-medium mb-8 uppercase tracking-widest">Trusted by Leading Healthcare Organizations</p>
          <div className="flex flex-wrap justify-center gap-8 md:gap-16">
            {partnerLogos.map((logo, i) => (
              <motion.div
                key={logo}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex items-center gap-2 text-gray-300 hover:text-gray-500 transition-colors"
              >
                <Building2 size={16} />
                <span className="font-semibold text-sm">{logo}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="section-padding bg-[#F8FAFC]">
        <div className="container-custom">
          <div className="text-center mb-16">
            <p className="section-eyebrow justify-center mb-4">Provider Benefits</p>
            <h2 className="text-4xl md:text-5xl font-bold text-[#0B1F3A] tracking-tight mb-5">
              Tools That <span className="text-gradient">Transform Practices</span>
            </h2>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto">
              Designed with clinicians, for clinicians. Every feature is purpose-built to enhance clinical workflow and patient outcomes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((b, i) => (
              <motion.div
                key={b.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white rounded-2xl p-8 border border-gray-100 card-hover group"
              >
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform"
                  style={{ background: `${b.color}15`, border: `1px solid ${b.color}25` }}
                >
                  <b.icon size={24} style={{ color: b.color }} />
                </div>
                <h3 className="text-xl font-bold text-[#0B1F3A] mb-3">{b.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{b.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Plans */}
      <section className="section-padding dark-section mesh-bg">
        <div className="container-custom">
          <div className="text-center mb-16">
            <p className="section-eyebrow justify-center mb-4" style={{ color: '#00D1B2' }}>Partnership Plans</p>
            <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-5">
              Flexible Plans for Every <span className="text-gradient">Practice Size</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {plans.map((plan, i) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className={`rounded-3xl p-8 ${plan.highlighted
                  ? 'bg-white text-[#0B1F3A] shadow-2xl shadow-white/10 scale-105'
                  : 'glass border border-white/10'
                }`}
              >
                {plan.highlighted && (
                  <div className="text-xs font-bold text-[#0F6FFF] uppercase tracking-widest mb-4">Most Popular</div>
                )}
                <h3 className={`text-2xl font-black mb-1 ${plan.highlighted ? 'text-[#0B1F3A]' : 'text-white'}`}>
                  {plan.name}
                </h3>
                <p className={`text-sm mb-6 ${plan.highlighted ? 'text-gray-500' : 'text-white/50'}`}>{plan.tagline}</p>
                <div className={`text-3xl font-black mb-8 ${plan.highlighted ? 'text-[#0F6FFF]' : 'text-white'}`}>
                  {plan.price}
                </div>
                <div className="space-y-3 mb-8">
                  {plan.features.map((f) => (
                    <div key={f} className="flex items-start gap-3">
                      <CheckCircle2
                        size={16}
                        className="mt-0.5 flex-shrink-0"
                        style={{ color: plan.highlighted ? plan.color : 'rgba(255,255,255,0.5)' }}
                      />
                      <span className={`text-sm ${plan.highlighted ? 'text-gray-700' : 'text-white/70'}`}>{f}</span>
                    </div>
                  ))}
                </div>
                <Link to="/contact">
                  <button
                    className={`w-full py-3 rounded-full font-semibold text-sm transition-all hover:-translate-y-1 ${
                      plan.highlighted
                        ? 'bg-gradient-to-r from-[#0F6FFF] to-[#0055CC] text-white shadow-lg shadow-blue-500/30'
                        : 'border border-white/20 text-white hover:bg-white/10'
                    }`}
                  >
                    Get Started
                  </button>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Integration */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
              <p className="section-eyebrow mb-4">Seamless Integration</p>
              <h2 className="text-4xl font-bold text-[#0B1F3A] tracking-tight mb-6">
                Works with Your <span className="text-gradient">Existing Systems</span>
              </h2>
              <p className="text-gray-500 leading-relaxed mb-8">
                No rip-and-replace. No workflow disruption. Reflexion Health integrates seamlessly with the tools your team already uses, bringing AI-powered rehabilitation into your existing clinical workflow.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {['Epic', 'Cerner', 'Athenahealth', 'Allscripts', 'Meditech', 'NextGen'].map((ehr) => (
                  <div key={ehr} className="flex items-center gap-2 bg-[#F8FAFC] rounded-xl p-3 border border-gray-100">
                    <CheckCircle2 size={14} className="text-[#00D1B2]" />
                    <span className="text-sm font-medium text-gray-700">{ehr}</span>
                  </div>
                ))}
              </div>
              <div className="mt-8">
                <Link to="/book-appointment">
                  <button className="btn-dark">
                    See Integration Guide
                    <ArrowRight size={18} />
                  </button>
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-[#0B1F3A] rounded-3xl p-8 border border-white/10"
            >
              <div className="flex items-center gap-2 mb-6">
                <div className="w-3 h-3 rounded-full bg-red-400" />
                <div className="w-3 h-3 rounded-full bg-yellow-400" />
                <div className="w-3 h-3 rounded-full bg-green-400" />
                <span className="text-white/30 text-xs ml-2">Integration Status</span>
              </div>
              <div className="space-y-4">
                {[
                  { name: 'Epic EHR', status: 'Connected', color: 'bg-green-400' },
                  { name: 'Patient Data Sync', status: 'Active — 2,847 records', color: 'bg-green-400' },
                  { name: 'Billing Integration', status: 'Operational', color: 'bg-green-400' },
                  { name: 'Lab Results', status: 'Syncing...', color: 'bg-blue-400' },
                  { name: 'Scheduling API', status: 'Connected', color: 'bg-green-400' },
                ].map((item) => (
                  <div key={item.name} className="glass rounded-xl p-4 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className={`w-2 h-2 rounded-full ${item.color} animate-pulse`} />
                      <span className="text-white/80 text-sm font-medium">{item.name}</span>
                    </div>
                    <span className="text-white/40 text-xs">{item.status}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
