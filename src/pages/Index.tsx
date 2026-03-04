import Icon from "@/components/ui/icon";

const routes = [
  {
    tag: "Популярное",
    tagColor: "var(--primary)",
    img: "https://cdn.poehali.dev/projects/bb4e57e7-643a-49a8-b040-40191973ff3a/files/7c8b0b5c-e8ba-4921-870f-89ec764e112d.jpg",
    title: "Прохоровское поле",
    duration: "1 день",
    price: "от 2 500 ₽",
    desc: "Мемориал Победы, Звонница, музей «Третье ратное поле России». Незабываемый патриотический маршрут.",
  },
  {
    tag: "Сезонное",
    tagColor: "var(--secondary)",
    img: "https://cdn.poehali.dev/projects/bb4e57e7-643a-49a8-b040-40191973ff3a/files/8ea5dc14-e0e1-428c-a829-67eaa5abaa51.jpg",
    title: "Осень в усадьбах",
    duration: "Уикенд",
    price: "от 4 800 ₽",
    desc: "Усадьбы Белгородчины в золоте осени — Юсупово, Томаровка, Грайворон. С дегустацией местных продуктов.",
  },
  {
    tag: "Семейное",
    tagColor: "var(--accent)",
    tagDark: true,
    img: "https://cdn.poehali.dev/projects/bb4e57e7-643a-49a8-b040-40191973ff3a/files/7f50788c-8eb1-4b4d-a1ed-cfa4c3facb7c.jpg",
    title: "С детьми по усадьбам",
    duration: "1 день",
    price: "от 1 800 ₽",
    desc: "Мастер-классы по гончарству, пасека, фольклорные программы. Дети в восторге, родители в покое.",
  },
];

const experts = [
  { name: "Александр Петров", spec: "Краевед, историк", rating: "4.9", reviews: 124, icon: "BookOpen" },
  { name: "Марина Соколова", spec: "Гастро-туризм, кухня", rating: "4.8", reviews: 87, icon: "UtensilsCrossed" },
  { name: "Виктор Чернов", spec: "Экотуризм, природа", rating: "5.0", reviews: 56, icon: "TreePine" },
];

const categories = [
  { label: "Исторические", icon: "Landmark" },
  { label: "Гастрономические", icon: "UtensilsCrossed" },
  { label: "Эко-маршруты", icon: "TreePine" },
  { label: "Патриотические", icon: "Shield" },
  { label: "Семейные", icon: "Heart" },
  { label: "Событийные", icon: "CalendarDays" },
];

export default function Index() {
  return (
    <>
      <div className="grain-overlay" />

      {/* Header */}
      <header className="header">
        <div className="logo">БЕЛОГОРЬЕ</div>
        <nav>
          <a href="#">Маршруты</a>
          <a href="#">Конструктор</a>
          <a href="#">Эксперты</a>
          <a href="#">События</a>
          <a href="#">Медиатека</a>
        </nav>
        <button className="btn-cta">Личный кабинет</button>
      </header>

      <main>
        {/* Hero */}
        <section className="hero">
          <div className="hero-content">
            <h1 className="hero-title">
              ОТКРОЙ
              <br />
              <span>БЕЛОГОРЬЕ</span>
            </h1>
            <p className="text-base md:text-lg lg:text-xl mb-8 md:mb-10 leading-relaxed text-[#555]">
              Туристическая платформа Белгородской области. Готовые маршруты от местных экспертов, конструктор путешествий и уникальный опыт региона.
            </p>

            {/* Search */}
            <div className="search-bar">
              <Icon name="Search" size={18} />
              <input type="text" placeholder="Куда едем? Усадьбы, Прохоровка, гастро..." />
              <button className="btn-cta" style={{ background: "var(--primary)", color: "white" }}>
                Найти
              </button>
            </div>

            <div className="flex flex-wrap gap-2 mt-4">
              {["Исторические", "Гастро", "Эко", "Семейные", "1 день"].map((tag) => (
                <span key={tag} className="filter-tag">{tag}</span>
              ))}
            </div>
          </div>
          <div className="hero-img">
            <div className="sticker">
              50+
              <br />
              МАРШРУТОВ
            </div>
            <div className="floating-tag hidden md:block" style={{ top: "20%", left: "10%" }}>
              #БЕЛОГОРЬЕ
            </div>
            <div className="floating-tag hidden md:block" style={{ bottom: "30%", right: "20%" }}>
              ОТКРЫВАЙ
            </div>
          </div>
        </section>

        {/* Marquee */}
        <div className="marquee">
          <div className="marquee-content">
            &nbsp; * ПРОХОРОВСКОЕ ПОЛЕ * УСАДЬБЫ БЕЛГОРОДЧИНЫ * МЕСТНЫЕ ЭКСПЕРТЫ * УНИКАЛЬНЫЙ ОПЫТ * МАСТЕР-КЛАССЫ *
            ПРОХОРОВСКОЕ ПОЛЕ * УСАДЬБЫ БЕЛГОРОДЧИНЫ * МЕСТНЫЕ ЭКСПЕРТЫ * УНИКАЛЬНЫЙ ОПЫТ * МАСТЕР-КЛАССЫ
          </div>
        </div>

        {/* Categories */}
        <section className="section-padding" style={{ borderBottom: "var(--border)" }}>
          <div className="section-header">
            <h2 className="section-title">КАТЕГОРИИ</h2>
            <a href="#" className="text-sm md:text-base" style={{ color: "var(--dark)", fontWeight: 800, textTransform: "uppercase" }}>
              Все маршруты
            </a>
          </div>
          <div className="categories-grid">
            {categories.map((cat) => (
              <div key={cat.label} className="category-card">
                <Icon name={cat.icon} size={28} />
                <span>{cat.label}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Popular Routes */}
        <section className="section-padding">
          <div className="section-header">
            <h2 className="section-title">МАРШРУТЫ</h2>
            <a href="#" className="text-sm md:text-base" style={{ color: "var(--dark)", fontWeight: 800, textTransform: "uppercase" }}>
              Смотреть все
            </a>
          </div>

          <div className="menu-grid">
            {routes.map((route) => (
              <div key={route.title} className="menu-card">
                <span className="menu-tag" style={{ background: route.tagColor, color: route.tagDark ? "var(--dark)" : "white" }}>
                  {route.tag}
                </span>
                <img src={route.img} alt={route.title} />
                <div className="menu-card-body">
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "8px" }}>
                    <h3>{route.title}</h3>
                    <span className="price">{route.price}</span>
                  </div>
                  <div style={{ display: "flex", gap: "12px", marginBottom: "10px" }}>
                    <span className="route-meta"><Icon name="Clock" size={13} /> {route.duration}</span>
                    <span className="route-meta"><Icon name="MapPin" size={13} /> Белгород. обл.</span>
                  </div>
                  <p style={{ fontSize: "14px", color: "#666" }}>{route.desc}</p>
                  <button className="btn-cta" style={{ marginTop: "16px", width: "100%", background: "var(--primary)", color: "white" }}>
                    Подробнее
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Builder Promo */}
        <section className="retro-vibe">
          <div>
            <h2 className="vibe-title">СОСТАВЬ СВОЙ МАРШРУТ.</h2>
            <p className="vibe-text">
              Конструктор путешествий позволяет создать идеальную поездку: выбери достопримечательности, добавь мастер-классы, кафе и жильё — система сама подберёт логистику и рассчитает стоимость.
            </p>
            <button className="btn-cta" style={{ background: "var(--dark)", color: "white", borderColor: "white" }}>
              Открыть конструктор
            </button>
          </div>
          <div className="vibe-img"></div>
        </section>

        {/* Experts */}
        <section className="section-padding" style={{ borderBottom: "var(--border)" }}>
          <div className="section-header">
            <h2 className="section-title">ЭКСПЕРТЫ</h2>
            <a href="#" className="text-sm md:text-base" style={{ color: "var(--dark)", fontWeight: 800, textTransform: "uppercase" }}>
              Все гиды
            </a>
          </div>
          <div className="experts-grid">
            {experts.map((exp) => (
              <div key={exp.name} className="expert-card">
                <div className="expert-avatar">
                  <Icon name={exp.icon} size={32} />
                </div>
                <div className="expert-info">
                  <h3>{exp.name}</h3>
                  <p>{exp.spec}</p>
                  <div className="expert-rating">
                    <Icon name="Star" size={14} />
                    <strong>{exp.rating}</strong>
                    <span>· {exp.reviews} отзывов</span>
                  </div>
                </div>
                <button className="btn-cta" style={{ background: "var(--accent)", color: "var(--dark)" }}>
                  Записаться
                </button>
              </div>
            ))}
          </div>
        </section>

        {/* Events teaser */}
        <section className="section-padding">
          <h2 className="section-title" style={{ marginBottom: "40px", textAlign: "center" }}>
            БЛИЖАЙШИЕ СОБЫТИЯ
          </h2>
          <div className="social-grid">
            {[
              { date: "15 МАЯ", title: "Фестиваль «Белгородский мёд»", place: "Центр Белгорода" },
              { date: "22 МАЯ", title: "Экскурсия «Ночь музеев»", place: "Белгородский музей" },
              { date: "1 ИЮН", title: "День защиты детей в усадьбах", place: "Усадьба Юсупово" },
              { date: "14 ИЮН", title: "Гастрофест локальной кухни", place: "Старый Оскол" },
            ].map((ev) => (
              <div key={ev.title} className="event-card">
                <div className="event-date">{ev.date}</div>
                <div className="event-body">
                  <h4>{ev.title}</h4>
                  <p><Icon name="MapPin" size={12} /> {ev.place}</p>
                </div>
                <Icon name="ArrowRight" size={20} />
              </div>
            ))}
          </div>
        </section>
      </main>

      <footer>
        <div>
          <div className="footer-logo">БЕЛОГОРЬЕ</div>
          <p style={{ color: "#666", lineHeight: 1.6 }}>
            Туристическая платформа Белгородской области. Открывайте регион вместе с местными экспертами.
          </p>
        </div>
        <div className="footer-links">
          <h4>Навигация</h4>
          <ul>
            {["Маршруты", "Конструктор", "Эксперты", "События", "Медиатека", "О проекте"].map((link) => (
              <li key={link}>
                <a href="#" style={{ color: "inherit", textDecoration: "none" }}>{link}</a>
              </li>
            ))}
          </ul>
        </div>
        <div className="footer-links">
          <h4>Поддержка</h4>
          <ul>
            {["FAQ", "Напишите нам", "Условия пользования", "Политика данных"].map((link) => (
              <li key={link}>
                <a href="#" style={{ color: "inherit", textDecoration: "none" }}>{link}</a>
              </li>
            ))}
          </ul>
        </div>
        <div className="footer-links">
          <h4>Контакты</h4>
          <ul>
            <li>Комитет по туризму Белгородской области</li>
            <li>info@belogorye.ru</li>
            <li>8-800-000-00-00</li>
          </ul>
        </div>
      </footer>
    </>
  );
}