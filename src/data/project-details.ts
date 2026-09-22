export interface ProjectDetail {
  id: string;
  image?: string;
  title: { es: string; en: string };
  category: { es: string; en: string };
  year: string;
  architects: string[];
  studio: string;
  location: string;
  disciplines: { es: string[]; en: string[] };
  body: { es: string[]; en: string[] };
  images?: string[];
  externalUrl?: string;
  externalLabel?: { es: string; en: string };
}

export const projectDetails: ProjectDetail[] = [
  {
    id: "rehabilitacion-consistorial-marbella",
    image: "/ayuntamiento-marbella.jpg",
    title: {
      es: "Rehabilitación Edificio Consistorial Exmo. Ayuntamiento de Marbella",
      en: "Rehabilitation of Marbella City Hall",
    },
    category: {
      es: "Espacio Público",
      en: "Public Space",
    },
    year: "2026",
    architects: ["Andrés M. Mateo Fernández", "Rodrigo González"],
    studio: "MoMaA",
    location: "Marbella, Málaga",
    disciplines: {
      es: ["Arquitectura", "Urbanismo", "Diseño"],
      en: ["Architecture", "Urban Planning", "Design"],
    },
    body: {
      es: [
        "Estamos profundamente orgullosos de anunciar que las obras de reforma integral del Ayuntamiento de Marbella ya son una realidad. Como arquitectos de este proyecto, asumir el reto de intervenir en un edificio tan emblemático para nuestra ciudad es un honor y una responsabilidad que aceptamos con gran ilusión.",
        "No se trata solo de una obra de rehabilitación; es una apuesta por el futuro. Nuestro objetivo es devolver a los ciudadanos una Casa Consistorial más accesible, sostenible y eficiente. Estamos trabajando para que este espacio histórico se convierta en un referente de modernidad al servicio de todos los marbellíes.",
        "¡Hoy damos el primer paso de un camino que transformará el corazón de nuestra administración!",
      ],
      en: [
        "We are deeply proud to announce that the comprehensive renovation of Marbella City Hall is now a reality. As the architects of this project, taking on the challenge of working on such an iconic building for our city is an honor and a responsibility that we accept with great enthusiasm.",
        "This is not just a renovation; it is an investment in the future. Our goal is to give citizens back a more accessible, sustainable, and efficient City Hall. We are working to make this historic space a benchmark of modernity, serving all the residents of Marbella.",
        "Today we take the first step on a journey that will transform the heart of our administration!",
      ],
    },
    externalUrl:
      "https://www.marbella.es/actualidad/noticias/el-ayuntamiento-inicia-la-reforma-integral-de-la-casa-consistorial-que-permitira-un-ayuntamiento-mas-accesible-sostenible-y-eficiente-al-servicio-de-los-ciudadanos.html",
    externalLabel: {
      es: "Ver nota de prensa",
      en: "Read press release",
    },
  },
  {
    id: "las-joyas-estepona",
    image: "/lasjoyas-estepona.jpg",
    title: {
      es: '68 Viviendas "Las Joyas", Estepona',
      en: '68 Apartments "Las Joyas", Estepona',
    },
    category: {
      es: "Residencial",
      en: "Residential",
    },
    year: "2020–2022",
    architects: [
      "Manolo Herrera Mendoza. Arquitecto D.O.",
      "Andrés M. Mateo Fernández. Arquitecto D.O.",
    ],
    studio: "MoMaA",
    location: "Estepona, Málaga",
    disciplines: {
      es: ["Arquitectura", "Diseño Residencial"],
      en: ["Architecture", "Residential Design"],
    },
    body: {
      es: [
        "Aranya Estepona es un proyecto residencial plurifamiliar de diseño contemporáneo, proyectado bajo una premisa de integración paisajística y optimización funcional. Ubicado en una zona estratégica de Estepona (Málaga), concretamente en la zona de La Resina Golf, el conjunto ha sido diseñado para maximizar la calidad de vida de sus residentes a través de una arquitectura abierta y luminosa.",
        "El proyecto se compone de un conjunto de 68 viviendas de 1, 2 y 3 dormitorios, distribuidas en bloques de baja densidad. La volumetría del edificio se define por líneas limpias y una estética moderna, donde el juego de volúmenes en fachada permite generar amplias terrazas, un elemento clave para aprovechar el clima de la Costa del Sol.",
      ],
      en: [
        "Aranya Estepona is a contemporary multi-family residential project, designed with a focus on landscape integration and functional optimization. Located in a strategic area of Estepona (Málaga), specifically in the La Resina Golf area, the complex has been designed to maximize the quality of life for its residents through open and bright architecture.",
        "The project comprises 68 one-, two-, and three-bedroom apartments, distributed in low-density blocks. The building's volume is defined by clean lines and a modern aesthetic, where the interplay of volumes on the façade creates spacious terraces, a key element for taking advantage of the Costa del Sol's climate.",
      ],
    },
    externalUrl: "https://www.aelca.es/es/proyectos/aranya-estepona/",
    externalLabel: {
      es: "Ver proyecto en Aelca",
      en: "View project at Aelca",
    },
  },
  {
    id: "the-deck-benahavis",
    image: "/the-deck.jpeg",
    title: {
      es: 'Edificio Restauración y Oficinas Coworking "The Deck", Benahavís',
      en: '"The Deck" — Restaurant & Coworking Offices, Benahavís',
    },
    category: {
      es: "Urbanismo",
      en: "Urban Planning",
    },
    year: "2025",
    architects: ["Andrés M. Mateo Fernández. Arquitecto"],
    studio: "MoMaA",
    location: "Benahavís, Málaga",
    disciplines: {
      es: ["Arquitectura", "Urbanismo", "Diseño"],
      en: ["Architecture", "Urban Planning", "Design"],
    },
    body: {
      es: [
        "Ubicado en la urbanización Los Aguilares de Benahavís, este edificio recién terminado adopta una arquitectura programática y estratificada propuesta específicamente para responder al entorno y al uso del edificio. La planta baja se destina a hostelería, generando un espacio abierto y dinámico hacia la calle.",
        "En la primera planta, las oficinas y el área de coworking ofrecen un entorno luminoso y flexible, adaptado a nuevas formas de trabajo. La cubierta se concibe como una zona de descanso y relax, un mirador privilegiado hacia la montaña.",
        "El proyecto resuelve con precisión la complejidad de una parcela triangular en esquina, convirtiendo esa condición en una oportunidad para crear un volumen eficiente, distintivo y plenamente integrado en el paisaje.",
      ],
      en: [
        "Located in the Los Aguilares development in Benahavís, this newly completed building adopts a programmatic and stratified architecture specifically designed to respond to its surroundings and intended use. The ground floor is dedicated to hospitality, creating an open and dynamic space towards the street.",
        "On the first floor, the offices and coworking area offer a bright and flexible environment, adapted to new ways of working. The rooftop is conceived as a rest and relaxation area — a privileged viewpoint overlooking the mountains.",
        "The project precisely resolves the complexity of a triangular corner plot, turning that condition into an opportunity to create an efficient, distinctive volume fully integrated into the landscape.",
      ],
    },
  },
  {
    id: "casa-allure-marbella",
    image: "/casa-allure-marbella.jpg",
    title: {
      es: "Cascada de Camoján — Casa Allure, Marbella",
      en: "Cascada de Camoján — Casa Allure, Marbella",
    },
    category: {
      es: "Residencial",
      en: "Residential",
    },
    year: "2024–2025",
    architects: [
      "Andrés M. Mateo Fernández. Arquitecto D.O.",
      "Denis Mol del Río. Ingeniero de Caminos D.E.M. — Project Manager",
    ],
    studio: "MoMaA",
    location: "Cascada de Camoján, Marbella",
    disciplines: {
      es: ["Arquitectura", "Urbanismo", "Diseño"],
      en: ["Architecture", "Urban Planning", "Design"],
    },
    body: {
      es: [
        "Se trata de una vivienda única en un lugar privilegiado de Marbella donde dar riendas a tu imaginación para sumergirte en el lugar de ensueños donde la calidad, la funcionalidad y la elegancia —sin renunciar a su estética— son la base de todo el proyecto.",
        'Con objeto de conseguir una "Villa de Gran Calidad", este equipo de Arquitectura liderado por Andrés M. Mateo está formado por Arquitectos, Arquitectos Técnicos e Ingenieros para obtener el mejor resultado.',
      ],
      en: [
        "This is a unique home in a privileged location in Marbella, designed to let your imagination run free and immerse you in a dream place where quality, functionality, and elegance — all without sacrificing aesthetics — form the foundation of the entire project.",
        'To achieve a "High-Quality Villa," this architecture team led by Andrés M. Mateo includes architects, technical architects, and engineers to deliver the best possible outcome.',
      ],
    },
    externalUrl:
      "https://www.instagram.com/reel/DGfS8QtCiWD/?igsh=ODRrMGNycXUzbGVq",
    externalLabel: {
      es: "Ver en Instagram",
      en: "View on Instagram",
    },
  },
  {
    id: "cubierta-pabellon-carlos-cabezas",
    image: "/pabellon-carlos-cabezas.jpg",
    title: {
      es: "Cubierta Pista Deportiva Pabellón Carlos Cabezas, Marbella",
      en: "Sports Court Roof — Carlos Cabezas Pavilion, Marbella",
    },
    category: {
      es: "Espacio Público",
      en: "Public Space",
    },
    year: "2024",
    architects: ["Andrés M. Mateo Fernández. Arquitecto"],
    studio: "MoMaA",
    location: "Marbella, Málaga",
    disciplines: {
      es: ["Arquitectura", "Urbanismo", "Diseño"],
      en: ["Architecture", "Urban Planning", "Design"],
    },
    body: {
      es: [
        'La actuación de este proyecto se enmarca en la Pista Deportiva Exterior y en los cerramientos exteriores del Polideportivo Municipal "Carlos Cabezas", situado en la Calle Camino Cristo de los Molinos de Marbella. La instalación deportiva se ubica en la Urbanización "El Real Panorama" de la localidad.',
        "Actualmente, la zona de intervención se encuentra en buen estado y funcionamiento. El objetivo del proyecto es cubrir la pista exterior para poder darle mayor uso independientemente de la climatología.",
        "El ámbito de actuación total será de 1.222 m², con una longitud total de 47 m y un ancho de 26 m, y presenta una ligera pendiente transversal descendente hacia el este para la actual evacuación de pluviales (0,7%). Mediante la realización del presente proyecto se busca la adecuación de esta pista multideportiva para su uso más confortable en diferentes condiciones climatológicas.",
      ],
      en: [
        'This project focuses on the outdoor sports court and perimeter enclosures of the "Carlos Cabezas" Municipal Sports Center, located on Camino Cristo de los Molinos in Marbella, within the "El Real Panorama" urbanization.',
        "Currently, the area is in good condition and fully operational. The main goal is to cover the outdoor court to allow for greater use regardless of weather conditions.",
        "The intervention will cover a total area of 1,222 m², with dimensions of 47 meters in length and 26 meters in width, and a slight eastward slope (0.7%) for rainwater drainage. The project aims to adapt and enhance the multisport court, making it more comfortable and accessible year-round.",
      ],
    },
  },
  {
    id: "el-trapiche-casa-8",
    image: "/el-trapiche-casa-8-1.jpeg",
    images: [
      "/el-trapiche-casa-8-2.jpeg",
      "/el-trapiche-casa-8-3.jpeg",
      "/el-trapiche-casa-8-4.jpeg",
    ],
    title: {
      es: "El Trapiche, Casa 8, Marbella",
      en: "El Trapiche, House 8, Marbella",
    },
    category: {
      es: "Residencial",
      en: "Residential",
    },
    year: "2023",
    architects: ["Andrés M. Mateo Fernández. Arquitecto"],
    studio: "MoMaA",
    location: "El Trapiche, Marbella",
    disciplines: {
      es: ["Arquitectura", "Diseño Residencial"],
      en: ["Architecture", "Residential Design"],
    },
    body: {
      es: [
        "Situada en una parcela de esquina, esta vivienda fue concebida con la idea de tener unas vistas que admiraran, además del mar y la montaña, los restos de la antigua fábrica de azúcar de Marbella, hoy en día en rehabilitación.",
        "La vivienda se organiza por un lado en los recintos privados de dormitorios en la planta alta y, por otro, en los espacios públicos en planta baja. El espacio público dispone de un gran salón que se alarga con un porche abierto, proporcionando un comedor de verano frente a la piscina.",
        "El acceso a la parcela se enfrenta hacia la entrada enmarcada con dos torreones de la vivienda, donde recibe la puerta de acceso y se llega hasta el salón que enmarca la vista hacia Puerto Banús y la Concha de Marbella.",
      ],
      en: [
        "Located on a corner plot, this home was designed to offer views not only of the sea and mountains, but also of the historic remains of Marbella's old sugar factory, now under restoration.",
        "The layout separates private and public spaces: the upper floor houses the bedrooms, while the ground floor is reserved for shared living areas. The main living space extends into a covered porch, creating an outdoor summer dining area facing the pool.",
        "The entrance to the property is framed by two towers, guiding visitors through the main door and into the living room, which perfectly frames views of Puerto Banús and La Concha mountain.",
      ],
    },
    externalUrl:
      "https://listaroja.hispanianostra.org/ficha/trapiche-del-prado/",
    externalLabel: {
      es: "Ver ficha patrimonial",
      en: "View heritage record",
    },
  },
  {
    id: "49-viviendas-casares",
    image: "/49-viviendas-casares-1.jpg",
    images: [
      "/49-viviendas-casares-2.jpg",
      "/49-viviendas-casares-3.jpg",
      "/49-viviendas-casares-4.jpg",
      "/49-viviendas-casares-5.jpg",
    ],
    title: {
      es: "49 Viviendas en Casares — Royal Casares Homes, Neinor Homes",
      en: "49 Apartments in Casares — Royal Casares Homes, Neinor Homes",
    },
    category: {
      es: "Residencial",
      en: "Residential",
    },
    year: "2019–2021",
    architects: [
      "Manolo Herrera Mendoza. Arquitecto D.O.",
      "Andrés M. Mateo Fernández. Arquitecto D.E.",
    ],
    studio: "Atmosphere Project",
    location: "Casares, Málaga",
    disciplines: {
      es: ["Arquitectura", "Diseño Residencial"],
      en: ["Architecture", "Residential Design"],
    },
    body: {
      es: [
        "Proyecto residencial de 49 viviendas desarrollado en colaboración con Neinor Homes en Casares, Málaga. El conjunto, comercializado como Royal Casares Homes, responde a los estándares de calidad y diseño contemporáneo que caracterizan las promociones residenciales de la Costa del Sol.",
      ],
      en: [
        "A 49-unit residential project developed in collaboration with Neinor Homes in Casares, Málaga. The development, marketed as Royal Casares Homes, meets the quality and contemporary design standards that characterise residential projects on the Costa del Sol.",
      ],
    },
    externalUrl: "https://www.neinorhomes.com/promocion/royal-casares-homes",
    externalLabel: {
      es: "Ver promoción en Neinor Homes",
      en: "View development at Neinor Homes",
    },
  },
  {
    id: "villa-monte-mayor-benahavis",
    image: "/monte-mayor-benahavis.jpg",
    title: {
      es: "Vivienda en Monte Mayor, Benahavís",
      en: "House in Monte Mayor, Benahavís",
    },
    category: {
      es: "Residencial",
      en: "Residential",
    },
    year: "2020",
    architects: [
      "Andrés M. Mateo Fernández. Arquitecto",
      "Chus Fernández. Arquitecto Técnico",
    ],
    studio: "MoMaA",
    location: "Monte Mayor, Benahavís, Málaga",
    disciplines: {
      es: ["Arquitectura", "Urbanismo", "Diseño"],
      en: ["Architecture", "Urban Planning", "Design"],
    },
    body: {
      es: [
        "Se trata de una vivienda unifamiliar aislada de estilo andaluz en clave contemporánea ubicada en un entorno natural que invita al descanso. La vivienda se posiciona en el terreno buscando las vistas y se emplaza tratando de obtener el mejor aprovechamiento solar.",
        "La elección de materiales locales que respetan el medio ambiente, el diseño de la vivienda andaluza que mejor se adapta a las condiciones climáticas del sur de España, una envolvente térmica muy eficiente y el diseño y ejecución de sistemas de climatización de alta eficiencia hacen de esta vivienda un referente en arquitectura sostenible.",
      ],
      en: [
        "This is a detached single-family home in contemporary Andalusian style, set in a natural, peaceful environment. Positioned to maximise views and solar gain, the design responds to both the landscape and the local climate.",
        "The use of local, eco-friendly materials, an efficient thermal envelope, and high-performance HVAC systems — combined with the time-tested principles of Andalusian architecture — make this home a benchmark in sustainable residential design in southern Spain.",
      ],
    },
  },
  {
    id: "bungalow-los-monteros",
    image: "/bungalow-los-monteros-1.jpg",
    images: [
      "/bungalow-los-monteros-2.jpg",
      "/bungalow-los-monteros-3.jpg",
      "/bungalow-los-monteros-4.jpg",
      "/bungalow-los-monteros-5.jpg",
      "/bungalow-los-monteros-6.jpg",
      "/bungalow-los-monteros-7.jpg",
      "/bungalow-los-monteros-8.jpg",
      "/bungalow-los-monteros-9.jpg",
      "/bungalow-los-monteros-10.jpg",
    ],
    title: {
      es: "Rehabilitación Bungalow en Los Monteros, Marbella",
      en: "Bungalow Rehabilitation in Los Monteros, Marbella",
    },
    category: {
      es: "Residencial",
      en: "Residential",
    },
    year: "2019",
    architects: ["Andrés M. Mateo Fernández. Arquitecto"],
    studio: "MoMaA",
    location: "Los Monteros, Marbella",
    disciplines: {
      es: ["Arquitectura", "Diseño Residencial"],
      en: ["Architecture", "Residential Design"],
    },
    body: {
      es: [
        "Construidas en el año 1970, estas casas se caracterizan por la pureza de sus formas y la ausencia de ornamentos, evocando la tendencia artística de su creador y de la sociedad en la que se construyeron.",
        "En este contexto, se propone la rehabilitación de una de estas singulares casas con un estilo contemporáneo, con el objetivo de respetar su carácter histórico y, a la vez, resolver el programa de la nueva familia sin renunciar a las exigencias de habitabilidad y sostenibilidad de nuestra época, empleando materiales autóctonos.",
        "La antigua compartimentación se reestructura para lograr un mejor aprovechamiento de la planta, donde la luz y la transparencia se funden para integrar el exterior en el interior mediante una secuencia de espacios abiertos que enlazan la cocina, el comedor y el salón, todos abiertos hacia las terrazas.",
        "La vivienda culmina en la planta cubierta con un auténtico festival para los sentidos: un espacio familiar al aire libre concebido para la relajación y desde el que perderse con la mirada hacia la montaña o el mar.",
        "En el exterior, se actúa para crear zonas verdes de bajo consumo hídrico, dejando respirar la parcela y aprovechando la frondosa vegetación que la rodea.",
      ],
      en: [
        "Built in the 1970s, this housing complex is defined by the purity of its forms and the absence of ornamentation — features that reflect both the artistic vision of its creator and the cultural context of the time.",
        "The rehabilitation of one of these unique homes is proposed with a contemporary approach, aiming to respect its historical character while adapting it to the needs of a new family. The project embraces modern habitability and sustainability standards, using local materials throughout.",
        "The original layout has been restructured to optimise the floor plan, allowing light and transparency to flow freely. A sequence of open spaces connects the kitchen, dining room, and living room — all opening onto the terraces — integrating the outdoors with the interior.",
        "The home culminates on the rooftop, envisioned as a true sensory retreat: an open-air family space designed for relaxation, where the gaze can wander freely toward the mountains or the sea.",
        "The exterior landscaping has been reimagined with low-water-consumption green areas, allowing the plot to breathe while making the most of the lush vegetation that surrounds it.",
      ],
    },
  },
  {
    id: "bungalow-caribplaya",
    image: "/bungalow-caribplaya-1.jpg",
    images: [
      "/bungalow-caribplaya-2.jpg",
      "/bungalow-caribplaya-3.jpg",
      "/bungalow-caribplaya-4.jpg",
      "/bungalow-caribplaya-5.jpg",
    ],
    title: {
      es: "Rehabilitación de Bungalow en Caribplaya, Marbella",
      en: "Bungalow Rehabilitation in Caribplaya, Marbella",
    },
    category: {
      es: "Residencial",
      en: "Residential",
    },
    year: "2018",
    architects: ["Andrés M. Mateo Fernández. Arquitecto"],
    studio: "MoMaA",
    location: "Caribplaya, Marbella",
    disciplines: {
      es: ["Arquitectura", "Diseño Residencial"],
      en: ["Architecture", "Residential Design"],
    },
    body: {
      es: [
        "Ubicado en la urbanización Caribplaya, este bungalow de planta compacta y vocación costera se somete a una rehabilitación integral que busca actualizar sus prestaciones sin perder el carácter propio de la arquitectura vacacional de la Costa del Sol.",
        "La intervención reordena la distribución interior para liberar el espacio de día, potenciando la relación visual y funcional con el exterior. La entrada de luz natural se convierte en el elemento articulador del proyecto: las estancias se abren hacia los espacios exteriores, difuminando los límites entre el interior y el jardín o la terraza.",
        "La selección de materiales, la paleta cromática neutra y la reducción de los elementos superfluos buscan una arquitectura honesta que dialogue con el entorno mediterráneo, priorizando el confort térmico y la eficiencia energética en consonancia con el clima del sur.",
      ],
      en: [
        "Located in the Caribplaya urbanisation, this compact coastal bungalow undergoes a full rehabilitation aimed at updating its performance while preserving the character of Costa del Sol holiday architecture.",
        "The intervention reorganises the interior layout to open up the daytime living areas, strengthening the visual and functional connection with the outdoors. Natural light becomes the central organising element: spaces open towards terraces and garden, blurring the boundary between inside and out.",
        "The material palette, neutral tones and reduction of superfluous elements pursue an honest architecture in dialogue with the Mediterranean setting, prioritising thermal comfort and energy efficiency in harmony with the southern climate.",
      ],
    },
  },
  {
    id: "casa-l-nueva-andalucia",
    image: "/casa-l-nueva-andalucia-1.jpg",
    title: {
      es: "Casa L. Luis de Góngora, Nueva Andalucía, Marbella",
      en: "Casa L. Luis de Góngora, Nueva Andalucía, Marbella",
    },
    category: {
      es: "Residencial",
      en: "Residential",
    },
    year: "2023",
    architects: [
      "José Moreno González. Arquitecto",
      "Andrés M. Mateo. Arquitecto",
    ],
    studio: "MoMaA",
    location: "Nueva Andalucía, Marbella",
    disciplines: {
      es: ["Arquitectura", "Diseño Residencial"],
      en: ["Architecture", "Residential Design"],
    },
    body: {
      es: [
        "Esta vivienda emplazada en la Costa del Sol aprovecha la fuerte pendiente del terreno para acompañar a la vivienda e ir adaptándose a la topografía. Se desarrolla en dos plantas de tipología invertida: se accede por la planta primera, donde se encuentran los espacios públicos, y a través de las escaleras como eje vertebrador se llega a la planta baja, donde se organizan los espacios íntimos alrededor de la piscina.",
        "Sus fachadas son minimalistas, presentando desde la calle una caja compacta y contenida, al tiempo que se abre de forma generosa hacia el sur a través de grandes cristaleras que abrazan las vistas y la luz natural.",
      ],
      en: [
        "This home, located on the Costa del Sol, takes advantage of the steep slope of the terrain by adapting its layout to the natural topography. It is designed across two levels with an inverted layout: the entrance is on the upper floor, which hosts the public living spaces, while the private areas are located on the lower floor, organised around the pool and accessed via a central staircase.",
        "The façades are minimalist — presenting a compact, understated volume from the street, while opening generously to the south through large glazed surfaces that embrace the views and natural light.",
      ],
    },
  },
  {
    id: "santa-maria-golf-casa-11",
    image: "/santa-maria-golf-casa-11-1.jpeg",
    images: [
      "/santa-maria-golf-casa-11-2.jpeg",
      "/santa-maria-golf-casa-11-3.jpeg",
    ],
    title: {
      es: "Santa María Golf, Casa 11, Marbella",
      en: "Santa María Golf, House 11, Marbella",
    },
    category: {
      es: "Residencial",
      en: "Residential",
    },
    year: "2023",
    architects: [
      "José Moreno González. Arquitecto",
      "Andrés M. Mateo. Arquitecto",
    ],
    studio: "MoMaA",
    location: "Santa María Golf, Marbella",
    disciplines: {
      es: ["Arquitectura", "Diseño Residencial"],
      en: ["Architecture", "Residential Design"],
    },
    body: {
      es: [
        "Vivienda unifamiliar aislada en la urbanización Santa María Golf de Marbella, un entorno privilegiado que combina la tranquilidad del campo de golf con la proximidad al mar. El proyecto se concibe como una residencia contemporánea de carácter mediterráneo, integrada en el paisaje vegetal que la rodea.",
        "La distribución interior se organiza en torno a los espacios de convivencia en planta baja, abiertos al jardín y la piscina a través de grandes ventanales que disuelven el límite entre el interior y el exterior. La fachada adopta un lenguaje limpio y depurado, con una composición de volúmenes que responde tanto a las condiciones de orientación solar como a las vistas hacia el entorno natural.",
      ],
      en: [
        "A detached single-family home in the Santa María Golf urbanisation in Marbella — a privileged setting that combines the tranquility of the golf course with proximity to the sea. The project is conceived as a contemporary Mediterranean residence, integrated into the lush landscape that surrounds it.",
        "The interior layout is organised around the main living spaces on the ground floor, opened to the garden and pool through large glazed surfaces that dissolve the boundary between indoors and out. The façade adopts a clean, refined language, with a composition of volumes that responds both to solar orientation and to views across the natural surroundings.",
      ],
    },
  },
  {
    id: "apartamento-atico-bahia-marbella",
    image: "/apartamento-atico-bahia-marbella-1.jpg",
    images: [
      "/apartamento-atico-bahia-marbella-2.jpg",
      "/apartamento-atico-bahia-marbella-3.jpg",
      "/apartamento-atico-bahia-marbella-4.jpg",
      "/apartamento-atico-bahia-marbella-5.jpg",
      "/apartamento-atico-bahia-marbella-6.jpg",
      "/apartamento-atico-bahia-marbella-7.jpg",
      "/apartamento-atico-bahia-marbella-8.jpg",
    ],
    title: {
      es: "Reforma Apartamento Ático con Vista al Mediterráneo, Bahía de Marbella",
      en: "Penthouse Renovation with Mediterranean Views, Bahía de Marbella",
    },
    category: {
      es: "Interiorismo",
      en: "Interior Design",
    },
    year: "2022",
    architects: ["Andrés M. Mateo Fernández. Arquitecto"],
    studio: "MoMaA",
    location: "Bahía de Marbella, Marbella",
    disciplines: {
      es: ["Arquitectura", "Interiorismo", "Diseño"],
      en: ["Architecture", "Interior Design", "Design"],
    },
    body: {
      es: [
        "Situado en una zona privilegiada de Marbella, en la urbanización Bahía de Marbella, esta intervención planteó como objetivo y reto la reforma interior de un apartamento ático. El diseño potencia las vistas al Mediterráneo a través de una distribución limpia y abierta que ha creado ambientes prácticos y funcionales sin renunciar a la estética.",
        "La cuidada elección de la materialidad y de las instalaciones completa un resultado atractivo y sostenible, donde cada decisión de diseño responde a la orientación, la luz y la relación visual con el mar.",
      ],
      en: [
        "Located in the exclusive Bahía de Marbella development, this project set out to renovate the interior of a penthouse apartment — an intervention that posed both a clear goal and a real challenge.",
        "The design enhances the apartment's stunning Mediterranean views through a clean, open layout that creates practical, functional spaces without compromising on aesthetics. Careful selection of materials and systems completes a renovation that is not only visually appealing but also sustainable.",
      ],
    },
  },
  {
    id: "piscina-solarium-alicates-playas",
    image: "/piscina-solarium-alicates-playas-1.jpg",
    images: [
      "/piscina-solarium-alicates-playas-2.jpg",
      "/piscina-solarium-alicates-playas-3.jpg",
      "/piscina-solarium-alicates-playas-4.jpg",
      "/piscina-solarium-alicates-playas-5.jpg",
      "/piscina-solarium-alicates-playas-6.jpg",
    ],
    title: {
      es: "Piscina y Solarium en Alicates Playas, Marbella",
      en: "Pool & Sun Deck in Alicates Playas, Marbella",
    },
    category: {
      es: "Interiorismo",
      en: "Interior Design",
    },
    year: "2022",
    architects: ["Andrés M. Mateo. Proyectista"],
    studio: "MoMaA",
    location: "Alicates Playas, Marbella",
    disciplines: {
      es: ["Diseño", "Interiorismo", "Paisajismo"],
      en: ["Design", "Interior Design", "Landscaping"],
    },
    body: {
      es: [
        "El proyecto trata de mejorar una piscina en una vivienda unifamiliar existente, algo obsoleta. Se pretende crear una nueva relación con el increíble jardín de la vivienda a través de un solárium como elemento de transición.",
        "Se plantea cambiar todo el revestimiento de la piscina, diseñar una zona de relax interior del agua y crear un vaso de compensación que permita conseguir un efecto infinity y, a su vez, disponer de una pequeña zona de juego para los niños. Las obsoletas instalaciones son sustituidas por sistemas modernos, dotando el conjunto de una iluminación cálida y de calidad que entona con el jardín.",
        "El solárium, como elemento de transición y descanso, está inspirado en el estilo ibicenco: blanco, limpio y en diálogo permanente con la vegetación mediterránea que lo rodea.",
      ],
      en: [
        "The project focuses on upgrading an outdated pool in a single-family home, aiming to enhance its connection with the home's stunning garden through a sun deck as a transitional element.",
        "Plans include replacing all pool finishes, adding a relaxing in-water lounge area, and creating a compensation tank to achieve an infinity effect, while also incorporating a small play area for children. The outdated systems are replaced with modern installations, and warm, quality lighting is added to harmonise with the garden.",
        "The sun deck, serving as both a transitional and relaxation space, draws inspiration from the Ibizan style — white, clean and in constant dialogue with the surrounding Mediterranean landscape.",
      ],
    },
    externalUrl: "https://goo.gl/maps/KF9oaWEcVq6ZgwZn9",
    externalLabel: {
      es: "Ver ubicación",
      en: "View location",
    },
  },
  {
    id: "fuente-bautismal-san-pedro",
    image: "/fuente-bautismal-san-pedro-1.jpg",
    images: [
      "/fuente-bautismal-san-pedro-2.jpg",
      "/fuente-bautismal-san-pedro-3.jpg",
      "/fuente-bautismal-san-pedro-4.jpg",
      "/fuente-bautismal-san-pedro-5.jpg",
      "/fuente-bautismal-san-pedro-6.jpg",
      "/fuente-bautismal-san-pedro-7.jpg",
    ],
    title: {
      es: "Fuente Bautismal, San Pedro Alcántara, Marbella",
      en: "Baptismal Fountain, San Pedro Alcántara, Marbella",
    },
    category: {
      es: "Espacio Público",
      en: "Public Space",
    },
    year: "2022",
    architects: ["Andrés M. Mateo Fernández. Arquitecto"],
    studio: "MoMaA",
    location: "San Pedro Alcántara, Marbella",
    disciplines: {
      es: ["Arquitectura", "Urbanismo", "Diseño"],
      en: ["Architecture", "Urban Planning", "Design"],
    },
    body: {
      es: [
        "El pueblo de San Pedro Alcántara tiene la fortuna de contar con un importante patrimonio histórico, incluyendo edificaciones romanas como las termas de Las Bóvedas y la basílica paleocristiana Vega del Mar.",
        "Buscando un diseño clásico a la vez que contemporáneo, decidimos reinterpretar uno de los elementos históricos más antiguos e importantes de la zona: la pila bautismal de la Basílica Vega del Mar, única en España por sus características. Con esta fuente buscamos, además de generar un espacio atractivo que invite a recorrer el parque de la avenida, hacer un reconocimiento a nuestra historia, a veces olvidada.",
        'La fuente se levanta del terreno de modo que podemos "entrar" en ella, ofreciendo una experiencia única en torno a sus chorros de agua, y atravesarla, desembocando en una plaza con zonas de estar protegidas del sol para después continuar el recorrido por la Avenida del Mediterráneo. No solo un elemento ornamental, sino una experiencia al pasar por ella.',
      ],
      en: [
        "San Pedro Alcántara boasts significant historical heritage, including the Roman baths of Las Bóvedas and the early Christian Vega del Mar Basilica.",
        "Seeking a design that is both classic and contemporary, we reinterpreted one of the area's oldest and most important historical elements: the baptismal font of the Vega del Mar Basilica, unique in Spain for its characteristics. Beyond creating an attractive feature that invites visitors to explore the avenue's park, the project is a tribute to a history that is sometimes overlooked.",
        "The fountain rises from the ground so that visitors can walk through it, experiencing the water jets at close range, and continue into a shaded plaza before rejoining the Mediterranean Avenue promenade. More than an ornamental feature — a lived experience.",
      ],
    },
    externalUrl: "https://www.youtube.com/watch?v=NdnTqMqVmkI",
    externalLabel: {
      es: "Ver vídeo del proyecto",
      en: "Watch project video",
    },
  },
  {
    id: "villa-ocean",
    image: "/villa-ocean-1.jpg",
    images: [
      "/villa-ocean-2.jpg",
      "/villa-ocean-3.jpg",
      "/villa-ocean-4.jpg",
      "/villa-ocean-5.jpg",
      "/villa-ocean-6.jpg",
      "/villa-ocean-7.jpg",
      "/villa-ocean-8.jpg",
      "/villa-ocean-9.jpg",
      "/villa-ocean-10.jpg",
      "/villa-ocean-11.jpg",
      "/villa-ocean-12.jpg",
    ],
    title: {
      es: "Villa Ocean, Marbella",
      en: "Villa Ocean, Marbella",
    },
    category: {
      es: "Residencial",
      en: "Residential",
    },
    year: "2015",
    architects: [
      "Ángel Taborda. Arquitecto",
      "Andrés M. Mateo. Arquitecto Técnico",
      "Andrés M. Mateo. Project Manager",
      "Marcresun. Constructora",
    ],
    studio: "MoMaA",
    location: "Marbella, Málaga",
    disciplines: {
      es: ["Arquitectura", "Dirección de Obra", "Project Management"],
      en: ["Architecture", "Construction Management", "Project Management"],
    },
    body: {
      es: [
        "Villa Ocean es una vivienda unifamiliar de líneas contemporáneas situada en una de las zonas más privilegiadas de Marbella, concebida para establecer un diálogo constante entre la arquitectura y el mar Mediterráneo.",
        "La distribución interior se articula en torno a amplios espacios abiertos que maximizan las vistas y la entrada de luz natural, mientras que la elección de materiales nobles y la atención al detalle constructivo definen un resultado de alta calidad y vocación duradera.",
        "El proyecto contó con la dirección técnica y gestión de proyecto de Andrés M. Mateo, garantizando el control de calidad y los plazos de ejecución con la constructora Marcresun.",
      ],
      en: [
        "Villa Ocean is a contemporary single-family home situated in one of the most privileged areas of Marbella, conceived to establish a constant dialogue between architecture and the Mediterranean Sea.",
        "The interior layout is articulated around generous open spaces that maximise the views and natural light, while the selection of quality materials and attention to constructive detail define a high-quality, enduring result.",
        "The project was managed by Andrés M. Mateo as Technical Architect and Project Manager, ensuring quality control and construction timelines in collaboration with Marcresun.",
      ],
    },
    externalUrl: "https://momaa.es/villa-ocean/",
    externalLabel: {
      es: "Ver en MoMaA",
      en: "View on MoMaA",
    },
  },
  {
    id: "centro-usos-multiples-ermita-calvario",
    image: "/centro-usos-multiples-ermita-calvario.jpg",
    title: {
      es: "Centro de Usos Múltiples junto a la Ermita del Calvario",
      en: "Multi-Use Centre at the Ermita del Calvario",
    },
    category: {
      es: "Espacio Público",
      en: "Public Space",
    },
    year: "2026",
    architects: ["Andrés M. Mateo Fernández. Arquitecto"],
    studio: "MoMaA",
    location: "Marbella, Málaga",
    disciplines: {
      es: ["Arquitectura", "Urbanismo", "Diseño"],
      en: ["Architecture", "Urban Planning", "Design"],
    },
    body: {
      es: [
        "Comienza la construcción de un nuevo centro de usos múltiples junto a la Ermita del Calvario. Desde el equipo de MoMaA, queremos expresar nuestro más sincero agradecimiento al Ayuntamiento por la confianza depositada en nuestro estudio para proyectar este nuevo equipamiento.",
        "Nos hace especial ilusión ver cómo arranca este proyecto que busca el equilibrio perfecto entre la modernidad y el respeto al entorno histórico de la ermita. El diseño, basado en cubiertas plegadas y lucernarios para aprovechar la luz natural, ha sido pensado para integrarse de forma sostenible en el paisaje, mimetizándose con la arboleda mediante una estructura ligera y contemporánea.",
        "¡Estamos deseando ver este espacio lleno de vida!",
      ],
      en: [
        "Construction begins on a new multipurpose centre next to the Ermita del Calvario. From the MoMaA team, we want to express our sincere gratitude to the City Council for the trust placed in our studio to design this new facility.",
        "We are especially excited to see this project get underway, a project that seeks the perfect balance between modernity and respect for the historic surroundings of the hermitage. The design, based on folded roofs and skylights to take advantage of natural light, has been conceived to integrate sustainably into the landscape, blending seamlessly with the trees through a light and contemporary structure.",
        "We can’t wait to see this space come alive!",
      ],
    },
    externalUrl:
      "https://www.marbella.es/actualidad/noticias/el-ayuntamiento-inicia-la-construccion-de-un-nuevo-centro-de-usos-multiples-junto-a-la-ermita-del-calvario-que-ampliara-los-espacios-culturales-y-sociales-del-municipio.html",
    externalLabel: {
      es: "Ver nota de prensa",
      en: "Read press release",
    },
  },
  {
    id: "biblioteca-san-pedro",
    image: "/biblioteca-san-pedro.jpg",
    title: {
      es: "Biblioteca Municipal de San Pedro de Alcántara",
      en: "San Pedro de Alcántara Municipal Library",
    },
    category: {
      es: "Espacio Público",
      en: "Public Space",
    },
    year: "2025",
    architects: ["Andrés M. Mateo Fernández. Arquitecto"],
    studio: "MoMaA",
    location: "San Pedro de Alcántara, Marbella, Málaga",
    disciplines: {
      es: ["Arquitectura", "Urbanismo", "Diseño"],
      en: ["Architecture", "Urban Planning", "Design"],
    },
    body: {
      es: [
        "El estudio de arquitectura MoMaA ha expresado su orgullo al confirmarse la próxima ejecución de su proyecto para la nueva Biblioteca de San Pedro de Alcántara. Este importante espacio cultural está destinado a convertirse en un punto de encuentro para la comunidad, ofreciendo un diseño innovador y sostenible que refleja el compromiso de MoMaA con la arquitectura de calidad y el respeto al entorno.",
        '"Estamos encantados de ver cómo este proyecto cobra vida y confiamos en que la Biblioteca de San Pedro de Alcántara se convertirá en un referente cultural para la zona", señalaron desde el estudio. La nueva biblioteca, que destaca por su funcionalidad y estética contemporánea, brindará un ambiente acogedor y versátil para todos los usuarios.',
        "Con este nuevo proyecto, MoMaA consolida su reputación como un estudio líder en el desarrollo de espacios públicos significativos que promueven la cultura y el bienestar comunitario.",
      ],
      en: [
        "The architecture firm MoMaA has expressed pride upon the confirmation of the upcoming construction of their project for the new San Pedro de Alcántara Library. This important cultural space is set to become a community hub, featuring an innovative and sustainable design that reflects MoMaA’s commitment to quality architecture and environmental respect.",
        '"We are delighted to see this project come to life and confident that the San Pedro de Alcántara Library will become a cultural landmark in the area," the firm stated. The new library, notable for its functionality and contemporary aesthetics, will offer a welcoming and versatile environment for all users.',
        "With this project, MoMaA strengthens its reputation as a leading firm in creating meaningful public spaces that promote culture and community well-being.",
      ],
    },
    externalUrl:
      "https://www.marbella.es/actualidad/noticias/el-ayuntamiento-adjudica-las-obras-para-la-nueva-biblioteca-de-san-pedro-alcantara-que-comenzara-a-construirse-en-el-mes-de-junio.html",
    externalLabel: {
      es: "Ver nota de prensa",
      en: "Read press release",
    },
  },
  {
    id: "intervencion-parque-al-andalus",
    title: {
      es: "Creando Ciudad — Intervención Urbana Parque Al Ándalus",
      en: "Creating City — Urban Intervention Al Ándalus Park",
    },
    category: {
      es: "Urbanismo",
      en: "Urban Planning",
    },
    image: "/intervencion-parque-al-andalus-1.jpg",
    images: [
      "/intervencion-parque-al-andalus-2.jpg",
      "/intervencion-parque-al-andalus-1.jpeg",
    ],
    year: "2023",
    architects: ["Andrés M. Mateo Fernández. Arquitecto"],
    studio: "MoMaA",
    location: "San Pedro de Alcántara, Marbella, Málaga",
    disciplines: {
      es: ["Arquitectura", "Urbanismo", "Diseño"],
      en: ["Architecture", "Urban Planning", "Design"],
    },
    body: {
      es: [
        "Estamos muy orgullosos de contribuir con esta intervención urbana que permita hacer de nuestra ciudad un lugar más amable y humano.",
        "Situado en el Distrito Municipal de San Pedro Alcántara se encuentra una jardinera arbórea paralela a la fachada del Colegio Público Al-Ándalus. Dicho espacio brinda la oportunidad de, a través de una pequeña intervención de cirugía urbana, crear una zona verde que permitirá el uso de la misma por parte de los alumnos del colegio y también por los vecinos de la zona.",
      ],
      en: [
        "We are very proud to contribute to this urban intervention that helps make our city a more welcoming and human place.",
        'Located in the Municipal District of San Pedro Alcántara, a tree-lined planter runs parallel to the façade of the Al-Ándalus Public School. This space offers the opportunity — through a small urban "surgical" intervention — to create a green area that can be enjoyed both by the school\'s students and by local residents.',
      ],
    },
    externalUrl:
      "https://www.diariosur.es/marbella/nueva-zona-verde-aparcamientos-bicis-entorno-colegio-20230921181352-nt.html",
    externalLabel: {
      es: "Ver nota de prensa",
      en: "Read press release",
    },
  },
  {
    id: "two-houses-fuengirola",
    image: "/two-houses-fuengirola-1.jpg",
    images: [
      "/two-houses-fuengirola-2.jpg",
      "/two-houses-fuengirola-3.jpg",
      "/two-houses-fuengirola-4.jpg",
      "/two-houses-fuengirola-5.jpg",
    ],
    title: {
      es: "Two Houses in Fuengirola",
      en: "Two Houses in Fuengirola",
    },
    category: {
      es: "Residencial",
      en: "Residential",
    },
    year: "2022",
    architects: ["Andrés M. Mateo. Proyectista"],
    studio: "MoMaA",
    location: "Fuengirola, Málaga",
    disciplines: {
      es: ["Arquitectura", "Diseño Residencial"],
      en: ["Architecture", "Residential Design"],
    },
    body: {
      es: [
        "La propuesta supuso la idea de investigar y reformular la creación de dos hogares que se han unido para convivir como una única familia manteniendo a su vez su independencia.",
        "El emplazamiento es un lugar con unas vistas impresionantes de la Costa del Sol sin ningún tipo de filtro, donde se pretende implantar las viviendas con el objetivo de mantener las distancias y crear independencia.",
        "La idea parte de generar dos viviendas independientes en la misma parcela con un programa que se organiza con amplias plantas bajas diáfanas donde se organizan los espacios de convivencia como son la cocina y el salón y, en las plantas altas, el programa privativo de los dormitorios.",
        "Los emplazamientos de los dos volúmenes se han dispuesto paralelos a la línea de la costa y de esta manera aprovechan al máximo la luz y las vistas tan privilegiadas del lugar.",
      ],
      en: [
        "The proposal explored how to design and reimagine two homes brought together to live as one extended family, while preserving each household’s independence.",
        "Set in a location with uninterrupted views of the Costa del Sol, the goal was to place the homes in a way that maintains privacy and distance between them.",
        "The concept consists of two independent houses on the same plot. Each features an open-plan ground floor for shared living spaces like the kitchen and living room, and a private upper floor for bedrooms.",
        "Both volumes are oriented parallel to the coastline to maximize natural light and fully capture the site’s exceptional views.",
      ],
    },
    externalUrl: "https://www.fuengirola.es/",
    externalLabel: {
      es: "Ayuntamiento de Fuengirola",
      en: "Fuengirola City Council",
    },
  },
  {
    id: "aparcamiento-ojen",
    image: "/aparcamiento-ojen-1.jpg",
    images: [
      "/aparcamiento-ojen-2.jpg",
      "/aparcamiento-ojen-3.jpg",
      "/aparcamiento-ojen-4.jpg",
      "/aparcamiento-ojen-5.jpg",
      "/aparcamiento-ojen-6.jpg",
      "/aparcamiento-ojen-7.jpg",
    ],
    title: {
      es: "Aparcamiento Subterráneo junto al Consultorio Médico, Ojén",
      en: "Underground Car Park at the Medical Centre, Ojén",
    },
    category: {
      es: "Urbanismo",
      en: "Urban Planning",
    },
    year: "2021",
    architects: ["Andrés M. Mateo Fernández. Arquitecto"],
    studio: "MoMaA",
    location: "Ojén, Málaga",
    disciplines: {
      es: ["Arquitectura", "Urbanismo", "Diseño"],
      en: ["Architecture", "Urban Planning", "Design"],
    },
    body: {
      es: [
        "El Ayuntamiento de Ojén está llevando a cabo un plan para ejecutar un aparcamiento bajo rasante ante el déficit de aparcamientos existentes en el casco urbano, para atender la demanda tanto de los vecinos como de los visitantes a la ciudad, con el objeto de mejorar la accesibilidad y el problema de aparcamiento en un espacio actualmente deteriorado.",
        "Con objeto de conseguir un resultado de excelente calidad, se ha unido este equipo formado por la suma de las empresas SiteSur y Urinci que, con el apoyo del estudio de arquitectura e ingeniería MoMaA bajo la dirección del arquitecto Andrés M. Mateo, han realizado una propuesta conjunta ganadora bajo la premisa de los condicionantes y el programa solicitado que han marcado la propuesta arquitectónica.",
      ],
      en: [
        "The Ojén Town Council is carrying out a plan to build an underground car park in response to the shortage of parking in the town centre, in order to meet demand from both residents and visitors while improving accessibility and resolving the parking problem in a currently deteriorated space.",
        "To achieve an excellent-quality result, a team was formed combining the companies SiteSur and Urinci, who, with the support of the architecture and engineering firm MoMaA under the direction of architect Andrés M. Mateo, developed a joint winning proposal shaped by the constraints and brief that defined the architectural approach.",
      ],
    },
    externalUrl:
      "https://momaa.es/aparcamiento-sub-terraneo-junto-al-centro-medico-ojen/",
    externalLabel: {
      es: "Ver en MoMaA",
      en: "View on MoMaA",
    },
  },
  {
    id: "casa-torreon-marbella",
    image: "/casa-torreon-marbella-1.jpg",
    images: [
      "/casa-torreon-marbella-2.jpg",
      "/casa-torreon-marbella-3.jpg",
      "/casa-torreon-marbella-4.jpg",
      "/casa-torreon-marbella-5.jpg",
      "/casa-torreon-marbella-6.jpg",
      "/casa-torreon-marbella-7.jpg",
      "/casa-torreon-marbella-8.jpg",
    ],
    title: {
      es: "Casa Torreón, Ampliación y Rehabilitación de Viv. Unifamiliar, Marbella",
      en: "Casa Torreón, Extension and Renovation of a Single-Family Home, Marbella",
    },
    category: {
      es: "Residencial",
      en: "Residential",
    },
    year: "2021",
    architects: ["Andrés M. Mateo Fernández. Arquitecto"],
    studio: "MoMaA",
    location: "Marbella, Málaga",
    disciplines: {
      es: ["Arquitectura", "Urbanismo", "Diseño"],
      en: ["Architecture", "Urban Planning", "Design"],
    },
    body: {
      es: [
        "El objetivo del cliente para este encargo fue, por un lado, revitalizar la antigua vivienda adquirida y, por otro, ampliarla de acuerdo a las necesidades de la joven familia. Para ello, se propuso una intervención de un nuevo volumen anexo a la vivienda que surge como consecuencia de adaptar la vivienda a las necesidades que incorpora un dormitorio en planta alta y una sala de juegos para los niños en la planta baja.",
        "También se ejecuta un porche orientado hacia el sur que brinda un espacio para comedor y que protege del sol el salón, y sobre este se propuso un nuevo programa para la terraza de la planta alta, creándose un solárium y zona de relax.",
        "Se aprovecha la intervención para dotar la vivienda de una mejor envolvente térmica que mejora su eficiencia energética, introduciendo un mejor aislamiento y pequeñas viseras en los huecos de ventanas para un mejor control solar y confort de la casa. Con esta intervención en su diseño y materialidad, la vivienda cumple con los estándares de un diseño sostenible (Passive House).",
      ],
      en: [
        "The client’s goal was to revitalize an old home and expand it to meet the needs of a young family. The project adds a new annex volume, including an upstairs bedroom and a children’s playroom below.",
        "A south-facing porch provides a dining area and sun protection for the living room. Above, a new terrace was designed with a solarium and relaxation space.",
        "The renovation also improves the thermal envelope with better insulation and small window shades for enhanced solar control and comfort. This intervention aligns the home with sustainable design standards, achieving Passive House efficiency.",
      ],
    },
    externalUrl:
      "https://momaa.es/casa-torreon-ampliacion-y-rehabilitacion-de-vivienda-unifamiliar-marbella/",
    externalLabel: {
      es: "Ver en MoMaA",
      en: "View on MoMaA",
    },
  },
  {
    id: "escuela-danza-musica-san-pedro",
    image: "/escuela-danza-musica-san-pedro-1.jpg",
    images: [
      "/escuela-danza-musica-san-pedro-2.jpg",
      "/escuela-danza-musica-san-pedro-3.jpg",
      "/escuela-danza-musica-san-pedro-4.jpg",
    ],
    title: {
      es: "Concurso Escuela de Danza y Música, San Pedro Alcántara, Marbella",
      en: "Dance and Music School Competition, San Pedro Alcántara, Marbella",
    },
    category: {
      es: "Espacio Público",
      en: "Public Space",
    },
    year: "2021",
    architects: [
      "Andrés M. Mateo Fernández. Arquitecto",
      "Cristina Andrea Carrasco Brenes. Arquitecta",
      "Rodrigo González Díaz-Caneja. Arquitecto",
    ],
    studio: "MoMaA",
    location: "San Pedro de Alcántara, Marbella, Málaga",
    disciplines: {
      es: ["Arquitectura", "Urbanismo", "Diseño"],
      en: ["Architecture", "Urban Planning", "Design"],
    },
    body: {
      es: [
        "En la actualidad las escuelas de música y danza se han convertido en un equipamiento fundamental en los municipios por su contribución al desarrollo intelectual, estético y social de la persona. Son artes que favorecen la expresión física, emocional y estética de quien las desarrolla, ayudando a la formación de su personalidad, al tiempo que se relaciona con un grupo de personas afines a un mismo objetivo.",
        "La escuela se ubica en una zona en crecimiento del distrito de San Pedro Alcántara, en el barrio del Ingenio, en un entorno urbano cerca de la antigua fábrica de azúcar. El proyecto tiene como ambición no solo crear una escuela de Música y Danza, sino activar una zona de la ciudad actualmente en su ignición de desarrollo, marcando así las expectativas de calidad urbana que se quieren para esta zona. De esta manera, el edificio se define como un volumen sin grandes pretensiones, pero muy sensible hacia los edificios del ingenio, realizado a una escala humana para la apropiación de este nuevo elemento por sus vecinos.",
        "El edificio resuelve la relación con su entorno a través de sus fachadas y volumetría, con una fachada continua que puede leerse como una partitura armónica que evidencia sutilmente su relación con el pasado industrial de la zona. Se desarrolla en una única planta, teniendo en cuenta la topografía casi plana de la parcela, el programa de necesidades y el respeto al entorno, favoreciendo además la accesibilidad. El volumen, de marcado carácter horizontal, se abre al exterior a través de un juego rítmico de aperturas acristaladas y de luz cenital que crea una quinta fachada muy armoniosa.",
        'A nivel social, el edificio busca desde la geometría de su fachada de acceso un "abrazo" que atraiga la reunión e interacción de padres y alumnos, rodeado por un anillo vegetal sin vallas ni limitaciones. En su interior mantiene esta filosofía mediante "plazas" de encuentro —una para el ala de música y otra para el ala de danza—, además del foyer principal de acceso y la biblioteca.',
        "Desde el punto de vista ambiental, el objetivo es minimizar el consumo de recursos mediante materiales fabricados en el entorno y un diseño con una orientación estudiada que aprovecha el soleamiento sur y los vientos dominantes para la ventilación cruzada a través de patios, sumando el confort y la humanización que aporta la vegetación propuesta.",
      ],
      en: [
        "Music and dance schools have become essential municipal facilities, fostering intellectual, aesthetic, and social development by encouraging physical and emotional expression and community interaction.",
        "Historical and Physical — Located in the growing Ingenio neighborhood of San Pedro Alcántara near an old sugar factory, the project aims not only to create a music and dance school but also to stimulate urban development and set a quality benchmark for the area. The building is a modest, human-scale volume sensitive to the industrial heritage, with a continuous façade resembling a musical score that connects subtly to the past. It's a single-story building, respecting the flat topography and enhancing accessibility. Large rhythmic glazed openings and skylights create a harmonious connection with the exterior.",
        'Social — The entrance façade\'s design invites interaction among parents and students. The building engages its surroundings openly, with no fences and a surrounding green ring that improves microclimate. Inside, "plazas" or gathering spaces encourage social interaction beyond mere transit corridors, including separate areas for music and dance wings, a foyer, and a library.',
        "Environmental — The design focuses on minimizing resource consumption by using local materials and optimizing orientation for natural sunlight and cross ventilation via patios. Vegetation adds to comfort and environmental quality through evapotranspiration.",
      ],
    },
    externalUrl:
      "https://momaa.es/escuela-de-danza-y-musica-san-pedro-de-alcantara-marbella/",
    externalLabel: {
      es: "Ver en MoMaA",
      en: "View on MoMaA",
    },
  },
  {
    id: "casa-tres-patios-marbella",
    image: "/casa-tres-patios-marbella-1.jpg",
    images: [
      "/casa-tres-patios-marbella-2.jpg",
      "/casa-tres-patios-marbella-3.jpg",
      "/casa-tres-patios-marbella-4.jpg",
      "/casa-tres-patios-marbella-5.jpg",
    ],
    title: {
      es: "Vivienda Entre Medianeras, Casco Histórico, Marbella",
      en: "Party Wall House, Historic Centre, Marbella",
    },
    category: {
      es: "Residencial",
      en: "Residential",
    },
    year: "2021",
    architects: ["Andrés M. Mateo Fernández. Arquitecto"],
    studio: "MoMaA",
    location: "Casco Histórico, Marbella, Málaga",
    disciplines: {
      es: ["Arquitectura", "Urbanismo", "Diseño"],
      en: ["Architecture", "Urban Planning", "Design"],
    },
    body: {
      es: [
        "La parcela a intervenir se encuentra situada dentro del casco histórico de la ciudad, junto a edificaciones adosadas donde predomina la tipología residencial. El proyecto está pensado para una vivienda de estilo andaluz que respeta la tipología y señas del casco histórico y se mimetiza dentro de la trama sin renunciar a la calidad espacial y programática.",
        "Se trata de una arquitectura vernácula diseñada con materiales tradicionales que combina la tradición con lo contemporáneo.",
      ],
      en: [
        "The plot is located within the historic center of the city, surrounded by attached residential buildings. The project is designed for an Andalusian-style home that respects the local architectural character and blends seamlessly into the urban fabric, without compromising spatial or programmatic quality.",
        "It features vernacular architecture using traditional materials, combining heritage with a contemporary approach.",
      ],
    },
    externalUrl:
      "https://momaa.es/casa-tres-patios-vivienda-entre-medianeras-marbella/",
    externalLabel: {
      es: "Ver en MoMaA",
      en: "View on MoMaA",
    },
  },
  {
    id: "eliminacion-barreras-san-pedro",
    image: "/eliminacion-barreras-san-pedro-1.jpg",
    images: [
      "/eliminacion-barreras-san-pedro-2.jpg",
      "/eliminacion-barreras-san-pedro-3.jpg",
      "/eliminacion-barreras-san-pedro-4.jpg",
      "/eliminacion-barreras-san-pedro-5.jpg",
      "/eliminacion-barreras-san-pedro-6.jpg",
    ],
    title: {
      es: "Eliminación de Barreras Arquitectónicas, San Pedro Alcántara, Marbella",
      en: "Architectural Barriers Removal, San Pedro Alcántara, Marbella",
    },
    category: {
      es: "Espacio Público",
      en: "Public Space",
    },
    year: "2021",
    architects: ["Andrés M. Mateo Fernández. Arquitecto"],
    studio: "MoMaA",
    location: "San Pedro de Alcántara, Marbella, Málaga",
    disciplines: {
      es: ["Arquitectura", "Urbanismo", "Diseño"],
      en: ["Architecture", "Urban Planning", "Design"],
    },
    body: {
      es: [
        "En el Distrito Municipal de San Pedro Alcántara en Marbella, existen en algunas zonas de predominio residencial discontinuidades en los pavimentos que suponen un posible riesgo de caídas para los viandantes. Con el objeto de mejorar la ciudad para los vecinos, el consistorio propone un plan de regeneración urbana para mejorar la movilidad, la accesibilidad y la eliminación de barreras arquitectónicas.",
        "En ese contexto, se realiza el proyecto para mejorar la accesibilidad y eliminar barreras arquitectónicas adaptando los pasos de peatones, reparando las baldosas de las calles, alcorques, arquetas y demás mobiliario urbano, así como adecuando las zonas afectadas por las raíces de los árboles, y de este modo, seguir creando una ciudad más amable.",
      ],
      en: [
        "In the San Pedro Alcántara district of Marbella, some residential areas have pavement discontinuities that pose a risk to pedestrians. To improve conditions for residents, the city council has proposed an urban regeneration plan focused on enhancing mobility, accessibility, and removing architectural barriers.",
        "As part of this effort, the project includes adapting pedestrian crossings, repairing damaged paving, tree pits, utility covers, and other urban elements, as well as addressing areas affected by tree roots — all with the goal of creating a more accessible and people-friendly city.",
      ],
    },
    externalUrl:
      "https://momaa.es/eliminacion-de-barreras-arquitectonicas-san-pedro-alcantara-marbella/",
    externalLabel: {
      es: "Ver en MoMaA",
      en: "View on MoMaA",
    },
  },
  {
    id: "pasarela-madera-marbella",
    image: "/pasarela-madera-marbella-1.jpg",
    title: {
      es: "Pasarela de Madera sobre el Río Guadaiza, Marbella",
      en: "Timber Footbridge over the Guadaiza River, Marbella",
    },
    category: {
      es: "Urbanismo",
      en: "Urban Planning",
    },
    year: "2021",
    architects: ["Andrés M. Mateo Fernández. Arquitecto"],
    studio: "MoMaA",
    location: "Marbella, Málaga",
    disciplines: {
      es: ["Arquitectura", "Urbanismo", "Diseño"],
      en: ["Architecture", "Urban Planning", "Design"],
    },
    body: {
      es: [
        "Se pretende dar una idea para una pasarela provisional en un tramo del río Guadaiza en Marbella que proteja el borde del cauce y su ecosistema.",
        "Esta pasarela se propone con una materialidad efímera para no renunciar al paso de personas por un camino muy transitado por los vecinos y, a su vez, proteger este entorno tan natural y bonito en un medio urbano.",
      ],
      en: [
        "The proposal envisions a temporary footbridge along a section of the Guadaiza River in Marbella, designed to protect the riverbank and its ecosystem.",
        "Built with lightweight, reversible materials, the bridge allows continued pedestrian access along a well-used path while preserving the beauty and natural character of this urban environment.",
      ],
    },
    externalUrl: "https://momaa.es/pasarela-madera-marbella-malaga/",
    externalLabel: {
      es: "Ver en MoMaA",
      en: "View on MoMaA",
    },
  },
  {
    id: "expositor-british-school",
    image: "/expositor-british-school-1.png",
    images: [
      "/expositor-british-school-2.jpg",
      "/expositor-british-school-3.jpg",
    ],
    title: {
      es: "Librería Expositora, British School Marbella",
      en: "Display Bookcase, British School Marbella",
    },
    category: {
      es: "Interiorismo",
      en: "Interior Design",
    },
    year: "2020",
    architects: ["Andrés M. Mateo Fernández. Arquitecto"],
    studio: "MoMaA",
    location: "Marbella, Málaga",
    disciplines: {
      es: ["Interiorismo", "Diseño de Mobiliario"],
      en: ["Interior Design", "Furniture Design"],
    },
    body: {
      es: [
        "Diseño de una librería expositora a medida para el British School Marbella, un mueble pensado para exponer libros y materiales del centro con un diseño funcional e integrado en el espacio.",
      ],
      en: [
        "Design of a bespoke display bookcase for British School Marbella, a piece of furniture conceived to showcase books and school materials with a functional design integrated into the space.",
      ],
    },
    externalUrl: "https://momaa.es/diseno-libreria/",
    externalLabel: {
      es: "Ver en MoMaA",
      en: "View on MoMaA",
    },
  },
  {
    id: "british-school-marbella-2020",
    image: "/british-school-marbella-2020-1.jpg",
    images: [
      "/british-school-marbella-2020-2.jpg",
      "/british-school-marbella-2020-3.jpg",
      "/british-school-marbella-2020-4.jpg",
      "/british-school-marbella-2020-5.jpg",
      "/british-school-marbella-2020-6.jpg",
      "/british-school-marbella-2020-7.jpg",
      "/british-school-marbella-2020-8.jpg",
      "/british-school-marbella-2020-9.jpg",
      "/british-school-marbella-2020-10.jpg",
    ],
    title: {
      es: "British International School of Marbella",
      en: "British International School of Marbella",
    },
    category: {
      es: "Educacional",
      en: "Educational",
    },
    year: "2020",
    architects: ["Andrés M. Mateo Fernández. Arquitecto"],
    studio: "MoMaA",
    location: "Marbella, Málaga",
    disciplines: {
      es: ["Arquitectura", "Urbanismo", "Diseño"],
      en: ["Architecture", "Urban Planning", "Design"],
    },
    body: {
      es: [
        "El colegio está ubicado en un lugar privilegiado, íntimo y céntrico a la vez, con extraordinarias vistas al mar y la montaña.",
        "Con la colaboración de especialistas educativos, se ha diseñado una escuela que integra pedagogía, funcionalidad y amplitud sin renunciar a la sostenibilidad y estética. Las amplias zonas comunes se entienden como zonas de encuentro e interacción entre los alumnos, generándoles reacciones emotivas además del conocimiento. Las aulas visualmente permeables estimulan el desarrollo emocional y educativo de los niños, aprendiendo de los que les preceden. Este edificio de vocación atemporal busca suscitar en sus noveles usuarios emociones y experiencias que refuercen y estimulen la creatividad y reflexión, en un entorno físico creado para ellos.",
        "El edificio de tipología claustral busca una conexión interior-interior. La circulación, fácilmente legible, se realiza a través de grandes galerías en torno a dos patios y, como punto céntrico, un ágora (auditorio) que busca maximizar la relación entre sus usuarios mediante una gran permeabilidad visual que alcanza hasta los espacios exteriores rodeados de vegetación.",
        "La construcción sincera se ve reforzada en su materialidad, buscando re-definir materiales tradicionales mediante un juego de ladrillos vistos de colores en armonía con el hormigón visto y un elegante y sobrio muro cortina, definido para entenderse como un diseño contemporáneo sin echar de menos la arquitectura estéril. La sostenibilidad, una de las premisas, se buscó mediante estrategias combinadas pasivas —mediante la zonificación de modo a maximizar la iluminación natural, grandes porches para la protección solar y recogimiento, y empleo de materiales próximos— y activas, mediante un sistema constructivo eficiente combinado con placas solares que lo clasifican energéticamente en clase A.",
      ],
      en: [
        "The school is in a prime, central location with stunning sea and mountain views.",
        "Designed with educational experts, it balances pedagogy, functionality, and sustainability with aesthetic appeal. Spacious common areas encourage interaction and emotional growth, while open classrooms foster creativity and learning.",
        "The cloister-style building features clear circulation around two courtyards and a central auditorium that connects users visually to outdoor green spaces.",
        "Construction uses exposed bricks, concrete, and a sleek curtain wall, blending tradition with contemporary design. Passive and active sustainable strategies, including solar panels, give the building an energy class A rating.",
      ],
    },
    externalUrl: "https://www.youtube.com/watch?v=Uv0EnrLz04c",
    externalLabel: {
      es: "Ver vídeo de las instalaciones",
      en: "Watch facilities video",
    },
  },
  {
    id: "mostrador-bism",
    image: "/mostrador-bism-1.jpeg",
    images: [
      "/mostrador-bism-2.jpeg",
      "/mostrador-bism-3.jpeg",
      "/mostrador-bism-4.jpg",
    ],
    title: {
      es: "Mostrador de Recepción, BISM",
      en: "Reception Counter, BISM",
    },
    category: {
      es: "Interiorismo",
      en: "Interior Design",
    },
    year: "2020",
    architects: ["Andrés M. Mateo Fernández. Arquitecto"],
    studio: "MoMaA",
    location: "Marbella, Málaga",
    disciplines: {
      es: ["Interiorismo", "Diseño de Mobiliario"],
      en: ["Interior Design", "Furniture Design"],
    },
    body: {
      es: [
        "Se trataba de diseñar un mostrador flexible que asumiera varias funciones del colegio, tanto para el servicio de los usuarios como para la atención de los padres.",
        "Se realiza un mostrador como una pieza en U que permite diferentes opciones según el lado donde se enfrente, de modo a optimizar el espacio y a su vez atender las necesidades requeridas del colegio. Realizado en madera de roble y encimera de Corian, presume de calidez y minimalismo que refleja su diseño contemporáneo.",
      ],
      en: [
        "The goal was to design a flexible counter serving multiple school functions, both for users and parent services.",
        "The U-shaped counter offers different options depending on the side, optimizing space while meeting the school's needs. Made of oak wood with a Corian countertop, it combines warmth and minimalism, reflecting its contemporary design.",
      ],
    },
    externalUrl: "https://momaa.es/diseno-mostrador-colegio/",
    externalLabel: {
      es: "Ver en MoMaA",
      en: "View on MoMaA",
    },
  },
  {
    id: "rehabilitacion-edificio-publico-marbella",
    image: "/rehabilitacion-edificio-publico-marbella-1.jpg",
    images: [
      "/rehabilitacion-edificio-publico-marbella-2.jpg",
      "/rehabilitacion-edificio-publico-marbella-3.jpg",
      "/rehabilitacion-edificio-publico-marbella-4.jpg",
      "/rehabilitacion-edificio-publico-marbella-5.jpg",
      "/rehabilitacion-edificio-publico-marbella-6.jpg",
      "/rehabilitacion-edificio-publico-marbella-7.jpg",
      "/rehabilitacion-edificio-publico-marbella-8.jpg",
      "/rehabilitacion-edificio-publico-marbella-9.jpg",
      "/rehabilitacion-edificio-publico-marbella-10.jpg",
    ],
    title: {
      es: "Rehabilitación de Edificio Público Protegido, Marbella",
      en: "Rehabilitation of a Listed Public Building, Marbella",
    },
    category: {
      es: "Espacio Público",
      en: "Public Space",
    },
    year: "2020",
    architects: ["Andrés M. Mateo Fernández. Arquitecto"],
    studio: "MoMaA",
    location: "Marbella, Málaga",
    disciplines: {
      es: ["Arquitectura", "Urbanismo", "Diseño"],
      en: ["Architecture", "Urban Planning", "Design"],
    },
    body: {
      es: [
        "Perdido en el angosto casco urbano de Marbella se encuentra un edificio protegido de interés ambiental, construido en el año 1965 y en actual estado de semi-abandono. El edificio en esquina se encuentra en mal estado de conservación, obsoleto y con obras sin terminar, con ausencia de acabados en algunas zonas, instalaciones deterioradas y carencia de cerramientos hacia el patio interior.",
        "En este contexto, se propone una rehabilitación del edificio mejorando sus instalaciones y haciéndolo accesible para su nueva vida como oficinas municipales, sin renunciar a mantener el espíritu paisajístico del casco histórico.",
      ],
      en: [
        "Hidden in the narrow old town of Marbella stands a listed building of environmental interest, built in 1965 and currently in a semi-abandoned state. Located on a corner, the building is in poor condition, outdated, and partially unfinished, with missing finishes, deteriorated installations, and no enclosures facing the inner courtyard.",
        "The proposed intervention is a rehabilitation that upgrades the facilities and ensures accessibility, giving the building a new life as municipal offices — while preserving the historic character of the old town.",
      ],
    },
    externalUrl:
      "https://momaa.es/rehabilitacion-edificio-publico-marbella-malaga/",
    externalLabel: {
      es: "Ver en MoMaA",
      en: "View on MoMaA",
    },
  },
  {
    id: "regeneracion-urbana-marbella",
    image: "/regeneracion-urbana-marbella-1.jpg",
    images: [
      "/regeneracion-urbana-marbella-2.jpg",
      "/regeneracion-urbana-marbella-3.jpg",
      "/regeneracion-urbana-marbella-4.jpg",
    ],
    title: {
      es: "Regeneración Urbana, San Pedro Alcántara — Ciudad Amable Marbella",
      en: "Urban Regeneration, San Pedro Alcántara — Friendly City Marbella",
    },
    category: {
      es: "Urbanismo",
      en: "Urban Planning",
    },
    year: "2020",
    architects: ["Andrés M. Mateo Fernández. Arquitecto"],
    studio: "MoMaA",
    location: "San Pedro de Alcántara, Marbella, Málaga",
    disciplines: {
      es: ["Arquitectura", "Urbanismo", "Diseño"],
      en: ["Architecture", "Urban Planning", "Design"],
    },
    body: {
      es: [
        "Principios básicos de actuación: Ciudad Amable Marbella. La recuperación del barrio se desarrolla en el marco del plan de renovación urbana encomendado por la Tenencia de Alcaldía de San Pedro Alcántara. Su enfoque busca que los habitantes y el gobierno de la ciudad tomen conciencia de la importancia de recuperar y conservar la calle como extensión de la vivienda.",
        "Este espacio urbano se encuentra degradado, con un trazado tortuoso y una gran falta de accesibilidad. Se propone un proyecto que busca unos valores de apropiación por parte de la vecindad de su barrio, crear puntos de encuentro comunitarios al aire libre, realizar trazados continuos, eliminar las barreras arquitectónicas, iluminar el espacio y controlar la luz y la sombra como elementos de experiencia espacial, y generar una imagen propia del barrio.",
      ],
      en: [
        "Basic principles of action: Friendly City — Marbella. The neighborhood's revitalization is part of the urban renewal plan commissioned by the Deputy Mayor's Office of San Pedro Alcántara. The aim is to raise awareness among residents and local authorities about the importance of reclaiming and preserving the street as an extension of the home.",
        "The area is currently degraded, with a winding layout and poor accessibility. The proposed project promotes neighborhood ownership, creates open-air community gathering spaces, establishes continuous pathways, removes architectural barriers, enhances lighting, and uses light and shadow as spatial experiences. It also seeks to give the neighborhood a distinct identity.",
      ],
    },
    externalUrl:
      "https://momaa.es/regeneracion-urbana-de-espacio-publico-marbella/",
    externalLabel: {
      es: "Ver en MoMaA",
      en: "View on MoMaA",
    },
  },
  {
    id: "aula-abierta-colegio-eic",
    image: "/aula-abierta-colegio-eic-1.jpg",
    images: [
      "/aula-abierta-colegio-eic-2.jpg",
      "/aula-abierta-colegio-eic-3.jpg",
    ],
    title: {
      es: "EIC — Proyecto de Aula Abierta",
      en: "EIC — Open Classroom Project",
    },
    category: {
      es: "Educacional",
      en: "Educational",
    },
    year: "2020",
    architects: ["Andrés M. Mateo Fernández. Arquitecto"],
    studio: "MoMaA",
    location: "Marbella, Málaga",
    disciplines: {
      es: ["Arquitectura", "Diseño"],
      en: ["Architecture", "Design"],
    },
    body: {
      es: [
        "Agradecemos al EIC por confiar en nosotros para el proyecto experimental de aula abierta, pensado para humanizar las aulas e incentivar la creatividad de los niños.",
      ],
      en: [
        "We thank EIC for trusting us with the experimental open classroom project, designed to humanize learning spaces and foster children's creativity.",
      ],
    },
    externalUrl: "https://momaa.es/aula-abierta-para-colegio-eic/",
    externalLabel: {
      es: "Ver en MoMaA",
      en: "View on MoMaA",
    },
  },
  {
    id: "oficina-turismo-san-pedro",
    image: "/oficina-turismo-san-pedro-1.jpg",
    images: [
      "/oficina-turismo-san-pedro-2.jpg",
      "/oficina-turismo-san-pedro-3.jpg",
    ],
    title: {
      es: "Oficina de Turismo, Comercio y Fiestas, San Pedro Alcántara",
      en: "Tourism, Commerce and Festivities Office, San Pedro Alcántara",
    },
    category: {
      es: "Espacio Público",
      en: "Public Space",
    },
    year: "2019",
    architects: ["Andrés M. Mateo Fernández. Arquitecto"],
    studio: "MoMaA",
    location: "San Pedro de Alcántara, Marbella, Málaga",
    disciplines: {
      es: ["Arquitectura", "Urbanismo", "Diseño"],
      en: ["Architecture", "Urban Planning", "Design"],
    },
    body: {
      es: [
        "El Ayuntamiento de Marbella está llevando a cabo un plan de accesibilidad y acondicionamiento de las oficinas de turismo en San Pedro Alcántara, con el objeto de mejorar la instalación existente de la oficina de turismo y proponer un espacio renovado, cultural y contemporáneo, en un espacio actualmente deteriorado.",
        "El nuevo centro de Turismo, Comercio y Fiestas de San Pedro Alcántara es un proyecto de rehabilitación que trata de mejorar y potenciar las instalaciones existentes para dar mayor presencia en el ámbito municipal y prestar un mejor servicio a un sector creciente y cada vez más selectivo del turismo.",
        "El proyecto rediseña el espacio actual con el objeto de la eliminación de barreras arquitectónicas, consiguiendo de ese modo un centro más accesible y amigable.",
        "Por otro lado, se presenta una programática para el local muy ambiciosa planteando: un hall recibidor como sala de exposición e interpretación de la historia de la Colonia de San Pedro Alcántara; una serie de oficinas que satisfaga el trabajo del equipo multidisciplinar de Turismo, Comercio y Fiestas; y un nuevo espacio para una sala de prensa con un patio invadido de luz natural que se convertirá en el corazón de estas oficinas, evocando subliminalmente a los patios de las villas romanas.",
      ],
      en: [
        "The Marbella City Council is carrying out an accessibility and improvement plan for the tourism offices in San Pedro Alcántara, aiming to enhance the existing facilities and create a renewed, cultural, and contemporary space in an area currently in poor condition.",
        "The new Tourism, Commerce, and Festivities Center of San Pedro Alcántara is a rehabilitation project designed to upgrade the current infrastructure, giving it greater municipal presence and offering improved services to a growing and increasingly selective tourism sector.",
        "The redesign focuses on eliminating architectural barriers, creating a more accessible and welcoming environment.",
        "The project also proposes an ambitious program for the space, including: a reception hall that doubles as an exhibition and interpretation room on the history of the San Pedro Alcántara Colony; a series of offices to accommodate the multidisciplinary team of Tourism, Commerce, and Festivities; and a new press room opening onto a naturally lit courtyard that will become the heart of the building — a subtle nod to Roman villa courtyards.",
      ],
    },
    externalUrl: "https://momaa.es/oficina-turismo/",
    externalLabel: {
      es: "Ver en MoMaA",
      en: "View on MoMaA",
    },
  },
  {
    id: "aparcamiento-guadalmina",
    image: "/aparcamiento-guadalmina-1.jpg",
    images: [
      "/aparcamiento-guadalmina-2.jpg",
      "/aparcamiento-guadalmina-3.jpg",
      "/aparcamiento-guadalmina-4.jpg",
      "/aparcamiento-guadalmina-5.jpeg",
      "/aparcamiento-guadalmina-6.jpg",
      "/aparcamiento-guadalmina-7.jpg",
      "/aparcamiento-guadalmina-8.jpg",
      "/aparcamiento-guadalmina-9.jpeg",
      "/aparcamiento-guadalmina-10.jpeg",
      "/aparcamiento-guadalmina-11.jpeg",
      "/aparcamiento-guadalmina-12.jpeg",
      "/aparcamiento-guadalmina-13.jpg",
      "/aparcamiento-guadalmina-14.jpg",
      "/aparcamiento-guadalmina-15.jpg",
    ],
    title: {
      es: "Aparcamiento Ecológico en Guadalmina, Público",
      en: "Eco Car Park in Guadalmina, Public",
    },
    category: {
      es: "Urbanismo",
      en: "Urban Planning",
    },
    year: "2019",
    architects: ["Andrés M. Mateo Fernández. Arquitecto"],
    studio: "MoMaA",
    location: "Guadalmina, Marbella, Málaga",
    disciplines: {
      es: ["Arquitectura", "Urbanismo", "Diseño"],
      en: ["Architecture", "Urban Planning", "Design"],
    },
    body: {
      es: [
        "Aparcar es una rutina a la que nos enfrentamos a diario en todas las ciudades. Es por ello que hay que explorar en cada propuesta soluciones innovadoras que reconsideren las funciones intrínsecas de este acto, y que además innoven para ahorrar espacio, mejoren el aspecto urbano de los barrios y ofrezcan una relación donde puedan coexistir coches y personas.",
        "En este contexto se ha diseñado este aparcamiento ecológico, tecnológico y accesible en un barrio muy singular de Marbella donde las zonas verdes son lo predominante de esta área, y que se ha querido dar continuidad en esta franja donde antes este espacio estaba maltratado por el tiempo, con una vegetación inadecuada y a merced de las malas hierbas, sin sentimiento de ciudad, con una falta de comunicación y que conformaba la fachada trasera de una zona comercial. De este modo, se apuesta por un espacio urbano tecnológico y renovado, respetuoso con el medio ambiente, amable y accesible, integrado con su entorno, que conforma una nueva fachada hacia la zona comercial: se trata de una alternativa con vida propia.",
        "2022: finalizaron las obras tan esperadas del aparcamiento. Agradecemos a la empresa Covico por su profesionalidad y atención.",
      ],
      en: [
        "Parking is a daily challenge in every city, which calls for innovative solutions that rethink its function — optimizing space, improving neighborhood aesthetics, and fostering coexistence between people and cars.",
        "In this spirit, a sustainable, high-tech, and accessible parking facility was created in a green neighborhood of Marbella. What was once a neglected, overgrown area behind a commercial zone is now a renewed urban space — environmentally friendly and well-integrated with its surroundings, serving as a new, vibrant façade.",
        "2022: The long-awaited works were completed. Thanks to Covico for their professionalism and dedication.",
      ],
    },
    externalUrl:
      "https://www.diariosur.es/marbella-estepona/nueva-zona-aparcamiento-20211011001114-ntvo.html",
    externalLabel: {
      es: "Ver nota de prensa",
      en: "Read press release",
    },
  },
  {
    id: "colegio-internacional-lisbon",
    image: "/colegio-internacional-lisbon-1.jpeg",
    images: [
      "/colegio-internacional-lisbon-2.jpg",
      "/colegio-internacional-lisbon-3.jpg",
      "/colegio-internacional-lisbon-4.jpg",
      "/colegio-internacional-lisbon-5.jpg",
      "/colegio-internacional-lisbon-6.jpg",
      "/colegio-internacional-lisbon-7.jpg",
    ],
    title: {
      es: "Colegio Internacional Lisboa",
      en: "Lisbon International School",
    },
    category: {
      es: "Educacional",
      en: "Educational",
    },
    year: "2019",
    architects: [
      "Andrés M. Mateo Fernández. Arquitecto",
      "Posto9. Colaborador",
    ],
    studio: "MoMaA",
    location: "Lisboa, Portugal",
    disciplines: {
      es: ["Arquitectura", "Diseño"],
      en: ["Architecture", "Design"],
    },
    body: {
      es: [],
      en: [],
    },
    externalUrl: "https://momaa.es/colegio-internacional-lisbon/",
    externalLabel: {
      es: "Ver en MoMaA",
      en: "View on MoMaA",
    },
  },
  {
    id: "villa-arbel-valle-del-sol",
    image: "/villa-arbel-valle-del-sol-1.jpg",
    images: [
      "/villa-arbel-valle-del-sol-2.jpg",
      "/villa-arbel-valle-del-sol-3.jpg",
      "/villa-arbel-valle-del-sol-4.jpg",
      "/villa-arbel-valle-del-sol-5.jpg",
    ],
    title: {
      es: "Villa Arbel, Valle del Sol, Marbella",
      en: "Villa Arbel, Valle del Sol, Marbella",
    },
    category: {
      es: "Residencial",
      en: "Residential",
    },
    year: "2019",
    architects: ["Andrés M. Mateo Fernández. Arquitecto"],
    studio: "MoMaA",
    location: "Valle del Sol, Marbella, Málaga",
    disciplines: {
      es: ["Arquitectura", "Diseño Residencial"],
      en: ["Architecture", "Residential Design"],
    },
    body: {
      es: [],
      en: [],
    },
    externalUrl: "https://momaa.es/villa-arbel-valle-del-sol/",
    externalLabel: {
      es: "Ver en MoMaA",
      en: "View on MoMaA",
    },
  },
  {
    id: "oficina-boque-maison-lu",
    image: "/oficina-boque-maison-lu-1.jpg",
    images: [
      "/oficina-boque-maison-lu-2.jpg",
      "/oficina-boque-maison-lu-3.jpg",
      "/oficina-boque-maison-lu-4.jpg",
      "/oficina-boque-maison-lu-5.jpg",
      "/oficina-boque-maison-lu-6.jpg",
      "/oficina-boque-maison-lu-7.jpg",
      "/oficina-boque-maison-lu-8.jpg",
      "/oficina-boque-maison-lu-9.jpg",
    ],
    title: {
      es: "Oficina Boqué Group",
      en: "Boqué Group Office",
    },
    category: {
      es: "Espacio Público",
      en: "Public Space",
    },
    year: "2019",
    architects: ["Andrés M. Mateo Fernández. Arquitecto"],
    studio: "MoMaA",
    location: "Marbella, Málaga",
    disciplines: {
      es: ["Arquitectura", "Interiorismo", "Diseño"],
      en: ["Architecture", "Interior Design", "Design"],
    },
    body: {
      es: [
        "El grupo empresarial Boqué necesitaba un espacio junto a su prestigioso restaurante «Maison Lu» para instalar sus oficinas corporativas. Para ello, se realizó un proyecto que consistía en la rehabilitación de un antiguo bar abandonado para convertirlo en sus oficinas bajo el concepto de la luz y de la comodidad.",
        "A su vez, se buscó crear un lugar de trabajo que te hiciera sentir estar en una estancia familiar, todo ello desarrollado en una sola planta.",
      ],
      en: [
        "The Boqué business group needed a space next to its renowned restaurant Maison Lu to house its corporate offices. To achieve this, a project was undertaken to rehabilitate an old, abandoned bar, transforming it into a comfortable, light-filled office space.",
        "The design was guided by the concepts of natural light and comfort, aiming to create a workplace that feels like a welcoming home environment — all developed on a single floor.",
      ],
    },
    externalUrl: "https://momaa.es/oficina-bouque/",
    externalLabel: {
      es: "Ver en MoMaA",
      en: "View on MoMaA",
    },
  },
  {
    id: "loft-design-marbella",
    image: "/loft-design-marbella-1.jpg",
    images: ["/loft-design-marbella-2.jpg", "/loft-design-marbella-3.jpg"],
    title: {
      es: "Loft Design, Marbella",
      en: "Loft Design, Marbella",
    },
    category: {
      es: "Residencial",
      en: "Residential",
    },
    year: "2019",
    architects: ["Andrés M. Mateo Fernández. Arquitecto"],
    studio: "MoMaA",
    location: "Marbella, Málaga",
    disciplines: {
      es: ["Arquitectura", "Interiorismo", "Diseño"],
      en: ["Architecture", "Interior Design", "Design"],
    },
    body: {
      es: [
        "El propósito de este proyecto fue proponer un nuevo espacio en una terraza deshabitada que hiciese de ésta un punto de atracción para su uso. Se trata de un edificio de oficinas en planta baja y primera, ubicado en una zona privilegiada de la ciudad donde se puede ver el mar y que dispone de una serie de terrazas privativas apergoladas que dan servicio a las oficinas de planta primera.",
        "La cubierta se brinda a reconvertir en un espacio habitable con una sencilla intervención de cubrición de la pérgola y ejecución de una envolvente transparente que aproveche la luz natural. Este espacio servirá como espacio multifuncional acomodado a la oficina de la planta primera, funcionando como extensión de la oficina, gimnasio o loft para familiares o amigos.",
      ],
      en: [
        "The aim of this project was to create a new, attractive space on an unused terrace to encourage its use. The building is an office complex with ground and first floors, located in a privileged area of the city with sea views. It features private, pergola-covered terraces that serve the first-floor offices.",
        "The proposal involves a simple intervention: covering the pergola and enclosing the space with a transparent envelope to maximize natural light. The result is a multifunctional space — an extension of the first-floor office that can serve as a workspace, gym, or loft for family and friends.",
      ],
    },
    externalUrl: "https://momaa.es/loft-design-marbella/",
    externalLabel: {
      es: "Ver en MoMaA",
      en: "View on MoMaA",
    },
  },
  {
    id: "villa-olivier-marbella-golf",
    image: "/villa-olivier-marbella-golf-1.jpg",
    images: [
      "/villa-olivier-marbella-golf-2.jpg",
      "/villa-olivier-marbella-golf-3.jpg",
    ],
    title: {
      es: "Villa Olivier II, Marbella Golf Resort",
      en: "Villa Olivier II, Marbella Golf Resort",
    },
    category: {
      es: "Residencial",
      en: "Residential",
    },
    year: "2019",
    architects: ["Andrés M. Mateo Fernández. Arquitecto"],
    studio: "MoMaA",
    location: "Marbella Golf Resort, Marbella, Málaga",
    disciplines: {
      es: ["Arquitectura", "Diseño Residencial"],
      en: ["Architecture", "Residential Design"],
    },
    body: {
      es: [],
      en: [],
    },
    externalUrl: "https://momaa.es/villa-olivier-marbella-golf/",
    externalLabel: {
      es: "Ver en MoMaA",
      en: "View on MoMaA",
    },
  },
  {
    id: "oficina-colegio-lisboa",
    image: "/oficina-colegio-lisboa-1.jpg",
    images: [
      "/oficina-colegio-lisboa-2.jpg",
      "/oficina-colegio-lisboa-3.jpg",
      "/oficina-colegio-lisboa-4.jpg",
    ],
    title: {
      es: "Oficina Colegio Lisboa",
      en: "Lisboa School Office",
    },
    category: {
      es: "Educacional",
      en: "Educational",
    },
    year: "2019",
    architects: ["Andrés M. Mateo Fernández. Arquitecto"],
    studio: "MoMaA",
    location: "Lisboa, Portugal",
    disciplines: {
      es: ["Arquitectura", "Diseño"],
      en: ["Architecture", "Design"],
    },
    body: {
      es: [],
      en: [],
    },
    externalUrl: "https://momaa.es/oficina-colegio-lisboa/",
    externalLabel: {
      es: "Ver en MoMaA",
      en: "View on MoMaA",
    },
  },
  {
    id: "rehabilitacion-apartamento-bahia-marbella",
    image: "/rehabilitacion-apartamento-bahia-marbella-1.jpg",
    images: [
      "/rehabilitacion-apartamento-bahia-marbella-2.jpg",
      "/rehabilitacion-apartamento-bahia-marbella-3.jpg",
      "/rehabilitacion-apartamento-bahia-marbella-4.jpg",
      "/rehabilitacion-apartamento-bahia-marbella-5.jpg",
      "/rehabilitacion-apartamento-bahia-marbella-6.jpg",
      "/rehabilitacion-apartamento-bahia-marbella-7.jpg",
      "/rehabilitacion-apartamento-bahia-marbella-8.jpg",
    ],
    title: {
      es: "Rehabilitación Apartamento Bahía de Marbella",
      en: "Bahía de Marbella Apartment Renovation",
    },
    category: {
      es: "Interiorismo",
      en: "Interior Design",
    },
    year: "2019",
    architects: ["Andrés M. Mateo Fernández. Arquitecto"],
    studio: "MoMaA",
    location: "Bahía de Marbella, Málaga",
    disciplines: {
      es: ["Arquitectura", "Interiorismo", "Diseño"],
      en: ["Architecture", "Interior Design", "Design"],
    },
    body: {
      es: [
        "Como condicionante de partida, la luz. Así fue como en un enclave privilegiado de Marbella conseguimos, con pequeños gestos tanto arquitectónicos como de materialidad y apoyados en la decoración, invadir de iluminación este apartamento un tanto obsoleto para convertirlo en una maravillosa residencia, y no solo de veraneo.",
      ],
      en: [
        "The starting point was light. In a privileged setting in Marbella, we managed — through subtle architectural gestures, thoughtful material choices, and supportive interior design — to flood this somewhat outdated apartment with light, transforming it into a wonderful residence, not just a summer getaway.",
      ],
    },
    externalUrl:
      "https://momaa.es/rehabilitacion-apartamento-bahia-de-marbella/",
    externalLabel: {
      es: "Ver en MoMaA",
      en: "View on MoMaA",
    },
  },
  {
    id: "pabellon-rio-verde-ii",
    image: "/pabellon-rio-verde-ii-1.jpg",
    images: ["/pabellon-rio-verde-ii-2.jpg"],
    title: {
      es: "Pabellón Río Verde II, Marbella",
      en: "Río Verde II Pavilion, Marbella",
    },
    category: {
      es: "Residencial",
      en: "Residential",
    },
    year: "2018",
    architects: ["Andrés M. Mateo Fernández. Arquitecto"],
    studio: "MoMaA",
    location: "Río Verde, Marbella, Málaga",
    disciplines: {
      es: ["Arquitectura", "Diseño Residencial"],
      en: ["Architecture", "Residential Design"],
    },
    body: {
      es: [],
      en: [],
    },
    externalUrl: "https://momaa.es/pabellon-rio-verde-ii/",
    externalLabel: {
      es: "Ver en MoMaA",
      en: "View on MoMaA",
    },
  },
  {
    id: "villa-rio-lissen",
    image: "/villa-rio-lissen-1.jpg",
    images: [
      "/villa-rio-lissen-2.jpg",
      "/villa-rio-lissen-3.jpg",
      "/villa-rio-lissen-4.jpg",
      "/villa-rio-lissen-5.jpg",
      "/villa-rio-lissen-6.jpg",
      "/villa-rio-lissen-7.jpg",
      "/villa-rio-lissen-8.jpg",
    ],
    title: {
      es: "Villa Rio Lissen",
      en: "Villa Rio Lissen",
    },
    category: {
      es: "Residencial",
      en: "Residential",
    },
    year: "2018",
    architects: [
      "Andrés M. Mateo Fernández. Arquitecto",
      "Estefanía Moreno. Arquitecta Técnica",
    ],
    studio: "MoMaA",
    location: "Guadalmina, Marbella, Málaga",
    disciplines: {
      es: ["Arquitectura", "Diseño Residencial"],
      en: ["Architecture", "Residential Design"],
    },
    body: {
      es: [
        "Situada en la urbanización Guadalmina, la Casa Río se diseña como una casa patio contemporánea que busca la reinterpretación de la casa andaluza en el siglo XXI. Esta vivienda se sitúa buscando las aperturas a la montaña y al horizonte del mar.",
        "¡Pensar cómo vivir la casa!, caminando en vuestros sueños. ¡Pensar en los espacios!, viajando a través del tiempo. ¡Pensar en vuestra casa!, como el lugar donde forjar los cuentos. ¡Pensar en su arquitectura!, para crear el hogar donde guardar vuestros recuerdos.",
        "— AMF",
      ],
      en: [
        "Located in the Guadalmina residential area, Casa Río is conceived as a contemporary patio house that seeks to reinterpret the traditional Andalusian home in the 21st century. This dwelling is positioned to open toward the mountains and the horizon of the sea.",
        "Think about how to live in the house! Walking within your dreams. Think about the spaces! Traveling through time. Think about your home! As the place where stories are born. Think about its architecture! To create the home where your memories are kept.",
        "— AMF",
      ],
    },
    externalUrl: "https://momaa.es/villa-rio-lissen/",
    externalLabel: {
      es: "Ver en MoMaA",
      en: "View on MoMaA",
    },
  },
  {
    id: "colegio-jiangyn-china",
    image: "/colegio-jiangyn-china-1.jpg",
    images: [
      "/colegio-jiangyn-china-2.jpg",
      "/colegio-jiangyn-china-3.jpg",
      "/colegio-jiangyn-china-4.jpg",
      "/colegio-jiangyn-china-5.jpg",
      "/colegio-jiangyn-china-6.jpg",
      "/colegio-jiangyn-china-7.jpg",
    ],
    title: {
      es: "Colegio en Jiangyn, China",
      en: "School in Jiangyn, China",
    },
    category: {
      es: "Educacional",
      en: "Educational",
    },
    year: "2018",
    architects: [
      "Andrés M. Mateo Fernández. Arquitecto",
      "Estefanía Moreno González. Colaboradora",
      "Joaquín García. Colaborador",
      "Rodrigo González. Colaborador",
    ],
    studio: "MoMaA",
    location: "Jiangyin, China",
    disciplines: {
      es: ["Arquitectura", "Diseño"],
      en: ["Architecture", "Design"],
    },
    body: {
      es: [],
      en: [],
    },
    externalUrl: "https://momaa.es/colegio-jiangyn-china/",
    externalLabel: {
      es: "Ver en MoMaA",
      en: "View on MoMaA",
    },
  },
  {
    id: "pabellon-rio-verde",
    image: "/pabellon-rio-verde-1.jpg",
    images: [
      "/pabellon-rio-verde-2.jpg",
      "/pabellon-rio-verde-3.jpg",
      "/pabellon-rio-verde-4.jpg",
      "/pabellon-rio-verde-5.jpg",
    ],
    title: {
      es: "Pabellón Río Verde, Marbella",
      en: "Río Verde Pavilion, Marbella",
    },
    category: {
      es: "Residencial",
      en: "Residential",
    },
    year: "2018",
    architects: ["Andrés M. Mateo Fernández. Arquitecto"],
    studio: "MoMaA",
    location: "Río Verde, Marbella, Málaga",
    disciplines: {
      es: ["Arquitectura", "Diseño Residencial"],
      en: ["Architecture", "Residential Design"],
    },
    body: {
      es: [],
      en: [],
    },
    externalUrl: "https://momaa.es/pabellon-rio-verde/",
    externalLabel: {
      es: "Ver en MoMaA",
      en: "View on MoMaA",
    },
  },
  {
    id: "pabellon-musica-la-virginia",
    image: "/pabellon-musica-la-virginia-1.jpg",
    images: [
      "/pabellon-musica-la-virginia-2.jpg",
      "/pabellon-musica-la-virginia-3.jpg",
      "/pabellon-musica-la-virginia-4.jpg",
      "/pabellon-musica-la-virginia-5.jpg",
      "/pabellon-musica-la-virginia-6.jpg",
      "/pabellon-musica-la-virginia-7.jpg",
    ],
    title: {
      es: "Pabellón de la Música, La Virginia, Marbella",
      en: "Music Pavilion, La Virginia, Marbella",
    },
    category: {
      es: "Residencial",
      en: "Residential",
    },
    year: "2018",
    architects: [
      "Andrés M. Mateo Fernández. Arquitecto",
      "Estefanía Moreno González. Colaboradora",
    ],
    studio: "MoMaA",
    location: "La Virginia, Marbella, Málaga",
    disciplines: {
      es: ["Arquitectura", "Diseño Residencial"],
      en: ["Architecture", "Residential Design"],
    },
    body: {
      es: [],
      en: [],
    },
    externalUrl: "https://momaa.es/pabellon-de-la-musica/",
    externalLabel: {
      es: "Ver en MoMaA",
      en: "View on MoMaA",
    },
  },
  {
    id: "apartamento-coral-beach",
    image: "/apartamento-coral-beach-1.jpg",
    images: [
      "/apartamento-coral-beach-2.jpg",
      "/apartamento-coral-beach-3.jpg",
      "/apartamento-coral-beach-4.jpg",
      "/apartamento-coral-beach-5.jpg",
      "/apartamento-coral-beach-6.jpg",
      "/apartamento-coral-beach-7.jpg",
      "/apartamento-coral-beach-8.jpg",
      "/apartamento-coral-beach-9.jpg",
    ],
    title: {
      es: "Apartamento Esmeralda, Coral Beach, Marbella",
      en: "Apartamento Esmeralda, Coral Beach, Marbella",
    },
    category: {
      es: "Residencial",
      en: "Residential",
    },
    year: "2017",
    architects: ["Andrés M. Mateo Fernández. Arquitecto"],
    studio: "MoMaA",
    location: "Coral Beach, Marbella, Málaga",
    disciplines: {
      es: ["Arquitectura", "Diseño Residencial"],
      en: ["Architecture", "Residential Design"],
    },
    body: {
      es: [],
      en: [],
    },
    externalUrl: "https://momaa.es/casa-playa-esmeralda/",
    externalLabel: {
      es: "Ver en MoMaA",
      en: "View on MoMaA",
    },
  },
  {
    id: "eic-nuevo-vestuario",
    image: "/eic-nuevo-vestuario-1.jpg",
    images: [
      "/eic-nuevo-vestuario-2.jpg",
      "/eic-nuevo-vestuario-3.jpg",
      "/eic-nuevo-vestuario-4.jpg",
      "/eic-nuevo-vestuario-5.jpg",
    ],
    title: {
      es: "EIC — Nuevo Vestuario, English International College",
      en: "EIC — New Changing Rooms, English International College",
    },
    category: {
      es: "Educacional",
      en: "Educational",
    },
    year: "2017",
    architects: ["Andrés M. Mateo Fernández. Arquitecto"],
    studio: "MoMaA",
    location: "Marbella, Málaga",
    disciplines: {
      es: ["Arquitectura", "Diseño"],
      en: ["Architecture", "Design"],
    },
    body: {
      es: [],
      en: [],
    },
    externalUrl: "https://momaa.es/nuevo-vestuario-eic/",
    externalLabel: {
      es: "Ver en MoMaA",
      en: "View on MoMaA",
    },
  },
  {
    id: "los-porqueroles",
    image: "/los-porqueroles-1.jpg",
    images: ["/los-porqueroles-2.jpg", "/los-porqueroles-3.jpg"],
    title: {
      es: "Urbanización Los Porqueroles",
      en: "Los Porqueroles Development",
    },
    category: {
      es: "Urbanismo",
      en: "Urban Planning",
    },
    year: "2017",
    architects: ["Andrés M. Mateo Fernández. Arquitecto"],
    studio: "MoMaA",
    location: "Marbella, Málaga",
    disciplines: {
      es: ["Arquitectura", "Urbanismo", "Diseño"],
      en: ["Architecture", "Urban Planning", "Design"],
    },
    body: {
      es: [],
      en: [],
    },
    externalUrl: "https://momaa.es/urbanizacion-los-porqueroles/",
    externalLabel: {
      es: "Ver en MoMaA",
      en: "View on MoMaA",
    },
  },
  {
    id: "momaa-loft-office",
    image: "/momaa-loft-office-1.jpg",
    images: [
      "/momaa-loft-office-2.jpg",
      "/momaa-loft-office-3.jpg",
      "/momaa-loft-office-4.jpg",
      "/momaa-loft-office-5.jpg",
      "/momaa-loft-office-6.jpg",
    ],
    title: {
      es: "Office MoMaA",
      en: "Office MoMaA",
    },
    category: {
      es: "Interiorismo",
      en: "Interior Design",
    },
    year: "2017",
    architects: [
      "Andrés M. Mateo Fernández. Arquitecto",
      "José Moreno González. Arquitecto",
      "Estefanía Moreno González. Arquitecto Técnico",
    ],
    studio: "MoMaA",
    location: "Marbella, Málaga",
    disciplines: {
      es: ["Interiorismo", "Diseño"],
      en: ["Interior Design", "Design"],
    },
    body: {
      es: [],
      en: [],
    },
    externalUrl: "https://momaa.es/loft-office-momaa/",
    externalLabel: {
      es: "Ver en MoMaA",
      en: "View on MoMaA",
    },
  },
  {
    id: "casa-lucia-madrid",
    image: "/casa-lucia-madrid-1.jpg",
    images: [
      "/casa-lucia-madrid-2.jpg",
      "/casa-lucia-madrid-3.jpg",
      "/casa-lucia-madrid-4.jpg",
      "/casa-lucia-madrid-5.jpg",
      "/casa-lucia-madrid-6.jpg",
      "/casa-lucia-madrid-7.jpg",
      "/casa-lucia-madrid-8.jpg",
      "/casa-lucia-madrid-9.jpg",
    ],
    title: {
      es: "Casa Lucía, Madrid",
      en: "Casa Lucía, Madrid",
    },
    category: {
      es: "Residencial",
      en: "Residential",
    },
    year: "2017",
    architects: [
      "Andrés M. Mateo Fernández. Arquitecto",
      "Estefanía Moreno González. Arquitecta Técnica",
    ],
    studio: "MoMaA",
    location: "Madrid",
    disciplines: {
      es: ["Arquitectura", "Diseño Residencial"],
      en: ["Architecture", "Residential Design"],
    },
    body: {
      es: [
        "La vivienda se encuadra dentro de un edificio de bloque abierto plurifamiliar en un entorno maravilloso cerca del parque del Retiro en Madrid.",
        "El objetivo de las obras de reforma es mejorar la distribución original y adaptarlas a las nuevas necesidades de la familia en un contexto del siglo XXI.",
        "Además, se aprovecha para mejorar las calidades de su envolvente desde su interior sin afectar a la fachada, así como reacondicionar las instalaciones haciéndolas más eficientes y amables con el medio de acuerdo al Código Técnico de la Edificación (CTE).",
      ],
      en: [
        "The dwelling is part of an open-block multifamily building located in a wonderful setting near El Retiro Park in Madrid.",
        "The aim of the renovation work is to improve the original layout and adapt it to the family's new needs in the context of 21st-century living.",
        "Additionally, the project takes the opportunity to enhance the quality of the building envelope from the inside without affecting the façade, as well as to upgrade the installations to make them more efficient and environmentally friendly, in accordance with the Spanish Technical Building Code (CTE).",
      ],
    },
    externalUrl: "https://momaa.es/casa-lucia-madrid-rehabilitacion/",
    externalLabel: {
      es: "Ver en MoMaA",
      en: "View on MoMaA",
    },
  },
  {
    id: "villa-olivier-2017",
    image: "/villa-olivier-2017-1.jpg",
    images: [
      "/villa-olivier-2017-2.jpg",
      "/villa-olivier-2017-3.jpg",
      "/villa-olivier-2017-4.jpg",
      "/villa-olivier-2017-5.jpg",
      "/villa-olivier-2017-6.jpg",
      "/villa-olivier-2017-7.jpg",
      "/villa-olivier-2017-8.jpg",
      "/villa-olivier-2017-9.jpg",
      "/villa-olivier-2017-10.jpg",
    ],
    title: {
      es: "Villa Olivier I, Marbella Golf Resort",
      en: "Villa Olivier I, Marbella Golf Resort",
    },
    category: {
      es: "Residencial",
      en: "Residential",
    },
    year: "2017",
    architects: [
      "Andrés M. Mateo Fernández. Arquitecto",
      "Atmosphere Project. Colaborador",
    ],
    studio: "MoMaA",
    location: "Marbella Golf Resort, Marbella, Málaga",
    disciplines: {
      es: ["Arquitectura", "Diseño Residencial"],
      en: ["Architecture", "Residential Design"],
    },
    body: {
      es: [],
      en: [],
    },
    externalUrl: "https://momaa.es/villa-marbella-club-golf/",
    externalLabel: {
      es: "Ver en MoMaA",
      en: "View on MoMaA",
    },
  },
  {
    id: "colegio-putian-china",
    image: "/colegio-putian-china-1.jpg",
    images: [
      "/colegio-putian-china-2.jpg",
      "/colegio-putian-china-3.jpg",
      "/colegio-putian-china-4.jpg",
      "/colegio-putian-china-5.jpg",
      "/colegio-putian-china-6.jpg",
      "/colegio-putian-china-7.jpg",
      "/colegio-putian-china-8.jpg",
      "/colegio-putian-china-9.jpg",
    ],
    title: {
      es: "Colegio en Putian, China",
      en: "School in Putian, China",
    },
    category: {
      es: "Educacional",
      en: "Educational",
    },
    year: "2017",
    architects: [
      "Andrés M. Mateo Fernández. Arquitecto",
      "Estefanía Moreno González. Colaboradora",
      "Joaquín García Ortega. Colaborador",
    ],
    studio: "MoMaA",
    location: "Putian, China",
    disciplines: {
      es: ["Arquitectura", "Diseño"],
      en: ["Architecture", "Design"],
    },
    body: {
      es: [],
      en: [],
    },
    externalUrl: "https://momaa.es/colegio-en-china-2/",
    externalLabel: {
      es: "Ver en MoMaA",
      en: "View on MoMaA",
    },
  },
  {
    id: "villa-alberquilla-la-virginia",
    image: "/villa-alberquilla-la-virginia-1.jpg",
    images: [
      "/villa-alberquilla-la-virginia-2.jpg",
      "/villa-alberquilla-la-virginia-3.jpg",
      "/villa-alberquilla-la-virginia-4.jpg",
      "/villa-alberquilla-la-virginia-5.jpg",
      "/villa-alberquilla-la-virginia-6.jpg",
      "/villa-alberquilla-la-virginia-7.jpg",
      "/villa-alberquilla-la-virginia-8.jpg",
      "/villa-alberquilla-la-virginia-9.jpg",
      "/villa-alberquilla-la-virginia-10.jpg",
      "/villa-alberquilla-la-virginia-11.jpg",
    ],
    title: {
      es: "Villa Alberquilla, La Virginia, Marbella",
      en: "Villa Alberquilla, La Virginia, Marbella",
    },
    category: {
      es: "Residencial",
      en: "Residential",
    },
    year: "2016",
    architects: [
      "Andrés M. Mateo Fernández. Arquitecto",
      "Estefanía Moreno. Arquitecto Técnico",
    ],
    studio: "MoMaA",
    location: "La Virginia, Marbella, Málaga",
    disciplines: {
      es: ["Arquitectura", "Diseño Residencial"],
      en: ["Architecture", "Residential Design"],
    },
    body: {
      es: [],
      en: [],
    },
    externalUrl:
      "https://momaa.es/obra-reforma-de-vivienda-y-ejecucion-de-piscina-la-virginia/",
    externalLabel: {
      es: "Ver en MoMaA",
      en: "View on MoMaA",
    },
  },
  {
    id: "jacuzzi-en-terraza",
    image: "/jacuzzi-en-terraza-1.jpg",
    images: ["/jacuzzi-en-terraza-2.jpg"],
    title: {
      es: "Jacuzzi en Terraza, Marbella",
      en: "Terrace Jacuzzi, Marbella",
    },
    category: {
      es: "Residencial",
      en: "Residential",
    },
    year: "2016",
    architects: ["Andrés M. Mateo Fernández. Arquitecto"],
    studio: "MoMaA",
    location: "Marbella, Málaga",
    disciplines: {
      es: ["Arquitectura", "Diseño Residencial"],
      en: ["Architecture", "Residential Design"],
    },
    body: {
      es: [],
      en: [],
    },
    externalUrl: "https://momaa.es/obra-jacuzzi-en-terraza/",
    externalLabel: {
      es: "Ver en MoMaA",
      en: "View on MoMaA",
    },
  },
  {
    id: "comedor-la-virginia",
    image: "/comedor-la-virginia-1.jpg",
    title: {
      es: "Comedor en La Virginia, Marbella",
      en: "Dining Room in La Virginia, Marbella",
    },
    category: {
      es: "Interiorismo",
      en: "Interior Design",
    },
    year: "2016",
    architects: ["Andrés M. Mateo Fernández. Arquitecto"],
    studio: "MoMaA",
    location: "La Virginia, Marbella, Málaga",
    disciplines: {
      es: ["Interiorismo", "Diseño"],
      en: ["Interior Design", "Design"],
    },
    body: {
      es: [
        "El diseño para este comedor venía condicionado por su ubicación. Se trataba de crear un espacio acogedor con una elección de mobiliario que rimara con la ventana orientada hacia el norte y que ofreciera una perspectiva ideal para disfrutar en los almuerzos familiares.",
      ],
      en: [
        "The design for this dining room was influenced by its location. The idea was to create a cozy space with furniture that complemented the window facing north and offered an ideal perspective to enjoy during family lunches.",
      ],
    },
    externalUrl: "https://momaa.es/comedor-la-virginia-marbella/",
    externalLabel: {
      es: "Ver en MoMaA",
      en: "View on MoMaA",
    },
  },
  {
    id: "parque-urbano-fuensanta",
    image: "/parque-urbano-fuensanta-1.jpg",
    images: [
      "/parque-urbano-fuensanta-2.jpg",
      "/parque-urbano-fuensanta-3.jpg",
      "/parque-urbano-fuensanta-4.jpg",
      "/parque-urbano-fuensanta-5.jpg",
      "/parque-urbano-fuensanta-6.jpg",
      "/parque-urbano-fuensanta-7.jpg",
    ],
    title: {
      es: "Parque Urbano en Fuensanta",
      en: "Fuensanta Urban Park",
    },
    category: {
      es: "Urbanismo",
      en: "Urban Planning",
    },
    year: "2016",
    architects: [
      "Maricarmen Pérez Castellano. Arquitecta",
      "Rodrigo González. Arquitecto",
      "Andrés M. Mateo Fernández. Arquitecto",
    ],
    studio: "MoMaA",
    location: "Marbella, Málaga",
    disciplines: {
      es: ["Arquitectura", "Urbanismo", "Diseño"],
      en: ["Architecture", "Urban Planning", "Design"],
    },
    body: {
      es: [],
      en: [],
    },
    externalUrl: "https://momaa.es/concurso-parque-urbano-fuensanta-2/",
    externalLabel: {
      es: "Ver en MoMaA",
      en: "View on MoMaA",
    },
  },
  {
    id: "fin-master-arquitectura",
    image: "/fin-master-arquitectura-1.jpg",
    images: [
      "/fin-master-arquitectura-2.jpg",
      "/fin-master-arquitectura-3.jpg",
      "/fin-master-arquitectura-4.jpg",
      "/fin-master-arquitectura-5.jpg",
      "/fin-master-arquitectura-6.jpg",
    ],
    title: {
      es: "Fin de Máster en Arquitectura",
      en: "Architecture Master's Thesis",
    },
    category: {
      es: "Urbanismo",
      en: "Urban Planning",
    },
    year: "2016",
    architects: [
      "Andrés M. Mateo Fernández. Arquitecto",
      "Alejandro Muñoz Miranda. Arquitecto Tutor",
    ],
    studio: "MoMaA",
    location: "Marbella, Málaga",
    disciplines: {
      es: ["Arquitectura", "Urbanismo", "Diseño"],
      en: ["Architecture", "Urban Planning", "Design"],
    },
    body: {
      es: [],
      en: [],
    },
    externalUrl: "https://momaa.es/fin-de-master-arquitectura/",
    externalLabel: {
      es: "Ver en MoMaA",
      en: "View on MoMaA",
    },
  },
  {
    id: "british-school-marbella-2015",
    image: "/british-school-marbella-2015-1.jpg",
    images: [
      "/british-school-marbella-2015-2.jpg",
      "/british-school-marbella-2015-3.jpg",
      "/british-school-marbella-2015-4.jpg",
      "/british-school-marbella-2015-5.jpg",
    ],
    title: {
      es: "British School Marbella",
      en: "British School Marbella",
    },
    category: {
      es: "Educacional",
      en: "Educational",
    },
    year: "2015",
    architects: [
      "Andrés M. Mateo. Arquitecto",
      "Estefanía Moreno. Arquitecto Técnico",
    ],
    studio: "MoMaA",
    location: "Marbella, Málaga",
    disciplines: {
      es: ["Arquitectura", "Diseño"],
      en: ["Architecture", "Design"],
    },
    body: {
      es: [],
      en: [],
    },
    externalUrl: "https://momaa.es/british-school-of-marbella/",
    externalLabel: {
      es: "Ver en MoMaA",
      en: "View on MoMaA",
    },
  },
  {
    id: "pergola-piscina",
    image: "/pergola-piscina-1.jpg",
    images: ["/pergola-piscina-2.jpg", "/pergola-piscina-3.jpg"],
    title: {
      es: "Pérgola de Piscina, Marbella",
      en: "Pool Pergola, Marbella",
    },
    category: {
      es: "Residencial",
      en: "Residential",
    },
    year: "2014",
    architects: [
      "Andrés M. Mateo Fernández. Arquitecto",
      "Estefanía González. Arquitecto Técnico",
    ],
    studio: "MoMaA",
    location: "Marbella, Málaga",
    disciplines: {
      es: ["Arquitectura", "Diseño Residencial"],
      en: ["Architecture", "Residential Design"],
    },
    body: {
      es: [],
      en: [],
    },
    externalUrl: "https://momaa.es/obra-pergola-de-piscina/",
    externalLabel: {
      es: "Ver en MoMaA",
      en: "View on MoMaA",
    },
  },
  {
    id: "villa-elena",
    image: "/villa-elena-1.jpg",
    images: [
      "/villa-elena-2.jpg",
      "/villa-elena-3.jpg",
      "/villa-elena-4.jpg",
      "/villa-elena-5.jpg",
    ],
    title: {
      es: "Villa Elena",
      en: "Villa Elena",
    },
    category: {
      es: "Residencial",
      en: "Residential",
    },
    year: "2014",
    architects: [
      "Recordon & Dunner. Arquitectos",
      "Andrés M. Mateo. Project Manager",
    ],
    studio: "MoMaA",
    location: "La Zagaleta, Benahavís, Málaga",
    disciplines: {
      es: ["Arquitectura", "Project Management"],
      en: ["Architecture", "Project Management"],
    },
    body: {
      es: [],
      en: [],
    },
    externalUrl: "https://momaa.es/la-zagaleta-c-2-25/",
    externalLabel: {
      es: "Ver en MoMaA",
      en: "View on MoMaA",
    },
  },
  {
    id: "villa-travertino",
    image: "/villa-travertino-1.jpg",
    images: [
      "/villa-travertino-2.jpg",
      "/villa-travertino-3.jpg",
      "/villa-travertino-4.jpg",
      "/villa-travertino-5.jpg",
      "/villa-travertino-6.jpg",
    ],
    title: {
      es: "Villa Travertino",
      en: "Villa Travertino",
    },
    category: {
      es: "Residencial",
      en: "Residential",
    },
    year: "2012",
    architects: [
      "Felipe Recordon. Arquitecto",
      "Andrés M. Mateo. Project Manager",
    ],
    studio: "MoMaA",
    location: "Marbella, Málaga",
    disciplines: {
      es: ["Arquitectura", "Project Management"],
      en: ["Architecture", "Project Management"],
    },
    body: {
      es: [],
      en: [],
    },
    externalUrl: "https://momaa.es/villa-travertino/",
    externalLabel: {
      es: "Ver en MoMaA",
      en: "View on MoMaA",
    },
  },
  {
    id: "villa-beata",
    image: "/villa-beata-1.jpg",
    images: [
      "/villa-beata-2.jpg",
      "/villa-beata-3.jpg",
      "/villa-beata-4.jpg",
      "/villa-beata-5.jpg",
      "/villa-beata-6.jpg",
    ],
    title: {
      es: "Villa Beata, Marbella",
      en: "Villa Beata, Marbella",
    },
    category: {
      es: "Residencial",
      en: "Residential",
    },
    year: "2009",
    architects: [
      "Carlos Gilardi. Arquitecto",
      "Andrés M. Mateo. Project Management",
    ],
    studio: "MoMaA",
    location: "Cascada de Camoján, Marbella, Málaga",
    disciplines: {
      es: ["Arquitectura", "Project Management"],
      en: ["Architecture", "Project Management"],
    },
    body: {
      es: [],
      en: [],
    },
    externalUrl: "https://momaa.es/cascada-de-camojan-5-6/",
    externalLabel: {
      es: "Ver en MoMaA",
      en: "View on MoMaA",
    },
  },
  {
    id: "villa-saraya",
    image: "/villa-saraya-1.jpg",
    images: [
      "/villa-saraya-2.jpg",
      "/villa-saraya-3.jpg",
      "/villa-saraya-4.jpg",
    ],
    title: {
      es: "Villa Saraya, Sierra Blanca",
      en: "Villa Saraya, Sierra Blanca",
    },
    category: {
      es: "Residencial",
      en: "Residential",
    },
    year: "2006",
    architects: [
      "Recordon and Dunner. Arquitectos",
      "Andrés M. Mateo. Project Manager",
    ],
    studio: "MoMaA",
    location: "Sierra Blanca, Marbella, Málaga",
    disciplines: {
      es: ["Arquitectura", "Project Management"],
      en: ["Architecture", "Project Management"],
    },
    body: {
      es: [],
      en: [],
    },
    externalUrl: "https://momaa.es/sierra-blanca/",
    externalLabel: {
      es: "Ver en MoMaA",
      en: "View on MoMaA",
    },
  },
  {
    id: "villa-olga",
    image: "/villa-olga-1.jpg",
    images: ["/villa-olga-2.jpg", "/villa-olga-3.jpg"],
    title: {
      es: "Villa Olga",
      en: "Villa Olga",
    },
    category: {
      es: "Residencial",
      en: "Residential",
    },
    year: "2004",
    architects: [
      "Recordon & Dunner. Arquitectos",
      "Andrés M. Mateo. Arquitecto Técnico",
    ],
    studio: "MoMaA",
    location: "El Rosario, Marbella, Málaga",
    disciplines: {
      es: ["Arquitectura", "Diseño Residencial"],
      en: ["Architecture", "Residential Design"],
    },
    body: {
      es: [],
      en: [],
    },
    externalUrl: "https://momaa.es/el-rosario-2011/",
    externalLabel: {
      es: "Ver en MoMaA",
      en: "View on MoMaA",
    },
  },
  {
    id: "villa-alicates-playas",
    image: "/villa-alicates-playas-1.jpg",
    images: [
      "/villa-alicates-playas-2.jpg",
      "/villa-alicates-playas-3.jpg",
      "/villa-alicates-playas-4.jpg",
      "/villa-alicates-playas-5.jpg",
    ],
    title: {
      es: "Villa en Alicates Playas, Marbella",
      en: "Villa in Alicates Playas, Marbella",
    },
    category: {
      es: "Residencial",
      en: "Residential",
    },
    year: "2003",
    architects: [
      "José Moreno González. Arquitecto",
      "Andrés M. Mateo. Arquitecto",
    ],
    studio: "MoMaA",
    location: "Alicates Playas, Marbella, Málaga",
    disciplines: {
      es: ["Arquitectura", "Diseño Residencial"],
      en: ["Architecture", "Residential Design"],
    },
    body: {
      es: [
        "Marbella es una ciudad definida por la relación entre las viviendas y el entorno tan diverso y singular que ofrece. En este contexto, estos arquitectos, ya en el año 2003 y cuando este tipo de relación en esa década venía marcada por una arquitectura tipológica de viviendas «mansiones andaluzas» cargada de detalles, iniciaron una arquitectura moderna con volúmenes bien marcados, exentos de tanta ornamentación del momento, y de espacios muy sugerentes y prácticos sin renunciar a la estética y el diseño.",
      ],
      en: [
        'Marbella is a city defined by its relationship between housing and the diverse and singular environment it offers. In this context, these architects, back in 2003, when this relationship was typically marked by a typological architecture of "Andalusian mansions" full of detail, initiated a modern architecture with well-marked volumes, free of so much period ornamentation, and with suggestive, practical spaces without giving up on aesthetics and design.',
      ],
    },
    externalUrl: "https://momaa.es/alicates-playas-35/",
    externalLabel: {
      es: "Ver en MoMaA",
      en: "View on MoMaA",
    },
  },
  {
    id: "hermes-mansion",
    image: "/hermes-mansion-1.jpg",
    images: [
      "/hermes-mansion-2.jpg",
      "/hermes-mansion-3.jpg",
      "/hermes-mansion-4.jpg",
      "/hermes-mansion-5.jpg",
    ],
    title: {
      es: "Hermes Mansión, Marbella Golf Resort",
      en: "Hermes Mansion, Marbella Golf Resort",
    },
    category: {
      es: "Residencial",
      en: "Residential",
    },
    year: "2002",
    architects: [
      "Recordon & Dunner. Arquitectos",
      "Andrés M. Mateo. Arquitecto Técnico",
    ],
    studio: "MoMaA",
    location: "Marbella Golf Resort, Marbella, Málaga",
    disciplines: {
      es: ["Arquitectura", "Diseño Residencial"],
      en: ["Architecture", "Residential Design"],
    },
    body: {
      es: [],
      en: [],
    },
    externalUrl: "https://momaa.es/club-golf-resort/",
    externalLabel: {
      es: "Ver en MoMaA",
      en: "View on MoMaA",
    },
  },
  {
    id: "villa-loriana",
    image: "/villa-loriana-1.jpg",
    images: [
      "/villa-loriana-2.jpg",
      "/villa-loriana-3.jpg",
      "/villa-loriana-4.jpg",
    ],
    title: {
      es: "Villa Loriana, Marbella",
      en: "Villa Loriana, Marbella",
    },
    category: {
      es: "Residencial",
      en: "Residential",
    },
    year: "2000",
    architects: [
      "Felipe Recordon. Arquitecto",
      "Andrés Mateo. Arquitecto Junior e Ing. Edificación",
    ],
    studio: "MoMaA",
    location: "Milla de Oro, Marbella, Málaga",
    disciplines: {
      es: ["Arquitectura", "Diseño Residencial"],
      en: ["Architecture", "Residential Design"],
    },
    body: {
      es: [
        "Solo cabe decir que tuve la gran suerte de trabajar con el mejor equipo de profesionales y realizar la casa más maravillosa de la Costa del Sol… ¡gracias Felipe por esa gran oportunidad!",
      ],
      en: [
        "The only thing left to say is, I was incredibly lucky to work with an amazing team of professionals and produce the most beautiful house of Costa del Sol... Thank you, Felipe, for this great opportunity!",
      ],
    },
    externalUrl:
      "https://www.vanitatis.elconfidencial.com/multimedia/album/noticias/2017-02-20/villa-loriana-casa-mas-cara-espana-marbella-lujo_1333948",
    externalLabel: {
      es: "Ver reportaje",
      en: "Read feature",
    },
  },
];

export function getProjectDetail(id: string): ProjectDetail | undefined {
  return projectDetails.find((p) => p.id === id);
}
