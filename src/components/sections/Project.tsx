import { ProjectItem } from '../../types'
import { SectionTitle } from '../ui/SectionTitle'
import { SkillTag } from '../ui/SkillTag'

interface ProjectProps {
  data: ProjectItem[]
}

export function Project({ data }: ProjectProps) {
  return (
    <section className="section pt-12" id="projects">
      <SectionTitle title="PROJECT" />

      <div className="space-y-8">
        {data.map((project, index) => (
          <div key={index} className="flex gap-6 pb-8 border-b border-gray-300 dark:border-gray-700 last:border-b-0 last:pb-0">
            <div className="text-sm font-semibold text-gray-500 dark:text-gray-400 whitespace-nowrap pt-1 w-28 flex-shrink-0">
              {project.period}
            </div>

            <div className="flex-1">
              <h3 className="text-lg font-bold text-gray-900 dark:text-gray-100 mb-1">
                {project.title}
              </h3>

              <p className="italic text-gray-600 dark:text-gray-400 text-sm mb-3">
                {project.summary}
              </p>

              <ul className="space-y-1 mb-4 text-gray-700 dark:text-gray-300 text-sm">
                {project.description.map((desc, descIndex) => (
                  <li key={descIndex} className="flex gap-2">
                    <span className="text-gray-400 dark:text-gray-500 flex-shrink-0">•</span>
                    <span>{desc}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.skills.map((skill, skillIndex) => (
                  <SkillTag key={skillIndex} label={skill} />
                ))}
              </div>

              <div className="flex gap-2 text-sm">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 rounded-lg bg-gray-900 dark:bg-gray-700 text-white hover:bg-blue-600 dark:hover:bg-blue-600 transition-all duration-300 font-semibold"
                  >
                    GitHub
                  </a>
                )}
                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 rounded-lg bg-blue-600 dark:bg-blue-700 text-white hover:bg-blue-700 dark:hover:bg-blue-600 transition-all duration-300 font-semibold"
                  >
                    Demo
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
