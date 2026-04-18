import type React from "react"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ArrowRight } from "lucide-react"
import { Link } from "react-router-dom"

const achievements = [
  {
    title: "Лауреат краевых и всероссийских конкурсов",
    category: "Достижения",
    image: "https://cdn.poehali.dev/projects/4c922868-2b49-4ad5-a704-63ac721c5f04/files/b2156541-5d17-4740-aaca-4cce489601ed.jpg",
    href: "/achievements",
  },
  {
    title: "Хранители русских народных традиций",
    category: "Миссия",
    image: "https://cdn.poehali.dev/projects/4c922868-2b49-4ad5-a704-63ac721c5f04/files/bb888808-475c-474f-95cc-5c5338c18ce4.jpg",
    href: "/about",
  },
  {
    title: "Более 20 хореографических постановок",
    category: "Репертуар",
    image: "https://cdn.poehali.dev/projects/4c922868-2b49-4ad5-a704-63ac721c5f04/files/1aeba312-aa9b-47e4-9350-b14f991b88be.jpg",
    href: "/repertoire",
  },
  {
    title: "Активная творческая молодёжь СибГУ",
    category: "Команда",
    image: "https://cdn.poehali.dev/projects/4c922868-2b49-4ad5-a704-63ac721c5f04/files/034640d7-fc46-4d66-920a-45e8ac4e1961.jpg",
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
