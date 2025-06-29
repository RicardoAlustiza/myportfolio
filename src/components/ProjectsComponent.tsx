import { motion } from "framer-motion";

export const ProjectsComponent = () => {
  return (
    <motion.section 
      id="projects" 
      className="py-20 px-6"
      initial={{ opacity: 0 }} 
      whileInView={{ opacity: 1 }} 
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-8">Proyectos</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="p-4 shadow rounded bg-gray-700 text-white">
            <h3 className="text-xl font-semibold">Proyecto 1</h3>
            <p className="text-sm">Descripción breve del proyecto.</p>
          </div>
          <div className="p-4 shadow rounded bg-gray-700 text-white">
            <h3 className="text-xl font-semibold">Proyecto 2</h3>
            <p className="text-sm">Descripción breve del proyecto.</p>
          </div>
        </div>
      </div>
    </motion.section>
  );
}