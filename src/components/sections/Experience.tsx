import { ExperienceItem } from '../../types'
import { SectionTitle } from '../ui/SectionTitle'
import { SkillTag } from '../ui/SkillTag'

interface ExperienceProps {
  data: ExperienceItem[]
}

export function Experience({ data }: ExperienceProps) {
  return (
    <section className="section pt-12" id="experience">
      <SectionTitle title="EXPERIENCE" />

      <div className="space-y-8">
        {data.map((item, index) => (
          <div key={index} className="flex gap-6 pb-8 border-b border-gray-300 dark:border-gray-700 last:border-b-0 last:pb-0">
            <div className="text-sm font-semibold text-gray-500 dark:text-gray-400 whitespace-nowrap pt-1 w-28 flex-shrink-0">
              {item.period}
            </div>

            <div className="flex-1">
              <h3 className="text-lg font-bold text-gray-900 dark:text-gray-100 mb-1">
                {item.organization}
              </h3>

              <p className="italic text-gray-600 dark:text-gray-400 text-sm font-medium mb-3">
                {item.role}
              </p>

              <ul className="space-y-1 mb-3 text-gray-700 dark:text-gray-300 text-sm">
                {item.tasks.map((task, taskIndex) => (
                  <li key={taskIndex} className="flex gap-2">
                    <span className="text-gray-400 dark:text-gray-500 flex-shrink-0">•</span>
                    <span>{task}</span>
                  </li>
                ))}
              </ul>

              <p className="text-sm font-bold text-gray-900 dark:text-gray-100 mb-2">
                Skill Keywords
              </p>
              <div className="flex flex-wrap gap-2">
                {item.skills.map((skill, skillIndex) => (
                  <SkillTag key={skillIndex} label={skill} />
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
