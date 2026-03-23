import React from 'react';

const Testimonials = () => {
  const students = [
    {
      name: "Priya Venkataraman",
      role: "Performance Marketing Manager, Swiggy",
      quote: "I had done 3 other courses before IconsBase. None of them prepared me for what actually happens inside an agency. IconsBase did in 12 weeks what others couldn't in a year.",
      tag: "₹8L package",
      color: "from-[#FF6600] to-[#FF9933]",
      initials: "PV"
    },
    {
      name: "Arjun Mehta",
      role: "Freelance AI-Marketing Consultant",
      quote: "Within 60 days of completing the program, I had 4 retainer clients paying me ₹55,000/month each. The AI tools module alone was worth 10x the course fee.",
      tag: "₹2.2L/month freelance",
      color: "from-primary to-primary-fixed-dim",
      initials: "AM"
    },
    {
      name: "Sneha Pillai",
      role: "Digital Marketing Lead, Razorpay",
      quote: "The live campaign projects were the difference. I walked into my interview with actual ROAS numbers and a real case study. They hired me on the spot.",
      tag: "Hired in 45 days",
      color: "from-[#1B263B] to-[#415A77]",
      initials: "SP"
    },
    {
      name: "Rahul Krishnamurthy",
      role: "Growth Marketing Manager, Zepto",
      quote: "I was a BCA fresher with zero experience. IconsBase gave me a structured path, real mentorship, and the exact skills the market was asking for. First job: ₹6L CTC.",
      tag: "₹6L as a fresher",
      color: "from-[#3E215D] to-[#6B4E91]",
      initials: "RK"
    }
  ];

  const companies = ["Meesho", "CRED", "upGrad", "PhonePe", "Zomato", "Freshworks", "Paytm", "OLA", "Flipkart", "Swiggy"];

  return (
    <section className="py-32 bg-[#1c1e26] text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-8">
        <div className="flex flex-col lg:flex-row justify-between items-start gap-12 mb-20">
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-[1px] bg-primary"></div>
              <span className="font-label uppercase tracking-[0.3em] text-[10px] text-primary font-bold">Real Results</span>
            </div>
            <h2 className="font-headline text-5xl md:text-6xl font-bold leading-tight">
              People who stopped <br/>
              <span className="text-primary italic">learning</span> and started <br/>
              <span className="text-white italic opacity-90">earning.</span>
            </h2>
          </div>
          <div className="lg:max-w-md pt-6">
            <p className="text-white/60 text-lg font-light leading-relaxed">
              These aren't cherry-picked success stories. These are typical outcomes for students who complete the full program.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-32">
          {students.map((s, i) => (
            <div key={i} className="bg-white/5 p-8 rounded-[2rem] border border-white/10 hover:bg-white/[0.08] transition-all duration-500 group flex flex-col justify-between h-full">
              <div className="space-y-6">
                <div className="flex text-primary">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                  ))}
                </div>
                <p className="text-sm font-light leading-relaxed text-white/80 italic">
                  "{s.quote}"
                </p>
                <div className="inline-block bg-primary/10 border border-primary/20 rounded-full px-4 py-1">
                  <span className="text-[10px] font-bold text-primary uppercase tracking-widest">{s.tag}</span>
                </div>
              </div>
              
              <div className="flex items-center gap-4 pt-8">
                <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${s.color} flex items-center justify-center text-xs font-bold text-white shadow-lg`}>
                  {s.initials}
                </div>
                <div>
                  <div className="text-xs font-bold text-white mb-0.5">{s.name}</div>
                  <div className="text-[9px] text-white/40 uppercase tracking-widest font-bold leading-tight">{s.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center space-y-12">
          <p className="font-label text-[10px] uppercase tracking-[0.4em] text-white/30 font-bold">Our Students Work At</p>
          <div className="flex flex-wrap justify-center gap-x-12 gap-y-8 opacity-40 grayscale group hover:grayscale-0 transition-all duration-1000">
            {companies.map((c, i) => (
              <span key={i} className="text-lg font-headline font-bold tracking-tight hover:text-primary transition-colors cursor-default">{c}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
