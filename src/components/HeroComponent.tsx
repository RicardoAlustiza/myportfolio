import { motion } from "framer-motion"

export const HeroComponent = () => {
  return (
    <motion.section 
      id="home"
      className="h-screen flex flex-col justify-center items-center text-center px-4"
      initial={{ opacity: 0, y: 50 }} 
      animate={{ opacity: 1, y: 0 }} 
      transition={{ duration: 1 }}
    >
      <h1 className="text-5xl font-bold">Hola, soy Ricardo Alustiza</h1>
      <p className="mt-4 text-lg">Ingeniero de Software con pasión por crear experiencias digitales impactantes.</p>
    </motion.section>
    )
}