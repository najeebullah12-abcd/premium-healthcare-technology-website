import { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, ArrowRight, Clock, Tag, ChevronRight } from 'lucide-react';

const categories = ['All', 'Healthcare Technology', 'Rehabilitation', 'Telehealth', 'Patient Wellness', 'Industry News'];

const posts = [
  {
    id: 1,
    title: 'How AI Is Revolutionizing Post-Surgical Rehabilitation Outcomes',
    excerpt: 'New research shows AI-guided recovery programs reduce average rehabilitation time by 40% while improving long-term functional outcomes for post-surgical patients.',
    category: 'Healthcare Technology',
    date: 'December 15, 2024',
    readTime: '8 min read',
    img: '/images/tech-dashboard.jpg',
    featured: true,
  },
  {
    id: 2,
    title: 'The Future of Telehealth in Physical Therapy: 2025 Outlook',
    excerpt: 'Telehealth adoption in physical therapy has grown 300% since 2020. We explore what this means for patients, providers, and the future of rehabilitation care.',
    category: 'Telehealth',
    date: 'December 10, 2024',
    readTime: '6 min read',
    img: '/images/about-bg.jpg',
    featured: false,
  },
  {
    id: 3,
    title: 'Motion Capture Technology Without Wearables: How Computer Vision Changes Rehab',
    excerpt: 'Wearable sensors have long been the gold standard for motion analysis in rehabilitation. Computer vision is changing that — and improving accuracy at the same time.',
    category: 'Rehabilitation',
    date: 'December 5, 2024',
    readTime: '10 min read',
    img: '/images/services-rehabilitation.jpg',
    featured: false,
  },
  {
    id: 4,
    title: 'Building Patient Engagement: The Psychology of Digital Health Adherence',
    excerpt: 'Why do patients abandon digital health programs? We analyzed 10,000+ patient journeys to understand adherence patterns and what drives long-term engagement.',
    category: 'Patient Wellness',
    date: 'November 28, 2024',
    readTime: '7 min read',
    img: '/images/patient-success.jpg',
    featured: false,
  },
  {
    id: 5,
    title: 'CMS Releases New Guidelines for Remote Therapeutic Monitoring in 2025',
    excerpt: 'The Centers for Medicare & Medicaid Services has updated reimbursement guidelines for remote therapeutic monitoring, opening new revenue streams for rehabilitation providers.',
    category: 'Industry News',
    date: 'November 20, 2024',
    readTime: '5 min read',
    img: '/images/hero-bg.jpg',
    featured: false,
  },
  {
    id: 6,
    title: 'The Evidence Base for Digital Rehabilitation: A Systematic Review',
    excerpt: 'Our clinical team reviewed 247 peer-reviewed studies on digital rehabilitation efficacy. Here\'s what the science says about outcomes, adherence, and patient satisfaction.',
    category: 'Rehabilitation',
    date: 'November 15, 2024',
    readTime: '15 min read',
    img: '/images/tech-dashboard.jpg',
    featured: false,
  },
  {
    id: 7,
    title: 'From Hospital to Home: Optimizing the Transition of Care with Digital Tools',
    excerpt: 'The 30-day post-discharge period is the highest-risk window for complications and readmission. How digital health tools are transforming this critical transition.',
    category: 'Healthcare Technology',
    date: 'November 8, 2024',
    readTime: '9 min read',
    img: '/images/about-bg.jpg',
    featured: false,
  },
  {
    id: 8,
    title: 'Mindfulness and Movement: Integrating Mental Health into Rehabilitation Programs',
    excerpt: 'Chronic pain and physical limitations take a significant mental health toll. Learn how integrated wellness approaches are improving holistic patient outcomes.',
    category: 'Patient Wellness',
    date: 'November 1, 2024',
    readTime: '6 min read',
    img: '/images/patient-success.jpg',
    featured: false,
  },
];

const categoryColors: Record<string, string> = {
  'Healthcare Technology': '#0F6FFF',
  'Rehabilitation': '#00D1B2',
  'Telehealth': '#7C3AED',
  'Patient Wellness': '#059669',
  'Industry News': '#D97706',
};

export default function Blog() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [search, setSearch] = useState('');

  const filtered = posts.filter((p) => {
    const matchCat = activeCategory === 'All' || p.category === activeCategory;
    const matchSearch = p.title.toLowerCase().includes(search.toLowerCase()) ||
      p.excerpt.toLowerCase().includes(search.toLowerCase());
    return matchCat && matchSearch;
  });

  const featured = posts.find((p) => p.featured);
  const regular = filtered.filter((p) => !p.featured);

  return (
    <div className="page-transition">
      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-[#0B1F3A] overflow-hidden">
        <div className="absolute inset-0 mesh-bg" />
        <div className="absolute inset-0 grid-pattern opacity-20" />
        <div className="container-custom relative z-10 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <p className="section-eyebrow justify-center mb-4" style={{ color: '#00D1B2' }}>Knowledge Center</p>
            <h1 className="text-5xl md:text-6xl font-black text-white tracking-tight mb-6">
              Insights & <span className="text-gradient">Innovation</span>
            </h1>
            <p className="text-white/60 text-xl max-w-2xl mx-auto mb-8">
              Deep dives into healthcare technology, clinical research, and the future of rehabilitation — from our team of experts.
            </p>

            {/* Search */}
            <div className="relative max-w-lg mx-auto">
              <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-white/40" />
              <input
                type="text"
                placeholder="Search articles..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full pl-12 pr-4 py-4 bg-white/10 border border-white/20 rounded-full text-white placeholder-white/40 focus:outline-none focus:border-[#0F6FFF] focus:bg-white/15 transition-all text-sm backdrop-blur-sm"
              />
            </div>
          </motion.div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-[#F8FAFC] to-transparent" />
      </section>

      {/* Category Filter */}
      <section className="bg-white border-b border-gray-100 sticky top-[73px] z-40">
        <div className="container-custom py-4">
          <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-hide">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`flex-shrink-0 px-5 py-2.5 rounded-full text-sm font-semibold transition-all ${
                  activeCategory === cat
                    ? 'bg-[#0F6FFF] text-white shadow-lg shadow-blue-500/30'
                    : 'bg-gray-100 text-gray-500 hover:bg-gray-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-[#F8FAFC]">
        <div className="container-custom">
          {/* Featured Post */}
          {featured && activeCategory === 'All' && !search && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-sm mb-12 card-hover group"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="relative h-72 lg:h-auto overflow-hidden">
                  <img src={featured.img} alt={featured.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#0B1F3A]/20" />
                  <div className="absolute top-4 left-4">
                    <span className="tag-badge bg-[#0F6FFF] text-white text-xs">Featured</span>
                  </div>
                </div>
                <div className="p-10 flex flex-col justify-center">
                  <span
                    className="tag-badge mb-4 w-fit"
                    style={{
                      background: `${categoryColors[featured.category] || '#0F6FFF'}15`,
                      color: categoryColors[featured.category] || '#0F6FFF'
                    }}
                  >
                    <Tag size={10} className="mr-1" /> {featured.category}
                  </span>
                  <h2 className="text-2xl md:text-3xl font-black text-[#0B1F3A] tracking-tight mb-4 leading-tight">
                    {featured.title}
                  </h2>
                  <p className="text-gray-500 text-sm leading-relaxed mb-6">{featured.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4 text-xs text-gray-400">
                      <span>{featured.date}</span>
                      <span className="flex items-center gap-1"><Clock size={12} /> {featured.readTime}</span>
                    </div>
                    <button className="flex items-center gap-2 text-sm font-semibold text-[#0F6FFF] hover:gap-3 transition-all">
                      Read Article <ChevronRight size={16} />
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {/* Grid */}
          {regular.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-gray-400 text-lg">No articles found matching your search.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {regular.map((post, i) => (
                <motion.div
                  key={post.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="bg-white rounded-2xl overflow-hidden border border-gray-100 card-hover group cursor-pointer"
                >
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={post.img}
                      alt={post.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute top-3 left-3">
                      <span
                        className="tag-badge text-xs"
                        style={{
                          background: `${categoryColors[post.category] || '#0F6FFF'}`,
                          color: 'white'
                        }}
                      >
                        {post.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-bold text-[#0B1F3A] mb-2 leading-snug group-hover:text-[#0F6FFF] transition-colors line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-gray-500 text-sm leading-relaxed mb-4 line-clamp-2">{post.excerpt}</p>
                    <div className="flex items-center justify-between text-xs text-gray-400">
                      <span>{post.date}</span>
                      <span className="flex items-center gap-1"><Clock size={11} /> {post.readTime}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}

          <div className="text-center mt-12">
            <button className="btn-outline-dark">
              Load More Articles
              <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="section-padding dark-section mesh-bg">
        <div className="container-custom max-w-2xl text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Stay Ahead of Healthcare Innovation
            </h2>
            <p className="text-white/60 mb-8">
              Get our weekly newsletter with the latest in rehabilitation technology, clinical research, and industry news.
            </p>
            <div className="flex gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-5 py-3.5 rounded-full bg-white/10 border border-white/20 text-white placeholder-white/40 focus:outline-none focus:border-[#0F6FFF] text-sm backdrop-blur-sm"
              />
              <button className="btn-primary flex-shrink-0 px-6 py-3.5">
                Subscribe
              </button>
            </div>
            <p className="text-white/30 text-xs mt-4">No spam, ever. Unsubscribe at any time.</p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
