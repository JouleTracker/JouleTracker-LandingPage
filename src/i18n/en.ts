import type { Translation } from "./es";

export const en: Translation = {
  meta: {
    title: "JouleTracker — Monitor and understand your energy consumption",
    description:
      "JouleTracker helps you monitor, analyze and better understand your energy consumption. Clear information to make better energy decisions.",
  },
  nav: {
    skip: "Skip to content",
    inicio: "Home",
    solucion: "Solution",
    comoFunciona: "How it works",
    planes: "Plans",
    testimonios: "Testimonials",
    faq: "FAQ",
    contacto: "Contact",
    cta: "Get started",
    openMenu: "Open navigation menu",
    closeMenu: "Close navigation menu",
  },
  language: {
    label: "Select language",
    es: "Español",
    en: "English",
  },
  hero: {
    eyebrow: "Smart energy management",
    titleA: "Understand your energy.",
    titleB: "Improve your consumption.",
    description:
      "JouleTracker turns energy consumption data into clear information so you can understand, control and optimize the way energy is used.",
    ctaPrimary: "Get started",
    ctaSecondary: "Discover JouleTracker",
    scroll: "Scroll to explore",
    mock: {
      windowTitle: "JouleTracker · Consumption dashboard",
      live: "Demo data",
      current: "Current consumption",
      currentUnit: "kWh today",
      trendDown: "−8% vs. last week",
      chart: "Consumption trend",
      chartSub: "Last 7 days",
      spaces: "Spaces",
      space1: "Office",
      space2: "Lab",
      space3: "Dining",
      devices: "Connected devices",
      rec: "Recommendation",
      recText: "Cutting the Lab's overnight load could save ~0.6 kWh per day.",
      floatDevices: "12 active devices",
    },
  },
  trust: {
    title: "A clearer way to understand energy consumption.",
    items: [
      { label: "Continuous monitoring", desc: "Consumption view across the day" },
      { label: "Trend analysis", desc: "Compare usage periods" },
      { label: "Organized by space", desc: "Each area with its own data" },
      { label: "Efficiency", desc: "Visible improvement opportunities" },
    ],
  },
  problem: {
    eyebrow: "The problem",
    title: "Energy consumption generates data. JouleTracker turns it into decisions.",
    items: [
      {
        title: "Lack of visibility",
        desc: "Without clear information, it's hard to understand how energy is being used.",
      },
      {
        title: "Scattered data",
        desc: "Consumption data can be difficult to interpret and compare.",
      },
      {
        title: "Under-informed decisions",
        desc: "Understanding consumption patterns helps identify improvement opportunities.",
      },
    ],
    solution: {
      title: "One view, actionable information",
      text: "JouleTracker centralizes the information and presents it clearly to make consumption tracking effortless.",
      link: "See the solution",
    },
  },
  solution: {
    eyebrow: "Solution",
    title: "Everything you need to understand your consumption",
    subtitle: "Simple tools to keep track of your energy without the complexity.",
    features: [
      {
        title: "Energy monitoring",
        desc: "See energy consumption information in a clear way.",
      },
      {
        title: "Spaces",
        desc: "Organize and check consumption by different spaces or areas.",
      },
      {
        title: "Devices",
        desc: "Keep the devices associated with monitoring identified.",
      },
      {
        title: "Consumption analysis",
        desc: "Observe trends and compare energy behavior.",
      },
      {
        title: "Recommendations",
        desc: "Get suggestions aimed at improving energy use.",
      },
      {
        title: "History",
        desc: "Browse previous information to recognize patterns.",
      },
    ],
  },
  how: {
    eyebrow: "How it works",
    title: "Three steps to get in control",
    subtitle: "A simple flow to go from data to action.",
    steps: [
      {
        title: "Connect",
        desc: "Register the spaces and devices you want to monitor.",
      },
      {
        title: "Monitor",
        desc: "Check energy information from a single, centralized place.",
      },
      {
        title: "Analyze",
        desc: "Identify patterns and opportunities to use energy more efficiently.",
      },
    ],
  },
  dashboard: {
    eyebrow: "Dashboard view",
    title: "Data you can understand at a glance",
    subtitle: "This is how information is presented in JouleTracker: organized, visual and easy to interpret.",
    kpis: [
      { label: "Current consumption", value: "4.2", unit: "kWh", delta: "−8% vs. yesterday", tone: "good" },
      { label: "Today", value: "12.4", unit: "kWh", delta: "Stable", tone: "neutral" },
      { label: "Week", value: "82.6", unit: "kWh", delta: "−5% vs. previous", tone: "good" },
      { label: "Active devices", value: "12", unit: "", delta: "3 spaces", tone: "neutral" },
    ],
    chart: { title: "Consumption by hour", range: "Today · 00:00 – 23:00" },
    distribution: {
      title: "Distribution by space",
      items: [
        { label: "Office", pct: 46, color: "volt" },
        { label: "Lab", pct: 33, color: "teal" },
        { label: "Dining", pct: 21, color: "ink" },
      ],
    },
    devices: {
      title: "Devices",
      online: "Running",
      standby: "Standby",
      items: [
        { name: "Air conditioning", space: "Office", status: "online" },
        { name: "LED lamps", space: "Office", status: "online" },
        { name: "Computing equipment", space: "Lab", status: "standby" },
        { name: "Refrigerator", space: "Dining", status: "online" },
      ],
    },
    recommendation: {
      label: "Featured recommendation",
      text: "The Lab accounts for 33% of consumption. Reviewing the computing equipment schedule could reduce morning peaks.",
    },
    stats: [
      { value: 24, suffix: "h", label: "Consumption view" },
      { value: 12, suffix: "", label: "Devices monitored" },
      { value: 8, suffix: "", label: "Registered spaces", pad: true },
    ],
    statsNote: "Demonstration data example",
  },
  benefits: {
    eyebrow: "Benefits",
    title: "More clarity. Better decisions.",
    subtitle: "Four reasons to bring real order to your consumption.",
    items: [
      { title: "Visibility", desc: "Better understand how your consumption is distributed." },
      { title: "Control", desc: "Keep the information organized in one place." },
      { title: "Analysis", desc: "Identify trends and changes in consumption." },
      { title: "Efficiency", desc: "Spot opportunities to make better use of energy." },
    ],
  },
  pricing: {
    eyebrow: "Plans",
    title: "Choose the plan that fits your needs",
    subtitle: "Clear plans, no lock-in and no surprises.",
    popular: "Most popular",
    price: "Ask about availability",
    cta: "Choose plan",
    note: "Plans are being prepared. When you choose one, we'll reach out with more information.",
    prefill: "Inquiry about the",
    plans: [
      {
        name: "Starter",
        desc: "To start learning about and organizing your consumption.",
        features: [
          "Basic monitoring",
          "Space management",
          "Consumption visualization",
          "Basic history",
        ],
      },
      {
        name: "Plus",
        desc: "For users looking for a more complete analysis.",
        features: [
          "Everything in Starter",
          "Trend analysis",
          "Expanded device management",
          "Recommendations",
          "Extended history",
        ],
      },
      {
        name: "Pro",
        desc: "For a more complete monitoring and analysis experience.",
        features: [
          "Everything in Plus",
          "Greater tracking capacity",
          "More detailed analysis",
          "Advanced information management",
          "Priority support",
        ],
      },
    ],
  },
  testimonials: {
    eyebrow: "Testimonials",
    title: "People looking to better understand their energy",
    demo: "Demonstrative testimonials for illustration purposes.",
    prev: "Previous testimonial",
    next: "Next testimonial",
    goTo: "View testimonial {n}",
    items: [
      {
        name: "Andrea Morales",
        role: "Administrator",
        quote:
          "I liked that the information is organized by spaces. Before, I spent time trying to make sense of the reports; now I can see at a glance where the consumption goes.",
      },
      {
        name: "Diego Ramírez",
        role: "Entrepreneur",
        quote:
          "In a small space every kilowatt counts. With JouleTracker I could see which devices weigh the most during the week and adjust schedules effortlessly.",
      },
      {
        name: "Valeria Torres",
        role: "Independent professional",
        quote:
          "I use it to track my office's consumption. The history helped me notice patterns I hadn't seen, like the morning peaks.",
      },
    ],
  },
  about: {
    eyebrow: "About us",
    title: "We're building a simpler way to understand energy.",
    text: "JouleTracker was born with a clear idea: turn energy information into a simple, visual and useful experience. We combine technology, analysis and a user-centered approach to make consumption easier to understand.",
    floatCard: { value: "−12%", label: "consumption in off-peak hours" },
    values: [
      { title: "Innovation", desc: "Technology applied to an everyday problem." },
      { title: "Clarity", desc: "Information presented without noise." },
      { title: "Efficiency", desc: "Small changes with real impact." },
      { title: "Sustainability", desc: "Using energy in a conscious way." },
    ],
    imageAlt: "Engineers inspecting solar panels at an energy field",
  },
  location: {
    eyebrow: "Location",
    title: "Find us",
    campus: "Universidad Peruana de Ciencias Aplicadas — Campus San Miguel",
    address: "Av. La Marina 2810, San Miguel, Lima, Perú",
    view: "View location",
    mapLabel: "Reference map — San Miguel, Lima",
    tip: "If you visit us, look for the main campus entrance on Av. La Marina.",
  },
  faq: {
    eyebrow: "FAQ",
    title: "Frequently asked questions",
    subtitle: "The essentials before getting started with JouleTracker.",
    items: [
      {
        q: "What is JouleTracker?",
        a: "JouleTracker is a solution aimed at making energy consumption monitoring and analysis easier.",
      },
      {
        q: "What information can I check?",
        a: "You can view information related to spaces, devices and energy consumption.",
      },
      {
        q: "Do I need technical knowledge?",
        a: "No. The experience is designed to present information in a clear and simple way.",
      },
      {
        q: "Can I review my consumption history?",
        a: "Yes, the platform includes historical information lookup to identify trends.",
      },
      {
        q: "Does JouleTracker offer recommendations?",
        a: "Yes. Recommendations aimed at improving energy use can be presented.",
      },
      {
        q: "Where can I get more information?",
        a: "You can contact us through the contact form or our official channels.",
      },
    ],
    more: {
      title: "Have another question?",
      text: "Write to us and we'll get back to you shortly.",
      cta: "Contact us",
    },
  },
  contact: {
    eyebrow: "Contact",
    title: "Do you have a question?",
    subtitle: "We're here to help you get to know JouleTracker better.",
    info: {
      emailLabel: "Email",
      response: "We reply within 1–2 business days.",
      follow: "Follow us",
    },
    form: {
      name: "Name",
      namePh: "Your name",
      email: "Email",
      emailPh: "you@email.com",
      subject: "Subject",
      subjectPh: "What would you like to talk about?",
      message: "Message",
      messagePh: "Tell us how we can help…",
      accept: "I accept my data being used to answer my inquiry.",
      send: "Send message",
      sending: "Sending…",
      errors: {
        name: "Enter your name.",
        email: "Enter a valid email address.",
        subject: "Enter a subject.",
        message: "Write a message of at least 10 characters.",
        accept: "You must accept to continue.",
      },
      success: {
        title: "Thank you for reaching out.",
        text: "We've received your message and we'll get back to you shortly.",
        again: "Send another message",
      },
    },
  },
  finalCta: {
    title: "Start understanding your energy better.",
    subtitle: "Turn your consumption data into clear, useful information.",
    button: "Discover JouleTracker",
  },
  footer: {
    description: "A clearer way to monitor and understand energy consumption.",
    product: "Product",
    resources: "Resources",
    company: "Company",
    follow: "Follow us",
    benefits: "Benefits",
    help: "Help",
    about: "About us",
    location: "Location",
    privacy: "Privacy Policy",
    terms: "Terms of Service",
    rights: "© 2026 JouleTracker. All rights reserved.",
    madeIn: "Designed in Lima, Peru",
  },
};
