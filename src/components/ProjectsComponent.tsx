import { motion } from 'framer-motion';
import { ProjectCard } from './ProjectCard';
import { SectionHeading } from './ui/SectionHeading';
import { useLanguage } from '../context/LanguageContext';
import { PROJECTS } from '../data/portfolio';
import type { Project } from '../types';

export const ProjectsComponent = () => {
  const { t } = useLanguage();

  const localizedProjects: Project[] = PROJECTS.map((p) => ({
    ...p,
    ...(t.projects.items[p.id] ?? { title: p.id, description: '' }),
  }));

  return (
    <motion.section
      id="projects"
      className="py-24 px-6"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <div className="mx-auto max-w-5xl">
        <SectionHeading title={t.projects.title} subtitle={t.projects.subtitle} />
        <div className="grid gap-8 sm:grid-cols-2">
          {localizedProjects.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.5 }}
            >
              <ProjectCard {...project} />
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};