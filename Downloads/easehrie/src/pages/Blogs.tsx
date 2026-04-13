import React from 'react';
import { ArrowRight, Clock } from 'lucide-react';

const blogPosts = [
  {
    title: "Strategic Bulk and Individual Candidate Selection",
    category: "EaseHire",
    excerpt: "Learn how to optimize your candidate selection process using both bulk actions and deep individual analysis for maximum efficiency.",
    date: "April 10, 2024",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Mastering Centralized Applicant Management",
    category: "Management",
    excerpt: "Stop chasing emails. Discover how a centralized dashboard can consolidate every applicant into a single source of truth.",
    date: "April 08, 2024",
    readTime: "7 min read",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Unveiling the Power of EaseHire's ATS",
    category: "ATS",
    excerpt: "A deep dive into the features that make our Applicant Tracking System a powerhouse for modern HR departments.",
    date: "April 05, 2024",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Decoding Recruitment Buzzwords",
    category: "Recruitment Guide",
    excerpt: "What do 'synergy' and 'cultural fit' really mean? We break down the jargon to help you focus on what matters.",
    date: "April 01, 2024",
    readTime: "4 min read",
    image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=800&q=80"
  }
];

const Blogs: React.FC = () => {
  return (
    <div className="pt-40 pb-32 px-4 bg-slate-50 min-h-screen font-sans">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <div className="inline-block px-4 py-1.5 bg-emerald-100 text-emerald-700 rounded-full text-xs font-black uppercase tracking-widest mb-6">
            EaseHire Blog
          </div>
          <h1 className="text-5xl md:text-7xl font-black text-slate-900 mb-8 tracking-tighter">
            Insights For The <span className="text-emerald-600">Modern Recruiter</span>
          </h1>
          <p className="text-xl text-slate-500 max-w-2xl leading-relaxed font-medium">
            Explore our latest articles, guides, and industry insights to help you build better teams and streamline your hiring process.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {blogPosts.map((post) => (
            <div key={post.title} className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-[2.5rem] aspect-[16/9] mb-8 shadow-2xl shadow-slate-200">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                />
                <div className="absolute top-6 left-6 flex gap-2">
                  <span className="bg-white/90 backdrop-blur-md text-emerald-700 px-4 py-1.5 rounded-full text-xs font-black shadow-sm">
                    {post.category}
                  </span>
                </div>
              </div>
              <div className="px-2">
                <div className="flex items-center gap-6 text-slate-400 text-sm font-bold mb-4 uppercase tracking-wider">
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    {post.readTime}
                  </div>
                  <span>{post.date}</span>
                </div>
                <h3 className="text-3xl font-black text-slate-900 mb-4 group-hover:text-emerald-600 transition-colors leading-tight">
                  {post.title}
                </h3>
                <p className="text-slate-500 text-lg leading-relaxed mb-6 line-clamp-2 font-medium">
                  {post.excerpt}
                </p>
                <div className="flex items-center gap-2 text-emerald-600 font-bold hover:gap-4 transition-all group-hover:text-emerald-500">
                  Read Full Article <ArrowRight className="w-5 h-5" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Newsletter Callout */}
        <div className="mt-32 bg-emerald-900 rounded-[3.5rem] p-12 md:p-20 text-center text-white relative overflow-hidden">
          <div className="absolute inset-0 grid-pattern opacity-10 pointer-events-none"></div>
          <div className="relative z-10 max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-black mb-6">Stay Ahead of the Curve</h2>
            <p className="text-emerald-100/70 text-lg mb-10 font-medium leading-relaxed">
              Get the latest recruitment strategies and platform updates delivered straight to your inbox. No spam, just value.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="flex-grow bg-white/10 border border-white/20 rounded-2xl px-6 py-4 text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-[#b8e831] transition-all"
              />
              <button className="bg-[#b8e831] text-emerald-950 px-8 py-4 rounded-2xl font-black hover:scale-105 transition-all">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
