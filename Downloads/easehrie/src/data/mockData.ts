export const navigation = {
  logo: "/logo.webp",
  name: "",
  links: [
    { label: "Home", href: "/" },
    { label: "Use Case", href: "/use-cases" },
    { label: "Pricing", href: "/pricing" },
    { 
      label: "Resources", 
      href: "#",
      children: [
        { label: "Blogs", href: "/blogs" },
        { label: "Support", href: "/support" }
      ]
    },
  ],
  actions: {
    signIn: "Login",
    getStarted: "Let's Start",
  }
};

export const heroContent = {
  badge: "Strategic Candidate Selection • Save Time",
  headline: {
    part1: "Hire Easily &",
    highlight: "Effectively",
    part2: "with EaseHire!"
  },
  subheadline: "EaseHire is a cutting-edge recruitment software that simplifies and streamlines hiring for businesses of all sizes. Empowering recruiters with 15+ job board integrations and trusted by 3000+ businesses globally.",
  ctas: {
    primary: "Get Started Now",
    secondary: "Watch Demo"
  },
  floatingElements: [
    {
      type: "profile-card",
      name: "Maria Angelica M",
      role: "Product Designer",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAxVO39DUU4mAAX_B402YMXN4Fhdv_m1y8i_R06CRh2xYsXn4pW9P5IfL7DlDohtRLRdAOkxy1w9mB_NaKexLScL_tQl2iHAUoGQ_97Otru5Ciymf4tiag00Jr61Tn8t13JUhjmst4WmH6rkFYwnxlfJBDbIqdb-72WJVb0Nvivs5wDaf2NXr03GvPZyk9v8Xf1x_N5acJ7L9ANcviobgjJ6av4bslhrexoCyVwXHaMEELZbQyUQnwo_FgzXXZpWSDOvfIyIGW5tWtA",
      availableFrom: "May 12, 2025"
    },
    {
      type: "match-card",
      name: "Marcus Alexandro",
      role: "Product Manager",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBF-6BKeMjU6b1kgyxMGsZmgnFyak8C6IzEr2V_KLtl7qDl_gUR7LCse710BEQ10sGex6cpNpx1IRh6xFBVyNkMXqaG_YD73ZL3-dprtU1TC3bXETs-wdKfAReasS_J5MWE_BQ--uhvLQi5yK9-vficGOjgbLNRNs09at2CGmTt6KSFSRDBduA8tG6pNzB4o2XU1_ZJwljhhQQ6Na4e2zX-ZFDkchSmIB8ozwPkYLZs1D8gEa80-W28yS_fp3NeanO1kW7g-by6BieH",
      matchScore: "98%"
    }
  ]
};

export const partners = [
  { name: "RDK", icon: "https://lh3.googleusercontent.com/aida-public/AB6AXuAxVO39DUU4mAAX_B402YMXN4Fhdv_m1y8i_R06CRh2xYsXn4pW9P5IfL7DlDohtRLRdAOkxy1w9mB_NaKexLScL_tQl2iHAUoGQ_97Otru5Ciymf4tiag00Jr61Tn8t13JUhjmst4WmH6rkFYwnxlfJBDbIqdb-72WJVb0Nvivs5wDaf2NXr03GvPZyk9v8Xf1x_N5acJ7L9ANcviobgjJ6av4bslhrexoCyVwXHaMEELZbQyUQnwo_FgzXXZpWSDOvfIyIGW5tWtA" },
  { name: "Miro", icon: "https://lh3.googleusercontent.com/aida-public/AB6AXuAxVO39DUU4mAAX_B402YMXN4Fhdv_m1y8i_R06CRh2xYsXn4pW9P5IfL7DlDohtRLRdAOkxy1w9mB_NaKexLScL_tQl2iHAUoGQ_97Otru5Ciymf4tiag00Jr61Tn8t13JUhjmst4WmH6rkFYwnxlfJBDbIqdb-72WJVb0Nvivs5wDaf2NXr03GvPZyk9v8Xf1x_N5acJ7L9ANcviobgjJ6av4bslhrexoCyVwXHaMEELZbQyUQnwo_FgzXXZpWSDOvfIyIGW5tWtA" },
  { name: "Stripe", icon: "https://lh3.googleusercontent.com/aida-public/AB6AXuAxVO39DUU4mAAX_B402YMXN4Fhdv_m1y8i_R06CRh2xYsXn4pW9P5IfL7DlDohtRLRdAOkxy1w9mB_NaKexLScL_tQl2iHAUoGQ_97Otru5Ciymf4tiag00Jr61Tn8t13JUhjmst4WmH6rkFYwnxlfJBDbIqdb-72WJVb0Nvivs5wDaf2NXr03GvPZyk9v8Xf1x_N5acJ7L9ANcviobgjJ6av4bslhrexoCyVwXHaMEELZbQyUQnwo_FgzXXZpWSDOvfIyIGW5tWtA" },
  { name: "Google", icon: "https://lh3.googleusercontent.com/aida-public/AB6AXuAxVO39DUU4mAAX_B402YMXN4Fhdv_m1y8i_R06CRh2xYsXn4pW9P5IfL7DlDohtRLRdAOkxy1w9mB_NaKexLScL_tQl2iHAUoGQ_97Otru5Ciymf4tiag00Jr61Tn8t13JUhjmst4WmH6rkFYwnxlfJBDbIqdb-72WJVb0Nvivs5wDaf2NXr03GvPZyk9v8Xf1x_N5acJ7L9ANcviobgjJ6av4bslhrexoCyVwXHaMEELZbQyUQnwo_FgzXXZpWSDOvfIyIGW5tWtA" },
  { name: "Adobe", icon: "https://lh3.googleusercontent.com/aida-public/AB6AXuAxVO39DUU4mAAX_B402YMXN4Fhdv_m1y8i_R06CRh2xYsXn4pW9P5IfL7DlDohtRLRdAOkxy1w9mB_NaKexLScL_tQl2iHAUoGQ_97Otru5Ciymf4tiag00Jr61Tn8t13JUhjmst4WmH6rkFYwnxlfJBDbIqdb-72WJVb0Nvivs5wDaf2NXr03GvPZyk9v8Xf1x_N5acJ7L9ANcviobgjJ6av4bslhrexoCyVwXHaMEELZbQyUQnwo_FgzXXZpWSDOvfIyIGW5tWtA" },
  { name: "Spotify", icon: "https://lh3.googleusercontent.com/aida-public/AB6AXuAxVO39DUU4mAAX_B402YMXN4Fhdv_m1y8i_R06CRh2xYsXn4pW9P5IfL7DlDohtRLRdAOkxy1w9mB_NaKexLScL_tQl2iHAUoGQ_97Otru5Ciymf4tiag00Jr61Tn8t13JUhjmst4WmH6rkFYwnxlfJBDbIqdb-72WJVb0Nvivs5wDaf2NXr03GvPZyk9v8Xf1x_N5acJ7L9ANcviobgjJ6av4bslhrexoCyVwXHaMEELZbQyUQnwo_FgzXXZpWSDOvfIyIGW5tWtA" }
];

export const stats = {
  tagline: "// About Our Platform //",
  headline: "Transform Your Hiring Process With Smarter, Faster, Data-Driven Technology",
  description: "From sourcing to onboarding, our platform streamlines every step. Hire confidently with tools built to reduce bias and boost efficiency.",
  cta: "About Us",
  items: [
    { value: "50k+", label: "Placements", description: "Successful candidate placements across thousands of industries and regions worldwide." },
    { value: "3000+", label: "Businesses", description: "Forward-thinking companies building better teams through our 100% cloud-based recruitment platform." }
  ]
};

export const features = {
  tagline: "// Our Features //",
  headline: "Powerful Tools Designed For Modern Recruitment",
  items: [
    {
      title: "Multi-Site Advertising",
      description: "Advertise job openings across top portals and social media with one click to reach more talent.",
      variant: "dark-emerald",
      preview: {
        company: "EaseHire",
        position: "Strategy Manager",
        salary: "$12,000/Month",
        location: "Singapore",
        tags: ["• Full-Time", "• High Reach"]
      }
    },
    {
      title: "Centralized Management",
      description: "Consolidate applicants from all sources into a unified system for simplified tracking.",
      variant: "light-emerald",
      preview: {
        name: "Alex Johnson",
        role: "5+ Exp | UX Lead",
        files: "12 File",
        match: "94%"
      }
    },
    {
      title: "Custom Pipelines",
      description: "Tailor your recruitment workflow with custom stages that fit your business needs.",
      variant: "cream",
      preview: {
        message: "Pipeline stage: Technical Interview phase approved.",
        time: "10:45"
      }
    }
  ]
};

export const showcase = {
  tagline: "// SaaS Dashboard //",
  headline: "Explore Our Recruitment Software",
  description: "EaseHire is a cutting-edge recruitment software that simplifies and streamlines the hiring process for businesses of all sizes. Simplify, Streamline, and Supercharge Your Recruitment Process Today!",
  cta: "Start Free Trial",
  image: "/dashboard_preview.png"
};

export const efficiency = {
  tagline: "Total Efficiency",
  headline: "Simplify, Streamline, and Supercharge Your Hiring.",
  description: "Connect businesses with the right candidates seamlessly while overcoming traditional hiring challenges like inefficiency and time-consuming manual processes.",
  cta: "Explore Solutions",
  assessment: {
    title: "Commitment to Excellence",
    description: "Built on a commitment to customer satisfaction and long-term partnerships.",
    cta: "Learn More"
  },
  features: [
    { icon: "rocket_launch", title: "Automation", description: "Automate repetitive tasks to save time and focus on strategic goals.", color: "#855300", bg: "#fff5eb" },
    { icon: "hub", title: "CRM Integration", description: "Nurture candidate relationships with our cutting-edge CRM system.", color: "#006c49", bg: "#e7f9ef" },
    { icon: "analytics", title: "Data-Driven", description: "Make informed hiring decisions with advanced analytics and insights.", color: "#2563eb", bg: "#eff6ff" }
  ]
};

export const pricing = {
  tagline: "// Our Pricing //",
  headline: "Flexible Plans That Scale With Your Hiring Goals",
  items: [
    {
      name: "Starter Plan",
      price: "$250 USD",
      period: "/Month",
      description: "For small teams and growing startups looking for essential recruitment services.",
      cta: "Try Log Now",
      features: [
        "Unlimited job postings",
        "Basic candidate tracking",
        "Integrated assessments",
        "Email messaging",
        "Chat support"
      ]
    },
    {
      name: "Enterprise Plan",
      price: "$1,000 USD",
      period: "/Month",
      description: "A comprehensive solution for large scale hiring and advanced recruitment automation.",
      cta: "Get Started",
      highlighted: true,
      features: [
        "Everything in Starter Plan+",
        "Custom workflow builder",
        "Advanced reporting dashboard",
        "Priority support & onboarding",
        "Multi-branch & API access"
      ]
    }
  ],
  banner: {
    title: "Simplify Your Recruitment And Maximize Results",
    description: "Start your 15-day risk-free trial today. No credit card required. Experience the ultimate recruitment solution.",
    cta: "Start Free Trial"
  }
};

export const integrations = {
  headline: "Connect With The Recruitment Platforms You Already Use Daily",
  subheadline: "Effortlessly integrate with your favorite platforms with an all-in-one unified hiring experience.",
  cta: "Get Started Now",
  apps: [
    { name: "LinkedIn", icon: "https://www.google.com/s2/favicons?domain=linkedin.com&sz=128", delay: "-2s" },
    { name: "Indeed", icon: "https://www.google.com/s2/favicons?domain=indeed.com&sz=128", delay: "-5s" },
    { name: "Glassdoor", icon: "https://www.google.com/s2/favicons?domain=glassdoor.com&sz=128", delay: "-8s" },
    { name: "ZipRecruiter", icon: "https://www.google.com/s2/favicons?domain=ziprecruiter.com&sz=128", delay: "-11s" },
    { name: "foundit", icon: "https://www.google.com/s2/favicons?domain=foundit.in&sz=128", delay: "-14s" },
    { name: "Cutshort", icon: "https://www.google.com/s2/favicons?domain=cutshort.io&sz=128", delay: "-17s" },
    { name: "Google Jobs", icon: "https://www.google.com/s2/favicons?domain=google.com&sz=128", delay: "-20s" },
    { name: "Adzuna", icon: "https://www.google.com/s2/favicons?domain=adzuna.com&sz=128", delay: "-23s" },
    { name: "Careerjet", icon: "https://www.google.com/s2/favicons?domain=careerjet.com&sz=128", delay: "-26s" }
  ]
};

export const serviceCatalog = {
  headline: "EaseHire provides a range of features that assist in managing HR processes, ultimately simplifying your life.",
  description: "These robust features include:",
  items: [
    "Employer Branding",
    "Receive Selective Notifications",
    "Job Analytics",
    "Rate Candidates Based Upon Experience",
    "No Buzzwords Needed",
    "AI Hiring Tools",
    "Strong Applicant Tracking System",
    "Multi-Site Job Posting",
    "Recruiting Software, Anywhere",
    "Evaluate And Hire New Staff",
    "Interview Scheduling Software"
  ]
};

export const footer = {
  logo: "/logo.webp",
  name: "",
  description: "Redefining HR Efficiency: Simplify Applicant Management with EaseHire. Helping businesses of all sizes supercharge their recruitment process.",
  columns: [
    {
      title: "Navigation",
      links: [
        { label: "Home", href: "/" },
        { label: "Pricing", href: "/pricing" },
        { label: "Use Case", href: "/use-cases" },
        { label: "Resources", href: "/resources" },
        { label: "Testimonials", href: "#testimonials" }
      ]
    },
    {
      title: "Features",
      links: [
        { label: "Hiring Tools", href: "/use-cases" },
        { label: "Manage Candidates", href: "/use-cases" },
        { label: "Communication", href: "/use-cases" },
        { label: "Integrations", href: "/resources" }
      ]
    },
    {
      title: "Support",
      links: [
        { label: "FAQs", href: "/resources" },
        { label: "Help Center", href: "/resources" },
        { label: "Community", href: "/resources" }
      ]
    }
  ],
  copyright: "© 2024 EaseHire. All rights reserved."
};
