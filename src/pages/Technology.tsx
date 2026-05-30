import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Cpu, Eye, Wifi, BarChart3, Lock, Layers, Zap, TrendingUp } from 'lucide-react';

const technologies = [
  {
    icon: Cpu,
    title: 'AI-Powered Recovery Engine',
    description: 'Our proprietary neural network analyzes thousands of clinical data points to generate personalized, adaptive recovery protocols that evolve with each patient\'s progress.',
    specs: ['Custom transformer architecture', 'Real-time adaptation', 'Trained on 10M+ patient journeys', 'FDA-informed development'],
    color: '#0F6FFF',
  },
  {
    icon: Eye,
    title: 'Computer Vision Motion Capture',
    description: 'No sensors, no wearables. Our patented computer vision system tracks 33 body landmarks in real time through any standard camera, providing clinical-grade biomechanical analysis.',
    specs: ['33-point skeletal tracking', '60fps analysis speed', '< 15mm accuracy', 'Works on any device camera'],
    color: '#00D1B2',
  },
  {
    icon: Wifi,
    title: 'Remote Patient Monitoring',
    description: 'A comprehensive IoT ecosystem that integrates with 150+ wearable devices and health sensors, continuously streaming patient vitals into our unified analytics platform.',
    specs: ['150+ device integrations', 'Real-time data streaming', 'AI anomaly detection', 'FHIR/HL7 compliant'],
    color: '#7C3AED',
  },
  {
    icon: BarChart3,
    title: 'Predictive Analytics Platform',
    description: 'Turn clinical data into predictive insights. Our analytics engine forecasts recovery timelines, identifies at-risk patients, and recommends evidence-based interventions.',
    specs: ['Outcome prediction models', 'Population health insights', 'Custom clinical dashboards', 'Real-time reporting'],
    color: '#D97706',
  },
  {
    icon: Lock,
    title: 'Security & Compliance',
    description: 'Enterprise-grade security built for healthcare. Every data point is encrypted, every access is audited, and our infrastructure exceeds HIPAA, SOC 2 Type II, and HITRUST requirements.',
    specs: ['HIPAA & HITECH compliant', 'SOC 2 Type II certified', 'HITRUST CSF certified', '256-bit AES encryption'],
    color: '#059669',
  },
  {
    icon: Layers,
    title: 'EHR/EMR Integration',
    description: 'Seamlessly integrate with your existing clinical infrastructure. We support Epic, Cerner, Athenahealth, and 50+ other systems through our comprehensive API ecosystem.',
    specs: ['Epic & Cerner certified', '50+ EHR integrations', 'HL7 FHIR compliant', 'Bidirectional data sync'],
    color: '#DC2626',
  },
];

const dashboardMetrics = [
  { label: 'Patients Active', value: '2,847', change: '+12%', positive: true },
  { label: 'Avg Recovery Days', value: '34.2', change: '-8%', positive: true },
  { label: 'Adherence Rate', value: '87.4%', change: '+5%', positive: true },
  { label: 'Clinical Alerts', value: '23', change: '-15%', positive: true },
];

export default function Technology() {
  return (
    <div className="page-transition">
      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-[#0B1F3A] overflow-hidden">
        <div className="absolute inset-0 mesh-bg" />
        <div className="absolute inset-0 grid-pattern opacity-20" />
        <div className="container-custom relative z-10 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <p className="section-eyebrow justify-center mb-4" style={{ color: '#00D1B2' }}>Our Technology</p>
            <h1 className="text-5xl md:text-6xl font-black text-white tracking-tight mb-6">
              Healthcare Technology <span className="text-gradient">from the Future</span>
            </h1>
            <p className="text-white/60 text-xl max-w-2xl mx-auto leading-relaxed">
              A comprehensive digital health ecosystem powered by artificial intelligence, computer vision, and predictive analytics — delivering precision care at scale.
            </p>
          </motion.div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-[#F8FAFC] to-transparent" />
      </section>

      {/* Interactive Dashboard Preview */}
      <section className="section-padding bg-[#F8FAFC]">
        <div className="container-custom">
          <div className="text-center mb-16">
            <p className="section-eyebrow justify-center mb-4">Live Platform</p>
            <h2 className="text-4xl md:text-5xl font-bold text-[#0B1F3A] tracking-tight mb-5">
              Command-Center for <span className="text-gradient">Clinical Teams</span>
            </h2>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto">
              A beautifully designed, clinically powerful dashboard that gives your team everything they need to deliver exceptional patient care.
            </p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            {/* Dashboard UI */}
            <div className="bg-[#0B1F3A] rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
              {/* Top bar */}
              <div className="flex items-center gap-2 px-5 py-4 border-b border-white/10">
                <div className="w-3 h-3 rounded-full bg-red-400" />
                <div className="w-3 h-3 rounded-full bg-yellow-400" />
                <div className="w-3 h-3 rounded-full bg-green-400" />
                <div className="flex-1 flex justify-center">
                  <div className="glass px-4 py-1.5 rounded-full text-white/50 text-xs flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                    app.reflexionhealth.com — Clinical Dashboard
                  </div>
                </div>
              </div>
              {/* Dashboard content */}
              <div className="p-6">
                {/* Metrics row */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                  {dashboardMetrics.map((metric, i) => (
                    <motion.div
                      key={metric.label}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 }}
                      className="glass rounded-2xl p-4"
                    >
                      <p className="text-white/50 text-xs mb-2">{metric.label}</p>
                      <p className="text-white text-2xl font-bold mb-1">{metric.value}</p>
                      <span className={`text-xs font-semibold ${metric.positive ? 'text-green-400' : 'text-red-400'}`}>
                        {metric.change} from last month
                      </span>
                    </motion.div>
                  ))}
                </div>

                {/* Charts area */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="md:col-span-2 glass rounded-2xl p-5">
                    <p className="text-white/70 text-sm font-semibold mb-4">Recovery Progress — All Patients</p>
                    <div className="flex items-end gap-2 h-32">
                      {[65, 72, 68, 85, 79, 91, 88, 95, 87, 93, 97, 94].map((h, i) => (
                        <motion.div
                          key={i}
                          className="flex-1 rounded-t-md"
                          style={{
                            background: `linear-gradient(180deg, #0F6FFF, #00D1B2)`,
                            opacity: 0.6 + (i / 12) * 0.4,
                          }}
                          initial={{ height: 0 }}
                          whileInView={{ height: `${h}%` }}
                          viewport={{ once: true }}
                          transition={{ delay: i * 0.05, duration: 0.6 }}
                        />
                      ))}
                    </div>
                    <div className="flex justify-between mt-2 text-white/30 text-xs">
                      {['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'].map((m) => (
                        <span key={m}>{m}</span>
                      ))}
                    </div>
                  </div>

                  <div className="glass rounded-2xl p-5">
                    <p className="text-white/70 text-sm font-semibold mb-4">System Status</p>
                    <div className="space-y-3">
                      {[
                        { label: 'AI Engine', status: 'Operational', color: 'bg-green-400' },
                        { label: 'Motion Capture', status: 'Operational', color: 'bg-green-400' },
                        { label: 'Data Pipeline', status: 'Operational', color: 'bg-green-400' },
                        { label: 'EHR Sync', status: 'Active', color: 'bg-blue-400' },
                        { label: 'Telehealth', status: 'Operational', color: 'bg-green-400' },
                      ].map((s) => (
                        <div key={s.label} className="flex items-center justify-between">
                          <span className="text-white/60 text-xs">{s.label}</span>
                          <div className="flex items-center gap-1.5">
                            <div className={`w-2 h-2 rounded-full ${s.color} animate-pulse`} />
                            <span className="text-white/50 text-xs">{s.status}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating indicator */}
            <motion.div
              animate={{ y: [-5, 5, -5] }}
              transition={{ repeat: Infinity, duration: 3 }}
              className="absolute -top-6 -right-6 bg-white rounded-2xl shadow-xl p-4 border border-gray-100"
            >
              <div className="flex items-center gap-2">
                <Zap size={16} className="text-[#0F6FFF]" />
                <span className="text-[#0B1F3A] font-bold text-sm">AI Active</span>
              </div>
              <p className="text-gray-400 text-xs mt-0.5">Processing 2.4K sessions</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Technology Cards */}
      <section className="section-padding dark-section mesh-bg">
        <div className="container-custom">
          <div className="text-center mb-16">
            <p className="section-eyebrow justify-center mb-4" style={{ color: '#00D1B2' }}>Core Technologies</p>
            <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-5">
              The Engine Behind <span className="text-gradient">Every Recovery</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {technologies.map((tech, i) => (
              <motion.div
                key={tech.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass rounded-2xl p-8 border border-white/10 card-hover group"
              >
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5 transition-all group-hover:scale-110"
                  style={{ background: `${tech.color}20`, border: `1px solid ${tech.color}30` }}
                >
                  <tech.icon size={24} style={{ color: tech.color }} />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{tech.title}</h3>
                <p className="text-white/60 text-sm leading-relaxed mb-5">{tech.description}</p>
                <div className="space-y-2">
                  {tech.specs.map((spec) => (
                    <div key={spec} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full" style={{ background: tech.color }} />
                      <span className="text-white/50 text-xs">{spec}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Performance metrics */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
              <p className="section-eyebrow mb-4">Performance</p>
              <h2 className="text-4xl font-bold text-[#0B1F3A] tracking-tight mb-6">
                Built for Scale, Designed for <span className="text-gradient">Speed</span>
              </h2>
              <p className="text-gray-500 leading-relaxed mb-8">
                Our infrastructure processes millions of data points daily with sub-50ms latency, ensuring every clinician and patient gets instant, accurate insights.
              </p>
              <div className="space-y-5">
                {[
                  { label: 'AI Model Accuracy', pct: 97 },
                  { label: 'System Uptime SLA', pct: 99.9 },
                  { label: 'Data Processing Speed', pct: 95 },
                  { label: 'EHR Sync Reliability', pct: 99 },
                ].map((m, i) => (
                  <div key={m.label}>
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-gray-700 font-medium">{m.label}</span>
                      <span className="text-[#0F6FFF] font-bold">{m.pct}%</span>
                    </div>
                    <div className="progress-bar">
                      <motion.div
                        className="progress-fill"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${m.pct}%` }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.15 + 0.3, duration: 1.2, ease: 'easeOut' }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="grid grid-cols-2 gap-6"
            >
              {[
                { icon: TrendingUp, value: '10M+', label: 'Patient journeys in training data', color: '#0F6FFF' },
                { icon: Zap, value: '< 50ms', label: 'Average API response time', color: '#00D1B2' },
                { icon: Lock, value: '100%', label: 'Data encrypted at rest and in transit', color: '#7C3AED' },
                { icon: Cpu, value: '99.9%', label: 'Platform uptime guarantee', color: '#059669' },
              ].map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-[#F8FAFC] rounded-2xl p-6 border border-gray-100 text-center"
                >
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-4"
                    style={{ background: `${stat.color}15`, border: `1px solid ${stat.color}25` }}
                  >
                    <stat.icon size={20} style={{ color: stat.color }} />
                  </div>
                  <div className="text-2xl font-black text-[#0B1F3A] mb-2">{stat.value}</div>
                  <div className="text-gray-500 text-xs leading-snug">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding" style={{ background: 'linear-gradient(135deg, #0F6FFF 0%, #0044CC 50%, #00D1B2 100%)' }}>
        <div className="container-custom text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              See Our Technology in Action
            </h2>
            <p className="text-white/75 text-lg mb-10 max-w-xl mx-auto">
              Request a live demo and experience the future of rehabilitation technology firsthand.
            </p>
            <Link to="/book-appointment">
              <button className="bg-white text-[#0B1F3A] font-bold py-4 px-10 rounded-full hover:bg-white/90 transition-all hover:-translate-y-1 shadow-xl flex items-center gap-2 mx-auto">
                Request a Demo
                <ArrowRight size={18} />
              </button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
