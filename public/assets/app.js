import { INSURANCE_CONTENT as EMBEDDED_CONTENT } from "./content-data.js?v=20260629-embed";

const CONTENT_PATHS = {
  ua: "content/ua.md",
  en: "content/en.md",
  bg: "content/bg.md",
  ru: "content/ru.md",
};

const COPY = {
  ua: {
    htmlLang: "uk",
    subtitle: "Додаткове медичне страхування",
    eyebrow: "Ваше медичне покриття",
    title: "Додаткове медичне страхування",
    lead: "Усі пакети, ліміти та умови з наданої бази знань.",
    search: "Пошук",
    searchPlaceholder: "Пакет, ліміт, документ або контакт",
    clearSearch: "Очистити пошук",
    searchResults: "Знайдено розділів: {count}",
    searchNoResults: "Нічого не знайдено",
    copyPrompt: "Скопіювати промпт + Markdown",
    copyPromptDone: "Скопійовано",
    copyPromptError: "Не вдалося скопіювати",
    copyPromptFallback: "Текст підготовлено нижче",
    markdownContextLabel: "Markdown-контекст",
    nav: "Розділи",
    sectionLabel: "Розділ",
    audit: "Звірка",
    auditKicker: "Фінальна перевірка",
    auditSummary: "Перевірка ключових сум, термінів і контактів.",
    auditDetails: "Показати перевірені дані",
    footer: "Джерело: наданий Markdown-файл.",
    empty: "Немає відповідних розділів.",
    loading: "Завантаження...",
    visual: {
      coverageKicker: "Ключові ліміти",
      coverageTitle: "Покриття в одному погляді",
      processKicker: "Процес",
      processTitle: "Від послуги до відшкодування",
      quickKicker: "Контакти",
      quickTitle: "Швидкі дії",
      coverage: [
        {
          title: "Профілактика",
          value: "Щороку",
          detail: "+ до 150 € на огляди за вибором",
          form: "у мережі / організовано",
          icon: "shieldCheck",
          accent: "green",
        },
        {
          title: "Амбулаторне лікування",
          value: "2 600 €",
          detail: "мережа + відшкодування",
          form: "мережа + відшкодування",
          icon: "stethoscope",
          accent: "blue",
        },
        {
          title: "Стаціонарне лікування",
          value: "11 000 €",
          detail: "у межах і поза межами мережі",
          form: "у межах і поза межами мережі",
          icon: "hospital",
          accent: "indigo",
        },
        {
          title: "Фізіотерапія та реабілітація",
          value: "231 € + 231 €",
          detail: "фізіотерапія + реабілітація",
          form: "відшкодування",
          icon: "activity",
          accent: "teal",
        },
        {
          title: "Медикаменти та медзасоби",
          value: "205 €",
          detail: "відшкодування",
          form: "відшкодування",
          icon: "pill",
          accent: "gold",
        },
        {
          title: "Вагітність та пологи",
          value: "770 €",
          detail: "карантин 9 місяців",
          form: "відшкодування",
          icon: "baby",
          accent: "rose",
        },
        {
          title: "Стоматологія",
          value: "256 €",
          detail: "відшкодування",
          form: "відшкодування",
          icon: "tooth",
          accent: "mint",
        },
        {
          title: "Телемедицина",
          value: "Онлайн",
          detail: "консультації лікаря",
          form: "онлайн-консультації",
          icon: "video",
          accent: "sky",
        },
      ],
      coverageMeta: [
        { label: "Страховик", value: "UNIQA Bulgaria", icon: "shieldCheck" },
        { label: "Брокер", value: "Mussala Insurance Broker", icon: "briefcase" },
      ],
      process: [
        {
          title: "Отримайте послугу",
          detail: "Для більшості послуг збережіть документ про оплату для відшкодування.",
          icon: "receipt",
        },
        {
          title: "Зберіть документи",
          detail: "Амбулаторний лист / направлення та рахунок із фіскальним чеком.",
          icon: "file",
        },
        {
          title: "Подайте заявку",
          detail: "UNIQA portal, app.mussalains.com або health@mussalains.com.",
          icon: "send",
        },
        {
          title: "Отримайте виплату",
          detail: "До 15 робочих днів після правильно оформлених документів.",
          icon: "wallet",
        },
      ],
      quick: [
        {
          label: "health@mussalains.com",
          meta: "Подання документів",
          href: "mailto:health@mussalains.com",
          icon: "mail",
        },
        {
          label: "app.mussalains.com",
          meta: "Платформа Mussala",
          href: "https://app.mussalains.com",
          icon: "globe",
        },
        {
          label: "0886 68 02 82",
          meta: "Mussala broker",
          href: "tel:+359886680282",
          icon: "phone",
        },
      ],
    },
  },
  en: {
    htmlLang: "en",
    subtitle: "Additional medical insurance",
    eyebrow: "Your medical coverage",
    title: "Additional Medical Insurance",
    lead: "All packages, limits, and conditions from the supplied knowledge base.",
    search: "Search",
    searchPlaceholder: "Package, limit, document, or contact",
    clearSearch: "Clear search",
    searchResults: "Sections found: {count}",
    searchNoResults: "No results found",
    copyPrompt: "Copy prompt + Markdown",
    copyPromptDone: "Copied",
    copyPromptError: "Could not copy",
    copyPromptFallback: "Text is selected below",
    markdownContextLabel: "Markdown context",
    nav: "Sections",
    sectionLabel: "Section",
    audit: "Check",
    auditKicker: "Final check",
    auditSummary: "Key amounts, deadlines, and contacts found in this locale.",
    auditDetails: "Show checked facts",
    footer: "Source: the supplied Markdown file.",
    empty: "No matching sections.",
    loading: "Loading...",
    visual: {
      coverageKicker: "Key limits",
      coverageTitle: "Coverage at a glance",
      processKicker: "Process",
      processTitle: "From service to reimbursement",
      quickKicker: "Contacts",
      quickTitle: "Quick actions",
      coverage: [
        {
          title: "Prevention",
          value: "Every year",
          detail: "+ up to 150 € for selected check-ups",
          form: "network / organized",
          icon: "shieldCheck",
          accent: "green",
        },
        {
          title: "Outpatient treatment",
          value: "2 600 €",
          detail: "network + reimbursement",
          form: "network + reimbursement",
          icon: "stethoscope",
          accent: "blue",
        },
        {
          title: "Inpatient treatment",
          value: "11 000 €",
          detail: "within and outside the network",
          form: "within and outside the network",
          icon: "hospital",
          accent: "indigo",
        },
        {
          title: "Physiotherapy and rehabilitation",
          value: "231 € + 231 €",
          detail: "physiotherapy + rehabilitation",
          form: "reimbursement",
          icon: "activity",
          accent: "teal",
        },
        {
          title: "Medicines and medical devices",
          value: "205 €",
          detail: "reimbursement",
          form: "reimbursement",
          icon: "pill",
          accent: "gold",
        },
        {
          title: "Pregnancy and childbirth",
          value: "770 €",
          detail: "waiting period 9 months",
          form: "reimbursement",
          icon: "baby",
          accent: "rose",
        },
        {
          title: "Dentistry",
          value: "256 €",
          detail: "reimbursement",
          form: "reimbursement",
          icon: "tooth",
          accent: "mint",
        },
        {
          title: "Telemedicine",
          value: "Online",
          detail: "doctor consultations",
          form: "online consultations",
          icon: "video",
          accent: "sky",
        },
      ],
      coverageMeta: [
        { label: "Insurer", value: "UNIQA Bulgaria", icon: "shieldCheck" },
        { label: "Broker", value: "Mussala Insurance Broker", icon: "briefcase" },
      ],
      process: [
        {
          title: "Receive the service",
          detail: "For most services, keep the payment document for reimbursement.",
          icon: "receipt",
        },
        {
          title: "Collect documents",
          detail: "Outpatient sheet / referral and invoice with fiscal receipt.",
          icon: "file",
        },
        {
          title: "Submit a claim",
          detail: "UNIQA portal, app.mussalains.com, or health@mussalains.com.",
          icon: "send",
        },
        {
          title: "Receive reimbursement",
          detail: "Up to 15 business days after correctly completed documents.",
          icon: "wallet",
        },
      ],
      quick: [
        {
          label: "health@mussalains.com",
          meta: "Document submission",
          href: "mailto:health@mussalains.com",
          icon: "mail",
        },
        {
          label: "app.mussalains.com",
          meta: "Mussala platform",
          href: "https://app.mussalains.com",
          icon: "globe",
        },
        {
          label: "0886 68 02 82",
          meta: "Mussala broker",
          href: "tel:+359886680282",
          icon: "phone",
        },
      ],
    },
  },
  bg: {
    htmlLang: "bg",
    subtitle: "Допълнително медицинско застраховане",
    eyebrow: "Вашето медицинско покритие",
    title: "Допълнително медицинско застраховане",
    lead: "Всички пакети, лимити и условия от предоставената база знания.",
    search: "Търсене",
    searchPlaceholder: "Пакет, лимит, документ или контакт",
    clearSearch: "Изчистване на търсенето",
    searchResults: "Намерени раздели: {count}",
    searchNoResults: "Няма намерени резултати",
    copyPrompt: "Копирай промпт + Markdown",
    copyPromptDone: "Копирано",
    copyPromptError: "Неуспешно копиране",
    copyPromptFallback: "Текстът е избран по-долу",
    markdownContextLabel: "Markdown контекст",
    nav: "Раздели",
    sectionLabel: "Раздел",
    audit: "Проверка",
    auditKicker: "Финална проверка",
    auditSummary: "Ключови суми, срокове и контакти, намерени в тази езикова версия.",
    auditDetails: "Покажи проверените данни",
    footer: "Източник: предоставеният Markdown файл.",
    empty: "Няма съвпадащи раздели.",
    loading: "Зареждане...",
    visual: {
      coverageKicker: "Ключови лимити",
      coverageTitle: "Покритие с един поглед",
      processKicker: "Процес",
      processTitle: "От услугата до възстановяването",
      quickKicker: "Контакти",
      quickTitle: "Бързи действия",
      coverage: [
        {
          title: "Профилактика",
          value: "Всяка година",
          detail: "+ до 150 € за избрани прегледи",
          form: "в мрежата / организирано",
          icon: "shieldCheck",
          accent: "green",
        },
        {
          title: "Амбулаторно лечение",
          value: "2 600 €",
          detail: "мрежа + възстановяване",
          form: "мрежа + възстановяване",
          icon: "stethoscope",
          accent: "blue",
        },
        {
          title: "Стационарно лечение",
          value: "11 000 €",
          detail: "в рамките и извън мрежата",
          form: "в рамките на и извън мрежата",
          icon: "hospital",
          accent: "indigo",
        },
        {
          title: "Физиотерапия и рехабилитация",
          value: "231 € + 231 €",
          detail: "физиотерапия + рехабилитация",
          form: "възстановяване",
          icon: "activity",
          accent: "teal",
        },
        {
          title: "Медикаменти и медицински изделия",
          value: "205 €",
          detail: "възстановяване",
          form: "възстановяване",
          icon: "pill",
          accent: "gold",
        },
        {
          title: "Бременност и раждане",
          value: "770 €",
          detail: "карантин 9 месеца",
          form: "възстановяване",
          icon: "baby",
          accent: "rose",
        },
        {
          title: "Стоматология",
          value: "256 €",
          detail: "възстановяване",
          form: "възстановяване",
          icon: "tooth",
          accent: "mint",
        },
        {
          title: "Телемедицина",
          value: "Онлайн",
          detail: "консултации с лекар",
          form: "онлайн консултации",
          icon: "video",
          accent: "sky",
        },
      ],
      coverageMeta: [
        { label: "Застраховател", value: "UNIQA Bulgaria", icon: "shieldCheck" },
        { label: "Брокер", value: "Mussala Insurance Broker", icon: "briefcase" },
      ],
      process: [
        {
          title: "Получете услугата",
          detail: "За повечето услуги пазете платежния документ за възстановяване.",
          icon: "receipt",
        },
        {
          title: "Съберете документи",
          detail: "Амбулаторен лист / направление и фактура с фискален бон.",
          icon: "file",
        },
        {
          title: "Подайте заявка",
          detail: "UNIQA portal, app.mussalains.com или health@mussalains.com.",
          icon: "send",
        },
        {
          title: "Получете плащане",
          detail: "До 15 работни дни след правилно оформени документи.",
          icon: "wallet",
        },
      ],
      quick: [
        {
          label: "health@mussalains.com",
          meta: "Подаване на документи",
          href: "mailto:health@mussalains.com",
          icon: "mail",
        },
        {
          label: "app.mussalains.com",
          meta: "Платформа Mussala",
          href: "https://app.mussalains.com",
          icon: "globe",
        },
        {
          label: "0886 68 02 82",
          meta: "Mussala broker",
          href: "tel:+359886680282",
          icon: "phone",
        },
      ],
    },
  },
  ru: {
    htmlLang: "ru",
    subtitle: "Дополнительное медицинское страхование",
    eyebrow: "Ваше медицинское покрытие",
    title: "Дополнительное медицинское страхование",
    lead: "Все пакеты, лимиты и условия из предоставленной базы знаний.",
    search: "Поиск",
    searchPlaceholder: "Пакет, лимит, документ или контакт",
    clearSearch: "Очистить поиск",
    searchResults: "Найдено разделов: {count}",
    searchNoResults: "Ничего не найдено",
    copyPrompt: "Скопировать промпт + Markdown",
    copyPromptDone: "Скопировано",
    copyPromptError: "Не удалось скопировать",
    copyPromptFallback: "Текст выделен ниже",
    markdownContextLabel: "Markdown-контекст",
    nav: "Разделы",
    sectionLabel: "Раздел",
    audit: "Сверка",
    auditKicker: "Финальная проверка",
    auditSummary: "Ключевые суммы, сроки и контакты, найденные в этой языковой версии.",
    auditDetails: "Показать проверенные данные",
    footer: "Источник: предоставленный Markdown-файл.",
    empty: "Нет подходящих разделов.",
    loading: "Загрузка...",
    visual: {
      coverageKicker: "Ключевые лимиты",
      coverageTitle: "Покрытие одним взглядом",
      processKicker: "Процесс",
      processTitle: "От услуги к возмещению",
      quickKicker: "Контакты",
      quickTitle: "Быстрые действия",
      coverage: [
        {
          title: "Профилактика",
          value: "Ежегодно",
          detail: "+ до 150 € на выбранные осмотры",
          form: "в сети / организованно",
          icon: "shieldCheck",
          accent: "green",
        },
        {
          title: "Амбулаторное лечение",
          value: "2 600 €",
          detail: "сеть + возмещение",
          form: "сеть + возмещение",
          icon: "stethoscope",
          accent: "blue",
        },
        {
          title: "Стационарное лечение",
          value: "11 000 €",
          detail: "в сети и вне сети",
          form: "в пределах и вне сети",
          icon: "hospital",
          accent: "indigo",
        },
        {
          title: "Физиотерапия и реабилитация",
          value: "231 € + 231 €",
          detail: "физиотерапия + реабилитация",
          form: "возмещение",
          icon: "activity",
          accent: "teal",
        },
        {
          title: "Медикаменты и медизделия",
          value: "205 €",
          detail: "возмещение",
          form: "возмещение",
          icon: "pill",
          accent: "gold",
        },
        {
          title: "Беременность и роды",
          value: "770 €",
          detail: "карантин 9 месяцев",
          form: "возмещение",
          icon: "baby",
          accent: "rose",
        },
        {
          title: "Стоматология",
          value: "256 €",
          detail: "возмещение",
          form: "возмещение",
          icon: "tooth",
          accent: "mint",
        },
        {
          title: "Телемедицина",
          value: "Онлайн",
          detail: "консультации врача",
          form: "онлайн-консультации",
          icon: "video",
          accent: "sky",
        },
      ],
      coverageMeta: [
        { label: "Страховщик", value: "UNIQA Bulgaria", icon: "shieldCheck" },
        { label: "Брокер", value: "Mussala Insurance Broker", icon: "briefcase" },
      ],
      process: [
        {
          title: "Получите услугу",
          detail: "Для большинства услуг сохраните документ об оплате для возмещения.",
          icon: "receipt",
        },
        {
          title: "Соберите документы",
          detail: "Амбулаторный лист / направление и счет с фискальным чеком.",
          icon: "file",
        },
        {
          title: "Подайте заявку",
          detail: "UNIQA portal, app.mussalains.com или health@mussalains.com.",
          icon: "send",
        },
        {
          title: "Получите выплату",
          detail: "До 15 рабочих дней после правильно оформленных документов.",
          icon: "wallet",
        },
      ],
      quick: [
        {
          label: "health@mussalains.com",
          meta: "Подача документов",
          href: "mailto:health@mussalains.com",
          icon: "mail",
        },
        {
          label: "app.mussalains.com",
          meta: "Платформа Mussala",
          href: "https://app.mussalains.com",
          icon: "globe",
        },
        {
          label: "0886 68 02 82",
          meta: "Mussala broker",
          href: "tel:+359886680282",
          icon: "phone",
        },
      ],
    },
  },
};

const FACT_TOKENS = [
  "150 €",
  "2 600 €",
  "11 000 €",
  "231 € + 231 €",
  "205 €",
  "770 €",
  "256 €",
  "15",
  "500 €",
  "25,57 €",
  "512 €",
  "461 €",
  "2 500 €",
  "103 €",
  "0886 68 02 82",
  "ma.georgieva@mussalains.com",
  "health@mussalains.com",
  "app.mussalains.com",
  "0700 111 50",
  "+359 8850 111 50",
];

const ICONS = {
  shieldCheck: `
    <path d="M12 3l7 3v5c0 4.8-2.9 8.1-7 10-4.1-1.9-7-5.2-7-10V6l7-3z"></path>
    <path d="m9 12 2 2 4-5"></path>
  `,
  stethoscope: `
    <path d="M5 4v5a4 4 0 0 0 8 0V4"></path>
    <path d="M7 4H4"></path>
    <path d="M14 4h-3"></path>
    <path d="M9 13v2a4 4 0 0 0 8 0v-1"></path>
    <circle cx="18" cy="12" r="2"></circle>
  `,
  hospital: `
    <path d="M4 21V5a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v16"></path>
    <path d="M9 21v-6h6v6"></path>
    <path d="M9 8h6"></path>
    <path d="M12 5v6"></path>
    <path d="M4 21h16"></path>
  `,
  activity: `<path d="M22 12h-4l-3 7-6-14-3 7H2"></path>`,
  pill: `
    <path d="m10.5 20.5 10-10a4.2 4.2 0 0 0-6-6l-10 10a4.2 4.2 0 0 0 6 6z"></path>
    <path d="m8.5 10.5 5 5"></path>
  `,
  baby: `
    <path d="M9 12h.01"></path>
    <path d="M15 12h.01"></path>
    <path d="M10 16c1.2.8 2.8.8 4 0"></path>
    <path d="M19 11a7 7 0 1 1-13.6-2.3"></path>
    <path d="M8 5c.9-1.2 2.3-2 4-2s3.1.8 4 2"></path>
  `,
  tooth: `
    <path d="M7 3c1.7 0 2.8 1 5 1s3.3-1 5-1c2.4 0 4 2.1 4 4.8 0 3.5-2.2 5.1-3 8-.6 2.2-1.1 5.2-3 5.2-1.2 0-1.4-1.7-1.8-3-.3-1.1-.6-2-1.2-2s-.9.9-1.2 2c-.4 1.3-.6 3-1.8 3-1.9 0-2.4-3-3-5.2-.8-2.9-3-4.5-3-8C3 5.1 4.6 3 7 3z"></path>
  `,
  video: `
    <rect x="3" y="6" width="12" height="12" rx="2"></rect>
    <path d="m15 10 5-3v10l-5-3z"></path>
  `,
  receipt: `
    <path d="M6 3h12v18l-2-1-2 1-2-1-2 1-2-1-2 1V3z"></path>
    <path d="M9 8h6"></path>
    <path d="M9 12h6"></path>
    <path d="M9 16h4"></path>
  `,
  file: `
    <path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z"></path>
    <path d="M14 3v5h5"></path>
    <path d="M8 13h8"></path>
    <path d="M8 17h5"></path>
  `,
  send: `
    <path d="M22 2 11 13"></path>
    <path d="m22 2-7 20-4-9-9-4 20-7z"></path>
  `,
  wallet: `
    <path d="M19 7V5a2 2 0 0 0-2-2H5a3 3 0 0 0 0 6h15v10H5a3 3 0 0 1-3-3V6"></path>
    <path d="M16 13h.01"></path>
  `,
  mail: `
    <rect x="3" y="5" width="18" height="14" rx="2"></rect>
    <path d="m3 7 9 6 9-6"></path>
  `,
  globe: `
    <circle cx="12" cy="12" r="9"></circle>
    <path d="M3 12h18"></path>
    <path d="M12 3c2.3 2.5 3.4 5.5 3.4 9S14.3 18.5 12 21"></path>
    <path d="M12 3c-2.3 2.5-3.4 5.5-3.4 9S9.7 18.5 12 21"></path>
  `,
  phone: `
    <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.4 19.4 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.3 1.8.6 2.6a2 2 0 0 1-.4 2.1L8 9.7a16 16 0 0 0 6.3 6.3l1.3-1.3a2 2 0 0 1 2.1-.4c.8.3 1.7.5 2.6.6a2 2 0 0 1 1.7 2z"></path>
  `,
  image: `
    <rect x="3" y="3" width="18" height="18" rx="2"></rect>
    <circle cx="8.5" cy="8.5" r="1.5"></circle>
    <path d="m21 15-5-5L5 21"></path>
  `,
  copy: `
    <rect x="8" y="8" width="12" height="12" rx="2"></rect>
    <path d="M16 8V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h2"></path>
  `,
  briefcase: `
    <rect x="3" y="7" width="18" height="13" rx="2"></rect>
    <path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
    <path d="M3 13h18"></path>
    <path d="M10 13v2h4v-2"></path>
  `,
  users: `
    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
    <circle cx="9" cy="7" r="4"></circle>
    <path d="M22 21v-2a4 4 0 0 0-3-3.9"></path>
    <path d="M16 3.1a4 4 0 0 1 0 7.8"></path>
  `,
  clock: `
    <circle cx="12" cy="12" r="9"></circle>
    <path d="M12 7v5l3 2"></path>
  `,
  calendar: `
    <rect x="3" y="4" width="18" height="17" rx="2"></rect>
    <path d="M16 2v4"></path>
    <path d="M8 2v4"></path>
    <path d="M3 10h18"></path>
  `,
  alertCircle: `
    <circle cx="12" cy="12" r="9"></circle>
    <path d="M12 8v4"></path>
    <path d="M12 16h.01"></path>
  `,
  check: `<path d="m5 12 4 4L19 6"></path>`,
};

const state = {
  lang: "ua",
  markdown: "",
  sections: [],
};

const els = {
  html: document.documentElement,
  brandSubtitle: document.querySelector("#brandSubtitle"),
  eyebrow: document.querySelector("#eyebrow"),
  pageTitle: document.querySelector("#pageTitle"),
  pageLead: document.querySelector("#pageLead"),
  coverageKicker: document.querySelector("#coverageKicker"),
  coverageTitle: document.querySelector("#coverageTitle"),
  coverageCards: document.querySelector("#coverageCards"),
  coverageMeta: document.querySelector("#coverageMeta"),
  processKicker: document.querySelector("#processKicker"),
  processTitle: document.querySelector("#processTitle"),
  processSteps: document.querySelector("#processSteps"),
  quickKicker: document.querySelector("#quickKicker"),
  quickTitle: document.querySelector("#quickTitle"),
  quickLinks: document.querySelector("#quickLinks"),
  searchLabel: document.querySelector("#searchLabel"),
  searchInput: document.querySelector("#searchInput"),
  searchFeedback: document.querySelector("#searchFeedback"),
  clearSearchButton: document.querySelector("#clearSearchButton"),
  navTitle: document.querySelector("#navTitle"),
  auditKicker: document.querySelector("#auditKicker"),
  auditTitle: document.querySelector("#auditTitle"),
  auditSummary: document.querySelector("#auditSummary"),
  auditDetailsSummary: document.querySelector("#auditDetailsSummary"),
  auditList: document.querySelector("#auditList"),
  footerText: document.querySelector("#footerText"),
  loadingState: document.querySelector("#loadingState"),
  contentRoot: document.querySelector("#contentRoot"),
  emptyState: document.querySelector("#emptyState"),
  sectionNav: document.querySelector("#sectionNav"),
  languageButtons: document.querySelectorAll("[data-lang]"),
};

function escapeHtml(value) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

function inlineMarkdown(value) {
  const escaped = escapeHtml(value);
  return escaped
    .replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>")
    .replace(/\*(.+?)\*/g, "<em>$1</em>")
    .replace(/`(.+?)`/g, "<code>$1</code>")
    .replace(
      /\b(https?:\/\/[^\s<]+|app\.mussalains\.com|[\w.-]+@[\w.-]+\.[A-Za-z]{2,})\b/g,
      (match) => {
        const href = match.includes("@")
          ? `mailto:${match}`
          : match.startsWith("http")
            ? match
            : `https://${match}`;
        return `<a href="${href}">${match}</a>`;
      },
    );
}

function slugify(value) {
  return value
    .toLowerCase()
    .normalize("NFKD")
    .replace(/[^\p{Letter}\p{Number}]+/gu, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 80);
}

function closeList(stack, html) {
  while (stack.length) {
    html.push(`</${stack.pop()}>`);
  }
}

function parseTable(lines, startIndex) {
  const rows = [];
  let index = startIndex;
  while (index < lines.length && /^\s*\|/.test(lines[index])) {
    rows.push(lines[index]);
    index += 1;
  }
  if (rows.length < 2 || !/^\s*\|?\s*:?-{3,}:?\s*\|/.test(rows[1])) {
    return null;
  }

  const cells = (line) =>
    line
      .trim()
      .replace(/^\|/, "")
      .replace(/\|$/, "")
      .split("|")
      .map((cell) => inlineMarkdown(cell.trim()));

  const headers = cells(rows[0]);
  const body = rows.slice(2).map(cells);
  const html = [
    "<table>",
    "<thead><tr>",
    ...headers.map((cell) => `<th>${cell}</th>`),
    "</tr></thead>",
    "<tbody>",
    ...body.map((row) => `<tr>${row.map((cell) => `<td>${cell}</td>`).join("")}</tr>`),
    "</tbody>",
    "</table>",
  ].join("");

  return { html, nextIndex: index };
}

function markdownToHtml(markdown) {
  const lines = markdown.replace(/\r\n/g, "\n").split("\n");
  const html = [];
  const listStack = [];
  let paragraph = [];

  const flushParagraph = () => {
    if (!paragraph.length) return;
    closeList(listStack, html);
    html.push(`<p>${inlineMarkdown(paragraph.join(" ").trim())}</p>`);
    paragraph = [];
  };

  for (let index = 0; index < lines.length; index += 1) {
    const raw = lines[index];
    const line = raw.trimEnd();
    const trimmed = line.trim();

    if (!trimmed) {
      flushParagraph();
      closeList(listStack, html);
      continue;
    }

    const table = /^\s*\|/.test(line) ? parseTable(lines, index) : null;
    if (table) {
      flushParagraph();
      closeList(listStack, html);
      html.push(table.html);
      index = table.nextIndex - 1;
      continue;
    }

    if (/^---+$/.test(trimmed)) {
      flushParagraph();
      closeList(listStack, html);
      html.push("<hr />");
      continue;
    }

    const heading = /^(#{1,4})\s+(.+)$/.exec(trimmed);
    if (heading) {
      flushParagraph();
      closeList(listStack, html);
      const rawLevel = heading[1].length;
      const level = rawLevel === 1 ? 2 : Math.min(rawLevel, 3);
      const text = heading[2].replace(/\s+\{#.+\}$/, "");
      const id = slugify(text);
      html.push(`<h${level} id="${id}">${inlineMarkdown(text)}</h${level}>`);
      continue;
    }

    if (trimmed.startsWith(">")) {
      flushParagraph();
      closeList(listStack, html);
      const quoteLines = [];
      while (index < lines.length && lines[index].trim().startsWith(">")) {
        quoteLines.push(lines[index].trim().replace(/^>\s?/, ""));
        index += 1;
      }
      index -= 1;
      html.push(`<blockquote>${markdownToHtml(quoteLines.join("\n"))}</blockquote>`);
      continue;
    }

    const unordered = /^[-*]\s+(.+)$/.exec(trimmed);
    const ordered = /^\d+\.\s+(.+)$/.exec(trimmed);
    if (unordered || ordered) {
      flushParagraph();
      const tag = unordered ? "ul" : "ol";
      if (listStack[listStack.length - 1] !== tag) {
        closeList(listStack, html);
        listStack.push(tag);
        html.push(`<${tag}>`);
      }
      const itemLines = [(unordered || ordered)[1]];
      while (index + 1 < lines.length) {
        const nextRaw = lines[index + 1];
        const nextTrimmed = nextRaw.trim();
        if (
          !nextTrimmed ||
          /^(#{1,4})\s+/.test(nextTrimmed) ||
          /^\s*\|/.test(nextRaw) ||
          /^---+$/.test(nextTrimmed) ||
          /^[-*]\s+/.test(nextTrimmed) ||
          /^\d+\.\s+/.test(nextTrimmed)
        ) {
          break;
        }
        if (!/^\s{2,}\S/.test(nextRaw)) break;
        itemLines.push(nextTrimmed);
        index += 1;
      }
      html.push(`<li>${inlineMarkdown(itemLines.join(" "))}</li>`);
      continue;
    }

    paragraph.push(trimmed);
  }

  flushParagraph();
  closeList(listStack, html);
  return html.join("\n");
}

function splitIntoSections(markdown) {
  const chunks = [];
  const lines = markdown.split(/\r?\n/);
  let current = { title: "Overview", id: "overview", lines: [] };

  for (const line of lines) {
    const match = /^##\s+(.+)$/.exec(line);
    if (match) {
      if (current.lines.some((entry) => entry.trim())) chunks.push(current);
      const title = match[1].trim();
      current = { title, id: slugify(title), lines: [line] };
    } else {
      current.lines.push(line);
    }
  }
  if (current.lines.some((entry) => entry.trim())) chunks.push(current);
  return chunks.map((section, index) => ({
    ...section,
    id: `${section.id || "section"}-${index}`,
    html: markdownToHtml(section.lines.join("\n")),
    text: section.lines.join("\n").toLowerCase(),
  }));
}

function iconSvg(name) {
  return `<svg class="icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false">${ICONS[name] || ICONS.check}</svg>`;
}

function renderVisuals(visual) {
  els.coverageKicker.textContent = visual.coverageKicker;
  els.coverageTitle.textContent = visual.coverageTitle;
  els.processKicker.textContent = visual.processKicker;
  els.processTitle.textContent = visual.processTitle;
  els.quickKicker.textContent = visual.quickKicker;
  els.quickTitle.textContent = visual.quickTitle;

  els.coverageCards.innerHTML = visual.coverage
    .map(
      (item) => `
        <article class="coverage-card" data-accent="${escapeHtml(item.accent)}">
          <span class="icon-tile">${iconSvg(item.icon)}</span>
          <div>
            <h3>${escapeHtml(item.title)}</h3>
            <strong>${escapeHtml(item.value)}</strong>
            <p>${escapeHtml(item.detail)}</p>
            <span class="coverage-form">${escapeHtml(item.form)}</span>
          </div>
        </article>
      `,
    )
    .join("");

  els.coverageMeta.innerHTML = visual.coverageMeta
    .map(
      (item) => `
        <span class="coverage-meta-item">
          <span class="icon-tile">${iconSvg(item.icon)}</span>
          <span><small>${escapeHtml(item.label)}</small><strong>${escapeHtml(item.value)}</strong></span>
        </span>
      `,
    )
    .join("");

  els.processSteps.innerHTML = visual.process
    .map(
      (item, index) => `
        <article class="process-step">
          <span class="process-number">${index + 1}</span>
          <span class="icon-tile">${iconSvg(item.icon)}</span>
          <div>
            <h3>${escapeHtml(item.title)}</h3>
            <p>${escapeHtml(item.detail)}</p>
          </div>
        </article>
      `,
    )
    .join("");

  els.quickLinks.innerHTML = visual.quick
    .map((item) => {
      const external = item.href.startsWith("http");
      return `
        <a class="quick-link" href="${escapeHtml(item.href)}"${external ? ' target="_blank" rel="noreferrer"' : ""}>
          <span class="icon-tile">${iconSvg(item.icon)}</span>
          <span>
            <strong>${escapeHtml(item.label)}</strong>
            <small>${escapeHtml(item.meta)}</small>
          </span>
        </a>
      `;
    })
    .join("");
}

const NUMBERED_SECTION_META = {
  1: { icon: "shieldCheck", accent: "green" },
  2: { icon: "users", accent: "mint" },
  3: { icon: "stethoscope", accent: "blue" },
  4: { icon: "hospital", accent: "indigo" },
  5: { icon: "activity", accent: "teal" },
  6: { icon: "pill", accent: "gold" },
  7: { icon: "video", accent: "sky" },
  8: { icon: "baby", accent: "rose" },
  9: { icon: "tooth", accent: "mint" },
};

function isQuickReference(section) {
  return /швидкий довідник|quick reference|бърз справочник|краткий справочник/i.test(section.title);
}

function isLlmSection(section) {
  return /llm/i.test(section.title);
}

function isSourceReferenceSection(section) {
  return isQuickReference(section) || isLlmSection(section);
}

function getNumberedSection(section) {
  const match = /^(\d+)\.\s+/.exec(section.title);
  return match ? Number(match[1]) : null;
}

function getSectionMeta(section) {
  const number = getNumberedSection(section);
  if (number) {
    return {
      number,
      icon: NUMBERED_SECTION_META[number]?.icon || "check",
      accent: NUMBERED_SECTION_META[number]?.accent || "green",
      visualized: true,
      numbered: true,
    };
  }

  const title = section.title.toLowerCase();
  if (isQuickReference(section)) return { icon: "check", accent: "blue", visualized: true, source: true };
  if (/документ|document/i.test(title)) return { icon: "file", accent: "blue", visualized: true };
  if (/термін|timeframe|срок/i.test(title)) return { icon: "clock", accent: "teal", visualized: true };
  if (/подати|submit|подадете|подать|заяв/i.test(title)) {
    return { icon: "send", accent: "sky", visualized: true };
  }
  if (/контакт|contact/i.test(title)) return { icon: "mail", accent: "green", visualized: true };
  if (/дисклеймер|дисклеймър|disclaimer/i.test(title)) {
    return { icon: "alertCircle", accent: "rose", visualized: true };
  }
  if (/принцип|principle/i.test(title)) return { icon: "check", accent: "mint", visualized: true };
  if (isLlmSection(section)) return { icon: "file", accent: "indigo", visualized: true };

  return { icon: "check", accent: "green", visualized: false };
}

function stripTopHeading(html) {
  return html.replace(/^\s*<h2\b[^>]*>[\s\S]*?<\/h2>\s*/, "");
}

function renderSectionVisualHeader(section, meta) {
  const copy = COPY[state.lang];
  const index = meta.number ? `<span class="section-index">${String(meta.number).padStart(2, "0")}</span>` : "";

  return `
    <div class="section-visual-head">
      ${index}
      <span class="icon-tile">${iconSvg(meta.icon)}</span>
      <div class="section-title-block">
        <p>${escapeHtml(copy.sectionLabel)}</p>
        <h2>${inlineMarkdown(section.title)}</h2>
      </div>
    </div>
  `;
}

function renderSections() {
  const llmSections = state.sections.filter(isLlmSection);
  const regularSections = state.sections.filter((section) => !isSourceReferenceSection(section));
  const sourceSections = state.sections.filter((section) => isSourceReferenceSection(section) && !isLlmSection(section));
  const visibleSections = [...llmSections, ...regularSections, ...sourceSections];

  els.contentRoot.innerHTML = visibleSections
    .map((section) => {
      const meta = getSectionMeta(section);
      const sourceReference = isSourceReferenceSection(section);
      const sectionIndex = state.sections.indexOf(section);
      const classes = [
        "content-section",
        meta.visualized ? "is-visualized" : "",
        meta.numbered ? "is-numbered" : "",
        sourceReference ? "source-section" : "",
      ]
        .filter(Boolean)
        .join(" ");
      const header = meta.visualized ? renderSectionVisualHeader(section, meta) : "";
      const bodyHtml = meta.visualized ? stripTopHeading(section.html) : section.html;
      const attrs = `id="${section.id}" data-section-index="${sectionIndex}" data-accent="${escapeHtml(meta.accent)}" data-source-section="${String(sourceReference)}" data-text="${escapeHtml(section.text)}"`;
      const copyPromptAction = isLlmSection(section)
        ? `
          <div class="source-actions">
            <button class="button copy-prompt-button" type="button" data-copy-prompt>
              <span class="button-icon">${iconSvg("copy")}</span>
              <span>${escapeHtml(COPY[state.lang].copyPrompt)}</span>
            </button>
            <textarea class="copy-prompt-fallback" data-copy-fallback readonly hidden></textarea>
          </div>
        `
        : "";

      if (sourceReference) {
        return `
          <details class="${classes}" ${attrs}>
            <summary>${header}</summary>
            <div class="section-body">${copyPromptAction}${bodyHtml}</div>
          </details>
        `;
      }

      return `
        <section class="${classes}" ${attrs}>
          ${header}
          <div class="section-body">${bodyHtml}</div>
        </section>
      `;
    })
    .join("");

  els.sectionNav.innerHTML = [...llmSections, ...regularSections]
    .filter((section) => /^##\s+/.test(section.lines.find((line) => line.trim()) || ""))
    .map((section) => {
      const meta = getSectionMeta(section);
      return `<a href="#${section.id}" data-nav-target="${section.id}"><span class="nav-icon">${iconSvg(meta.icon)}</span><span>${inlineMarkdown(section.title)}</span></a>`;
    })
    .join("");
}

function updateAudit() {
  const normalized = state.markdown;
  const matches = FACT_TOKENS.map((token) => ({
    token,
    found: normalized.includes(token),
  }));
  const foundCount = matches.filter((item) => item.found).length;
  els.auditSummary.textContent = `${COPY[state.lang].auditSummary} ${foundCount}/${FACT_TOKENS.length}.`;
  els.auditList.innerHTML = matches
    .map(
      ({ token, found }) =>
        `<li><strong>${escapeHtml(token)}</strong><span class="${found ? "ok" : "missing"}">${found ? "OK" : "MISSING"}</span></li>`,
    )
    .join("");
}

function escapeRegExp(value) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function clearSearchHighlights(root) {
  root.querySelectorAll("mark.search-hit").forEach((mark) => {
    mark.replaceWith(document.createTextNode(mark.textContent));
  });
  root.normalize();
}

function highlightSearchHits(root, query) {
  if (!query) return;

  const regex = new RegExp(escapeRegExp(query), "gi");
  const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, {
    acceptNode(node) {
      const parent = node.parentElement;
      if (!parent || !node.nodeValue.trim()) return NodeFilter.FILTER_REJECT;
      if (parent.closest("script, style, svg, mark, button")) return NodeFilter.FILTER_REJECT;
      regex.lastIndex = 0;
      return regex.test(node.nodeValue) ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_REJECT;
    },
  });
  const nodes = [];
  while (walker.nextNode()) nodes.push(walker.currentNode);

  nodes.forEach((node) => {
    const fragment = document.createDocumentFragment();
    const text = node.nodeValue;
    let lastIndex = 0;
    regex.lastIndex = 0;

    for (const match of text.matchAll(regex)) {
      if (match.index > lastIndex) {
        fragment.append(document.createTextNode(text.slice(lastIndex, match.index)));
      }
      const mark = document.createElement("mark");
      mark.className = "search-hit";
      mark.textContent = match[0];
      fragment.append(mark);
      lastIndex = match.index + match[0].length;
    }

    if (lastIndex < text.length) {
      fragment.append(document.createTextNode(text.slice(lastIndex)));
    }
    node.replaceWith(fragment);
  });
}

function updateActiveNav() {
  const links = [...els.sectionNav.querySelectorAll("a")];
  if (!links.length) return;

  let activeId = "";
  for (const link of links) {
    const section = document.getElementById(link.dataset.navTarget);
    if (!section || section.classList.contains("hidden")) continue;
    if (section.getBoundingClientRect().top <= 132) activeId = section.id;
  }
  if (!activeId) {
    activeId = links.find((link) => !link.classList.contains("hidden"))?.dataset.navTarget || "";
  }

  links.forEach((link) => {
    link.classList.toggle("active", link.dataset.navTarget === activeId);
  });
}

function buildLlmPromptBundle(section) {
  const prompt = section.lines
    .filter((line, index) => index !== 0 || !/^##\s+/.test(line.trim()))
    .join("\n")
    .trim();

  return [
    prompt,
    "---",
    `# ${COPY[state.lang].markdownContextLabel}`,
    state.markdown.trim(),
  ].join("\n\n");
}

async function copyText(value) {
  if (navigator.clipboard?.writeText && window.isSecureContext) {
    await navigator.clipboard.writeText(value);
    return;
  }

  const textarea = document.createElement("textarea");
  textarea.value = value;
  textarea.setAttribute("readonly", "");
  textarea.style.position = "fixed";
  textarea.style.top = "0";
  textarea.style.left = "0";
  textarea.style.width = "1px";
  textarea.style.height = "1px";
  textarea.style.opacity = "0";
  textarea.style.pointerEvents = "none";
  document.body.append(textarea);
  textarea.focus();
  textarea.select();
  textarea.setSelectionRange(0, textarea.value.length);

  try {
    const copied = document.execCommand("copy");
    if (!copied) throw new Error("Copy command failed");
  } finally {
    textarea.remove();
  }
}

function applySearch() {
  const query = els.searchInput.value.trim().toLowerCase();
  const sections = [...document.querySelectorAll(".content-section")];
  let visibleCount = 0;

  sections.forEach((section) => {
    clearSearchHighlights(section);
    const visible = !query || section.dataset.text.includes(query);
    section.classList.toggle("hidden", !visible);
    if (visible) visibleCount += 1;
    if (section.matches("details.source-section") && query) section.open = visible;
    if (visible && query) highlightSearchHits(section, query);
  });

  [...els.sectionNav.querySelectorAll("a")].forEach((link) => {
    const section = document.getElementById(link.dataset.navTarget);
    const visible = !query || (section && !section.classList.contains("hidden"));
    link.classList.toggle("hidden", !visible);
  });

  els.emptyState.hidden = visibleCount !== 0;
  els.clearSearchButton.hidden = !query;
  els.searchFeedback.textContent = query
    ? visibleCount
      ? COPY[state.lang].searchResults.replace("{count}", visibleCount)
      : COPY[state.lang].searchNoResults
    : "";
  updateActiveNav();
}

async function loadLanguage(lang) {
  state.lang = CONTENT_PATHS[lang] ? lang : "ua";
  const copy = COPY[state.lang];
  els.html.lang = copy.htmlLang;
  els.brandSubtitle.textContent = copy.subtitle;
  els.eyebrow.textContent = copy.eyebrow;
  els.pageTitle.textContent = copy.title;
  els.pageLead.textContent = copy.lead;
  els.searchLabel.textContent = copy.search;
  els.searchInput.placeholder = copy.searchPlaceholder;
  els.clearSearchButton.setAttribute("aria-label", copy.clearSearch);
  els.clearSearchButton.setAttribute("title", copy.clearSearch);
  els.navTitle.textContent = copy.nav;
  els.auditKicker.textContent = copy.auditKicker;
  els.auditTitle.textContent = copy.audit;
  els.footerText.textContent = copy.footer;
  els.emptyState.textContent = copy.empty;
  els.loadingState.textContent = copy.loading;
  els.auditDetailsSummary.textContent = copy.auditDetails;
  renderVisuals(copy.visual);

  els.languageButtons.forEach((button) => {
    button.setAttribute("aria-pressed", String(button.dataset.lang === state.lang));
  });

  els.contentRoot.hidden = true;
  els.loadingState.hidden = false;
  els.emptyState.hidden = true;
  els.searchInput.value = "";

  if (EMBEDDED_CONTENT[state.lang]) {
    state.markdown = EMBEDDED_CONTENT[state.lang];
  } else {
    const response = await fetch(CONTENT_PATHS[state.lang], { cache: "no-store" });
    if (!response.ok) throw new Error(`Unable to load ${CONTENT_PATHS[state.lang]}`);
    state.markdown = await response.text();
  }
  state.sections = splitIntoSections(state.markdown);
  renderSections();
  updateAudit();
  applySearch();
  els.loadingState.hidden = true;
  els.contentRoot.hidden = false;
  localStorage.setItem("mussala-insurance-lang", state.lang);
}

function updateLanguageUrl(lang) {
  const url = new URL(window.location.href);
  url.searchParams.set("lang", lang);
  window.history.replaceState({}, "", url);
}

els.languageButtons.forEach((button) => {
  button.addEventListener("click", () => {
    updateLanguageUrl(button.dataset.lang);
    loadLanguage(button.dataset.lang).catch((error) => {
      els.loadingState.textContent = error.message;
    });
  });
});

els.searchInput.addEventListener("input", applySearch);
els.clearSearchButton.addEventListener("click", () => {
  els.searchInput.value = "";
  applySearch();
  els.searchInput.focus();
});
els.contentRoot.addEventListener("click", async (event) => {
  const button = event.target.closest("[data-copy-prompt]");
  if (!button) return;

  const sectionEl = button.closest(".content-section");
  const section = state.sections[Number(sectionEl?.dataset.sectionIndex)];
  if (!section) return;

  const label = button.querySelector("span:last-child");
  const fallback = sectionEl.querySelector("[data-copy-fallback]");
  const originalLabel = COPY[state.lang].copyPrompt;
  const promptBundle = buildLlmPromptBundle(section);
  button.disabled = true;

  try {
    await copyText(promptBundle);
    if (fallback) fallback.hidden = true;
    if (label) label.textContent = COPY[state.lang].copyPromptDone;
  } catch {
    if (fallback) {
      fallback.value = promptBundle;
      fallback.hidden = false;
      fallback.focus();
      fallback.select();
      fallback.setSelectionRange(0, fallback.value.length);
      if (label) label.textContent = COPY[state.lang].copyPromptFallback;
    } else if (label) {
      label.textContent = COPY[state.lang].copyPromptError;
    }
  } finally {
    window.setTimeout(() => {
      button.disabled = false;
      if (label) label.textContent = originalLabel;
    }, 1800);
  }
});
window.addEventListener("scroll", updateActiveNav, { passive: true });
window.addEventListener("resize", updateActiveNav);

const preferred =
  new URLSearchParams(window.location.search).get("lang") ||
  localStorage.getItem("mussala-insurance-lang") ||
  (navigator.language || "").slice(0, 2).replace("uk", "ua");

loadLanguage(CONTENT_PATHS[preferred] ? preferred : "ua").catch((error) => {
  els.loadingState.textContent = error.message;
});
