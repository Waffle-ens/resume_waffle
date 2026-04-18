import { SkillGroup } from '../../types'
import { SectionTitle } from '../ui/SectionTitle'
import { SkillTag } from '../ui/SkillTag'

interface SkillProps {
  data: SkillGroup[]
}

export function Skill({ data }: SkillProps) {
  return (
    <section className="section pt-12" id="skills">
      <SectionTitle title="SKILL" />

      <div className="space-y-8">
        {data.map((group, index) => (
          <div key={index} className="border-b border-gray-300 dark:border-gray-700 pb-8 last:border-b-0">
            <h3 className="text-lg font-bold text-gray-900 dark:text-gray-100 mb-5">
              {group.category}
            </h3>

            <div className="flex flex-wrap gap-2">
              {group.items.map((item, itemIndex) => (
                <SkillTag key={itemIndex} label={item} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
