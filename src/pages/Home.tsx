import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
  ArrowRight, Shield, Zap, Users, TrendingUp, Star,
  Activity, Brain, Smartphone, Heart, ChevronRight, Award
} from 'lucide-react';
import AnimatedCounter from '../components/AnimatedCounter';


const stats = [
  { value: 50000, suffix: '+', label: 'Patients Supported', icon: Users },
  { value: 95, suffix: '%', label: 'Patient Satisfaction', icon: Star },
  { value: 500, suffix: '+', label: 'Healthcare Providers', icon: Shield },
  { value: 20, suffix: '+', label: 'Years Combined Experience', icon: Award },
];

const services = [
  {
    icon: Brain,
    title: 'Digital Rehabilitation',
    description: 'AI-powered recovery programs tailored to each patient\'s unique needs and recovery goals.',
    color: '#0F6FFF',
    gradient: 'from-blue-500/10 to-blue-600/5',
  },
  {
    icon: Activity,
    title: 'Physical Therapy Solutions',
    description: 'Advanced motion tracking and real-time feedback systems for optimal therapy outcomes.',
    color: '#00D1B2',
    gradient: 'from-teal-500/10 to-teal-600/5',
  },
  {
    icon: Smartphone,
    title: 'Telehealth Programs',
    description: 'Connect patients with world-class specialists from the comfort of their home.',
    color: '#7C3AED',
    gradient: 'from-purple-500/10 to-purple-600/5',
  },
  {
    icon: Heart,
    title: 'Patient Monitoring',
    description: 'Continuous 24/7 health monitoring with intelligent alerts and personalized insights.',
    color: '#DC2626',
    gradient: 'from-red-500/10 to-red-600/5',
  },
  {
    icon: TrendingUp,
    title: 'Wellness Programs',
    description: 'Comprehensive wellness initiatives designed for long-term health optimization.',
    color: '#059669',
    gradient: 'from-green-500/10 to-green-600/5',
  },
  {
    icon: Zap,
    title: 'Recovery Management',
    description: 'Intelligent recovery protocols that adapt in real-time to patient progress.',
    color: '#D97706',
    gradient: 'from-yellow-500/10 to-yellow-600/5',
  },
];

const testimonials = [
  {
    quote: "Reflexion Health transformed how we deliver rehabilitation services. Patient outcomes improved by 40% in just 6 months.",
    name: "Dr. Sarah Chen",
    role: "Chief of Rehabilitation, UCSD Medical Center",
    rating: 5,
  },
  {
    quote: "The AI-powered monitoring system is revolutionary. We can now predict and prevent complications before they occur.",
    name: "Michael Torres",
    role: "Physical Therapy Director, Sharp Healthcare",
    rating: 5,
  },
  {
    quote: "Our patients love the telehealth platform. Engagement rates are up 60% compared to traditional methods.",
    name: "Dr. Priya Patel",
    role: "Telehealth Specialist, Scripps Health",
    rating: 5,
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' as const } },
};

const staggerChildren = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

function SectionHeader({ eyebrow, title, subtitle, light = false }: {
  eyebrow: string; title: React.ReactNode; subtitle?: string; light?: boolean;
}) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });
  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={staggerChildren}
      className="text-center mb-16"
    >
      <motion.p variants={fadeUp} className="section-eyebrow justify-center mb-4" style={{ color: light ? '#00D1B2' : '#0F6FFF' }}>
        {eyebrow}
      </motion.p>
      <motion.h2 variants={fadeUp} className={`text-4xl md:text-5xl font-bold tracking-tight mb-5 ${light ? 'text-white' : 'text-[#0B1F3A]'}`}>
        {title}
      </motion.h2>
      {subtitle && (
        <motion.p variants={fadeUp} className={`text-lg max-w-2xl mx-auto leading-relaxed ${light ? 'text-white/60' : 'text-gray-500'}`}>
          {subtitle}
        </motion.p>
      )}
    </motion.div>
  );
}

export default function Home() {
  return (
    <div className="page-transition">
      {/* HERO */}
      <section className="relative overflow-hidden bg-[#F2E7D0]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(15,111,255,0.18),transparent_28%),radial-gradient(circle_at_bottom_right,rgba(255,182,72,0.16),transparent_30%)]" />
        <div className="absolute inset-0 noise-overlay opacity-10 pointer-events-none" />

        <div className="container-custom relative z-10 min-h-screen flex items-center py-24">
          <div className="grid w-full gap-12 lg:grid-cols-[1.05fr_0.95fr] items-center">
            <div className="max-w-2xl">
              <motion.div
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                className="inline-flex items-center gap-3 rounded-full border border-[#B89A6F]/30 bg-white/80 px-4 py-2 text-sm font-semibold text-[#4B4028] shadow-sm"
              >
                Reflexion Health
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                className="mt-8 text-5xl md:text-6xl lg:text-7xl font-black tracking-tight leading-[0.98] text-[#1C1A14]"
              >
                Health,
                <br />
                Proven Results
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.25 }}
                className="mt-6 text-lg md:text-xl leading-9 text-[#4A473F] max-w-xl"
              >
                Reflexion Health delivers personalized patient engagement that improves outcomes and reduces costs. Trusted by leading healthcare systems nationwide.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.4 }}
                className="mt-10 flex flex-wrap items-center gap-4"
              >
                <Link to="/book-appointment">
                  <button className="btn-primary text-base px-8 py-4">
                    Schedule a Demo
                    <ArrowRight size={18} />
                  </button>
                </Link>
                <Link to="/services">
                  <button className="btn-secondary text-base px-8 py-4">
                    Explore Solutions
                  </button>
                </Link>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.55 }}
                className="mt-10 flex flex-wrap gap-3"
              >
                {['Outcomes', 'Seamless EHR Integration', 'Cost Reduction & Efficiency', 'Data-Driven Insights', 'Enhanced Patient Engagement'].map((item) => (
                  <div key={item} className="rounded-full border border-[#B89A6F]/30 bg-white/80 px-4 py-2 text-sm font-medium text-[#4A473F] shadow-sm">
                    {item}
                  </div>
                ))}
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="rounded-[42px] overflow-hidden shadow-[0_60px_120px_rgba(45,35,25,0.15)]">
                <img src="/images/patient-success.jpg" alt="Healthcare testimonial" className="w-full h-[620px] object-cover sm:h-[700px]" />
              </div>

              <div className="absolute right-0 top-10 w-full max-w-sm rounded-[30px] border border-white/70 bg-white/90 p-6 shadow-2xl backdrop-blur-xl">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2 text-sm font-semibold text-[#836A43] uppercase tracking-widest">
                    <span>Client Review</span>
                  </div>
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(5)].map((_, index) => (
                      <Star key={index} size={16} className="text-amber-400" />
                    ))}
                  </div>
                </div>
                <p className="text-sm leading-7 text-[#4B4A45]">Implementing Reflexion Health was seamless. Our IT team appreciated the clear documentation and robust integration options.</p>
                <div className="mt-6 flex items-center gap-4">
                  <div className="h-14 w-14 overflow-hidden rounded-full border border-[#E6D7B6]">
                    <img src="/images/team-1.jpg" alt="Mark" className="h-full w-full object-cover" />
                  </div>
                  <div>
                    <p className="font-semibold text-[#1C1A14]">Mark Alvarez</p>
                    <p className="text-sm text-[#7B7161]">IT Director</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="bg-white border-b border-gray-100">
        <div className="container-custom py-20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            {stats.map(({ value, suffix, label, icon: Icon }, i) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12, duration: 0.6 }}
                className="text-center stat-card"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-gradient-to-br from-[#0F6FFF]/10 to-[#00D1B2]/10 border border-[#0F6FFF]/15 mb-4 mx-auto">
                  <Icon size={22} className="text-[#0F6FFF]" />
                </div>
                <div className="text-4xl md:text-5xl font-black text-[#0B1F3A] tracking-tight mb-2">
                  <AnimatedCounter end={value} suffix={suffix} />
                </div>
                <p className="text-gray-500 text-sm font-medium">{label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* TRUSTED BY */}
      <section className="bg-[#F8FAFC] py-12 border-b border-gray-100">
        <div className="container-custom">
          <p className="text-center text-gray-400 text-xs font-semibold uppercase tracking-widest mb-8">Trusted by Leading Healthcare Organizations</p>
          <div className="flex flex-wrap justify-center items-center gap-10 md:gap-16">
            {['Sharp Healthcare', 'UC San Diego Health', 'Scripps Health', 'Kaiser Permanente', 'Providence Health', 'Rady Children\'s Hospital'].map((name, i) => (
              <motion.div
                key={name}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="text-gray-300 hover:text-gray-500 transition-colors cursor-default"
              >
                <span className="font-bold text-sm tracking-tight">{name}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="section-padding bg-[#F8FAFC]">
        <div className="container-custom">
          <SectionHeader
            eyebrow="Our Services"
            title={<>Healthcare Solutions <span className="text-gradient">Built for Results</span></>}
            subtitle="Comprehensive digital health programs designed to optimize patient outcomes and empower healthcare providers with cutting-edge technology."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, i) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                className="bg-white rounded-2xl p-8 border border-gray-100 card-hover group cursor-pointer"
              >
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5 transition-transform group-hover:scale-110"
                  style={{ background: `linear-gradient(135deg, ${service.color}20, ${service.color}10)`, border: `1px solid ${service.color}30` }}
                >
                  <service.icon size={24} style={{ color: service.color }} />
                </div>
                <h3 className="text-xl font-bold text-[#0B1F3A] mb-3 group-hover:text-[#0F6FFF] transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-5">{service.description}</p>
                <Link to="/services" className="flex items-center gap-2 text-sm font-semibold text-[#0F6FFF] group-hover:gap-3 transition-all">
                  Learn More <ChevronRight size={16} />
                </Link>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/services">
              <button className="btn-dark">
                View All Services
                <ArrowRight size={18} />
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="section-padding bg-[#0B1F3A] relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-10" />
        <div className="container-custom relative z-10">
          <SectionHeader
            eyebrow="The Process"
            title={<>How Reflexion Health <span className="text-gradient">Works</span></>}
            subtitle="From your first consultation to long-term wellness — our platform supports every step of the patient journey."
            light={true}
          />
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { step: '01', title: 'Assessment', desc: 'Comprehensive digital health evaluation and personalized care plan creation using AI.', icon: '🔍', color: '#0F6FFF' },
              { step: '02', title: 'Program Design', desc: 'Custom rehabilitation program built around your specific needs, goals, and schedule.', icon: '⚡', color: '#00D1B2' },
              { step: '03', title: 'Active Recovery', desc: 'Guided therapy sessions with real-time AI feedback and continuous clinician oversight.', icon: '💪', color: '#7C3AED' },
              { step: '04', title: 'Long-term Wellness', desc: 'Ongoing monitoring and wellness programs to maintain and build upon your recovery gains.', icon: '🎯', color: '#059669' },
            ].map((item, i) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.7 }}
                className="relative"
              >
                <div className="glass rounded-2xl p-7 border border-white/10 h-full">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-3xl">{item.icon}</span>
                    <span className="text-5xl font-black opacity-10 text-white leading-none">{item.step}</span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-white/55 text-sm leading-relaxed">{item.desc}</p>
                  <div className="mt-4 w-8 h-1 rounded-full" style={{ background: item.color }} />
                </div>
                {i < 3 && (
                  <div className="hidden md:flex absolute top-1/2 -right-4 -translate-y-1/2 z-10">
                    <ArrowRight size={18} className="text-white/20" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* TECHNOLOGY SHOWCASE */}
      <section className="section-padding dark-section mesh-bg relative overflow-hidden">
        <div className="absolute inset-0 dot-pattern opacity-20" />
        <div className="container-custom relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <SectionHeader
                eyebrow="AI-Powered Platform"
                title={<>The Future of <span className="text-gradient">Healthcare Tech</span></>}
                subtitle="Our proprietary platform combines machine learning, motion capture, and predictive analytics to deliver unprecedented rehabilitation outcomes."
                light={true}
              />
              <div className="space-y-5 mt-8 text-left">
                {[
                  { label: 'AI Accuracy Rate', value: 97 },
                  { label: 'Recovery Speed Improvement', value: 43 },
                  { label: 'Provider Satisfaction', value: 98 },
                  { label: 'System Uptime', value: 99.9 },
                ].map((item, i) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.15 }}
                  >
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-white/70 font-medium">{item.label}</span>
                      <span className="text-[#00D1B2] font-bold">{item.value}%</span>
                    </div>
                    <div className="progress-bar bg-white/10">
                      <motion.div
                        className="progress-fill"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${item.value}%` }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.15 + 0.3, duration: 1.2, ease: 'easeOut' }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
              <div className="mt-10">
                <Link to="/technology">
                  <button className="btn-primary">
                    Explore Technology
                    <ArrowRight size={18} />
                  </button>
                </Link>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
                <img src="/images/tech-dashboard.jpg" alt="Technology Dashboard" className="w-full h-80 object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B1F3A]/60 to-transparent" />
                {/* Overlay stats */}
                <div className="absolute bottom-0 left-0 right-0 p-6 grid grid-cols-3 gap-4">
                  {[
                    { value: '2.4K', label: 'Active Sessions' },
                    { value: '99.9%', label: 'Uptime' },
                    { value: '< 50ms', label: 'Latency' },
                  ].map((stat) => (
                    <div key={stat.label} className="glass rounded-xl p-3 text-center">
                      <div className="text-white font-bold text-lg">{stat.value}</div>
                      <div className="text-white/50 text-xs">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Floating badges */}
              <motion.div
                animate={{ y: [-5, 5, -5] }}
                transition={{ repeat: Infinity, duration: 3 }}
                className="absolute -top-4 -right-4 glass-dark rounded-xl p-3 border border-[#0F6FFF]/30"
              >
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                  <span className="text-white/80 text-xs font-medium">AI Active</span>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <SectionHeader
            eyebrow="Success Stories"
            title={<>Trusted by <span className="text-gradient">Healthcare Leaders</span></>}
            subtitle="See how Reflexion Health is transforming patient care across the nation's top healthcare institutions."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.6 }}
                className="bg-[#F8FAFC] rounded-2xl p-8 border border-gray-100 card-hover"
              >
                <div className="flex gap-1 mb-5">
                  {[...Array(t.rating)].map((_, j) => (
                    <Star key={j} size={16} className="text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-700 leading-relaxed mb-6 text-sm italic">"{t.quote}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#0F6FFF] to-[#00D1B2] flex items-center justify-center text-white font-bold text-sm">
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-semibold text-[#0B1F3A] text-sm">{t.name}</p>
                    <p className="text-gray-400 text-xs">{t.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/success-stories">
              <button className="btn-outline-dark">
                Read All Success Stories
                <ArrowRight size={18} />
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="section-padding relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #0F6FFF 0%, #0044CC 50%, #00D1B2 100%)' }}>
        <div className="absolute inset-0 grid-pattern opacity-20" />
        <div className="absolute -top-20 -right-20 w-80 h-80 rounded-full bg-white/10 blur-3xl" />
        <div className="absolute -bottom-20 -left-20 w-80 h-80 rounded-full bg-white/10 blur-3xl" />
        <div className="container-custom relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-white/70 text-sm font-semibold tracking-widest uppercase mb-4">Get Started Today</p>
            <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight mb-6">
              Ready to Transform Patient Care?
            </h2>
            <p className="text-white/75 text-lg mb-10 max-w-xl mx-auto">
              Join hundreds of healthcare providers already using Reflexion Health to deliver better outcomes.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link to="/book-appointment">
                <button className="bg-white text-[#0B1F3A] font-bold py-4 px-8 rounded-full hover:bg-white/90 transition-all hover:-translate-y-1 shadow-xl flex items-center gap-2">
                  Book Free Consultation
                  <ArrowRight size={18} />
                </button>
              </Link>
              <Link to="/contact">
                <button className="btn-secondary py-4 px-8 border-white/40">
                  Contact Our Team
                </button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
