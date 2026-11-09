import { useState } from 'react'

// ── i18n strings ──────────────────────────────────────────────────────────────

type Lang = 'en' | 'zh'

const t: Record<Lang, Record<string, string>> = {
  en: {
    about: 'About',
    projects: 'Projects',
    aboutLabel: '01 — About',
    projectsLabel: '02 — Projects',
    bio1: 'I build web tools and Python scripts that sit at the intersection of data, design, and automation. Currently studying Computer Science at UCL, open to summer internships for 2027.',
    bio2: 'Outside of code I read history books, photograph cities at dawn, and slowly work through every Criterion film.',
    headline: 'Developer, researcher,',
    headlineSub: 'occasional overthinker.',
    filterAll: 'All',
    filterWeb: 'Web',
    filterPython: 'Python',
    filterData: 'Data',
    filterTool: 'Tool',
    moreWork: 'More work in progress — check back later.',
    allRepos: 'All repos on GitHub',
    viewLink: 'View',
    privateLabel: 'Private',
    ongoing: 'ongoing',
    completed: 'completed',
    archived: 'archived',
    of: 'of',
    builtWith: 'Built with React + Vite',
  },
  zh: {
    about: '关于',
    projects: '项目',
    aboutLabel: '01 — 关于',
    projectsLabel: '02 — 项目',
    bio1: '我构建处于数据、设计与自动化交叉点的网络工具和 Python 脚本。目前就读于伦敦大学学院计算机科学专业，欢迎 2027 年暑期实习机会。',
    bio2: '在编程之外，我阅读历史书籍，在黎明时分拍摄城市，并慢慢看完每一部 Criterion 电影。',
    headline: '开发者、研究者，',
    headlineSub: '偶尔想太多。',
    filterAll: '全部',
    filterWeb: '网页',
    filterPython: 'Python',
    filterData: '数据',
    filterTool: '工具',
    moreWork: '更多作品正在进行中——请稍后回来查看。',
    allRepos: '在 GitHub 查看所有仓库',
    viewLink: '查看',
    privateLabel: '私有',
    ongoing: '进行中',
    completed: '已完成',
    archived: '已归档',
    of: '/',
    builtWith: '使用 React + Vite 构建',
  },
}

// ── Icons ─────────────────────────────────────────────────────────────────────

function SunIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="12" cy="12" r="5" fill="#f59e0b" />
      {[0,45,90,135,180,225,270,315].map((deg, i) => (
        <line
          key={`ray-${i}`}
          x1={12 + 6.5 * Math.cos((deg * Math.PI) / 180)}
          y1={12 + 6.5 * Math.sin((deg * Math.PI) / 180)}
          x2={12 + 9.5 * Math.cos((deg * Math.PI) / 180)}
          y2={12 + 9.5 * Math.sin((deg * Math.PI) / 180)}
          stroke="#fbbf24"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
      ))}
    </svg>
  )
}

function MoonIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" fill="#93b4d4" stroke="none" />
    </svg>
  )
}

function GithubIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2z"/>
    </svg>
  )
}

function LinkedInIcon() {
  return (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
    </svg>
  )
}

function TwitterIcon() {
  return (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.748l7.73-8.835L1.254 2.25H8.08l4.253 5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
    </svg>
  )
}

function ExternalLinkIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
      <polyline points="15 3 21 3 21 9"/>
      <line x1="10" y1="14" x2="21" y2="3"/>
    </svg>
  )
}

function ArrowIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <line x1="5" y1="12" x2="19" y2="12"/>
      <polyline points="12 5 19 12 12 19"/>
    </svg>
  )
}

// ── Data ──────────────────────────────────────────────────────────────────────

interface Project {
  id: number
  type: 'web' | 'python' | 'data' | 'tool'
  title: string
  description: string
  tags: string[]
  year: string
  status: 'completed' | 'ongoing' | 'archived'
  link?: string
}

const projects: Project[] = [
  {
    id: 1, type: 'web',
    title: 'Personal Portfolio',
    description: 'This site — a minimal portfolio built with React and Vite, featuring adaptive day and night modes and a curated project archive.',
    tags: ['React', 'TypeScript', 'Tailwind'], year: '2026', status: 'ongoing',
  },
  {
    id: 2, type: 'python',
    title: 'Data Pipeline CLI',
    description: 'A command-line tool for ingesting, cleaning, and exporting tabular datasets. Supports CSV, JSON, and Parquet with configurable transformation steps.',
    tags: ['Python', 'Pandas', 'Click'], year: '2025', status: 'completed', link: '#',
  },
  {
    id: 3, type: 'data',
    title: 'Election Results Visualiser',
    description: 'Interactive choropleth maps and time-series charts of historical election results across 30 countries, powered by a scraped and normalised open dataset.',
    tags: ['Python', 'Plotly', 'BeautifulSoup'], year: '2025', status: 'completed', link: '#',
  },
  {
    id: 4, type: 'python',
    title: 'PDF Batch Renamer',
    description: 'Extracts structured metadata from academic PDFs (title, authors, year) using pdfminer and a lightweight NLP pass, then renames files to a consistent schema.',
    tags: ['Python', 'pdfminer', 'spaCy'], year: '2024', status: 'completed', link: '#',
  },
  {
    id: 5, type: 'tool',
    title: 'Pomodoro Focus Timer',
    description: 'A distraction-free focus timer with configurable session lengths, ambient sound loops, and a daily session history stored in localStorage.',
    tags: ['React', 'Web Audio API'], year: '2024', status: 'archived',
  },
  {
    id: 6, type: 'python',
    title: 'Habit Tracker',
    description: 'Terminal-based habit logging tool with streak tracking and weekly summaries rendered as ASCII bar charts. Data stored in a local SQLite database.',
    tags: ['Python', 'SQLite', 'Rich'], year: '2024', status: 'completed', link: '#',
  },
]

// ── Theme toggle (Natalie Almosa circle) ─────────────────────────────────────

function ThemeToggle({ dark, onToggle }: { dark: boolean; onToggle: () => void }) {
  return (
    <button
      onClick={onToggle}
      className={`theme-btn ${dark ? 'night' : 'day'}`}
      aria-label={dark ? 'Switch to day mode' : 'Switch to night mode'}
      title={dark ? 'Day mode' : 'Night mode'}
    >
      <div className="icon-wrap">
        <span className="sun-icon"><SunIcon /></span>
        <span className="moon-icon"><MoonIcon /></span>
      </div>
    </button>
  )
}

// ── Text size toggle ──────────────────────────────────────────────────────────

function TextSizeToggle({ large, onToggle }: { large: boolean; onToggle: () => void }) {
  return (
    <button
      onClick={onToggle}
      className={`textsize-btn ${large ? 'large-active' : 'normal-active'}`}
      aria-label={large ? 'Switch to normal text size' : 'Switch to large text size'}
      title={large ? 'Normal size' : 'Large size'}
    >
      {/* small T on left, large T on right */}
      <span className="t-small">T</span>
      <span className="t-large">T</span>
    </button>
  )
}

// ── Language switcher ─────────────────────────────────────────────────────────

function LangSwitcher({ lang, onSelect }: { lang: Lang; onSelect: (l: Lang) => void }) {
  const labels: Record<Lang, string> = { en: 'EN', zh: '中' }
  return (
    <div className="lang-switcher" aria-label="Language">
      {(['en', 'zh'] as Lang[]).map(l => (
        <button
          key={l}
          className={`lang-btn ${lang === l ? 'active' : ''}`}
          onClick={() => onSelect(l)}
          aria-pressed={lang === l}
        >
          {labels[l]}
        </button>
      ))}
    </div>
  )
}

// ── Header ────────────────────────────────────────────────────────────────────

function Header({
  dark, onToggleDark,
  large, onToggleLarge,
  lang, onSelectLang,
  strings,
}: {
  dark: boolean; onToggleDark: () => void
  large: boolean; onToggleLarge: () => void
  lang: Lang; onSelectLang: (l: Lang) => void
  strings: Record<string, string>
}) {
  return (
    <header style={{ backgroundColor: 'var(--bg)', transition: 'background-color 0.35s ease' }}>
      <div style={{ maxWidth: '920px', margin: '0 auto', padding: '0 32px' }}>
        <div style={{
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          height: '68px', gap: '24px',
        }}>
          {/* Name */}
          <a
            href="#"
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: '1.125rem',
              fontWeight: 600,
              color: 'var(--text)',
              textDecoration: 'none',
              letterSpacing: '-0.01em',
              flexShrink: 0,
              transition: 'color 0.2s',
            }}
            onMouseOver={e => (e.currentTarget.style.color = 'var(--accent)')}
            onMouseOut={e => (e.currentTarget.style.color = 'var(--text)')}
          >
            Alex Morrow
          </a>

          {/* Nav */}
          <nav style={{ display: 'flex', alignItems: 'center', gap: '28px', flex: 1 }}>
            <a href="#about" className="nav-link">{strings.about}</a>
            <a href="#projects" className="nav-link">{strings.projects}</a>
          </nav>

          {/* Controls: theme + size + lang + divider + socials */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', flexShrink: 0 }}>
            <ThemeToggle dark={dark} onToggle={onToggleDark} />
            <TextSizeToggle large={large} onToggle={onToggleLarge} />
            <LangSwitcher lang={lang} onSelect={onSelectLang} />

            <div className="v-divider" />

            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="GitHub"><GithubIcon /></a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="LinkedIn"><LinkedInIcon /></a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="Twitter / X"><TwitterIcon /></a>
            </div>
          </div>
        </div>
      </div>

      <div className="header-separator" />
    </header>
  )
}

// ── About ─────────────────────────────────────────────────────────────────────

function About({ strings, large }: { strings: Record<string, string>; large: boolean }) {
  const bodySize = large ? '1.0625rem' : '0.9375rem'
  return (
    <section
      id="about"
      style={{
        maxWidth: '920px', margin: '0 auto',
        padding: '72px 32px 64px',
        display: 'grid',
        gridTemplateColumns: '1fr 2fr',
        gap: '48px',
        alignItems: 'start',
      }}
    >
      <div>
        <p className="section-label" style={{ marginBottom: '16px' }}>{strings.aboutLabel}</p>
        <div style={{
          width: '120px', height: '120px', borderRadius: '2px',
          overflow: 'hidden', border: '1px solid var(--border)',
        }}>
          <img
            src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=240&h=240&fit=crop&auto=format"
            alt="Alex Morrow"
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        </div>
      </div>

      <div>
        <h1 style={{
          fontFamily: 'var(--font-display)',
          fontSize: 'clamp(1.75rem, 3vw, 2.5rem)',
          fontWeight: 500, lineHeight: 1.2,
          color: 'var(--text)', marginBottom: '20px',
          letterSpacing: '-0.02em',
          transition: 'font-size 0.25s ease',
        }}>
          {strings.headline}<br />
          <em style={{ fontStyle: 'italic', color: 'var(--text-muted)' }}>{strings.headlineSub}</em>
        </h1>

        <p style={{ fontSize: bodySize, lineHeight: 1.75, color: 'var(--text-muted)', maxWidth: '500px', marginBottom: '16px', transition: 'font-size 0.25s ease' }}>
          {strings.bio1}
        </p>
        <p style={{ fontSize: bodySize, lineHeight: 1.75, color: 'var(--text-muted)', maxWidth: '500px', transition: 'font-size 0.25s ease' }}>
          {strings.bio2}
        </p>
      </div>
    </section>
  )
}

// ── Project card ──────────────────────────────────────────────────────────────

const typeLabel: Record<Project['type'], string> = {
  web: 'Web', python: 'Python', data: 'Data', tool: 'Tool',
}

function ProjectCard({ project, strings, large }: { project: Project; strings: Record<string, string>; large: boolean }) {
  const statusKey = project.status as keyof typeof strings
  const bodySize = large ? '0.9375rem' : '0.875rem'
  return (
    <article className="project-card" style={{ padding: '24px 28px' }}>
      <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: '14px', gap: '12px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <span style={{
            fontFamily: 'var(--font-mono)', fontSize: '0.65rem', letterSpacing: '0.1em',
            textTransform: 'uppercase', color: 'var(--accent)',
            border: '1px solid var(--accent)', padding: '2px 7px', opacity: 0.8,
          }}>
            {typeLabel[project.type]}
          </span>
          <span style={{
            fontFamily: 'var(--font-mono)', fontSize: '0.65rem', letterSpacing: '0.08em',
            color: project.status === 'ongoing' ? 'var(--accent)' : 'var(--text-muted)',
          }}>
            {strings[project.status]}
          </span>
        </div>
        <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem', color: 'var(--text-muted)', opacity: 0.7, letterSpacing: '0.05em', flexShrink: 0 }}>
          {project.year}
        </span>
      </div>

      <h3 style={{
        fontFamily: 'var(--font-display)', fontSize: large ? '1.15rem' : '1.05rem',
        fontWeight: 500, color: 'var(--text)', marginBottom: '10px',
        letterSpacing: '-0.01em', lineHeight: 1.3, transition: 'font-size 0.25s ease',
      }}>
        {project.title}
      </h3>

      <p style={{ fontSize: bodySize, lineHeight: 1.65, color: 'var(--text-muted)', marginBottom: '18px', transition: 'font-size 0.25s ease' }}>
        {project.description}
      </p>

      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '12px' }}>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
          {project.tags.map(tag => <span key={tag} className="tag">{tag}</span>)}
        </div>
        {project.link ? (
          <a
            href={project.link}
            style={{ display: 'flex', alignItems: 'center', gap: '5px', fontFamily: 'var(--font-body)', fontSize: '0.8rem', color: 'var(--text-muted)', textDecoration: 'none', flexShrink: 0, transition: 'color 0.2s' }}
            onMouseOver={e => (e.currentTarget.style.color = 'var(--accent)')}
            onMouseOut={e => (e.currentTarget.style.color = 'var(--text-muted)')}
            target="_blank" rel="noopener noreferrer"
          >
            {strings.viewLink} <ExternalLinkIcon />
          </a>
        ) : (
          <span style={{ fontFamily: 'var(--font-body)', fontSize: '0.75rem', color: 'var(--text-muted)', opacity: 0.45, flexShrink: 0 }}>
            {strings.privateLabel}
          </span>
        )}
      </div>
    </article>
  )
}

// ── Projects section ──────────────────────────────────────────────────────────

function Projects({ strings, large }: { strings: Record<string, string>; large: boolean }) {
  const [filter, setFilter] = useState<'all' | Project['type']>('all')

  const filters: Array<{ key: 'all' | Project['type']; labelKey: string }> = [
    { key: 'all', labelKey: 'filterAll' },
    { key: 'web', labelKey: 'filterWeb' },
    { key: 'python', labelKey: 'filterPython' },
    { key: 'data', labelKey: 'filterData' },
    { key: 'tool', labelKey: 'filterTool' },
  ]

  const visible = filter === 'all' ? projects : projects.filter(p => p.type === filter)

  return (
    <section id="projects" style={{ maxWidth: '920px', margin: '0 auto', padding: '0 32px 96px' }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '32px', flexWrap: 'wrap', gap: '16px' }}>
        <div style={{ display: 'flex', alignItems: 'baseline', gap: '16px' }}>
          <p className="section-label">{strings.projectsLabel}</p>
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65rem', letterSpacing: '0.08em', color: 'var(--text-muted)', opacity: 0.5 }}>
            {visible.length} {strings.of} {projects.length}
          </span>
        </div>

        <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
          {filters.map(f => (
            <button
              key={f.key}
              onClick={() => setFilter(f.key)}
              style={{
                fontFamily: 'var(--font-mono)', fontSize: '0.65rem', letterSpacing: '0.1em', textTransform: 'uppercase',
                padding: '4px 12px', border: '1px solid', cursor: 'pointer', background: 'transparent',
                borderColor: filter === f.key ? 'var(--accent)' : 'var(--border)',
                color: filter === f.key ? 'var(--accent)' : 'var(--text-muted)',
                transition: 'border-color 0.2s, color 0.2s',
              }}
            >
              {strings[f.labelKey]}
            </button>
          ))}
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))', gap: '16px' }}>
        {visible.map(project => (
          <ProjectCard key={project.id} project={project} strings={strings} large={large} />
        ))}
      </div>

      <div style={{ marginTop: '40px', paddingTop: '32px', borderTop: '1px solid var(--border)', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '12px' }}>
        <p style={{ fontSize: large ? '0.9375rem' : '0.875rem', color: 'var(--text-muted)', transition: 'font-size 0.25s ease' }}>
          {strings.moreWork}
        </p>
        <a
          href="https://github.com" target="_blank" rel="noopener noreferrer"
          style={{ display: 'flex', alignItems: 'center', gap: '6px', fontFamily: 'var(--font-body)', fontSize: '0.875rem', color: 'var(--text)', textDecoration: 'none', transition: 'color 0.2s' }}
          onMouseOver={e => (e.currentTarget.style.color = 'var(--accent)')}
          onMouseOut={e => (e.currentTarget.style.color = 'var(--text)')}
        >
          {strings.allRepos} <ArrowIcon />
        </a>
      </div>
    </section>
  )
}

// ── Footer ────────────────────────────────────────────────────────────────────

function Footer({ strings }: { strings: Record<string, string> }) {
  return (
    <footer style={{ borderTop: '1px solid var(--border)', padding: '28px 32px', maxWidth: '920px', margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '12px' }}>
      <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem', letterSpacing: '0.06em', color: 'var(--text-muted)', opacity: 0.6 }}>© 2026 Alex Morrow</p>
      <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem', letterSpacing: '0.06em', color: 'var(--text-muted)', opacity: 0.6 }}>{strings.builtWith}</p>
    </footer>
  )
}

// ── App ───────────────────────────────────────────────────────────────────────

export default function App() {
  const [dark, setDark] = useState(false)
  const [large, setLarge] = useState(false)
  const [lang, setLang] = useState<Lang>('en')

  const strings = t[lang]

  return (
    <div
      className={dark ? 'dark' : ''}
      style={{ minHeight: '100vh', backgroundColor: 'var(--bg)', transition: 'background-color 0.35s ease' }}
    >
      <Header
        dark={dark} onToggleDark={() => setDark(d => !d)}
        large={large} onToggleLarge={() => setLarge(l => !l)}
        lang={lang} onSelectLang={setLang}
        strings={strings}
      />
      <main>
        <About strings={strings} large={large} />
        <Projects strings={strings} large={large} />
      </main>
      <Footer strings={strings} />
    </div>
  )
}
