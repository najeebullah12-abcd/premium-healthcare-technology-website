import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, TrendingUp, Quote } from 'lucide-react';
import AnimatedCounter from '../components/AnimatedCounter';

const stories = [
  {
    patient: 'Marcus Johnson',
    age: 42,
    condition: 'Post-ACL Reconstruction',
    outcome: 'Return to sport in 6 months vs. 12-month average',
    quote: "I was told I'd never play competitive basketball again. Reflexion Health's AI-powered rehab program not only got me back on the court — I'm playing better than before my injury. The real-time feedback completely changed how I approach recovery.",
    metrics: [
      { label: 'Recovery Time', before: '12 months', after: '6 months' },
      { label: 'Therapy Adherence', before: '62%', after: '94%' },
      { label: 'Pain Score', before: '7/10', after: '1/10' },
    ],
    stars: 5,
    category: 'Sports Recovery',
    color: '#0F6FFF',
  },
  {
    patient: 'Eleanor Martinez',
    age: 68,
    condition: 'Hip Replacement Recovery',
    outcome: 'Walking unassisted 3 weeks ahead of schedule',
    quote: "After my hip replacement, I was terrified I wouldn't regain my independence. The telehealth program meant I had a therapist available whenever I needed them. At 68, I'm now more active than I've been in a decade.",
    metrics: [
      { label: 'Independence Timeline', before: '12 weeks', after: '7 weeks' },
      { label: 'Daily Steps', before: '800', after: '6,400' },
      { label: 'Quality of Life Score', before: '45%', after: '89%' },
    ],
    stars: 5,
    category: 'Post-Surgical',
    color: '#00D1B2',
  },
  {
    patient: 'James Chen',
    age: 35,
    condition: 'Chronic Lower Back Pain',
    outcome: '80% reduction in pain medication dependency',
    quote: "I'd been dealing with back pain for 8 years and tried everything. The combination of AI-guided exercises and real-time motion analysis helped my therapist identify the root cause of my pain. I'm now medication-free for the first time in years.",
    metrics: [
      { label: 'Pain Medication Use', before: '2x daily', after: 'None' },
      { label: 'Work Productivity', before: '40%', after: '95%' },
      { label: 'Sleep Quality', before: '4/10', after: '8/10' },
    ],
    stars: 5,
    category: 'Chronic Pain',
    color: '#7C3AED',
  },
  {
    patient: 'Dr. Sarah Thompson',
    age: 51,
    condition: 'Stroke Rehabilitation',
    outcome: 'Regained full cognitive and motor function',
    quote: "As a physician, I was skeptical about digital rehab. After my stroke, I became a believer. The precision of the motion capture technology detected compensatory patterns my therapists had missed. I'm back practicing medicine full-time.",
    metrics: [
      { label: 'Motor Function', before: '35%', after: '96%' },
      { label: 'Cognitive Assessment', before: '58%', after: '97%' },
      { label: 'Return to Work', before: 'Unknown', after: '14 weeks' },
    ],
    stars: 5,
    category: 'Neurological',
    color: '#DC2626',
  },
];

const providerStories = [
  {
    name: 'Sharp Memorial Hospital',
    location: 'San Diego, CA',
    quote: 'Implementing Reflexion Health reduced our readmission rates by 38% and significantly improved our CMS quality scores.',
    metric: '38%',
    metricLabel: 'Readmission Reduction',
    contact: 'Dr. R. Williams, Medical Director',
    stars: 5,
  },
  {
    name: 'Pacific Orthopedics Group',
    location: 'San Diego, CA',
    quote: "We've doubled our patient capacity without adding clinical staff. The AI handles monitoring, we handle care. It's transformed our practice model.",
    metric: '2x',
    metricLabel: 'Patient Capacity',
    contact: 'Dr. K. Yamamoto, Chief Surgeon',
    stars: 5,
  },
  {
    name: 'UC San Diego Health',
    location: 'La Jolla, CA',
    quote: "Patient satisfaction scores hit 98% in our Reflexion Health-powered rehabilitation department. Nothing else we've tried comes close.",
    metric: '98%',
    metricLabel: 'Patient Satisfaction',
    contact: 'Dr. L. Garcia, Rehab Director',
    stars: 5,
  },
];

export default function SuccessStories() {
  return (
    <div className="page-transition">
      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-[#0B1F3A] overflow-hidden">
        <div className="absolute inset-0 mesh-bg" />
        <div className="absolute inset-0 grid-pattern opacity-20" />
        <div className="container-custom relative z-10 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <p className="section-eyebrow justify-center mb-4" style={{ color: '#00D1B2' }}>Real Results</p>
            <h1 className="text-5xl md:text-6xl font-black text-white tracking-tight mb-6">
              Stories That Define <span className="text-gradient">Our Purpose</span>
            </h1>
            <p className="text-white/60 text-xl max-w-2xl mx-auto">
              Behind every data point is a real person whose life has been changed. These are their stories.
            </p>
          </motion.div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-[#F8FAFC] to-transparent" />
      </section>

      {/* Overall Stats */}
      <section className="bg-white border-b border-gray-100">
        <div className="container-custom py-20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: 50000, suffix: '+', label: 'Patients Recovered' },
              { value: 95, suffix: '%', label: 'Satisfaction Rate' },
              { value: 40, suffix: '%', label: 'Faster Recovery' },
              { value: 65, suffix: '%', label: 'Hospitalization Reduction' },
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-black text-[#0B1F3A] mb-2">
                  <AnimatedCounter end={stat.value} suffix={stat.suffix} />
                </div>
                <p className="text-gray-500 text-sm font-medium">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Patient Stories */}
      <section className="section-padding bg-[#F8FAFC]">
        <div className="container-custom">
          <div className="text-center mb-16">
            <p className="section-eyebrow justify-center mb-4">Patient Journeys</p>
            <h2 className="text-4xl md:text-5xl font-bold text-[#0B1F3A] tracking-tight mb-5">
              Remarkable <span className="text-gradient">Recovery Stories</span>
            </h2>
          </div>

          <div className="space-y-16">
            {stories.map((story, i) => (
              <motion.div
                key={story.patient}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className={`grid grid-cols-1 lg:grid-cols-5 gap-8 ${i % 2 !== 0 ? 'lg:grid-flow-dense' : ''}`}
              >
                {/* Story Content */}
                <div className={`lg:col-span-3 ${i % 2 !== 0 ? 'lg:col-start-3' : ''}`}>
                  <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm h-full flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between mb-6">
                        <span
                          className="tag-badge"
                          style={{ background: `${story.color}15`, color: story.color }}
                        >
                          {story.category}
                        </span>
                        <div className="flex gap-1">
                          {[...Array(story.stars)].map((_, j) => (
                            <Star key={j} size={14} className="text-yellow-400 fill-yellow-400" />
                          ))}
                        </div>
                      </div>

                      <div className="flex items-start gap-3 mb-5">
                        <Quote size={28} style={{ color: story.color }} className="flex-shrink-0 mt-1 opacity-50" />
                        <p className="text-gray-700 text-lg leading-relaxed italic">{story.quote}</p>
                      </div>

                      <div className="flex items-center gap-4 mb-6">
                        <div
                          className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-lg"
                          style={{ background: `linear-gradient(135deg, ${story.color}, ${story.color}80)` }}
                        >
                          {story.patient.charAt(0)}
                        </div>
                        <div>
                          <p className="font-bold text-[#0B1F3A]">{story.patient}</p>
                          <p className="text-gray-400 text-sm">Age {story.age} • {story.condition}</p>
                        </div>
                      </div>
                    </div>

                    <div
                      className="p-4 rounded-2xl"
                      style={{ background: `${story.color}08`, border: `1px solid ${story.color}20` }}
                    >
                      <p className="text-sm font-semibold mb-3" style={{ color: story.color }}>
                        <TrendingUp size={14} className="inline mr-2" />
                        {story.outcome}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Metrics */}
                <div className={`lg:col-span-2 ${i % 2 !== 0 ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                  <div className="space-y-4 h-full flex flex-col justify-center">
                    {story.metrics.map((metric) => (
                      <div
                        key={metric.label}
                        className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm"
                      >
                        <p className="text-gray-400 text-xs font-medium uppercase tracking-widest mb-3">{metric.label}</p>
                        <div className="flex items-center gap-4">
                          <div className="flex-1 text-center p-3 bg-red-50 rounded-xl">
                            <p className="text-xs text-red-400 font-medium mb-1">Before</p>
                            <p className="font-bold text-red-600 text-sm">{metric.before}</p>
                          </div>
                          <ArrowRight size={16} style={{ color: story.color }} className="flex-shrink-0" />
                          <div className="flex-1 text-center p-3 rounded-xl" style={{ background: `${story.color}10` }}>
                            <p className="text-xs font-medium mb-1" style={{ color: story.color }}>After</p>
                            <p className="font-bold text-sm" style={{ color: story.color }}>{metric.after}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Provider Testimonials */}
      <section className="section-padding dark-section mesh-bg">
        <div className="container-custom">
          <div className="text-center mb-16">
            <p className="section-eyebrow justify-center mb-4" style={{ color: '#00D1B2' }}>Provider Voices</p>
            <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-5">
              What Healthcare Leaders <span className="text-gradient">Are Saying</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {providerStories.map((provider, i) => (
              <motion.div
                key={provider.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="glass rounded-2xl p-8 border border-white/10 card-hover"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(provider.stars)].map((_, j) => (
                    <Star key={j} size={14} className="text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="text-4xl font-black text-gradient">{provider.metric}</div>
                  <div className="text-white/50 text-xs">{provider.metricLabel}</div>
                </div>
                <p className="text-white/70 text-sm leading-relaxed mb-5 italic">"{provider.quote}"</p>
                <div className="border-t border-white/10 pt-4">
                  <p className="text-white font-semibold text-sm">{provider.name}</p>
                  <p className="text-white/40 text-xs">{provider.location}</p>
                  <p className="text-white/40 text-xs mt-1">{provider.contact}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-white">
        <div className="container-custom text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <p className="section-eyebrow justify-center mb-4">Your Story Starts Here</p>
            <h2 className="text-4xl md:text-5xl font-bold text-[#0B1F3A] mb-6">
              Ready to Write Your <span className="text-gradient">Success Story?</span>
            </h2>
            <p className="text-gray-500 text-lg mb-10 max-w-xl mx-auto">
              Join thousands of patients and hundreds of providers who've transformed outcomes with Reflexion Health.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link to="/book-appointment">
                <button className="btn-dark">
                  Book Free Consultation
                  <ArrowRight size={18} />
                </button>
              </Link>
              <Link to="/contact">
                <button className="btn-outline-dark">
                  Talk to Our Team
                </button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
