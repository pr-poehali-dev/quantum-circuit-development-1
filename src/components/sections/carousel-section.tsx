import { motion } from "framer-motion"

const performanceImages = [
  "https://cdn.poehali.dev/projects/4c922868-2b49-4ad5-a704-63ac721c5f04/files/b2156541-5d17-4740-aaca-4cce489601ed.jpg",
  "https://cdn.poehali.dev/projects/4c922868-2b49-4ad5-a704-63ac721c5f04/files/034640d7-fc46-4d66-920a-45e8ac4e1961.jpg",
  "https://cdn.poehali.dev/projects/4c922868-2b49-4ad5-a704-63ac721c5f04/files/1aeba312-aa9b-47e4-9350-b14f991b88be.jpg",
  "https://cdn.poehali.dev/projects/4c922868-2b49-4ad5-a704-63ac721c5f04/files/3936eb04-95ed-446f-a221-74c9848e6c15.jpg",
  "https://cdn.poehali.dev/projects/4c922868-2b49-4ad5-a704-63ac721c5f04/files/bb888808-475c-474f-95cc-5c5338c18ce4.jpg",
  "https://cdn.poehali.dev/projects/4c922868-2b49-4ad5-a704-63ac721c5f04/files/1bebee50-8b7c-40f1-a684-e40104f8e00c.jpg",
]

export function CarouselSection() {
  const items = [...performanceImages, ...performanceImages]

  return (
    <section className="bg-primary py-24 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 mb-12">
        <motion.h2
          className="text-3xl md:text-4xl font-serif text-primary-foreground"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Народный ансамбль — сердце СибГУ.
        </motion.h2>
      </div>

      <div className="relative">
        <motion.div
          className="flex gap-6"
          animate={{ x: [0, "-50%"] }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          {items.map((src, i) => (
            <div
              key={i}
              className="flex-shrink-0 w-[300px] md:w-[400px] rounded-xl overflow-hidden shadow-2xl"
            >
              <img
                src={src}
                alt={`Выступление Адастра ${(i % performanceImages.length) + 1}`}
                className="w-full h-auto aspect-[4/3] object-cover"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
