import { motion } from "framer-motion"
import { LenisProvider } from "@/components/lenis-provider"
import { CustomCursor } from "@/components/custom-cursor"
import { FooterSection } from "@/components/sections/footer-section"
import { Link } from "react-router-dom"

const values = [
  {
    title: "Сохранение традиций",
    text: "Многое в творчестве ансамбля пронизано идеей сохранения русских традиций в народной хореографии. Мы бережём культурное наследие и передаём его новым поколениям.",
  },
  {
    title: "Творческая молодёжь",
    text: "Ансамбль состоит из активной творческой молодёжи — студентов СибГУ имени академика М.Ф. Решетнёва. Энергия, страсть и талант — основа нашего коллектива.",
  },
  {
    title: "Широкий репертуар",
    text: "Более 20 хореографических постановок в жанрах модерн, степ, фольклор и джаз. Каждая постановка — отдельная история, рассказанная языком танца.",
  },
]

export default function About() {
  return (
    <LenisProvider>
      <main className="custom-cursor bg-background min-h-screen">
        <CustomCursor />

        {/* Navigation */}
        <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-4 flex items-center justify-between bg-background/80 backdrop-blur-sm border-b border-border">
          <Link to="/" className="font-serif text-2xl text-foreground hover:text-primary transition-colors">
            АДАСТРА.
          </Link>
          <div className="flex gap-6 text-sm text-muted-foreground">
            <Link to="/about" className="hover:text-foreground transition-colors text-foreground font-medium">Об ансамбле</Link>
            <Link to="/repertoire" className="hover:text-foreground transition-colors">Репертуар</Link>
            <Link to="/achievements" className="hover:text-foreground transition-colors">Достижения</Link>
            <Link to="/contacts" className="hover:text-foreground transition-colors">Контакты</Link>
          </div>
        </nav>

        {/* Hero */}
        <section className="pt-32 pb-24 px-6 bg-background">
          <div className="max-w-5xl mx-auto">
            <motion.p
              className="text-muted-foreground text-sm uppercase tracking-widest mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Об ансамбле
            </motion.p>
            <motion.h1
              className="text-5xl md:text-7xl font-serif text-foreground leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
            >
              Студенческий<br />
              <em className="italic">ансамбль танца</em>
            </motion.h1>
          </div>
        </section>

        {/* История */}
        <section className="px-6 py-24 bg-secondary">
          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <p className="text-muted-foreground text-sm uppercase tracking-widest mb-6">История</p>
              <h2 className="text-3xl md:text-4xl font-serif text-foreground mb-6">
                С 2004 года — на сцене
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Народный студенческий ансамбль танца «Адастра» был создан <strong className="text-foreground">16 ноября 2004 года</strong> на базе Сибирского государственного университета имени академика М.Ф. Решетнёва.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                За 20 лет существования коллектив стал неотъемлемой частью культурной жизни университета и города Красноярска. Ансамбль объединяет студентов, влюблённых в танец и готовых нести его в массы.
              </p>
            </motion.div>
            <motion.div
              className="aspect-[4/5] rounded-2xl overflow-hidden"
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <img
                src="https://cdn.poehali.dev/projects/4c922868-2b49-4ad5-a704-63ac721c5f04/bucket/36a3467f-687c-4f31-8cba-20a0913b3015.jpg"
                alt="Выступление ансамбля Адастра"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </section>

        {/* Ценности */}
        <section className="px-6 py-24 bg-background">
          <div className="max-w-5xl mx-auto">
            <motion.p
              className="text-muted-foreground text-sm uppercase tracking-widest mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              Наши ценности
            </motion.p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {values.map((value, i) => (
                <motion.div
                  key={i}
                  className="border border-border rounded-xl p-8"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15 }}
                >
                  <h3 className="font-serif text-xl text-foreground mb-4">{value.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{value.text}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Фото коллектива */}
        <section className="px-6 py-24 bg-secondary">
          <div className="max-w-5xl mx-auto">
            <motion.p
              className="text-muted-foreground text-sm uppercase tracking-widest mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              Мы в действии
            </motion.p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <motion.div
                className="aspect-video rounded-xl overflow-hidden"
                initial={{ opacity: 0, clipPath: "inset(100% 0 0 0)" }}
                whileInView={{ opacity: 1, clipPath: "inset(0 0 0 0)" }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
              >
                <img
                  src="https://cdn.poehali.dev/projects/4c922868-2b49-4ad5-a704-63ac721c5f04/bucket/cffb467d-4e33-48e0-aa27-dd9cf922934b.jpg"
                  alt="Репетиция ансамбля"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
              </motion.div>
              <motion.div
                className="aspect-video rounded-xl overflow-hidden"
                initial={{ opacity: 0, clipPath: "inset(100% 0 0 0)" }}
                whileInView={{ opacity: 1, clipPath: "inset(0 0 0 0)" }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.2 }}
              >
                <img
                  src="https://cdn.poehali.dev/projects/4c922868-2b49-4ad5-a704-63ac721c5f04/bucket/8785a5e7-d8f0-46ff-9306-ec3d74e3a951.jpg"
                  alt="Ансамбль на фестивале"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
              </motion.div>
            </div>
          </div>
        </section>

        <FooterSection />
      </main>
    </LenisProvider>
  )
}