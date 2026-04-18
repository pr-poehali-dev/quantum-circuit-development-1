import { motion } from "framer-motion"
import { LenisProvider } from "@/components/lenis-provider"
import { CustomCursor } from "@/components/custom-cursor"
import { FooterSection } from "@/components/sections/footer-section"
import { Link } from "react-router-dom"

const achievements = [
  {
    year: "2023",
    title: "Лауреат всероссийского конкурса",
    description: "Ансамбль «Адастра» занял призовое место на всероссийском конкурсе студенческого творчества.",
    category: "Всероссийский уровень",
  },
  {
    year: "2022",
    title: "Победитель краевого фестиваля",
    description: "Победа в номинации «Народная хореография» на краевом конкурсе творческих коллективов.",
    category: "Краевой уровень",
  },
  {
    year: "2021",
    title: "Участники международного форума",
    description: "Ансамбль представил Красноярск и СибГУ на международном молодёжном форуме.",
    category: "Международный уровень",
  },
  {
    year: "2019",
    title: "Лауреат фестиваля «Студенческая весна»",
    description: "Дипломанты городского фестиваля «Студенческая весна» в Красноярске.",
    category: "Городской уровень",
  },
  {
    year: "2018",
    title: "Гастрольный тур по Сибири",
    description: "Успешный гастрольный тур с выступлениями в городах Сибирского федерального округа.",
    category: "Гастроли",
  },
  {
    year: "2015",
    title: "10 лет на сцене",
    description: "Торжественный юбилейный концерт в честь 10-летия ансамбля с участием более 300 зрителей.",
    category: "Юбилей",
  },
]

export default function Achievements() {
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
            <Link to="/about" className="hover:text-foreground transition-colors">Об ансамбле</Link>
            <Link to="/repertoire" className="hover:text-foreground transition-colors">Репертуар</Link>
            <Link to="/achievements" className="hover:text-foreground transition-colors text-foreground font-medium">Достижения</Link>
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
            >
              Достижения
            </motion.p>
            <motion.h1
              className="text-5xl md:text-7xl font-serif text-foreground leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              20 лет <em className="italic">побед</em>
            </motion.h1>
          </div>
        </section>

        {/* Фото-баннер */}
        <section className="px-6 pb-24 bg-background">
          <div className="max-w-5xl mx-auto">
            <motion.div
              className="w-full aspect-[16/6] rounded-2xl overflow-hidden"
              initial={{ opacity: 0, clipPath: "inset(100% 0 0 0)" }}
              animate={{ opacity: 1, clipPath: "inset(0 0 0 0)" }}
              transition={{ duration: 1.2, delay: 0.3 }}
            >
              <img
                src="https://cdn.poehali.dev/projects/4c922868-2b49-4ad5-a704-63ac721c5f04/bucket/8785a5e7-d8f0-46ff-9306-ec3d74e3a951.jpg"
                alt="Ансамбль Адастра на сцене"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </section>

        {/* Таймлайн */}
        <section className="px-6 py-24 bg-secondary">
          <div className="max-w-4xl mx-auto">
            <motion.p
              className="text-muted-foreground text-sm uppercase tracking-widest mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              Хронология
            </motion.p>
            <div className="space-y-0 divide-y divide-border">
              {achievements.map((item, i) => (
                <motion.div
                  key={i}
                  className="py-8 grid grid-cols-[80px_1fr] md:grid-cols-[100px_1fr] gap-8"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                >
                  <span className="font-serif text-3xl text-primary">{item.year}</span>
                  <div>
                    <span className="text-xs text-muted-foreground uppercase tracking-wider">{item.category}</span>
                    <h3 className="font-serif text-xl text-foreground mt-1 mb-2">{item.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Фотогалерея */}
        <section className="px-6 py-24 bg-background">
          <div className="max-w-5xl mx-auto">
            <motion.p
              className="text-muted-foreground text-sm uppercase tracking-widest mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              Моменты
            </motion.p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {[
                "https://cdn.poehali.dev/projects/4c922868-2b49-4ad5-a704-63ac721c5f04/bucket/36a3467f-687c-4f31-8cba-20a0913b3015.jpg",
                "https://cdn.poehali.dev/projects/4c922868-2b49-4ad5-a704-63ac721c5f04/bucket/54357338-18f4-499b-9d28-78425d3f457b.jpg",
                "https://cdn.poehali.dev/projects/4c922868-2b49-4ad5-a704-63ac721c5f04/bucket/8785a5e7-d8f0-46ff-9306-ec3d74e3a951.jpg",
                "https://cdn.poehali.dev/projects/4c922868-2b49-4ad5-a704-63ac721c5f04/bucket/cffb467d-4e33-48e0-aa27-dd9cf922934b.jpg",
                "https://cdn.poehali.dev/projects/4c922868-2b49-4ad5-a704-63ac721c5f04/bucket/9fcab538-ed90-4eab-b32e-232ba76eadaa.jpg",
                "https://cdn.poehali.dev/projects/4c922868-2b49-4ad5-a704-63ac721c5f04/bucket/36a3467f-687c-4f31-8cba-20a0913b3015.jpg",
              ].map((src, i) => (
                <motion.div
                  key={i}
                  className="aspect-square rounded-xl overflow-hidden"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  whileHover={{ scale: 1.03 }}
                >
                  <img src={src} alt={`Фото ${i + 1}`} className="w-full h-full object-cover" />
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <FooterSection />
      </main>
    </LenisProvider>
  )
}