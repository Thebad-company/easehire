import React from 'react';

export const LogoStrip: React.FC = () => {
  const clients = [
    { name: 'Unilever', icon: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAxVO39DUU4mAAX_B402YMXN4Fhdv_m1y8i_R06CRh2xYsXn4pW9P5IfL7DlDohtRLRdAOkxy1w9mB_NaKexLScL_tQl2iHAUoGQ_97Otru5Ciymf4tiag00Jr61Tn8t13JUhjmst4WmH6rkFYwnxlfJBDbIqdb-72WJVb0Nvivs5wDaf2NXr03GvPZyk9v8Xf1x_N5acJ7L9ANcviobgjJ6av4bslhrexoCyVwXHaMEELZbQyUQnwo_FgzXXZpWSDOvfIyIGW5tWtA' },
    { name: 'Schneider Electric', icon: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBF-6BKeMjU6b1kgyxMGsZmgnFyak8C6IzEr2V_KLtl7qDl_gUR7LCse710BEQ10sGex6cpNpx1IRh6xFBVyNkMXqaG_YD73ZL3-dprtU1TC3bXETs-wdKfAReasS_J5MWE_BQ--uhvLQi5yK9-vficGOjgbLNRNs09at2CGmTt6KSFSRDBduA8tG6pNzB4o2XU1_ZJwljhhQQ6Na4e2zX-ZFDkchSmIB8ozwPkYLZs1D8gEa80-W28yS_fp3NeanO1kW7g-by6BieH' },
    { name: 'Walmart', icon: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAxVO39DUU4mAAX_B402YMXN4Fhdv_m1y8i_R06CRh2xYsXn4pW9P5IfL7DlDohtRLRdAOkxy1w9mB_NaKexLScL_tQl2iHAUoGQ_97Otru5Ciymf4tiag00Jr61Tn8t13JUhjmst4WmH6rkFYwnxlfJBDbIqdb-72WJVb0Nvivs5wDaf2NXr03GvPZyk9v8Xf1x_N5acJ7L9ANcviobgjJ6av4bslhrexoCyVwXHaMEELZbQyUQnwo_FgzXXZpWSDOvfIyIGW5tWtA' },
    { name: 'Deloitte.', icon: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAxVO39DUU4mAAX_B402YMXN4Fhdv_m1y8i_R06CRh2xYsXn4pW9P5IfL7DlDohtRLRdAOkxy1w9mB_NaKexLScL_tQl2iHAUoGQ_97Otru5Ciymf4tiag00Jr61Tn8t13JUhjmst4WmH6rkFYwnxlfJBDbIqdb-72WJVb0Nvivs5wDaf2NXr03GvPZyk9v8Xf1x_N5acJ7L9ANcviobgjJ6av4bslhrexoCyVwXHaMEELZbQyUQnwo_FgzXXZpWSDOvfIyIGW5tWtA' },
    { name: 'intel', icon: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAxVO39DUU4mAAX_B402YMXN4Fhdv_m1y8i_R06CRh2xYsXn4pW9P5IfL7DlDohtRLRdAOkxy1w9mB_NaKexLScL_tQl2iHAUoGQ_97Otru5Ciymf4tiag00Jr61Tn8t13JUhjmst4WmH6rkFYwnxlfJBDbIqdb-72WJVb0Nvivs5wDaf2NXr03GvPZyk9v8Xf1x_N5acJ7L9ANcviobgjJ6av4bslhrexoCyVwXHaMEELZbQyUQnwo_FgzXXZpWSDOvfIyIGW5tWtA' },
    { name: 'bp', icon: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAxVO39DUU4mAAX_B402YMXN4Fhdv_m1y8i_R06CRh2xYsXn4pW9P5IfL7DlDohtRLRdAOkxy1w9mB_NaKexLScL_tQl2iHAUoGQ_97Otru5Ciymf4tiag00Jr61Tn8t13JUhjmst4WmH6rkFYwnxlfJBDbIqdb-72WJVb0Nvivs5wDaf2NXr03GvPZyk9v8Xf1x_N5acJ7L9ANcviobgjJ6av4bslhrexoCyVwXHaMEELZbQyUQnwo_FgzXXZpWSDOvfIyIGW5tWtA' },
    { name: 'ADP', icon: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAxVO39DUU4mAAX_B402YMXN4Fhdv_m1y8i_R06CRh2xYsXn4pW9P5IfL7DlDohtRLRdAOkxy1w9mB_NaKexLScL_tQl2iHAUoGQ_97Otru5Ciymf4tiag00Jr61Tn8t13JUhjmst4WmH6rkFYwnxlfJBDbIqdb-72WJVb0Nvivs5wDaf2NXr03GvPZyk9v8Xf1x_N5acJ7L9ANcviobgjJ6av4bslhrexoCyVwXHaMEELZbQyUQnwo_FgzXXZpWSDOvfIyIGW5tWtA' },
    { name: 'Standard Chartered', icon: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAxVO39DUU4mAAX_B402YMXN4Fhdv_m1y8i_R06CRh2xYsXn4pW9P5IfL7DlDohtRLRdAOkxy1w9mB_NaKexLScL_tQl2iHAUoGQ_97Otru5Ciymf4tiag00Jr61Tn8t13JUhjmst4WmH6rkFYwnxlfJBDbIqdb-72WJVb0Nvivs5wDaf2NXr03GvPZyk9v8Xf1x_N5acJ7L9ANcviobgjJ6av4bslhrexoCyVwXHaMEELZbQyUQnwo_FgzXXZpWSDOvfIyIGW5tWtA' },
    { name: 'BlueCross', icon: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAxVO39DUU4mAAX_B402YMXN4Fhdv_m1y8i_R06CRh2xYsXn4pW9P5IfL7DlDohtRLRdAOkxy1w9mB_NaKexLScL_tQl2iHAUoGQ_97Otru5Ciymf4tiag00Jr61Tn8t13JUhjmst4WmH6rkFYwnxlfJBDbIqdb-72WJVb0Nvivs5wDaf2NXr03GvPZyk9v8Xf1x_N5acJ7L9ANcviobgjJ6av4bslhrexoCyVwXHaMEELZbQyUQnwo_FgzXXZpWSDOvfIyIGW5tWtA' }
  ];

  return (
    <section className="py-32 px-6 bg-white overflow-hidden relative">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        {/* Header */}
        <div className="text-left w-full mb-12 px-4">
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 tracking-tight">Our Clients</h2>
          <p className="text-slate-500 max-w-lg leading-relaxed font-bold text-sm md:text-base">
            EaseHire is helping the world's leading enterprises democratize career development, unlock skills and build a future-proof workforce.
          </p>
        </div>

        {/* Blob Container */}
        <div className="relative w-full max-w-5xl h-[400px] md:h-[500px] flex items-center justify-center group/container">
          {/* Background Lime Green Blob */}
          <div className="absolute top-[10%] right-[0%] w-[90%] md:w-[80%] h-[80%] md:h-[90%] bg-[#b8e831] rounded-[60%_40%_70%_30%] opacity-80 blur-0 animate-pulse transition-transform duration-[2000ms] group-hover/container:rotate-6"></div>

          {/* Main Deep Emerald Blob */}
          <div className="absolute top-[0%] left-[5%] w-[90%] md:w-[85%] h-[85%] md:h-[95%] bg-[#005236] rounded-[40%_60%_30%_70%] shadow-3xl flex flex-wrap justify-center items-center content-center p-6 md:p-12 gap-x-8 md:gap-x-16 gap-y-6 md:gap-y-12 transition-all duration-[2000ms] group-hover/container:scale-105 group-hover/container:-rotate-3">
            {clients.map((client) => (
              <div
                key={client.name}
                className="flex items-center justify-center transition-all duration-500 hover:scale-125 hover:rotate-6 cursor-default group"
              >
                <span className="text-white text-xl font-black tracking-tighter uppercase whitespace-nowrap opacity-70 group-hover:opacity-100 group-hover:drop-shadow-[0_0_15px_rgba(255,255,255,0.5)] transition-all">
                  {client.name}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Footer Text */}
        <div className="mt-16 text-slate-400 text-xs font-bold tracking-widest uppercase">
          What they say on us
        </div>
      </div>
    </section>
  );
};
