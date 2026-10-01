export interface PackagePrices {
  "01": number; // L'Échappée
  "02": number; // La Signature
  "03": number; // Le Privilège
}

export interface Destination {
  id: string;
  name: string;
  country: string;
  slug: string;
  region: "Afrique" | "Europe" | "Asie" | "Amériques";
  description: string;
  longDescription: string;
  highlights: string[];
  prices: PackagePrices;
  image: string;
}

export const destinations: Destination[] = [
  {
    id: "marrakech",
    name: "Marrakech",
    country: "Maroc",
    slug: "marrakech",
    region: "Afrique",
    description: "La ville rouge, entre médina séculaire, lumière dorée et art de vivre raffiné.",
    longDescription:
      "Cité impériale aux milles nuances d'ocre, Marrakech captive par le contraste saisissant entre la frénésie de sa Médina et la sérénité de ses riads secrets. Un voyage immersif où la lumière dorée sublime le patrimoine et l'art de vivre d'exception.",
    highlights: [
      "Visite privée de la Médina historique et des palais séculaires",
      "Soirée gastronomique exclusive sous les étoiles dans le désert d'Agafay",
      "Accès VIP au Jardin Majorelle et au Musée Yves Saint Laurent",
      "Parenthèse bien-être dans un spa traditionnel d'exception",
    ],
    prices: { "01": 2500, "02": 5800, "03": 12500 },
    image: "/images/destinations/marrakech.jpg",
  },
  {
    id: "paris",
    name: "Paris",
    country: "France",
    slug: "paris",
    region: "Europe",
    description: "La capitale des arts, du romantisme et de la haute gastronomie française.",
    longDescription:
      "Symbole absolu de l'élégance et de la culture, Paris se découvre au rythme de ses boulevards mythiques, de ses musées confidentiels et de ses tables étoilées. Une expérience sur mesure conçue pour célébrer la beauté de la Ville Lumière.",
    highlights: [
      "Croisière privée sur la Seine au coucher du soleil",
      "Visites nocturnes privilégiées des plus grands musées parisiens",
      "Dîners réservés dans les établissements de la haute gastronomie",
      "Séjour dans un palace ou hôtel particulier du Triangle d'Or",
    ],
    prices: { "01": 5200, "02": 9800, "03": 22000 },
    image: "/images/destinations/paris.jpg",
  },
  {
    id: "dubai",
    name: "Dubaï",
    country: "Émirats Arabes Unis",
    slug: "dubai",
    region: "Asie",
    description: "Une oasis futuriste suspendue entre architecture audacieuse et désert infini.",
    longDescription:
      "Dubaï incarne la rencontre spectaculaire entre modernité audacieuse et traditions orientales. Des gratte-ciels vertigineux aux dunes sculptées du désert, plongez au cœur d'une destination avant-gardiste où le luxe se conjugue au présent.",
    highlights: [
      "Safari privé sur mesure dans les dunes de la réserve royale",
      "Survol panoramique en hélicoptère au-dessus de Palm Jumeirah",
      "Réservation exclusive dans les meilleurs restaurants suspendus",
      "Journée de détente sur un yacht privé au large de la marina",
    ],
    prices: { "01": 6800, "02": 12500, "03": 27000 },
    image: "/images/destinations/dubai.jpg",
  },
  {
    id: "istanbul",
    name: "Istanbul",
    country: "Turquie",
    slug: "istanbul",
    region: "Europe",
    description: "La cité séculaire où le Bosphore sépare l'Orient et l'Occident.",
    longDescription:
      "À la croisée de deux mondes, Istanbul offre un voyage sensoriel unique au fil de ses mosquées majestueuses, de ses bazars animés et de ses rives enchantées. Une immersion captivante dans l'histoire passionnante de l'Empire Ottoman.",
    highlights: [
      "Croisière privée sur le Bosphore avec coucher de soleil",
      "Visite guidée sur mesure de la Mosquée Bleue et de Sainte-Sophie",
      "Parcours gustatif privé dans les meilleurs bazars d'épices",
      "Rituel traditionnel de relaxation dans un hammam historique",
    ],
    prices: { "01": 3500, "02": 7500, "03": 15000 },
    image: "/images/destinations/istanbul.jpg",
  },
  {
    id: "bali",
    name: "Bali",
    country: "Indonésie",
    slug: "bali",
    region: "Asie",
    description: "L'île aux mille temples, entre rizières sculptées, spiritualité et côtes sauvages.",
    longDescription:
      "Véritable sanctuaire naturel, Bali émerveille par ses paysages sacrés, ses rizières en terrasses et la douceur incomparable de sa culture. Une parenthèse de sérénité absolue conçue pour revitaliser le corps et l'esprit.",
    highlights: [
      "Séjour en villa privée d'exception nichée dans la jungle d'Ubud",
      "Bénédiction spirituelle privée dans un temple séculaire",
      "Excursion guidée au lever du soleil sur les volcans sacrés",
      "Escapade balnéaire sur les plages préservées de Uluwatu",
    ],
    prices: { "01": 8900, "02": 16500, "03": 32000 },
    image: "/images/destinations/bali.jpg",
  },
  {
    id: "new-york",
    name: "New York",
    country: "États-Unis",
    slug: "new-york",
    region: "Amériques",
    description: "L'énergie vertigineuse de la métropole mythique qui ne dort jamais.",
    longDescription:
      "New York captive par son énergie électrique, son architecture iconique et sa scène culturelle inégalée. Des lumières de Broadway à la tranquillité de Central Park, vivez une immersion intense au cœur de la ville de tous les possibles.",
    highlights: [
      "Places VIP réservées pour les spectacles majeurs de Broadway",
      "Visites guidées privées des galeries d'art contemporain de Chelsea",
      "Survol mémorable de Manhattan au coucher du soleil",
      "Accès privilégié aux speakeasies et rooftops panoramiques exclusifs",
    ],
    prices: { "01": 11500, "02": 18500, "03": 38000 },
    image: "/images/destinations/new-york.jpg",
  },
];