import { useState } from "react"
import { motion } from "framer-motion"
import { LenisProvider } from "@/components/lenis-provider"
import { CustomCursor } from "@/components/custom-cursor"
import { FooterSection } from "@/components/sections/footer-section"
import { Link } from "react-router-dom"
import Icon from "@/components/ui/icon"

const SEND_EMAIL_URL = "https://functions.poehali.dev/206c8224-8aa0-410c-92ab-467d39a15b9e"

const REAL_PHOTOS = [
  "https://cdn.poehali.dev/projects/4c922868-2b49-4ad5-a704-63ac721c5f04/bucket/36a3467f-687c-4f31-8cba-20a0913b3015.jpg",
  "https://cdn.poehali.dev/projects/4c922868-2b49-4ad5-a704-63ac721c5f04/bucket/54357338-18f4-499b-9d28-78425d3f457b.jpg",
  "https://cdn.poehali.dev/projects/4c922868-2b49-4ad5-a704-63ac721c5f04/bucket/8785a5e7-d8f0-46ff-9306-ec3d74e3a951.jpg",
  "https://cdn.poehali.dev/projects/4c922868-2b49-4ad5-a704-63ac721c5f04/bucket/cffb467d-4e33-48e0-aa27-dd9cf922934b.jpg",
  "https://cdn.poehali.dev/projects/4c922868-2b49-4ad5-a704-63ac721c5f04/bucket/9fcab538-ed90-4eab-b32e-232ba76eadaa.jpg",
]

const schedule = [
  { day: "Вторник", time: "18:00 – 21:00" },
  { day: "Среда",   time: "18:00 – 21:00" },
  { day: "Пятница", time: "18:00 – 21:00" },
]

const contacts = [
  {
    icon: "MapPin",
    label: "Адрес",
    value: "ул. 26 Бакинских Комиссаров, 9А",
    sub: "СДК «Аэрокосмический», г. Красноярск",
  },
  {
    icon: "Mail",
    label: "Email",
    value: "1adasra2004@gmail.com",
    sub: "Для приглашений и сотрудничества",
  },
  {
    icon: "Phone",
    label: "Телефон",
    value: "+7 991 445-17-17",
    sub: "По вопросам записи и выступлений",
  },
]

export default function Contacts() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" })
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")
  const [errorMsg, setErrorMsg] = useState("")

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus("loading")
    setErrorMsg("")
    try {
      const res = await fetch(SEND_EMAIL_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      })
      const data = await res.json()
      if (res.ok && data.success) {
        setStatus("success")
        setForm({ name: "", email: "", subject: "", message: "" })
      } else {
        setStatus("error")
        setErrorMsg(data.error || "Ошибка отправки")
      }
    } catch {
      setStatus("error")
      setErrorMsg("Не удалось отправить. Попробуйте позже.")
    }
  }

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
            <Link to="/contacts" className="text-foreground font-medium">Контакты</Link>
          </div>
        </nav>

        {/* Hero */}
        <section className="pt-32 pb-16 px-6 bg-background">
          <div className="max-w-5xl mx-auto">
            <motion.p className="text-muted-foreground text-sm uppercase tracking-widest mb-6"
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
              Контакты
            </motion.p>
            <motion.h1 className="text-5xl md:text-7xl font-serif text-foreground leading-tight"
              initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
              Давайте <em className="italic">знакомиться</em>
            </motion.h1>
          </div>
        </section>

        {/* Контактная информация */}
        <section className="px-6 py-12 bg-background">
          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
            {contacts.map((contact, i) => (
              <motion.div key={i} className="bg-secondary rounded-xl p-8"
                initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                  <Icon name={contact.icon as "MapPin"} size={22} className="text-primary" />
                </div>
                <p className="text-xs text-muted-foreground uppercase tracking-wider mb-2">{contact.label}</p>
                <p className="font-serif text-lg text-foreground mb-1">{contact.value}</p>
                <p className="text-muted-foreground text-sm">{contact.sub}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Расписание */}
        <section className="px-6 py-20 bg-secondary">
          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <p className="text-muted-foreground text-sm uppercase tracking-widest mb-6">Расписание репетиций</p>
              <h2 className="text-3xl md:text-4xl font-serif text-foreground mb-8">Приходи на репетицию</h2>

              <div className="space-y-0 mb-8">
                {schedule.map((item, i) => (
                  <motion.div key={i}
                    className="flex items-center justify-between py-5 border-b border-border"
                    initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
                    <span className="font-serif text-2xl text-foreground">{item.day}</span>
                    <span className="text-primary font-semibold text-lg">{item.time}</span>
                  </motion.div>
                ))}
              </div>

              <div className="bg-background rounded-xl p-6 flex items-start gap-4">
                <Icon name="MapPin" size={20} className="text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-foreground">СДК «Аэрокосмический»</p>
                  <p className="text-muted-foreground text-sm mt-1">ул. 26 Бакинских Комиссаров, 9А</p>
                  <p className="text-muted-foreground text-sm">г. Красноярск</p>
                </div>
              </div>
            </motion.div>

            <motion.div className="aspect-[4/5] rounded-2xl overflow-hidden"
              initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <img src={REAL_PHOTOS[4]} alt="Ансамбль Адастра" className="w-full h-full object-cover" />
            </motion.div>
          </div>
        </section>

        {/* Форма */}
        <section className="px-6 py-24 bg-background">
          <div className="max-w-3xl mx-auto">
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <p className="text-muted-foreground text-sm uppercase tracking-widest mb-6">Написать нам</p>
              <h2 className="text-3xl md:text-4xl font-serif text-foreground mb-10">
                Приглашение или вопрос — мы ответим
              </h2>

              {status === "success" ? (
                <motion.div className="bg-primary/10 border border-primary/20 rounded-xl p-10 text-center"
                  initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }}>
                  <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon name="Check" size={28} className="text-primary" />
                  </div>
                  <h3 className="font-serif text-2xl text-foreground mb-2">Сообщение отправлено!</h3>
                  <p className="text-muted-foreground">Мы свяжемся с вами в ближайшее время.</p>
                  <button onClick={() => setStatus("idle")}
                    className="mt-6 text-primary underline text-sm hover:no-underline">
                    Отправить ещё одно
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="text-sm text-muted-foreground block mb-2">Имя *</label>
                      <input type="text" name="name" value={form.name} onChange={handleChange}
                        placeholder="Ваше имя" required
                        className="w-full bg-secondary border-0 rounded-lg px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary" />
                    </div>
                    <div>
                      <label className="text-sm text-muted-foreground block mb-2">Email *</label>
                      <input type="email" name="email" value={form.email} onChange={handleChange}
                        placeholder="email@example.com" required
                        className="w-full bg-secondary border-0 rounded-lg px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary" />
                    </div>
                  </div>
                  <div>
                    <label className="text-sm text-muted-foreground block mb-2">Тема</label>
                    <input type="text" name="subject" value={form.subject} onChange={handleChange}
                      placeholder="Приглашение / Вступление / Другое"
                      className="w-full bg-secondary border-0 rounded-lg px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary" />
                  </div>
                  <div>
                    <label className="text-sm text-muted-foreground block mb-2">Сообщение *</label>
                    <textarea rows={5} name="message" value={form.message} onChange={handleChange}
                      placeholder="Расскажите о вашем мероприятии или вопросе..." required
                      className="w-full bg-secondary border-0 rounded-lg px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary resize-none" />
                  </div>

                  {status === "error" && (
                    <p className="text-red-500 text-sm">{errorMsg}</p>
                  )}

                  <button type="submit" disabled={status === "loading"}
                    className="bg-primary text-primary-foreground px-10 py-4 rounded-full font-medium hover:bg-primary/90 transition-colors disabled:opacity-60 flex items-center gap-2">
                    {status === "loading" ? (
                      <>
                        <motion.div
                          className="w-4 h-4 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full"
                          animate={{ rotate: 360 }}
                          transition={{ duration: 0.8, repeat: Infinity, ease: "linear" }} />
                        Отправляем...
                      </>
                    ) : "Отправить сообщение"}
                  </button>
                </form>
              )}
            </motion.div>
          </div>
        </section>

        {/* Вступление в ансамбль */}
        <section className="px-6 py-24 bg-primary overflow-hidden">
          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <h2 className="text-3xl md:text-5xl font-serif text-primary-foreground mb-6">
                Хочешь танцевать с нами?
              </h2>
              <p className="text-primary-foreground/80 leading-relaxed mb-4">
                Набор открыт для студентов СибГУ. Приходите на пробное занятие — опыт необязателен, главное желание и огонь в глазах!
              </p>
              <p className="text-primary-foreground/80 leading-relaxed mb-8 font-medium">
                Вт, Ср, Пт — 18:00–21:00<br />
                СДК «Аэрокосмический», ул. 26 Бакинских Комиссаров, 9А
              </p>
              <a href="tel:+79914451717"
                className="inline-block bg-primary-foreground text-primary px-8 py-3 rounded-full font-medium hover:bg-primary-foreground/90 transition-colors">
                Позвонить нам
              </a>
            </motion.div>
            <motion.div className="aspect-square rounded-2xl overflow-hidden"
              initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <img src={REAL_PHOTOS[2]} alt="Команда ансамбля на гастролях" className="w-full h-full object-cover" />
            </motion.div>
          </div>
        </section>

        <FooterSection />
      </main>
    </LenisProvider>
  )
}
