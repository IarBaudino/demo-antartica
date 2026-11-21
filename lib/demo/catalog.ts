export type Region = "antartida" | "artico";

export type Trip = {
  slug: string;
  title: string;
  region: Region;
  experienceType: string;
  duration: string;
  summary: string;
  description: string;
  itinerary: { day: string; title: string; text: string }[];
  vesselSlug: string;
  images: string[];
  featured: boolean;
};

export type Vessel = {
  slug: string;
  name: string;
  kind: string;
  tagline: string;
  description: string;
  images: string[];
  specs: { label: string; value: string }[];
};

export type Post = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  cover: string;
  paragraphs: string[];
};

export type DemoInquiry = {
  id: string;
  name: string;
  email: string;
  message: string;
  relatedTitle?: string;
  relatedSlug?: string;
  status: "nuevo" | "respondido";
  createdAt: string;
};

export const REGION_LABEL: Record<Region, string> = {
  antartida: "Antártida",
  artico: "Ártico",
};

export const EXPERIENCE_TYPES = [
  { name: "Expedición", description: "Desembarcos, zodiac y ritmo de exploración." },
  { name: "Navegación", description: "Travesías a vela o en grupos chicos." },
  { name: "Fotografía", description: "Salidas pensadas para luz, fauna y tiempo en cubierta." },
];

export const VESSELS: Vessel[] = [
  {
    slug: "austral-dawn",
    name: "MV Austral Dawn",
    kind: "Expedición",
    tagline: "Barco de expedición para la Península y las islas subantárticas.",
    description:
      "Cubiertas abiertas, charlas a bordo y zodiacs listos para desembarcar cuando el hielo y el clima lo permiten. Es el barco de las salidas clásicas a la Península Antártica y de la combinación con Georgias del Sur.",
    images: ["/demo/greenland-ship.jpg", "/demo/icebergs.jpg", "/demo/ship-2.jpg"],
    specs: [
      { label: "Pasajeros", value: "120" },
      { label: "Eslora", value: "108 m" },
      { label: "Clase de hielo", value: "1A" },
      { label: "Zodiacs", value: "12" },
      { label: "Cubiertas", value: "6" },
      { label: "Estilo", value: "Expedición" },
    ],
  },
  {
    slug: "skua",
    name: "MV Skua",
    kind: "Expedición",
    tagline: "Más chico, más tiempo fuera de los canales habituales.",
    description:
      "Pensado para cruzar el Círculo Polar cuando la temporada lo habilita. Menos pasajeros, desembarcos más calmos y una cubierta baja, cerca del agua.",
    images: ["/demo/svalbard.jpg", "/demo/ship-2.jpg", "/demo/icebergs.jpg"],
    specs: [
      { label: "Pasajeros", value: "78" },
      { label: "Eslora", value: "90 m" },
      { label: "Clase de hielo", value: "1A" },
      { label: "Zodiacs", value: "8" },
      { label: "Cubiertas", value: "5" },
      { label: "Estilo", value: "Expedición" },
    ],
  },
  {
    slug: "icebird",
    name: "SY Icebird",
    kind: "Velero",
    tagline: "Doce plazas. La Antártida sin el ritmo de un crucero.",
    description:
      "Un velero de expedición para quien quiere el Pasaje de Drake y la Península en grupo reducido. Se navega, se cocina a bordo y los desembarcos se deciden el mismo día.",
    images: ["/demo/ship-ice.jpg", "/demo/terra-nova.jpg", "/demo/icebergs.jpg"],
    specs: [
      { label: "Pasajeros", value: "12" },
      { label: "Eslora", value: "28 m" },
      { label: "Tripulación", value: "6" },
      { label: "Casco", value: "Acero" },
      { label: "Aparejos", value: "Bermuda" },
      { label: "Estilo", value: "Navegación" },
    ],
  },
  {
    slug: "nordlys",
    name: "MV Nordlys",
    kind: "Ártico",
    tagline: "Fiordos, hielo costero y verano ártico.",
    description:
      "Opera Svalbard y la costa de Groenlandia. Cubierta de observación, guías de fauna y salidas en bote entre témpanos cuando el pack lo abre.",
    images: ["/demo/spitsbergen.jpg", "/demo/svalbard.jpg", "/demo/artico.jpg"],
    specs: [
      { label: "Pasajeros", value: "90" },
      { label: "Eslora", value: "96 m" },
      { label: "Clase de hielo", value: "1B" },
      { label: "Botes", value: "8" },
      { label: "Cubiertas", value: "5" },
      { label: "Estilo", value: "Expedición ártica" },
    ],
  },
];

export const TRIPS: Trip[] = [
  {
    slug: "peninsula-antartica",
    title: "Península Antártica clásica",
    region: "antartida",
    experienceType: "Expedición",
    duration: "11 días",
    summary:
      "La puerta de entrada: Drake, canales, pingüineras y desembarcos entre hielo.",
    description:
      "Once días desde Ushuaia para ver la Península con tiempo de bajar a tierra. El itinerario se ajusta cada mañana según viento, hielo y fauna. A bordo del Austral Dawn hay charlas, cubierta abierta y zodiacs para los desembarcos.",
    itinerary: [
      { day: "Día 1", title: "Ushuaia", text: "Embarque por la tarde y presentación del equipo de expedición." },
      { day: "Días 2 y 3", title: "Pasaje de Drake", text: "Travesía hacia el sur. Aves pelágicas y preparación de los desembarcos." },
      { day: "Días 4 a 8", title: "Península", text: "Shetland del Sur y costa oeste. Colonias, témpanos y navegación en zodiac." },
      { day: "Días 9 y 10", title: "Regreso", text: "Drake de vuelta, según el estado del mar." },
      { day: "Día 11", title: "Ushuaia", text: "Desembarque por la mañana." },
    ],
    vesselSlug: "austral-dawn",
    images: ["/demo/penguin.jpg", "/demo/icebergs.jpg", "/demo/greenland-ship.jpg"],
    featured: true,
  },
  {
    slug: "georgias-del-sur",
    title: "Antártida y Georgias del Sur",
    region: "antartida",
    experienceType: "Expedición",
    duration: "18 días",
    summary: "La Península más las colonias de Georgias: albatros, pingüinos rey y costa salvaje.",
    description:
      "Para quien ya sabe que quiere más que la Península. Suma las islas Georgias del Sur, con jornadas largas en tierra y un cruce oceánico más extenso. Sale en el mismo Austral Dawn, con otro ritmo y otra escala.",
    itinerary: [
      { day: "Días 1 a 3", title: "Ushuaia y mar abierto", text: "Embarque y navegación hacia las islas subantárticas." },
      { day: "Días 4 a 8", title: "Georgias del Sur", text: "Bahías, colonias de pingüino rey y caminatas guiadas." },
      { day: "Días 9 a 14", title: "Península Antártica", text: "Desembarcos y navegación entre hielo." },
      { day: "Días 15 a 18", title: "Regreso a Ushuaia", text: "Travesía de vuelta y desembarque." },
    ],
    vesselSlug: "austral-dawn",
    images: ["/demo/penguin.jpg", "/demo/icebergs.jpg", "/demo/ship-2.jpg"],
    featured: false,
  },
  {
    slug: "circulo-polar-antartico",
    title: "Círculo Polar Antártico",
    region: "antartida",
    experienceType: "Fotografía",
    duration: "14 días",
    summary: "Más al sur, con tiempo de luz larga y menos barcos en el mismo canal.",
    description:
      "Una salida que busca cruzar el Círculo Polar. No siempre se logra: el hielo manda. Cuando se abre, el Skua entra por canales angostos, con grupos chicos y tiempo para fotografiar desde el agua.",
    itinerary: [
      { day: "Día 1", title: "Ushuaia", text: "Embarque y briefing fotográfico de la travesía." },
      { day: "Días 2 y 3", title: "Drake", text: "Cubierta y aves. Se define el rumbo según el hielo." },
      { day: "Días 4 a 10", title: "Hacia el Círculo", text: "Península sur, témpanos y desembarcos breves." },
      { day: "Días 11 a 14", title: "Regreso", text: "Drake y llegada a Ushuaia." },
    ],
    vesselSlug: "skua",
    images: ["/demo/icebergs.jpg", "/demo/svalbard.jpg", "/demo/ship-2.jpg"],
    featured: true,
  },
  {
    slug: "antartida-en-velero",
    title: "Antártida en velero",
    region: "antartida",
    experienceType: "Navegación",
    duration: "12 días",
    summary: "Doce personas, un velero de acero y la Península sin horario de crucero.",
    description:
      "A bordo del Icebird el día se arma según el viento. Se participa de la navegación si uno quiere, y los desembarcos son con el grupo completo. No es un crucero: es una travesía corta y cercana.",
    itinerary: [
      { day: "Día 1", title: "Ushuaia", text: "Encuentro en puerto, estiba y salida." },
      { day: "Días 2 y 3", title: "Drake a vela", text: "Guardias suaves y cruce hacia el sur." },
      { day: "Días 4 a 9", title: "Península", text: "Anclajes, hielo y desembarcos con el grupo entero." },
      { day: "Días 10 a 12", title: "Regreso", text: "Vuelta a Ushuaia." },
    ],
    vesselSlug: "icebird",
    images: ["/demo/ship-ice.jpg", "/demo/terra-nova.jpg", "/demo/icebergs.jpg"],
    featured: false,
  },
  {
    slug: "svalbard-verano-artico",
    title: "Svalbard, verano ártico",
    region: "artico",
    experienceType: "Expedición",
    duration: "10 días",
    summary: "Fiordos, aves, glaciares que caen al mar y luz que no se apaga.",
    description:
      "Diez días en el archipiélago, con base de embarque en Longyearbyen. El Nordlys recorre la costa oeste y, si el hielo abre, empuja hacia el norte. Fauna, caminatas cortas y observación desde cubierta.",
    itinerary: [
      { day: "Día 1", title: "Longyearbyen", text: "Embarque y salida al fiordo." },
      { day: "Días 2 a 7", title: "Costa de Spitsbergen", text: "Glaciares, colonias de aves y desembarcos." },
      { day: "Días 8 y 9", title: "Norte, si el hielo deja", text: "Se intenta el pack. Si no, se profundizan los fiordos." },
      { day: "Día 10", title: "Regreso", text: "Longyearbyen por la mañana." },
    ],
    vesselSlug: "nordlys",
    images: ["/demo/spitsbergen.jpg", "/demo/svalbard.jpg", "/demo/artico.jpg"],
    featured: true,
  },
  {
    slug: "groenlandia-fiordos",
    title: "Groenlandia, fiordos y hielo",
    region: "artico",
    experienceType: "Fotografía",
    duration: "12 días",
    summary: "Paredes de hielo, témpanos azules y pueblos chicos en la costa oeste.",
    description:
      "Una costa para mirar despacio. El barco entra en fiordos donde el glaciar llega al agua y se baja a tierra en asentamientos pequeños. La salida está armada con tiempo de luz y pocas horas de navegación corrida.",
    itinerary: [
      { day: "Día 1", title: "Embarque", text: "Encuentro y salida costera." },
      { day: "Días 2 a 8", title: "Fiordos", text: "Frentes glaciarios, témpanos y desembarcos breves." },
      { day: "Días 9 a 11", title: "Costa y pueblos", text: "Paradas en comunidades y navegación entre hielo." },
      { day: "Día 12", title: "Cierre", text: "Desembarque y fin del viaje." },
    ],
    vesselSlug: "nordlys",
    images: ["/demo/svalbard.jpg", "/demo/greenland-ship.jpg", "/demo/spitsbergen.jpg"],
    featured: false,
  },
];

export const POSTS: Post[] = [
  {
    slug: "que-llevar-a-la-antartida",
    title: "Qué llevar a la Antártida",
    excerpt: "Capas, botas de goma y poco más. El barco cubre el equipo de desembarco.",
    date: "12 de octubre de 2026",
    cover: "/demo/penguin.jpg",
    paragraphs: [
      "En cubierta el viento manda más que el termómetro. Conviene pensar en capas que se sacan y se ponen, no en un único abrigo enorme.",
      "Las botas de goma altas suelen prestarlas a bordo para el desembarco. Igual hay que llevar medias de recambio: el zodiac moja.",
      "Binoculares, guantes finos debajo de mitones, y un bolso chico para el día en tierra. El resto se queda en el camarote.",
      "La lista fina cambia según el barco. Por eso cada viaje, en su ficha, dice qué incluye la embarcación y qué conviene confirmar antes de salir.",
    ],
  },
  {
    slug: "cuando-viajar-al-artico",
    title: "Cuándo viajar al Ártico",
    excerpt: "El verano abre los fiordos. La aurora, si aparece, pide otra época y otro ritmo.",
    date: "3 de septiembre de 2026",
    cover: "/demo/lights.jpg",
    paragraphs: [
      "Svalbard y Groenlandia en barco se navegan cuando el mar suelta el hielo costero. En la práctica, eso es el verano del hemisferio norte.",
      "Junio y julio tienen luz casi continua. Sirve para fauna y para estar muchas horas en cubierta. Agosto ya acorta el día y a veces abre mejor el norte.",
      "La aurora boreal no coincide con esas salidas de hielo navegable. Si alguien busca las luces, es otro viaje: más noche, menos desembarco.",
      "Por eso en el catálogo el Ártico está separado de la Antártida. La temporada no se comparte, y el barco tampoco.",
    ],
  },
  {
    slug: "como-elegir-el-barco",
    title: "Cómo se elige el barco",
    excerpt: "No es un detalle de la ficha. Cambia el grupo, el hielo que puede cruzar y el tipo de día.",
    date: "18 de agosto de 2026",
    cover: "/demo/greenland-ship.jpg",
    paragraphs: [
      "Un barco de 120 pasajeros y un velero de 12 no ofrecen el mismo viaje, aunque los dos lleguen a la Península.",
      "La clase de hielo dice hasta dónde puede insistir la ruta. El número de zodiacs dice cuánto se espera para bajar. La eslora se siente en el Drake.",
      "En esta plataforma cada viaje queda asociado a una embarcación, con fotos y características propias. Desde la ficha se pasa al barco, y desde el barco se vuelve a los viajes que lo usan.",
      "El equipo carga eso en el panel. Si cambia el barco de una salida, se actualiza ahí, sin rehacer el sitio.",
    ],
  },
];

export const DEMO_INQUIRIES: DemoInquiry[] = [
  {
    id: "inq-laura",
    name: "Laura Méndez",
    email: "laura.mendez@example.com",
    message:
      "Viajamos dos adultos en febrero. Buscamos la Península, sin Georgias, y queremos saber qué camarotes quedan en el Austral Dawn.",
    relatedTitle: "Península Antártica clásica",
    relatedSlug: "peninsula-antartica",
    status: "nuevo",
    createdAt: "2026-11-18T14:20:00.000Z",
  },
  {
    id: "inq-martin",
    name: "Martín Ruiz",
    email: "martin.ruiz@example.com",
    message:
      "Me interesa Svalbard en julio. ¿El Nordlys sale con guía de fauna y las botas están incluidas?",
    relatedTitle: "Svalbard, verano ártico",
    relatedSlug: "svalbard-verano-artico",
    status: "nuevo",
    createdAt: "2026-11-17T11:05:00.000Z",
  },
  {
    id: "inq-elena",
    name: "Elena Costa",
    email: "elena.costa@example.com",
    message:
      "Quiero entender la diferencia entre el velero y el barco de expedición antes de definir fechas.",
    status: "respondido",
    createdAt: "2026-11-12T09:40:00.000Z",
  },
];

export function getTrip(slug: string): Trip | undefined {
  return TRIPS.find((trip) => trip.slug === slug);
}

export function getVessel(slug: string): Vessel | undefined {
  return VESSELS.find((vessel) => vessel.slug === slug);
}

export function getPost(slug: string): Post | undefined {
  return POSTS.find((post) => post.slug === slug);
}

export function tripsForVessel(slug: string): Trip[] {
  return TRIPS.filter((trip) => trip.vesselSlug === slug);
}

export function tripsInRegion(region: Region): Trip[] {
  return TRIPS.filter((trip) => trip.region === region);
}
