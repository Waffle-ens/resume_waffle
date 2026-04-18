import { SectionTitle } from '../ui/SectionTitle'

interface IntroduceProps {
  data: string[]
}

export function Introduce({ data }: IntroduceProps) {
  const categories = [
    {
      title: "Backend",
      description: "Java, Spring Boot, JWT, OAuth2, gRPC 기반 보안 중심 백엔드 아키텍처 설계",
      tags: ["Spring Security", "JWT", "gRPC"]
    },
    {
      title: "Frontend",
      description: "React, Recoil, TailwindCSS를 활용한 인터랙티브 사용자 경험 구현",
      tags: ["React", "Recoil", "TailwindCSS"],
      highlight: true
    },
    {
      title: "FullStack Development",
      description: "인증·회원·관리자 기능을 포함한 실서비스 수준 웹 서비스 2건 개발",
      tags: ["End-to-End", "API Design", "Testing"]
    }
  ]

  return (
    <section className="section pt-12" id="introduce">
      <div className="grid grid-cols-1 md:grid-cols-[160px_1fr] gap-12 mb-16">
        <div className="md:text-right">
          <SectionTitle title="INTRODUCE" className="inline-block" />
        </div>
        <div className="space-y-8">
          {data.map((paragraph, index) => (
            <p key={index} className="text-gray-700 dark:text-gray-300 leading-relaxed text-base">
              {paragraph}
            </p>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {categories.map((category, index) => (
          <div
            key={index}
            className="p-7 rounded-2xl border-2 border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 transition-all duration-300 hover:border-blue-500 dark:hover:border-blue-400 hover:shadow-2xl hover:-translate-y-1"
          >
            <h3 className="text-lg font-bold text-gray-900 dark:text-gray-100 mb-3">
              {category.title}
            </h3>

            <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-5">
              {category.description}
            </p>

            <div className="flex flex-wrap gap-2">
              {category.tags.map((tag, tagIndex) => (
                <span
                  key={tagIndex}
                  className="px-3 py-1.5 rounded-full text-xs font-semibold border-2 border-blue-400 dark:border-blue-500 text-blue-600 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900 transition-colors"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
