import { useEffect, useState } from 'react'

interface TOCItem {
  id: string
  label: string
}

const tocItems: TOCItem[] = [
  { id: 'introduce', label: 'INTRODUCE' },
  { id: 'experience', label: 'EXPERIENCE' },
  { id: 'projects', label: 'PROJECT' },
  { id: 'skills', label: 'SKILL' },
]

export function TableOfContents() {
  const [activeSection, setActiveSection] = useState<string>('introduce')

  useEffect(() => {
    let frameId: number
    let prevActive = ''

    const tick = () => {
      let active = 'introduce'
      const threshold = window.innerHeight * 0.4

      for (const item of tocItems) {
        const el = document.getElementById(item.id)
        if (!el) continue
        if (el.getBoundingClientRect().top <= threshold) {
          active = item.id
        }
      }

      if (active !== prevActive) {
        prevActive = active
        setActiveSection(active)
      }

      frameId = requestAnimationFrame(tick)
    }

    frameId = requestAnimationFrame(tick)

    return () => cancelAnimationFrame(frameId)
  }, [])

  const handleClick = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <nav className="hidden lg:block fixed right-12 top-1/3 z-50">
      <div className="flex flex-col items-end gap-5">
        {tocItems.map((item) => {
          const isActive = activeSection === item.id
          return (
            <button
              key={item.id}
              onClick={() => handleClick(item.id)}
              className={`relative text-right transition-all duration-300 tracking-widest ${
                isActive
                  ? 'text-blue-600 dark:text-blue-400 font-bold text-sm'
                  : 'text-gray-400 dark:text-gray-500 font-medium text-xs hover:text-gray-600 dark:hover:text-gray-400'
              }`}
            >
              {item.label}
              {isActive && (
                <span className="absolute -right-4 top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-blue-600 dark:bg-blue-400" />
              )}
            </button>
          )
        })}
      </div>
    </nav>
  )
}
