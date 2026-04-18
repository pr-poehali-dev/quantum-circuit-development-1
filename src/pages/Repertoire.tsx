import { motion } from "framer-motion"
import { LenisProvider } from "@/components/lenis-provider"
import { CustomCursor } from "@/components/custom-cursor"
import { FooterSection } from "@/components/sections/footer-section"
import { Link } from "react-router-dom"

const genres = [
  {
    name: "Модерн",
    description: "Современная хореография, выражающая внутренний мир через свободу движений. Постановки модерн раскрывают актуальные темы и чувства через язык тела.",
    image: "https://cdn.poehali.dev/projects/4c922868-2b49-4ad5-a704-63ac721c5f04/bucket/54357338-18f4-499b-9d28-78425d3f457b.jpg",
    count: "7 постановок",
  },
  {
    name: "Степ",
    description: "Ритмичный танец, где звук стопы становится инструментом. Степ-номера ансамбля «Адастра» — это точность, энергия и неповторимый драйв.",
    image: "https://cdn.poehali.dev/projects/4c922868-2b49-4ad5-a704-63ac721c5f04/bucket/36a3467f-687c-4f31-8cba-20a0913b3015.jpg",
    count: "5 постановок",
  },
  {
    name: "Фольклор",
    description: "Хореография, пронизанная идеей сохранения русских традиций. Народные постановки передают культурное наследие через движение и костюм.",
    image: "https://cdn.poehali.dev/projects/4c922868-2b49-4ad5-a704-63ac721c5f04/bucket/cffb467d-4e33-48e0-aa27-dd9cf922934b.jpg",
    count: "6 постановок",
  },
  {
    name: "Джаз",
    description: "Импровизация, свинг и экспрессия. Джазовые номера — это сочетание американских традиций с уникальным характером ансамбля «Адастра».",
    image: "https://cdn.poehali.dev/projects/4c922868-2b49-4ad5-a704-63ac721c5f04/bucket/8785a5e7-d8f0-46ff-9306-ec3d74e3a951.jpg",
    count: "4 постановки",
  },
]

export default function Repertoire() {
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
            <Link to="/repertoire" className="hover:text-foreground transition-colors text-foreground font-medium">Репертуар</Link>
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
            >
              Репертуар
            </motion.p>
            <motion.h1
              className="text-5xl md:text-7xl font-serif text-foreground leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              Более 20 <em className="italic">постановок</em>
            </motion.h1>
            <motion.p
              className="text-muted-foreground mt-6 max-w-xl text-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              В репертуаре ансамбля — хореографические постановки четырёх жанров: модерн, степ, фольклор и джаз.
            </motion.p>
          </div>
        </section>

        {/* Жанры */}
        <section className="px-6 py-12 bg-background">
          <div className="max-w-5xl mx-auto space-y-24">
            {genres.map((genre, i) => (
              <motion.div
                key={i}
                className={`grid grid-cols-1 md:grid-cols-2 gap-12 items-center ${i % 2 === 1 ? "md:grid-flow-dense" : ""}`}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <div className={i % 2 === 1 ? "md:col-start-2" : ""}>
                  <span className="text-xs text-muted-foreground uppercase tracking-widest">{genre.count}</span>
                  <h2 className="text-4xl md:text-5xl font-serif text-foreground mt-2 mb-4">{genre.name}</h2>
                  <p className="text-muted-foreground leading-relaxed">{genre.description}</p>
                </div>
                <motion.div
                  className={`aspect-[4/3] rounded-2xl overflow-hidden ${i % 2 === 1 ? "md:col-start-1 md:row-start-1" : ""}`}
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.4 }}
                >
                  <img src={genre.image} alt={genre.name} className="w-full h-full object-cover" />
                </motion.div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="px-6 py-24 bg-primary">
          <div className="max-w-5xl mx-auto text-center">
            <motion.h2
              className="text-3xl md:text-5xl font-serif text-primary-foreground mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              Хотите пригласить нас на мероприятие?
            </motion.h2>
            <Link
              to="/contacts"
              className="inline-block bg-primary-foreground text-primary px-10 py-4 rounded-full font-medium hover:bg-primary-foreground/90 transition-colors"
            >
              Связаться с нами
            </Link>
          </div>
        </section>

        <FooterSection />
      </main>
    </LenisProvider>
  )
}