import React from 'react';

const LearningSteps = () => {
  const steps = [
    {
      number: "01",
      title: "Learn. Grow. Upgrade Your Skills.",
      description: "Kickstart your journey with our Advanced Digital Marketing + AI Program — a perfect blend of creativity, analytics, and automation. Learn from certified experts and master AI-driven marketing strategies that are shaping the future. From social media algorithms to SEO automation and ad optimization, get real-world exposure from day one. You'll also receive access to premium AI tools, career mentoring, and guaranteed job placement for top performers.",
      features: [
        "AI-Powered Digital Marketing Fundamentals",
        "Hands-on Practice on Tools like ChatGPT, Canva, and Google Analytics",
        "Campaign Strategy, SEO, and Content Automation",
        "Paid Internship + Job Guarantee for Top Students"
      ]
    },
    {
      number: "02",
      title: "Learn It. Apply It. Get Paid.",
      description: "Experience the perfect balance of learning and earning through our unique \"Concept × Agency Day\" model. On Concept Days, gain in-depth conceptual knowledge from top marketers. On Agency Days, apply what you've learned by running live campaigns and analyzing real-time results. This approach ensures every learner builds confidence, portfolio experience, and an earning potential before placement.",
      features: [
        "Concept × Agency Day Hybrid Learning System",
        "Real Client Campaign Execution & Performance Tracking",
        "AI Tools for Campaign Optimization & Content Creation",
        "Hands-on Exposure to Google Ads, Meta Ads & LinkedIn Campaigns",
        "Earn While You Learn through Paid Agency Projects"
      ]
    },
    {
      number: "03",
      title: "Hybrid AI Marketing Experience",
      description: "Become a part of India's First Hybrid AI Marketing Institute — designed for ambitious learners who want to merge human intelligence with artificial intelligence. Join the Super 10 Meritorious Batch and unlock 72+ hours of interactive live sessions, 20+ top-rated marketing tools worth ₹1L, and 25+ in-depth case studies. Work on real projects, decode successful marketing campaigns, and gain paid internship opportunities that enhance your career portfolio.",
      features: [
        "72+ Hours of Live & Interactive Learning Sessions",
        "20+ Premium Marketing Tools Access (Worth ₹1L)",
        "5+ Live Projects and 25+ Industry Case Studies",
        "Hands-on AI Tools like Jasper, Midjourney, ChatGPT, and Notion AI",
        "Hybrid Learning Format — Online + In-Class",
        "Paid Internship with Career Mentorship & Job Assistance"
      ]
    },
    {
      number: "04",
      title: "Human + AI Advantage",
      description: "In today's digital era, combining human creativity with AI intelligence is your real superpower. This module helps you understand how AI can amplify your decision-making, content creation, and marketing results. You'll master prompt engineering, automation flows, AI content writing, and performance prediction — skills that make you stand out. Remember, AI won't replace you, but your ability to use it effectively will define your success.",
      features: [
        "Understand the Power of Human + AI Collaboration",
        "AI for Content Creation, Marketing Automation, and Strategy",
        "Prompt Engineering & AI Workflow Building",
        "Boost Productivity & Creativity through Smart AI Tools"
      ]
    },
    {
      number: "05",
      title: "Placement Support & Career Launch",
      description: "Your journey doesn't end with learning — it transforms into a career. Our dedicated placement cell ensures you're fully prepared for the industry. From mock interviews to portfolio reviews and direct introductions to hiring partners, we help you secure a job that matches your skills and goals. You'll also get lifetime access to placement support, alumni network, and advanced upskilling resources to keep growing in your digital career.",
      features: [
        "Placement Guarantee for Super 10 Merit Batch",
        "1-on-1 Interview Training and Resume Building Sessions",
        "Portfolio Development & Case Study Presentation",
        "Exclusive Access to Hiring Partners and Recruiters",
        "Continuous Career Mentorship & Alumni Networking",
        "Lifetime Access to Placement Support & Upskilling Resources"
      ]
    }
  ];

  return (
    <section className="py-24 px-6 bg-gradient-to-b from-[#131313] to-[#0a0a0a] relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(229,196,131,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(229,196,131,0.02)_1px,transparent_1px)] bg-[size:80px_80px]"></div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-gradient-to-r from-primary/15 to-amber-600/10 border border-primary/30 mb-6 backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
            <p className="font-label text-[#e5c483] tracking-[0.25em] uppercase text-xs font-semibold">Your Journey</p>
          </div>
          <h2 className="font-headline text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
            From Learning to <span className="text-[#e5c483]">Earning</span>
          </h2>
          <p className="text-[#d0c5b5] text-lg max-w-2xl mx-auto">
            A structured 5-step pathway designed to transform you into an AI-powered digital marketing professional
          </p>
        </div>

        {/* Steps */}
        <div className="space-y-12">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {/* Connecting line */}
              {index < steps.length - 1 && (
                <div className="absolute left-[31px] top-[80px] w-[2px] h-[calc(100%+48px)] bg-gradient-to-b from-primary/40 via-primary/20 to-transparent"></div>
              )}
              
              <div className="flex gap-8 items-start">
                {/* Step Number Circle */}
                <div className="relative flex-shrink-0">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary/20 to-amber-600/10 border-2 border-primary/40 flex items-center justify-center backdrop-blur-sm relative z-10">
                    <span className="font-headline text-2xl font-bold text-[#e5c483]">{step.number}</span>
                  </div>
                  <div className="absolute inset-0 bg-primary/20 blur-xl rounded-full"></div>
                </div>

                {/* Content Card */}
                <div className="flex-1 bg-gradient-to-br from-[#1a1816]/90 to-[#151413]/90 backdrop-blur-xl rounded-3xl border border-primary/20 p-8 md:p-10 shadow-[0_20px_60px_rgba(229,196,131,0.1)] ring-1 ring-white/5 group hover:border-primary/30 transition-all duration-300">
                  <h3 className="font-headline text-2xl md:text-3xl font-bold text-white mb-4 group-hover:text-[#e5c483] transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-[#d0c5b5] text-base md:text-lg leading-relaxed mb-6">
                    {step.description}
                  </p>
                  
                  {/* Features List */}
                  <div className="space-y-3">
                    {step.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-start gap-3">
                        <span className="material-symbols-outlined text-[#e5c483] text-xl mt-0.5 flex-shrink-0" style={{ fontVariationSettings: "'FILL' 1" }}>
                          check_circle
                        </span>
                        <span className="text-[#c8c8b0] text-sm md:text-base">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA at bottom */}
        <div className="mt-20 text-center">
          <div className="relative inline-block group">
            <div className="absolute -inset-1.5 bg-gradient-to-r from-primary via-amber-400 to-primary opacity-75 blur-xl group-hover:opacity-100 group-hover:blur-2xl transition-all duration-500 rounded-full"></div>
            <a href="#apply">
              <button className="relative bg-gradient-to-r from-[#e5c483] via-[#f0d499] to-[#e5c483] text-[#2a1f0a] px-12 py-5 rounded-full font-bold text-sm tracking-[0.15em] uppercase hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 shadow-[0_20px_60px_-15px_rgba(229,196,131,0.5)]">
                Join This Month's Batch
              </button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LearningSteps;
