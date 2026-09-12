import zhHant from "../locales/zh-Hant.json";
import zhHans from "../locales/zh-Hans.json";
import headlineLayout from "../locales/headline-layout.json";
import {
  caseCategories,
  cases,
  clientGroups,
  clients,
  companyIntroduction,
  contact,
  delivery,
  deliverySteps,
  hero,
  repeatClientRelationships,
  repeatClients,
  selectedClients,
  services,
  whatWeDo,
  casesSection,
} from "../data/site";
import { clientFeedback } from "../data/clientFeedback";
import { withBasePath } from "../utils/withBasePath";

export const locales = ["en", "zh-Hant", "zh-Hans"] as const;
export type Locale = (typeof locales)[number];
export type ChineseLocale = Exclude<Locale, "en">;
export type TranslationKey = keyof typeof zhHant;
export type HeadlineKey = keyof (typeof headlineLayout)["zh-Hant"];

const dictionaries: Record<ChineseLocale, Record<TranslationKey, string>> = {
  "zh-Hant": zhHant,
  "zh-Hans": zhHans,
};

export function isLocale(value: string | undefined): value is Locale {
  return locales.includes(value as Locale);
}

export function translate(locale: Locale, key: TranslationKey, english: string): string {
  return locale === "en" ? english : dictionaries[locale][key] ?? english;
}

export function localizedHeadline(locale: Locale, key: HeadlineKey, englishLines: readonly string[]): readonly string[] {
  return locale === "en" ? englishLines : headlineLayout[locale][key];
}

export function localizedPath(locale: Locale, path = "/"): string {
  const normalized = path.startsWith("/") ? path : `/${path}`;
  const prefix = locale === "en" ? "" : `/${locale.toLowerCase()}`;
  return withBasePath(`${prefix}${normalized === "/" ? "/" : normalized}`);
}

export function localeRoute(locale: Locale, pathname: string): string {
  const base = import.meta.env.BASE_URL.replace(/\/$/, "");
  let route = pathname.startsWith(base) ? pathname.slice(base.length) : pathname;
  route = route.replace(/^\/(zh-hant|zh-hans)(?=\/|$)/, "") || "/";
  return localizedPath(locale, route);
}

const categoryKeyByName = {
  All: "caseCategories.all",
  "Airports & Facilities": "caseCategories.airports-facilities",
  Office: "caseCategories.office",
  Retail: "caseCategories.retail",
  "Food & Beverage": "caseCategories.food-beverage",
  Exhibition: "caseCategories.exhibition",
  Residential: "caseCategories.residential",
  "E&M": "caseCategories.em",
} as const;

const caseImageKeyBySlug = {
  "china-taiping-insurance-macau-2024": "images.chinaTaiping.alt",
  "koi-kei-bakery-venetian-macau-2025": "images.koiKei.alt",
  "plaza-premium-lounge-mia-2024": "images.plazaPremium.alt",
  "mia-air-handling-unit-ac11-2024": "images.miaPlantRoom.alt",
  "cotai-exhibition-hall-macau-2023": "images.cotaiExhibition.alt",
  "private-residence-taipa-2023": "images.taipaResidence.alt",
  "harbour-food-hall-macau-2024": "images.harbourFoodHall.alt",
  "nia-maintenance-programme-macau-2025": "images.niaFacilities.alt",
} as const;

const serviceCapabilityKeys = {
  "fit-out-renovation": [
    "services.fit-out-renovation.capabilities.interiorDesign",
    "services.fit-out-renovation.capabilities.projectManagement",
    "services.fit-out-renovation.capabilities.fitOutRenovation",
    "services.fit-out-renovation.capabilities.reinstatement",
    "services.fit-out-renovation.capabilities.customFixturesFurniture",
    "services.fit-out-renovation.capabilities.licensingDocumentation",
  ],
  "em-engineering": [
    "services.em-engineering.capabilities.mvac",
    "services.em-engineering.capabilities.fireServices",
    "services.em-engineering.capabilities.plumbingDrainage",
    "services.em-engineering.capabilities.electricalElv",
    "services.em-engineering.capabilities.systemDesign",
    "services.em-engineering.capabilities.installationTestingCommissioning",
  ],
  maintenance: [
    "services.maintenance.capabilities.mvacFire",
    "services.maintenance.capabilities.plumbingDrainage",
    "services.maintenance.capabilities.electrical",
    "services.maintenance.capabilities.facilityEquipment",
    "services.maintenance.capabilities.preventiveInspections",
    "services.maintenance.capabilities.responsiveMaintenance",
  ],
} as const satisfies Record<(typeof services)[number]["id"], readonly TranslationKey[]>;

const deliveryActivityKeys = {
  "understand-plan": "deliverySteps.understand-plan.activities",
  "design-coordinate": "deliverySteps.design-coordinate.activities",
  "build-install": "deliverySteps.build-install.activities",
  "test-hand-over": "deliverySteps.test-hand-over.activities",
} as const;

export function getLocalizedContent(locale: Locale) {
  const t = (key: TranslationKey, english: string) => translate(locale, key, english);
  const localizedCases = cases.map((record) => ({
    ...record,
    name: t(`cases.${record.slug}.name` as TranslationKey, record.name),
    categoryLabel: t(categoryKeyByName[record.category], record.category),
    location: t("regions.macau", record.location),
    scope: t(`cases.${record.slug}.scope` as TranslationKey, record.scope),
    summary: t(`cases.${record.slug}.summary` as TranslationKey, record.summary),
    image: { ...record.image, alt: t(caseImageKeyBySlug[record.slug], record.image.alt) },
  }));
  const localizedClients = clients.map((client) => ({
    ...client,
    name: t(`clients.${client.id.replace("client-", "")}.name` as TranslationKey, client.name),
  }));

  return {
    t,
    hero: {
      ...hero,
      eyebrow: t("hero.eyebrow", hero.eyebrow),
      headlineLines: locale === "en" ? hero.headlineLines : headlineLayout[locale]["hero.headline"],
      supportingCopy: t("hero.supportingCopy", hero.supportingCopy),
      primaryAction: { label: t("hero.primaryAction", hero.primaryAction.label), href: localizedPath(locale, "/cases") },
      image: { ...hero.image, alt: t("images.hero.alt", hero.image.alt) },
    },
    companyIntroduction: {
      ...companyIntroduction,
      eyebrow: t("companyIntroduction.eyebrow", companyIntroduction.eyebrow),
      headlineLines: locale === "en" ? ["Experience that delivers.", "People who stay accountable."] : headlineLayout[locale]["companyIntroduction.headline"],
      vision: { title: t("companyIntroduction.vision.title", companyIntroduction.vision.title), copy: t("companyIntroduction.vision.copy", companyIntroduction.vision.copy) },
      mission: { title: t("companyIntroduction.mission.title", companyIntroduction.mission.title), copy: t("companyIntroduction.mission.copy", companyIntroduction.mission.copy) },
      statistics: companyIntroduction.statistics.map((statistic, index) => ({ ...statistic, label: t((["companyIntroduction.statistics.founded.label", "companyIntroduction.statistics.completedCases.label", "companyIntroduction.statistics.directClients.label", "companyIntroduction.statistics.team.label"] as const)[index], statistic.label) })),
      commitment: t("companyIntroduction.commitment", companyIntroduction.commitment),
      locationLine: t("siteIdentity.locationLine", companyIntroduction.locationLine),
      image: { ...companyIntroduction.image, alt: t("images.companyIntroductionData.alt", companyIntroduction.image.alt) },
    },
    whatWeDo: {
      eyebrow: t("whatWeDo.eyebrow", whatWeDo.eyebrow),
      headlineLines: locale === "en" ? ["Integrated services.", "Specialist capabilities."] : headlineLayout[locale]["whatWeDo.headline"],
    },
    services: services.map((service) => ({
      ...service,
      name: t(`services.${service.id}.name` as TranslationKey, service.name),
      description: t(`services.${service.id}.description` as TranslationKey, service.description),
      capabilities: service.capabilities.map((capability, index) => t(serviceCapabilityKeys[service.id][index], capability)),
    })),
    cases: localizedCases,
    casesById: new Map(localizedCases.map((record) => [record.id, record])),
    caseCategories: caseCategories.map((category) => ({ id: category, label: t(categoryKeyByName[category], category) })),
    casesSection: {
      eyebrow: t("casesSection.eyebrow", casesSection.eyebrow),
      headlineLines: locale === "en" ? ["Highlighted cases", "across sectors."] : headlineLayout[locale]["casesSection.headline"],
      supportingCopy: t("casesSection.supportingCopy", casesSection.supportingCopy),
      action: { label: t("casesSection.action", casesSection.action.label), href: localizedPath(locale, "/cases") },
    },
    clients: localizedClients,
    clientsById: new Map(localizedClients.map((client) => [client.id, client])),
    clientGroups: clientGroups.map((group) => ({ ...group, name: t(`clientGroups.${group.id}` as TranslationKey, group.name) })),
    selectedClients: {
      ...selectedClients,
      eyebrow: t("selectedClients.eyebrow", selectedClients.eyebrow),
      headlineLines: locale === "en" ? ["Trusted by", "Leading", "Organisations."] : [t("selectedClients.headline", selectedClients.headline)],
      supportingCopy: t("selectedClients.supportingCopy", selectedClients.supportingCopy),
      directClientLabel: t("selectedClients.directClientLabel", selectedClients.directClientLabel),
      returnClientCopy: t("selectedClients.returnClientCopy", selectedClients.returnClientCopy),
      casesAction: { label: t("selectedClients.casesAction", selectedClients.casesAction.label), href: localizedPath(locale, "/cases") },
      contactAction: { label: t("selectedClients.contactAction", selectedClients.contactAction.label), href: localizedPath(locale, "/contact") },
    },
    delivery: {
      eyebrow: t("delivery.eyebrow", delivery.eyebrow),
      headlineLines: locale === "en" ? [delivery.headline] : headlineLayout[locale]["delivery.headline"],
      supportingCopy: t("delivery.supportingCopy", delivery.supportingCopy),
      assuranceLabels: delivery.assuranceLabels.map((label, index) => t((["delivery.assurance.safety", "delivery.assurance.quality", "delivery.assurance.programme"] as const)[index], label)),
    },
    deliverySteps: deliverySteps.map((step) => ({
      ...step,
      title: t(`deliverySteps.${step.id}.title` as TranslationKey, step.title),
      activities: locale === "en" ? step.activities : t(deliveryActivityKeys[step.id], step.activities.join(" · ")).split(" · "),
      image: step.image ? { ...step.image, alt: t(step.id === "understand-plan" ? "images.understandPlan.alt" : "images.buildInstall.alt", step.image.alt) } : undefined,
    })),
    repeatClientRelationships: repeatClientRelationships.map((relationship) => ({
      ...relationship,
      clientName: localizedClients.find((client) => client.id === relationship.clientId)?.name ?? relationship.clientName,
      period: t(`repeatClientRelationships.${relationship.id.replace("relationship-", "")}.period` as TranslationKey, relationship.period),
    })),
    repeatClients: {
      eyebrow: t("repeatClients.eyebrow", repeatClients.eyebrow),
      headlineLines: locale === "en" ? ["A completed case can be", "the start of the next one."] : headlineLayout[locale]["repeatClients.headline"],
      supportingCopy: t("repeatClients.supportingCopy", repeatClients.supportingCopy),
    },
    clientFeedback: clientFeedback.map((item, index) => ({
      ...item,
      quote: t(index === 0 ? "clientFeedback.placeholder.primary" : "clientFeedback.placeholder.secondary", item.quote),
      name: t(index === 0 ? "clientFeedback.placeholder.clientOne" : "clientFeedback.placeholder.clientTwo", item.name),
      attribution: t("clientFeedback.placeholder.attribution", item.attribution),
    })),
    contact: {
      ...contact,
      eyebrow: t("contact.eyebrow", contact.eyebrow),
      headline: t("contact.headline", contact.headline),
      introduction: t("contact.introduction", contact.introduction),
      company: {
        ...contact.company,
        title: t("contact.company.title", "Company Contact"),
        location: t("regions.macau", contact.company.location),
        addressLines: locale === "en" ? contact.company.addressLines : [t("contact.company.address", contact.company.addressLines.join(" "))],
      },
      generalManager: {
        title: t("contact.generalManager.title", contact.generalManager.title),
        fields: contact.generalManager.fields.map((field, index) => ({
          label: t((["contact.generalManager.nameLabel", "contact.generalManager.directLabel", "contact.generalManager.emailLabel"] as const)[index], field.label),
          value: t("contact.generalManager.pending", field.value),
        })),
      },
      image: { ...contact.image, alt: t("images.contact.alt", contact.image.alt) },
    },
  };
}

export function formatMessage(template: string, values: Record<string, string | number>): string {
  return template.replace(/\{(\w+)\}/g, (_, key) => String(values[key] ?? `{${key}}`));
}
