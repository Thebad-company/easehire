import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import heroDashboard from '../assets/hero-dashboard.png';
import specialistImg from '../assets/specialist.png';

const Hero = () => {
  const sectionRef = useRef(null);
  const card1Ref = useRef(null);
  const card2Ref = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Entry animations
      gsap.from(".hero-content > *", {
        y: 50,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power4.out"
      });

      // Floating animations for cards
      gsap.to(card1Ref.current, {
        y: -10,
        rotation: -1,
        duration: 4,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut"
      });

      gsap.to(card2Ref.current, {
        y: 10,
        rotation: 1,
        duration: 5,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        delay: 0.5
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative min-h-screen flex items-center px-6 overflow-hidden py-20 bg-gradient-to-br from-[#0a0a0a] via-[#131313] to-[#1a1410]">
      {/* Enhanced gradient background with warmer tones */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-primary/8 via-transparent to-transparent -z-10"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-amber-900/10 via-transparent to-transparent -z-10"></div>
      
      {/* Refined grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(229,196,131,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(229,196,131,0.02)_1px,transparent_1px)] bg-[size:80px_80px] -z-10"></div>
      
      {/* Ambient glow effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-[120px] -z-10"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-amber-600/5 rounded-full blur-[120px] -z-10"></div>
      
      <div className="max-w-7xl w-full mx-auto relative z-10">
        <div className="grid lg:grid-cols-[1fr_2fr_1fr] gap-8 items-center">
          
          {/* Left Card - Dashboard */}
          <div ref={card1Ref} className="hidden lg:block">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-amber-500/10 to-transparent blur-2xl opacity-60 group-hover:opacity-80 transition-opacity duration-500 rounded-[2rem]"></div>
              <div className="relative p-2.5 bg-gradient-to-br from-[#1a1816]/90 to-[#151413]/90 backdrop-blur-xl rounded-[1.5rem] border border-primary/20 shadow-[0_20px_60px_rgba(229,196,131,0.15)] overflow-hidden ring-1 ring-white/10">
                <img src={heroDashboard} alt="Dashboard Analytics" className="w-full rounded-[1.2rem] opacity-95" />
              </div>
            </div>
          </div>

          {/* Center Content */}
          <div className="hero-content text-center">
            {/* Badge with enhanced styling */}
            <div className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-gradient-to-r from-primary/20 to-amber-600/15 border border-primary/40 mb-8 backdrop-blur-sm shadow-lg shadow-primary/10">
              <span className="w-2 h-2 rounded-full bg-primary shadow-lg shadow-primary/50 animate-pulse"></span>
              <p className="font-label text-[#e5c483] tracking-[0.25em] uppercase text-xs font-semibold">The Digital Curator</p>
            </div>
            
            {/* Improved heading with enhanced contrast */}
            <h1 className="font-headline text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.1] tracking-tight text-white mb-6 max-w-4xl mx-auto drop-shadow-2xl">
              Everyone is learning digital marketing. <span className="relative inline-block">
                <span className="italic text-[#e5c483] drop-shadow-[0_0_40px_rgba(229,196,131,0.5)]">Nobody is getting hired.</span>
                <svg className="absolute -bottom-2 left-0 w-full h-3 text-primary/50" viewBox="0 0 300 12" preserveAspectRatio="none">
                  <path d="M0,7 Q75,3 150,7 T300,7" stroke="currentColor" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
                </svg>
              </span>
            </h1>
            
            {/* Enhanced description */}
            <p className="text-[#e5e2e1] text-base md:text-lg lg:text-xl max-w-2xl mx-auto font-normal leading-relaxed mb-10">
              Because courses teach theory. The market pays for <span className="text-[#e5c483] font-semibold">execution</span>.<br/>
              Stop consuming, start curating your future.
            </p>
            
            {/* Enhanced CTA section */}
            <div className="flex flex-col items-center gap-5">
              <div className="relative group">
                <div className="absolute -inset-1.5 bg-gradient-to-r from-primary via-amber-400 to-primary opacity-75 blur-xl group-hover:opacity-100 group-hover:blur-2xl transition-all duration-500 rounded-full"></div>
                <a href="#apply">
                  <button className="relative bg-gradient-to-r from-[#e5c483] via-[#f0d499] to-[#e5c483] text-[#2a1f0a] px-10 py-5 rounded-full font-bold text-xs tracking-[0.15em] uppercase hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 shadow-[0_20px_60px_-15px_rgba(229,196,131,0.5)] hover:shadow-[0_30px_80px_-15px_rgba(229,196,131,0.7)]">
                    Join This Month's Batch
                  </button>
                </a>
              </div>
              
              {/* Trust indicators */}
              <div className="flex items-center gap-3 text-[#d0c5b5] text-xs font-label tracking-wider uppercase">
                <span className="material-symbols-outlined text-[#e5c483] text-base drop-shadow-lg" style={{ fontVariationSettings: "'FILL' 1" }}>verified</span>
                <span>Instant Access</span>
                <span className="opacity-50">•</span>
                <span>No Card Required</span>
              </div>
            </div>

            {/* Mobile Cards */}
            <div className="lg:hidden mt-12 space-y-6">
              <div className="max-w-md mx-auto">
                <div className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-amber-500/10 to-transparent blur-2xl opacity-60 rounded-[2rem]"></div>
                  <div className="relative p-2.5 bg-gradient-to-br from-[#1a1816]/90 to-[#151413]/90 backdrop-blur-xl rounded-[1.5rem] border border-primary/20 shadow-[0_20px_60px_rgba(229,196,131,0.15)] overflow-hidden ring-1 ring-white/10">
                    <img src={heroDashboard} alt="Dashboard Analytics" className="w-full rounded-[1.2rem] opacity-95" />
                  </div>
                </div>
              </div>
              
              <div className="max-w-sm mx-auto">
                <div className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/15 to-amber-600/10 blur-xl opacity-50 rounded-[2rem]"></div>
                  <div className="relative p-6 bg-gradient-to-br from-[#1f1d1a]/95 to-[#181614]/95 backdrop-blur-xl rounded-[1.5rem] border border-primary/20 shadow-[0_20px_60px_rgba(229,196,131,0.2)] space-y-6 ring-1 ring-white/10">
                    <div className="flex gap-3 items-center">
                      <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-primary/50 ring-2 ring-primary/20 shadow-lg shadow-primary/20 flex-shrink-0">
                        <img src={specialistImg} alt="Success Story - James R." className="w-full h-full object-cover" />
                      </div>
                      <div>
                        <div className="text-sm font-bold text-white mb-0.5">James R.</div>
                        <div className="text-[10px] text-[#c8c8b0] uppercase font-semibold tracking-wider">Execution Specialist</div>
                      </div>
                    </div>
                    <div className="space-y-4 pt-4 border-t border-primary/15">
                      <div className="flex justify-between items-center gap-4">
                        <span className="text-[10px] text-[#998f81] uppercase font-semibold tracking-wider">Hired By</span>
                        <span className="text-xs text-[#e5c483] font-bold text-right">Meta-X Agency</span>
                      </div>
                      <div className="flex justify-between items-center gap-4">
                        <span className="text-[10px] text-[#998f81] uppercase font-semibold tracking-wider">Starting Salary</span>
                        <span className="text-sm text-white font-bold">$82,000</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Card - Specialist */}
          <div ref={card2Ref} className="hidden lg:block">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/15 to-amber-600/10 blur-xl opacity-50 group-hover:opacity-70 transition-opacity duration-500 rounded-[2rem]"></div>
              <div className="relative p-6 xl:p-8 bg-gradient-to-br from-[#1f1d1a]/95 to-[#181614]/95 backdrop-blur-xl rounded-[1.5rem] border border-primary/20 shadow-[0_20px_60px_rgba(229,196,131,0.2)] space-y-6 ring-1 ring-white/10">
                <div className="flex gap-3 items-center">
                  <div className="w-12 h-12 xl:w-14 xl:h-14 rounded-full overflow-hidden border-2 border-primary/50 ring-2 ring-primary/20 shadow-lg shadow-primary/20 flex-shrink-0">
                    <img src={specialistImg} alt="Success Story - James R." className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <div className="text-sm xl:text-base font-bold text-white mb-0.5">James R.</div>
                    <div className="text-[10px] xl:text-xs text-[#c8c8b0] uppercase font-semibold tracking-wider">Execution Specialist</div>
                  </div>
                </div>
                <div className="space-y-4 xl:space-y-5 pt-4 border-t border-primary/15">
                  <div className="flex justify-between items-center gap-4">
                    <span className="text-[10px] xl:text-xs text-[#998f81] uppercase font-semibold tracking-wider">Hired By</span>
                    <span className="text-xs xl:text-sm text-[#e5c483] font-bold text-right">Meta-X Agency</span>
                  </div>
                  <div className="flex justify-between items-center gap-4">
                    <span className="text-[10px] xl:text-xs text-[#998f81] uppercase font-semibold tracking-wider">Starting Salary</span>
                    <span className="text-sm xl:text-base text-white font-bold">$82,000</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

    </section>
  );
};

export default Hero;
