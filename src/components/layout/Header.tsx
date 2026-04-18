import { Profile } from '../../types'

interface HeaderProps {
  profile: Profile
}

export function Header({ profile }: HeaderProps) {
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
            <a href={`mailto:${profile.email}`} className="text-blue-600 dark:text-blue-400 hover:underline font-medium">
              {profile.email}
            </a>
          )}

          {profile.location && (
            <span className="text-gray-600 dark:text-gray-400 font-medium">
              {profile.location}
            </span>
          )}
        </div>
      </div>
    </header>
  )
}
