export const mockData = {
  nav: {
    logo: "MetroClean® Infrastructure",
    links: [
      { label: "About", href: "#about" },
      { label: "Services", href: "#services" },
      { label: "Safety", href: "#safety" },
      { label: "Mission", href: "#mission" },
      { label: "Contact", href: "#contact" }
    ],
    cta: "Connect Now"
  },
  hero: {
    badge: "CLEANING WITH DIGNITY",
    tagline: "Our Sanitation Pledge for a Cleaner India",
    title: {
      main: "Advanced Municipal &",
      highlight: "Industrial Waste",
      sub: "Management Solutions"
    },
    description: "Delivering advanced, technology-powered solutions for sewer cleaning, industrial, and municipal waste handling.",
    ctaPrimary: "Our Services",
    ctaSecondary: "About Us",
    images: ["/images/hero/hero-1.png", "/images/hero/hero-2.png"],
    floatingCards: [
      { icon: "verified", label: "Heritage", value: "25+ Years Experience", color: "bg-secondary" },
      { icon: "local_shipping", label: "Fleet", value: "200+ Vehicles", color: "bg-primary-container" },
      { icon: "handshake", label: "Compliance", value: "NSKFDC Certified", color: "bg-green-600", isBadge: true }
    ]
  },
  about: {
    title: "Simplifying Sewage & Waste Management, Nationwide!",
    description: "At MetroClean Infrastructure, we specialize in delivering comprehensive sewer cleaning services across Pan India. Our expertise spans across housing societies, shopping malls, hospitals, commercial complexes, industrial plants, sewage treatment facilities, highways, and large-scale infrastructure projects.",
    subtext: "Backed by advanced technology and a dedicated team of professionals, we provide efficient, safe, and customized desilting solutions tailored to client needs."
  },
  stats: [
    { value: "25+", label: "Years of Experience" },
    { value: "250+", label: "Projects Completed" },
    { value: "200+", label: "Fleet of Equipment" },
    { value: "15+", label: "States Served" },
    { value: "30+", label: "Dedicated Engineers" },
    { value: "10+", label: "Workers Trained/Year" }
  ],
  services: {
    title: "Our Specialized Services",
    description: "Comprehensive waste management solutions powered by high-end technology and skilled expertise.",
    categories: [
      {
        title: "Sewage & Wastewater",
        icon: "water_damage",
        items: [
          "Desilting of master sewer lines (Super Sucker)",
          "High-pressure water jetting",
          "Culvert / open drain cleaning",
          "STP / ETP tank cleaning",
          "Rainwater harvesting line cleaning",
          "Sewer line rehabilitation"
        ]
      },
      {
        title: "Industrial Waste",
        icon: "factory",
        items: [
          "HSD Tank Cleaning",
          "Industrial Plant Maintenance",
          "Grease Tank Cleaning"
        ]
      },
      {
        title: "Support Services",
        icon: "engineering",
        items: [
          "Septic tank / manhole emptying",
          "Robotic CCTV Inspection",
          "Road sweepers & Garbage compactors",
          "O&M of suction-cum-jetting units"
        ]
      }
    ]
  },
  highlight: {
    title: "Desilting Using Super Sucker Machines",
    description: "We specialize in deep sewer cleaning using advanced Super Sucker cum Jetting Machines.",
    image: "/images/hero/hero-2.png",
    features: [
      "Deep suction up to 20 meters",
      "High-pressure jetting up to 200 bar",
      "Cleaning up to 240 meters pipeline length",
      "Handles pipelines up to 2000 mm diameter",
      "Continuous operation with dump tanks",
      "On-site sludge collection & transport"
    ]
  },
  serviceDetails: [
    {
      title: "HSD Tank Cleaning",
      description: "Professional cleaning of diesel storage tanks for industrial plants, refineries, and complexes.",
      icon: "oil_barrel",
      image: "/images/web-content/hsd-tank-cleaning-services.png",
      features: [
        "Prevents contamination & corrosion",
        "Ensures fuel quality",
        "Minimal downtime",
        "Safe & compliant operations"
      ]
    },
    {
      title: "CCTV Sewer Inspection",
      description: "Post-cleaning robotic inspection using advanced high-resolution cameras.",
      icon: "videocam",
      image: "/images/web-content/cctv-inspection-server-line-post-desiltin.png",
      features: [
        "Detects blockages & damages",
        "Covers pipelines 100mm to 2200mm",
        "High-resolution footage & reports",
        "Cloud upload & real-time access"
      ]
    },
    {
      title: "Municipal Operations",
      description: "Efficiency, reliability, and environmental responsibility in urban cleaning.",
      icon: "location_city",
      image: "/images/web-content/municipal-cleaning-operation.png",
      features: [
        "Road sweeping & Litter picking",
        "Garbage compactor management",
        "Waste system optimization",
        "Skilled & safety-trained operators"
      ]
    },
    {
      title: "Sewer Rehabilitation",
      description: "Structural repair and restoration using minimal excavation approaches.",
      icon: "construction",
      image: "/images/web-content/sewer-line-rehabilation.png",
      features: [
        "Engineering-grade execution",
        "Long-term durability",
        "Minimal site disruption",
        "Structural integrity restoration"
      ]
    }
  ],
  workflow: {
    title: "Precision Workflow",
    description: "Our systematic approach ensures zero downtime and maximum utility longevity.",
    steps: [
      { num: "01", title: "Inspect", description: "Digital mapping and robotic visual inspection of the target zone.", color: "border-secondary", bg: "bg-secondary" },
      { num: "02", title: "Plan", description: "Customized strategy based on depth, material, and pipeline diameter.", color: "border-primary", bg: "bg-primary" },
      { num: "03", title: "Execute", description: "Deployment of suction units and hazardous material handlers.", color: "border-secondary", bg: "bg-secondary" },
      { num: "04", title: "Verify", description: "Final audit and compliance certification for the infrastructure.", color: "border-primary", bg: "bg-primary" }
    ]
  },
  safety: {
    title: "Safety & Compliance",
    subtitle: "Guided by NSKFDC Standards (Govt. of India)",
    quote: "Safety is not a protocol, it's our promise.",
    description: "We prioritize worker safety through rigorous standards and high-grade equipment.",
    image: "/images/web-content/safety-1.png",
    items: [
      { title: "Oxygen Support", description: "Cylinders and masks for deep-suction environments.", icon: "medical_services" },
      { title: "Protective Gear", description: "Safety belts, gloves, and shoes as per universal standards.", icon: "shield" },
      { title: "Regular Training", description: "Mandatory safety training for all field workers annually.", icon: "school" },
      { title: "Equipment Audit", description: "Daily checks and periodic maintenance of heavy machinery.", icon: "gavel" }
    ]
  },
  logistics: {
    title: "Advanced Logistics & Fleet Management",
    description: "Our fleet is managed with precision telemetry, ensuring operational transparency and efficiency for all our municipal and industrial partners.",
    trustedBy: "Trusted by 12 Municipalities",
    image: "/images/web-content/work.png"
  },
  gallery: {
    title: "Machine & Operational Portfolio",
    description: "Visual evidence of our advanced machinery and cleaning operations in action.",
    featured: [
      { url: "/images/web-content/tank-before.png", label: "Tank Before", category: "Tank Cleaning" },
      { url: "/images/web-content/tank-after.png", label: "Tank After", category: "Tank Cleaning" },
      { url: "/images/web-content/machine.png", label: "Our Tech", category: "Equipment" },
    ],
    categories: ["All", "Sewer Cleaning", "Tank Cleaning", "Municipal", "Equipment"],
    allImages: [
      { url: "/images/web-content/desilting-of-sewer-using-super-sucker-cum-jetting-machine.png", title: "Sewer Desilting", category: "Sewer Cleaning" },
      { url: "/images/web-content/cctv-inspection-server-line-post-desiltin.png", title: "CCTV Inspection", category: "Sewer Cleaning" },
      { url: "/images/web-content/hsd-tank-cleaning-services.png", title: "HSD Tank Cleaning", category: "Tank Cleaning" },
      { url: "/images/web-content/tank-before.png", title: "Industrial Tank (Before)", category: "Tank Cleaning" },
      { url: "/images/web-content/tank-after.png", title: "Industrial Tank (After)", category: "Tank Cleaning" },
      { url: "/images/web-content/municipal-cleaning-operation.png", title: "Municipal Cleaning", category: "Municipal" },
      { url: "/images/web-content/municipal-clening-operation-2.png", title: "Public Sanitation", category: "Municipal" },
      { url: "/images/web-content/municipal-cleaning-operation-3.png", title: "Waste Handling", category: "Municipal" },
      { url: "/images/web-content/sewer-line-rehabilation.png", title: "Line Rehabilitation", category: "Sewer Cleaning" },
      { url: "/images/web-content/sewer-line-rehabilation-2.png", title: "Structural Repair", category: "Sewer Cleaning" },
      { url: "/images/web-content/work.png", title: "On-site Operation", category: "Municipal" },
      { url: "/images/web-content/safety-1.png", title: "Safety Protocol", category: "Equipment" },
      { url: "/images/web-content/safety-2.png", title: "Protective Gear", category: "Equipment" },
      { url: "/images/web-content/machine.png", title: "Super Sucker Tech", category: "Equipment" },
      { url: "/images/web-content/rental.png", title: "Vactor Rental Fleet", category: "Equipment" },
    ]
  },
  mission: {
    title: "Say NO to Manual Scavenging",
    quote: "A future where no human is subjected to unsafe sanitation work.",
    description: "We are committed to eliminating hazardous manual scavenging through technology. Replace risk with innovation, empower sanitation workers, and promote dignity, equality & safety.",
  },
  contact: {
    phones: ["+91 85951 24951", "+91 84474 45599"],
    emails: ["info@metroclean.in", "support@metroclean.in"],
    address: "C-14, Dhumaspur Industrial Area, Sector-66, Gurugram, Haryana – 122101",
    website: "www.metroclean.in"
  },
  footer: {
    tagline: "Sanitation Pledge for a Cleaner India.",
    mission: "Technology-Powered Cleanliness: Our Mission to End Manual Scavenging",
    copyright: "© 2026 MetroClean Infrastructure. All Rights Reserved."
  },
  clients: [
    { name: "Delhi Jal Board", logo: "/images/clients/delhi-jal-board.png" },
    { name: "Hero", logo: "/images/clients/hero.png" },
    { name: "Maruti Suzuki", logo: "/images/clients/maruti-suzuki.png" },
    { name: "Reliance", logo: "/images/clients/reliance.png" },
    { name: "DLF", logo: "/images/clients/dlf.png" },
    { name: "Larsen & Turbo", logo: "/images/clients/larsen-turbo.png" },
    { name: "Ansal", logo: "/images/clients/ansal.png" },
    { name: "Vatika", logo: "/images/clients/vatika.png" },
    { name: "JLL", logo: "/images/clients/jll.png" },
    { name: "CBRE", logo: "/images/clients/cbre.png" },
    { name: "Ambience Mall", logo: "/images/clients/ambience-mall.png" }
  ]
};
