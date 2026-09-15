import {
  Activity,
  Eye,
  EyeOff,
  Gauge,
  History,
  LayoutGrid,
  Leaf,
  Lightbulb,
  LineChart,
  PlugZap,
  Scale,
  ScatterChart,
  SlidersHorizontal,
  Sparkles,
  TrendingUp,
  type LucideIcon,
} from "lucide-react";

const GridIcon = LayoutGrid;

/** Icons for the solution feature cards. Order matches `t.solution.features`. */
export const featureIcons: LucideIcon[] = [
  Activity,
  GridIcon,
  PlugZap,
  LineChart,
  Lightbulb,
  History,
];

/** Icons for the problem items. Order matches `t.problem.items`. */
export const problemIcons: LucideIcon[] = [EyeOff, ScatterChart, Scale];

/** Icons for the trust badges. Order matches `t.trust.items`. */
export const trustIcons: LucideIcon[] = [Activity, TrendingUp, GridIcon, Leaf];

/** Icons for the benefits. Order matches `t.benefits.items`. */
export const benefitIcons: LucideIcon[] = [Eye, SlidersHorizontal, LineChart, Gauge];

/** Icons for the how-it-works steps. Order matches `t.how.steps`. */
export const stepIcons: LucideIcon[] = [PlugZap, Activity, LineChart];

/** Icons for the about values. Order matches `t.about.values`. */
export const valueIcons: LucideIcon[] = [Sparkles, Eye, Gauge, Leaf];
