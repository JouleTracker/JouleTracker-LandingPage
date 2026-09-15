/**
 * Plan metadata. Copy (names, descriptions, features) lives in i18n,
 * index-aligned with `t.pricing.plans`.
 */
export interface PlanMeta {
  id: "starter" | "plus" | "pro";
  highlighted: boolean;
}

export const planMeta: PlanMeta[] = [
  { id: "starter", highlighted: false },
  { id: "plus", highlighted: true },
  { id: "pro", highlighted: false },
];
