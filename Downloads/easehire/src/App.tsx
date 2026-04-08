import { motion } from 'framer-motion'
import type { LucideIcon } from 'lucide-react'
import {
  ArrowRight,
  BarChart3,
  BrainCircuit,
  Briefcase,
  CalendarDays,
  Check,
  ChevronRight,
  Filter,
  Globe2,
  LayoutDashboard,
  Search,
  ShieldCheck,
  Sparkles,
  Target,
  Users,
  Workflow,
  Zap,
} from 'lucide-react'

import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { cn } from '@/lib/utils'

type Metric = {
  value: string
  label: string
  detail: string
}

type FeatureTile = {
  title: string
  description: string
  icon: LucideIcon
  stat: string
  tone: 'light' | 'dark' | 'accent'
  gridClass?: string
}

type UseCase = {
  audience: string
  title: string
  description: string
  bullets: string[]
  metric: string
  accent: string
}

type Testimonial = {
  name: string
  role: string
  company: string
  quote: string
  result: string
  initials: string
  accent: string
}

type PricingTier = {
  name: string
  price: string
  description: string
  cta: string
  href: string
  featured?: boolean
  features: string[]
}

type PipelineStage = {
  name: string
  count: string
  candidates: {
    name: string
    role: string
    initials: string
    score: string
    accent: string
  }[]
}

const ease = [0.16, 1, 0.3, 1] as const

const reveal = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.72, delay, ease },
})

const heroMetrics: Metric[] = [
  {
    value: '10+',
    label: 'job boards integrated',
    detail: 'Post to LinkedIn, Indeed, Google Jobs, CareerJet, and more from one place.',
  },
  {
    value: '35%',
    label: 'less admin work',
    detail: 'Automated screening and candidate routing saves hours every week.',
  },
  {
    value: '1 place',
    label: 'to manage hiring',
    detail: 'All candidates from all sources in one unified pipeline.',
  },
]

const partnerLogos = ['Northstar', 'Helio', 'Summit', 'Arcwell', 'Lattice', 'PulseOps']

const painPoints = [
  'Hiring lives across too many tools, tabs, and spreadsheets.',
  'Manual screening and follow-ups slow down every role.',
  'Strong candidates disappear while teams wait on feedback.',
  'Leaders can’t clearly see where the funnel is breaking.',
]

const solutionPoints = [
  'One applicant tracking workspace for every role and stakeholder.',
  'Automation for screening, routing, reminders, and stage movement.',
  'AI signals that help teams prioritize the right people faster.',
  'Live analytics for source quality, conversion, and time-to-hire.',
]

const workflowSteps = [
  {
    number: '01',
    title: 'Post to 10+ job boards from one command center',
    description: 'LinkedIn, Indeed, Google Jobs, CareerJet, and more. No more logging into each platform separately.',
  },
  {
    number: '02',
    title: 'All applications flow into one pipeline',
    description: 'Candidates from every source land in your ATS. Screen, rate, and move them through your custom stages.',
  },
  {
    number: '03',
    title: 'See which sources actually work',
    description: 'Real-time analytics show you which job boards deliver quality candidates. Stop wasting budget on low-performing channels.',
  },
]

const featureTiles: FeatureTile[] = [
  {
    title: 'Multi-Site Job Posting',
    description: 'Post to LinkedIn, Indeed, Google Jobs, CareerJet, and your careers page from one dashboard.',
    icon: Briefcase,
    stat: '10+ job boards integrated',
    tone: 'light',
    gridClass: 'lg:col-span-2',
  },
  {
    title: 'Centralized Applicant Tracking',
    description: 'All candidates from every source in one unified pipeline. No more scattered spreadsheets.',
    icon: LayoutDashboard,
    stat: 'Single source of truth',
    tone: 'dark',
    gridClass: 'lg:row-span-2',
  },
  {
    title: 'Customizable Pipelines',
    description: 'Build recruitment workflows that match your hiring process, not the other way around.',
    icon: Workflow,
    stat: 'Unlimited custom stages',
    tone: 'accent',
  },
  {
    title: 'Bulk & Individual Selection',
    description: 'Move candidates in bulk or one-by-one. Flexible selection for your workflow.',
    icon: Users,
    stat: 'Flexible candidate management',
    tone: 'light',
  },
  {
    title: 'Job Analytics',
    description: 'See which job boards deliver quality candidates. Optimize your recruiting spend.',
    icon: BarChart3,
    stat: 'Real-time source performance',
    tone: 'accent',
  },
  {
    title: 'Interview Scheduling',
    description: 'Automated scheduling keeps candidates warm and reduces coordination overhead.',
    icon: CalendarDays,
    stat: 'Less back-and-forth',
    tone: 'light',
    gridClass: 'lg:col-span-2',
  },
]

const useCases: UseCase[] = [
  {
    audience: 'Small Businesses & Startups',
    title: 'Stop juggling LinkedIn, Indeed, and spreadsheets. Hire faster with less chaos.',
    description:
      'One dashboard for job posting, candidate tracking, and analytics. No more logging into 5 different platforms.',
    bullets: [
      'Post to 10+ job boards at once',
      'All candidates in one place',
      'See which sources work best',
    ],
    metric: 'Save 5+ hours per week',
    accent: 'from-lime-400 to-slate-600',
  },
  {
    audience: 'HR & Recruiting Teams',
    title: 'Build custom pipelines that match your hiring process.',
    description:
      'Create workflows that work for you. Bulk select candidates, automate follow-ups, and track everything in real-time.',
    bullets: [
      'Customizable hiring stages',
      'Bulk and individual selection',
      'Automated candidate routing',
    ],
    metric: '35% less admin work',
    accent: 'from-slate-700 to-slate-500',
  },
  {
    audience: 'Recruitment Agencies',
    title: 'Manage multiple clients and roles without losing track.',
    description:
      'Separate pipelines for each client. Track source quality. Deliver faster shortlists with real data.',
    bullets: [
      'Client-specific workflows',
      'Job analytics by source',
      'Faster candidate delivery',
    ],
    metric: '3x faster shortlist delivery',
    accent: 'from-lime-400 to-slate-600',
  },
]

const testimonials: Testimonial[] = [
  {
    name: 'Sarah Chen',
    role: 'Hiring Manager',
    company: 'Tech Startup',
    quote:
      'We were posting jobs on LinkedIn, Indeed, and Google separately. Now it\'s one click. We get better candidates because we\'re reaching more people without extra work.',
    result: 'Save 5 hours/week',
    initials: 'SC',
    accent: 'from-lime-400 to-slate-600',
  },
  {
    name: 'James Rodriguez',
    role: 'Recruitment Lead',
    company: 'Mid-Size Company',
    quote:
      'The analytics actually show us which job boards work. We stopped wasting money on platforms that don\'t deliver. That alone paid for the tool.',
    result: '40% lower recruiting costs',
    initials: 'JR',
    accent: 'from-slate-700 to-slate-500',
  },
  {
    name: 'Emma Thompson',
    role: 'Agency Owner',
    company: 'Recruitment Agency',
    quote:
      'Managing multiple clients used to be a nightmare. Now each client has their own pipeline, and I can see exactly where every candidate is. Clients love the transparency.',
    result: '3x faster delivery',
    initials: 'ET',
    accent: 'from-lime-400 to-slate-600',
  },
]

const pricingTiers: PricingTier[] = [
  {
    name: 'Starter',
    price: 'Free',
    description: 'Perfect for small teams just getting started with multi-board posting.',
    cta: 'Start Free',
    href: '#final-cta',
    features: ['Up to 3 active roles', 'Post to 5 job boards', 'Basic ATS', 'Email support'],
  },
  {
    name: 'Professional',
    price: '$99/mo',
    description: 'For growing teams that need automation and analytics.',
    cta: 'Start Free Trial',
    href: '#final-cta',
    featured: true,
    features: ['Unlimited active roles', 'Post to 10+ job boards', 'Job analytics', 'Bulk candidate selection', 'Interview scheduling'],
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    description: 'For agencies and large organizations with custom needs.',
    cta: 'Book Demo',
    href: '#final-cta',
    features: ['Everything in Professional', 'Custom integrations', 'Dedicated support', 'Advanced permissions', 'SLA guarantee'],
  },
]

const pipelineStages: PipelineStage[] = [
  {
    name: 'Applied',
    count: '128',
    candidates: [
      { name: 'Maya Chen', role: 'Sr Product Designer', initials: 'MC', score: '96', accent: 'from-lime-400 to-lime-300' },
      { name: 'Liam Torres', role: 'Frontend Engineer', initials: 'LT', score: '91', accent: 'from-slate-600 to-slate-500' },
    ],
  },
  {
    name: 'Screening',
    count: '42',
    candidates: [
      { name: 'Ava Brooks', role: 'Growth Marketer', initials: 'AB', score: '88', accent: 'from-lime-400 to-slate-600' },
    ],
  },
  {
    name: 'Interview',
    count: '18',
    candidates: [
      { name: 'Noah Patel', role: 'Sales Lead', initials: 'NP', score: '93', accent: 'from-slate-700 to-slate-600' },
    ],
  },
  {
    name: 'Offer',
    count: '7',
    candidates: [
      { name: 'Sofia Kim', role: 'People Ops', initials: 'SK', score: '90', accent: 'from-lime-400 to-slate-500' },
    ],
  },
]

function SectionIntro({
  eyebrow,
  title,
  description,
  centered = false,
  light = false,
}: {
  eyebrow: string
  title: string
  description: string
  centered?: boolean
  light?: boolean
}) {
  return (
    <div className={cn('max-w-3xl', centered && 'mx-auto text-center')}>
      <Badge
        variant={light ? 'dark' : 'outline'}
        className={cn('mb-4 w-fit rounded-lg px-3 py-1.5 text-[10px] uppercase tracking-[0.18em] font-semibold', centered && 'mx-auto')}
      >
        {eyebrow}
      </Badge>
      <h2
        className={cn(
          'font-display text-balance text-4xl font-bold tracking-[-0.04em] sm:text-5xl lg:text-[3.5rem] lg:leading-[1]',
          light ? 'text-white' : 'text-slate-950',
        )}
      >
        {title}
      </h2>
      <p
        className={cn(
          'mt-4 max-w-2xl text-base leading-7 sm:text-lg',
          light ? 'text-slate-300' : 'text-slate-600',
        )}
      >
        {description}
      </p>
    </div>
  )
}

function MetricPanel({ metric }: { metric: Metric }) {
  return (
    <div className="rounded-xl border border-slate-200/70 bg-white/95 p-5 shadow-sm">
      <p className="font-display text-3xl font-bold tracking-[-0.06em] text-slate-950">{metric.value}</p>
      <p className="mt-2 text-sm font-semibold text-slate-900">{metric.label}</p>
      <p className="mt-2 text-xs leading-6 text-slate-500">{metric.detail}</p>
    </div>
  )
}

function CandidateMiniCard({
  candidate,
}: {
  candidate: PipelineStage['candidates'][number]
}) {
  return (
    <div className="rounded-lg border border-slate-200/60 bg-white p-3">
      <div className="flex items-center gap-3">
        <Avatar className="size-10 border-slate-200/60 bg-slate-100">
          <AvatarFallback className={cn('bg-gradient-to-br text-white', candidate.accent)}>
            {candidate.initials}
          </AvatarFallback>
        </Avatar>
        <div className="min-w-0">
          <p className="truncate text-sm font-semibold text-slate-950">{candidate.name}</p>
          <p className="truncate text-xs text-slate-500">{candidate.role}</p>
        </div>
      </div>
      <div className="mt-3 flex items-center justify-between rounded-lg bg-slate-50 px-3 py-2 text-xs text-slate-600 font-medium">
        <span>AI match</span>
        <span className="font-semibold text-indigo-600">{candidate.score}%</span>
      </div>
    </div>
  )
}

function HeroStage() {
  return (
    <div className="relative mx-auto w-full">
      <div className="relative overflow-hidden rounded-2xl border border-slate-200/70 bg-white p-4 shadow-sm">
        <div className="rounded-xl border border-slate-200/60 bg-slate-50/50 p-5">
          <div className="mb-6 flex items-center justify-between border-b border-slate-200/60 pb-4">
            <div>
              <p className="text-[9px] uppercase tracking-[0.16em] text-slate-500 font-semibold">Recruiting Dashboard</p>
              <h3 className="font-display mt-2 text-2xl font-bold tracking-[-0.02em] text-slate-950">Your hiring in one place</h3>
            </div>
          </div>

          <div className="grid gap-4 lg:grid-cols-2">
            <div className="space-y-3">
              <div className="rounded-lg border border-slate-200/60 bg-white p-4">
                <p className="text-[9px] uppercase tracking-[0.16em] text-slate-500 font-semibold mb-3">Job Boards</p>
                <div className="flex flex-wrap gap-2">
                  {['LinkedIn', 'Indeed', 'Google Jobs', 'CareerJet'].map((board) => (
                    <span key={board} className="rounded-lg bg-indigo-50 px-3 py-1.5 text-xs font-medium text-indigo-700">
                      {board}
                    </span>
                  ))}
                </div>
              </div>

              <div className="rounded-lg border border-slate-200/60 bg-white p-4">
                <p className="text-[9px] uppercase tracking-[0.16em] text-slate-500 font-semibold mb-3">Pipeline</p>
                <div className="flex gap-2">
                  {['Applied', 'Screening', 'Interview', 'Offer'].map((stage) => (
                    <div key={stage} className="flex-1 rounded-lg bg-slate-100 px-2 py-3 text-center">
                      <p className="text-xs font-semibold text-slate-700">{stage}</p>
                      <p className="mt-1 text-sm font-bold text-slate-950">{Math.floor(Math.random() * 50)}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="space-y-3">
              <div className="rounded-lg border border-slate-200/60 bg-white p-4">
                <p className="text-[9px] uppercase tracking-[0.16em] text-slate-500 font-semibold mb-3">Key Metrics</p>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-slate-600">Time to hire</span>
                    <span className="font-bold text-slate-950">18 days</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-slate-600">Offer rate</span>
                    <span className="font-bold text-slate-950">81%</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-slate-600">Top source</span>
                    <span className="font-bold text-slate-950">LinkedIn</span>
                  </div>
                </div>
              </div>

              <div className="rounded-lg border border-slate-200/60 bg-white p-4">
                <p className="text-[9px] uppercase tracking-[0.16em] text-slate-500 font-semibold mb-3">Next Steps</p>
                <div className="space-y-2 text-sm text-slate-600">
                  <p>✓ Follow up with 5 candidates</p>
                  <p>✓ Schedule 3 interviews</p>
                  <p>✓ Review feedback</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function FeatureCard({ tile }: { tile: FeatureTile }) {
  const toneStyles = {
    light: 'border-slate-200/70 bg-white/96 text-slate-950',
    dark: 'border-slate-200/70 bg-slate-50 text-slate-950',
    accent: 'border-slate-200/70 bg-white/96 text-slate-950',
  }

  const descriptionColor = {
    light: 'text-slate-600',
    dark: 'text-slate-600',
    accent: 'text-slate-600',
  }

  const statColor = {
    light: 'bg-slate-950 text-white',
    dark: 'bg-slate-900 text-white',
    accent: 'bg-indigo-600 text-white',
  }

  return (
    <Card
      className={cn(
        'group h-full overflow-hidden rounded-xl p-0 shadow-sm transition-all duration-300 hover:shadow-md hover:-translate-y-0.5',
        toneStyles[tile.tone],
        tile.gridClass,
      )}
    >
      <CardContent className="flex h-full flex-col justify-between gap-10 p-6 sm:p-7">
        <div className="space-y-5">
          <div className={cn('flex size-11 items-center justify-center rounded-lg', tile.tone === 'dark' ? 'bg-slate-200 text-slate-900' : 'bg-slate-900 text-white')}>
            <tile.icon className="size-5" />
          </div>
          <div>
            <p className={cn('text-[9px] uppercase tracking-[0.2em] font-semibold', tile.tone === 'dark' ? 'text-slate-500' : 'text-slate-500')}>
              Core capability
            </p>
            <h3 className="mt-3 font-display text-2xl font-bold tracking-[-0.04em]">{tile.title}</h3>
            <p className={cn('mt-3 max-w-md text-sm leading-6', descriptionColor[tile.tone])}>{tile.description}</p>
          </div>
        </div>
        <div className={cn('w-fit rounded-lg px-3 py-2 text-xs font-semibold tracking-[0.02em]', statColor[tile.tone])}>{tile.stat}</div>
      </CardContent>
    </Card>
  )
}

function App() {
  return (
    <div className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-x-0 top-0 z-0 h-[600px] bg-[radial-gradient(circle_at_top,rgba(79,70,229,0.06),transparent_48%)]" />
      <div className="pointer-events-none absolute inset-x-0 top-0 z-0 h-[600px] bg-[radial-gradient(circle_at_top_right,rgba(6,182,212,0.05),transparent_44%)]" />      <header className="fixed top-0 inset-x-0 z-50 border-b border-slate-200/60 bg-white/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <a href="#top" className="flex items-center gap-3">
            <img src="/easehire.webp" alt="EaseHire" className="h-10 w-auto" />
          </a>

          <div className="flex items-center gap-3">
            <Button asChild variant="ghost" size="sm" className="hidden sm:inline-flex">
              <a href="#pricing">Log In</a>
            </Button>
            <Button asChild variant="secondary" size="lg" className="h-9 px-4 text-xs sm:h-10 sm:px-6 sm:text-sm">
              <a href="#pricing" className="flex items-center">
                <span className="hidden sm:inline">Start Free Trial</span>
                <span className="sm:hidden">Start</span>
                <ArrowRight className="ml-2 size-4" />
              </a>
            </Button>
          </div>
        </div>
      </header>

      <main id="top" className="relative z-10 mx-auto flex max-w-7xl flex-col gap-24 px-4 pb-20 pt-8 sm:px-6 lg:gap-32 lg:px-8 lg:pt-14">
        <motion.section
          className="grid items-center gap-16 pt-20 lg:grid-cols-[1fr_1.2fr] lg:gap-20 lg:pt-32"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.72, ease }}
        >
          <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
            <Badge variant="soft" className="w-fit rounded-lg px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.18em] sm:text-[11px]">
              <BrainCircuit className="mr-2 size-3.5" /> AI-powered hiring automation
            </Badge>
            <h1 className="font-display mt-6 text-5xl font-bold tracking-[-0.02em] text-slate-950 sm:text-6xl lg:text-7xl lg:leading-[1]">
              Hire faster,<br />
              <span className="text-slate-400">without the</span><br />
              <span className="bg-gradient-to-r from-slate-700 via-slate-600 to-lime-400 bg-clip-text text-transparent">
                tool sprawl
              </span>
            </h1>
            <p className="mt-6 max-w-lg text-base leading-relaxed text-slate-600 sm:text-lg">
              Post to LinkedIn, Indeed, Google Jobs, and more from one dashboard. Screen candidates faster. Track everything in one place.
            </p>

            <div className="mt-8 flex w-full flex-col gap-3 sm:flex-row sm:justify-center lg:justify-start">
              <Button asChild size="xl" variant="secondary" className="font-semibold">
                <a href="#pricing">
                  Start Free Trial
                  <ArrowRight className="ml-2 size-4" />
                </a>
              </Button>
              <Button asChild size="xl" variant="outline" className="font-semibold">
                <a href="#final-cta">
                  Book Demo
                  <ChevronRight className="ml-2 size-4" />
                </a>
              </Button>
            </div>

            <div className="mt-6 flex flex-wrap items-center gap-2 text-sm text-slate-600">
              <span className="inline-flex items-center gap-2">
                <ShieldCheck className="size-4 text-emerald-500" /> No credit card required
              </span>
              <span className="text-slate-300">•</span>
              <span className="inline-flex items-center gap-2">
                <Users className="size-4 text-indigo-500" /> Trusted by 4,000+ recruiters
              </span>
            </div>

            <div className="mt-12 grid gap-6 sm:grid-cols-3 w-full">
              {heroMetrics.map((metric, index) => (
                <motion.div key={metric.label} {...reveal(index * 0.06 + 0.08)}>
                  <div className="rounded-lg border border-slate-200/70 bg-white/96 p-4 shadow-sm">
                    <p className="font-display text-3xl font-bold tracking-[-0.04em] text-slate-950">{metric.value}</p>
                    <p className="mt-2 text-sm font-semibold text-slate-900">{metric.label}</p>
                    <p className="mt-1 text-xs leading-5 text-slate-500">{metric.detail}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <HeroStage />
        </motion.section>

        <motion.section {...reveal(0.04)}>
          <div className="rounded-2xl border border-slate-200/70 bg-white/96 px-6 py-6 shadow-sm lg:px-8">
            <div className="grid gap-8 lg:grid-cols-[0.78fr_1.22fr] lg:items-center">
              <div>
                <p className="text-[10px] uppercase tracking-[0.24em] text-slate-400">Signals recruiters care about</p>
                <h2 className="font-display mt-3 text-3xl font-extrabold tracking-[-0.08em] text-slate-950 sm:text-4xl">
                  Faster hiring, better decisions, cleaner execution.
                </h2>
              </div>
              <div className="grid gap-4 sm:grid-cols-3">
                {heroMetrics.map((metric) => (
                  <div key={metric.label} className="rounded-xl border border-slate-200/70 bg-slate-50/50 p-4">
                    <p className="font-display text-2xl font-extrabold tracking-[-0.08em] text-slate-950">{metric.value}</p>
                    <p className="mt-2 text-sm font-semibold text-slate-800">{metric.label}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="mt-6 flex flex-wrap gap-3 border-t border-slate-200/80 pt-6 text-[12px] font-semibold uppercase tracking-[0.22em] text-slate-400">
              {partnerLogos.map((logo) => (
                <span key={logo} className="rounded-lg border border-slate-200/70 bg-white px-4 py-2 text-slate-500 shadow-sm font-medium text-xs uppercase tracking-[0.16em]">
                  {logo}
                </span>
              ))}
            </div>
          </div>
        </motion.section>

        <motion.section className="grid gap-12 xl:grid-cols-2 xl:items-start" {...reveal(0.06)}>
          <div>
            <p className="text-[9px] uppercase tracking-[0.16em] text-slate-500 font-semibold">Problem to solution</p>
            <h2 className="font-display mt-3 text-4xl font-bold tracking-[-0.04em] text-slate-950 sm:text-5xl">
              Why hiring breaks down
            </h2>
            <p className="mt-4 max-w-lg text-base leading-7 text-slate-600">
              Most teams juggle multiple job boards, spreadsheets, and email. Candidates slip through the cracks. Nothing gets tracked.
            </p>

            <div className="mt-8 space-y-4">
              {[
                { num: '01', title: 'Scattered job postings', desc: 'LinkedIn, Indeed, Google Jobs, your careers page—all separate.' },
                { num: '02', title: 'Manual screening', desc: 'Hours spent reviewing applications instead of talking to candidates.' },
                { num: '03', title: 'Lost candidates', desc: 'Top people disappear while waiting for feedback or interview scheduling.' },
                { num: '04', title: 'No visibility', desc: 'Leaders can\'t see which sources work or where bottlenecks are.' },
              ].map((item) => (
                <div key={item.num} className="flex gap-4">
                  <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-rose-100 text-sm font-bold text-rose-600">
                    {item.num}
                  </div>
                  <div>
                    <p className="font-semibold text-slate-950">{item.title}</p>
                    <p className="mt-1 text-sm text-slate-600">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-2xl border border-slate-200/70 bg-gradient-to-br from-emerald-50 to-cyan-50 p-8">
            <p className="text-[9px] uppercase tracking-[0.16em] text-emerald-600 font-semibold">The EaseHire way</p>
            <h3 className="font-display mt-3 text-3xl font-bold tracking-[-0.04em] text-slate-950">
              One system. Everything tracked.
            </h3>
            <p className="mt-4 text-base leading-7 text-slate-600">
              Post to all job boards at once. Screen faster. See everything in one place.
            </p>

            <div className="mt-8 space-y-4">
              {[
                'Post to 10+ job boards from one dashboard',
                'All candidates flow into a single pipeline',
                'Automated screening and follow-ups',
                'Real-time analytics on source quality',
                'See exactly where candidates are stuck',
              ].map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <div className="mt-1 flex size-5 shrink-0 items-center justify-center rounded-full bg-emerald-500">
                    <Check className="size-3 text-white" />
                  </div>
                  <p className="text-sm font-medium text-slate-700">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.section>

        <motion.section {...reveal(0.08)}>
          <div className="overflow-hidden rounded-2xl border border-slate-200/70 bg-white px-6 py-7 text-slate-950 shadow-sm sm:px-8 lg:px-10">
            <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
              <SectionIntro
                eyebrow="How it works"
                title="Three clear steps from job post to signed offer"
                description="EaseHire keeps each stage moving with less admin, faster feedback, and better visibility into who should move forward."
              />
              <div className="rounded-lg border border-slate-200/70 bg-slate-50/50 px-4 py-2 text-sm text-slate-600 font-medium">
                Smooth workflows from post to offer
              </div>
            </div>

            <div className="mt-10 grid gap-4 lg:grid-cols-3">
              {workflowSteps.map((step, index) => (
                <motion.div key={step.number} {...reveal(index * 0.07 + 0.08)}>
                  <div className="h-full rounded-xl border border-slate-200/70 bg-slate-50/50 p-6">
                    <div className="flex items-start justify-between gap-6">
                      <span className="font-display text-5xl font-bold tracking-[-0.04em] text-slate-200">{step.number}</span>
                      <div className="flex size-11 items-center justify-center rounded-lg bg-indigo-100 text-indigo-600">
                        {index === 0 ? <Globe2 className="size-5" /> : index === 1 ? <Search className="size-5" /> : <CalendarDays className="size-5" />}
                      </div>
                    </div>
                    <h3 className="mt-8 font-display text-2xl font-bold tracking-[-0.02em] text-slate-950">{step.title}</h3>
                    <p className="mt-4 text-sm leading-6 text-slate-600">{step.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        <motion.section {...reveal(0.08)}>
          <SectionIntro
            eyebrow="Features"
            title="Everything teams need to hire faster and with more confidence"
            description="From candidate tracking to AI insights, every core workflow is designed to reduce friction and improve decision quality."
          />
          <div className="mt-10 grid gap-5 lg:grid-cols-3 lg:auto-rows-[minmax(220px,1fr)]">
            {featureTiles.map((tile, index) => (
              <motion.div key={tile.title} {...reveal(index * 0.05 + 0.08)}>
                <FeatureCard tile={tile} />
              </motion.div>
            ))}
          </div>
        </motion.section>

        <motion.section {...reveal(0.1)}>
          <SectionIntro
            eyebrow="Use cases"
            title="Built for the teams that need hiring to move quickly"
            description="Whether you're a startup, an internal talent team, or an agency, EaseHire adapts to your workflow without adding more operational drag."
            centered
          />
          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            {useCases.map((item, index) => (
              <motion.div key={item.audience} {...reveal(index * 0.06 + 0.08)}>
                <Card className="h-full overflow-hidden rounded-xl border-slate-200/70 bg-white/96 shadow-sm">
                  <CardContent className="flex h-full flex-col gap-8 p-6 sm:p-7">
                    <div className={cn('h-1.5 w-full rounded-full bg-gradient-to-r', item.accent)} />
                    <div className="space-y-4">
                      <div className="flex items-center justify-between gap-4">
                        <Badge variant="outline" className="rounded-lg px-3 py-1.5 text-[10px] uppercase tracking-[0.16em] font-semibold">
                          {item.audience}
                        </Badge>
                        <span className="rounded-lg bg-slate-950 px-3 py-2 text-xs font-semibold text-white">{item.metric}</span>
                      </div>
                      <h3 className="font-display text-3xl font-bold tracking-[-0.04em] text-slate-950">{item.title}</h3>
                      <p className="text-sm leading-6 text-slate-600">{item.description}</p>
                    </div>
                    <div className="space-y-3">
                      {item.bullets.map((bullet) => (
                        <div key={bullet} className="flex items-center gap-3 rounded-lg border border-slate-200/70 bg-slate-50/50 px-4 py-3 text-sm text-slate-600 font-medium">
                          <div className="flex size-8 items-center justify-center rounded-lg bg-emerald-100 text-emerald-600">
                            <Check className="size-4" />
                          </div>
                          {bullet}
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.section>

        <motion.section {...reveal(0.1)}>
          <SectionIntro
            eyebrow="Product preview"
            title="See the product the way hiring teams actually use it"
            description="Track candidates, monitor source quality, and get AI-guided next steps from one focused recruiting workspace."
          />
          <div className="mt-10 overflow-hidden rounded-2xl border border-slate-200/70 bg-white p-4 shadow-sm sm:p-5 lg:p-6">
            <div className="grid gap-4 xl:grid-cols-[1.18fr_0.82fr]">
              <div className="rounded-xl border border-slate-200/70 bg-slate-50/50 p-4 sm:p-5">
                <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-200/70 pb-4">
                  <div>
                    <p className="text-[9px] uppercase tracking-[0.16em] text-slate-500 font-semibold">Pipeline preview</p>
                    <h3 className="font-display mt-2 text-3xl font-bold tracking-[-0.04em] text-slate-950">Track candidates with less noise</h3>
                  </div>
                  <div className="flex flex-wrap gap-2 text-xs text-slate-600 font-medium">
                    {['Product roles', 'Remote', 'This month'].map((chip) => (
                      <span key={chip} className="rounded-lg border border-slate-200/70 bg-white px-3 py-2">
                        {chip}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="mt-4 grid gap-3 md:grid-cols-2 xl:grid-cols-4">
                  {pipelineStages.map((stage) => (
                    <div key={stage.name} className="rounded-lg border border-slate-200/70 bg-white p-3">
                      <div className="mb-3 flex items-center justify-between">
                        <p className="text-[9px] uppercase tracking-[0.16em] text-slate-500 font-semibold">{stage.name}</p>
                        <span className="rounded-full bg-slate-100 px-2 py-1 text-xs font-semibold text-slate-700">{stage.count}</span>
                      </div>
                      <div className="space-y-3">
                        {stage.candidates.map((candidate) => (
                          <CandidateMiniCard key={`${stage.name}-${candidate.name}`} candidate={candidate} />
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="grid gap-4">
                <div className="rounded-xl border border-slate-200/70 bg-slate-50/50 p-5">
                  <div className="flex items-center justify-between gap-4">
                    <div>
                      <p className="text-[9px] uppercase tracking-[0.16em] text-slate-500 font-semibold">Source performance</p>
                      <h3 className="font-display mt-2 text-3xl font-bold tracking-[-0.04em] text-slate-950">Analytics that actually guide decisions</h3>
                    </div>
                    <div className="rounded-lg bg-indigo-100 p-3 text-indigo-600">
                      <Target className="size-5" />
                    </div>
                  </div>
                  <div className="mt-6 space-y-4">
                    {[
                      ['Careers page', '74%'],
                      ['LinkedIn', '58%'],
                      ['Referral', '89%'],
                    ].map(([label, value]) => (
                      <div key={label} className="space-y-2">
                        <div className="flex items-center justify-between text-sm text-slate-600 font-medium">
                          <span>{label}</span>
                          <span className="font-semibold text-slate-950">{value}</span>
                        </div>
                        <div className="h-2 rounded-full bg-slate-200">
                          <div className="h-full rounded-full bg-gradient-to-r from-indigo-500 to-cyan-400" style={{ width: value }} />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="rounded-xl border border-slate-200/70 bg-slate-50/50 p-5">
                  <div className="flex items-center gap-3 text-sm font-semibold text-slate-950">
                    <Zap className="size-4 text-indigo-600" /> AI recommendations
                  </div>
                  <div className="mt-4 grid gap-3">
                    {[
                      'Promote 3 high-intent candidates to interview today',
                      'Nudge 2 managers for overdue scorecard feedback',
                      'Shift spend toward referral and inbound channels',
                    ].map((item) => (
                      <div key={item} className="rounded-lg border border-slate-200/70 bg-white px-4 py-3 text-sm text-slate-600 font-medium">
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        <motion.section {...reveal(0.12)}>
          <SectionIntro
            eyebrow="Testimonials"
            title="Teams choose EaseHire because the workflow actually holds up"
            description="The best feedback is simple: less admin, faster decisions, and a hiring process that feels easier to manage every week."
          />
          <div className="mt-10 grid gap-5 lg:grid-cols-[1.18fr_0.82fr]">
            <Card className="overflow-hidden rounded-2xl border-slate-200/70 bg-white/96 shadow-sm">
              <CardContent className="flex h-full flex-col justify-between gap-10 p-7 sm:p-8 lg:p-9">
                <div>
                  <Badge variant="outline" className="rounded-lg px-3 py-1.5 text-[10px] uppercase tracking-[0.16em] font-semibold">
                    Featured customer quote
                  </Badge>
                  <p className="font-display mt-6 text-balance text-4xl font-bold tracking-[-0.04em] text-slate-950 lg:text-[3.4rem] lg:leading-[0.95]">
                    “{testimonials[0].quote}”
                  </p>
                </div>
                <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
                  <div className="flex items-center gap-4">
                    <Avatar className="size-14 border-white shadow-sm">
                      <AvatarFallback className={cn('bg-gradient-to-br text-white', testimonials[0].accent)}>
                        {testimonials[0].initials}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-semibold text-slate-950">{testimonials[0].name}</p>
                      <p className="text-sm text-slate-500">
                        {testimonials[0].role}, {testimonials[0].company}
                      </p>
                    </div>
                  </div>
                  <div className="rounded-lg bg-slate-950 px-4 py-2 text-sm font-semibold text-white">{testimonials[0].result}</div>
                </div>
              </CardContent>
            </Card>

            <div className="grid gap-5">
              {testimonials.slice(1).map((testimonial, index) => (
                <motion.div key={testimonial.name} {...reveal(index * 0.06 + 0.1)}>
                  <Card className="rounded-xl border-slate-200/70 bg-white/96 shadow-sm">
                    <CardContent className="p-6 sm:p-7">
                      <div className="flex items-start justify-between gap-4">
                        <Avatar className="size-12 border-white shadow-sm">
                          <AvatarFallback className={cn('bg-gradient-to-br text-white', testimonial.accent)}>
                            {testimonial.initials}
                          </AvatarFallback>
                        </Avatar>
                        <span className="rounded-lg border border-slate-200/70 bg-slate-50/50 px-3 py-2 text-xs font-semibold text-slate-700">
                          {testimonial.result}
                        </span>
                      </div>
                      <p className="mt-6 text-sm leading-7 text-slate-600">“{testimonial.quote}”</p>
                      <div className="mt-6">
                        <p className="font-semibold text-slate-950">{testimonial.name}</p>
                        <p className="text-sm text-slate-500">
                          {testimonial.role}, {testimonial.company}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        <motion.section id="pricing" {...reveal(0.12)}>
          <SectionIntro
            eyebrow="Pricing"
            title="Pricing that scales with your hiring motion"
            description="Start with a free trial, move into automation as your process matures, and expand with advanced controls when your team needs them."
            centered
          />
          <div className="mt-10 grid gap-5 xl:grid-cols-3">
            {pricingTiers.map((tier, index) => (
              <motion.div key={tier.name} {...reveal(index * 0.05 + 0.08)}>
                <Card
                  className={cn(
                    'h-full overflow-hidden rounded-xl border-slate-200/70 bg-white/96 shadow-sm',
                    tier.featured &&
                      'border-lime-300/50 bg-gradient-to-br from-lime-50 to-slate-50 shadow-md ring-1 ring-lime-300/30',
                  )}
                >
                  <CardContent className="flex h-full flex-col gap-8 p-6 sm:p-7">
                    {tier.featured ? <div className="absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r from-indigo-500 to-cyan-400" /> : null}
                    <div>
                      <div className="flex items-center justify-between gap-4">
                        <div>
                          <p className={cn('text-[9px] uppercase tracking-[0.16em] font-semibold', tier.featured ? 'text-slate-600' : 'text-slate-500')}>
                            {tier.featured ? 'Recommended plan' : 'Plan'}
                          </p>
                          <h3 className={cn('font-display mt-3 text-3xl font-bold tracking-[-0.04em]', tier.featured ? 'text-slate-950' : 'text-slate-950')}>
                            {tier.name}
                          </h3>
                        </div>
                        {tier.featured ? <Badge variant="outline" className="bg-lime-100 text-lime-700 border-lime-300">Most popular</Badge> : null}
                      </div>
                      <p className={cn('mt-4 font-display text-4xl font-bold tracking-[-0.04em]', tier.featured ? 'text-slate-950' : 'text-slate-950')}>
                        {tier.price}
                      </p>
                      <p className={cn('mt-3 text-sm leading-6', tier.featured ? 'text-slate-600' : 'text-slate-600')}>
                        {tier.description}
                      </p>
                    </div>

                    <div className="space-y-3">
                      {tier.features.map((feature) => (
                        <div
                          key={feature}
                          className={cn(
                            'flex items-center gap-3 rounded-lg border px-4 py-3 text-sm font-medium',
                            tier.featured ? 'border-lime-200 bg-lime-50 text-slate-700' : 'border-slate-200/70 bg-slate-50/50 text-slate-600',
                          )}
                        >
                          <div className={cn('flex size-8 items-center justify-center rounded-lg', tier.featured ? 'bg-lime-200 text-lime-700' : 'bg-emerald-100 text-emerald-600')}>
                            <Check className="size-4" />
                          </div>
                          {feature}
                        </div>
                      ))}
                    </div>

                    <div className="mt-auto space-y-3">
                      <Button asChild size="xl" variant={tier.featured ? 'secondary' : 'outline'}>
                        <a href={tier.href}>
                          {tier.cta}
                          <ArrowRight className="ml-2 size-4" />
                        </a>
                      </Button>
                      <p className={cn('text-center text-sm', tier.featured ? 'text-slate-600' : 'text-slate-500')}>
                        No credit card required for the free trial.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.section>

        <motion.section id="final-cta" {...reveal(0.14)}>
          <div className="overflow-hidden rounded-2xl border border-slate-200/70 bg-white p-8 text-slate-950 shadow-sm lg:p-10">
            <div className="grid gap-10 lg:grid-cols-[1.08fr_0.92fr] lg:items-center">
              <div>
                <Badge variant="outline" className="rounded-lg px-3 py-1.5 text-[10px] uppercase tracking-[0.16em] font-semibold">
                  Final CTA
                </Badge>
                <h2 className="font-display mt-6 text-balance text-4xl font-bold tracking-[-0.04em] text-slate-950 sm:text-5xl lg:text-[4.5rem] lg:leading-[0.95]">
                  Stop posting jobs in 5 different places.
                </h2>
                <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-600">
                  One dashboard for job posting, candidate tracking, and analytics. Start your free trial today—no credit card required.
                </p>
                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <Button asChild size="xl" variant="secondary">
                    <a href="#top">
                      Start Free Trial
                      <ArrowRight className="ml-2 size-4" />
                    </a>
                  </Button>
                  <Button asChild size="xl" variant="outline" className="border-slate-200/70 bg-white text-slate-950 hover:bg-slate-50">
                    <a href="mailto:demo@easehire.com">
                      Book Demo
                      <ChevronRight className="ml-2 size-4" />
                    </a>
                  </Button>
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                {[
                  {
                    icon: Zap,
                    title: 'Automate admin',
                    body: 'Screening, follow-up, and stage movement stay in motion automatically.',
                  },
                  {
                    icon: Users,
                    title: 'Align stakeholders',
                    body: 'Recruiters, managers, and leadership work from the same live system.',
                  },
                  {
                    icon: BrainCircuit,
                    title: 'Use AI with context',
                    body: 'Prioritize candidates faster without turning hiring into a black box.',
                  },
                  {
                    icon: Globe2,
                    title: 'Scale cleanly',
                    body: 'Expand your hiring motion without adding more tool sprawl and process debt.',
                  },
                ].map((item) => (
                  <div key={item.title} className="rounded-xl border border-slate-200/70 bg-slate-50/50 p-5">
                    <div className="flex size-11 items-center justify-center rounded-lg bg-indigo-100 text-indigo-600">
                      <item.icon className="size-5" />
                    </div>
                    <h3 className="mt-5 font-display text-2xl font-bold tracking-[-0.02em] text-slate-950">{item.title}</h3>
                    <p className="mt-3 text-sm leading-6 text-slate-600">{item.body}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.section>
      </main>

      <footer className="border-t border-slate-200/70 bg-white py-12 sm:py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-5">
            <div className="lg:col-span-2">
              <div className="flex items-center gap-3">
                <img src="/easehire.webp" alt="EaseHire" className="h-10 w-auto" />
              </div>
              <p className="mt-4 max-w-sm text-sm leading-6 text-slate-600">
                Post to 10+ job boards. Screen candidates faster. Track everything in one place.
              </p>
              <div className="mt-6 flex gap-4">
                {[
                  { icon: '🔗', label: 'LinkedIn' },
                  { icon: '𝕏', label: 'Twitter' },
                  { icon: '📧', label: 'Email' },
                ].map((social) => (
                  <a
                    key={social.label}
                    href="#"
                    className="flex size-10 items-center justify-center rounded-lg border border-slate-200/70 bg-white text-slate-600 transition-colors hover:bg-slate-50 hover:text-slate-950"
                    title={social.label}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>

            <div>
              <p className="font-semibold text-slate-950">Product</p>
              <ul className="mt-4 space-y-3 text-sm">
                {['Features', 'Pricing', 'Security', 'Roadmap'].map((item) => (
                  <li key={item}>
                    <a href="#" className="text-slate-600 transition-colors hover:text-slate-950">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="font-semibold text-slate-950">Company</p>
              <ul className="mt-4 space-y-3 text-sm">
                {['About', 'Blog', 'Careers', 'Contact'].map((item) => (
                  <li key={item}>
                    <a href="#" className="text-slate-600 transition-colors hover:text-slate-950">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="font-semibold text-slate-950">Legal</p>
              <ul className="mt-4 space-y-3 text-sm">
                {['Privacy', 'Terms', 'Cookies', 'Compliance'].map((item) => (
                  <li key={item}>
                    <a href="#" className="text-slate-600 transition-colors hover:text-slate-950">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-12 border-t border-slate-200/70 pt-8">
            <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
              <p className="text-sm text-slate-600">
                © 2026 EaseHire. All rights reserved.
              </p>
              <div className="flex gap-6 text-sm text-slate-600">
                <a href="#" className="transition-colors hover:text-slate-950">
                  Status
                </a>
                <a href="#" className="transition-colors hover:text-slate-950">
                  Changelog
                </a>
                <a href="#" className="transition-colors hover:text-slate-950">
                  Support
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
