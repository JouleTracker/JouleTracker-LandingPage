export const es = {
  meta: {
    title: "JouleTracker — Monitorea y comprende tu consumo energético",
    description:
      "JouleTracker te ayuda a monitorear, analizar y comprender mejor tu consumo energético. Información clara para tomar mejores decisiones sobre la energía.",
  },
  nav: {
    skip: "Saltar al contenido",
    inicio: "Inicio",
    solucion: "Solución",
    comoFunciona: "Cómo funciona",
    planes: "Planes",
    testimonios: "Testimonios",
    faq: "FAQ",
    contacto: "Contacto",
    cta: "Empezar",
    openMenu: "Abrir menú de navegación",
    closeMenu: "Cerrar menú de navegación",
  },
  language: {
    label: "Seleccionar idioma",
    es: "Español",
    en: "English",
  },
  hero: {
    eyebrow: "Gestión inteligente de energía",
    titleA: "Entiende tu energía.",
    titleB: "Mejora tu consumo.",
    description:
      "JouleTracker transforma los datos de consumo energético en información clara para ayudarte a comprender, controlar y optimizar el uso de la energía.",
    ctaPrimary: "Comenzar",
    ctaSecondary: "Conocer JouleTracker",
    scroll: "Desliza para explorar",
    mock: {
      windowTitle: "JouleTracker · Panel de consumo",
      live: "Datos de demostración",
      current: "Consumo actual",
      currentUnit: "kWh hoy",
      trendDown: "−8% vs. semana anterior",
      chart: "Evolución del consumo",
      chartSub: "Últimos 7 días",
      spaces: "Espacios",
      space1: "Oficina",
      space2: "Laboratorio",
      space3: "Comedor",
      devices: "Dispositivos conectados",
      rec: "Recomendación",
      recText: "Reducir la carga nocturna del Laboratorio podría ahorrar ~0.6 kWh diarios.",
      floatDevices: "12 dispositivos activos",
    },
  },
  trust: {
    title: "Una forma más clara de entender el consumo energético.",
    items: [
      { label: "Monitoreo continuo", desc: "Vista del consumo a lo largo del día" },
      { label: "Análisis de tendencias", desc: "Compara periodos de uso" },
      { label: "Organización por espacios", desc: "Cada ambiente con su información" },
      { label: "Eficiencia", desc: "Oportunidades de mejora visibles" },
    ],
  },
  problem: {
    eyebrow: "El problema",
    title: "El consumo energético genera datos. JouleTracker los convierte en decisiones.",
    items: [
      {
        title: "Falta de visibilidad",
        desc: "Sin información clara, resulta difícil entender cómo se utiliza la energía.",
      },
      {
        title: "Datos dispersos",
        desc: "Los datos de consumo pueden ser difíciles de interpretar y comparar.",
      },
      {
        title: "Decisiones poco informadas",
        desc: "Comprender los patrones de consumo permite identificar oportunidades de mejora.",
      },
    ],
    solution: {
      title: "Una sola vista, información accionable",
      text: "JouleTracker centraliza la información y la presenta de forma clara para facilitar el seguimiento del consumo.",
      link: "Ver la solución",
    },
  },
  solution: {
    eyebrow: "Solución",
    title: "Todo lo que necesitas para entender tu consumo",
    subtitle: "Herramientas sencillas para seguir tu energía sin complicaciones.",
    features: [
      {
        title: "Monitoreo energético",
        desc: "Visualiza información relacionada con el consumo de energía de forma clara.",
      },
      {
        title: "Espacios",
        desc: "Organiza y consulta el consumo según diferentes espacios o ambientes.",
      },
      {
        title: "Dispositivos",
        desc: "Mantén identificados los dispositivos asociados al monitoreo.",
      },
      {
        title: "Análisis de consumo",
        desc: "Observa tendencias y compara el comportamiento energético.",
      },
      {
        title: "Recomendaciones",
        desc: "Obtén sugerencias orientadas a mejorar el uso de la energía.",
      },
      {
        title: "Historial",
        desc: "Consulta información anterior para reconocer patrones.",
      },
    ],
  },
  how: {
    eyebrow: "Cómo funciona",
    title: "Tres pasos para tener el control",
    subtitle: "Un flujo simple para pasar de los datos a la acción.",
    steps: [
      {
        title: "Conecta",
        desc: "Registra los espacios y dispositivos que deseas monitorear.",
      },
      {
        title: "Monitorea",
        desc: "Consulta la información energética de forma centralizada.",
      },
      {
        title: "Analiza",
        desc: "Identifica patrones y oportunidades para utilizar la energía de manera más eficiente.",
      },
    ],
  },
  dashboard: {
    eyebrow: "Vista del panel",
    title: "Datos que puedes entender de un vistazo",
    subtitle: "Así se presenta la información en JouleTracker: ordenada, visual y fácil de interpretar.",
    kpis: [
      { label: "Consumo actual", value: "4.2", unit: "kWh", delta: "−8% vs. ayer", tone: "good" },
      { label: "Hoy", value: "12.4", unit: "kWh", delta: "Estable", tone: "neutral" },
      { label: "Semana", value: "82.6", unit: "kWh", delta: "−5% vs. anterior", tone: "good" },
      { label: "Dispositivos activos", value: "12", unit: "", delta: "3 espacios", tone: "neutral" },
    ],
    chart: { title: "Consumo por hora", range: "Hoy · 00:00 – 23:00" },
    distribution: {
      title: "Distribución por espacio",
      items: [
        { label: "Oficina", pct: 46, color: "volt" },
        { label: "Laboratorio", pct: 33, color: "teal" },
        { label: "Comedor", pct: 21, color: "ink" },
      ],
    },
    devices: {
      title: "Dispositivos",
      online: "Operando",
      standby: "En espera",
      items: [
        { name: "Aire acondicionado", space: "Oficina", status: "online" },
        { name: "Lámparas LED", space: "Oficina", status: "online" },
        { name: "Equipo de cómputo", space: "Laboratorio", status: "standby" },
        { name: "Enfriadora", space: "Comedor", status: "online" },
      ],
    },
    recommendation: {
      label: "Recomendación destacada",
      text: "El Laboratorio concentra el 33% del consumo. Revisar los horarios del equipo de cómputo podría reducir los picos de las mañanas.",
    },
    stats: [
      { value: 24, suffix: "h", label: "Vista de consumo" },
      { value: 12, suffix: "", label: "Dispositivos monitoreados" },
      { value: 8, suffix: "", label: "Espacios registrados", pad: true },
    ],
    statsNote: "Ejemplo de datos de demostración",
  },
  benefits: {
    eyebrow: "Beneficios",
    title: "Más claridad. Mejores decisiones.",
    subtitle: "Cuatro razones para darle un orden real a tu consumo.",
    items: [
      { title: "Visibilidad", desc: "Comprende mejor cómo se distribuye tu consumo." },
      { title: "Control", desc: "Ten la información organizada en un solo lugar." },
      { title: "Análisis", desc: "Identifica tendencias y cambios en el consumo." },
      { title: "Eficiencia", desc: "Detecta oportunidades para utilizar mejor la energía." },
    ],
  },
  pricing: {
    eyebrow: "Planes",
    title: "Elige el plan que se adapta a tus necesidades",
    subtitle: "Planes claros, sin permanencia y sin sorpresas.",
    popular: "Más elegido",
    price: "Consulta disponibilidad",
    cta: "Elegir plan",
    note: "Los planes se están preparando. Al elegir uno, te contactaremos para darte más información.",
    prefill: "Consulta sobre el plan",
    plans: [
      {
        name: "Starter",
        desc: "Para comenzar a conocer y organizar el consumo.",
        features: [
          "Monitoreo básico",
          "Gestión de espacios",
          "Visualización de consumo",
          "Historial básico",
        ],
      },
      {
        name: "Plus",
        desc: "Para usuarios que buscan un análisis más completo.",
        features: [
          "Todo lo de Starter",
          "Análisis de tendencias",
          "Gestión ampliada de dispositivos",
          "Recomendaciones",
          "Historial ampliado",
        ],
      },
      {
        name: "Pro",
        desc: "Para una experiencia más completa de monitoreo y análisis.",
        features: [
          "Todo lo de Plus",
          "Mayor capacidad de seguimiento",
          "Análisis más detallado",
          "Gestión avanzada de información",
          "Soporte prioritario",
        ],
      },
    ],
  },
  testimonials: {
    eyebrow: "Testimonios",
    title: "Personas que buscan entender mejor su energía",
    demo: "Testimonios demostrativos con fines ilustrativos.",
    prev: "Testimonio anterior",
    next: "Testimonio siguiente",
    goTo: "Ver testimonio {n}",
    items: [
      {
        name: "Andrea Morales",
        role: "Administradora",
        quote:
          "Me gustó que la información está organizada por espacios. Antes perdía tiempo intentando entender los reportes; ahora veo de un vistazo dónde va el consumo.",
      },
      {
        name: "Diego Ramírez",
        role: "Emprendedor",
        quote:
          "En un espacio pequeño cada kilovatio cuenta. Con JouleTracker pude ver qué dispositivos pesan más durante la semana y ajustar horarios sin esfuerzo.",
      },
      {
        name: "Valeria Torres",
        role: "Profesional independiente",
        quote:
          "Lo uso para seguir el consumo de mi oficina. El historial me ayudó a notar patrones que no había visto, como los picos de las mañanas.",
      },
    ],
  },
  about: {
    eyebrow: "Sobre nosotros",
    title: "Construimos una forma más simple de entender la energía.",
    text: "JouleTracker nace con una idea clara: convertir información energética en una experiencia sencilla, visual y útil. Combinamos tecnología, análisis y una experiencia centrada en el usuario para facilitar una mejor comprensión del consumo.",
    floatCard: { value: "−12%", label: "consumo en horas valle" },
    values: [
      { title: "Innovación", desc: "Tecnología aplicada a un problema cotidiano." },
      { title: "Claridad", desc: "Información presentada sin ruido." },
      { title: "Eficiencia", desc: "Pequeños cambios con impacto real." },
      { title: "Sostenibilidad", desc: "Usar la energía de forma consciente." },
    ],
    imageAlt: "Ingenieros inspeccionando paneles solares en un campo de energía",
  },
  location: {
    eyebrow: "Ubicación",
    title: "Encuéntranos",
    campus: "Universidad Peruana de Ciencias Aplicadas — Campus San Miguel",
    address: "Av. La Marina 2810, San Miguel, Lima, Perú",
    view: "Ver ubicación",
    mapLabel: "Mapa de referencia — San Miguel, Lima",
    tip: "Si vienes a visitarnos, busca la entrada principal del campus en Av. La Marina.",
  },
  faq: {
    eyebrow: "Preguntas frecuentes",
    title: "Preguntas frecuentes",
    subtitle: "Lo esencial antes de empezar con JouleTracker.",
    items: [
      {
        q: "¿Qué es JouleTracker?",
        a: "JouleTracker es una solución orientada a facilitar el monitoreo y análisis del consumo energético.",
      },
      {
        q: "¿Qué información puedo consultar?",
        a: "Puedes visualizar información relacionada con espacios, dispositivos y consumo energético.",
      },
      {
        q: "¿Necesito conocimientos técnicos?",
        a: "No. La experiencia está diseñada para presentar la información de forma clara y sencilla.",
      },
      {
        q: "¿Puedo revisar mi consumo histórico?",
        a: "Sí, la plataforma contempla la consulta de información histórica para identificar tendencias.",
      },
      {
        q: "¿JouleTracker ofrece recomendaciones?",
        a: "Sí. Se pueden presentar recomendaciones orientadas a mejorar el uso de la energía.",
      },
      {
        q: "¿Dónde puedo obtener más información?",
        a: "Puedes contactarnos mediante el formulario de contacto o nuestros canales oficiales.",
      },
    ],
    more: {
      title: "¿Tienes otra pregunta?",
      text: "Escríbenos y te responderemos a la brevedad.",
      cta: "Escríbenos",
    },
  },
  contact: {
    eyebrow: "Contacto",
    title: "¿Tienes alguna pregunta?",
    subtitle: "Estamos aquí para ayudarte a conocer mejor JouleTracker.",
    info: {
      emailLabel: "Correo electrónico",
      response: "Respondemos en 1 a 2 días hábiles.",
      follow: "Síguenos",
    },
    form: {
      name: "Nombre",
      namePh: "Tu nombre",
      email: "Correo electrónico",
      emailPh: "tu@correo.com",
      subject: "Asunto",
      subjectPh: "¿Sobre qué quieres hablar?",
      message: "Mensaje",
      messagePh: "Cuéntanos en qué podemos ayudarte…",
      accept: "Acepto que mis datos sean utilizados para responder mi consulta.",
      send: "Enviar mensaje",
      sending: "Enviando…",
      errors: {
        name: "Ingresa tu nombre.",
        email: "Ingresa un correo electrónico válido.",
        subject: "Ingresa un asunto.",
        message: "Escribe un mensaje de al menos 10 caracteres.",
        accept: "Debes aceptar para continuar.",
      },
      success: {
        title: "Gracias por contactarnos.",
        text: "Hemos recibido tu mensaje y te responderemos a la brevedad.",
        again: "Enviar otro mensaje",
      },
    },
  },
  finalCta: {
    title: "Empieza a entender mejor tu energía.",
    subtitle: "Convierte tus datos de consumo en información clara y útil.",
    button: "Conocer JouleTracker",
  },
  footer: {
    description: "Una forma más clara de monitorear y comprender el consumo energético.",
    product: "Producto",
    resources: "Recursos",
    company: "Empresa",
    follow: "Síguenos",
    benefits: "Beneficios",
    help: "Ayuda",
    about: "Sobre nosotros",
    location: "Ubicación",
    privacy: "Política de privacidad",
    terms: "Términos de servicio",
    rights: "© 2026 JouleTracker. Todos los derechos reservados.",
    madeIn: "Diseñado en Lima, Perú",
  },
};

export type Translation = typeof es;
