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
  {
    id: '49-viviendas-casares',
    title: {
      es: '49 Viviendas en Casares — Royal Casares Homes, Neinor Homes',
      en: '49 Apartments in Casares — Royal Casares Homes, Neinor Homes',
    },
    category: {
      es: 'Residencial',
      en: 'Residential',
    },
    year: '2019–2021',
    architects: [
      'Manolo Herrera Mendoza. Arquitecto D.O.',
      'Andrés M. Mateo Fernández. Arquitecto D.E.',
    ],
    studio: 'Atmosphere Project',
    location: 'Casares, Málaga',
    disciplines: {
      es: ['Arquitectura', 'Diseño Residencial'],
      en: ['Architecture', 'Residential Design'],
    },
    body: {
      es: [
        'Proyecto residencial de 49 viviendas desarrollado en colaboración con Neinor Homes en Casares, Málaga. El conjunto, comercializado como Royal Casares Homes, responde a los estándares de calidad y diseño contemporáneo que caracterizan las promociones residenciales de la Costa del Sol.',
      ],
      en: [
        'A 49-unit residential project developed in collaboration with Neinor Homes in Casares, Málaga. The development, marketed as Royal Casares Homes, meets the quality and contemporary design standards that characterise residential projects on the Costa del Sol.',
      ],
    },
    externalUrl: 'https://www.neinorhomes.com/promocion/royal-casares-homes',
    externalLabel: {
      es: 'Ver promoción en Neinor Homes',
      en: 'View development at Neinor Homes',
    },
  },
  {
    id: 'villa-monte-mayor-benahavis',
    image: '/monte-mayor-benahavis.jpg',
    title: {
      es: 'Vivienda en Monte Mayor, Benahavís',
      en: 'House in Monte Mayor, Benahavís',
    },
    category: {
      es: 'Residencial',
      en: 'Residential',
    },
    year: '2020',
    architects: [
      'Andrés M. Mateo Fernández. Arquitecto',
      'Chus Fernández. Arquitecto Técnico',
    ],
    studio: 'MoMaA',
    location: 'Monte Mayor, Benahavís, Málaga',
    disciplines: {
      es: ['Arquitectura', 'Urbanismo', 'Diseño'],
      en: ['Architecture', 'Urban Planning', 'Design'],
    },
    body: {
      es: [
        'Se trata de una vivienda unifamiliar aislada de estilo andaluz en clave contemporánea ubicada en un entorno natural que invita al descanso. La vivienda se posiciona en el terreno buscando las vistas y se emplaza tratando de obtener el mejor aprovechamiento solar.',
        'La elección de materiales locales que respetan el medio ambiente, el diseño de la vivienda andaluza que mejor se adapta a las condiciones climáticas del sur de España, una envolvente térmica muy eficiente y el diseño y ejecución de sistemas de climatización de alta eficiencia hacen de esta vivienda un referente en arquitectura sostenible.',
      ],
      en: [
        'This is a detached single-family home in contemporary Andalusian style, set in a natural, peaceful environment. Positioned to maximise views and solar gain, the design responds to both the landscape and the local climate.',
        'The use of local, eco-friendly materials, an efficient thermal envelope, and high-performance HVAC systems — combined with the time-tested principles of Andalusian architecture — make this home a benchmark in sustainable residential design in southern Spain.',
      ],
    },
  },
  {
    id: 'bungalow-los-monteros',
    title: {
      es: 'Rehabilitación Bungalow en Los Monteros, Marbella',
      en: 'Bungalow Rehabilitation in Los Monteros, Marbella',
    },
    category: {
      es: 'Residencial',
      en: 'Residential',
    },
    year: '2019',
    architects: ['Andrés M. Mateo Fernández. Arquitecto'],
    studio: 'MoMaA',
    location: 'Los Monteros, Marbella',
    disciplines: {
      es: ['Arquitectura', 'Diseño Residencial'],
      en: ['Architecture', 'Residential Design'],
    },
    body: {
      es: [
        'Construidas en el año 1970, estas casas se caracterizan por la pureza de sus formas y la ausencia de ornamentos, evocando la tendencia artística de su creador y de la sociedad en la que se construyeron.',
        'En este contexto, se propone la rehabilitación de una de estas singulares casas con un estilo contemporáneo, con el objetivo de respetar su carácter histórico y, a la vez, resolver el programa de la nueva familia sin renunciar a las exigencias de habitabilidad y sostenibilidad de nuestra época, empleando materiales autóctonos.',
        'La antigua compartimentación se reestructura para lograr un mejor aprovechamiento de la planta, donde la luz y la transparencia se funden para integrar el exterior en el interior mediante una secuencia de espacios abiertos que enlazan la cocina, el comedor y el salón, todos abiertos hacia las terrazas.',
        'La vivienda culmina en la planta cubierta con un auténtico festival para los sentidos: un espacio familiar al aire libre concebido para la relajación y desde el que perderse con la mirada hacia la montaña o el mar.',
        'En el exterior, se actúa para crear zonas verdes de bajo consumo hídrico, dejando respirar la parcela y aprovechando la frondosa vegetación que la rodea.',
      ],
      en: [
        'Built in the 1970s, this housing complex is defined by the purity of its forms and the absence of ornamentation — features that reflect both the artistic vision of its creator and the cultural context of the time.',
        'The rehabilitation of one of these unique homes is proposed with a contemporary approach, aiming to respect its historical character while adapting it to the needs of a new family. The project embraces modern habitability and sustainability standards, using local materials throughout.',
        'The original layout has been restructured to optimise the floor plan, allowing light and transparency to flow freely. A sequence of open spaces connects the kitchen, dining room, and living room — all opening onto the terraces — integrating the outdoors with the interior.',
        'The home culminates on the rooftop, envisioned as a true sensory retreat: an open-air family space designed for relaxation, where the gaze can wander freely toward the mountains or the sea.',
        'The exterior landscaping has been reimagined with low-water-consumption green areas, allowing the plot to breathe while making the most of the lush vegetation that surrounds it.',
      ],
    },
  },
  {
    id: 'bungalow-caribplaya',
    title: {
      es: 'Rehabilitación de Bungalow en Caribplaya, Marbella',
      en: 'Bungalow Rehabilitation in Caribplaya, Marbella',
    },
    category: {
      es: 'Residencial',
      en: 'Residential',
    },
    year: '2018',
    architects: ['Andrés M. Mateo Fernández. Arquitecto'],
    studio: 'MoMaA',
    location: 'Caribplaya, Marbella',
    disciplines: {
      es: ['Arquitectura', 'Diseño Residencial'],
      en: ['Architecture', 'Residential Design'],
    },
    body: {
      es: [
        'Ubicado en la urbanización Caribplaya, este bungalow de planta compacta y vocación costera se somete a una rehabilitación integral que busca actualizar sus prestaciones sin perder el carácter propio de la arquitectura vacacional de la Costa del Sol.',
        'La intervención reordena la distribución interior para liberar el espacio de día, potenciando la relación visual y funcional con el exterior. La entrada de luz natural se convierte en el elemento articulador del proyecto: las estancias se abren hacia los espacios exteriores, difuminando los límites entre el interior y el jardín o la terraza.',
        'La selección de materiales, la paleta cromática neutra y la reducción de los elementos superfluos buscan una arquitectura honesta que dialogue con el entorno mediterráneo, priorizando el confort térmico y la eficiencia energética en consonancia con el clima del sur.',
      ],
      en: [
        'Located in the Caribplaya urbanisation, this compact coastal bungalow undergoes a full rehabilitation aimed at updating its performance while preserving the character of Costa del Sol holiday architecture.',
        'The intervention reorganises the interior layout to open up the daytime living areas, strengthening the visual and functional connection with the outdoors. Natural light becomes the central organising element: spaces open towards terraces and garden, blurring the boundary between inside and out.',
        'The material palette, neutral tones and reduction of superfluous elements pursue an honest architecture in dialogue with the Mediterranean setting, prioritising thermal comfort and energy efficiency in harmony with the southern climate.',
      ],
    },
  },
  {
    id: 'casa-l-nueva-andalucia',
    title: {
      es: 'Casa L. Luis de Góngora, Nueva Andalucía, Marbella',
      en: 'Casa L. Luis de Góngora, Nueva Andalucía, Marbella',
    },
    category: {
      es: 'Residencial',
      en: 'Residential',
    },
    year: '2023',
    architects: [
      'José Moreno González. Arquitecto',
      'Andrés M. Mateo. Arquitecto',
    ],
    studio: 'MoMaA',
    location: 'Nueva Andalucía, Marbella',
    disciplines: {
      es: ['Arquitectura', 'Diseño Residencial'],
      en: ['Architecture', 'Residential Design'],
    },
    body: {
      es: [
        'Esta vivienda emplazada en la Costa del Sol aprovecha la fuerte pendiente del terreno para acompañar a la vivienda e ir adaptándose a la topografía. Se desarrolla en dos plantas de tipología invertida: se accede por la planta primera, donde se encuentran los espacios públicos, y a través de las escaleras como eje vertebrador se llega a la planta baja, donde se organizan los espacios íntimos alrededor de la piscina.',
        'Sus fachadas son minimalistas, presentando desde la calle una caja compacta y contenida, al tiempo que se abre de forma generosa hacia el sur a través de grandes cristaleras que abrazan las vistas y la luz natural.',
      ],
      en: [
        'This home, located on the Costa del Sol, takes advantage of the steep slope of the terrain by adapting its layout to the natural topography. It is designed across two levels with an inverted layout: the entrance is on the upper floor, which hosts the public living spaces, while the private areas are located on the lower floor, organised around the pool and accessed via a central staircase.',
        'The façades are minimalist — presenting a compact, understated volume from the street, while opening generously to the south through large glazed surfaces that embrace the views and natural light.',
      ],
    },
  },
  {
    id: 'santa-maria-golf-casa-11',
    title: {
      es: 'Santa María Golf, Casa 11, Marbella',
      en: 'Santa María Golf, House 11, Marbella',
    },
    category: {
      es: 'Residencial',
      en: 'Residential',
    },
    year: '2023',
    architects: [
      'José Moreno González. Arquitecto',
      'Andrés M. Mateo. Arquitecto',
    ],
    studio: 'MoMaA',
    location: 'Santa María Golf, Marbella',
    disciplines: {
      es: ['Arquitectura', 'Diseño Residencial'],
      en: ['Architecture', 'Residential Design'],
    },
    body: {
      es: [
        'Vivienda unifamiliar aislada en la urbanización Santa María Golf de Marbella, un entorno privilegiado que combina la tranquilidad del campo de golf con la proximidad al mar. El proyecto se concibe como una residencia contemporánea de carácter mediterráneo, integrada en el paisaje vegetal que la rodea.',
        'La distribución interior se organiza en torno a los espacios de convivencia en planta baja, abiertos al jardín y la piscina a través de grandes ventanales que disuelven el límite entre el interior y el exterior. La fachada adopta un lenguaje limpio y depurado, con una composición de volúmenes que responde tanto a las condiciones de orientación solar como a las vistas hacia el entorno natural.',
      ],
      en: [
        'A detached single-family home in the Santa María Golf urbanisation in Marbella — a privileged setting that combines the tranquility of the golf course with proximity to the sea. The project is conceived as a contemporary Mediterranean residence, integrated into the lush landscape that surrounds it.',
        'The interior layout is organised around the main living spaces on the ground floor, opened to the garden and pool through large glazed surfaces that dissolve the boundary between indoors and out. The façade adopts a clean, refined language, with a composition of volumes that responds both to solar orientation and to views across the natural surroundings.',
      ],
    },
  },
  {
    id: 'apartamento-atico-bahia-marbella',
    image: '/reforma_apartamento_bahia_marbella_12.jpg',
    images: [
      '/reforma_apartamento_bahia_marbella_06.jpg',
      '/reforma_apartamento_bahia_marbella_10.jpg',
      '/reforma_apartamento_bahia_marbella_08.jpg',
      '/reforma_apartamento_bahia_marbella_07.jpg',
      '/reforma_apartamento_bahia_marbella_03.jpg',
      '/reforma_apartamento_bahia_marbella_02.jpg',
      '/reforma_apartamento_bahia_marbella_04.jpg',
    ],
    title: {
      es: 'Reforma Apartamento Ático con Vista al Mediterráneo, Bahía de Marbella',
      en: 'Penthouse Renovation with Mediterranean Views, Bahía de Marbella',
    },
    category: {
      es: 'Interiorismo',
      en: 'Interior Design',
    },
    year: '2022',
    architects: ['Andrés M. Mateo Fernández. Arquitecto'],
    studio: 'MoMaA',
    location: 'Bahía de Marbella, Marbella',
    disciplines: {
      es: ['Arquitectura', 'Interiorismo', 'Diseño'],
      en: ['Architecture', 'Interior Design', 'Design'],
    },
    body: {
      es: [
        'Situado en una zona privilegiada de Marbella, en la urbanización Bahía de Marbella, esta intervención planteó como objetivo y reto la reforma interior de un apartamento ático. El diseño potencia las vistas al Mediterráneo a través de una distribución limpia y abierta que ha creado ambientes prácticos y funcionales sin renunciar a la estética.',
        'La cuidada elección de la materialidad y de las instalaciones completa un resultado atractivo y sostenible, donde cada decisión de diseño responde a la orientación, la luz y la relación visual con el mar.',
      ],
      en: [
        'Located in the exclusive Bahía de Marbella development, this project set out to renovate the interior of a penthouse apartment — an intervention that posed both a clear goal and a real challenge.',
        'The design enhances the apartment\'s stunning Mediterranean views through a clean, open layout that creates practical, functional spaces without compromising on aesthetics. Careful selection of materials and systems completes a renovation that is not only visually appealing but also sustainable.',
      ],
    },
  },
  {
    id: 'piscina-solarium-alicates-playas',
    title: {
      es: 'Piscina y Solarium en Alicates Playas, Marbella',
      en: 'Pool & Sun Deck in Alicates Playas, Marbella',
    },
    category: {
      es: 'Interiorismo',
      en: 'Interior Design',
    },
    year: '2022',
    architects: ['Andrés M. Mateo. Proyectista'],
    studio: 'MoMaA',
    location: 'Alicates Playas, Marbella',
    disciplines: {
      es: ['Diseño', 'Interiorismo', 'Paisajismo'],
      en: ['Design', 'Interior Design', 'Landscaping'],
    },
    body: {
      es: [
        'El proyecto trata de mejorar una piscina en una vivienda unifamiliar existente, algo obsoleta. Se pretende crear una nueva relación con el increíble jardín de la vivienda a través de un solárium como elemento de transición.',
        'Se plantea cambiar todo el revestimiento de la piscina, diseñar una zona de relax interior del agua y crear un vaso de compensación que permita conseguir un efecto infinity y, a su vez, disponer de una pequeña zona de juego para los niños. Las obsoletas instalaciones son sustituidas por sistemas modernos, dotando el conjunto de una iluminación cálida y de calidad que entona con el jardín.',
        'El solárium, como elemento de transición y descanso, está inspirado en el estilo ibicenco: blanco, limpio y en diálogo permanente con la vegetación mediterránea que lo rodea.',
      ],
      en: [
        'The project focuses on upgrading an outdated pool in a single-family home, aiming to enhance its connection with the home\'s stunning garden through a sun deck as a transitional element.',
        'Plans include replacing all pool finishes, adding a relaxing in-water lounge area, and creating a compensation tank to achieve an infinity effect, while also incorporating a small play area for children. The outdated systems are replaced with modern installations, and warm, quality lighting is added to harmonise with the garden.',
        'The sun deck, serving as both a transitional and relaxation space, draws inspiration from the Ibizan style — white, clean and in constant dialogue with the surrounding Mediterranean landscape.',
      ],
    },
    externalUrl: 'https://goo.gl/maps/KF9oaWEcVq6ZgwZn9',
    externalLabel: {
      es: 'Ver ubicación',
      en: 'View location',
    },
  },
  {
    id: 'fuente-bautismal-san-pedro',
    title: {
      es: 'Fuente Bautismal, San Pedro Alcántara, Marbella',
      en: 'Baptismal Fountain, San Pedro Alcántara, Marbella',
    },
    category: {
      es: 'Espacio Público',
      en: 'Public Space',
    },
    year: '2022',
    architects: ['Andrés M. Mateo Fernández. Arquitecto'],
    studio: 'MoMaA',
    location: 'San Pedro Alcántara, Marbella',
    disciplines: {
      es: ['Arquitectura', 'Urbanismo', 'Diseño'],
      en: ['Architecture', 'Urban Planning', 'Design'],
    },
    body: {
      es: [
        'El pueblo de San Pedro Alcántara tiene la fortuna de contar con un importante patrimonio histórico, incluyendo edificaciones romanas como las termas de Las Bóvedas y la basílica paleocristiana Vega del Mar.',
        'Buscando un diseño clásico a la vez que contemporáneo, decidimos reinterpretar uno de los elementos históricos más antiguos e importantes de la zona: la pila bautismal de la Basílica Vega del Mar, única en España por sus características. Con esta fuente buscamos, además de generar un espacio atractivo que invite a recorrer el parque de la avenida, hacer un reconocimiento a nuestra historia, a veces olvidada.',
        'La fuente se levanta del terreno de modo que podemos "entrar" en ella, ofreciendo una experiencia única en torno a sus chorros de agua, y atravesarla, desembocando en una plaza con zonas de estar protegidas del sol para después continuar el recorrido por la Avenida del Mediterráneo. No solo un elemento ornamental, sino una experiencia al pasar por ella.',
      ],
      en: [
        'San Pedro Alcántara boasts significant historical heritage, including the Roman baths of Las Bóvedas and the early Christian Vega del Mar Basilica.',
        'Seeking a design that is both classic and contemporary, we reinterpreted one of the area\'s oldest and most important historical elements: the baptismal font of the Vega del Mar Basilica, unique in Spain for its characteristics. Beyond creating an attractive feature that invites visitors to explore the avenue\'s park, the project is a tribute to a history that is sometimes overlooked.',
        'The fountain rises from the ground so that visitors can walk through it, experiencing the water jets at close range, and continue into a shaded plaza before rejoining the Mediterranean Avenue promenade. More than an ornamental feature — a lived experience.',
      ],
    },
    externalUrl: 'https://www.youtube.com/watch?v=NdnTqMqVmkI',
    externalLabel: {
      es: 'Ver vídeo del proyecto',
      en: 'Watch project video',
    },
  },
]

export function getProjectDetail(id: string): ProjectDetail | undefined {
  return projectDetails.find((p) => p.id === id)
}
