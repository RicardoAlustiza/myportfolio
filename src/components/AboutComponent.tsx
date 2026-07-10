import { motion } from 'framer-motion';
import { SectionHeading } from './ui/SectionHeading';
import { Badge } from './ui/Badge';
import { useLanguage } from '../context/LanguageContext';
import { SKILLS } from '../data/portfolio';
import type { SkillCategory } from '../types';

const CATEGORIES: SkillCategory[] = ['frontend', 'backend', 'tools'];

export const AboutComponent = () => {
  const { t } = useLanguage();

  return (
    <motion.section
      id="about"
      className="py-24 px-6 bg-gray-50 dark:bg-gray-800/50"
      initial={{ opacity: 0, x: -40 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className="mx-auto max-w-4xl">
        <SectionHeading title={t.about.title} subtitle={t.about.subtitle} />

        <div className="grid gap-12 md:grid-cols-2">
          <div>
            <p className="text-base leading-relaxed text-gray-600 dark:text-gray-300">
              {t.about.bio1}
            </p>
            <p className="mt-4 text-base leading-relaxed text-gray-600 dark:text-gray-300">
              {t.about.bio2}
            </p>
          </div>

          <div className="space-y-6">
            {CATEGORIES.map((category) => {
              const categorySkills = SKILLS.filter((s) => s.category === category);
              return (
                <div key={category}>
                  <h3 className="mb-2 text-sm font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400">
                    {t.about.categories[category]}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {categorySkills.map((skill) => (
                      <Badge key={skill.name} variant="blue">
                        {skill.name}
                      </Badge>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </motion.section>
  );
};