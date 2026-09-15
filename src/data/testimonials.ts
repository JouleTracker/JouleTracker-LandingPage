/**
 * Testimonial metadata (photos + ratings).
 * Names, roles and quotes live in i18n, index-aligned with `t.testimonials.items`.
 * Photos are royalty-free stock portraits (Pexels).
 */
export interface TestimonialMeta {
  id: string;
  photo: string;
  rating: number; // 1–5
}

const px = (id: number) =>
  `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=240&w=240`;

export const testimonials: TestimonialMeta[] = [
  { id: "andrea", photo: px(33680700), rating: 5 },
  { id: "diego", photo: px(7752822), rating: 5 },
  { id: "valeria", photo: px(7752808), rating: 4 },
];

/** About section photograph (royalty-free, Pexels). */
export const ABOUT_IMAGE =
  "https://images.pexels.com/photos/4254166/pexels-photo-4254166.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=1200";
