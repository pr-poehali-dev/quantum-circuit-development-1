import { useState, useEffect } from "react"
import { motion } from "framer-motion"

function GenreAnimation() {
  const genres = ["Модерн", "Степ", "Фольклор", "Джаз"]
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % genres.length)
    }, 1800)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="flex items-center justify-center h-full overflow-hidden">
      <motion.span
        key={index}
        className="font-serif text-4xl md:text-5xl text-foreground text-center"
        initial={{ y: 40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: -40, opacity: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      >
        {genres[index]}
      </motion.span>
    </div>
  )
}

function CountAnimation() {
  const [count, setCount] = useState(0)

  useEffect(() => {
    const timeout = setTimeout(() => {
      const interval = setInterval(() => {
        setCount((prev) => {
          if (prev >= 20) {
            clearInterval(interval)
            return 20
          }
          return prev + 1
        })
      }, 80)
      return () => clearInterval(interval)
    }, 500)
    return () => clearTimeout(timeout)
  }, [])

  return (
    <div className="flex flex-col items-center justify-center h-full gap-2">
      <span className="text-6xl md:text-8xl font-serif text-foreground">{count}+</span>
      <span className="text-sm text-muted-foreground">постановок</span>
    </div>
  )
}

function YearAnimation() {
  return (
    <div className="flex flex-col items-center justify-center h-full gap-2">
      <motion.span
        className="text-4xl md:text-5xl font-serif text-foreground text-center"
        initial={{ scale: 0.5, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      >
        2004
      </motion.span>
      <span className="text-sm text-muted-foreground text-center">год основания</span>
    </div>
  )
}

export function FeaturesSection() {
  return (
    <section className="bg-background px-6 py-24">
      <div className="max-w-6xl mx-auto">
        <motion.p
          className="text-muted-foreground text-sm uppercase tracking-widest mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          О нас в цифрах
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <motion.div
            className="bg-secondary rounded-xl p-8 min-h-[280px] flex flex-col"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ scale: 0.98 }}
            transition={{ duration: 0.2 }}
          >
            <div className="flex-1">
              <GenreAnimation />
            </div>
            <div className="mt-4">
              <h3 className="font-serif text-xl text-foreground">4 жанра</h3>
              <p className="text-muted-foreground text-sm mt-1">Модерн, степ, фольклор и джаз — широкий творческий диапазон.</p>
            </div>
          </motion.div>

          <motion.div
            className="bg-secondary rounded-xl p-8 min-h-[280px] flex flex-col"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            whileHover={{ scale: 0.98 }}
          >
            <div className="flex-1">
              <CountAnimation />
            </div>
            <div className="mt-4">
              <h3 className="font-serif text-xl text-foreground">Репертуар</h3>
              <p className="text-muted-foreground text-sm mt-1">Более 20 хореографических постановок в репертуаре.</p>
            </div>
          </motion.div>

          <motion.div
            className="bg-secondary rounded-xl p-8 min-h-[280px] flex flex-col"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            whileHover={{ scale: 0.98 }}
          >
            <div className="flex-1">
              <YearAnimation />
            </div>
            <div className="mt-4">
              <h3 className="font-serif text-xl text-foreground">20 лет на сцене</h3>
              <p className="text-muted-foreground text-sm mt-1">Основан 16 ноября 2004 года в СибГУ им. Решетнёва.</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
