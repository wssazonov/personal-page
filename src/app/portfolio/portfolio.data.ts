import type {
    ContactItem,
    ExperienceItem,
    NavItem,
    ProjectCard,
    TechCard,
    WhyCard,
} from "./portfolio.models";

export const NAV_ITEMS: NavItem[] = [
    { label: "Обо мне", href: "#about" },
    { label: "Навыки", href: "#skills" },
    { label: "Опыт", href: "#experience" },
    { label: "Проекты", href: "#projects" },
    { label: "Контакты", href: "#contacts" },
];

export const HERO_TECH_STACK: TechCard[] = [
    { name: "Angular", shortName: "A", tone: "red" },
    { name: "TypeScript", shortName: "TS", tone: "blue" },
    { name: "RxJS", shortName: "Rx", tone: "violet" },
    { name: "BPMN.js", shortName: "B", tone: "slate" },
    { name: "CodeMirror", shortName: "{}", tone: "rose" },
];

export const SKILLS: string[] = [
    "Angular 21+",
    "TypeScript",
    "RxJS",
    "Signals",
    "NgRx",
    "BPMN.js",
    "CodeMirror",
    "HTML",
    "SCSS/CSS",
    "REST API",
    "Git",
    "CI/CD",
    "Unit-тесты",
];

export const PROJECTS: ProjectCard[] = [
    {
        title: "Кастомизация BPMN-редактора",
        description:
            "Развитие BPMN-модуля в enterprise-платформе: устойчивые сценарии моделирования, расширение инструментов и интеграция с доменной логикой.",
        role: "Senior Frontend Developer, Platform Big3",
        result:
            "Повысил стабильность сложных BPMN-сценариев и снизил количество проблем синхронизации UI-состояния.",
        details: [
            "кастомные правила моделирования и UX-поведение редактора",
            "панели свойств, дополнительные инструменты и интеграции",
            "регрессионные unit-тесты для критичных сценариев",
        ],
        stack: ["Angular 18+", "TypeScript", "RxJS", "bpmn-js", "Jasmine"],
        preview: "bpmn",
        images: [
            {
                src: "assets/images/cases/bpmn-editor-1.png",
                alt: "BPMN-редактор с диаграммой бизнес-процесса",
                caption: "BPMN-редактор: экран диаграммы и панель инструментов",
            },
            {
                src: "assets/images/cases/bpmn-editor-2.png",
                alt: "BPMN-редактор с журналом запусков",
                caption: "BPMN-редактор: просмотр экземпляра бизнес-процесса",
            },
        ],
    },
    {
        title: "Сложные динамические формы",
        description:
            "Meta-driven UI и конфигурационные формы для больших интерфейсов, где поля, зависимости и правила меняются по данным.",
        role: "Senior Frontend Developer, Platform Big3",
        result:
            "Формы стали предсказуемее для поддержки, а новые сценарии можно было добавлять без переписывания всего экрана.",
        details: [
            "условная видимость, валидация и зависимости между полями",
            "таблицы, административные интерфейсы и сохранение состояния",
            "работа с реактивными потоками и backend API",
        ],
        stack: ["Angular", "Reactive Forms", "RxJS", "REST API", "Signals"],
        preview: "forms",
        images: [
            {
                src: "assets/images/cases/dynamic-form-1.png",
                alt: "Динамическая форма с множеством полей и загрузкой файлов",
                caption: "Динамические формы: длинная конфигурационная форма",
            },
            {
                src: "assets/images/cases/dynamic-form-2.png",
                alt: "Настройки приложения с группами полей и боковым меню",
                caption: "Динамические формы: настройки приложения и геокарты",
            },
        ],
    },
    {
        title: "Интеграция CodeMirror",
        description:
            "Встраивание редактора кода в Angular-приложение так, чтобы он корректно жил внутри состояния приложения и бизнес-сценариев.",
        role: "Frontend Developer, enterprise UI",
        result:
            "Пользователи получили удобный редактор с подсветкой, автодополнением и контролируемым обменом данными с приложением.",
        details: [
            "инициализация и жизненный цикл редактора в Angular",
            "подсветка синтаксиса, автодополнение и форматирование",
            "связь редактора с формами, состоянием и валидацией",
        ],
        stack: ["Angular", "TypeScript", "CodeMirror", "RxJS"],
        preview: "code",
        images: [
            {
                src: "assets/images/cases/codemirror.png",
                alt: "Редактор CodeMirror с формулой и панелью атрибутов",
                caption: "CodeMirror: формулы, атрибуты и визуальные токены",
            },
        ],
    },
    {
        title: "SmartTV и web-продукты",
        description:
            "Web- и SmartTV-продукты TVIP: приложения для LG/Samsung SmartTV, web-плеер, административная панель и сценарии переноса трансляции.",
        role: "Middle Frontend Developer, TVIP",
        result:
            "Развивал пользовательские сценарии для IPTV-продукта на разных устройствах и участвовал в поддержке web-интерфейсов.",
        details: [
            "SmartTV-приложения для LG/Samsung",
            "web-плеер и административная панель",
            "микрофронтенд и сценарии переноса трансляции",
        ],
        stack: ["Angular 7+", "TypeScript", "SmartTV SDK", "Microfrontend"],
        preview: "dashboard",
        images: [
            {
                src: "assets/images/cases/tvip.png",
                alt: "Интерфейс TVIP с телеканалами, программой передач и видеоплеером",
                caption: "TVIP: интерфейс просмотра телеканалов и телепрограммы",
            },
        ],
    },
    {
        title: "Sber insurance products",
        description:
            "Online insurance flows для продуктов Сбера: формы оформления, пошаговые сценарии, интеграция с оплатой и авторизацией.",
        role: "Middle+ Frontend Developer, BIV",
        result:
            "Участвовал в разработке продуктовых сценариев, где важны понятная форма, стабильная валидация и аккуратный UX на длинном пути оформления.",
        details: [
            "пошаговое оформление страхового продукта",
            "сложные формы с зависимыми полями",
            "интеграция с внешними сервисами и платежным сценарием",
        ],
        stack: ["Angular 12+", "TypeScript", "RxJS", "REST API", "Sber ID"],
        preview: "forms",
        images: [
            {
                src: "assets/images/cases/sber-product.png",
                alt: "Форма оформления страхового продукта Сбер Страхование",
                caption: "Sber insurance product: пример формы оформления ДМС",
            },
        ],
    },
];

export const EXPERIENCE: ExperienceItem[] = [
    {
        period: "Апрель 2024 — Май 2026",
        role: "Senior Frontend Developer",
        company: "ООО «Большая Тройка»",
        project: {
            name: "Platform Big3",
            url: "https://platform.big3.ru/",
        },
        description:
            "Развитие enterprise-платформы на Angular 18+: сложные UI-модули, динамические формы, таблицы, административные интерфейсы и кастомизация BPMN-редактора на базе bpmn-js. Улучшал стабильность BPMN-сценариев, участвовал в meta-driven UI, повышал качество кода и покрытие unit-тестами.",
        stack: ["Angular 18+", "TypeScript", "RxJS", "bpmn-js", "Jasmine", "TestBed"],
    },
    {
        period: "Февраль 2021 — Апрель 2024",
        role: "Middle+ Frontend Developer",
        company: "BIV",
        projects: [
            "B2B admin",
            "HR portal",
            "личные кабинеты",
            "online insurance products",
            "Protection360 / Sber services",
        ],
        description:
            "Работа над enterprise-, fintech- и insurance-проектами на Angular: frontend-архитектура, микрофронтенды, переиспользуемые компоненты, code review, оценка задач, наставничество и онбординг разработчиков.",
        stack: ["Angular 12+", "TypeScript", "RxJS", "Microfrontend", "REST API"],
    },
    {
        period: "Ноябрь 2019 — Февраль 2021",
        role: "Middle Frontend Developer",
        company: "Tvip",
        project: {
            name: "Tvip Media",
            url: "https://tvipmedia.ru/",
        },
        description:
            "Разработка SmartTV и web-продуктов: приложения для LG/Samsung SmartTV, web-плеер, административная панель, микрофронтенд и сценарии переноса трансляции между устройствами.",
        stack: ["Angular 7+", "TypeScript", "SmartTV SDK", "Microfrontend"],
    },
    {
        period: "Март 2019 — Ноябрь 2019",
        role: "Middle Frontend Developer",
        company: "Seagull inc",
        description:
            "Разработка frontend с нуля для системы бронирования Kroger, создание UI-компонентов, участие в архитектуре, документация и онбординг команды.",
        stack: ["Angular 7+", "TypeScript", "REST API"],
    },
    {
        period: "Август 2017 — Декабрь 2018",
        role: "Junior+ Frontend Developer",
        company: "WebSailors",
        description:
            "Разработка web-сервисов, участие в проектировании UI, компонентная frontend-архитектура и работа с задачами оценки и защиты данных.",
        stack: ["AngularJS", "JavaScript", "HTML", "CSS"],
    },
];

export const WHY_ME: WhyCard[] = [
    {
        title: "Разбираюсь в сложной бизнес-логике",
        description:
            "Быстро погружаюсь в предметную область и превращаю требования в понятные интерфейсы.",
        icon: "logic",
    },
    {
        title: "Не ломаю, а улучшаю",
        description:
            "Аккуратно работаю с существующим кодом, стабилизирую и развиваю продукт без лишнего шума.",
        icon: "shield",
    },
    {
        title: "Довожу до результата",
        description:
            "Беру ответственность за качество, сроки и production-ready состояние задачи.",
        icon: "target",
    },
    {
        title: "Командный игрок",
        description:
            "Прозрачно коммуницирую, помогаю коллегам и умею договариваться о технических решениях.",
        icon: "team",
    },
    {
        title: "Менторю и ревьюю",
        description:
            "Даю полезную обратную связь, поддерживаю стандарты кода и помогаю разработчикам расти.",
        icon: "review",
    },
];

export const CONTACTS: ContactItem[] = [
    {
        label: "Telegram",
        icon: "TG",
        value: "@VyacheslavSazonov",
        href: "https://t.me/VyacheslavSazonov",
    },
    {
        label: "Email",
        icon: "@",
        value: "mrdrap@mail.ru",
        href: "mailto:mrdrap@mail.ru",
    },
    {
        label: "GitHub",
        icon: "GH",
        value: "wssazonov",
        href: "https://github.com/wssazonov",
    },
    {
        label: "LinkedIn",
        icon: "in",
        value: "Vyacheslav Sazonov",
        href: "https://www.linkedin.com/in/vyacheslav-sazonov-509b3911a/",
    },
    { label: "Location", icon: "RU", value: "Россия, удаленно" },
];
