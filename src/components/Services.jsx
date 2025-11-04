import { Smartphone, Laptop, Headphones, ShieldCheck, CheckCircle2 } from 'lucide-react';

const services = [
  {
    title: 'Ремонт iPhone',
    icon: Smartphone,
    features: ['Замена дисплея', 'Замена батареи', 'Ремонт камеры'],
    time: 'от 30 минут',
  },
  {
    title: 'Ремонт Mac',
    icon: Laptop,
    features: ['Апгрейд SSD и RAM', 'Чистка и замена термопасты', 'Ремонт клавиатуры'],
    time: 'от 1 часа',
  },
  {
    title: 'Аксессуары и звук',
    icon: Headphones,
    features: ['AirPods — чистка и ремонт', 'Замена кейса', 'Диагностика'],
    time: 'от 30 минут',
  },
  {
    title: 'Оригинальные запчасти',
    icon: ShieldCheck,
    features: ['Гарантия до 12 мес', 'Качество A+', 'Прямая поставка'],
    time: 'по наличию',
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-zinc-50 py-20 dark:bg-zinc-950">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">Наши услуги</h2>
          <p className="mt-3 text-zinc-600 dark:text-zinc-300">Работаем с любой техникой Apple. Диагностика — бесплатно.</p>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s) => (
            <div key={s.title} className="group rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md dark:border-zinc-800 dark:bg-zinc-900">
              <div className="flex items-center gap-3">
                <div className="rounded-xl bg-zinc-100 p-3 text-zinc-900 dark:bg-zinc-800 dark:text-white">
                  <s.icon className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-medium">{s.title}</h3>
              </div>
              <ul className="mt-4 space-y-2 text-sm text-zinc-600 dark:text-zinc-300">
                {s.features.map((f) => (
                  <li key={f} className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-emerald-500" /> {f}
                  </li>
                ))}
              </ul>
              <div className="mt-5 text-sm text-zinc-500">Сроки: {s.time}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
