import Hero from './components/Hero';
import Services from './components/Services';
import Pricing from './components/Pricing';
import Contact from './components/Contact';
import { Phone } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-white text-zinc-900 dark:bg-black dark:text-white">
      {/* Header / Navigation */}
      <header className="sticky top-0 z-40 border-b border-zinc-200 bg-white/70 backdrop-blur dark:border-zinc-800 dark:bg-black/60">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <a href="#" className="flex items-center gap-2 text-lg font-semibold">
            <span className="h-6 w-6 rounded-md bg-gradient-to-br from-indigo-500 to-emerald-500" />
            AppleFix — сервисный центр
          </a>
          <nav className="hidden items-center gap-6 text-sm text-zinc-600 md:flex dark:text-zinc-300">
            <a href="#services" className="hover:text-zinc-900 dark:hover:text-white">Услуги</a>
            <a href="#pricing" className="hover:text-zinc-900 dark:hover:text-white">Цены</a>
            <a href="#contact" className="hover:text-zinc-900 dark:hover:text-white">Контакты</a>
            <a href="#contact" className="inline-flex items-center gap-2 rounded-md bg-emerald-600 px-3 py-1.5 font-medium text-white hover:bg-emerald-500">
              <Phone className="h-4 w-4" /> +7 (999) 123-45-67
            </a>
          </nav>
        </div>
      </header>

      {/* Sections */}
      <main>
        <Hero />
        <Services />
        <Pricing />
        <Contact />
      </main>

      {/* Footer */}
      <footer className="border-t border-zinc-200 bg-white py-10 text-sm text-zinc-600 dark:border-zinc-800 dark:bg-black dark:text-zinc-400">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
            <div>
              <div className="flex items-center gap-2 font-medium text-zinc-900 dark:text-white">
                <span className="h-5 w-5 rounded-md bg-gradient-to-br from-indigo-500 to-emerald-500" /> AppleFix
              </div>
              <p className="mt-2 max-w-xl text-xs text-zinc-500 dark:text-zinc-400">
                Не является авторизованным сервисным центром Apple. Торговые марки принадлежат их правообладателям.
              </p>
            </div>
            <div className="flex items-center gap-6">
              <a href="#services" className="hover:text-zinc-900 dark:hover:text-white">Услуги</a>
              <a href="#pricing" className="hover:text-zinc-900 dark:hover:text-white">Цены</a>
              <a href="#contact" className="hover:text-zinc-900 dark:hover:text-white">Контакты</a>
            </div>
          </div>
          <div className="mt-6 text-xs text-zinc-500">© {new Date().getFullYear()} AppleFix. Все права защищены.</div>
        </div>
      </footer>
    </div>
  );
}

export default App;
