/** Public site configuration (single source for editable constants). */
export const SITE_URL = "https://jouletracker.com";

/** Contact email — replace with the official address when it is defined. */
export const CONTACT_EMAIL = "contacto@jouletracker.com";

/** Google Maps deep link for the reference location. */
export const MAPS_URL =
  "https://www.google.com/maps/search/?api=1&query=Av.+La+Marina+2810%2C+San+Miguel%2C+Lima%2C+Per%C3%BA";

/** Section ids used across the landing (order matters for navigation). */
export const SECTION_IDS = [
  "inicio",
  "solucion",
  "como-funciona",
  "planes",
  "testimonios",
  "faq",
  "contacto",
] as const;

export type SectionId = (typeof SECTION_IDS)[number];

/** Extra anchor ids used by footer links. */
export const BENEFICIOS_ID = "beneficios";
export const SOBRE_ID = "sobre-nosotros";
export const UBICACION_ID = "ubicacion";
