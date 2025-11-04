import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { useState } from 'react';

export default function Contact() {
  const [sent, setSent] = useState(false);

  function onSubmit(e) {
    e.preventDefault();
    setSent(true);
  }

  return (
    <section id="contact" className="bg-zinc-50 py-20 dark:bg-zinc-950">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">Свяжитесь с нами</h2>
            <p className="mt-3 text-zinc-600 dark:text-zinc-300">
              Оставьте заявку — перезвоним в течение 10 минут, уточним модель и согласуем время ремонта.
            </p>
            <div className="mt-8 space-y-4 text-sm text-zinc-700 dark:text-zinc-300">
              <div className="flex items-center gap-3"><MapPin className="h-5 w-5 text-zinc-500" /> Москва, ул. Пример, 1</div>
              <div className="flex items-center gap-3"><Phone className="h-5 w-5 text-zinc-500" /> +7 (999) 123-45-67</div>
              <div className="flex items-center gap-3"><Mail className="h-5 w-5 text-zinc-500" /> hello@applefix.ru</div>
              <div className="flex items-center gap-3"><Clock className="h-5 w-5 text-zinc-500" /> Ежедневно 10:00–20:00</div>
            </div>
          </div>
          <div>
            <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
              {!sent ? (
                <form onSubmit={onSubmit} className="space-y-4">
                  <div>
                    <label className="mb-1 block text-sm text-zinc-600 dark:text-zinc-300">Имя</label>
                    <input required type="text" className="w-full rounded-lg border border-zinc-300 bg-white px-3 py-2 outline-none ring-emerald-500 focus:ring dark:border-zinc-700 dark:bg-zinc-950" placeholder="Иван" />
                  </div>
                  <div>
                    <label className="mb-1 block text-sm text-zinc-600 dark:text-zinc-300">Телефон</label>
                    <input required type="tel" className="w-full rounded-lg border border-zinc-300 bg-white px-3 py-2 outline-none ring-emerald-500 focus:ring dark:border-zinc-700 dark:bg-zinc-950" placeholder="+7 (___) ___-__-__" />
                  </div>
                  <div>
                    <label className="mb-1 block text-sm text-zinc-600 dark:text-zinc-300">Модель устройства</label>
                    <input required type="text" className="w-full rounded-lg border border-zinc-300 bg-white px-3 py-2 outline-none ring-emerald-500 focus:ring dark:border-zinc-700 dark:bg-zinc-950" placeholder="iPhone 13, MacBook Air M1" />
                  </div>
                  <div>
                    <label className="mb-1 block text-sm text-zinc-600 dark:text-zinc-300">Опишите проблему</label>
                    <textarea required rows={4} className="w-full resize-none rounded-lg border border-zinc-300 bg-white px-3 py-2 outline-none ring-emerald-500 focus:ring dark:border-zinc-700 dark:bg-zinc-950" placeholder="Разбилось стекло, не держит заряд и т.д." />
                  </div>
                  <button type="submit" className="inline-flex w-full items-center justify-center rounded-lg bg-emerald-600 px-4 py-2.5 font-medium text-white hover:bg-emerald-500">
                    Отправить заявку
                  </button>
                  <p className="text-xs text-zinc-500">Нажимая кнопку, вы соглашаетесь с обработкой персональных данных.</p>
                </form>
              ) : (
                <div className="text-center">
                  <div className="mx-auto mb-3 h-12 w-12 rounded-full bg-emerald-100 text-emerald-600 dark:bg-emerald-900/40 dark:text-emerald-400 flex items-center justify-center">
                    ✓
                  </div>
                  <h3 className="text-lg font-medium">Заявка отправлена</h3>
                  <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-300">Мы свяжемся с вами в ближайшее время.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
