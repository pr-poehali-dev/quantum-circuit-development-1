import { motion } from "framer-motion"
import { Link } from "react-router-dom"

const footerLinks = [
  { label: "Главная", href: "/" },
  { label: "Об ансамбле", href: "/about" },
  { label: "Репертуар", href: "/repertoire" },
  { label: "Достижения", href: "/achievements" },
  { label: "Контакты", href: "/contacts" },
]

export function FooterSection() {
  return (
    <footer className="relative bg-background px-6 py-24 overflow-hidden">
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-tr from-red-300 via-amber-200 to-yellow-200 opacity-30 blur-3xl rounded-full" />
      </div>

      <div className="relative max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-end">
          <div>
            <motion.h2
              className="text-6xl md:text-8xl font-serif text-foreground"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              АДАСТРА.
            </motion.h2>
            <p className="text-muted-foreground mt-4 max-w-sm">
              Народный студенческий ансамбль танца СибГУ имени академика М.&nbsp;Ф.&nbsp;Решетнёва.
            </p>

            <nav className="flex flex-wrap gap-6 mt-8">
              {footerLinks.map((link, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                >
                  <Link
                    to={link.href}
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </nav>
          </div>

          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <p className="text-muted-foreground text-sm mb-2">Основан 16 ноября 2004 года</p>
            <p className="text-muted-foreground text-sm mb-6">г. Красноярск, Сибирский государственный университет</p>
            <Link
              to="/contacts"
              className="inline-block bg-foreground text-background px-8 py-3 rounded-full text-sm font-medium hover:bg-foreground/80 transition-colors"
            >
              Связаться с нами
            </Link>
          </motion.div>
        </div>

        <div className="mt-16 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground text-sm">© 2025 Ансамбль «Адастра». Все права защищены.</p>
          <p className="text-muted-foreground text-sm">СибГУ им. академика М.&nbsp;Ф.&nbsp;Решетнёва</p>
        </div>
      </div>
    </footer>
  )
}
