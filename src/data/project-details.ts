export interface ProjectDetail {
  id: string
  image?: string
  title: { es: string; en: string }
  category: { es: string; en: string }
  year: string
  architects: string[]
  studio: string
  location: string
  disciplines: { es: string[]; en: string[] }
  body: { es: string[]; en: string[] }
  images?: string[]
  externalUrl?: string
  externalLabel?: { es: string; en: string }
}

export const projectDetails: ProjectDetail[] = [
  {
    id: 'rehabilitacion-consistorial-marbella',
    image: '/ayuntamiento-marbella.jpg',
    title: {
      es: 'Rehabilitación Edificio Consistorial Exmo. Ayuntamiento de Marbella',
      en: 'Rehabilitation of Marbella City Hall',
    },
    category: {
      es: 'Espacio Público',
      en: 'Public Space',
    },
    year: '2026',
    architects: ['Andrés M. Mateo Fernández', 'Rodrigo González'],
    studio: 'MoMaA',
    location: 'Marbella, Málaga',
    disciplines: {
      es: ['Arquitectura', 'Urbanismo', 'Diseño'],
      en: ['Architecture', 'Urban Planning', 'Design'],
    },
    body: {
      es: [
        'Estamos profundamente orgullosos de anunciar que las obras de reforma integral del Ayuntamiento de Marbella ya son una realidad. Como arquitectos de este proyecto, asumir el reto de intervenir en un edificio tan emblemático para nuestra ciudad es un honor y una responsabilidad que aceptamos con gran ilusión.',
        'No se trata solo de una obra de rehabilitación; es una apuesta por el futuro. Nuestro objetivo es devolver a los ciudadanos una Casa Consistorial más accesible, sostenible y eficiente. Estamos trabajando para que este espacio histórico se convierta en un referente de modernidad al servicio de todos los marbellíes.',
        '¡Hoy damos el primer paso de un camino que transformará el corazón de nuestra administración!',
      ],
      en: [
        'We are deeply proud to announce that the comprehensive renovation of Marbella City Hall is now a reality. As the architects of this project, taking on the challenge of working on such an iconic building for our city is an honor and a responsibility that we accept with great enthusiasm.',
        'This is not just a renovation; it is an investment in the future. Our goal is to give citizens back a more accessible, sustainable, and efficient City Hall. We are working to make this historic space a benchmark of modernity, serving all the residents of Marbella.',
        'Today we take the first step on a journey that will transform the heart of our administration!',
      ],
    },
    externalUrl:
      'https://www.marbella.es/actualidad/noticias/el-ayuntamiento-inicia-la-reforma-integral-de-la-casa-consistorial-que-permitira-un-ayuntamiento-mas-accesible-sostenible-y-eficiente-al-servicio-de-los-ciudadanos.html',
    externalLabel: {
      es: 'Ver nota de prensa',
      en: 'Read press release',
    },
  },
  {
    id: 'las-joyas-estepona',
    image: '/lasjoyas-estepona.jpg',
    title: {
      es: '68 Viviendas "Las Joyas", Estepona',
      en: '68 Apartments "Las Joyas", Estepona',
    },
    category: {
      es: 'Residencial',
      en: 'Residential',
    },
    year: '2020–2022',
    architects: [
      'Manolo Herrera Mendoza. Arquitecto D.O.',
      'Andrés M. Mateo Fernández. Arquitecto D.O.',
    ],
    studio: 'MoMaA',
    location: 'Estepona, Málaga',
    disciplines: {
      es: ['Arquitectura', 'Diseño Residencial'],
      en: ['Architecture', 'Residential Design'],
    },
    body: {
      es: [
        'Aranya Estepona es un proyecto residencial plurifamiliar de diseño contemporáneo, proyectado bajo una premisa de integración paisajística y optimización funcional. Ubicado en una zona estratégica de Estepona (Málaga), concretamente en la zona de La Resina Golf, el conjunto ha sido diseñado para maximizar la calidad de vida de sus residentes a través de una arquitectura abierta y luminosa.',
        'El proyecto se compone de un conjunto de 68 viviendas de 1, 2 y 3 dormitorios, distribuidas en bloques de baja densidad. La volumetría del edificio se define por líneas limpias y una estética moderna, donde el juego de volúmenes en fachada permite generar amplias terrazas, un elemento clave para aprovechar el clima de la Costa del Sol.',
      ],
      en: [
        'Aranya Estepona is a contemporary multi-family residential project, designed with a focus on landscape integration and functional optimization. Located in a strategic area of Estepona (Málaga), specifically in the La Resina Golf area, the complex has been designed to maximize the quality of life for its residents through open and bright architecture.',
        'The project comprises 68 one-, two-, and three-bedroom apartments, distributed in low-density blocks. The building\'s volume is defined by clean lines and a modern aesthetic, where the interplay of volumes on the façade creates spacious terraces, a key element for taking advantage of the Costa del Sol\'s climate.',
      ],
    },
    externalUrl: 'https://www.aelca.es/es/proyectos/aranya-estepona/',
    externalLabel: {
      es: 'Ver proyecto en Aelca',
      en: 'View project at Aelca',
    },
  },
  {
    id: 'the-deck-benahavis',
    image: '/the-deck.jpeg',
    title: {
      es: 'Edificio Restauración y Oficinas Coworking "The Deck", Benahavís',
      en: '"The Deck" — Restaurant & Coworking Offices, Benahavís',
    },
    category: {
      es: 'Urbanismo',
      en: 'Urban Planning',
    },
    year: '2025',
    architects: ['Andrés M. Mateo Fernández. Arquitecto'],
    studio: 'MoMaA',
    location: 'Benahavís, Málaga',
    disciplines: {
      es: ['Arquitectura', 'Urbanismo', 'Diseño'],
      en: ['Architecture', 'Urban Planning', 'Design'],
    },
    body: {
      es: [
        'Ubicado en la urbanización Los Aguilares de Benahavís, este edificio recién terminado adopta una arquitectura programática y estratificada propuesta específicamente para responder al entorno y al uso del edificio. La planta baja se destina a hostelería, generando un espacio abierto y dinámico hacia la calle.',
        'En la primera planta, las oficinas y el área de coworking ofrecen un entorno luminoso y flexible, adaptado a nuevas formas de trabajo. La cubierta se concibe como una zona de descanso y relax, un mirador privilegiado hacia la montaña.',
        'El proyecto resuelve con precisión la complejidad de una parcela triangular en esquina, convirtiendo esa condición en una oportunidad para crear un volumen eficiente, distintivo y plenamente integrado en el paisaje.',
      ],
      en: [
        'Located in the Los Aguilares development in Benahavís, this newly completed building adopts a programmatic and stratified architecture specifically designed to respond to its surroundings and intended use. The ground floor is dedicated to hospitality, creating an open and dynamic space towards the street.',
        'On the first floor, the offices and coworking area offer a bright and flexible environment, adapted to new ways of working. The rooftop is conceived as a rest and relaxation area — a privileged viewpoint overlooking the mountains.',
        'The project precisely resolves the complexity of a triangular corner plot, turning that condition into an opportunity to create an efficient, distinctive volume fully integrated into the landscape.',
      ],
    },
  },
  {
    id: 'casa-allure-marbella',
    image: '/casa-allure-marbella.jpg',
    title: {
      es: 'Cascada de Camoján — Casa Allure, Marbella',
      en: 'Cascada de Camoján — Casa Allure, Marbella',
    },
    category: {
      es: 'Residencial',
      en: 'Residential',
    },
    year: '2024–2025',
    architects: [
      'Andrés M. Mateo Fernández. Arquitecto D.O.',
      'Denis Mol del Río. Ingeniero de Caminos D.E.M. — Project Manager',
    ],
    studio: 'MoMaA',
    location: 'Cascada de Camoján, Marbella',
    disciplines: {
      es: ['Arquitectura', 'Urbanismo', 'Diseño'],
      en: ['Architecture', 'Urban Planning', 'Design'],
    },
    body: {
      es: [
        'Se trata de una vivienda única en un lugar privilegiado de Marbella donde dar riendas a tu imaginación para sumergirte en el lugar de ensueños donde la calidad, la funcionalidad y la elegancia —sin renunciar a su estética— son la base de todo el proyecto.',
        'Con objeto de conseguir una "Villa de Gran Calidad", este equipo de Arquitectura liderado por Andrés M. Mateo está formado por Arquitectos, Arquitectos Técnicos e Ingenieros para obtener el mejor resultado.',
      ],
      en: [
        'This is a unique home in a privileged location in Marbella, designed to let your imagination run free and immerse you in a dream place where quality, functionality, and elegance — all without sacrificing aesthetics — form the foundation of the entire project.',
        'To achieve a "High-Quality Villa," this architecture team led by Andrés M. Mateo includes architects, technical architects, and engineers to deliver the best possible outcome.',
      ],
    },
    externalUrl: 'https://www.instagram.com/reel/DGfS8QtCiWD/?igsh=ODRrMGNycXUzbGVq',
    externalLabel: {
      es: 'Ver en Instagram',
      en: 'View on Instagram',
    },
  },
  {
    id: 'cubierta-pabellon-carlos-cabezas',
    image: '/pabellon-carlos-cabezas.jpg',
    title: {
      es: 'Cubierta Pista Deportiva Pabellón Carlos Cabezas, Marbella',
      en: 'Sports Court Roof — Carlos Cabezas Pavilion, Marbella',
    },
    category: {
      es: 'Espacio Público',
      en: 'Public Space',
    },
    year: '2024',
    architects: ['Andrés M. Mateo Fernández. Arquitecto'],
    studio: 'MoMaA',
    location: 'Marbella, Málaga',
    disciplines: {
      es: ['Arquitectura', 'Urbanismo', 'Diseño'],
      en: ['Architecture', 'Urban Planning', 'Design'],
    },
    body: {
      es: [
        'La actuación de este proyecto se enmarca en la Pista Deportiva Exterior y en los cerramientos exteriores del Polideportivo Municipal "Carlos Cabezas", situado en la Calle Camino Cristo de los Molinos de Marbella. La instalación deportiva se ubica en la Urbanización "El Real Panorama" de la localidad.',
        'Actualmente, la zona de intervención se encuentra en buen estado y funcionamiento. El objetivo del proyecto es cubrir la pista exterior para poder darle mayor uso independientemente de la climatología.',
        'El ámbito de actuación total será de 1.222 m², con una longitud total de 47 m y un ancho de 26 m, y presenta una ligera pendiente transversal descendente hacia el este para la actual evacuación de pluviales (0,7%). Mediante la realización del presente proyecto se busca la adecuación de esta pista multideportiva para su uso más confortable en diferentes condiciones climatológicas.',
      ],
      en: [
        'This project focuses on the outdoor sports court and perimeter enclosures of the "Carlos Cabezas" Municipal Sports Center, located on Camino Cristo de los Molinos in Marbella, within the "El Real Panorama" urbanization.',
        'Currently, the area is in good condition and fully operational. The main goal is to cover the outdoor court to allow for greater use regardless of weather conditions.',
        'The intervention will cover a total area of 1,222 m², with dimensions of 47 meters in length and 26 meters in width, and a slight eastward slope (0.7%) for rainwater drainage. The project aims to adapt and enhance the multisport court, making it more comfortable and accessible year-round.',
      ],
    },
  },
  {
    id: 'el-trapiche-casa-8',
    title: {
      es: 'El Trapiche, Casa 8, Marbella',
      en: 'El Trapiche, House 8, Marbella',
    },
    category: {
      es: 'Residencial',
      en: 'Residential',
    },
    year: '2023',
    architects: ['Andrés M. Mateo Fernández. Arquitecto'],
    studio: 'MoMaA',
    location: 'El Trapiche, Marbella',
    disciplines: {
      es: ['Arquitectura', 'Diseño Residencial'],
      en: ['Architecture', 'Residential Design'],
    },
    body: {
      es: [
        'Situada en una parcela de esquina, esta vivienda fue concebida con la idea de tener unas vistas que admiraran, además del mar y la montaña, los restos de la antigua fábrica de azúcar de Marbella, hoy en día en rehabilitación.',
        'La vivienda se organiza por un lado en los recintos privados de dormitorios en la planta alta y, por otro, en los espacios públicos en planta baja. El espacio público dispone de un gran salón que se alarga con un porche abierto, proporcionando un comedor de verano frente a la piscina.',
        'El acceso a la parcela se enfrenta hacia la entrada enmarcada con dos torreones de la vivienda, donde recibe la puerta de acceso y se llega hasta el salón que enmarca la vista hacia Puerto Banús y la Concha de Marbella.',
      ],
      en: [
        'Located on a corner plot, this home was designed to offer views not only of the sea and mountains, but also of the historic remains of Marbella\'s old sugar factory, now under restoration.',
        'The layout separates private and public spaces: the upper floor houses the bedrooms, while the ground floor is reserved for shared living areas. The main living space extends into a covered porch, creating an outdoor summer dining area facing the pool.',
        'The entrance to the property is framed by two towers, guiding visitors through the main door and into the living room, which perfectly frames views of Puerto Banús and La Concha mountain.',
      ],
    },
    externalUrl: 'https://listaroja.hispanianostra.org/ficha/trapiche-del-prado/',
    externalLabel: {
      es: 'Ver ficha patrimonial',
      en: 'View heritage record',
    },
  },
]

export function getProjectDetail(id: string): ProjectDetail | undefined {
  return projectDetails.find((p) => p.id === id)
}
