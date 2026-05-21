export interface TeamMember {
  name: string
  role: { es: string; en: string }
  bio: { es: string; en: string }
  isFounder?: boolean
}

export const founders: TeamMember[] = [
  {
    name: 'Andrés M. Mateo Fernández',
    role: { es: 'Fundador · Arquitecto', en: 'Founder · Architect' },
    isFounder: true,
    bio: {
      es: 'Arquitecto colegiado nº 1688 en el Colegio Oficial de Arquitectos de Málaga e Ingeniero de la Edificación colegiado nº 2544 en el Colegio Oficial de Aparejadores de Málaga. Fundó MoMaA en el año 2016 y colabora con el estudio de D. Felipe Recordón desde el año 2000, quien ha sido su mentor y ejemplo a seguir desde los inicios. Andrés M. Mateo define la arquitectura como la fusión del Arte y la Tecnología que trata de dar soluciones a las inquietudes y necesidades de la sociedad actual.',
      en: 'Registered Architect No. 1688 at the Official College of Architects of Málaga and Registered Building Engineer No. 2544 at the Official College of Technical Architects of Málaga. He founded MoMaA in 2016, while also collaborating with the studio of Felipe Recordón since 2000 — his mentor and professional inspiration from the very beginning. Andrés M. Mateo defines architecture as the fusion of Art and Technology, seeking solutions to the concerns and needs of contemporary society.',
    },
  },
  {
    name: 'Estefanía Moreno González',
    role: { es: 'Fundadora · Arquitecta Técnica', en: 'Co-Founder · Technical Architect' },
    isFounder: true,
    bio: {
      es: 'Socia de MoMaA desde el año 2016. Arquitecta técnica e ingeniera de la edificación en el Colegio Oficial de Arquitectos Técnicos de Málaga, colegiada nº 2581, especialista en construcción, urbanismo y paisajismo. Estefanía Moreno entiende la arquitectura y la construcción como un juego de volúmenes y luces que interactúan con el paisaje para crear algo bello y necesario para la sociedad.',
      en: 'Partner at MoMaA since 2016. Registered Technical Architect and Building Engineer at the Official College of Technical Architects of Málaga, member No. 2581, specialising in construction, urban planning and landscaping. Estefanía Moreno understands architecture and construction as an interplay of volumes and light that interact with the landscape to create something beautiful and essential for society.',
    },
  },
]

export const team: TeamMember[] = [
  {
    name: 'José Moreno González',
    role: { es: 'Arquitecto', en: 'Architect' },
    bio: {
      es: 'Arquitecto colegiado en el Colegio Oficial de Arquitectos de Málaga. José Moreno es fundamental por su amplia experiencia, su compromiso con lo bien hecho y su concepción del diseño para materializar la arquitectura visionaria de MoMaA.',
      en: 'Registered Architect at the Official College of Architects of Málaga. José Moreno is a key member of the team, valued for his extensive experience, his commitment to craftsmanship, and his design sensibility in bringing MoMaA\'s visionary architecture to life.',
    },
  },
  {
    name: 'Rodrigo González Díaz-Caneja',
    role: { es: 'Arquitecto', en: 'Architect' },
    bio: {
      es: 'Arquitecto licenciado por la Universidad de Navarra. Su pasión por viajar le permite aportar la riqueza adquirida de su experiencia en otros lugares con proyectos de distintas escalas. Ve la arquitectura como una conjunción de espacios en relación.',
      en: 'Architect, graduate of the University of Navarra. His passion for travel allows him to bring the richness of his international experience to projects of all scales. He sees architecture as a conjunction of spaces in relationship.',
    },
  },
  {
    name: 'Cristina Andrea Carrasco Brenes',
    role: { es: 'Arquitecta', en: 'Architect' },
    bio: {
      es: 'Arquitecta licenciada por la Universidad de Málaga. Su pasión por la arquitectura se refleja en todas sus intervenciones, aportando al equipo frescura, rigor y una mirada atenta al detalle.',
      en: 'Architect, graduate of the University of Málaga. Her passion for architecture is evident in every project she undertakes, bringing the team freshness, rigour and a keen eye for detail.',
    },
  },
  {
    name: 'Alejandra Ron Pérez',
    role: { es: 'Interiorista', en: 'Interior Designer' },
    bio: {
      es: 'Joven interiorista cuya curiosidad y sensibilidad estética la han llevado a explorar la arquitectura como un lenguaje que conecta personas, espacios y emociones. Su pasión por los viajes le permite incorporar la riqueza cultural de distintos lugares en cada proyecto. Para ella, el diseño es un proceso continuo de aprendizaje que transforma ideas en experiencias espaciales únicas.',
      en: 'A young interior designer whose curiosity and aesthetic sensibility lead her to explore architecture as a language connecting people, spaces and emotions. Her passion for travel allows her to bring cultural richness from different places into each project. For her, design is a continuous process of learning that transforms ideas into unique spatial experiences.',
    },
  },
]

export const collaborators = {
  es: 'Patricia Lissen (Abogada Urbanista) · Alfonso Muñoz (Abogado) · Carlos Llanos (Abogado) · Ramón Otalaurruchi (Abogado) · Eduardo Espiga (Abogado) · Felipe Recordon (Arquitecto) · Joaquin Garcia Ortega (Arquitecto) · Maricarmen Pérez Castellano (Arquitecta) · Andrés Dunner (Arquitecto) · Manolo Herrera (Arquitecto) · Alejandro Osorno (Arquitecto Técnico) · Denis de Rio (Ingeniero de Caminos) · Alfonso Castellón (Ingeniero Eléctrico y Decorador) · Elia Oteo (Ingeniero de Caminos) · Carlos de Cabo (Ingeniero Industrial) · AMP Construcciones · Lozano Medina Construcciones · Soljuben Construcciones · Marcresun Construcciones · Hermanos Palacios Construcciones · Ruben Construcciones · Proinserman Instalaciones · Marbeclima Instalaciones · Tuinza Instalaciones · Bang Olufsen Instalaciones · Domosat Instalaciones · Geosand Geotecnia · Viveros del Valle (Paisajista)',
  en: 'Patricia Lissen (Urban Planning Lawyer) · Alfonso Muñoz (Lawyer) · Carlos Llanos (Lawyer) · Ramón Otalaurruchi (Lawyer) · Eduardo Espiga (Lawyer) · Felipe Recordon (Architect) · Joaquin Garcia Ortega (Architect) · Maricarmen Pérez Castellano (Architect) · Andrés Dunner (Architect) · Manolo Herrera (Architect) · Alejandro Osorno (Technical Architect) · Denis de Rio (Civil Engineer) · Alfonso Castellón (Electrical Engineer & Designer) · Elia Oteo (Civil Engineer) · Carlos de Cabo (Industrial Engineer) · AMP Construction · Lozano Medina Construction · Soljuben Construction · Marcresun Construction · Hermanos Palacios Construction · Ruben Construction · Proinserman Installations · Marbeclima Installations · Tuinza Installations · Bang Olufsen Installations · Domosat Installations · Geosand Geotechnics · Viveros del Valle (Landscape)',
}
