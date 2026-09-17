/**
 * JouleTracker — i18n dictionaries (ES / EN).
 * All visible copy on the landing lives here.
 */

export const translations = {
  es: {
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
    language: { label: "Seleccionar idioma" },
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
        devices: "Dispositivos conectados",
        chart: "Evolución del consumo",
        chartSub: "Últimos 7 días",
        spaces: "Espacios",
        space1: "Oficina",
        space2: "Laboratorio",
        space3: "Comedor",
        trendDown: "−8% vs. semana anterior",
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
        { title: "Conecta", desc: "Registra los espacios y dispositivos que deseas monitorear." },
        { title: "Monitorea", desc: "Consulta la información energética de forma centralizada." },
        {
          title: "Analiza",
          desc: "Identifica patrones y oportunidades para utilizar la energía de manera más eficiente.",
        },
      ],
    },
    dashboard: {
      eyebrow: "Vista del panel",
      title: "Datos que puedes entender de un vistazo",
      subtitle:
        "Así se presenta la información en JouleTracker: ordenada, visual y fácil de interpretar.",
      kpis: [
        { label: "Consumo actual", delta: "−8% vs. ayer" },
        { label: "Hoy", delta: "Estable" },
        { label: "Semana", delta: "−5% vs. anterior" },
        { label: "Dispositivos activos", delta: "3 espacios" },
      ],
      chart: { title: "Consumo por hora", range: "Hoy · 00:00 – 23:00" },
      distribution: {
        title: "Distribución por espacio",
        items: [{ label: "Oficina" }, { label: "Laboratorio" }, { label: "Comedor" }],
      },
      devices: {
        title: "Dispositivos",
        online: "Operando",
        standby: "En espera",
        items: [
          { name: "Aire acondicionado" },
          { name: "Lámparas LED" },
          { name: "Equipo de cómputo" },
          { name: "Enfriadora" },
        ],
      },
      recommendation: {
        label: "Recomendación destacada",
        text: "El Laboratorio concentra el 33% del consumo. Revisar los horarios del equipo de cómputo podría reducir los picos de las mañanas.",
      },
      stats: [
        { label: "Vista de consumo" },
        { label: "Dispositivos monitoreados" },
        { label: "Espacios registrados" },
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
      perMonth: "/ mes",
      offerTag: "Lanzamiento",
      offer: "Precio de lanzamiento por tiempo limitado · 14 días de prueba · Cancela cuando quieras",
      cta: "Empezar prueba gratis",
      note: "Precios referenciales en soles (S/), facturación mensual. La prueba gratuita de 14 días no requiere tarjeta.",
      prefill: "Quiero empezar con el plan",
      plans: [
        {
          name: "Starter",
          desc: "Para comenzar a conocer y organizar el consumo.",
          save: "Ahorra 34%",
          priceNote: "Menos de S/ 1 al día",
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
          save: "Ahorra 34%",
          priceNote: "Ideal para oficinas y negocios",
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
          save: "Ahorra 34%",
          priceNote: "Soporte prioritario incluido",
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
      dot: "Ver testimonio {n}",
      items: [
        {
          name: "Andrea Morales",
          role: "Administradora",
          quote:
            "Me gustó que la información está organizada por espacios. Antes perdía tiempo intentando entender los reportes; ahora veo de un vistazo dónde va el consumo.",
          alt: "Andrea Morales — Administradora",
        },
        {
          name: "Diego Ramírez",
          role: "Emprendedor",
          quote:
            "En un espacio pequeño cada kilovatio cuenta. Con JouleTracker pude ver qué dispositivos pesan más durante la semana y ajustar horarios sin esfuerzo.",
          alt: "Diego Ramírez — Emprendedor",
        },
        {
          name: "Valeria Torres",
          role: "Profesional independiente",
          quote:
            "Lo uso para seguir el consumo de mi oficina. El historial me ayudó a notar patrones que no había visto, como los picos de las mañanas.",
          alt: "Valeria Torres — Profesional independiente",
        },
      ],
    },
    about: {
      eyebrow: "Sobre nosotros",
      title: "Construimos una forma más simple de entender la energía.",
      text: "JouleTracker nace con una idea clara: convertir información energética en una experiencia sencilla, visual y útil. Combinamos tecnología, análisis y una experiencia centrada en el usuario para facilitar una mejor comprensión del consumo.",
      floatValue: "−12%",
      floatLabel: "consumo en horas valle",
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
      view: "Abrir en Google Maps",
      directions: "Cómo llegar",
      mapLabel: "UPC Campus San Miguel · Av. La Marina 2810",
      mapTitle: "Mapa — UPC Campus San Miguel, Av. La Marina 2810, Lima",
      facts: [
        { k: "Referencia", v: "Frente al C.C. Plaza San Miguel, cruce de Av. La Marina con Av. Universitaria." },
        { k: "Cómo llegar", v: "Metropolitano/corredores por Av. La Marina; estacionamiento disponible en el campus." },
        { k: "Horario", v: "Lunes a viernes, 9:00 – 18:00 (previa cita)." },
      ],
    },
    faq: {
      eyebrow: "Preguntas frecuentes",
      title: "Preguntas frecuentes",
      subtitle: "Lo esencial antes de empezar con JouleTracker.",
      items: [
        {
          q: "¿Qué es JouleTracker?",
          a: "JouleTracker es una solución de VoltLab para monitorear, analizar y comprender el consumo energético de tus espacios y dispositivos, presentando la información de forma clara y visual.",
        },
        {
          q: "¿Cómo funciona JouleTracker?",
          a: "Registras los espacios y dispositivos que quieres seguir, JouleTracker centraliza la información de consumo y la muestra en un panel con gráficos, comparaciones e indicadores. A partir de ahí puedes analizar patrones y actuar.",
        },
        {
          q: "¿Qué información de consumo puedo consultar?",
          a: "Consumo actual, consumo por día y por semana, evolución por horas, distribución por espacio, estado de los dispositivos y recomendaciones basadas en tu comportamiento energético.",
        },
        {
          q: "¿Qué dispositivos y espacios puedo monitorear?",
          a: "Puedes organizar el seguimiento por ambientes (oficina, laboratorio, cocina, salas, etc.) y asociar a cada uno los equipos relevantes: climatización, iluminación, refrigeración, equipos de cómputo y otros consumos identificables.",
        },
        {
          q: "¿Puedo consultar mi consumo histórico?",
          a: "Sí. El historial te permite revisar periodos anteriores, comparar semanas o meses y detectar tendencias o cambios en el consumo.",
        },
        {
          q: "¿JouleTracker identifica oportunidades de mejora?",
          a: "Sí. Al comparar espacios, horarios y dispositivos, JouleTracker resalta picos, consumos fuera de horario y concentraciones de uso que suelen representar oportunidades de ahorro.",
        },
        {
          q: "¿JouleTracker ofrece recomendaciones?",
          a: "Sí. Presenta sugerencias concretas y comprensibles, como revisar horarios de un equipo o reducir la carga nocturna de un espacio, orientadas a usar mejor la energía.",
        },
        {
          q: "¿Necesito conocimientos técnicos para utilizarlo?",
          a: "No. La experiencia está diseñada para que cualquier persona entienda su consumo sin conocimientos de electricidad ni análisis de datos.",
        },
        {
          q: "¿Qué necesito para comenzar a utilizar JouleTracker?",
          a: "Solo una cuenta y unos minutos para registrar tus espacios y dispositivos. Puedes empezar con la prueba gratuita de 14 días sin tarjeta de crédito.",
        },
        {
          q: "¿JouleTracker está disponible para hogares, oficinas o empresas?",
          a: "Sí. El plan Starter está pensado para hogares y espacios pequeños, Plus para oficinas y negocios, y Pro para organizaciones con varios espacios y mayor volumen de dispositivos.",
        },
        {
          q: "¿Mis datos de consumo están protegidos?",
          a: "Sí. Tus datos se transmiten cifrados, se usan únicamente para mostrarte tu información y no se comparten con terceros. Puedes solicitar su eliminación en cualquier momento.",
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
    midCta: {
      eyebrow: "Prueba gratuita",
      title: "Descubre dónde se va tu energía en menos de una semana.",
      text: "Empieza con 14 días de prueba, sin tarjeta. Configura tus espacios en minutos y recibe tu primer resumen de consumo.",
      perks: ["Sin tarjeta de crédito", "Configuración en 10 minutos", "Cancela cuando quieras"],
      primary: "Ver planes",
      secondary: "Hablar con nosotros",
    },
    finalCta: {
      title: "Empieza a entender mejor tu energía.",
      subtitle: "Convierte tus datos de consumo en información clara y útil.",
      button: "Empezar prueba gratuita",
      secondary: "Conocer JouleTracker",
      trust: "14 días gratis · Sin tarjeta · Cancela cuando quieras",
    },
    footer: {
      description: "Una forma más clara de monitorear y comprender el consumo energético.",
      product: "Producto",
      resources: "Recursos",
      company: "Empresa",
      benefits: "Beneficios",
      help: "Ayuda",
      about: "Sobre nosotros",
      location: "Ubicación",
      privacy: "Política de privacidad",
      terms: "Términos de servicio",
      rights: "© 2026 VoltLab. Todos los derechos reservados.",
      by: "Un producto de VoltLab",
      madeIn: "Diseñado en Lima, Perú",
    },
  },

  en: {
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
    language: { label: "Select language" },
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
        devices: "Connected devices",
        chart: "Consumption trend",
        chartSub: "Last 7 days",
        spaces: "Spaces",
        space1: "Office",
        space2: "Lab",
        space3: "Dining",
        trendDown: "−8% vs. last week",
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
        { title: "Connect", desc: "Register the spaces and devices you want to monitor." },
        { title: "Monitor", desc: "Check energy information from a single, centralized place." },
        {
          title: "Analyze",
          desc: "Identify patterns and opportunities to use energy more efficiently.",
        },
      ],
    },
    dashboard: {
      eyebrow: "Dashboard view",
      title: "Data you can understand at a glance",
      subtitle:
        "This is how information is presented in JouleTracker: organized, visual and easy to interpret.",
      kpis: [
        { label: "Current consumption", delta: "−8% vs. yesterday" },
        { label: "Today", delta: "Stable" },
        { label: "Week", delta: "−5% vs. previous" },
        { label: "Active devices", delta: "3 spaces" },
      ],
      chart: { title: "Consumption by hour", range: "Today · 00:00 – 23:00" },
      distribution: {
        title: "Distribution by space",
        items: [{ label: "Office" }, { label: "Lab" }, { label: "Dining" }],
      },
      devices: {
        title: "Devices",
        online: "Running",
        standby: "Standby",
        items: [
          { name: "Air conditioning" },
          { name: "LED lamps" },
          { name: "Computing equipment" },
          { name: "Refrigerator" },
        ],
      },
      recommendation: {
        label: "Featured recommendation",
        text: "The Lab accounts for 33% of consumption. Reviewing the computing equipment schedule could reduce morning peaks.",
      },
      stats: [
        { label: "Consumption view" },
        { label: "Devices monitored" },
        { label: "Registered spaces" },
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
      perMonth: "/ month",
      offerTag: "Launch",
      offer: "Limited-time launch pricing · 14-day trial · Cancel anytime",
      cta: "Start free trial",
      note: "Reference prices in Peruvian soles (S/), billed monthly. The 14-day free trial requires no credit card.",
      prefill: "I want to start with the",
      plans: [
        {
          name: "Starter",
          desc: "To start learning about and organizing your consumption.",
          save: "Save 34%",
          priceNote: "Less than S/ 1 a day",
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
          save: "Save 34%",
          priceNote: "Ideal for offices and businesses",
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
          save: "Save 34%",
          priceNote: "Priority support included",
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
      dot: "View testimonial {n}",
      items: [
        {
          name: "Andrea Morales",
          role: "Administrator",
          quote:
            "I liked that the information is organized by spaces. Before, I spent time trying to make sense of the reports; now I can see at a glance where the consumption goes.",
          alt: "Andrea Morales — Administrator",
        },
        {
          name: "Diego Ramírez",
          role: "Entrepreneur",
          quote:
            "In a small space every kilowatt counts. With JouleTracker I could see which devices weigh the most during the week and adjust schedules effortlessly.",
          alt: "Diego Ramírez — Entrepreneur",
        },
        {
          name: "Valeria Torres",
          role: "Independent professional",
          quote:
            "I use it to track my office's consumption. The history helped me notice patterns I hadn't seen, like the morning peaks.",
          alt: "Valeria Torres — Independent professional",
        },
      ],
    },
    about: {
      eyebrow: "About us",
      title: "We're building a simpler way to understand energy.",
      text: "JouleTracker was born with a clear idea: turn energy information into a simple, visual and useful experience. We combine technology, analysis and a user-centered approach to make consumption easier to understand.",
      floatValue: "−12%",
      floatLabel: "consumption in off-peak hours",
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
      view: "Open in Google Maps",
      directions: "Get directions",
      mapLabel: "UPC San Miguel Campus · Av. La Marina 2810",
      mapTitle: "Map — UPC San Miguel Campus, Av. La Marina 2810, Lima",
      facts: [
        { k: "Landmark", v: "Across from Plaza San Miguel mall, at the corner of Av. La Marina and Av. Universitaria." },
        { k: "Getting there", v: "Metropolitano/bus corridors along Av. La Marina; parking available on campus." },
        { k: "Hours", v: "Monday to Friday, 9:00 – 18:00 (by appointment)." },
      ],
    },
    faq: {
      eyebrow: "FAQ",
      title: "Frequently asked questions",
      subtitle: "The essentials before getting started with JouleTracker.",
      items: [
        {
          q: "What is JouleTracker?",
          a: "JouleTracker is a VoltLab solution to monitor, analyze and understand the energy consumption of your spaces and devices, presenting the information in a clear, visual way.",
        },
        {
          q: "How does JouleTracker work?",
          a: "You register the spaces and devices you want to track, JouleTracker centralizes the consumption information and shows it in a dashboard with charts, comparisons and indicators. From there you can analyze patterns and act.",
        },
        {
          q: "What consumption information can I check?",
          a: "Current consumption, daily and weekly consumption, hourly trends, distribution by space, device status and recommendations based on your energy behavior.",
        },
        {
          q: "Which devices and spaces can I monitor?",
          a: "You can organize tracking by area (office, lab, kitchen, meeting rooms, etc.) and associate the relevant equipment to each one: HVAC, lighting, refrigeration, computing equipment and other identifiable loads.",
        },
        {
          q: "Can I check my consumption history?",
          a: "Yes. The history lets you review previous periods, compare weeks or months and spot trends or changes in consumption.",
        },
        {
          q: "Does JouleTracker identify improvement opportunities?",
          a: "Yes. By comparing spaces, schedules and devices, JouleTracker highlights peaks, off-hours consumption and usage concentrations that usually represent saving opportunities.",
        },
        {
          q: "Does JouleTracker offer recommendations?",
          a: "Yes. It presents concrete, understandable suggestions—such as reviewing a device's schedule or reducing a space's overnight load—aimed at using energy better.",
        },
        {
          q: "Do I need technical knowledge to use it?",
          a: "No. The experience is designed so anyone can understand their consumption without electrical or data-analysis knowledge.",
        },
        {
          q: "What do I need to start using JouleTracker?",
          a: "Just an account and a few minutes to register your spaces and devices. You can start with the 14-day free trial, no credit card required.",
        },
        {
          q: "Is JouleTracker available for homes, offices or companies?",
          a: "Yes. The Starter plan is designed for homes and small spaces, Plus for offices and businesses, and Pro for organizations with multiple spaces and a larger number of devices.",
        },
        {
          q: "Is my consumption data protected?",
          a: "Yes. Your data is transmitted encrypted, used only to show you your information and never shared with third parties. You can request its deletion at any time.",
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
    midCta: {
      eyebrow: "Free trial",
      title: "Find out where your energy goes in less than a week.",
      text: "Start with a 14-day trial, no card required. Set up your spaces in minutes and get your first consumption summary.",
      perks: ["No credit card", "10-minute setup", "Cancel anytime"],
      primary: "See plans",
      secondary: "Talk to us",
    },
    finalCta: {
      title: "Start understanding your energy better.",
      subtitle: "Turn your consumption data into clear, useful information.",
      button: "Start free trial",
      secondary: "Discover JouleTracker",
      trust: "14 days free · No card · Cancel anytime",
    },
    footer: {
      description: "A clearer way to monitor and understand energy consumption.",
      product: "Product",
      resources: "Resources",
      company: "Company",
      benefits: "Benefits",
      help: "Help",
      about: "About us",
      location: "Location",
      privacy: "Privacy Policy",
      terms: "Terms of Service",
      rights: "© 2026 VoltLab. All rights reserved.",
      by: "A VoltLab product",
      madeIn: "Designed in Lima, Peru",
    },
  },
};

/** Reads a dot-separated path from an object. */
export function t(obj, path) {
  return path
    .split(".")
    .reduce((acc, key) => (acc == null ? undefined : acc[key]), obj);
}
