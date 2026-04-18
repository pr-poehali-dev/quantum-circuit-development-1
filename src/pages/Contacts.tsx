import { motion } from "framer-motion"
import { LenisProvider } from "@/components/lenis-provider"
import { CustomCursor } from "@/components/custom-cursor"
import { FooterSection } from "@/components/sections/footer-section"
import { Link } from "react-router-dom"
import Icon from "@/components/ui/icon"

const contacts = [
  {
    icon: "MapPin",
    label: "Адрес",
    value: "г. Красноярск, пр. им. газеты Красноярский рабочий, 31",
    sub: "СибГУ им. акад. М.Ф. Решетнёва",
  },
  {
    icon: "Mail",
    label: "Email",
    value: "adastra@sibsau.ru",
    sub: "Для приглашений и сотрудничества",
  },
  {
    icon: "Users",
    label: "Вступить в ансамбль",
    value: "Набор открыт для студентов СибГУ",
    sub: "Приходите на пробное занятие",
  },
]

export default function Contacts() {
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
            <Link to="/achievements" className="hover:text-foreground transition-colors">Достижения</Link>
            <Link to="/contacts" className="hover:text-foreground transition-colors text-foreground font-medium">Контакты</Link>
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
              Контакты
            </motion.p>
            <motion.h1
              className="text-5xl md:text-7xl font-serif text-foreground leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              Давайте <em className="italic">знакомиться</em>
            </motion.h1>
          </div>
        </section>

        {/* Контактная информация */}
        <section className="px-6 py-12 bg-background">
          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
            {contacts.map((contact, i) => (
              <motion.div
                key={i}
                className="bg-secondary rounded-xl p-8"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                  <Icon name={contact.icon as "MapPin"} size={24} className="text-primary" />
                </div>
                <p className="text-xs text-muted-foreground uppercase tracking-wider mb-2">{contact.label}</p>
                <p className="font-serif text-lg text-foreground mb-1">{contact.value}</p>
                <p className="text-muted-foreground text-sm">{contact.sub}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Форма */}
        <section className="px-6 py-24 bg-secondary">
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <p className="text-muted-foreground text-sm uppercase tracking-widest mb-6">Написать нам</p>
              <h2 className="text-3xl md:text-4xl font-serif text-foreground mb-10">
                Приглашение или вопрос — мы ответим
              </h2>
              <form onSubmit={(e) => e.preventDefault()} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="text-sm text-muted-foreground block mb-2">Имя</label>
                    <input
                      type="text"
                      placeholder="Ваше имя"
                      className="w-full bg-background border-0 rounded-lg px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>
                  <div>
                    <label className="text-sm text-muted-foreground block mb-2">Email</label>
                    <input
                      type="email"
                      placeholder="email@example.com"
                      className="w-full bg-background border-0 rounded-lg px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>
                </div>
                <div>
                  <label className="text-sm text-muted-foreground block mb-2">Тема</label>
                  <input
                    type="text"
                    placeholder="Тема обращения"
                    className="w-full bg-background border-0 rounded-lg px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
                <div>
                  <label className="text-sm text-muted-foreground block mb-2">Сообщение</label>
                  <textarea
                    rows={5}
                    placeholder="Расскажите о вашем мероприятии или вопросе..."
                    className="w-full bg-background border-0 rounded-lg px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="bg-primary text-primary-foreground px-10 py-4 rounded-full font-medium hover:bg-primary/90 transition-colors"
                >
                  Отправить сообщение
                </button>
              </form>
            </motion.div>
          </div>
        </section>

        {/* Вступление */}
        <section className="px-6 py-24 bg-primary overflow-hidden">
          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-5xl font-serif text-primary-foreground mb-6">
                Хочешь танцевать с нами?
              </h2>
              <p className="text-primary-foreground/80 leading-relaxed mb-8">
                Набор в ансамбль открыт для студентов СибГУ. Приходите на пробное занятие — опыт необязателен, главное — желание и огонь в глазах!
              </p>
              <Link
                to="/about"
                className="inline-block bg-primary-foreground text-primary px-8 py-3 rounded-full font-medium hover:bg-primary-foreground/90 transition-colors"
              >
                Узнать больше об ансамбле
              </Link>
            </motion.div>
            <motion.div
              className="aspect-square rounded-2xl overflow-hidden"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <img
                src="https://cdn.poehali.dev/projects/4c922868-2b49-4ad5-a704-63ac721c5f04/files/034640d7-fc46-4d66-920a-45e8ac4e1961.jpg"
                alt="Репетиция ансамбля"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </section>

        <FooterSection />
      </main>
    </LenisProvider>
  )
}
