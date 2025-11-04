import { ShieldCheck, Wrench } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-black to-zinc-900 text-white">
      <div className="absolute inset-0 opacity-40 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.2),transparent_40%),radial-gradient(circle_at_80%_0%,rgba(99,102,241,0.25),transparent_35%),radial-gradient(circle_at_50%_80%,rgba(34,197,94,0.2),transparent_40%)]" />
      <div className="relative mx-auto max-w-7xl px-6 py-24 lg:flex lg:items-center lg:gap-10 lg:py-28">
        <div className="flex-1">
          <div className="inline-flex items-center gap-2 rounded-full border border-zinc-700/60 bg-zinc-800/40 px-3 py-1 text-xs text-zinc-300 backdrop-blur">
            <ShieldCheck className="h-4 w-4 text-emerald-400" />
            Гарантия до 12 месяцев
          </div>
          <h1 className="mt-6 text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
            Сервисный центр по ремонту техники Apple
          </h1>
          <p className="mt-4 max-w-2xl text-zinc-300">
            Быстрый и профессиональный ремонт iPhone, iPad, Mac и другой техники Apple. Оригинальные комплектующие, честные цены и бесплатная диагностика.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a href="#contact" className="inline-flex items-center gap-2 rounded-lg bg-white px-5 py-3 font-medium text-black shadow hover:bg-zinc-100">
              <Wrench className="h-5 w-5" />
              Оставить заявку
            </a>
            <a href="#pricing" className="inline-flex items-center gap-2 rounded-lg border border-zinc-700 bg-zinc-900 px-5 py-3 font-medium text-white hover:bg-zinc-800">
              Узнать цены
            </a>
          </div>
          <div className="mt-8 flex items-center gap-6 text-sm text-zinc-400">
            <div className="flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-emerald-400" />Диагностика за 15 минут</div>
            <div className="flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-indigo-400" />Оригинальные запчасти</div>
          </div>
        </div>
        <div className="mt-12 flex-1 lg:mt-0">
          <div className="mx-auto aspect-square max-w-md rounded-2xl border border-zinc-800/70 bg-gradient-to-br from-zinc-800/60 to-zinc-900/60 p-6 shadow-2xl">
            <div className="grid h-full grid-cols-3 grid-rows-3 gap-3">
              <div className="rounded-xl bg-zinc-800/60" />
              <div className="rounded-xl bg-zinc-800/60" />
              <div className="rounded-xl bg-zinc-800/60" />
              <div className="col-span-2 rounded-xl bg-gradient-to-br from-indigo-500/20 to-emerald-500/20 ring-1 ring-white/10" />
              <div className="rounded-xl bg-zinc-800/60" />
              <div className="rounded-xl bg-zinc-800/60" />
              <div className="rounded-xl bg-zinc-800/60" />
              <div className="rounded-xl bg-zinc-800/60" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
