import { motion } from "framer-motion";

export const AboutComponent = () => {
  return (
    <motion.section 
      id="about" 
      className="py-20 px-6 bg-gray-800 text-white"
      initial={{ opacity: 0, x: -50 }} 
      whileInView={{ opacity: 1, x: 0 }} 
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-4">Sobre mí</h2>
        <p className="text-lg">
          Soy un desarrollador frontend con experiencia en React, TypeScript y diseño de interfaces modernas. Me encanta transformar ideas en sitios web funcionales y atractivos.
        </p>
      </div>
    </motion.section>
  );
}