import React from 'react';
import { Newspaper, Lightbulb, GraduationCap, ArrowRight } from 'lucide-react';

const coreValues = [
  { title: "Innovation", desc: "Pushing boundaries with cutting-edge recruitment technology." },
  { title: "Customer Centricity", desc: "Personalized solutions that put your needs first." },
  { title: "Integrity", desc: "Upholding the highest ethical standards in every interaction." },
  { title: "Collaboration", desc: "Fostering teamwork to achieve common recruitment goals." },
  { title: "Empowerment", desc: "Equipping teams to make informed, data-driven decisions." },
  { title: "Excellence", desc: "Striving for quality in every feature and service we provide." }
];

const featuredResources = [
  {
    type: "Guide",
    icon: GraduationCap,
    title: "Mastering the AI Interview",
    desc: "How to leverage automation without losing the human touch."
  },
  {
    type: "Article",
    icon: Newspaper,
    title: "The Future of Remote Hiring",
    desc: "Strategies for building global teams in 2025."
  },
  {
    type: "Insight",
    icon: Lightbulb,
    title: "Reducing Bias in Selection",
    desc: "Implementing objective criteria in your screening process."
  }
];

const Resources: React.FC = () => {
  return (
    <div className="pt-40 pb-32 px-4 min-h-screen bg-slate-50">
      <div className="max-w-7xl mx-auto">
        {/* Mission Section */}
        <div className="bg-white rounded-[3.5rem] p-12 md:p-20 shadow-xl shadow-slate-200/50 mb-20 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-emerald-50/50 skew-x-12 translate-x-20 rounded-l-full" />
          <div className="relative z-10 max-w-2xl">
            <div className="inline-block px-4 py-1.5 bg-emerald-100 text-emerald-700 rounded-full text-xs font-black uppercase tracking-widest mb-6">
              Our Mission
            </div>
            <h1 className="text-4xl md:text-6xl font-black text-slate-900 mb-8 leading-[0.9]">
              Find, Attract, and <span className="text-emerald-600">Hire Best-Fit</span> Talent.
            </h1>
            <p className="text-xl text-slate-600 leading-relaxed font-medium">
              Our mission is to provide businesses of all sizes with a user-friendly platform that combines advanced technology with intuitive features to streamline the entire recruitment lifecycle.
            </p>
          </div>
        </div>

        {/* Core Values Grid */}
        <div className="mb-24">
          <h2 className="text-3xl font-black text-slate-900 mb-12 text-center">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {coreValues.map((value) => (
              <div key={value.title} className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-xl font-bold text-slate-900 mb-3">{value.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Resource Highlights */}
        <div>
          <div className="flex items-end justify-between mb-12">
            <div>
              <div className="inline-block px-4 py-1.5 bg-lime-100 text-lime-700 rounded-full text-xs font-black uppercase tracking-widest mb-4">
                Knowledge Hub
              </div>
              <h2 className="text-4xl font-black text-slate-900">Featured Resources</h2>
            </div>
            <button className="hidden md:flex items-center gap-2 text-emerald-600 font-bold hover:gap-4 transition-all group">
              View All Resources <ArrowRight className="w-5 h-5" />
            </button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {featuredResources.map((res) => (
              <div key={res.title} className="bg-white p-8 rounded-[2.5rem] border border-slate-100 group cursor-pointer hover:border-emerald-200 transition-colors">
                <div className="w-12 h-12 rounded-2xl bg-slate-50 flex items-center justify-center mb-6 group-hover:bg-emerald-50 transition-colors">
                  <res.icon className="w-6 h-6 text-slate-400 group-hover:text-emerald-600" />
                </div>
                <div className="text-xs font-black text-emerald-600 uppercase mb-2">{res.type}</div>
                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-emerald-600 transition-colors">{res.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed mb-6">{res.desc}</p>
                <div className="flex items-center gap-2 text-slate-400 font-bold text-xs group-hover:text-emerald-600 transition-colors">
                  Read More <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-all" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resources;
