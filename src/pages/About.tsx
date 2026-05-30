import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';
import { ArrowRight, Target, Eye, Heart, Users, Award, Globe, Lightbulb, Shield } from 'lucide-react';

const team = [
  {
    name: 'Dr. Jonathan Reed',
    role: 'Chief Executive Officer',
    bio: '20+ years in healthcare technology. Former VP at Philips Healthcare and Johns Hopkins Medical Innovation Lab.',
    img: '/images/team-2.jpg',
  },
  {
    name: 'Dr. Sarah Mitchell',
    role: 'Chief Medical Officer',
    bio: 'Board-certified physiatrist with expertise in digital rehabilitation and AI-driven care pathways.',
    img: '/images/team-1.jpg',
  },
  {
    name: 'Dr. Priya Agarwal',
    role: 'Chief Technology Officer',
    bio: 'PhD in Biomedical Engineering from MIT. Pioneer in motion capture and AI health diagnostics.',
    img: '/images/team-3.jpg',
  },
];

const values = [
  { icon: Heart, title: 'Patient First', desc: 'Every decision we make starts with a simple question: how does this improve patient outcomes?', color: '#DC2626' },
  { icon: Lightbulb, title: 'Innovation', desc: 'We relentlessly pursue breakthrough technologies that reshape what\'s possible in healthcare.', color: '#D97706' },
  { icon: Shield, title: 'Integrity', desc: 'Transparency, honesty, and accountability are foundational to everything we do.', color: '#0F6FFF' },
  { icon: Users, title: 'Collaboration', desc: 'We partner deeply with clinicians, patients, and researchers to build better solutions together.', color: '#7C3AED' },
  { icon: Globe, title: 'Accessibility', desc: 'World-class healthcare technology should be accessible to every patient, everywhere.', color: '#059669' },
  { icon: Award, title: 'Excellence', desc: 'We hold ourselves to the highest standards in clinical efficacy, design, and service.', color: '#00D1B2' },
];

const timeline = [
  { year: '2004', title: 'Foundation', desc: 'Reflexion Health founded in San Diego with a mission to bridge technology and physical rehabilitation.' },
  { year: '2008', title: 'First Platform', desc: 'Launch of our first digital rehabilitation platform, partnering with 12 California-based clinics.' },
  { year: '2012', title: 'AI Integration', desc: 'Introduced proprietary AI algorithms for personalized recovery pathway optimization.' },
  { year: '2016', title: 'National Expansion', desc: 'Expanded to 200+ healthcare providers across 30 states with FDA clearance for core products.' },
  { year: '2019', title: 'Telehealth Launch', desc: 'Launched comprehensive telehealth platform connecting patients with specialists nationwide.' },
  { year: '2024', title: 'Next Generation', desc: 'Launched next-gen AI platform with real-time motion analysis, serving 500+ providers.' },
];

export default function About() {
  const { ref: missionRef, inView: missionInView } = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <div className="page-transition">
      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-[#0B1F3A] overflow-hidden">
        <div className="absolute inset-0 mesh-bg" />
        <div className="absolute inset-0 grid-pattern opacity-20" />
        <div className="container-custom relative z-10 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <p className="section-eyebrow justify-center mb-4" style={{ color: '#00D1B2' }}>Our Story</p>
            <h1 className="text-5xl md:text-6xl font-black text-white tracking-tight mb-6">
              Redefining What's Possible in<br />
              <span className="text-gradient">Healthcare Recovery</span>
            </h1>
            <p className="text-white/60 text-xl max-w-2xl mx-auto leading-relaxed">
              For 20 years, we've been at the intersection of clinical excellence and technological innovation,
              building tools that transform how patients heal.
            </p>
          </motion.div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-[#F8FAFC] to-transparent" />
      </section>

      {/* Mission & Vision */}
      <section className="section-padding bg-[#F8FAFC]">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              ref={missionRef}
              initial={{ opacity: 0, x: -40 }}
              animate={missionInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
            >
              <img
                src="/images/about-bg.jpg"
                alt="Reflexion Health Office"
                className="rounded-3xl w-full h-96 object-cover shadow-2xl"
              />
              <div className="grid grid-cols-2 gap-4 mt-4">
                {[
                  { value: '50K+', label: 'Patients Served' },
                  { value: '20+', label: 'Years of Innovation' },
                  { value: '500+', label: 'Provider Partners' },
                  { value: '30', label: 'States Covered' },
                ].map((s) => (
                  <div key={s.label} className="bg-white rounded-2xl p-5 text-center border border-gray-100 shadow-sm">
                    <div className="text-3xl font-black text-[#0B1F3A] mb-1">{s.value}</div>
                    <div className="text-gray-500 text-sm">{s.label}</div>
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
              <div className="space-y-8">
                <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="icon-box">
                      <Target size={24} className="text-[#0F6FFF]" />
                    </div>
                    <h3 className="text-2xl font-bold text-[#0B1F3A]">Our Mission</h3>
                  </div>
                  <p className="text-gray-600 leading-relaxed">
                    To transform rehabilitation through innovative digital health solutions, enabling patients to recover faster,
                    regain function, and live fuller lives — while empowering healthcare providers with the tools they need to
                    deliver exceptional, data-driven care.
                  </p>
                </div>

                <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="icon-box">
                      <Eye size={24} className="text-[#00D1B2]" />
                    </div>
                    <h3 className="text-2xl font-bold text-[#0B1F3A]">Our Vision</h3>
                  </div>
                  <p className="text-gray-600 leading-relaxed">
                    A world where geography, economics, and physical limitations are no longer barriers to exceptional
                    rehabilitation care — where every patient has access to the most advanced, personalized recovery programs
                    powered by artificial intelligence.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding dark-section mesh-bg">
        <div className="container-custom">
          <div className="text-center mb-16">
            <p className="section-eyebrow justify-center mb-4" style={{ color: '#00D1B2' }}>What We Stand For</p>
            <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-5">Our Core Values</h2>
            <p className="text-white/60 text-lg max-w-2xl mx-auto">
              These principles guide every product decision, partnership, and patient interaction.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass rounded-2xl p-8 border border-white/10 card-hover"
              >
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5"
                  style={{ background: `${v.color}20`, border: `1px solid ${v.color}30` }}
                >
                  <v.icon size={24} style={{ color: v.color }} />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{v.title}</h3>
                <p className="text-white/60 text-sm leading-relaxed">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <p className="section-eyebrow justify-center mb-4">Our Journey</p>
            <h2 className="text-4xl md:text-5xl font-bold text-[#0B1F3A] tracking-tight mb-5">
              20 Years of <span className="text-gradient">Innovation</span>
            </h2>
          </div>

          <div className="relative max-w-3xl mx-auto">
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#0F6FFF] to-[#00D1B2]" />
            <div className="space-y-12">
              {timeline.map((item, i) => (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.6 }}
                  className="flex gap-8 relative pl-16"
                >
                  <div className="absolute left-0 w-16 flex items-start justify-center pt-1">
                    <div className="timeline-dot" />
                  </div>
                  <div className="flex-1 bg-[#F8FAFC] rounded-2xl p-6 border border-gray-100">
                    <span className="text-[#0F6FFF] text-sm font-bold tracking-widest uppercase mb-2 block">{item.year}</span>
                    <h3 className="text-xl font-bold text-[#0B1F3A] mb-2">{item.title}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="section-padding bg-[#F8FAFC]">
        <div className="container-custom">
          <div className="text-center mb-16">
            <p className="section-eyebrow justify-center mb-4">Leadership</p>
            <h2 className="text-4xl md:text-5xl font-bold text-[#0B1F3A] tracking-tight mb-5">
              Meet the <span className="text-gradient">Team</span>
            </h2>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto">
              World-class experts in healthcare, technology, and patient care driving innovation at Reflexion Health.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, i) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.6 }}
                className="bg-white rounded-3xl overflow-hidden border border-gray-100 card-hover group"
              >
                <div className="relative h-72 overflow-hidden">
                  <img
                    src={member.img}
                    alt={member.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B1F3A]/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-[#0B1F3A] mb-1">{member.name}</h3>
                  <p className="text-[#0F6FFF] text-sm font-semibold mb-3">{member.role}</p>
                  <p className="text-gray-500 text-sm leading-relaxed">{member.bio}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-[#0B1F3A] relative overflow-hidden">
        <div className="absolute inset-0 mesh-bg" />
        <div className="container-custom relative z-10 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Join Us in Shaping the <span className="text-gradient">Future of Healthcare</span>
            </h2>
            <p className="text-white/60 text-lg mb-10 max-w-xl mx-auto">
              Whether you're a patient, provider, or innovator — there's a place for you in the Reflexion Health story.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link to="/book-appointment">
                <button className="btn-primary">
                  Book Consultation
                  <ArrowRight size={18} />
                </button>
              </Link>
              <Link to="/careers">
                <button className="btn-secondary">
                  View Open Roles
                </button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
