export const languages = {
  es: 'Español',
  en: 'English',
} as const;

export type Language = keyof typeof languages;

export const defaultLang: Language = 'es';

export const ui = {
  es: {
    'hero.eyebrow':
  'INGENIERÍA EN SISTEMAS COMPUTACIONALES · GESTIÓN DE PROYECTOS · TECNOLOGÍA',

'hero.role':
  'Technical Project Manager',

'hero.description':
  'Con experiencia en gestión de proyectos, seguridad de la información, ciberseguridad, gestión de riesgos, auditorías, desarrollo de software, bases de datos y entornos tecnologicos y regulatorios. Apasionada por la tecnología, los retos y el aprendizaje continuo, con capacidad para adaptarme a proyectos complejos y conectar las necesidades del negocio con equipos técnicos y multidisciplinarios.',
  'hero.projects':
      'Explorar proyectos',

    'hero.experience':
      'Ver experiencia',

    'hero.contact':
      'Contacto',

    'hero.workEyebrow':
      'FORMA DE TRABAJO',

    'hero.workTitle':
      'Habilidades blandas',

    'hero.workSubtitle':
      'Competencias profesionales',

    'hero.swipe':
      'Desliza para explorar',

    'hero.previous':
      'Anterior',

    'hero.next':
      'Siguiente',

    'hero.skill.problem.title':
      'Resolución de problemas complejos',

    'hero.skill.problem.description':
      'Analizo escenarios, dependencias y alternativas para convertir retos en acciones concretas.',

    'hero.skill.strategy.title':
      'Planificación estratégica',

    'hero.skill.strategy.description':
      'Organizo objetivos, prioridades, tiempos y recursos con una visión integral del proyecto.',

    'hero.skill.change.title':
      'Adaptabilidad al cambio',

    'hero.skill.change.description':
      'Me adapto a nuevos contextos, equipos, herramientas y necesidades del negocio.',

    'hero.skill.leadership.title':
      'Liderazgo multidisciplinario',

    'hero.skill.leadership.description':
      'Facilito la coordinación entre perfiles técnicos, operativos y de negocio.',

    'hero.skill.results.title':
      'Orientación a resultados',

    'hero.skill.results.description':
      'Mantengo el foco en entregables, compromisos y objetivos medibles.',

    'hero.skill.creative.title':
      'Pensamiento creativo',

    'hero.skill.creative.description':
      'Busco nuevas formas de resolver problemas y mejorar procesos continuamente.',

    'info.location.label':
  'Ubicación',

'info.location.value':
  'EDOMEX, México',

'info.experience.label':
  'Experiencia en gestión de proyectos',

'info.experience.year':
  'año',

'info.experience.years':
  'años',

'info.experience.month':
  'mes',

'info.experience.months':
  'meses',

'info.modality.label':
  'Modalidad de trabajo',

'info.modality.value':
  'Presencial CDMX · Híbrido · Remoto',

'info.modality.availability':
  'Disponibilidad de traslado',

'info.social.label':
  'Perfiles',

'info.social.open':
  'Abrir',

  'achievements.eyebrow':
  'Impacto profesional',

'achievements.projects.label':
  'Proyectos e iniciativas',

'achievements.projects.description':
  'Gestionados en tecnología, software y ciberseguridad',

'achievements.teams.label':
  'Equipos multidisciplinarios',

'achievements.teams.description':
  'Liderados en proyectos concurrentes',

'achievements.audits.label':
  'Auditorías gestionadas',

'achievements.audits.description':
  'Internas y regulatorias en sector financiero',

'achievements.performance.label':
  'Cumplimiento operativo',

'achievements.performance.description':
  'Alcanzado en indicadores del área',

'achievements.metric.kpis':
  'KPIs & KRIs monitoreados',

'achievements.metric.sla':
  'Hallazgos atendidos dentro de SLA',

'achievements.metric.specialists':
  'Especialistas coordinados técnicamente',

'achievements.metric.tools':
  'Herramientas de seguridad implementadas',

  'futureStudies.eyebrow':
  'ROADMAP DE APRENDIZAJE',

'futureStudies.title':
  'Próximos casos de estudio',

'futureStudies.description':
  'Marcos y modelos que planeo estudiar y documentar por su relevancia en gestión de proyectos, operaciones, tecnología y sectores altamente estructurados.',

'futureStudies.status.upcoming':
  'Próximamente',

'futureStudies.relevanceLabel':
  '¿Por qué es relevante?',

'futureStudies.topicsLabel':
  'Temas a explorar',

'futureStudies.documentation':
  'DOCUMENTACIÓN',

'futureStudies.githubUpcoming':
  'GitHub · Próximamente',

'futureStudies.viewStudy':
  'Ver estudio',

'futureStudies.pendingLink':
  'Próximamente',

'futureStudies.note.title':
  'Aprendizaje que se convierte en documentación.',

'futureStudies.note.description':
  'Conforme avance en cada estudio, publicaré notas, diagramas, comparativas y conclusiones en GitHub.',

'futureStudies.prince2.subtitle':
  'Gestión estructurada de proyectos y gobernanza',

'futureStudies.prince2.description':
  'Estudio orientado a profundizar en un enfoque estructurado para la dirección de proyectos, con especial interés en gobernanza, definición de responsabilidades, justificación de negocio, control por etapas y toma de decisiones.',

'futureStudies.etom.subtitle':
  'Marco de procesos de negocio en telecomunicaciones',

'futureStudies.etom.description':
  'Caso de estudio enfocado en comprender la estructura de procesos empresariales de eTOM y su aplicación en organizaciones de telecomunicaciones, operaciones, servicios y transformación tecnológica.',

'futureStudies.relevance.banking':
  'Banca',

'futureStudies.relevance.enterprise':
  'Enterprise',

'futureStudies.relevance.governance':
  'Gobierno',

'futureStudies.relevance.regulated':
  'Sectores regulados',

'futureStudies.relevance.telecom':
  'Telecomunicaciones',

'futureStudies.relevance.operations':
  'Operaciones',

'futureStudies.relevance.transformation':
  'Transformación',

'futureStudies.relevance.serviceManagement':
  'Service Management',

  'skills.eyebrow':
  'Capacidades técnicas',

'skills.title':
  'Hard Skills',

'skills.description':
  'Conocimientos y herramientas aplicados en gestión de proyectos, ciberseguridad, desarrollo de software, infraestructura y entornos empresariales regulados.',

// 01 - Project Management
'skills.pm.title':
  'Gestión de Proyectos',

'skills.pm.description':
  'Planeación, ejecución y seguimiento de iniciativas tecnológicas bajo enfoques ágiles, híbridos y tradicionales.',

'skills.group.tools':
  'Herramientas',

'skills.skill.requirements':
  'Análisis de Requerimientos',

'skills.skill.scope':
  'Gestión de Alcance',

'skills.skill.risk':
  'Gestión de Riesgos',

'skills.skill.dependencies':
  'Gestión de Dependencias',

'skills.skill.technicalDocumentation':
  'Documentación Técnica',

'skills.skill.operationalManuals':
  'Manuales Operativos',

// 02 - Cybersecurity
'skills.cybersecurity.title':
  'Seguridad de Información - Ciberseguridad',

'skills.cybersecurity.description':
  'Gestión, coordinación e implementación de capacidades de seguridad de la información en entornos empresariales y financieros.',

'skills.group.detection':
  'SIEM, XDR y Detección',

'skills.group.identity':
  'Identidad y Acceso',

// 03 - Vulnerability & GRC
'skills.grc.title':
  'Vulnerabilidades & GRC',

'skills.grc.description':
  'Seguimiento de vulnerabilidades, riesgos, controles, hallazgos y procesos de gobierno de seguridad.',

'skills.group.vulnerabilities':
  'Vulnerabilidades',

'skills.group.grc':
  'GRC & Gobierno de Datos',

// 04 - Data / Network
'skills.dataSecurity.title':
  'Protección de Datos, Red & Endpoint',

'skills.dataSecurity.description':
  'Tecnologías orientadas a protección de información, seguridad perimetral, dispositivos y acceso empresarial.',

// 05 - Security Operations
'skills.securityOperations.title':
  'Security Operations & Compliance',

'skills.securityOperations.description':
  'Participación en operación continua, respuesta a incidentes, auditorías y cumplimiento regulatorio.',

'skills.group.operations':
  'Operación',

'skills.group.frameworks':
  'Normativas y Marcos',

'skills.skill.incidentResponse':
  'Respuesta a Incidentes',

'skills.skill.vendorManagement':
  'Gestión de Proveedores',

'skills.skill.support':
  'Soporte',

'skills.skill.hourBanks':
  'Bolsas de Horas',

'skills.skill.internalAudits':
  'Auditorías Internas',

'skills.skill.regulatoryAudits':
  'Auditorías Regulatorias',

// 06 - Software
'skills.software.title':
  'Desarrollo Full Stack & Arquitectura',

'skills.software.description':
  'Base técnica para comprender, diseñar y coordinar soluciones de software de extremo a extremo.',

'skills.group.languages':
  'Lenguajes',

'skills.group.frameworksArchitecture':
  'Frameworks & Arquitectura',

'skills.group.development':
  'Desarrollo',

// 07 - Data
'skills.data.title':
  'Datos & Entornos Industriales',

'skills.data.description':
  'Diseño y trabajo con bases de datos relacionales, NoSQL y plataformas de datos industriales.',

// 08 - UX
'skills.ux.title':
  'UI/UX & Modelado',

'skills.ux.description':
  'Levantamiento visual de procesos, casos de uso, diseño de flujos, prototipado y documentación tecnológica de soluciones.',

// 09 - Productivity
'skills.productivity.title':
  'Productividad & LMS',

'skills.productivity.description':
  'Herramientas utilizadas para documentación, colaboración, capacitación y operación de proyectos.',
// Experience
'experience.eyebrow':
  'Trayectoria profesional',

'experience.title':
  'Experiencia',

'experience.description':
  'Ingeniera con experiencia en la gestión y ejecución de iniciativas tecnológicas en ciberseguridad, desarrollo de software, infraestructura y entornos financieros y regulados. Mi perfil integra capacidades de gestión con una sólida base técnica en levantamiento y análisis de requerimientos, modelado UML, diseño UI/UX, desarrollo Full Stack, diseño y administración de bases de datos SQL y NoSQL, pruebas, documentación técnica y seguimiento operativo. Esta combinación me permite participar en distintas etapas del ciclo de vida de una solución, comprender sus implicaciones técnicas y de negocio, y colaborar eficazmente con equipos de ingeniería, seguridad, infraestructura y áreas de negocio. Cuento además con experiencia coordinando equipos multidisciplinarios y múltiples iniciativas, trabajando con marcos ágiles como Scrum y Kanban y gestionando alcance, entregables, riesgos, dependencias e indicadores. Mi trayectoria se caracteriza por la capacidad de adaptarme tanto a responsabilidades técnicas como de gestión, conectando tecnología, personas y objetivos de negocio para llevar las iniciativas desde su definición hasta su implementación y operación.',

// Experience 01
'experience.t3.role':
  'Ingeniero de Ciberseguridad Jr.',

'experience.t3.location':
  'Insurgentes Sur, CDMX',

'experience.t3.period':
  'MAY 2026 — AGO 2026',

'experience.t3.description1':
  'Lideré la implementación técnica de 4 herramientas, la optimización de 4 procesos de seguridad y la gestión de 4 iniciativas del Plan Director desde su origen, logrando la entrega anticipada de 2 proyectos críticos.',

'experience.t3.description2':
  'Gestioné el seguimiento y remediación de hallazgos de auditoría, coordinando responsables, evidencias y avances para asegurar su atención conforme a los compromisos establecidos.',

'experience.t3.description3':
  'Elaboré y presenté reportes periódicos de avance, indicadores y estatus de iniciativas, proporcionando visibilidad sobre entregables, riesgos, dependencias y acciones pendientes.',

'experience.t3.description4':
  'Coordiné técnicamente a un equipo de 11 especialistas en iniciativas operativas, capacidades técnicas y documentación formal para el despliegue e integración de soluciones como SAP y Lumu.',

'experience.t3.description5':
  'Colaboré en investigaciones del CSIRT, análisis de riesgos de fuga de información junto con Protección de Datos y evaluaciones de tecnologías emergentes mediante Pruebas de Concepto (PoCs).',

// Experience 02
'experience.qualtop.role':
  'Project Manager Jr.',

'experience.qualtop.location':
  'Insurgentes Sur, CDMX',

'experience.qualtop.period':
  'SEP 2025 — MAY 2026',

'experience.qualtop.description1':
  'Gestioné en esquema híbrido un equipo multidisciplinario de 9 especialistas de Vulnerabilidades, Protección de Datos, Threat Hunting/CTI y Monitoreo SIEM, además de la coordinación con un SOC externo, alcanzando 98% de cumplimiento en los indicadores del área.',

'experience.qualtop.description2':
  'Administré actividades BAU y 5 proyectos estratégicos de Seguridad de la Información mediante planes de trabajo, seguimiento de dependencias, priorización y control de entregables.',

'experience.qualtop.description3':
  'Gestioné más de 15 auditorías regulatorias e internas relacionadas con PCI DSS, ISO/IEC 27001, SPEI y Fraudes, alcanzando 100% de resolución de hallazgos dentro de los SLA establecidos y sin penalizaciones.',

'experience.qualtop.description4':
  'Di seguimiento y presenté 25 KPIs y KRIs mensuales y trimestrales mediante tableros ejecutivos para proporcionar visibilidad sobre planes de trabajo, hallazgos, auditorías y desempeño operativo.',

// Experience 03
'experience.merr.role':
  'Becaria Consultora TI',

'experience.merr.location':
  'Miguel Hidalgo, CDMX',

'experience.merr.period':
  'ENE 2025 — JUN 2025',

'experience.merr.description1':
  'Gestioné de extremo a extremo el desarrollo de una aplicación web de guía interactiva de catas, organizando actividades en Trello y modelando flujos de usuario e interfaces en Miro.',

'experience.merr.description2':
  'Desarrollé funcionalidades frontend y backend con Angular, Node.js, Express, MySQL y API REST bajo arquitectura MVC, incluyendo el diseño de la base de datos relacional.',

'experience.merr.description3':
  'Diseñé y ejecuté pruebas basadas en casos de uso y elaboré documentación técnica para facilitar el traspaso y continuidad operativa del sistema.',

'experience.merr.description4':
  'Colaboré en un proyecto confidencial del sector energético mediante la construcción de dashboards en AVEVA PI System y automatización de extracción de datos con PI Builder.',

// Experience 04
'experience.tesePm.role':
  'Project Manager Jr.',

'experience.tesePm.location':
  'Ecatepec, Estado de México',

'experience.tesePm.period':
  'ABR 2022 — DIC 2024',

'experience.tesePm.description1':
  'Lideré más de 17 células multidisciplinarias de 5 a 8 integrantes en proyectos concurrentes relacionados con desarrollo de software, incubación de iniciativas y análisis organizacional.',

'experience.tesePm.description2':
  'Implementé marcos ágiles como Scrum y Kanban, además de enfoques tradicionales como Waterfall, adaptando la gestión al contexto y ciclo de vida de cada proyecto.',

'experience.tesePm.description3':
  'Me desempeñé de forma flexible como Project Manager Jr., Product Owner Jr., Agilista y Especialista en Requerimientos, conectando necesidades directivas, funcionales y técnicas.',

'experience.tesePm.description4':
  'Gestioné trazabilidad, requerimientos y documentación mediante Jira, Confluence, Trello, Asana, Lucidchart, Figma, Proto.io, Whimsical, Balsamiq, Dr. Explain y OneNote.',

// Experience 05
'experience.teseEducation.role':
  'Diseñadora Instruccional · Servicio Social',

'experience.teseEducation.location':
  'Ecatepec, Estado de México',

'experience.teseEducation.period':
  'SEP 2022 — FEB 2023',

'experience.teseEducation.description1':
  'Diseñé y estructuré contenidos para los cursos de Ingeniería de Software y Matemáticas Discretas en Moodle, integrando paquetes SCORM, recursos interactivos y elementos gráficos.',

'experience.teseEducation.description2':
  'Automaticé flujos para reutilizar plantillas y capacité al personal académico en tecnologías educativas, facilitando la adopción digital y la continuidad operativa del LMS.',

  
// Volunteering & Contributions
'volunteering.eyebrow':
  'Experiencia más allá del trabajo',

'volunteering.title':
  'Voluntariado & contribuciones',

'volunteering.description':
  'Espacios donde he aplicado conocimientos de tecnología, infraestructura, documentación y educación en iniciativas adicionales a mi experiencia profesional.',

// Innovak
'volunteering.innovak.role':
  'Consultora de Infraestructura TI',

'volunteering.innovak.period':
  'JUL 2024 — DIC 2024',

'volunteering.innovak.description':
  'Participé en actividades de consultoría tecnológica orientadas a infraestructura TI, apoyando en análisis, documentación y definición de soluciones técnicas de acuerdo con las necesidades del proyecto.',

// Soveetnik
'volunteering.soveetnik.role':
  'Diseñadora Instruccional & Contenidos',

'volunteering.soveetnik.period':
  'NOV 2022 — NOV 2024',

'volunteering.soveetnik.description':
  'Colaboré en la creación, estructuración y mejora de contenidos educativos y materiales digitales, aplicando principios de diseño instruccional, documentación y organización de información.',

// Contact
'contact.title.line1':
  'Hablemos de ideas',

'contact.title.line2':
  'y hagámoslas realidad.',

'contact.description':
  'Estoy en completa disponibilidad para nuevos proyectos, colaboraciones y oportunidades profesionales. Si tienes un reto tecnológico, una iniciativa por estructurar o simplemente quieres conversar sobre gestión, tecnología o ciberseguridad, me encantará conocerte.',

'contact.availability.title':
  'DISPONIBILIDAD TOTAL',

'contact.availability.message':
  'Lista para comenzar',

// Professional values
'contact.commitment.title':
  'Compromiso con el resultado',

'contact.commitment.description':
  'Me involucro con los objetivos del proyecto y del negocio, buscando entregar con calidad, orden y responsabilidad.',

'contact.learning.title':
  'Aprendizaje continuo',

'contact.learning.description':
  'Busco ampliar mis conocimientos, adoptar nuevas herramientas y mejorar constantemente mi forma de trabajar.',

'contact.technical.title':
  'Afinidad con lo técnico',

'contact.technical.description':
  'No le temo a los retos técnicos: me interesa entenderlos, hacer las preguntas correctas y crecer junto con los equipos.',

// Contact card
'contact.connect':
  'Conecta conmigo',

'contact.copyEmail':
  'Copiar correo electrónico',

'contact.copyEmailTitle':
  'Copiar correo',

'contact.emailCopied':
  'Correo copiado ✓',

// Location
'contact.location.label':
  'Ubicación',

'contact.location.value':
  'EDOMEX · CDMX, México',

'contact.location.availability':
  'Disponibilidad de traslado',

// Work modality
'contact.modality.label':
  'Modalidad',

'contact.modality.value':
  'Presencial · Híbrido · Remoto',

'contact.modality.availability':
  'Disponible para nuevas oportunidades',

// Cover Letter
'contact.coverLetter.eyebrow':
  'DOCUMENTO PROFESIONAL',

'contact.coverLetter.title':
  'Carta de presentación',

'contact.coverLetter.description':
  'Conoce más sobre mi trayectoria, motivación profesional y forma de trabajar.',

'contact.coverLetter.updated':
  'Actualizada',

'contact.coverLetter.note':
  'Conoce mi enfoque profesional, experiencia y motivación para asumir nuevos retos tecnológicos.',

'contact.coverLetter.download':
  'Descargar carta',
},

  en: {
    'hero.eyebrow':
  'COMPUTER SYSTEMS ENGINEERING · PROJECT MANAGEMENT · TECHNOLOGY',

'hero.role':
  'Technical Project Manager',

'hero.description':
  'With experience in project management, information security, cybersecurity, risk management, audits, software engineering, databases, and banking and regulated environments. Passionate about technology, challenging projects, and continuous learning, with the ability to adapt to complex environments and connect business needs with technical and cross-functional teams.',
  
  'hero.projects':
      'Explore projects',

    'hero.experience':
      'View experience',

    'hero.contact':
      'Contact',

    'hero.workEyebrow':
      'WORKING STYLE',

    'hero.workTitle':
      'Soft skills',

    'hero.workSubtitle':
      'Professional strengths',

    'hero.swipe':
      'Swipe to explore',

    'hero.previous':
      'Previous',

    'hero.next':
      'Next',

    'hero.skill.problem.title':
      'Complex problem solving',

    'hero.skill.problem.description':
      'I analyze scenarios, dependencies and alternatives to turn challenges into concrete actions.',

    'hero.skill.strategy.title':
      'Strategic planning',

    'hero.skill.strategy.description':
      'I organize objectives, priorities, timelines and resources with an end-to-end project view.',

    'hero.skill.change.title':
      'Adaptability to change',

    'hero.skill.change.description':
      'I adapt quickly to new environments, teams, tools and business requirements.',

    'hero.skill.leadership.title':
      'Cross-functional leadership',

    'hero.skill.leadership.description':
      'I facilitate coordination across technical, operational and business teams.',

    'hero.skill.results.title':
      'Results orientation',

    'hero.skill.results.description':
      'I maintain focus on deliverables, commitments and measurable objectives.',

    'hero.skill.creative.title':
      'Creative thinking',

    'hero.skill.creative.description':
      'I look for new ways to solve problems and continuously improve processes.',

        'info.location.label':
  'Location',

'info.location.value':
  'State of Mexico, Mexico',

'info.experience.label':
  'Project management experience',

'info.experience.year':
  'year',

'info.experience.years':
  'years',

'info.experience.month':
  'month',

'info.experience.months':
  'months',

'info.modality.label':
  'Work modality',

'info.modality.value':
  'On-site Mexico City · Hybrid · Remote',

'info.modality.availability':
  'Available to travel',

'info.social.label':
  'Profiles',

'info.social.open':
  'Open',

  'achievements.eyebrow':
  'Professional impact',

'achievements.projects.label':
  'Projects and initiatives',

'achievements.projects.description':
  'Managed across technology, software and cybersecurity',

'achievements.teams.label':
  'Cross-functional teams',

'achievements.teams.description':
  'Led across concurrent projects',

'achievements.audits.label':
  'Audits managed',

'achievements.audits.description':
  'Internal and regulatory audits in the financial sector',

'achievements.performance.label':
  'Operational compliance',

'achievements.performance.description':
  'Achieved across area performance indicators',

'achievements.metric.kpis':
  'KPIs & KRIs monitored',

'achievements.metric.sla':
  'Findings addressed within SLA',

'achievements.metric.specialists':
  'Specialists technically coordinated',

'achievements.metric.tools':
  'Security tools implemented',

  'futureStudies.eyebrow':
  'LEARNING ROADMAP',

'futureStudies.title':
  'Upcoming case studies',

'futureStudies.description':
  'Frameworks and models I plan to study and document due to their relevance to project management, operations, technology and highly structured industries.',

'futureStudies.status.upcoming':
  'Upcoming',

'futureStudies.relevanceLabel':
  'Why is it relevant?',

'futureStudies.topicsLabel':
  'Topics to explore',

'futureStudies.documentation':
  'DOCUMENTATION',

'futureStudies.githubUpcoming':
  'GitHub · Coming soon',

'futureStudies.viewStudy':
  'View study',

'futureStudies.pendingLink':
  'Coming soon',

'futureStudies.note.title':
  'Learning turned into documentation.',

'futureStudies.note.description':
  'As I progress through each study, I will publish notes, diagrams, comparisons and conclusions on GitHub.',

'futureStudies.prince2.subtitle':
  'Structured project management and governance',

'futureStudies.prince2.description':
  'A study focused on developing a deeper understanding of structured project management, with particular interest in governance, responsibility definition, business justification, stage control and decision-making.',

'futureStudies.etom.subtitle':
  'Business process framework for telecommunications',

'futureStudies.etom.description':
  'A case study focused on understanding the eTOM business process framework and its application across telecommunications organizations, operations, services and technology transformation.',

'futureStudies.relevance.banking':
  'Banking',

'futureStudies.relevance.enterprise':
  'Enterprise',

'futureStudies.relevance.governance':
  'Governance',

'futureStudies.relevance.regulated':
  'Regulated industries',

'futureStudies.relevance.telecom':
  'Telecommunications',

'futureStudies.relevance.operations':
  'Operations',

'futureStudies.relevance.transformation':
  'Transformation',

'futureStudies.relevance.serviceManagement':
  'Service Management',

  'skills.eyebrow':
  'Technical capabilities',

'skills.title':
  'Hard Skills',

'skills.description':
  'Knowledge and tools applied across project management, cybersecurity, software development, infrastructure and regulated enterprise environments.',

// 01 - Project Management
'skills.pm.title':
  'Project Management',

'skills.pm.description':
  'Planning, execution and monitoring of technology initiatives using agile, hybrid and traditional approaches.',

'skills.group.tools':
  'Tools',

'skills.skill.requirements':
  'Requirements Analysis',

'skills.skill.scope':
  'Scope Management',

'skills.skill.risk':
  'Risk Management',

'skills.skill.dependencies':
  'Dependency Management',

'skills.skill.technicalDocumentation':
  'Technical Documentation',

'skills.skill.operationalManuals':
  'Operational Manuals',

// 02 - Cybersecurity
'skills.cybersecurity.title':
  'Information Security & Cybersecurity',

'skills.cybersecurity.description':
  'Management, coordination and implementation of information security capabilities in enterprise and financial environments.',

'skills.group.detection':
  'SIEM, XDR & Detection',

'skills.group.identity':
  'Identity & Access',

// 03 - Vulnerability & GRC
'skills.grc.title':
  'Vulnerability Management & GRC',

'skills.grc.description':
  'Monitoring of vulnerabilities, risks, controls, findings and security governance processes.',

'skills.group.vulnerabilities':
  'Vulnerabilities',

'skills.group.grc':
  'GRC & Data Governance',

// 04 - Data / Network
'skills.dataSecurity.title':
  'Data, Network & Endpoint Protection',

'skills.dataSecurity.description':
  'Technologies focused on information protection, perimeter security, devices and enterprise access.',

// 05 - Security Operations
'skills.securityOperations.title':
  'Security Operations & Compliance',

'skills.securityOperations.description':
  'Experience in continuous operations, incident response, audits and regulatory compliance.',

'skills.group.operations':
  'Operations',

'skills.group.frameworks':
  'Standards & Frameworks',

'skills.skill.incidentResponse':
  'Incident Response',

'skills.skill.vendorManagement':
  'Vendor Management',

'skills.skill.support':
  'Support',

'skills.skill.hourBanks':
  'Service Hour Banks',

'skills.skill.internalAudits':
  'Internal Audits',

'skills.skill.regulatoryAudits':
  'Regulatory Audits',

// 06 - Software
'skills.software.title':
  'Full Stack Development & Architecture',

'skills.software.description':
  'Technical foundation for understanding, designing and coordinating end-to-end software solutions.',

'skills.group.languages':
  'Languages',

'skills.group.frameworksArchitecture':
  'Frameworks & Architecture',

'skills.group.development':
  'Development',

// 07 - Data
'skills.data.title':
  'Data & Industrial Environments',

'skills.data.description':
  'Design and work with relational databases, NoSQL technologies and industrial data platforms.',

// 08 - UX
'skills.ux.title':
  'UI/UX & Modeling',

'skills.ux.description':
  'Visual modeling of processes, use cases, user flows, prototyping and technology solution documentation.',

// 09 - Productivity
'skills.productivity.title':
  'Productivity & LMS',

'skills.productivity.description':
  'Tools used for documentation, collaboration, training and project operations.',

  // Experience
'experience.eyebrow':
  'Professional background',

'experience.title':
  'Experience',

'experience.description':
  'Engineer with experience managing and executing technology initiatives across cybersecurity, software development, infrastructure, and financial and regulated environments. My profile combines project management capabilities with a strong technical foundation in requirements gathering and analysis, UML modeling, UI/UX design, Full Stack development, SQL and NoSQL database design and administration, testing, technical documentation, and operational follow-up. This combination allows me to contribute across different stages of the solution lifecycle, understand both technical and business implications, and collaborate effectively with engineering, security, infrastructure, and business teams. I also have experience coordinating cross-functional teams and multiple concurrent initiatives, working with agile frameworks such as Scrum and Kanban while managing scope, deliverables, risks, dependencies, and performance indicators. My career has been shaped by the ability to adapt to both technical and management responsibilities, connecting technology, people, and business objectives from initial definition through implementation and operations.',

// Experience 01
'experience.t3.role':
  'Junior Cybersecurity Engineer',

'experience.t3.location':
  'Insurgentes Sur, Mexico City',

'experience.t3.period':
  'MAY 2026 — AUG 2026',

'experience.t3.description1':
  'Led the technical implementation of 4 tools, optimization of 4 security processes, and management of 4 initiatives from the Security Master Plan from their initial stages, achieving early delivery of 2 critical projects.',

'experience.t3.description2':
  'Managed the tracking and remediation of audit findings, coordinating owners, evidence, and progress to ensure completion according to established commitments.',

'experience.t3.description3':
  'Prepared and presented periodic progress reports, performance indicators, and initiative status updates, providing visibility into deliverables, risks, dependencies, and pending actions.',

'experience.t3.description4':
  'Technically coordinated a team of 11 specialists across operational initiatives, technical capabilities, and formal documentation for the deployment and integration of solutions such as SAP and Lumu.',

'experience.t3.description5':
  'Collaborated on CSIRT investigations, data leakage risk assessments with the Data Protection team, and evaluations of emerging technologies through Proofs of Concept (PoCs).',

// Experience 02
'experience.qualtop.role':
  'Junior Project Manager',

'experience.qualtop.location':
  'Insurgentes Sur, Mexico City',

'experience.qualtop.period':
  'SEP 2025 — MAY 2026',

'experience.qualtop.description1':
  'Managed a hybrid cross-functional team of 9 specialists across Vulnerability Management, Data Protection, Threat Hunting/CTI, and SIEM Monitoring, in addition to coordinating with an external SOC, achieving 98% compliance with area performance indicators.',

'experience.qualtop.description2':
  'Managed BAU activities and 5 strategic Information Security projects through work plans, dependency tracking, prioritization, and deliverable control.',

'experience.qualtop.description3':
  'Managed more than 15 regulatory and internal audits related to PCI DSS, ISO/IEC 27001, SPEI, and Fraud, achieving 100% resolution of findings within established SLAs and without penalties.',

'experience.qualtop.description4':
  'Tracked and presented 25 monthly and quarterly KPIs and KRIs through executive dashboards, providing visibility into work plans, findings, audits, and operational performance.',

// Experience 03
'experience.merr.role':
  'IT Consulting Intern',

'experience.merr.location':
  'Miguel Hidalgo, Mexico City',

'experience.merr.period':
  'JAN 2025 — JUN 2025',

'experience.merr.description1':
  'Managed the end-to-end development of an interactive wine tasting guide web application, organizing activities in Trello and modeling user flows and interfaces in Miro.',

'experience.merr.description2':
  'Developed frontend and backend functionality using Angular, Node.js, Express, MySQL, and REST APIs under an MVC architecture, including relational database design.',

'experience.merr.description3':
  'Designed and executed use-case-based tests and produced technical documentation to support system handoff and operational continuity.',

'experience.merr.description4':
  'Collaborated on a confidential energy-sector project by building dashboards in AVEVA PI System and automating data extraction with PI Builder.',

// Experience 04
'experience.tesePm.role':
  'Junior Project Manager',

'experience.tesePm.location':
  'Ecatepec, State of Mexico',

'experience.tesePm.period':
  'APR 2022 — DEC 2024',

'experience.tesePm.description1':
  'Led more than 17 cross-functional teams of 5 to 8 members across concurrent projects involving software development, initiative incubation, and organizational analysis.',

'experience.tesePm.description2':
  'Implemented agile frameworks such as Scrum and Kanban as well as traditional approaches such as Waterfall, adapting project management practices to the context and lifecycle of each initiative.',

'experience.tesePm.description3':
  'Worked flexibly as Junior Project Manager, Junior Product Owner, Agile Practitioner, and Requirements Specialist, connecting executive, functional, and technical needs.',

'experience.tesePm.description4':
  'Managed traceability, requirements, and documentation using Jira, Confluence, Trello, Asana, Lucidchart, Figma, Proto.io, Whimsical, Balsamiq, Dr. Explain, and OneNote.',

// Experience 05
'experience.teseEducation.role':
  'Instructional Designer · Community Service',

'experience.teseEducation.location':
  'Ecatepec, State of Mexico',

'experience.teseEducation.period':
  'SEP 2022 — FEB 2023',

'experience.teseEducation.description1':
  'Designed and structured content for Software Engineering and Discrete Mathematics courses in Moodle, integrating SCORM packages, interactive resources, and visual elements.',

'experience.teseEducation.description2':
  'Automated workflows for template reuse and trained academic staff in educational technologies, supporting digital adoption and LMS operational continuity.',
  
// Volunteering & Contributions
'volunteering.eyebrow':
  'Experience beyond work',

'volunteering.title':
  'Volunteering & contributions',

'volunteering.description':
  'Spaces where I have applied technology, infrastructure, documentation, and education knowledge to initiatives beyond my professional responsibilities.',

// Innovak
'volunteering.innovak.role':
  'IT Infrastructure Consultant',

'volunteering.innovak.period':
  'JUL 2024 — DEC 2024',

'volunteering.innovak.description':
  'Contributed to technology consulting activities focused on IT infrastructure, supporting analysis, documentation, and the definition of technical solutions according to project needs.',

// Soveetnik
'volunteering.soveetnik.role':
  'Instructional & Content Designer',

'volunteering.soveetnik.period':
  'NOV 2022 — NOV 2024',

'volunteering.soveetnik.description':
  'Collaborated on the creation, structuring, and improvement of educational content and digital materials, applying instructional design, documentation, and information organization principles.',


// Contact
'contact.title.line1':
  "Let's talk about ideas",

'contact.title.line2':
  'and make them happen.',

'contact.description':
  "I'm fully available for new projects, collaborations, and professional opportunities. If you have a technology challenge, an initiative to structure, or simply want to talk about project management, technology, or cybersecurity, I'd be happy to connect.",

'contact.availability.title':
  'FULL AVAILABILITY',

'contact.availability.message':
  'Ready to get started',

// Professional values
'contact.commitment.title':
  'Commitment to results',

'contact.commitment.description':
  'I engage with both project and business objectives, focusing on delivering with quality, structure, and accountability.',

'contact.learning.title':
  'Continuous learning',

'contact.learning.description':
  'I continuously expand my knowledge, adopt new tools, and improve the way I work.',

'contact.technical.title':
  'Technical mindset',

'contact.technical.description':
  "I'm comfortable with technical challenges: I want to understand them, ask the right questions, and grow alongside technical teams.",

// Contact card
'contact.connect':
  'Connect with me',

'contact.copyEmail':
  'Copy email address',

'contact.copyEmailTitle':
  'Copy email',

'contact.emailCopied':
  'Email copied ✓',

// Location
'contact.location.label':
  'Location',

'contact.location.value':
  'State of Mexico · Mexico City, Mexico',

'contact.location.availability':
  'Available to travel',

// Work modality
'contact.modality.label':
  'Work modality',

'contact.modality.value':
  'On-site · Hybrid · Remote',

'contact.modality.availability':
  'Available for new opportunities',

// Cover Letter
'contact.coverLetter.eyebrow':
  'PROFESSIONAL DOCUMENT',

'contact.coverLetter.title':
  'Cover Letter',

'contact.coverLetter.description':
  'Learn more about my professional background, motivation, and approach to work.',

'contact.coverLetter.updated':
  'Updated',

'contact.coverLetter.note':
  'Learn more about my professional approach, experience, and motivation to take on new technology challenges.',

'contact.coverLetter.download':
  'Download cover letter',
},
} as const;