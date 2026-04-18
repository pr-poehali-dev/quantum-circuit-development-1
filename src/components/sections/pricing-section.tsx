import { motion } from "framer-motion"
import { Check } from "lucide-react"
import { Link } from "react-router-dom"

const repertoire = [
  {
    name: "Народная хореография",
    description: "Русские традиции в движении",
    features: [
      "Фольклорные постановки",
      "Аутентичные костюмы",
      "Традиционные мотивы",
      "Живая музыка",
    ],
  },
  {
    name: "Современные жанры",
    description: "Модерн, степ и джаз",
    features: [
      "Модерн-хореография",
      "Степ-постановки",
      "Джазовые номера",
      "Авторские постановки",
      "Конкурсные программы",
    ],
    popular: true,
  },
]

export function PricingSection() {
  return (
    <section className="bg-secondary px-6 py-24">
      <div className="max-w-5xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-5xl font-serif text-foreground">Репертуар ансамбля</h2>
          <p className="text-muted-foreground mt-4 max-w-md mx-auto">
            Более 20 постановок в двух направлениях — народном и современном.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
          {repertoire.map((item, i) => (
            <motion.div
              key={i}
              className={`relative bg-background rounded-xl p-8 ticket-edge ${item.popular ? "ring-2 ring-primary" : ""}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              {item.popular && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-lime text-foreground text-xs font-medium px-3 py-1 rounded-full">
                  Визитная карточка
                </span>
              )}

              <div className="text-center pb-6 border-b border-dashed border-border">
                <h3 className="font-serif text-xl text-foreground">{item.name}</h3>
                <p className="text-muted-foreground text-sm mt-2">{item.description}</p>
              </div>

              <ul className="mt-6 space-y-3">
                {item.features.map((feature, j) => (
                  <li key={j} className="flex items-center gap-3 text-foreground">
                    <Check className="w-4 h-4 text-primary flex-shrink-0" />
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <Link
                to="/repertoire"
                className={`block w-full mt-8 py-3 px-6 rounded-lg font-medium transition-colors text-center ${
                  item.popular
                    ? "bg-primary text-primary-foreground hover:bg-primary/90"
                    : "bg-secondary text-foreground hover:bg-accent/30 border border-border"
                }`}
              >
                Подробнее
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
