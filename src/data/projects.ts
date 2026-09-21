export type ProjectCategory =
  | "Residencial"
  | "Espacio Público"
  | "Urbanismo"
  | "Interiorismo"
  | "Educacional";

export interface Project {
  id: string;
  title: string;
  titleEn?: string;
  category: ProjectCategory;
  year: string;
  url: string;
  image?: string;
  description?: string;
  descriptionEn?: string;
}

export function getTitle(project: Project, locale: string): string {
  return locale === "en" && project.titleEn ? project.titleEn : project.title;
}

export function getDescription(
  project: Project,
  locale: string
): string | undefined {
  return locale === "en" && project.descriptionEn
    ? project.descriptionEn
    : project.description;
}

export const projects: Project[] = [
  {
    id: "rehabilitacion-consistorial-marbella",
    title: "Rehabilitación Edificio Consistorial Ayto. Marbella",
    titleEn: "Marbella City Hall Rehabilitation",
    category: "Espacio Público",
    year: "2026",
    description:
      "Rehabilitación integral del Ayuntamiento de Marbella: un edificio histórico renovado para ser más accesible, sostenible y eficiente al servicio de los ciudadanos.",
    descriptionEn:
      "A full rehabilitation of Marbella's City Hall: a historic building renovated to be more accessible, sustainable and efficient in serving its citizens.",
    url: "https://momaa.es/rehabilitacion-edfificio-consistorial-exmo-ayuntamiento-de-marbella/",
    image: "/ayuntamiento-marbella.jpg",
  },
  {
    id: "centro-usos-multiples-ermita-calvario",
    title: "Centro de Usos Múltiples junto a la Ermita del Calvario",
    titleEn: "Multi-Use Centre at the Ermita del Calvario",
    category: "Espacio Público",
    year: "2026",
    description:
      "Nuevo centro de usos múltiples junto a la Ermita del Calvario: cubiertas plegadas y lucernarios que aprovechan la luz natural en una estructura ligera y contemporánea, integrada de forma sostenible en el entorno histórico y la arboleda.",
    descriptionEn:
      "A new multipurpose centre next to the Ermita del Calvario: folded roofs and skylights that take advantage of natural light in a light, contemporary structure, sustainably integrated into the historic surroundings and the trees.",
    url: "https://momaa.es/reforma-del-centro-de-tecnificacion-de-gimnasia-ritmica-en-marbella-2/",
  },
  {
    id: "the-deck-benahavis",
    title: 'Edificio Programático "The Deck", Benahavís',
    titleEn: '"The Deck" Programmatic Building, Benahavís',
    category: "Urbanismo",
    year: "2025",
    description:
      '"The Deck", Benahavís: edificio de restauración y coworking con arquitectura estratificada, cubierta-mirador hacia la montaña y un volumen que convierte una parcela triangular en una solución eficiente e integrada.',
    descriptionEn:
      '"The Deck", Benahavís: a restaurant and coworking building with layered architecture, a mountain-facing viewpoint roof, and a volume that turns a triangular plot into an efficient, integrated solution.',
    url: "https://momaa.es/edificio-programatico-the-deck-benahavis/",
    image: "/the-deck.jpeg",
  },
  {
    id: "biblioteca-san-pedro",
    title: "Biblioteca Municipal de San Pedro de Alcántara",
    titleEn: "San Pedro de Alcántara Municipal Library",
    category: "Espacio Público",
    year: "2025",
    description:
      "Nueva Biblioteca de San Pedro de Alcántara: un espacio cultural de diseño innovador y sostenible, pensado como punto de encuentro y referente cultural para la comunidad.",
    descriptionEn:
      "The new San Pedro de Alcántara Library: an innovative, sustainable cultural space conceived as a community hub and cultural landmark for the area.",
    url: "https://momaa.es/2025-el-estudio-de-arquitectura-momaa-celebra-la-ejecucion-de-su-proyecto-para-la-biblioteca-de-san-pedro-de-alcantara/",
  },
  {
    id: "casa-allure-marbella",
    title: "Casa Allure, Marbella",
    category: "Residencial",
    description:
      "Casa Allure, en Cascada de Camoján: una villa de alta gama en Marbella donde calidad, funcionalidad y elegancia se combinan, desarrollada por un equipo multidisciplinar liderado por Andrés M. Mateo.",
    descriptionEn:
      "Casa Allure, in Cascada de Camoján: a high-end villa in Marbella where quality, functionality and elegance come together, developed by a multidisciplinary team led by Andrés M. Mateo.",
    year: "2025",
    url: "https://momaa.es/casa-allure_marbella/",
    image: "/casa-allure-marbella.jpg",
  },
  {
    id: "cubierta-pabellon-carlos-cabezas",
    title: "Cubierta Pista Deportiva Pabellón Carlos Cabezas, Marbella",
    titleEn: "Sports Court Roof, Carlos Cabezas Pavilion, Marbella",
    category: "Espacio Público",
    description:
      "Cubierta del Pabellón Carlos Cabezas, Marbella: una nueva techumbre de 1.222 m² para la pista deportiva exterior, que permite su uso confortable durante todo el año sin depender del clima.",
    descriptionEn:
      "Carlos Cabezas Pavilion Roof, Marbella: a new 1,222 m² canopy for the outdoor sports court, allowing comfortable year-round use regardless of the weather.",
    year: "2024",
    url: "https://momaa.es/cubierta-pista-deportiva-pabellon-carlos-cabeza-marbella/",
    image: "/pabellon-carlos-cabezas.jpg",
  },
  {
    id: "el-trapiche-casa-8",
    title: "El Trapiche, Casa 8, Marbella",
    titleEn: "El Trapiche, House 8, Marbella",
    category: "Residencial",
    description:
      "Casa 8, El Trapiche: vivienda en parcela esquinera con vistas al mar, la montaña y la histórica fábrica de azúcar, organizada entre dormitorios en planta alta y un salón-porche junto a la piscina.",
    descriptionEn:
      "House 8, El Trapiche: a home on a corner plot with views of the sea, the mountains and the historic sugar factory, organised with bedrooms upstairs and a living room-porch by the pool.",
    year: "2023",
    url: "https://momaa.es/el-trapiche_casa-8_marbella/",
    image: "/trapiche.jpeg",
  },
  {
    id: "casa-l-nueva-andalucia",
    title: "Casa L. Luis de Góngora, Nueva Andalucía, Marbella",
    titleEn: "House L. Luis de Góngora, Nueva Andalucía, Marbella",
    category: "Residencial",
    year: "2023",
    url: "https://momaa.es/casa-l-nueva-andalucia-marbella/",
    image: "/luis-gongora.jpg",
  },
  {
    id: "santa-maria-golf-casa-11",
    title: "Santa María Golf, Casa 11, Marbella",
    titleEn: "Santa María Golf, House 11, Marbella",
    category: "Residencial",
    year: "2023",
    url: "https://momaa.es/santa-maria-golf_casa-11_marbella/",
    image: "/santamaria-golf.jpeg",
  },
  {
    id: "intervencion-parque-al-andalus",
    title: "Creando Ciudad — Intervención Urbana Parque Al Ándalus",
    titleEn: "Creating City — Urban Intervention Al Ándalus Park",
    category: "Urbanismo",
    year: "2023",
    description:
      "Intervención urbana junto al Colegio Público Al-Ándalus en San Pedro Alcántara: una pequeña cirugía urbana sobre una jardinera arbórea que crea una nueva zona verde de uso compartido para el alumnado y los vecinos.",
    descriptionEn:
      "An urban intervention next to the Al-Ándalus Public School in San Pedro Alcántara: a small urban 'surgical' operation on a tree-lined planter, creating a new green area shared by students and local residents.",
    url: "https://momaa.es/20230921-creando-ciudad-intervencion-urbana-parque-al-andalus/",
  },
  {
    id: "las-joyas-estepona",
    title: '68 Viviendas "Las Joyas", Estepona',
    titleEn: '68 Homes "Las Joyas", Estepona',
    category: "Residencial",
    description:
      "68 viviendas de diseño contemporáneo en La Resina Golf, con volumetría de líneas limpias, baja densidad y amplias terrazas integradas al paisaje de la Costa del Sol.",
    descriptionEn:
      "68 contemporary-design homes at La Resina Golf, with clean-lined volumes, low density and wide terraces integrated into the Costa del Sol landscape.",
    year: "2022",
    url: "https://momaa.es/68-viviendas-en-estepona/",
    image: "/lasjoyas-estepona.jpg",
  },
  {
    id: "apartamento-atico-bahia-marbella",
    title: "Reforma Apartamento Ático, Bahía de Marbella",
    titleEn: "Penthouse Apartment Renovation, Bahía de Marbella",
    category: "Residencial",
    year: "2022",
    url: "https://momaa.es/reforma-de-apartamento-atico-en-bahia-de-marbella/",
    image: "/bahia-marbella.jpg",
  },
  {
    id: "two-houses-fuengirola",
    title: "Two Houses in Fuengirola",
    category: "Residencial",
    year: "2022",
    description:
      "Dos viviendas independientes en una misma parcela de Fuengirola, orientadas paralelas a la costa para maximizar la luz y las vistas, con plantas bajas diáfanas para la convivencia y plantas altas privadas para los dormitorios.",
    descriptionEn:
      "Two independent houses on a single plot in Fuengirola, oriented parallel to the coastline to maximise light and views, with open-plan ground floors for shared living and private upper floors for the bedrooms.",
    url: "https://momaa.es/two-houses-in-fuengirola/",
  },
  {
    id: "piscina-solarium-alicates-playas",
    title: "Piscina y Solarium en Alicates Playas, Marbella",
    titleEn: "Pool and Solarium at Alicates Playas, Marbella",
    category: "Interiorismo",
    year: "2022",
    url: "https://momaa.es/piscina-y-solarium-en-alicates-playas-marbella/",
    image: "/alicates-marbella.jpg",
  },
  {
    id: "fuente-bautismal-san-pedro",
    title: "Fuente Bautismal, San Pedro Alcántara, Marbella",
    titleEn: "Baptismal Fountain, San Pedro Alcántara, Marbella",
    category: "Espacio Público",
    year: "2022",
    url: "https://momaa.es/eliminacion-de-barreras-arquitectonicas-san-pedro-alcantara-marbella-2/",
    image: "/fuente_bautismal.jpg",
  },
  {
    id: "49-viviendas-casares",
    title: "49 Viviendas en Casares — Royal Casares Homes",
    titleEn: "49 Homes in Casares — Royal Casares Homes",
    category: "Residencial",
    year: "2021",
    url: "https://momaa.es/49-viviendas-en-casares/",
    image: "/49-casares.jpg",
  },
  {
    id: "aparcamiento-ojen",
    title: "Aparcamiento Subterráneo junto al Centro Médico, Ojén",
    titleEn: "Underground Car Park at Medical Centre, Ojén",
    category: "Urbanismo",
    year: "2021",
    description:
      "Aparcamiento bajo rasante junto al consultorio médico de Ojén: una propuesta ganadora de SiteSur y Urinci con la dirección arquitectónica de MoMaA, que responde al déficit de aparcamientos del casco urbano y mejora la accesibilidad de vecinos y visitantes.",
    descriptionEn:
      "An underground car park next to the Ojén medical centre: a winning proposal by SiteSur and Urinci with architectural direction by MoMaA, addressing the town centre's parking shortage and improving accessibility for residents and visitors.",
    url: "https://momaa.es/aparcamiento-sub-terraneo-junto-al-centro-medico-ojen/",
  },
  {
    id: "casa-torreon-marbella",
    title: "Casa Torreón, Ampliación y Rehabilitación, Marbella",
    titleEn: "Casa Torreón, Extension and Renovation, Marbella",
    category: "Residencial",
    year: "2021",
    description:
      "Ampliación y rehabilitación de vivienda unifamiliar en Marbella: un nuevo volumen anexo con dormitorio, sala de juegos y solárium, más una mejora integral de la envolvente térmica que sitúa la vivienda en los estándares del Passive House.",
    descriptionEn:
      "Extension and renovation of a single-family home in Marbella: a new annex volume with a bedroom, playroom and solarium, plus a full upgrade of the thermal envelope bringing the home up to Passive House standards.",
    url: "https://momaa.es/casa-torreon-ampliacion-y-rehabilitacion-de-vivienda-unifamiliar-marbella/",
  },
  {
    id: "escuela-danza-musica-san-pedro",
    title: "Escuela de Danza y Música, San Pedro de Alcántara",
    titleEn: "Dance and Music School, San Pedro de Alcántara",
    category: "Espacio Público",
    year: "2021",
    description:
      "Concurso para la Escuela de Danza y Música en el barrio del Ingenio, San Pedro Alcántara: un volumen de una sola planta y escala humana, con fachada continua inspirada en una partitura, que dialoga con el pasado industrial y activa el desarrollo urbano de la zona.",
    descriptionEn:
      "Competition entry for the Dance and Music School in the Ingenio neighbourhood, San Pedro Alcántara: a single-storey, human-scale volume with a continuous façade inspired by a musical score, dialoguing with the area's industrial past and helping activate its urban development.",
    url: "https://momaa.es/escuela-de-danza-y-musica-san-pedro-de-alcantara-marbella/",
  },
  {
    id: "casa-tres-patios-marbella",
    title: "Casa Tres Patios, Vivienda Entre Medianeras, Marbella",
    titleEn: "Casa Tres Patios, Party Wall House, Marbella",
    category: "Residencial",
    year: "2021",
    description:
      "Vivienda entre medianeras en el casco histórico de Marbella: una arquitectura vernácula de estilo andaluz, con materiales tradicionales, que se mimetiza con la trama urbana sin renunciar a la calidad espacial y programática de un diseño contemporáneo.",
    descriptionEn:
      "A party-wall house in Marbella's historic centre: vernacular, Andalusian-style architecture in traditional materials that blends into the urban fabric without giving up the spatial and programmatic quality of a contemporary design.",
    url: "https://momaa.es/casa-tres-patios-vivienda-entre-medianeras-marbella/",
  },
  {
    id: "eliminacion-barreras-san-pedro",
    title: "Eliminación de Barreras Arquitectónicas, San Pedro Alcántara",
    titleEn: "Architectural Barriers Removal, San Pedro Alcántara",
    category: "Espacio Público",
    year: "2021",
    description:
      "Plan de regeneración urbana en San Pedro Alcántara para mejorar la accesibilidad y eliminar barreras arquitectónicas: adaptación de pasos de peatones, reparación de pavimentos, alcorques y mobiliario urbano afectado por raíces de árboles.",
    descriptionEn:
      "An urban regeneration plan in San Pedro Alcántara to improve accessibility and remove architectural barriers: adapting pedestrian crossings and repairing paving, tree pits and street furniture affected by tree roots.",
    url: "https://momaa.es/eliminacion-de-barreras-arquitectonicas-san-pedro-alcantara-marbella/",
  },
  {
    id: "pasarela-madera-marbella",
    title: "Pasarela Madera Marbella, Málaga",
    titleEn: "Timber Walkway Marbella, Málaga",
    category: "Urbanismo",
    year: "2021",
    description:
      "Pasarela provisional de materialidad efímera en un tramo del río Guadaiza en Marbella, pensada para proteger el cauce y su ecosistema sin renunciar al paso de los vecinos por un camino muy transitado.",
    descriptionEn:
      "A temporary footbridge in lightweight, reversible materials along a stretch of the Guadaiza River in Marbella, designed to protect the riverbank and its ecosystem while preserving pedestrian access along a well-used path.",
    url: "https://momaa.es/pasarela-madera-marbella-malaga/",
  },
  {
    id: "bungalow-los-monteros",
    title: "Rehabilitación Bungalow Los Monteros",
    titleEn: "Los Monteros Bungalow Renovation",
    category: "Residencial",
    year: "2021",
    url: "https://momaa.es/bungalow-los-monteros-marbella/",
    image: "/bungalow-monteros.jpg",
  },
  {
    id: "british-school-marbella-2020",
    title: "British Internacional School of Marbella",
    category: "Educacional",
    year: "2020",
    description:
      "Edificio de tipología claustral para el British International School of Marbella, organizado en torno a dos patios y un ágora central, con ladrillo visto, hormigón y muro cortina, y una calificación energética clase A.",
    descriptionEn:
      "A cloister-type building for the British International School of Marbella, organised around two courtyards and a central auditorium, built with exposed brick, concrete and a curtain wall, achieving an energy class A rating.",
    url: "https://momaa.es/british-internacional-school-of-marbella/",
  },
  {
    id: "expositor-british-school",
    title: "Expositor en British School Marbella",
    titleEn: "Display Unit at British School Marbella",
    category: "Interiorismo",
    year: "2020",
    description:
      "Diseño de una librería expositora a medida para el British School Marbella, un mueble pensado para exponer libros y materiales del centro con un diseño funcional e integrado en el espacio.",
    descriptionEn:
      "Design of a bespoke display bookcase for British School Marbella, a piece of furniture conceived to showcase books and school materials with a functional design integrated into the space.",
    url: "https://momaa.es/diseno-libreria/",
  },
  {
    id: "mostrador-bism",
    title: "Diseño Mostrador BISM",
    titleEn: "BISM Reception Counter Design",
    category: "Interiorismo",
    year: "2020",
    description:
      "Mostrador flexible en forma de U para el BISM, realizado en madera de roble y encimera de Corian, que atiende de forma optimizada tanto a usuarios como a padres con un diseño cálido y minimalista.",
    descriptionEn:
      "A flexible U-shaped counter for BISM, made of oak wood with a Corian countertop, serving both users and parents with an optimised layout and a warm, minimalist design.",
    url: "https://momaa.es/diseno-mostrador-colegio/",
  },
  {
    id: "rehabilitacion-edificio-publico-marbella",
    title: "Rehabilitación Edificio Público Marbella, Málaga",
    titleEn: "Public Building Renovation, Marbella, Málaga",
    category: "Espacio Público",
    year: "2020",
    description:
      "Rehabilitación de un edificio protegido de 1965 en el casco histórico de Marbella, en estado de semi-abandono, para convertirlo en oficinas municipales accesibles sin perder el espíritu paisajístico del entorno.",
    descriptionEn:
      "Rehabilitation of a listed 1965 building in Marbella's old town, in a semi-abandoned state, converting it into accessible municipal offices while preserving the historic character of the surroundings.",
    url: "https://momaa.es/rehabilitacion-edificio-publico-marbella-malaga/",
  },
  {
    id: "regeneracion-urbana-marbella",
    title: "Regeneración Urbana de Espacio Público Marbella",
    titleEn: "Urban Regeneration of Public Space, Marbella",
    category: "Urbanismo",
    year: "2020",
    description:
      "Plan de renovación urbana del barrio de San Pedro Alcántara bajo el principio de \"ciudad amable\": trazados continuos, eliminación de barreras arquitectónicas, nuevos puntos de encuentro comunitarios e iluminación pensada como experiencia espacial.",
    descriptionEn:
      "An urban renewal plan for the San Pedro Alcántara neighbourhood under the \"friendly city\" principle: continuous pathways, removal of architectural barriers, new community gathering spaces and lighting conceived as spatial experience.",
    url: "https://momaa.es/regeneracion-urbana-de-espacio-publico-marbella/",
  },
  {
    id: "villa-monte-mayor-benahavis",
    title: "Villa en Monte Mayor, Benahavís",
    titleEn: "Villa in Monte Mayor, Benahavís",
    category: "Residencial",
    year: "2020",
    url: "https://momaa.es/villa-en-monte-mayor-benahavis/",
    image: "/monte-mayor-benahavis.jpg",
  },
  {
    id: "aula-abierta-colegio-eic",
    title: "Aula Abierta para Colegio EIC",
    titleEn: "Open Classroom for EIC School",
    category: "Educacional",
    year: "2020",
    description:
      "Proyecto experimental de aula abierta para el colegio EIC, pensado para humanizar las aulas e incentivar la creatividad de los niños.",
    descriptionEn:
      "An experimental open classroom project for EIC School, designed to humanize learning spaces and foster children's creativity.",
    url: "https://momaa.es/aula-abierta-para-colegio-eic/",
  },
  {
    id: "oficina-turismo-san-pedro",
    title: "Oficina de Turismo San Pedro Alcántara",
    titleEn: "San Pedro Alcántara Tourism Office",
    category: "Espacio Público",
    year: "2019",
    description:
      "Rehabilitación del centro de Turismo, Comercio y Fiestas de San Pedro Alcántara: un espacio accesible y contemporáneo con sala de exposición, oficinas para el equipo municipal y una sala de prensa junto a un patio de luz natural.",
    descriptionEn:
      "Rehabilitation of the Tourism, Commerce and Festivities Centre in San Pedro Alcántara: an accessible, contemporary space with an exhibition hall, offices for the municipal team, and a press room by a naturally lit courtyard.",
    url: "https://momaa.es/oficina-turismo/",
  },
  {
    id: "aparcamiento-guadalmina",
    title: "Aparcamiento Ecológico en Guadalmina, Marbella",
    titleEn: "Eco Car Park at Guadalmina, Marbella",
    category: "Urbanismo",
    year: "2019",
    description:
      "Aparcamiento ecológico, tecnológico y accesible en Guadalmina, Marbella: una nueva fachada urbana que recupera un espacio degradado detrás de una zona comercial, integrada con el entorno verde predominante del barrio.",
    descriptionEn:
      "An eco-friendly, high-tech and accessible car park in Guadalmina, Marbella: a new urban façade that reclaims a degraded space behind a commercial area, integrated with the neighbourhood's predominant green surroundings.",
    url: "https://momaa.es/aparcamiento-guadalmina/",
  },
  {
    id: "colegio-internacional-lisbon",
    title: "Colegio Internacional Lisbon",
    titleEn: "Lisbon International School",
    category: "Educacional",
    year: "2019",
    url: "https://momaa.es/colegio-internacional-lisbon/",
  },
  {
    id: "villa-arbel-valle-del-sol",
    title: "Villa Arbel, Valle del Sol, Marbella",
    category: "Residencial",
    year: "2019",
    url: "https://momaa.es/villa-arbel-valle-del-sol/",
  },
  {
    id: "oficina-boque-maison-lu",
    title: "Oficina Boqué Maison Lu, Marbella",
    titleEn: "Boqué Maison Lu Office, Marbella",
    category: "Espacio Público",
    year: "2019",
    description:
      "Rehabilitación de un antiguo bar abandonado junto al restaurante Maison Lu para convertirlo en las oficinas corporativas del grupo Boqué: un espacio de una sola planta pensado en torno a la luz natural y la comodidad.",
    descriptionEn:
      "Rehabilitation of an old, abandoned bar next to the Maison Lu restaurant into the Boqué group's corporate offices: a single-storey space designed around natural light and comfort.",
    url: "https://momaa.es/oficina-bouque/",
  },
  {
    id: "bungalow-caribplaya",
    title: "Rehabilitación de Bungalow Caribplaya",
    titleEn: "Caribplaya Bungalow Renovation",
    category: "Residencial",
    year: "2019",
    url: "https://momaa.es/bungalow-en-caribplaya-marbella/",
    image: "/bungalow-cariboplaya.jpg",
  },
  {
    id: "loft-design-marbella",
    title: "Loft Design, Marbella",
    category: "Residencial",
    year: "2019",
    description:
      "Reconversión de una terraza apergolada sobre un edificio de oficinas en Marbella en un loft multifuncional con vistas al mar, mediante una envolvente transparente que aprovecha la luz natural.",
    descriptionEn:
      "Conversion of a pergola-covered terrace above an office building in Marbella into a multifunctional loft with sea views, using a transparent envelope that makes the most of natural light.",
    url: "https://momaa.es/loft-design-marbella/",
  },
  {
    id: "villa-olivier-marbella-golf",
    title: "Villa Olivier, Marbella Golf Resort",
    category: "Residencial",
    year: "2019",
    url: "https://momaa.es/villa-olivier-marbella-golf/",
  },
  {
    id: "oficina-colegio-lisboa",
    title: "Oficina Colegio Lisboa",
    titleEn: "Lisboa School Office",
    category: "Educacional",
    year: "2019",
    url: "https://momaa.es/oficina-colegio-lisboa/",
  },
  {
    id: "rehabilitacion-apartamento-bahia-marbella",
    title: "Rehabilitación Apartamento Bahía de Marbella",
    titleEn: "Bahía de Marbella Apartment Renovation",
    category: "Interiorismo",
    year: "2019",
    description:
      "Rehabilitación de un apartamento en Bahía de Marbella con la luz como condicionante de partida: pequeños gestos arquitectónicos, de materialidad y decoración que transforman un espacio obsoleto en una residencia luminosa para todo el año.",
    descriptionEn:
      "Renovation of an apartment in Bahía de Marbella with light as the starting condition: subtle architectural, material and decorative gestures that transform a dated space into a bright, year-round residence.",
    url: "https://momaa.es/rehabilitacion-apartamento-bahia-de-marbella/",
  },
  {
    id: "pabellon-rio-verde-ii",
    title: "Pabellón Río Verde II, Marbella",
    titleEn: "Río Verde II Pavilion, Marbella",
    category: "Residencial",
    year: "2018",
    url: "https://momaa.es/pabellon-rio-verde-ii/",
  },
  {
    id: "villa-rio-lissen",
    title: "Villa Rio Lissen, Valle del Sol, Marbella",
    category: "Residencial",
    year: "2018",
    description:
      "Casa Río, en Guadalmina: una casa patio contemporánea que reinterpreta la vivienda andaluza en el siglo XXI, orientada hacia las vistas de la montaña y el horizonte del mar.",
    descriptionEn:
      "Casa Río, in Guadalmina: a contemporary patio house that reinterprets the traditional Andalusian home for the 21st century, oriented towards views of the mountains and the sea horizon.",
    url: "https://momaa.es/villa-rio-lissen/",
  },
  {
    id: "colegio-jiangyn-china",
    title: "Colegio Jiangyn, China",
    titleEn: "Jiangyn School, China",
    category: "Educacional",
    year: "2018",
    url: "https://momaa.es/colegio-jiangyn-china/",
  },
  {
    id: "pabellon-rio-verde",
    title: "Pabellón Río Verde, Marbella",
    titleEn: "Río Verde Pavilion, Marbella",
    category: "Residencial",
    year: "2018",
    url: "https://momaa.es/pabellon-rio-verde/",
  },
  {
    id: "pabellon-musica-la-virginia",
    title: "Pabellón de la Música, La Virginia, Marbella",
    titleEn: "Music Pavilion, La Virginia, Marbella",
    category: "Residencial",
    year: "2018",
    url: "https://momaa.es/pabellon-de-la-musica/",
  },
  {
    id: "apartamento-coral-beach",
    title: "Apartamento, Coral Beach, Marbella",
    titleEn: "Apartment, Coral Beach, Marbella",
    category: "Residencial",
    year: "2017",
    url: "https://momaa.es/casa-playa-esmeralda/",
  },
  {
    id: "eic-nuevo-vestuario",
    title: "EIC Nuevo Vestuario",
    titleEn: "EIC New Changing Rooms",
    category: "Educacional",
    year: "2017",
    url: "https://momaa.es/nuevo-vestuario-eic/",
  },
  {
    id: "los-porqueroles",
    title: "Los Porqueroles",
    category: "Urbanismo",
    year: "2017",
    url: "https://momaa.es/urbanizacion-los-porqueroles/",
  },
  {
    id: "momaa-loft-office",
    title: "MoMaA Loft Office",
    category: "Interiorismo",
    year: "2017",
    url: "https://momaa.es/loft-office-momaa/",
  },
  {
    id: "casa-lucia-madrid",
    title: "Casa Lucia, Madrid",
    category: "Residencial",
    year: "2017",
    description:
      "Reforma de una vivienda en un edificio plurifamiliar cerca del Parque del Retiro en Madrid: una redistribución interior adaptada a las necesidades actuales de la familia, con mejoras de envolvente e instalaciones conforme al CTE.",
    descriptionEn:
      "Renovation of a home in a multifamily building near El Retiro Park in Madrid: an interior redistribution adapted to the family's current needs, with upgrades to the envelope and installations in line with the Spanish Technical Building Code (CTE).",
    url: "https://momaa.es/casa-lucia-madrid-rehabilitacion/",
  },
  {
    id: "villa-olivier-2017",
    title: "Villa Olivier, Marbella Golf Resort",
    category: "Residencial",
    year: "2017",
    url: "https://momaa.es/villa-marbella-club-golf/",
  },
  {
    id: "colegio-putian-china",
    title: "Colegio Putian, China",
    titleEn: "Putian School, China",
    category: "Educacional",
    year: "2017",
    url: "https://momaa.es/colegio-en-china-2/",
  },
  {
    id: "villa-alberquilla-la-virginia",
    title: "Villa Alberquilla, La Virginia, Marbella",
    category: "Residencial",
    year: "2016",
    url: "https://momaa.es/obra-reforma-de-vivienda-y-ejecucion-de-piscina-la-virginia/",
  },
  {
    id: "jacuzzi-en-terraza",
    title: "Jacuzzi en Terraza",
    titleEn: "Terrace Jacuzzi",
    category: "Residencial",
    year: "2016",
    url: "https://momaa.es/obra-jacuzzi-en-terraza/",
  },
  {
    id: "comedor-la-virginia",
    title: "Comedor en La Virginia, Marbella",
    titleEn: "Dining Room in La Virginia, Marbella",
    category: "Interiorismo",
    year: "2016",
    description:
      "Diseño de un comedor en La Virginia, Marbella, condicionado por su ubicación: un espacio acogedor con un mobiliario que dialoga con la ventana orientada al norte, ideal para los almuerzos familiares.",
    descriptionEn:
      "Design of a dining room in La Virginia, Marbella, shaped by its location: a cozy space with furniture that complements the north-facing window, ideal for family lunches.",
    url: "https://momaa.es/comedor-la-virginia-marbella/",
  },
  {
    id: "parque-urbano-fuensanta",
    title: "Parque Urbano Fuensanta",
    titleEn: "Fuensanta Urban Park",
    category: "Urbanismo",
    year: "2016",
    url: "https://momaa.es/concurso-parque-urbano-fuensanta-2/",
  },
  {
    id: "fin-master-arquitectura",
    title: "Fin de Máster Arquitectura",
    titleEn: "Architecture Master's Thesis",
    category: "Urbanismo",
    year: "2016",
    url: "https://momaa.es/fin-de-master-arquitectura/",
  },
  {
    id: "british-school-marbella-2015",
    title: "British School Marbella",
    category: "Educacional",
    year: "2015",
    url: "https://momaa.es/british-school-of-marbella/",
  },
  {
    id: "villa-ocean",
    title: "Villa Ocean",
    category: "Residencial",
    year: "2015",
    url: "https://momaa.es/villa-ocean/",
    image: "/villa-ocean.jpg",
  },
  {
    id: "pergola-piscina",
    title: "Pérgola de Piscina",
    titleEn: "Pool Pergola",
    category: "Residencial",
    year: "2014",
    url: "https://momaa.es/obra-pergola-de-piscina/",
  },
  {
    id: "villa-elena",
    title: "Villa Elena",
    category: "Residencial",
    year: "2014",
    url: "https://momaa.es/la-zagaleta-c-2-25/",
  },
  {
    id: "villa-travertino",
    title: "Villa Travertino",
    category: "Residencial",
    year: "2012",
    url: "https://momaa.es/villa-travertino/",
  },
  {
    id: "villa-beata",
    title: "Villa Beata",
    category: "Residencial",
    year: "2009",
    url: "https://momaa.es/cascada-de-camojan-5-6/",
  },
  {
    id: "villa-saraya",
    title: "Villa Saraya, Sierra Blanca",
    category: "Residencial",
    year: "2006",
    url: "https://momaa.es/sierra-blanca/",
  },
  {
    id: "villa-olga",
    title: "Villa Olga",
    category: "Residencial",
    year: "2004",
    url: "https://momaa.es/el-rosario-2011/",
  },
  {
    id: "villa-alicates-playas",
    title: "Villa en Alicates Playas, Marbella",
    titleEn: "Villa in Alicates Playas, Marbella",
    category: "Residencial",
    year: "2003",
    description:
      "Villa en Alicates Playas, Marbella (2003): una arquitectura moderna de volúmenes marcados que rompía con la tipología de \"mansión andaluza\" de la época, apostando por espacios prácticos y sugerentes sin renunciar al diseño.",
    descriptionEn:
      "Villa in Alicates Playas, Marbella (2003): a modern architecture of well-defined volumes that broke with the era's typical \"Andalusian mansion\", favouring practical, suggestive spaces without giving up on design.",
    url: "https://momaa.es/alicates-playas-35/",
  },
  {
    id: "hermes-mansion",
    title: "Hermes Mansión, Marbella Golf Resort",
    titleEn: "Hermes Mansion, Marbella Golf Resort",
    category: "Residencial",
    year: "2002",
    url: "https://momaa.es/club-golf-resort/",
  },
  {
    id: "villa-loriana",
    title: "Villa Loriana, Marbella Golden Mile",
    category: "Residencial",
    year: "2000",
    description:
      "Villa Loriana, en la Milla de Oro de Marbella: una de las viviendas más lujosas de la Costa del Sol, desarrollada por Felipe Recordon con Andrés M. Mateo como arquitecto junior e ingeniero de edificación.",
    descriptionEn:
      "Villa Loriana, on Marbella's Golden Mile: one of the most luxurious homes on the Costa del Sol, developed by Felipe Recordon with Andrés M. Mateo as junior architect and building engineer.",
    url: "https://momaa.es/villa-loriana/",
  },
];
