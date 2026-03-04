import { useState } from "react";
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

const carouselSlides = [
  {
    img: "https://cdn.poehali.dev/projects/bb4e57e7-643a-49a8-b040-40191973ff3a/bucket/e198feb8-6d3e-4d94-acc0-82408f99efd7.jpg",
    title: "Белгород с высоты",
    story: "Памятник князю Владимиру — символ города, откуда открывается панорама на весь Белгород.",
  },
  {
    img: "https://cdn.poehali.dev/projects/bb4e57e7-643a-49a8-b040-40191973ff3a/files/7c8b0b5c-e8ba-4921-870f-89ec764e112d.jpg",
    title: "Прохоровское поле",
    story: "Третье ратное поле России — место величайшего танкового сражения Второй мировой войны.",
  },
  {
    img: "https://cdn.poehali.dev/projects/bb4e57e7-643a-49a8-b040-40191973ff3a/files/8ea5dc14-e0e1-428c-a829-67eaa5abaa51.jpg",
    title: "Золото усадеб",
    story: "Старинные дворянские усадьбы Белгородчины хранят историю нескольких веков.",
  },
];

const experts = [
  { name: "Александр Петров", spec: "Краевед, историк", rating: "4.9", reviews: 124, icon: "BookOpen", exp: "12 лет", lang: "RU, EN" },
  { name: "Марина Соколова", spec: "Гастро-туризм, кухня", rating: "4.8", reviews: 87, icon: "UtensilsCrossed", exp: "8 лет", lang: "RU" },
  { name: "Виктор Чернов", spec: "Экотуризм, природа", rating: "5.0", reviews: 56, icon: "TreePine", exp: "6 лет", lang: "RU, DE" },
];

const categories = [
  { label: "Исторические", icon: "Landmark" },
  { label: "Гастрономические", icon: "UtensilsCrossed" },
  { label: "Эко-маршруты", icon: "TreePine" },
  { label: "Патриотические", icon: "Shield" },
  { label: "Семейные", icon: "Heart" },
  { label: "Онлайн", icon: "Monitor" },
];

const mediaItems = [
  { type: "Лонгрид", icon: "FileText", title: "7 малоизвестных фактов о Белгороде", time: "8 мин" },
  { type: "Аудиогид", icon: "Headphones", title: "Прогулка по историческому центру", time: "42 мин" },
  { type: "Видео", icon: "Play", title: "Репортаж с фестиваля «Белгородский мёд»", time: "12 мин" },
  { type: "Фото", icon: "Camera", title: "Белгородчина в объективе: осень 2024", time: "24 фото" },
];

const mapPoints = [
  { label: "Прохоровское поле", type: "Музей", x: 72, y: 28 },
  { label: "Памятник кн. Владимиру", type: "Достопр.", x: 38, y: 55 },
  { label: "Усадьба Юсупово", type: "Усадьба", x: 22, y: 40 },
  { label: "Грайворон", type: "Город", x: 15, y: 68 },
  { label: "Старый Оскол", type: "Город", x: 80, y: 42 },
  { label: "Валуйки", type: "Город", x: 88, y: 65 },
];

export default function Index() {
  const [slide, setSlide] = useState(0);
  const [activeFilter, setActiveFilter] = useState("Все");

  return (
    <>
      <div className="grain-overlay" />

      {/* Header */}
      <header className="header">
        <div className="logo">ТОЧКА НА КАРТЕ</div>
        <nav>
          <a href="#">Маршруты</a>
          <a href="#">Эксперты</a>
          <a href="#">Медиатека</a>
          <a href="#">События</a>
          <a href="#">О проекте</a>
        </nav>
        <button className="btn-cta">Войти</button>
      </header>

      <main>
        {/* Hero */}
        <section className="hero">
          <div className="hero-content">
            <div className="hero-badge">Белгородская область</div>
            <h1 className="hero-title">
              ТОЧКА НА КАРТЕ —
              <br />
              <span>БЕЛГОРОД</span>
            </h1>
            <p className="text-base md:text-lg mb-6 leading-relaxed text-[#555]">
              Туристическая платформа Белгородской области. Готовые маршруты от местных экспертов, изучение культуры не выходя из дома, конструктор путешествий и уникальный опыт региона.
            </p>

            {/* Search */}
            <div className="search-bar">
              <Icon name="Search" size={18} />
              <input type="text" placeholder="Куда едем? Звонница, усадьбы, Прохоровка..." />
              <button className="btn-cta" style={{ background: "var(--primary)", color: "white" }}>
                Найти
              </button>
            </div>

            <div className="flex flex-wrap gap-2 mt-4">
              {["Все", "1 день", "Уикенд", "Исторические", "Онлайн"].map((tag) => (
                <span
                  key={tag}
                  className="filter-tag"
                  style={activeFilter === tag ? { background: "var(--primary)", color: "white", borderColor: "var(--primary)" } : {}}
                  onClick={() => setActiveFilter(tag)}
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="hero-stats">
              <div className="stat-item"><strong>50+</strong><span>маршрутов</span></div>
              <div className="stat-divider" />
              <div className="stat-item"><strong>30+</strong><span>экспертов</span></div>
              <div className="stat-divider" />
              <div className="stat-item"><strong>200+</strong><span>локаций</span></div>
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
            &nbsp; * ПРОХОРОВСКОЕ ПОЛЕ * ЗВОННИЦА * УСАДЬБЫ БЕЛГОРОДЧИНЫ * МЕСТНЫЕ ЭКСПЕРТЫ * МАЙСКИЕ ПРАЗДНИКИ * МАСТЕР-КЛАССЫ * ГАСТРО-ТУРЫ *
            ПРОХОРОВСКОЕ ПОЛЕ * ЗВОННИЦА * УСАДЬБЫ БЕЛГОРОДЧИНЫ * МЕСТНЫЕ ЭКСПЕРТЫ * МАЙСКИЕ ПРАЗДНИКИ * МАСТЕР-КЛАССЫ * ГАСТРО-ТУРЫ
          </div>
        </div>

        {/* Media Carousel */}
        <section className="carousel-section">
          <div className="carousel-header">
            <h2 className="section-title">ВДОХНОВЕНИЕ</h2>
            <div className="carousel-controls">
              <button className="carousel-btn" onClick={() => setSlide((s) => (s - 1 + carouselSlides.length) % carouselSlides.length)}>
                <Icon name="ChevronLeft" size={20} />
              </button>
              <span className="carousel-counter">{slide + 1} / {carouselSlides.length}</span>
              <button className="carousel-btn" onClick={() => setSlide((s) => (s + 1) % carouselSlides.length)}>
                <Icon name="ChevronRight" size={20} />
              </button>
            </div>
          </div>
          <div className="carousel-track" style={{ transform: `translateX(-${slide * 100}%)` }}>
            {carouselSlides.map((s, i) => (
              <div key={i} className="carousel-slide">
                <img src={s.img} alt={s.title} />
                <div className="carousel-caption">
                  <h3>{s.title}</h3>
                  <p>{s.story}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="carousel-dots">
            {carouselSlides.map((_, i) => (
              <button key={i} className={`carousel-dot${i === slide ? " active" : ""}`} onClick={() => setSlide(i)} />
            ))}
          </div>
        </section>

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
        <section className="section-padding" style={{ borderBottom: "var(--border)" }}>
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
                  <div style={{ display: "flex", gap: "8px", marginTop: "16px" }}>
                    <button className="btn-cta" style={{ flex: 1, background: "var(--primary)", color: "white" }}>
                      Подробнее
                    </button>
                    <button className="btn-cta" style={{ padding: "10px 12px" }}>
                      <Icon name="Heart" size={16} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Interactive Map */}
        <section className="section-padding" style={{ borderBottom: "var(--border)" }}>
          <div className="section-header">
            <h2 className="section-title">КАРТА ОБЛАСТИ</h2>
            <a href="#" className="text-sm md:text-base" style={{ color: "var(--dark)", fontWeight: 800, textTransform: "uppercase" }}>
              Открыть полную карту
            </a>
          </div>
          <div className="map-container">
            <div className="map-bg">
              <img
                src="https://cdn.poehali.dev/projects/bb4e57e7-643a-49a8-b040-40191973ff3a/bucket/e198feb8-6d3e-4d94-acc0-82408f99efd7.jpg"
                alt="Карта Белгородской области"
              />
              <div className="map-overlay" />
              {mapPoints.map((pt) => (
                <div
                  key={pt.label}
                  className="map-pin"
                  style={{ left: `${pt.x}%`, top: `${pt.y}%` }}
                >
                  <Icon name="MapPin" size={20} />
                  <div className="map-pin-tooltip">
                    <strong>{pt.label}</strong>
                    <span>{pt.type}</span>
                  </div>
                </div>
              ))}
            </div>
            <div className="map-legend">
              {[
                { icon: "Landmark", label: "Достопримечательности", count: "48" },
                { icon: "UserCheck", label: "Гиды и мастера", count: "30+" },
                { icon: "Coffee", label: "Кафе и рестораны", count: "120+" },
                { icon: "Home", label: "Агроусадьбы", count: "25" },
              ].map((item) => (
                <div key={item.label} className="legend-item">
                  <div className="legend-icon">
                    <Icon name={item.icon} size={18} />
                  </div>
                  <div>
                    <strong>{item.count}</strong>
                    <p>{item.label}</p>
                  </div>
                </div>
              ))}
            </div>
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
                  <div className="expert-meta">
                    <span><Icon name="Clock" size={12} /> {exp.exp}</span>
                    <span><Icon name="Languages" size={12} /> {exp.lang}</span>
                  </div>
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

        {/* Medialibrary */}
        <section className="section-padding" style={{ borderBottom: "var(--border)" }}>
          <div className="section-header">
            <h2 className="section-title">МЕДИАТЕКА</h2>
            <a href="#" className="text-sm md:text-base" style={{ color: "var(--dark)", fontWeight: 800, textTransform: "uppercase" }}>
              Вся библиотека
            </a>
          </div>
          <div className="media-grid">
            {mediaItems.map((item) => (
              <div key={item.title} className="media-card">
                <div className="media-icon">
                  <Icon name={item.icon} size={28} />
                </div>
                <div className="media-body">
                  <span className="media-type">{item.type}</span>
                  <h4>{item.title}</h4>
                  <span className="media-time"><Icon name="Clock" size={12} /> {item.time}</span>
                </div>
                <Icon name="ArrowRight" size={18} />
              </div>
            ))}
          </div>
        </section>

        {/* Events */}
        <section className="section-padding">
          <div className="section-header">
            <h2 className="section-title">СОБЫТИЯ</h2>
            <a href="#" className="text-sm md:text-base" style={{ color: "var(--dark)", fontWeight: 800, textTransform: "uppercase" }}>
              Все мероприятия
            </a>
          </div>
          <div style={{ display: "flex", flexDirection: "column", borderTop: "var(--border)" }}>
            {[
              { date: "15 МАЯ", title: "Майские праздники на Прохоровском поле", place: "Прохоровка", tag: "Патриотическое" },
              { date: "22 МАЯ", title: "Фестиваль «Белгородский мёд»", place: "Центр Белгорода", tag: "Гастро" },
              { date: "1 ИЮН", title: "Ночь музеев — экскурсия со Звонницы", place: "Белгородский музей", tag: "Культура" },
              { date: "14 ИЮН", title: "Гастрофест локальной кухни", place: "Старый Оскол", tag: "Гастро" },
            ].map((ev) => (
              <div key={ev.title} className="event-card">
                <div className="event-date">{ev.date}</div>
                <div className="event-body">
                  <h4>{ev.title}</h4>
                  <div style={{ display: "flex", gap: "12px", alignItems: "center" }}>
                    <p><Icon name="MapPin" size={12} /> {ev.place}</p>
                    <span className="event-tag">{ev.tag}</span>
                  </div>
                </div>
                <div style={{ display: "flex", gap: "8px", alignItems: "center" }}>
                  <button className="btn-cta" style={{ fontSize: "11px", padding: "8px 12px" }}>Поехать</button>
                  <Icon name="ArrowRight" size={20} />
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      <footer>
        <div>
          <div className="footer-logo">ТОЧКА НА КАРТЕ</div>
          <p style={{ color: "#666", lineHeight: 1.6 }}>
            Туристическая платформа Белгородской области. Открывайте регион вместе с местными экспертами.
          </p>
          <p style={{ color: "#999", fontSize: "13px", marginTop: "12px" }}>
            При поддержке Комитета по туризму Белгородской области
          </p>
        </div>
        <div className="footer-links">
          <h4>Платформа</h4>
          <ul>
            {["Маршруты", "Конструктор путешествий", "Эксперты и гиды", "Мастер-классы", "Агроусадьбы"].map((link) => (
              <li key={link}><a href="#" style={{ color: "inherit", textDecoration: "none" }}>{link}</a></li>
            ))}
          </ul>
        </div>
        <div className="footer-links">
          <h4>Контент</h4>
          <ul>
            {["Медиатека", "Аудиогиды", "Видеоролики", "Фотогалереи", "События"].map((link) => (
              <li key={link}><a href="#" style={{ color: "inherit", textDecoration: "none" }}>{link}</a></li>
            ))}
          </ul>
        </div>
        <div className="footer-links">
          <h4>Помощь</h4>
          <ul>
            {["О проекте", "Личный кабинет", "FAQ", "Условия пользования", "Политика данных"].map((link) => (
              <li key={link}><a href="#" style={{ color: "inherit", textDecoration: "none" }}>{link}</a></li>
            ))}
          </ul>
        </div>
      </footer>
    </>
  );
}
