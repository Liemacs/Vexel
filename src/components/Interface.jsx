import {
  BadgeCheck,
  Biohazard,
  Binoculars,
  CircleDot,
  ClipboardList,
  FileText,
  Radio,
  Route,
  Shield,
  ShieldCheck,
  Truck,
  Warehouse,
  Wrench,
} from 'lucide-react'

const iconMap = {
  BadgeCheck,
  Biohazard,
  Binoculars,
  CircleDot,
  ClipboardList,
  FileText,
  Radio,
  Route,
  Shield,
  ShieldCheck,
  Truck,
  Warehouse,
  Wrench,
}

export function DataIcon({ name, className = 'h-5 w-5' }) {
  const Icon = iconMap[name] ?? CircleDot
  return <Icon className={className} strokeWidth={1.7} />
}

export function SectionHeader({ eyebrow, title, text }) {
  return (
    <div className="mb-8 max-w-3xl">
      {eyebrow ? <p className="kicker">{eyebrow}</p> : null}
      <h2 className="font-display text-4xl uppercase text-stone-100 sm:text-5xl">
        {title}
      </h2>
      {text ? <p className="mt-4 text-base leading-7 text-stone-400 sm:text-lg">{text}</p> : null}
    </div>
  )
}

export function Panel({ children, className = '' }) {
  return <div className={`archive-panel ${className}`}>{children}</div>
}

export function Tag({ children, tone = 'default' }) {
  const toneClass =
    tone === 'danger'
      ? 'border-red-500/35 bg-red-500/10 text-red-200'
      : tone === 'green'
        ? 'border-emerald-500/35 bg-emerald-500/10 text-emerald-200'
        : tone === 'amber'
          ? 'border-amber-400/35 bg-amber-400/10 text-amber-200'
          : 'border-stone-700 bg-stone-900/70 text-stone-300'

  return (
    <span className={`inline-flex items-center rounded-sm border px-2.5 py-1 text-xs uppercase ${toneClass}`}>
      {children}
    </span>
  )
}

export function TerminalPanel({ lines }) {
  return (
    <div className="terminal-panel" aria-label="Vexel terminal">
      {lines.map((line, index) => (
        <p key={line} style={{ '--delay': `${index * 0.28}s` }}>
          {line}
        </p>
      ))}
    </div>
  )
}
