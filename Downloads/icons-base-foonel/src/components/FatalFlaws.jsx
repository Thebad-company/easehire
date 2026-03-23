import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const FatalFlaws = () => {
  const containerRef = useRef(null);
  const scrollRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const scrollContainer = scrollRef.current;
      const totalWidth = scrollContainer.scrollWidth;
      const viewportWidth = window.innerWidth;
      
      gsap.to(scrollContainer, {
        x: () => -(totalWidth - viewportWidth + (viewportWidth * 0.1)), // Add 10% viewport padding for airiness
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          pin: true,
          scrub: 1,
          start: "top top",
          end: () => `+=${totalWidth}`,
          invalidateOnRefresh: true,
          anticipatePin: 1
        }
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const flaws = [
    {
      icon: "videocam_off",
      title: "Recorded videos ≠ real skills",
      desc: "Watching a video is passive. Execution is active. You don't learn to swim by watching a documentary.",
      image: "/fatal_flaw_passive_1774262144270.png"
    },
    {
      icon: "campaign",
      title: "No real campaigns",
      desc: "Running ads on a 'test account' with no money is a lie. Real skills are forged under market pressure.",
      image: "/fatal_flaw_market_1774262179194.png"
    },
    {
      icon: "group_work",
      title: "No accountability",
      desc: "Isolation is the enemy of progress. Without a digital tribe, you will stall at the first technical hurdle.",
      image: "/fatal_flaw_tribe_1774262353330.png"
    },
    {
      icon: "workspace_premium",
      title: "No proof of work",
      desc: "A CV is a piece of paper. A live dashboard with results is a career-defining asset.",
      image: "/fatal_flaw_proof_1774262433038.png"
    }
  ];

  return (
    <section ref={containerRef} className="bg-[#0a0a0a] relative overflow-hidden">
      {/* Background elements to match Hero/BrokenSystem */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(229,196,131,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(229,196,131,0.02)_1px,transparent_1px)] bg-[size:40px_40px]"></div>
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-[#e5c483]/5 blur-[120px] rounded-full"></div>

      <div className="px-8 max-w-7xl mx-auto pt-32 pb-16 flex justify-between items-end relative z-10">
        <div>
          <div className="flex items-center gap-3 mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse"></span>
            <p className="text-[#e5c483] font-label uppercase tracking-[0.2em] text-[10px] font-bold">The Fatal Flaws</p>
          </div>
          <h2 className="font-headline text-5xl md:text-7xl font-bold text-white leading-tight">
            Why standard <br />
            <span className="italic text-[#e5c483] drop-shadow-[0_0_30px_rgba(229,196,131,0.2)]">learning fails you.</span>
          </h2>
        </div>
        <div className="hidden md:flex flex-col items-end gap-2 mb-4">
          <div className="text-white/40 text-[10px] font-label uppercase tracking-widest flex items-center gap-2">
            Scroll to explore 
            <span className="material-symbols-outlined text-sm animate-bounce-x">east</span>
          </div>
          <div className="w-32 h-[1px] bg-gradient-to-r from-transparent to-white/20"></div>
        </div>
      </div>

      <div className="overflow-hidden relative z-10">
        <div ref={scrollRef} className="flex gap-8 px-8 pb-40 w-max">
          {flaws.map((flaw, index) => (
            <div 
              key={index} 
              className="group relative min-w-[400px] md:min-w-[500px] aspect-[4/5] rounded-[32px] overflow-hidden border border-white/10 shadow-2xl transition-all duration-500 hover:border-[#e5c483]/30"
            >
              {/* Background Image */}
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                style={{ backgroundImage: `url(${flaw.image})` }}
              ></div>
              
              {/* Overlays */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/60 to-[#0a0a0a]/20"></div>
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-[#e5c483]/5"></div>

              {/* Content */}
              <div className="absolute inset-0 p-10 md:p-14 flex flex-col justify-end">
                <div className="mb-6 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <span className="material-symbols-outlined text-5xl text-[#e5c483] drop-shadow-[0_0_15px_rgba(229,196,131,0.4)]" style={{ fontVariationSettings: "'FILL' 1" }}>
                    {flaw.icon}
                  </span>
                </div>
                
                <h3 className="font-headline text-3xl md:text-4xl font-bold text-white mb-4 leading-tight transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                  {flaw.title.split('≠').map((part, i) => (
                    <React.Fragment key={i}>
                      {i > 0 && <span className="text-[#e5c483] mx-2">≠</span>}
                      {part}
                    </React.Fragment>
                  ))}
                </h3>
                
                <p className="text-white/70 text-base md:text-lg font-light leading-relaxed transform translate-y-0 opacity-100 transition-all duration-500 group-hover:text-white/90">
                  {flaw.desc}
                </p>

                {/* Decorative element */}
                <div className="mt-8 w-12 h-0.5 bg-[#e5c483]/30 group-hover:w-24 transition-all duration-500"></div>
              </div>
            </div>
          ))}
          
          {/* Final Call to Action Spacer/Card */}
          <div className="min-w-[300px] flex items-center justify-center p-12">
            <div className="text-center space-y-4">
                <p className="text-[#e5c483] font-label text-xs tracking-widest uppercase">Ready for the shift?</p>
                <div className="w-12 h-12 rounded-full border border-[#e5c483]/30 flex items-center justify-center mx-auto transition-all hover:bg-[#e5c483]/10 hover:border-[#e5c483]">
                  <span className="material-symbols-outlined text-[#e5c483]">arrow_forward</span>
                </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FatalFlaws;
