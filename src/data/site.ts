export type NavigationItem = {
  label: string;
  href: string;
};

export type LanguageOption = {
  code: "en" | "zh-Hant" | "zh-Hans";
  label: "EN" | "繁" | "简";
};

export type CaseCategory =
  | "Airports & Facilities"
  | "Office"
  | "Retail"
  | "Food & Beverage"
  | "Exhibition"
  | "Residential"
  | "E&M";

export type CaseRecord = {
  id: `case-${string}`;
  slug: string;
  name: string;
  shortName?: string;
  clientId?: `client-${string}`;
  category: CaseCategory;
  serviceIds?: readonly ServiceRecord["id"][];
  location: string;
  year: number;
  scope: string;
  summary: string;
  image: {
    src: string;
    alt: string;
  };
  media?: {
    card?: { src: string; alt: string };
    hero?: { src: string; alt: string };
    gallery?: readonly { src: string; alt: string }[];
  };
  featured: boolean;
  displayOrder?: number;
  contentStatus?: "demo" | "confirmed";
};

export type ServiceRecord = {
  id: "fit-out-renovation" | "em-engineering" | "maintenance";
  number: "01" | "02" | "03";
  name: string;
  description: string;
  capabilities: readonly string[];
  highlightedCaseId: CaseRecord["id"];
  relatedCaseIds: readonly CaseRecord["id"][];
};

export type ClientRecord = {
  id: `client-${string}`;
  name: string;
  displayNames?: {
    primary: string;
    secondary?: string;
  };
  sector?: string;
  logo?: {
    src: string;
    alt: string;
  };
  status?: "demo" | "confirmed";
  featured?: boolean;
  displayOrder?: number;
};

export type ClientGroup = {
  id:
    | "aviation-facilities"
    | "finance-corporate"
    | "hospitality-retail"
    | "technology";
  name: string;
  clientIds: readonly ClientRecord["id"][];
};

export type DeliveryStep = {
  id:
    | "understand-plan"
    | "design-coordinate"
    | "build-install"
    | "test-hand-over";
  number: "01" | "02" | "03" | "04";
  title: string;
  activities: readonly string[];
  image?: {
    src: string;
    alt: string;
  };
};

export type RepeatClientRelationship = {
  id: `relationship-${string}`;
  clientId: ClientRecord["id"];
  clientName: string;
  period: string;
};

export const siteIdentity = {
  companyName: "Joint Win Construction & Engineering Company Limited",
  companyNameChinese: "駿旺建築工程有限公司",
  shortName: "JWC",
  regions: ["Macau", "Hong Kong", "Zhuhai"],
  navigation: [
    { label: "Main", href: withBasePath("/") },
    { label: "Cases", href: withBasePath("/cases") },
    { label: "Contact", href: withBasePath("/contact") },
  ] satisfies readonly NavigationItem[],
  languages: [
    { code: "en", label: "EN" },
    { code: "zh-Hant", label: "繁" },
    { code: "zh-Hans", label: "简" },
  ] satisfies readonly LanguageOption[],
} as const;

export const hero = {
  eyebrow: "Built on experience. Run on commitment.",
  headlineLines: ["Build on trust.", "Build around", "your needs."],
  supportingCopy:
    "Since 2006, JWC has delivered fit-out, renovation, E&M engineering and maintenance works for demanding commercial and operational environments across Macau, Hong Kong and Zhuhai.",
  primaryAction: { label: "Explore our cases", href: withBasePath("/cases") },
  image: {
    src: withBasePath("/assets/site/jwc-reception.png"),
    alt: "Warmly lit JWC commercial reception with curved timber and stone finishes",
  },
} as const;

export const companyIntroduction = {
  eyebrow: "Who We Are",
  headline: "Experience that delivers. People who stay accountable.",
  vision: {
    title: "Our Vision",
    copy: "To become an industry leader by consistently delivering superior service through experience, knowledge and commitment.",
  },
  mission: {
    title: "Our Mission",
    copy: "To ensure every JWC team works professionally and delivers the highest standard of service to meet each client's needs.",
  },
  statistics: [
    { id: "founded", value: 2006, suffix: "", label: "Since" },
    { id: "completed-cases", value: 100, suffix: "+", label: "Completed cases" },
    { id: "direct-clients", value: 50, suffix: "+", label: "Direct clients" },
    { id: "team", value: 31, suffix: "", label: "Person team" },
  ],
  commitment: "Built on experience. Run on commitment.",
  locationLine: "Macau · Hong Kong · Zhuhai",
  image: {
    src: withBasePath("/assets/cases/china-taiping-insurance-macau-2024/hero.png"),
    alt: "Completed China Taiping office reception with warm stone and glass detailing",
  },
} as const;

export const cases: readonly CaseRecord[] = [
  {
    id: "case-china-taiping-insurance-macau-2024",
    slug: "china-taiping-insurance-macau-2024",
    name: "China Taiping Insurance",
    category: "Office",
    location: "Macau",
    year: 2024,
    scope: "Design + renovation",
    summary:
      "A calm, precise workplace reception shaped around warm stone, glass meeting rooms and durable detailing.",
    image: {
      src: withBasePath("/assets/cases/china-taiping-insurance-macau-2024/hero.png"),
      alt: "China Taiping Insurance reception with warm stone walls and glass meeting rooms",
    },
    featured: true,
  },
  {
    id: "case-koi-kei-bakery-venetian-macau-2025",
    slug: "koi-kei-bakery-venetian-macau-2025",
    name: "Koi Kei Bakery, The Venetian",
    category: "Retail",
    location: "Macau",
    year: 2025,
    scope: "Fit-out + E&M coordination",
    summary:
      "A richly detailed retail environment pairing traditional lacquer tones with precise modern display systems.",
    image: {
      src: withBasePath("/assets/cases/koi-kei-bakery-venetian-macau-2025/hero.png"),
      alt: "Koi Kei Bakery retail interior with crimson lacquer and illuminated displays",
    },
    featured: true,
  },
  {
    id: "case-plaza-premium-lounge-mia-2024",
    slug: "plaza-premium-lounge-mia-2024",
    name: "Plaza Premium Lounge, MIA",
    category: "Airports & Facilities",
    location: "Macau",
    year: 2024,
    scope: "Fit-out + MEP installation",
    summary:
      "A welcoming airport lounge balancing operational durability with generous daylight and warm hospitality.",
    image: {
      src: withBasePath("/assets/cases/plaza-premium-lounge-mia-2024/hero.png"),
      alt: "Plaza Premium Lounge interior overlooking the Macau airport runway",
    },
    featured: true,
  },
  {
    id: "case-mia-air-handling-unit-ac11-2024",
    slug: "mia-air-handling-unit-ac11-2024",
    name: "MIA Air Handling Unit AC#11",
    category: "E&M",
    location: "Macau",
    year: 2024,
    scope: "E&M engineering",
    summary:
      "A carefully coordinated plant-room upgrade delivered around demanding airport operations and access controls.",
    image: {
      src: withBasePath("/assets/cases/mia-air-handling-unit-ac11-2024/hero.png"),
      alt: "MIA mechanical plant room with coordinated air-handling equipment and pipework",
    },
    featured: true,
  },
  {
    id: "case-cotai-exhibition-hall-macau-2023",
    slug: "cotai-exhibition-hall-macau-2023",
    name: "Cotai Exhibition Hall",
    category: "Exhibition",
    location: "Macau",
    year: 2023,
    scope: "Planning + venue fit-out",
    summary:
      "A fast-track exhibition programme coordinated from survey through venue handover.",
    image: {
      src: withBasePath("/assets/cases/cotai-exhibition-hall-macau-2023/hero.png"),
      alt: "Project team coordinating drawings for the Cotai Exhibition Hall",
    },
    featured: false,
  },
  {
    id: "case-private-residence-taipa-2023",
    slug: "private-residence-taipa-2023",
    name: "Private Residence, Taipa",
    category: "Residential",
    location: "Macau",
    year: 2023,
    scope: "Interior renovation",
    summary:
      "A refined residential interior delivered with close control of joinery, lighting and surface quality.",
    image: {
      src: withBasePath("/assets/cases/private-residence-taipa-2023/hero.png"),
      alt: "Warm contemporary Taipa residence with custom joinery and layered lighting",
    },
    featured: false,
  },
  {
    id: "case-harbour-food-hall-macau-2024",
    slug: "harbour-food-hall-macau-2024",
    name: "Harbour Food Hall",
    category: "Food & Beverage",
    location: "Macau",
    year: 2024,
    scope: "Hospitality fit-out",
    summary:
      "A hospitality fit-out joining high-capacity services with detailed guest-facing finishes.",
    image: {
      src: withBasePath("/assets/cases/harbour-food-hall-macau-2024/hero.png"),
      alt: "Harbour Food Hall interior with warm counters and high-capacity service areas",
    },
    featured: false,
  },
  {
    id: "case-nia-maintenance-programme-macau-2025",
    slug: "nia-maintenance-programme-macau-2025",
    name: "NIA Facilities Maintenance Programme",
    category: "Airports & Facilities",
    location: "Macau",
    year: 2025,
    scope: "Planned maintenance",
    summary:
      "A planned maintenance programme supporting critical plant uptime and clear service records.",
    image: {
      src: withBasePath("/assets/cases/nia-maintenance-programme-macau-2025/hero.png"),
      alt: "Maintained NIA facility plant equipment in a clean technical service area",
    },
    featured: false,
  },
];

export const caseCategories = [
  "All",
  "Airports & Facilities",
  "Office",
  "Retail",
  "Food & Beverage",
  "Exhibition",
  "Residential",
  "E&M",
] as const;

export const casesSection = {
  eyebrow: "Case Highlights",
  headline: "Highlighted Cases Across Sectors.",
  supportingCopy: "Explore the full Cases page to search and filter all records.",
  action: { label: "View All Completed Cases", href: withBasePath("/cases") },
} as const;

export const whatWeDo = {
  eyebrow: "What We Do",
  headline: "Integrated Services. Specialist Capabilities.",
} as const;

export const services: readonly ServiceRecord[] = [
  {
    id: "fit-out-renovation",
    number: "01",
    name: "Fit-Out & Renovation",
    description: "Integrated interiors delivered from first survey to final handover.",
    capabilities: [
      "Interior design",
      "Project management",
      "Fit-out and renovation",
      "Reinstatement",
      "Custom fixtures and furniture",
      "Government licensing and documentation",
    ],
    highlightedCaseId: "case-koi-kei-bakery-venetian-macau-2025",
    relatedCaseIds: [
      "case-koi-kei-bakery-venetian-macau-2025",
      "case-china-taiping-insurance-macau-2024",
      "case-plaza-premium-lounge-mia-2024",
    ],
  },
  {
    id: "em-engineering",
    number: "02",
    name: "E&M Engineering",
    description: "Coordinated building services engineered for performance and maintainability.",
    capabilities: [
      "MVAC",
      "Fire services",
      "Plumbing and drainage",
      "Electrical and ELV",
      "System design",
      "Installation, testing and commissioning",
    ],
    highlightedCaseId: "case-mia-air-handling-unit-ac11-2024",
    relatedCaseIds: [
      "case-mia-air-handling-unit-ac11-2024",
      "case-plaza-premium-lounge-mia-2024",
    ],
  },
  {
    id: "maintenance",
    number: "03",
    name: "Maintenance",
    description: "Planned and term maintenance that protects business-critical facilities.",
    capabilities: [
      "MVAC and fire services",
      "Plumbing and drainage",
      "Electrical systems",
      "Facility equipment",
      "Preventive inspections",
      "Responsive maintenance",
    ],
    highlightedCaseId: "case-nia-maintenance-programme-macau-2025",
    relatedCaseIds: [
      "case-nia-maintenance-programme-macau-2025",
      "case-mia-air-handling-unit-ac11-2024",
      "case-koi-kei-bakery-venetian-macau-2025",
    ],
  },
];

export const clients: readonly ClientRecord[] = [
  { id: "client-macau-international-airport", name: "Macau International Airport" },
  { id: "client-aia", name: "AIA" },
  { id: "client-china-taiping", name: "China Taiping" },
  { id: "client-manulife", name: "Manulife" },
  { id: "client-china-construction-bank", name: "China Construction Bank" },
  { id: "client-bank-of-china", name: "Bank of China" },
  { id: "client-bank-of-communications", name: "Bank of Communications" },
  { id: "client-sands-macao", name: "Sands Macao" },
  { id: "client-galaxy-macau", name: "Galaxy Macau" },
  { id: "client-louis-vuitton", name: "Louis Vuitton" },
  { id: "client-gucci", name: "Gucci" },
  { id: "client-chanel", name: "Chanel" },
  { id: "client-cartier", name: "Cartier" },
  { id: "client-omega", name: "Omega" },
  { id: "client-bally", name: "Bally" },
  { id: "client-huawei", name: "Huawei" },
  { id: "client-alibaba", name: "Alibaba" },
  { id: "client-macau-pass", name: "Macau Pass" },
  { id: "client-canon", name: "Canon" },
  { id: "client-hk-jebn", name: "HK JEBN" },
  { id: "client-maxims-caterers", name: "Maxim's Caterers" },
];

export const clientGroups: readonly ClientGroup[] = [
  {
    id: "aviation-facilities",
    name: "Aviation & Facilities",
    clientIds: ["client-macau-international-airport"],
  },
  {
    id: "finance-corporate",
    name: "Finance & Corporate",
    clientIds: [
      "client-aia",
      "client-china-taiping",
      "client-manulife",
      "client-china-construction-bank",
      "client-bank-of-china",
      "client-bank-of-communications",
    ],
  },
  {
    id: "hospitality-retail",
    name: "Hospitality & Retail",
    clientIds: [
      "client-sands-macao",
      "client-galaxy-macau",
      "client-louis-vuitton",
      "client-gucci",
      "client-chanel",
      "client-cartier",
      "client-omega",
      "client-bally",
    ],
  },
  {
    id: "technology",
    name: "Technology",
    clientIds: ["client-huawei", "client-alibaba", "client-macau-pass", "client-canon"],
  },
];

export const selectedClients = {
  eyebrow: "Selected Clients",
  headline: "Trusted by Leading Organisations.",
  supportingCopy:
    "A selection of organisations and brands represented in JWC’s client records.",
  directClientCount: "50+",
  directClientLabel: "Direct Clients",
  returnClientCopy: "Clients return to JWC for new sites, upgrades and ongoing requirements.",
  casesAction: { label: "View Our Cases", href: withBasePath("/cases") },
  contactAction: { label: "Contact Us", href: withBasePath("/contact") },
} as const;

export const deliverySteps: readonly DeliveryStep[] = [
  {
    id: "understand-plan",
    number: "01",
    title: "Understand & Plan",
    activities: ["Brief", "Site survey", "Scope definition"],
    image: {
      src: withBasePath("/assets/process/understand-plan.png"),
      alt: "Engineers reviewing technical drawings during project planning",
    },
  },
  {
    id: "design-coordinate",
    number: "02",
    title: "Design & Coordinate",
    activities: [
      "Interior and E&M design",
      "Project management",
      "Licensing and documentation",
    ],
  },
  {
    id: "build-install",
    number: "03",
    title: "Build & Install",
    activities: ["Fit-out", "E&M systems", "Fixtures and furniture"],
    image: {
      src: withBasePath("/assets/process/build-install.png"),
      alt: "Technical installation work progressing on an active construction site",
    },
  },
  {
    id: "test-hand-over",
    number: "04",
    title: "Test & Hand Over",
    activities: ["Testing", "Commissioning", "Quality close-out"],
  },
];

export const delivery = {
  eyebrow: "How We Deliver",
  headline: "From brief to handover.",
  supportingCopy:
    "JWC brings planning, coordination, construction and technical delivery together around the agreed scope.",
  assuranceLabels: ["Safety Control", "Quality Control", "Programme Coordination"],
} as const;

export const repeatClientRelationships: readonly RepeatClientRelationship[] = [
  {
    id: "relationship-macau-international-airport",
    clientId: "client-macau-international-airport",
    clientName: "Macau International Airport",
    period: "2009-2025",
  },
  {
    id: "relationship-aia",
    clientId: "client-aia",
    clientName: "AIA",
    period: "2010-2025",
  },
  {
    id: "relationship-huawei",
    clientId: "client-huawei",
    clientName: "Huawei",
    period: "2018-2028",
  },
  {
    id: "relationship-hk-jebn",
    clientId: "client-hk-jebn",
    clientName: "HK JEBN",
    period: "2016-2025",
  },
  {
    id: "relationship-macau-pass",
    clientId: "client-macau-pass",
    clientName: "Macau Pass",
    period: "2022-2024",
  },
  {
    id: "relationship-maxims-caterers",
    clientId: "client-maxims-caterers",
    clientName: "Maxim's Caterers",
    period: "2018-2025",
  },
];

export const repeatClients = {
  eyebrow: "Project and maintenance records spanning...",
  headline: "A completed case can be the start of the next one.",
  supportingCopy:
    "Direct communication. Active oversight. Exceptional execution. We earn the trust of clients who return to us time and again.",
} as const;

export const contact = {
  eyebrow: "Contact Us",
  headline: "We're here when you need us.",
  introduction:
    "We are always on the end of the phone for our clients. Give us a call on +853 2882 2992 or get in touch by email.",
  company: {
    phone: "+853 2882 2992",
    email: "info@jointwin-group.com",
    location: "Macau",
    addressLines: [
      "Unit C, 7/F, Edf. Industrial Chun Foc,",
      "205-207 Avenida de Venceslau de Morais, Macau.",
    ],
  },
  generalManager: {
    title: "General Manager",
    fields: [
      { label: "Name", value: "TO BE CONFIRMED" },
      { label: "Direct", value: "TO BE CONFIRMED" },
      { label: "Email", value: "TO BE CONFIRMED" },
    ],
  },
  image: {
    src: withBasePath("/assets/site/jwc-reception.png"),
    alt: "JWC commercial reception with illuminated signage and curved timber detailing",
  },
} as const;

export const casesById = new Map(cases.map((caseRecord) => [caseRecord.id, caseRecord]));

export const clientsById = new Map(clients.map((client) => [client.id, client]));
import { withBasePath } from "../utils/withBasePath";
