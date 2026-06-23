import { useState } from 'react';
import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card } from '@/components/ui/card';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';

const HERO_IMG =
  'https://cdn.poehali.dev/projects/f1a71dbf-5573-4d66-8cf0-2d8a47b51a91/files/e114e1ff-b19f-4cc4-9e47-f3c51d7f78c2.jpg';

const NAV = [
  { id: 'about', label: 'О школе' },
  { id: 'schedule', label: 'Расписание' },
  { id: 'coaches', label: 'Тренеры' },
  { id: 'video', label: 'Видео' },
  { id: 'gallery', label: 'Галерея' },
  { id: 'signup', label: 'Запись' },
  { id: 'contacts', label: 'Контакты' },
];

const FEATURES = [
  { icon: 'Flame', title: 'Энергия улиц', text: 'Настоящая хип-хоп культура и атмосфера баттлов на каждой тренировке.' },
  { icon: 'Users', title: 'Все уровни', text: 'От нуля до про — группы для детей, подростков и взрослых.' },
  { icon: 'Trophy', title: 'Выступления', text: 'Участвуем в соревнованиях и городских мероприятиях РТ.' },
  { icon: 'Music', title: 'Свой стиль', text: 'Помогаем найти твою фишку и собственную манеру движения.' },
];

const SCHEDULE = [
  { day: 'Понедельник', group: 'Дети 6–9 лет', time: '17:00 — 18:00' },
  { day: 'Вторник', group: 'Подростки 10–15', time: '18:00 — 19:30' },
  { day: 'Среда', group: 'Взрослые / новички', time: '19:30 — 21:00' },
  { day: 'Пятница', group: 'Продвинутые', time: '18:00 — 19:30' },
  { day: 'Суббота', group: 'Open class (все)', time: '12:00 — 14:00' },
  { day: 'Воскресенье', group: 'Баттл-практика', time: '14:00 — 16:00' },
];

const COACHES = [
  { name: 'Bboy Дамир', role: 'Главный тренер · 12 лет в брейкинге', emoji: '🔥' },
  { name: 'Bboy Артур', role: 'Тренер групп подростков', emoji: '⚡' },
  { name: 'Bgirl Лия', role: 'Тренер детских групп', emoji: '💫' },
];

const GALLERY_EMOJI = ['🕺', '💥', '🎧', '🏆', '🤸', '🎵', '🔥', '⚡'];

const SOCIALS = [
  { icon: 'Send', label: 'Telegram', handle: '@topsquad_kuyuki' },
  { icon: 'Instagram', label: 'Instagram', handle: '@topsquad.dance' },
  { icon: 'Youtube', label: 'YouTube', handle: 'Top Squad Crew' },
  { icon: 'MessageCircle', label: 'VK', handle: 'vk.com/topsquad' },
];

const Index = () => {
  const { toast } = useToast();
  const [menuOpen, setMenuOpen] = useState(false);
  const [form, setForm] = useState({ name: '', phone: '', group: '' });

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: 'Заявка отправлена! 🔥',
      description: `${form.name}, мы свяжемся с тобой по номеру ${form.phone}`,
    });
    setForm({ name: '', phone: '', group: '' });
  };

  return (
    <div className="min-h-screen bg-background text-foreground font-body overflow-x-hidden">
      {/* NAV */}
      <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-background/80 border-b border-border">
        <div className="container flex items-center justify-between h-16">
          <button onClick={() => scrollTo('hero')} className="flex items-center gap-2">
            <span className="font-display font-bold text-2xl tracking-tight">
              TOP<span className="text-accent">SQUAD</span>
            </span>
          </button>
          <nav className="hidden lg:flex items-center gap-7">
            {NAV.map((n) => (
              <button
                key={n.id}
                onClick={() => scrollTo(n.id)}
                className="text-sm font-medium uppercase tracking-wide text-muted-foreground hover:text-accent transition-colors"
              >
                {n.label}
              </button>
            ))}
          </nav>
          <Button
            onClick={() => scrollTo('signup')}
            className="hidden lg:inline-flex bg-accent text-accent-foreground hover:bg-accent/90 font-bold uppercase"
          >
            Записаться
          </Button>
          <button className="lg:hidden" onClick={() => setMenuOpen((v) => !v)}>
            <Icon name={menuOpen ? 'X' : 'Menu'} size={28} />
          </button>
        </div>
        {menuOpen && (
          <div className="lg:hidden border-t border-border bg-background animate-fade-in">
            {NAV.map((n) => (
              <button
                key={n.id}
                onClick={() => scrollTo(n.id)}
                className="block w-full text-left px-6 py-3 uppercase text-sm font-medium border-b border-border/50"
              >
                {n.label}
              </button>
            ))}
          </div>
        )}
      </header>

      {/* HERO */}
      <section id="hero" className="relative min-h-screen flex items-center pt-16">
        <div className="absolute inset-0">
          <img src={HERO_IMG} alt="Брейк-данс" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-background/30" />
          <div className="absolute inset-0 grain opacity-60" />
        </div>
        <div className="container relative z-10">
          <div className="max-w-2xl animate-fade-in">
            <div className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-4 py-1.5 rounded-full text-sm font-bold uppercase mb-6">
              <Icon name="MapPin" size={16} /> д. Куюки · Республика Татарстан
            </div>
            <h1 className="font-display font-bold uppercase leading-[0.9] text-6xl sm:text-7xl md:text-8xl mb-6">
              Школа
              <br />
              <span className="text-accent">брейк-данса</span>
              <br />
              <span className="text-stroke-white">Top Squad</span>
            </h1>
            <p className="text-lg text-muted-foreground mb-8 max-w-lg">
              Танцуй, как будто весь мир смотрит на тебя. Учим брейкингу с нуля и
              растим настоящих bboy и bgirl.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button
                size="lg"
                onClick={() => scrollTo('signup')}
                className="bg-accent text-accent-foreground hover:bg-accent/90 font-bold uppercase text-base animate-pulse-glow"
              >
                Записаться на занятие
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => scrollTo('schedule')}
                className="border-foreground/30 font-bold uppercase text-base hover:bg-foreground hover:text-background"
              >
                Расписание
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* MARQUEE */}
      <div className="bg-accent text-accent-foreground py-3 overflow-hidden border-y-4 border-background">
        <div className="flex whitespace-nowrap animate-marquee">
          {Array.from({ length: 2 }).map((_, i) => (
            <div key={i} className="flex items-center">
              {['POWER MOVES', 'FREEZE', 'TOPROCK', 'FOOTWORK', 'BATTLE', 'CYPHER', 'FLOW'].map(
                (w) => (
                  <span key={w} className="font-display font-bold uppercase text-2xl mx-6">
                    {w} <span className="text-background">✦</span>
                  </span>
                ),
              )}
            </div>
          ))}
        </div>
      </div>

      {/* ABOUT */}
      <section id="about" className="py-24 container">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-accent font-bold uppercase tracking-widest mb-3">О школе</p>
            <h2 className="font-display font-bold uppercase text-5xl md:text-6xl mb-6 leading-tight">
              Мы — <span className="text-accent">команда</span>, а не просто школа
            </h2>
            <p className="text-muted-foreground text-lg mb-4">
              Top Squad — это место, где рождается уличная культура в Куюках. Мы
              объединяем тех, кто горит танцем, и помогаем каждому раскрыть свой
              потенциал на танцполе.
            </p>
            <p className="text-muted-foreground text-lg">
              Здесь не просто разучивают движения — здесь становятся частью
              большой семьи bboy и bgirl.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            {FEATURES.map((f, i) => (
              <Card
                key={f.title}
                className="bg-card border-border p-6 hover:border-accent transition-colors"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <div className="w-12 h-12 rounded-lg bg-accent flex items-center justify-center mb-4">
                  <Icon name={f.icon as never} size={24} className="text-accent-foreground" />
                </div>
                <h3 className="font-display font-bold uppercase text-xl mb-2">{f.title}</h3>
                <p className="text-muted-foreground text-sm">{f.text}</p>
              </Card>
            ))}
          </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 text-center">
          {[
            { n: '150+', l: 'Учеников' },
            { n: '8', l: 'Лет на сцене' },
            { n: '20+', l: 'Наград' },
            { n: '6', l: 'Групп' },
          ].map((s) => (
            <div key={s.l}>
              <div className="font-display font-bold text-5xl md:text-6xl text-accent">{s.n}</div>
              <div className="uppercase text-sm text-muted-foreground tracking-wide">{s.l}</div>
            </div>
          ))}
        </div>
      </section>

      {/* SCHEDULE */}
      <section id="schedule" className="py-24 bg-card border-y border-border">
        <div className="container">
          <p className="text-accent font-bold uppercase tracking-widest mb-3">Расписание</p>
          <h2 className="font-display font-bold uppercase text-5xl md:text-6xl mb-12">
            Когда <span className="text-accent">тренируемся</span>
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {SCHEDULE.map((s) => (
              <div
                key={s.day}
                className="group bg-background border border-border rounded-xl p-6 hover:border-accent hover:-translate-y-1 transition-all"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="font-display font-bold uppercase text-xl">{s.day}</span>
                  <Icon
                    name="Calendar"
                    size={20}
                    className="text-muted-foreground group-hover:text-accent transition-colors"
                  />
                </div>
                <p className="text-accent font-semibold mb-1">{s.group}</p>
                <p className="text-muted-foreground flex items-center gap-2">
                  <Icon name="Clock" size={16} /> {s.time}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* COACHES */}
      <section id="coaches" className="py-24 container">
        <p className="text-accent font-bold uppercase tracking-widest mb-3">Тренеры</p>
        <h2 className="font-display font-bold uppercase text-5xl md:text-6xl mb-12">
          Наша <span className="text-accent">команда</span>
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {COACHES.map((c) => (
            <Card
              key={c.name}
              className="bg-card border-border overflow-hidden group hover:border-accent transition-colors"
            >
              <div className="aspect-square bg-gradient-to-br from-accent/20 to-background flex items-center justify-center text-8xl group-hover:scale-110 transition-transform">
                {c.emoji}
              </div>
              <div className="p-6">
                <h3 className="font-display font-bold uppercase text-2xl mb-1">{c.name}</h3>
                <p className="text-muted-foreground text-sm">{c.role}</p>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* VIDEO */}
      <section id="video" className="py-24 bg-card border-y border-border">
        <div className="container">
          <p className="text-accent font-bold uppercase tracking-widest mb-3">Видео</p>
          <h2 className="font-display font-bold uppercase text-5xl md:text-6xl mb-12">
            Движение в <span className="text-accent">кадре</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {['Power Move баттл', 'Открытый урок', 'Отчётный концерт'].map((t) => (
              <div
                key={t}
                className="group relative aspect-video rounded-xl overflow-hidden bg-background border border-border flex items-center justify-center cursor-pointer hover:border-accent transition-colors"
              >
                <div className="absolute inset-0 grain opacity-40" />
                <div className="relative z-10 text-center">
                  <div className="w-16 h-16 rounded-full bg-accent flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <Icon name="Play" size={28} className="text-accent-foreground ml-1" />
                  </div>
                  <p className="font-display font-bold uppercase">{t}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section id="gallery" className="py-24 container">
        <p className="text-accent font-bold uppercase tracking-widest mb-3">Галерея</p>
        <h2 className="font-display font-bold uppercase text-5xl md:text-6xl mb-12">
          Наши <span className="text-accent">моменты</span>
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {GALLERY_EMOJI.map((e, i) => (
            <div
              key={i}
              className={`rounded-xl bg-card border border-border flex items-center justify-center text-6xl hover:border-accent hover:scale-105 transition-all cursor-pointer ${
                i % 3 === 0 ? 'aspect-square md:row-span-2 md:aspect-auto' : 'aspect-square'
              }`}
            >
              {e}
            </div>
          ))}
        </div>
      </section>

      {/* SIGNUP */}
      <section id="signup" className="py-24 bg-accent text-accent-foreground">
        <div className="container max-w-3xl">
          <div className="text-center mb-10">
            <h2 className="font-display font-bold uppercase text-5xl md:text-6xl mb-4">
              Запишись на занятие
            </h2>
            <p className="text-accent-foreground/80 text-lg">
              Оставь заявку — и мы пригласим тебя на первую бесплатную тренировку
            </p>
          </div>
          <form onSubmit={submit} className="bg-background text-foreground rounded-2xl p-8 space-y-5">
            <div>
              <label className="block text-sm font-bold uppercase mb-2">Имя</label>
              <Input
                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                placeholder="Как тебя зовут?"
                className="bg-card border-border h-12"
              />
            </div>
            <div>
              <label className="block text-sm font-bold uppercase mb-2">Телефон</label>
              <Input
                required
                type="tel"
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
                placeholder="+7 (___) ___-__-__"
                className="bg-card border-border h-12"
              />
            </div>
            <div>
              <label className="block text-sm font-bold uppercase mb-2">Группа</label>
              <Select value={form.group} onValueChange={(v) => setForm({ ...form, group: v })}>
                <SelectTrigger className="bg-card border-border h-12">
                  <SelectValue placeholder="Выбери группу" />
                </SelectTrigger>
                <SelectContent>
                  {SCHEDULE.map((s) => (
                    <SelectItem key={s.day} value={s.group}>
                      {s.group} — {s.day}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <Button
              type="submit"
              size="lg"
              className="w-full bg-accent text-accent-foreground hover:bg-accent/90 font-bold uppercase text-base h-12"
            >
              Отправить заявку
            </Button>
          </form>
        </div>
      </section>

      {/* CONTACTS + SOCIALS */}
      <section id="contacts" className="py-24 container">
        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <p className="text-accent font-bold uppercase tracking-widest mb-3">Контакты</p>
            <h2 className="font-display font-bold uppercase text-5xl md:text-6xl mb-8">
              Найди нас
            </h2>
            <ul className="space-y-5">
              <li className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-lg bg-accent flex items-center justify-center shrink-0">
                  <Icon name="MapPin" size={20} className="text-accent-foreground" />
                </div>
                <div>
                  <p className="font-bold uppercase text-sm">Адрес</p>
                  <p className="text-muted-foreground">Республика Татарстан, д. Куюки, ул.8 квартал, д.2а
</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-lg bg-accent flex items-center justify-center shrink-0">
                  <Icon name="Phone" size={20} className="text-accent-foreground" />
                </div>
                <div>
                  <p className="font-bold uppercase text-sm">Телефон</p>
                  <p className="text-muted-foreground">+7 (999) 157-60-19</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-lg bg-accent flex items-center justify-center shrink-0">
                  <Icon name="Mail" size={20} className="text-accent-foreground" />
                </div>
                <div>
                  <p className="font-bold uppercase text-sm">Почта</p>
                  <p className="text-muted-foreground">hello@topsquad.ru</p>
                </div>
              </li>
            </ul>
          </div>
          <div>
            <p className="text-accent font-bold uppercase tracking-widest mb-3">Соцсети</p>
            <h2 className="font-display font-bold uppercase text-5xl md:text-6xl mb-8">
              Мы в сети
            </h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {SOCIALS.map((s) => (
                <a
                  key={s.label}
                  href="#"
                  className="group flex items-center gap-4 bg-card border border-border rounded-xl p-5 hover:border-accent hover:-translate-y-1 transition-all"
                >
                  <div className="w-11 h-11 rounded-lg bg-secondary flex items-center justify-center group-hover:bg-accent transition-colors">
                    <Icon
                      name={s.icon as never}
                      size={20}
                      className="group-hover:text-accent-foreground transition-colors"
                    />
                  </div>
                  <div>
                    <p className="font-display font-bold uppercase">{s.label}</p>
                    <p className="text-muted-foreground text-sm">{s.handle}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-border py-10">
        <div className="container flex flex-col md:flex-row items-center justify-between gap-4">
          <span className="font-display font-bold text-2xl">
            TOP<span className="text-accent">SQUAD</span>
          </span>
          <p className="text-muted-foreground text-sm">
            © 2026 Top Squad · Школа брейк-данса · д. Куюки, РТ
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;