interface SkillTagProps {
  label: string
}

const brandColorMap: Record<string, string> = {
  "Java": "hover:border-orange-500 hover:text-orange-600 dark:hover:border-orange-400 dark:hover:text-orange-500",
  "Spring Boot": "hover:border-green-600 hover:text-green-700 dark:hover:border-green-500 dark:hover:text-green-400",
  "Spring Security": "hover:border-green-700 hover:text-green-800 dark:hover:border-green-500 dark:hover:text-green-400",
  "Spring Data JPA": "hover:border-green-600 hover:text-green-700 dark:hover:border-green-500 dark:hover:text-green-400",
  "JUnit5": "hover:border-red-600 hover:text-red-700 dark:hover:border-red-500 dark:hover:text-red-400",
  "Mockito": "hover:border-red-500 hover:text-red-600 dark:hover:border-red-400 dark:hover:text-red-500",

  "JWT": "hover:border-pink-500 hover:text-pink-600 dark:hover:border-pink-400 dark:hover:text-pink-500",
  "OAuth2": "hover:border-blue-600 hover:text-blue-700 dark:hover:border-blue-500 dark:hover:text-blue-400",
  "gRPC": "hover:border-cyan-600 hover:text-cyan-700 dark:hover:border-cyan-500 dark:hover:text-cyan-400",
  "REST API": "hover:border-sky-500 hover:text-sky-600 dark:hover:border-sky-400 dark:hover:text-sky-500",

  "React": "hover:border-cyan-500 hover:text-cyan-600 dark:hover:border-cyan-400 dark:hover:text-cyan-500",
  "Recoil": "hover:border-blue-500 hover:text-blue-600 dark:hover:border-blue-400 dark:hover:text-blue-500",
  "TailwindCSS": "hover:border-teal-500 hover:text-teal-600 dark:hover:border-teal-400 dark:hover:text-teal-500",
  "Material UI": "hover:border-blue-500 hover:text-blue-600 dark:hover:border-blue-400 dark:hover:text-blue-500",
  "Semantic UI": "hover:border-teal-500 hover:text-teal-600 dark:hover:border-teal-400 dark:hover:text-teal-500",
  "JavaScript/TypeScript": "hover:border-yellow-500 hover:text-yellow-600 dark:hover:border-yellow-400 dark:hover:text-yellow-500",

  "MariaDB": "hover:border-amber-700 hover:text-amber-800 dark:hover:border-amber-500 dark:hover:text-amber-400",
  "Redis": "hover:border-red-600 hover:text-red-700 dark:hover:border-red-500 dark:hover:text-red-400",
  "MongoDB": "hover:border-green-600 hover:text-green-700 dark:hover:border-green-500 dark:hover:text-green-400",
  "AWS S3": "hover:border-orange-500 hover:text-orange-600 dark:hover:border-orange-400 dark:hover:text-orange-500",
  "Docker": "hover:border-sky-500 hover:text-sky-600 dark:hover:border-sky-400 dark:hover:text-sky-500",
  "Linux": "hover:border-yellow-600 hover:text-yellow-700 dark:hover:border-yellow-500 dark:hover:text-yellow-400",

  "Git": "hover:border-orange-600 hover:text-orange-700 dark:hover:border-orange-500 dark:hover:text-orange-400",
  "GitHub": "hover:border-slate-700 hover:text-slate-900 dark:hover:border-slate-400 dark:hover:text-slate-100",
  "Swagger": "hover:border-green-500 hover:text-green-600 dark:hover:border-green-400 dark:hover:text-green-500",
  "SMTP": "hover:border-slate-500 hover:text-slate-700 dark:hover:border-slate-400 dark:hover:text-slate-300",
  "Figma": "hover:border-purple-500 hover:text-purple-600 dark:hover:border-purple-400 dark:hover:text-purple-500",
}

const DEFAULT_HOVER = "hover:border-slate-600 hover:text-slate-800 dark:hover:border-slate-400 dark:hover:text-slate-200"

export function SkillTag({ label }: SkillTagProps) {
  const hoverClass = brandColorMap[label] ?? DEFAULT_HOVER
  return (
    <span
      className={`inline-flex items-center px-3 py-1.5 rounded-full text-xs font-semibold border border-slate-400 dark:border-slate-600 text-slate-600 dark:text-slate-400 transition-colors ${hoverClass}`}
    >
      {label}
    </span>
  )
}
