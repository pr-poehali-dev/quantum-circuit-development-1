import type React from "react"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ArrowRight } from "lucide-react"
import { Link } from "react-router-dom"

const achievements = [
  {
    title: "Лауреат краевых и всероссийских конкурсов",
    category: "Достижения",
    image: "https://cdn.poehali.dev/projects/4c922868-2b49-4ad5-a704-63ac721c5f04/bucket/8785a5e7-d8f0-46ff-9306-ec3d74e3a951.jpg",
    href: "/achievements",
  },
  {
    title: "Хранители русских народных традиций",
    category: "Миссия",
    image: "https://cdn.poehali.dev/projects/4c922868-2b49-4ad5-a704-63ac721c5f04/bucket/54357338-18f4-499b-9d28-78425d3f457b.jpg",
    href: "/about",
  },
  {
    title: "Более 20 хореографических постановок",
    category: "Репертуар",
    image: "https://cdn.poehali.dev/projects/4c922868-2b49-4ad5-a704-63ac721c5f04/bucket/36a3467f-687c-4f31-8cba-20a0913b3015.jpg",
    href: "/repertoire",
  },
  {
    title: "Активная творческая молодёжь СибГУ",
    category: "Команда",
    image: "https://cdn.poehali.dev/projects/4c922868-2b49-4ad5-a704-63ac721c5f04/bucket/cffb467d-4e33-48e0-aa27-dd9cf922934b.jpg",
    href: "/about",
  },
]

export function InsightsSection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  const handleMouseMove = (e: React.MouseEvent) => {
    setMousePosition({ x: e.clientX, y: e.clientY })
  }

  return (
    <section className="bg-background px-6 py-24" onMouseMove={handleMouseMove}>
      <div className="max-w-4xl mx-auto">
        <motion.p
          className="text-muted-foreground text-sm uppercase tracking-widest mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Факты об ансамбле
        </motion.p>

        <div className="divide-y divide-border">
          {achievements.map((item, i) => (
            <motion.div key={i}>
              <Link
                to={item.href}
                className="group flex items-center justify-between py-6 relative"
                onMouseEnter={() => setHoveredIndex(i)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  whileHover={{ paddingLeft: 16 }}
                  className="flex items-center justify-between w-full"
                >
                  <div className="flex-1">
                    <span className="text-xs text-muted-foreground uppercase tracking-wider">{item.category}</span>
                    <h3 className="font-serif text-xl md:text-2xl text-foreground mt-1 group-hover:text-primary transition-colors">
                      {item.title}
                    </h3>
                  </div>
                  <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
                </motion.div>
              </Link>
            </motion.div>
          ))}
        </div>

        <AnimatePresence>
          {hoveredIndex !== null && (
            <motion.div
              className="fixed pointer-events-none z-50 w-[200px] md:w-[300px] rounded-lg overflow-hidden shadow-2xl hidden md:block"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{
                opacity: 1,
                scale: 1,
                x: mousePosition.x + 20,
                y: mousePosition.y - 100,
              }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.2 }}
            >
              <img
                src={achievements[hoveredIndex].image}
                alt={achievements[hoveredIndex].title}
                className="w-full h-auto"
              />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}