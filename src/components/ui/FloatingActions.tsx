interface FloatingActionsProps {
  isDark: boolean
  onToggle: () => void
}

export function FloatingActions({ isDark, onToggle }: FloatingActionsProps) {
  return (
    <div className="fixed bottom-8 right-8 z-40 flex flex-col gap-3">
      <button
        onClick={() => window.print()}
        className="text-gray-400 dark:text-gray-500 hover:text-gray-600 dark:hover:text-gray-400 transition-colors p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"
        title="Print"
        aria-label="Print"
      >
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M19 8H5c-1.66 0-3 1.34-3 3v6h4v4h12v-4h4v-6c0-1.66-1.34-3-3-3zm-3 11H8v-5h8v5zm3-7c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm-1-9H6v3h12V3z" />
        </svg>
      </button>

      <button
        onClick={onToggle}
        className="text-gray-400 dark:text-gray-500 hover:text-gray-600 dark:hover:text-gray-400 transition-colors p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"
        title={isDark ? 'Light mode' : 'Dark mode'}
        aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      >
        {isDark ? (
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 3v1m0 16v1m9-9h-1m-16 0H1m15.364 1.636l.707-.707M6.929 6.929l-.707-.707m12.728 0l-.707.707M6.222 17.778l-.707.707M20.485 3.515l-.707.707M3.515 20.485l-.707-.707m17.07-17.07l-.707-.707M3.222 6.222l.707.707m13.856 10.606l.707.707M12 5a7 7 0 1 0 0 14 7 7 0 0 0 0-14z" />
          </svg>
        ) : (
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
          </svg>
        )}
      </button>
    </div>
  )
}
