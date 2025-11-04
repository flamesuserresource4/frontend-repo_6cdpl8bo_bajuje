import { CheckCircle2 } from 'lucide-react';

const tiers = [
  {
    name: 'Замена дисплея (iPhone)',
    price: 'от 6 990 ₽',
    features: ['Оригинальная матрица', 'Гарантия 6–12 мес', 'Работа от 30 мин'],
  },
  {
    name: 'Замена батареи (iPhone/Mac)',
    price: 'от 3 990 ₽',
    features: ['Оригинальная ёмкость', 'Калибровка', 'Гарантия 6 мес'],
  },
  {
    name: 'Диагностика',
    price: '0 ₽',
    features: ['Без очереди', 'Отчёт о состоянии', 'При ремонте — бесплатно'],
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="bg-white py-20 dark:bg-zinc-900">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">Популярные услуги и цены</h2>
          <p className="mt-3 text-zinc-600 dark:text-zinc-300">Финальная стоимость зависит от модели устройства и наличия комплектующих.</p>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {tiers.map((t) => (
            <div key={t.name} className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md dark:border-zinc-800 dark:bg-zinc-950">
              <div className="flex items-baseline justify-between">
                <h3 className="text-lg font-medium">{t.name}</h3>
                <div className="text-right text-xl font-semibold text-emerald-600">{t.price}</div>
              </div>
              <ul className="mt-5 space-y-2 text-sm text-zinc-600 dark:text-zinc-300">
                {t.features.map((f) => (
                  <li key={f} className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-emerald-500" /> {f}
                  </li>
                ))}
              </ul>
              <a href="#contact" className="mt-6 inline-flex w-full items-center justify-center rounded-lg bg-emerald-600 px-4 py-2.5 font-medium text-white hover:bg-emerald-500">
                Записаться
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
