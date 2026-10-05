export interface NewsSource {
  label: string;
  url: string;
}

export type ContentBlock =
  | { type: "paragraph"; es: string; en: string }
  | {
      type: "quote";
      es: string;
      en: string;
      /** Optional citation shown below the quote, e.g. a decree/law reference */
      cite?: { es: string; en: string };
    }
  | {
      type: "list";
      heading?: { es: string; en: string };
      /** "checklist" renders square checkbox markers, "bullet" renders a plain list. Defaults to "bullet". */
      style?: "checklist" | "bullet";
      items: { es: string; en: string }[];
    };

export interface NewsArticle {
  /** URL slug, shared across locales — /{locale}/news/{slug} */
  slug: string;
  image: string;
  /** ISO date (YYYY-MM-DD), used for display and structured data */
  publishedDate: string;
  category: { es: string; en: string };
  /** On-page H1 */
  title: { es: string; en: string };
  /** <title> tag — SEO-tuned, includes brand */
  metaTitle: { es: string; en: string };
  /** <meta name="description"> — ~150-160 chars */
  metaDescription: { es: string; en: string };
  /** Short teaser for listing cards */
  excerpt: { es: string; en: string };
  /** Ordered body content blocks (paragraphs, quotes, lists/checklists) */
  content: ContentBlock[];
  sources?: NewsSource[];
}

export const newsArticles: NewsArticle[] = [
  {
    slug: "2025-el-estudio-de-arquitectura-momaa-celebra-la-ejecucion-de-su-proyecto-para-la-biblioteca-de-san-pedro-de-alcantara",
    image: "/biblioteca-san-pedro.jpg",
    publishedDate: "2025-05-14",
    category: {
      es: "Espacio Público",
      en: "Public Space",
    },
    title: {
      es: "2025: El estudio de arquitectura MoMaA celebra la ejecución de su proyecto para la Biblioteca de San Pedro de Alcántara",
      en: "2025: MoMaA Architecture Studio Celebrates the Start of Its San Pedro de Alcántara Library Project",
    },
    metaTitle: {
      es: "Biblioteca de San Pedro de Alcántara | Proyecto MoMaA",
      en: "San Pedro de Alcántara Library | MoMaA Project",
    },
    metaDescription: {
      es: "MoMaA celebra la ejecución de su proyecto para la nueva Biblioteca Municipal de San Pedro de Alcántara (Marbella): un espacio cultural innovador y sostenible para toda la comunidad.",
      en: "MoMaA celebrates the start of construction on its design for the new San Pedro de Alcántara Municipal Library in Marbella — an innovative, sustainable cultural space for the community.",
    },
    excerpt: {
      es: "El estudio de arquitectura MoMaA ha sido confirmado para ejecutar el proyecto de la nueva Biblioteca Municipal de San Pedro de Alcántara, un espacio cultural pensado como punto de encuentro para la comunidad.",
      en: "Architecture firm MoMaA has been confirmed to execute its design for the new San Pedro de Alcántara Municipal Library, a cultural space conceived as a community meeting point.",
    },
    content: [
      {
        type: "paragraph",
        es: "El estudio de arquitectura MoMaA ha expresado su orgullo al confirmarse la próxima ejecución de su proyecto para la nueva Biblioteca de San Pedro de Alcántara. Este importante espacio cultural está destinado a convertirse en un punto de encuentro para la comunidad, ofreciendo un diseño innovador y sostenible que refleja el compromiso de MoMaA con la arquitectura de calidad y el respeto al entorno.",
        en: "The architecture firm MoMaA has expressed pride upon the confirmation of the upcoming construction of their project for the new San Pedro de Alcántara Library. This important cultural space is set to become a community hub, featuring an innovative and sustainable design that reflects MoMaA's commitment to quality architecture and environmental respect.",
      },
      {
        type: "paragraph",
        es: '"Estamos encantados de ver cómo este proyecto cobra vida y confiamos en que la Biblioteca de San Pedro de Alcántara se convertirá en un referente cultural para la zona", señalaron desde el estudio. La nueva biblioteca, que destaca por su funcionalidad y estética contemporánea, brindará un ambiente acogedor y versátil para todos los usuarios.',
        en: '"We are delighted to see this project come to life and confident that the San Pedro de Alcántara Library will become a cultural landmark in the area," the firm stated. The new library, notable for its functionality and contemporary aesthetics, will offer a welcoming and versatile environment for all users.',
      },
      {
        type: "paragraph",
        es: "Con este nuevo proyecto, MoMaA consolida su reputación como un estudio líder en el desarrollo de espacios públicos significativos que promueven la cultura y el bienestar comunitario.",
        en: "With this project, MoMaA strengthens its reputation as a leading firm in creating meaningful public spaces that promote culture and community well-being.",
      },
    ],
    sources: [
      {
        label: "Ayuntamiento de Marbella",
        url: "https://www.marbella.es/actualidad/noticias/el-ayuntamiento-adjudica-las-obras-para-la-nueva-biblioteca-de-san-pedro-alcantara-que-comenzara-a-construirse-en-el-mes-de-junio.html",
      },
      {
        label: "Diario Sur",
        url: "https://www.diariosur.es/marbella/obras-nueva-biblioteca-san-pedro-empezaran-junio-20250513193023-nt.html",
      },
      {
        label: "Onda Cero Marbella",
        url: "https://www.ondacero.es/emisoras/andalucia/marbella/audios-podcast/informativos/ayuntamiento-marbella-adjudica-obra-nueva-biblioteca-municipal-san-pedro-alcantara_2025051468244fc557a5aa2cde232c4d.html",
      },
      {
        label: "Diario Sur",
        url: "https://www.diariosur.es/marbella/nueva-biblioteca-san-pedro-obras-empiezan-verano-20250215000902-nt.html",
      },
      {
        label: "San Pedro Información",
        url: "https://sanpedroinformacion.com/biblioteca-san-pedro-alcantara-obras-2025/",
      },
      {
        label: "101TV",
        url: "https://www.101tv.es/dos-plantas-y-un-diseno-moderno-asi-sera-la-nueva-biblioteca-de-san-pedro-de-alcantara/",
      },
      {
        label: "LatinPress",
        url: "https://www.latinpress.es/nueva-biblioteca-en-san-pedro",
      },
      {
        label: "Marbella 24 Horas",
        url: "https://www.marbella24horas.es/local/adjudicadas-las-obras-para-una-biblioteca-en-san-pedro-alcantara-40474",
      },
    ],
  },
  {
    slug: "checklist-previo-la-compra-de-una-vivienda",
    image: "/checklist-compra-vivienda.jpeg",
    publishedDate: "2026-10-05",
    category: {
      es: "Guías",
      en: "Guides",
    },
    title: {
      es: "Checklist previo a la compra de una vivienda",
      en: "Pre-Purchase Home Buying Checklist",
    },
    metaTitle: {
      es: "Checklist antes de comprar una vivienda | MoMaA",
      en: "Home Buying Checklist | MoMaA Architects",
    },
    metaDescription: {
      es: "Checklist antes de comprar una vivienda: aspectos económicos, urbanísticos, del entorno, constructivos y registrales. Guía de MoMaA, arquitectos en Marbella.",
      en: "Home buying checklist: economic, urban planning, neighborhood, construction and registration aspects to check before you buy. A guide by MoMaA, Marbella.",
    },
    excerpt: {
      es: "Antes de comprar una vivienda, revisa estos 5 bloques clave —económico, urbanístico, de entorno, constructivo y registral— con la checklist que ha preparado MoMaA Arquitectos.",
      en: "Before buying a home, review these 5 key areas — financial, urban planning, neighborhood, construction and registration — with MoMaA's buyer's checklist.",
    },
    content: [
      {
        type: "paragraph",
        es: "La compra de una vivienda es, posiblemente, la inversión más grande a la que se enfrentan la mayoría de las personas al menos una vez en su vida. Por su importancia, conviene prestar mucha atención a toda la documentación que se vaya a firmar: no es recomendable entregar ningún dinero a cuenta ni comprometerse a una compra sin contar antes con el asesoramiento de un profesional cualificado.",
        en: "Buying a home is, for most people, quite possibly the largest investment they will make at least once in their lifetime. Given how important it is, it pays to look closely at every document you're about to sign — it's never a good idea to hand over money on account, or to commit to a purchase, without first getting advice from a qualified professional.",
      },
      {
        type: "paragraph",
        es: "Desde MoMaA, estudio de arquitectura en Marbella, hemos preparado esta checklist previa a la compra de una vivienda para ayudarte a tomar una decisión informada antes de lanzarte a comprar, ya sea en Marbella, la Costa del Sol o cualquier otra ubicación.",
        en: "At MoMaA, an architecture studio based in Marbella, we've put together this pre-purchase home buying checklist to help you make an informed decision before taking the leap — whether you're buying in Marbella, along the Costa del Sol, or anywhere else.",
      },
      {
        type: "list",
        style: "checklist",
        heading: { es: "I. Aspectos económicos", en: "I. Economic aspects" },
        items: [
          {
            es: "Revisar los gastos de la comunidad y comprobar que no se adeuda nada.",
            en: "Check the community fees and confirm there are no outstanding debts.",
          },
          {
            es: "Revisar que estén abonados los Impuestos sobre Bienes Inmuebles (IBI).",
            en: "Verify that the property tax (IBI) is fully paid.",
          },
          {
            es: "Comprobar si se adeuda algún gasto a alguna entidad de conservación, macrocomunidad o similar, en caso de viviendas ubicadas en urbanizaciones fuera del casco urbano.",
            en: "Confirm there are no outstanding fees owed to any conservation entity, master community or similar body, for homes located in developments outside the town centre.",
          },
          {
            es: "Conocer el coste mensual de la comunidad.",
            en: "Find out the monthly community fee.",
          },
          {
            es: "Conocer el coste mensual de la potencia eléctrica contratada para el consumo de los equipos.",
            en: "Find out the monthly cost of the contracted electrical power for your appliances.",
          },
          {
            es: "Conocer el coste anual del IBI de la vivienda.",
            en: "Find out the annual property tax (IBI) cost.",
          },
          {
            es: "Conocer el coste anual de la gestión de residuos (basura) de la vivienda.",
            en: "Find out the annual cost of waste management (rubbish collection) for the property.",
          },
        ],
      },
      {
        type: "list",
        style: "checklist",
        heading: {
          es: "II. Aspectos urbanísticos",
          en: "II. Urban planning aspects",
        },
        items: [
          {
            es: "Copia del documento de primera ocupación de la vivienda.",
            en: "Copy of the first occupancy licence (certificate of habitability) for the property.",
          },
          {
            es: "Copia del certificado de no infracción urbanística de la vivienda, emitido por la gerencia de urbanismo.",
            en: "Copy of the certificate confirming no urban planning infractions, issued by the local planning authority.",
          },
          {
            es: "Copia actualizada de la nota simple registral y comprobar si tiene cargas o algún tipo de servidumbre.",
            en: 'Updated copy of the property registry extract ("nota simple"); check for liens or easements.',
          },
          {
            es: "Copia del certificado catastral, para verificar que las superficies con las que se pagan los impuestos coinciden con las de la nota simple registral.",
            en: "Copy of the cadastral certificate, to verify that the surface area used for tax purposes matches the one on the registry extract.",
          },
          {
            es: "Copia del certificado final de obra de la vivienda y de las superficies declaradas.",
            en: "Copy of the certificate of completion of works and the declared surface areas.",
          },
          {
            es: "Copia del libro de uso y mantenimiento del edificio o vivienda, que incluya los boletines de electricidad y agua, así como las garantías de los equipos de aire acondicionado, etc.",
            en: "Copy of the building's use and maintenance manual, including electricity and water compliance certificates, plus warranties for air conditioning equipment, etc.",
          },
          {
            es: "Copia del proyecto o de los planos de la vivienda, a ser posible visados.",
            en: "Copy of the project or drawings of the property, approved/stamped if possible.",
          },
          {
            es: "Copia de los estatutos de la comunidad.",
            en: "Copy of the community's bylaws (statutes).",
          },
          {
            es: "Planos del PGOU con la clasificación y calificación del suelo donde se ubica la vivienda.",
            en: "Local urban development plan (PGOU) maps showing the land classification and zoning for the area.",
          },
          {
            es: "Disponer del avance del nuevo PGOU, si este se estuviera redactando.",
            en: "Check for a draft of a new PGOU, if one is currently being drawn up.",
          },
        ],
      },
      {
        type: "list",
        style: "checklist",
        heading: {
          es: "III. Aspectos del entorno",
          en: "III. Neighbourhood aspects",
        },
        items: [
          {
            es: "Plano de orientación de la vivienda y análisis de su soleamiento.",
            en: "Orientation plan of the property and analysis of its sun exposure.",
          },
          {
            es: "Entrevista con el presidente o administrador de la comunidad.",
            en: "Interview with the community president or administrator.",
          },
          {
            es: "Entrevista con los vecinos colindantes, para conocer su opinión sobre el edificio y la zona.",
            en: "Talk to neighbouring residents to get their feedback on the building and the area.",
          },
          {
            es: "Comprobar el ruido del tráfico en diferentes horarios.",
            en: "Check traffic noise at different times of day.",
          },
          {
            es: "Comprobar el ruido de la calle en diferentes horarios.",
            en: "Check street noise at different times of day.",
          },
          {
            es: "Comprobar el ruido de los vecinos en diferentes horarios.",
            en: "Check neighbour noise at different times of day.",
          },
          {
            es: "Distancia a colegios.",
            en: "Distance to schools.",
          },
          {
            es: "Distancia a la estación de autobuses.",
            en: "Distance to the bus station.",
          },
          {
            es: "Distancia a la boca de metro más cercana.",
            en: "Distance to the nearest metro/train stop.",
          },
          {
            es: "Distancia a centros de urgencias y hospitales.",
            en: "Distance to emergency and medical centres.",
          },
          {
            es: "Distancia a supermercados.",
            en: "Distance to supermarkets.",
          },
          {
            es: "Distancia a centros comerciales.",
            en: "Distance to shopping centres.",
          },
          {
            es: "Distancia a equipamiento deportivo.",
            en: "Distance to sports facilities.",
          },
        ],
      },
      {
        type: "list",
        style: "checklist",
        heading: {
          es: "IV. Aspectos constructivos",
          en: "IV. Construction aspects",
        },
        items: [
          {
            es: "Certificado energético de la vivienda y su calificación.",
            en: "Energy performance certificate of the property and its rating.",
          },
          {
            es: "Comprobación del cuadro eléctrico de la vivienda y su cableado.",
            en: "Inspection of the electrical panel and wiring.",
          },
          {
            es: "Comprobación del sistema de climatización, el estado de sus equipos y su eficiencia.",
            en: "Inspection of the HVAC system, the condition of its units and its efficiency.",
          },
          {
            es: "Comprobación de la fontanería y la grifería (presencia de cal, estado general, etc.).",
            en: "Inspection of the plumbing and taps (limescale build-up, general condition, etc.).",
          },
          {
            es: "Comprobación del sistema de saneamiento.",
            en: "Inspection of the sewage/drainage system.",
          },
          {
            es: "Comprobar la existencia de manchas de humedad.",
            en: "Check for damp or moisture stains.",
          },
          {
            es: "Comprobar fisuras en las paredes.",
            en: "Check for cracks in the walls.",
          },
          {
            es: "Comprobar fisuras en el techo.",
            en: "Check for cracks in the ceiling.",
          },
          {
            es: "Comprobar el estado de la solería.",
            en: "Check the condition of the flooring.",
          },
        ],
      },
      {
        type: "list",
        style: "checklist",
        heading: {
          es: "V. Aspectos registrales",
          en: "V. Registration aspects",
        },
        items: [
          {
            es: "Otorgamiento de escritura pública ante notario.",
            en: "Execution of the public deed before a notary.",
          },
          {
            es: "Pago de impuestos e inscripción en el Registro de la Propiedad.",
            en: "Payment of taxes and registration at the Land Registry.",
          },
          {
            es: "Alta del suministro de electricidad.",
            en: "Activation of the electricity supply.",
          },
          {
            es: "Alta del suministro de agua.",
            en: "Activation of the water supply.",
          },
          {
            es: "Alta de los servicios de telefonía e internet.",
            en: "Activation of phone and internet services.",
          },
        ],
      },
      {
        type: "paragraph",
        es: "En MoMaA llevamos más de dos décadas asesorando a compradores y propietarios en la Costa del Sol. Si necesitas una inspección técnica independiente antes de firmar, revisar la documentación urbanística de una vivienda o resolver dudas sobre su estado constructivo, nuestro equipo de arquitectos puede ayudarte a comprar con la tranquilidad de contar con un criterio profesional.",
        en: "At MoMaA we've spent more than two decades advising buyers and homeowners across the Costa del Sol. If you need an independent technical inspection before signing, a review of a property's planning documentation, or answers about its construction condition, our team of architects can help you buy with the peace of mind of professional, independent advice.",
      },
    ],
  },
  {
    slug: "cedula-de-habitabilidad-o-primera-ocupacion",
    image: "/Como-se-obtiene-la-cedula-de-habitabilidad.webp",
    publishedDate: "2026-09-50",
    category: {
      es: "Guías",
      en: "Guides",
    },
    title: {
      es: "Cédula de habitabilidad o primera ocupación",
      en: "Habitation Certificate or First Occupancy Licence",
    },
    metaTitle: {
      es: "Cédula de Habitabilidad vs Primera Ocupación | MoMaA",
      en: "Habitation Certificate vs First Occupancy | MoMaA",
    },
    metaDescription: {
      es: "¿Cédula de habitabilidad o licencia de primera ocupación? Te explicamos la diferencia, su regulación en Andalucía y qué licencia necesitas. Guía de MoMaA.",
      en: "Habitation certificate or first occupancy licence? We explain the difference, how it's regulated in Andalusia, and which one you need. A guide by MoMaA.",
    },
    excerpt: {
      es: "¿Sabes qué diferencia hay entre la cédula de habitabilidad y la licencia de primera ocupación? Te explicamos su regulación en Andalucía y los tres tipos de licencia que existen.",
      en: "Do you know the difference between a habitation certificate and a first occupancy licence? We break down how it's regulated in Andalusia and the three types of licence that exist.",
    },
    content: [
      {
        type: "paragraph",
        es: "Las cédulas de habitabilidad suponen una medida de protección de la legalidad de la edificación o las viviendas. Además de ser un permiso administrativo de ocupación acreditado y expedido por la administración, son también un instrumento de control administrativo que garantiza la aptitud de una vivienda para ser habitada.",
        en: "Habitation certificates (cédulas de habitabilidad) are a legal safeguard for buildings and dwellings. Beyond being an administrative occupancy permit verified and issued by the authorities, they also serve as an administrative control instrument that certifies a home's fitness for habitation.",
      },
      {
        type: "paragraph",
        es: "Esta figura se regula por el Decreto 141/2012, de 30 de octubre, por el que se regulan las condiciones mínimas de habitabilidad de las viviendas y la cédula de habitabilidad.",
        en: "This certificate is regulated by Decree 141/2012, of 30 October, which sets out the minimum habitability conditions for dwellings and the habitation certificate itself.",
      },
      {
        type: "paragraph",
        es: "Es habitual confundir la licencia de primera ocupación con la cédula de habitabilidad, pero no son lo mismo: la primera ocupación la otorga el ayuntamiento, mientras que la cédula de habitabilidad la concede la administración autonómica.",
        en: "It's common to confuse the first occupancy licence with the habitation certificate, but they are not the same thing: the first occupancy licence is granted by the local town hall, while the habitation certificate is issued by the regional government.",
      },
      {
        type: "paragraph",
        es: "En el caso de Andalucía, la emisión de dicha cédula de habitabilidad era otorgada por el Ministerio de la Vivienda hasta la entrada en vigor del Decreto 283/1987, de 25 de noviembre, que eliminó esta figura por considerar que cumplía la misma función que la licencia de primera ocupación.",
        en: "In Andalusia, the habitation certificate was issued by the Ministry of Housing until Decree 283/1987, of 25 November, came into force, which abolished this document on the grounds that it served the same purpose as the first occupancy licence.",
      },
      {
        type: "quote",
        es: "Se suprime en el ámbito de la Comunidad Autónoma de Andalucía la cédula de habitabilidad, así como el trámite de informe preceptivo sobre condiciones higiénicas previo a la concesión de las licencias municipales de obras, expedida y realizado, respectivamente, por las Delegaciones Provinciales de la Consejería de Obras Públicas y Transportes de la Junta de Andalucía.",
        en: "The habitation certificate is abolished within the Autonomous Community of Andalusia, as is the mandatory hygiene-conditions report prior to the granting of municipal building permits — previously issued and carried out, respectively, by the Provincial Delegations of the Regional Ministry of Public Works and Transport of the Junta de Andalucía.",
        cite: {
          es: "Decreto 283/1987, de 25 de noviembre",
          en: "Decree 283/1987, of 25 November",
        },
      },
      {
        type: "paragraph",
        es: "Por tanto, en caso de requerirse dicha documentación para una compraventa o un alquiler, habrá que dirigirse al ayuntamiento y solicitar copia de la licencia de primera ocupación o, en el caso de edificaciones antiguas, a la delegación provincial del Ministerio de la Vivienda para comprobar si se dispone de copia.",
        en: "Therefore, if this documentation is required for a sale, purchase or rental, you will need to apply to the town hall for a copy of the first occupancy licence or, in the case of older buildings, to the provincial delegation of the Ministry of Housing to check whether a copy is on file.",
      },
      {
        type: "paragraph",
        es: "En cualquier caso, la licencia urbanística puede ser solicitada por un técnico especialista (arquitecto o arquitecto técnico), existiendo tres tipos de licencia de primera ocupación:",
        en: "In any case, the building permit can be requested by a specialist technician (an architect or building surveyor), and there are three types of first occupancy licence:",
      },
      {
        type: "list",
        style: "bullet",
        heading: {
          es: "Tipos de licencia de primera ocupación",
          en: "Types of first occupancy licence",
        },
        items: [
          {
            es: "Licencia de primera ocupación de viviendas de nueva construcción.",
            en: "First occupancy licence for newly built homes.",
          },
          {
            es: "Licencia de primera ocupación de rehabilitación, para viviendas que han sido objeto de una rehabilitación integral.",
            en: "First occupancy licence for rehabilitated homes, for dwellings that have undergone a full refurbishment.",
          },
          {
            es: "Licencia de segunda ocupación, para viviendas ya existentes.",
            en: "Second occupancy licence, for already existing homes.",
          },
        ],
      },
      {
        type: "paragraph",
        es: "El Decreto-ley 3/2019, de 24 de septiembre, de medidas urgentes para la adecuación ambiental y territorial de las edificaciones irregulares en la Comunidad Autónoma de Andalucía, establece en su artículo 2 que las edificaciones terminadas con anterioridad a la Ley 19/1975 y que cuenten con licencia urbanística para su ubicación en suelo no urbanizable se asimilarán, en su régimen, a las edificaciones con licencia urbanística. Dicho régimen no será extensible a las obras posteriores que se hayan realizado sobre la edificación sin las preceptivas licencias urbanísticas.",
        en: "Decree-Law 3/2019, of 24 September, on urgent measures for the environmental and territorial adaptation of irregular buildings in the Autonomous Community of Andalusia, establishes in its Article 2 that buildings completed before Law 19/1975 and holding a building permit for their location on non-developable land will be treated, under this regime, in the same way as buildings with a building permit. This regime does not extend to later works carried out on the building without the required building permits.",
      },
      {
        type: "paragraph",
        es: "El mismo criterio se aplicará respecto de las edificaciones irregulares en suelo urbano y urbanizable para las que hubiera transcurrido el plazo para adoptar medidas de restablecimiento de la legalidad urbanística a la entrada en vigor de la Ley 8/1990, de 25 de julio, sobre Reforma del Régimen Urbanístico y Valoraciones del Suelo.",
        en: "The same criterion applies to irregular buildings on urban and developable land for which the deadline to restore urban legality had already elapsed by the time Law 8/1990, of 25 July, on the Reform of the Urban Planning Regime and Land Valuations, came into force.",
      },
      {
        type: "paragraph",
        es: "Por último, cabe destacar que el Decreto-ley 2/2020, de 9 de marzo, de mejora y simplificación de la regulación para el fomento de la actividad productiva en Andalucía, introduce una modificación en el artículo 169 de la LOUA que permite obtener la licencia de primera ocupación de una vivienda de nueva construcción mediante declaración responsable del arquitecto.",
        en: "Finally, it's worth noting that Decree-Law 2/2020, of 9 March, on the improvement and simplification of regulations to promote productive activity in Andalusia, amends Article 169 of the LOUA (Andalusian Land Use Law), allowing the first occupancy licence for a newly built home to be obtained through a responsible declaration signed by the architect.",
      },
    ],
  },
];

export function getNewsArticle(slug: string): NewsArticle | undefined {
  return newsArticles.find((a) => a.slug === slug);
}

export function getAllNewsArticles(): NewsArticle[] {
  return [...newsArticles].sort((a, b) =>
    b.publishedDate.localeCompare(a.publishedDate),
  );
}
