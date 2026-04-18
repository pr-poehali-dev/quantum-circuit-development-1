import { motion } from "framer-motion"

const performanceImages = [
  "https://cdn.poehali.dev/projects/4c922868-2b49-4ad5-a704-63ac721c5f04/bucket/36a3467f-687c-4f31-8cba-20a0913b3015.jpg",
  "https://cdn.poehali.dev/projects/4c922868-2b49-4ad5-a704-63ac721c5f04/bucket/54357338-18f4-499b-9d28-78425d3f457b.jpg",
  "https://cdn.poehali.dev/projects/4c922868-2b49-4ad5-a704-63ac721c5f04/bucket/8785a5e7-d8f0-46ff-9306-ec3d74e3a951.jpg",
  "https://cdn.poehali.dev/projects/4c922868-2b49-4ad5-a704-63ac721c5f04/bucket/cffb467d-4e33-48e0-aa27-dd9cf922934b.jpg",
  "https://cdn.poehali.dev/projects/4c922868-2b49-4ad5-a704-63ac721c5f04/bucket/9fcab538-ed90-4eab-b32e-232ba76eadaa.jpg",
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