import { useEffect, useState } from 'react'
import resumeData from '../public/resume.json'
import { Header } from './components/layout/Header'
import { Footer } from './components/layout/Footer'
import { Introduce } from './components/sections/Introduce'
import { Experience } from './components/sections/Experience'
import { Project } from './components/sections/Project'
import { Skill } from './components/sections/Skill'
import { TableOfContents } from './components/ui/TableOfContents'
import { FloatingActions } from './components/ui/FloatingActions'
import { ResumeData } from './types'

const data = resumeData as ResumeData

function App() {
  const [isDark, setIsDark] = useState(false)

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme')
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    const shouldBeDark = savedTheme ? savedTheme === 'dark' : prefersDark

    setIsDark(shouldBeDark)
    applyTheme(shouldBeDark)
  }, [])

  const applyTheme = (dark: boolean) => {
    const html = document.documentElement
    if (dark) {
      html.classList.add('dark')
    } else {
      html.classList.remove('dark')
    }
    localStorage.setItem('theme', dark ? 'dark' : 'light')
  }

  const toggleTheme = () => {
    const newTheme = !isDark
    setIsDark(newTheme)
    applyTheme(newTheme)
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <TableOfContents />
      <FloatingActions isDark={isDark} onToggle={toggleTheme} />
      <Header profile={data.profile} />
      <main>
        <Introduce data={data.introduce} />
        <Experience data={data.experience} />
        <Project data={data.projects} />
        <Skill data={data.skills} />
      </main>
      <Footer />
    </div>
  )
}

export default App
