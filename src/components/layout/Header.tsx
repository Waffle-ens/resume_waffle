import { useState } from 'react'
import { Profile } from '../../types'

interface HeaderProps {
  profile: Profile
}

export function Header({ profile }: HeaderProps) {
  const [copied, setCopied] = useState(false)

  const handleCopyEmail = async () => {
    await navigator.clipboard.writeText(profile.email)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <header className="bg-gray-50 dark:bg-gray-900 py-12 px-4">
      <div className="max-w-3xl mx-auto border-b border-gray-200 dark:border-gray-700 pb-12">
        <h1 className="text-5xl font-black text-gray-900 dark:text-gray-100 mb-3">
          {profile.name}
        </h1>

        <p className="text-lg text-gray-600 dark:text-gray-400 font-medium mb-6">
          {profile.title}
        </p>

        <div className="flex flex-wrap gap-6 text-sm">
          {profile.email && (
            <button type="button" onClick={handleCopyEmail} className="flex items-center gap-1.5 text-blue-600 dark:text-blue-400 hover:underline font-medium cursor-pointer bg-transparent border-0 p-0">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
              </svg>
              {profile.email}
            </button>
          )}

          {profile.location && (
            <span className="flex items-center gap-1.5 text-gray-600 dark:text-gray-400 font-medium">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
              </svg>
              {profile.location}
            </span>
          )}
        </div>

        {copied && (
          <div className="fixed top-8 left-1/2 -translate-x-1/2 z-50 px-4 py-2 bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900 text-sm rounded-md shadow-lg transition-opacity duration-300">
            이메일이 복사되었습니다
          </div>
        )}
      </div>
    </header>
  )
}
