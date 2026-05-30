import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, MapPin, Briefcase, Clock, Heart, Zap, Users, TrendingUp, Coffee, Laptop } from 'lucide-react';

const perks = [
  { icon: Heart, title: 'Comprehensive Health', desc: 'Medical, dental, and vision for you and your family. 100% premium covered.', color: '#DC2626' },
  { icon: TrendingUp, title: 'Equity & Growth', desc: 'Competitive equity packages and clear career progression paths.', color: '#0F6FFF' },
  { icon: Laptop, title: 'Remote Flexibility', desc: 'Hybrid work model with a beautiful San Diego HQ to call home.', color: '#7C3AED' },
  { icon: Coffee, title: 'Unlimited PTO', desc: 'We trust you to do great work and recharge when you need to.', color: '#D97706' },
  { icon: Zap, title: 'Learning Budget', desc: '$3,000 annual budget for conferences, courses, and certifications.', color: '#059669' },
  { icon: Users, title: 'Mission-Driven Team', desc: 'Work with world-class colleagues who genuinely care about patient outcomes.', color: '#00D1B2' },
];

const openings = [
  { title: 'Senior Machine Learning Engineer', dept: 'Engineering', type: 'Full-time', location: 'San Diego, CA / Remote', level: 'Senior' },
  { title: 'Clinical Product Manager', dept: 'Product', type: 'Full-time', location: 'San Diego, CA', level: 'Mid-Senior' },
  { title: 'Physical Therapist (Clinical Advisor)', dept: 'Clinical', type: 'Full-time', location: 'San Diego, CA', level: 'Mid-Level' },
  { title: 'Full Stack Engineer (React / Node.js)', dept: 'Engineering', type: 'Full-time', location: 'Remote', level: 'Mid-Senior' },
  { title: 'Director of Healthcare Partnerships', dept: 'Business Development', type: 'Full-time', location: 'San Diego, CA', level: 'Director' },
  { title: 'UX/UI Designer (Healthcare)', dept: 'Design', type: 'Full-time', location: 'Remote / San Diego', level: 'Mid-Level' },
  { title: 'Data Scientist — Patient Analytics', dept: 'Data Science', type: 'Full-time', location: 'San Diego, CA / Remote', level: 'Senior' },
  { title: 'Customer Success Manager (Healthcare)', dept: 'Customer Success', type: 'Full-time', location: 'Remote', level: 'Mid-Level' },
];

const depts = ['All', 'Engineering', 'Product', 'Clinical', 'Design', 'Data Science', 'Business Development', 'Customer Success'];

const deptColors: Record<string, string> = {
  Engineering: '#0F6FFF',
  Product: '#7C3AED',
  Clinical: '#00D1B2',
  Design: '#D97706',
  'Data Science': '#059669',
  'Business Development': '#DC2626',
  'Customer Success': '#0B1F3A',
};

const values = [
  'We believe technology can heal',
  'Every patient deserves the best care possible',
  'Diverse teams build better products',
  'Move fast without breaking trust',
  'Transparency in everything we do',
];

export default function Careers() {
  const [activeDept, setActiveDept] = useState('All');

  const filtered = openings.filter((j) => activeDept === 'All' || j.dept === activeDept);

  return (
    <div className="page-transition">
      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-[#0B1F3A] overflow-hidden">
        <div className="absolute inset-0 mesh-bg" />
        <div className="absolute inset-0 grid-pattern opacity-20" />
        <div className="container-custom relative z-10 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <p className="section-eyebrow justify-center mb-4" style={{ color: '#00D1B2' }}>We're Hiring</p>
            <h1 className="text-5xl md:text-6xl font-black text-white tracking-tight mb-6">
              Build the Future of <span className="text-gradient">Healthcare</span>
            </h1>
            <p className="text-white/60 text-xl max-w-2xl mx-auto mb-8">
              Join a team of world-class engineers, clinicians, and designers on a mission to transform how the world heals.
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              {values.map((v) => (
                <span key={v} className="tag-badge bg-white/10 text-white/70 border border-white/15 text-xs">{v}</span>
              ))}
            </div>
          </motion.div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-[#F8FAFC] to-transparent" />
      </section>

      {/* Culture */}
      <section className="section-padding bg-[#F8FAFC]">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
              <p className="section-eyebrow mb-4">Our Culture</p>
              <h2 className="text-4xl font-bold text-[#0B1F3A] tracking-tight mb-6">
                Purpose-Driven Work with <span className="text-gradient">Real Impact</span>
              </h2>
              <p className="text-gray-500 leading-relaxed mb-6">
                At Reflexion Health, you'll work on technology that directly improves lives. Every feature you ship, every model you train, every patient story you hear — it's all real.
              </p>
              <p className="text-gray-500 leading-relaxed mb-8">
                We're a team of ~150 people in San Diego and remotely, united by a shared belief that technology can make the healthcare system fundamentally better for everyone it touches.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { value: '~150', label: 'Team Members' },
                  { value: '4.8★', label: 'Glassdoor Rating' },
                  { value: '92%', label: 'Employee Retention' },
                  { value: '45%', label: 'Women in Leadership' },
                ].map((s) => (
                  <div key={s.label} className="bg-white rounded-2xl p-5 border border-gray-100 text-center">
                    <div className="text-2xl font-black text-[#0B1F3A] mb-1">{s.value}</div>
                    <div className="text-gray-400 text-xs">{s.label}</div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <img src="/images/about-bg.jpg" alt="Team" className="rounded-3xl w-full h-96 object-cover shadow-2xl" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Perks */}
      <section className="section-padding dark-section mesh-bg">
        <div className="container-custom">
          <div className="text-center mb-16">
            <p className="section-eyebrow justify-center mb-4" style={{ color: '#00D1B2' }}>Benefits</p>
            <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-5">
              We Take Care of <span className="text-gradient">Our Team</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {perks.map((perk, i) => (
              <motion.div
                key={perk.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass rounded-2xl p-8 border border-white/10 card-hover"
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                  style={{ background: `${perk.color}20`, border: `1px solid ${perk.color}30` }}
                >
                  <perk.icon size={22} style={{ color: perk.color }} />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{perk.title}</h3>
                <p className="text-white/60 text-sm leading-relaxed">{perk.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Jobs */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <p className="section-eyebrow justify-center mb-4">Open Positions</p>
            <h2 className="text-4xl md:text-5xl font-bold text-[#0B1F3A] tracking-tight mb-5">
              Find Your <span className="text-gradient">Perfect Role</span>
            </h2>
          </div>

          {/* Filter */}
          <div className="flex flex-wrap gap-2 justify-center mb-10">
            {depts.map((d) => (
              <button
                key={d}
                onClick={() => setActiveDept(d)}
                className={`px-4 py-2 rounded-full text-sm font-semibold transition-all ${
                  activeDept === d
                    ? 'bg-[#0B1F3A] text-white'
                    : 'bg-gray-100 text-gray-500 hover:bg-gray-200'
                }`}
              >
                {d}
              </button>
            ))}
          </div>

          <div className="space-y-4 max-w-4xl mx-auto">
            {filtered.map((job, i) => (
              <motion.div
                key={job.title}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07 }}
                className="career-card group cursor-pointer"
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div className="flex items-start gap-4">
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                      style={{ background: `${deptColors[job.dept] || '#0F6FFF'}15` }}
                    >
                      <Briefcase size={18} style={{ color: deptColors[job.dept] || '#0F6FFF' }} />
                    </div>
                    <div>
                      <h3 className="text-[#0B1F3A] font-bold group-hover:text-[#0F6FFF] transition-colors">
                        {job.title}
                      </h3>
                      <div className="flex flex-wrap gap-3 mt-1.5">
                        <span
                          className="tag-badge text-xs"
                          style={{ background: `${deptColors[job.dept] || '#0F6FFF'}15`, color: deptColors[job.dept] || '#0F6FFF' }}
                        >
                          {job.dept}
                        </span>
                        <span className="flex items-center gap-1 text-xs text-gray-400">
                          <MapPin size={11} /> {job.location}
                        </span>
                        <span className="flex items-center gap-1 text-xs text-gray-400">
                          <Clock size={11} /> {job.type}
                        </span>
                        <span className="text-xs text-gray-400 font-medium">{job.level}</span>
                      </div>
                    </div>
                  </div>
                  <button className="flex items-center gap-2 text-sm font-semibold text-[#0F6FFF] flex-shrink-0 hover:gap-3 transition-all">
                    Apply Now <ArrowRight size={15} />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-20">
              <p className="text-gray-400">No openings in this department right now. Check back soon!</p>
            </div>
          )}

          <div className="text-center mt-12">
            <p className="text-gray-500 text-sm mb-4">Don't see a perfect fit? We're always looking for exceptional people.</p>
            <Link to="/contact">
              <button className="btn-outline-dark">
                Send Us Your Resume
                <ArrowRight size={18} />
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
