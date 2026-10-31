// ==========================================
// BONJOUR FRANCE - CITY GUIDE DATA
// ==========================================

const cities = [
  {
    id: "lyon",
    name: "Lyon",
    subtitle: "The city of lights",
    image: "https://cruztrav.com/wp-content/uploads/2016/08/bigstock-View-Of-River-Saone-At-Night-51818782.jpg",
    secondImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMloGN-b94eG0sVsvMNxLu6LaW5GQQrXCYLIqGP3bAtA&s=10",
    official: "https://en.visiterlyon.com/",
    description: {
      en: "Lyon is a beautiful city in southeastern France, famous for its history, architecture and delicious food. Located between the Rhône and Saône rivers, it combines old streets, lively squares and modern culture. It is often called the gastronomic capital of France.",
      fr: "Lyon est une belle ville du sud-est de la France, célèbre pour son histoire, son architecture et sa gastronomie. Située entre le Rhône et la Saône, elle mélange des rues anciennes, des places animées et une culture moderne. On l'appelle souvent la capitale gastronomique de la France."
    },
    attractions: [
      {
        name: "Basilica of Notre-Dame de Fourvière",
        fr: "Basilique Notre-Dame de Fourvière",
        en: "A magnificent basilica on Fourvière Hill, offering beautiful views over Lyon.",
        desc: "Une magnifique basilique sur la colline de Fourvière, avec une belle vue sur Lyon.",
        url: "https://www.fourviere.org/"
      },
      {
        name: "Vieux Lyon",
        fr: "Le Vieux Lyon",
        en: "A historic neighbourhood with narrow streets, Renaissance buildings and traditional passageways.",
        desc: "Un quartier historique avec des rues étroites, des bâtiments Renaissance et des traboules traditionnelles.",
        url: "https://en.visiterlyon.com/"
      },
      {
        name: "Place Bellecour",
        fr: "La place Bellecour",
        en: "One of Europe's largest open squares, located in the heart of the city.",
        desc: "L'une des plus grandes places ouvertes d'Europe, située au cœur de la ville.",
        url: "https://en.visiterlyon.com/"
      },
      {
        name: "Parc de la Tête d'Or",
        fr: "Le parc de la Tête d'Or",
        en: "A large green park with a lake, gardens and a botanical garden.",
        desc: "Un grand parc avec un lac, des jardins et un jardin botanique.",
        url: "https://www.lyon.fr/"
      },
      {
        name: "Musée des Confluences",
        fr: "Le musée des Confluences",
        en: "A striking modern museum exploring science, history and human societies.",
        desc: "Un musée moderne consacré aux sciences, à l'histoire et aux sociétés humaines.",
        url: "https://www.museedesconfluences.fr/"
      }
    ],
    foods: [
      {
        name: "Quenelles",
        en: "Soft dumplings, often served with a rich sauce.",
        fr: "Des quenelles moelleuses, souvent servies avec une sauce riche."
      },
      {
        name: "Salade lyonnaise",
        en: "A local salad with lettuce, bacon, croutons and a poached egg.",
        fr: "Une salade locale avec de la laitue, des lardons, des croûtons et un œuf poché."
      },
      {
        name: "Tarte à la praline",
        en: "A colourful pink praline tart, a Lyon speciality.",
        fr: "Une tarte rose aux pralines, une spécialité lyonnaise."
      }
    ],
    restaurants: [
      {
        name: "Café des Fédérations",
        en: "A traditional bouchon serving classic Lyonnaise cuisine.",
        fr: "Un bouchon traditionnel qui propose une cuisine lyonnaise classique.",
        url: "https://www.restaurant-cafedesfederations-lyon.fr/en/"
      },
      {
        name: "Le Garet",
        en: "A well-known traditional restaurant in the city centre.",
        fr: "Un restaurant traditionnel connu dans le centre-ville."
      }
    ],
    hotels: [
      {
        name: "InterContinental Lyon – Hotel Dieu",
        en: "A stylish hotel in a historic building near the Rhône.",
        fr: "Un hôtel élégant dans un bâtiment historique près du Rhône.",
        url: "https://www.ihg.com/intercontinental/hotels/"
      },
      {
        name: "Hôtel Carlton Lyon",
        en: "A comfortable hotel close to Place Bellecour.",
        fr: "Un hôtel confortable près de la place Bellecour.",
        url: "https://www.mgallery.com/"
      }
    ],
    culture: [
      {
        name: "Fête des Lumières",
        fr: "La Fête des Lumières",
        en: "A famous annual festival when the city is illuminated with artistic light displays.",
        desc: "Un célèbre festival annuel pendant lequel la ville s'illumine grâce à des installations lumineuses artistiques."
      },
      {
        name: "Explore the traboules",
        fr: "Découvrir les traboules",
        en: "Discover hidden passageways through the old buildings of Lyon.",
        desc: "Découvrez les passages secrets à travers les anciens bâtiments de Lyon."
      },
      {
        name: "Visit a traditional bouchon",
        fr: "Visiter un bouchon traditionnel",
        en: "Experience local food and the welcoming atmosphere of a Lyonnaise restaurant.",
        desc: "Découvrez la cuisine locale et l'ambiance chaleureuse d'un restaurant lyonnais."
      }
    ]
  },

  {
    id: "nice",
    name: "Nice",
    subtitle: "The Mediterranean escape",
    image: "https://144739559.fs1.hubspotusercontent-eu1.net/hubfs/144739559/The-15-Best-Things-to-Do-in-Nice%2C-France-%282026%29%20%281%29-1.jpeg",
    secondImage: "https://eb3k7ewioxo.exactdn.com/wp-content/uploads/2026/06/In-Old-Town-Nice.jpg?strip=all",
    official: "https://www.explorenicecotedazur.com/",
    description: {
      en: "Nice is a sunny city on the French Riviera, beside the Mediterranean Sea. It is known for its blue water, colourful old town, beautiful beaches and relaxed lifestyle. Visitors enjoy its markets, seaside walks and delicious Provençal food.",
      fr: "Nice est une ville ensoleillée de la Côte d'Azur, au bord de la mer Méditerranée. Elle est connue pour son eau bleue, sa vieille ville colorée, ses belles plages et son mode de vie détendu. Les visiteurs apprécient ses marchés, ses promenades en bord de mer et sa délicieuse cuisine provençale."
    },
    attractions: [
      {
        name: "Promenade des Anglais",
        fr: "La Promenade des Anglais",
        en: "A famous seaside boulevard with wonderful views of the Mediterranean.",
        desc: "Un célèbre boulevard en bord de mer avec une vue magnifique sur la Méditerranée.",
        url: "https://www.explorenicecotedazur.com/"
      },
      {
        name: "Old Nice",
        fr: "Le Vieux-Nice",
        en: "A colourful neighbourhood filled with narrow streets, cafés and local markets.",
        desc: "Un quartier coloré rempli de ruelles, de cafés et de marchés locaux."
      },
      {
        name: "Castle Hill",
        fr: "La colline du Château",
        en: "A beautiful viewpoint overlooking the city, harbour and coastline.",
        desc: "Un magnifique point de vue sur la ville, le port et le littoral.",
        url: "https://www.explorenicecotedazur.com/"
      },
      {
        name: "Cours Saleya Market",
        fr: "Le marché du Cours Saleya",
        en: "A lively market selling flowers, fresh produce and regional specialities.",
        desc: "Un marché animé qui vend des fleurs, des produits frais et des spécialités régionales.",
        url: "https://www.explorenicecotedazur.com/"
      },
      {
        name: "Matisse Museum",
        fr: "Le musée Matisse",
        en: "A museum dedicated to the artist Henri Matisse in the Cimiez neighbourhood.",
        desc: "Un musée consacré à l'artiste Henri Matisse, dans le quartier de Cimiez.",
        url: "https://www.musee-matisse-nice.org/"
      }
    ],
    foods: [
      {
        name: "Socca",
        en: "A thin, savoury chickpea pancake cooked in a wood-fired oven.",
        fr: "Une fine galette salée à base de pois chiches, cuite au four à bois."
      },
      {
        name: "Salade niçoise",
        en: "A famous salad made with fresh local ingredients.",
        fr: "Une célèbre salade préparée avec des ingrédients frais et locaux."
      },
      {
        name: "Pissaladière",
        en: "A traditional onion tart topped with olives and anchovies.",
        fr: "Une tarte traditionnelle aux oignons, garnie d'olives et d'anchois."
      }
    ],
    restaurants: [
      {
        name: "Chez Pipo",
        en: "A popular place to taste traditional Niçoise socca.",
        fr: "Un endroit populaire pour goûter la socca traditionnelle niçoise.",
        url: "https://www.chezpipo.fr/"
      },
      {
        name: "Acchiardo",
        en: "A family-run restaurant serving traditional Niçoise dishes.",
        fr: "Un restaurant familial qui propose des plats traditionnels niçois."
      }
    ],
    hotels: [
      {
        name: "Hôtel Negresco",
        en: "A famous luxury hotel on the Promenade des Anglais.",
        fr: "Un célèbre hôtel de luxe sur la Promenade des Anglais.",
        url: "https://www.hotel-negresco-nice.com/"
      },
      {
        name: "Hôtel Aston La Scala",
        en: "A city-centre hotel close to the old town and Place Masséna.",
        fr: "Un hôtel du centre-ville près du Vieux-Nice et de la place Masséna.",
        url: "https://www.hotel-aston.com/"
      }
    ],
    culture: [
      {
        name: "Nice Carnival",
        fr: "Le Carnaval de Nice",
        en: "A colourful annual celebration with parades, costumes and music.",
        desc: "Une fête annuelle colorée avec des défilés, des costumes et de la musique."
      },
      {
        name: "Explore the flower market",
        fr: "Découvrir le marché aux fleurs",
        en: "Discover flowers, local products and the lively atmosphere of Cours Saleya.",
        desc: "Découvrez les fleurs, les produits locaux et l'ambiance animée du Cours Saleya."
      },
      {
        name: "Enjoy Mediterranean life",
        fr: "Profiter de la vie méditerranéenne",
        en: "Take a seaside walk and experience the relaxed atmosphere of the Riviera.",
        desc: "Promenez-vous au bord de la mer et profitez de l'ambiance détendue de la Riviera."
      }
    ]
  },

  {
    id: "strasbourg",
    name: "Strasbourg",
    subtitle: "A storybook city",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUtTEy7nTxBX8GFJfpgoJNWp54pWw2U2_s-kGIJFKJi1hPbyes-b23Wao&s=10",
    secondImage: "https://images.ctfassets.net/bth3mlrehms2/3a5Bj9XUriEdiTvfgEhYcn/e0396d4879dc5e36992a2de4af9eac62/Strasbourg.jpg?w=1400&q=60&fm=webp",
    official: "https://www.visitstrasbourg.fr/en/",
    description: {
      en: "Strasbourg is a charming city in northeastern France, close to the German border. It is famous for its half-timbered houses, canals, historic cathedral and Christmas markets. Its culture combines French and German influences.",
      fr: "Strasbourg est une charmante ville du nord-est de la France, près de la frontière allemande. Elle est célèbre pour ses maisons à colombages, ses canaux, sa cathédrale historique et ses marchés de Noël. Sa culture mélange les influences françaises et allemandes."
    },
    attractions: [
      {
        name: "Strasbourg Cathedral",
        fr: "La cathédrale de Strasbourg",
        en: "A magnificent Gothic cathedral with an impressive astronomical clock.",
        desc: "Une magnifique cathédrale gothique avec une impressionnante horloge astronomique.",
        url: "https://www.cathedrale-strasbourg.fr/"
      },
      {
        name: "La Petite France",
        fr: "La Petite France",
        en: "A picturesque district with canals and traditional half-timbered houses.",
        desc: "Un quartier pittoresque avec des canaux et des maisons à colombages traditionnelles."
      },
      {
        name: "Palais Rohan",
        fr: "Le palais Rohan",
        en: "A historic palace that houses several important museums.",
        desc: "Un palais historique qui abrite plusieurs musées importants.",
        url: "https://www.musees.strasbourg.eu/"
      },
      {
        name: "Parc de l'Orangerie",
        fr: "Le parc de l'Orangerie",
        en: "A peaceful park with gardens, walking paths and a lake.",
        desc: "Un parc paisible avec des jardins, des promenades et un lac.",
        url: "https://www.visitstrasbourg.fr/en/"
      },
      {
        name: "European Parliament",
        fr: "Le Parlement européen",
        en: "An important European institution with visitor information and exhibitions.",
        desc: "Une institution européenne importante avec des informations pour les visiteurs et des expositions.",
        url: "https://visiting.europarl.europa.eu/en"
      }
    ],
    foods: [
      {
        name: "Choucroute garnie",
        en: "Sauerkraut served with potatoes and a selection of meats.",
        fr: "De la choucroute servie avec des pommes de terre et différentes viandes."
      },
      {
        name: "Tarte flambée",
        en: "A thin Alsatian flatbread topped with cream, onions and bacon.",
        fr: "Une fine pâte alsacienne garnie de crème, d'oignons et de lardons."
      },
      {
        name: "Kougelhopf",
        en: "A traditional ring-shaped Alsatian cake.",
        fr: "Un gâteau traditionnel alsacien en forme de couronne."
      }
    ],
    restaurants: [
      {
        name: "Chez Yvonne",
        en: "A traditional winstub known for Alsatian food.",
        fr: "Une winstub traditionnelle connue pour sa cuisine alsacienne.",
        url: "https://www.chez-yvonne.net/"
      },
      {
        name: "Au Pont Corbeau",
        en: "A cosy restaurant serving regional specialities.",
        fr: "Un restaurant chaleureux qui propose des spécialités régionales.",
        url: "http://www.aupontcorbeau.fr/"
      }
    ],
    hotels: [
      {
        name: "Hôtel Cour du Corbeau",
        en: "A historic hotel in a beautiful old building.",
        fr: "Un hôtel historique dans un magnifique bâtiment ancien.",
        url: "https://www.cour-corbeau.com/"
      },
      {
        name: "Hôtel Hannong",
        en: "A comfortable hotel close to the historic centre.",
        fr: "Un hôtel confortable près du centre historique.",
        url: "https://www.hotel-hannong.com/"
      }
    ],
    culture: [
      {
        name: "Strasbourg Christmas Market",
        fr: "Le marché de Noël de Strasbourg",
        en: "A famous Christmas market with decorations and local crafts.",
        desc: "Un célèbre marché de Noël avec des décorations et de l'artisanat local."
      },
      {
        name: "Alsatian traditions",
        fr: "Les traditions alsaciennes",
        en: "Discover regional music, traditional costumes and local celebrations.",
        desc: "Découvrez la musique régionale, les costumes traditionnels et les fêtes locales."
      },
      {
        name: "Canal boat tour",
        fr: "Une promenade en bateau sur les canaux",
        en: "Explore the city and its historic neighbourhoods from the water.",
        desc: "Découvrez la ville et ses quartiers historiques depuis l'eau."
      }
    ]
  },

  {
    id: "bordeaux",
    name: "Bordeaux",
    subtitle: "Elegance by the river",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSMlkjpu3FXCTlfGzAixPvmqMWILx5nXhOzqWUOaR8v7ygMGXZeOyez02b&s=10",
    secondImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStTkyaIE37enMzieTgjeJBmZH2YSY6uy5Hilq_bKaM4K2nKmpnTu_gHdxi&s=10",
    official: "https://www.bordeaux-tourism.co.uk/",
    description: {
      en: "Bordeaux is an elegant city in southwestern France, situated along the Garonne River. It is known for its beautiful architecture, historic squares, wine culture and relaxed atmosphere. The city is also a UNESCO World Heritage Site.",
      fr: "Bordeaux est une ville élégante du sud-ouest de la France, située le long de la Garonne. Elle est connue pour sa belle architecture, ses places historiques, sa culture du vin et son ambiance détendue. La ville est également inscrite au patrimoine mondial de l'UNESCO."
    },
    attractions: [
      {
        name: "Place de la Bourse",
        fr: "La place de la Bourse",
        en: "A beautiful eighteenth-century square overlooking the Garonne.",
        desc: "Une belle place du XVIIIe siècle qui donne sur la Garonne.",
        url: "https://www.bordeaux-tourism.co.uk/"
      },
      {
        name: "Miroir d'eau",
        fr: "Le miroir d'eau",
        en: "A large reflecting pool that creates beautiful reflections of the square.",
        desc: "Un grand miroir d'eau qui crée de magnifiques reflets de la place.",
        url: "https://www.bordeaux-tourism.co.uk/"
      },
      {
        name: "La Cité du Vin",
        fr: "La Cité du Vin",
        en: "An interactive cultural centre dedicated to wine and its history.",
        desc: "Un centre culturel interactif consacré au vin et à son histoire.",
        url: "https://www.laciteduvin.com/en"
      },
      {
        name: "Bordeaux Cathedral",
        fr: "La cathédrale Saint-André",
        en: "A historic Gothic cathedral in the heart of Bordeaux.",
        desc: "Une cathédrale gothique historique au cœur de Bordeaux."
      },
      {
        name: "Pont de Pierre",
        fr: "Le pont de Pierre",
        en: "A historic stone bridge offering lovely views of the river and city.",
        desc: "Un pont historique en pierre qui offre une jolie vue sur le fleuve et la ville."
      }
    ],
    foods: [
      {
        name: "Canelés",
        en: "Small caramelised cakes with a soft centre and vanilla flavour.",
        fr: "De petits gâteaux caramélisés avec un cœur moelleux et un goût de vanille."
      },
      {
        name: "Entrecôte à la bordelaise",
        en: "A steak dish traditionally served with a red wine and shallot sauce.",
        fr: "Un plat de steak traditionnellement servi avec une sauce au vin rouge et aux échalotes."
      },
      {
        name: "Lamproie à la bordelaise",
        en: "A traditional regional dish prepared with lamprey and red wine.",
        fr: "Un plat régional traditionnel préparé avec de la lamproie et du vin rouge."
      }
    ],
    restaurants: [
      {
        name: "Le Petit Commerce",
        en: "A popular restaurant known for seafood and fresh fish.",
        fr: "Un restaurant populaire connu pour ses fruits de mer et son poisson frais.",
        url: "https://lepetit-commerce-restaurant.com/"
      },
      {
        name: "La Tupina",
        en: "A restaurant celebrating traditional cuisine from southwestern France.",
        fr: "Un restaurant qui célèbre la cuisine traditionnelle du sud-ouest de la France.",
        url: "https://www.latupina.com/"
      }
    ],
    hotels: [
      {
        name: "InterContinental Bordeaux – Le Grand Hôtel",
        en: "A luxury hotel in the historic city centre.",
        fr: "Un hôtel de luxe dans le centre historique.",
        url: "https://www.ihg.com/intercontinental/hotels/"
      },
      {
        name: "Hôtel de Sèze",
        en: "An elegant hotel close to the Grand Théâtre.",
        fr: "Un hôtel élégant près du Grand Théâtre.",
        url: "https://www.hotel-de-seze.com/"
      }
    ],
    culture: [
      {
        name: "Wine culture",
        fr: "La culture du vin",
        en: "Discover the region's wine heritage through museums and guided visits.",
        desc: "Découvrez le patrimoine viticole de la région grâce aux musées et aux visites guidées."
      },
      {
        name: "Riverfront walks",
        fr: "Les promenades le long du fleuve",
        en: "Enjoy the quays of the Garonne and the city's beautiful architecture.",
        desc: "Profitez des quais de la Garonne et de la belle architecture de la ville."
      },
      {
        name: "Local markets",
        fr: "Les marchés locaux",
        en: "Explore regional produce, cheeses, pastries and everyday local life.",
        desc: "Découvrez les produits régionaux, les fromages, les pâtisseries et la vie locale."
      }
    ]
  },

  {
    id: "marseille",
    name: "Marseille",
    subtitle: "The spirit of the Mediterranean",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTC1eRe4rBjUNviKkNDyN_juKuQ7V5Y2-EcRo7QxEdfTGpOyUjJpmBd-x2e&s=10",
    secondImage: "https://cdn.getyourguide.com/image/format=auto%2Cfit=crop%2Cgravity=auto%2Cquality=60%2Cwidth=400%2Cheight=265%2Cdpr=2/tour_img/3c2777be0b670aa038ee02b046f3656d5be2b924cdef0e28ba006879e57ced6c.png",
    official: "https://www.marseille-tourisme.com/en/",
    description: {
      en: "Marseille is a lively port city in southern France, on the Mediterranean coast. It is one of the oldest cities in France and is famous for its harbour, seafood, colourful neighbourhoods and multicultural atmosphere. The city is a wonderful mix of history and seaside life.",
      fr: "Marseille est une ville portuaire animée du sud de la France, sur la côte méditerranéenne. C'est l'une des plus anciennes villes de France. Elle est célèbre pour son port, ses fruits de mer, ses quartiers colorés et son ambiance multiculturelle. La ville est un merveilleux mélange d'histoire et de vie maritime."
    },
    attractions: [
      {
        name: "Vieux-Port",
        fr: "Le Vieux-Port",
        en: "The historic harbour, full of boats, cafés and lively waterfront activity.",
        desc: "Le port historique, rempli de bateaux, de cafés et d'activités animées au bord de l'eau.",
        url: "https://www.marseille-tourisme.com/en/"
      },
      {
        name: "Notre-Dame de la Garde",
        fr: "Notre-Dame de la Garde",
        en: "A famous basilica overlooking the city and the Mediterranean Sea.",
        desc: "Une célèbre basilique qui domine la ville et la mer Méditerranée.",
        url: "https://basiliquenotredamedelagarde.com/"
      },
      {
        name: "MuCEM",
        fr: "Le MuCEM",
        en: "A museum exploring Mediterranean civilisation and culture.",
        desc: "Un musée consacré aux civilisations et à la culture méditerranéennes.",
        url: "https://www.mucem.org/"
      },
      {
        name: "Calanques National Park",
        fr: "Le parc national des Calanques",
        en: "A stunning natural area with limestone cliffs, turquoise water and walking trails.",
        desc: "Un magnifique espace naturel avec des falaises calcaires, une eau turquoise et des sentiers de randonnée.",
        url: "https://www.calanques-parcnational.fr/en"
      },
      {
        name: "Le Panier",
        fr: "Le Panier",
        en: "A historic neighbourhood with colourful streets, art and small cafés.",
        desc: "Un quartier historique avec des rues colorées, de l'art et de petits cafés.",
        url: "https://www.marseille-tourisme.com/en/"
      }
    ],
    foods: [
      {
        name: "Bouillabaisse",
        en: "A traditional Provençal fish stew served with bread and rouille sauce.",
        fr: "Une soupe de poisson provençale traditionnelle servie avec du pain et de la rouille."
      },
      {
        name: "Navettes",
        en: "Small boat-shaped biscuits flavoured with orange blossom.",
        fr: "De petits biscuits en forme de bateau parfumés à la fleur d'oranger."
      },
      {
        name: "Panisse",
        en: "A local speciality made from chickpea flour, usually fried.",
        fr: "Une spécialité locale à base de farine de pois chiches, généralement frite."
      }
    ],
    restaurants: [
      {
        name: "Chez Fonfon",
        en: "A well-known restaurant in Vallon des Auffes, famous for bouillabaisse.",
        fr: "Un restaurant connu du Vallon des Auffes, célèbre pour sa bouillabaisse.",
        url: "https://www.chez-fonfon.com/"
      },
      {
        name: "Le Miramar",
        en: "A restaurant near the Vieux-Port known for traditional bouillabaisse.",
        fr: "Un restaurant près du Vieux-Port connu pour sa bouillabaisse traditionnelle.",
        url: "https://lemiramar.fr/en/home/"
      }
    ],
    hotels: [
      {
        name: "InterContinental Marseille – Hotel Dieu",
        en: "A luxury hotel in a historic building overlooking the Vieux-Port.",
        fr: "Un hôtel de luxe dans un bâtiment historique avec vue sur le Vieux-Port.",
        url: "https://www.ihg.com/intercontinental/hotels/"
      },
      {
        name: "Hôtel La Résidence du Vieux-Port",
        en: "A hotel with beautiful views of the old harbour.",
        fr: "Un hôtel avec une belle vue sur le vieux port.",
        url: "https://www.hotel-residence-marseille.com/"
      }
    ],
    culture: [
      {
        name: "Explore the Old Port",
        fr: "Découvrir le Vieux-Port",
        en: "Experience the city's maritime traditions and lively harbour atmosphere.",
        desc: "Découvrez les traditions maritimes de la ville et l'ambiance animée du port."
      },
      {
        name: "Visit the Calanques",
        fr: "Visiter les Calanques",
        en: "Enjoy nature, walking trails and spectacular Mediterranean scenery.",
        desc: "Profitez de la nature, des sentiers de randonnée et des paysages méditerranéens spectaculaires."
      },
      {
        name: "Discover Provençal traditions",
        fr: "Découvrir les traditions provençales",
        en: "Explore local markets, crafts, music and regional food.",
        desc: "Découvrez les marchés locaux, l'artisanat, la musique et la cuisine régionale."
      }
    ]
  }
];


// ==========================================
// LANGUAGE AND CITY DISPLAY
// ==========================================

let currentLanguage = "en";
let currentCity = "lyon";

function text(en, fr) {
  return currentLanguage === "fr" ? fr : en;
}

function safeUrl(url) {
  if (!url) return null;

  try {
    const parsed = new URL(url);
    return ["https:", "http:"].includes(parsed.protocol)
      ? parsed.href
      : null;
  } catch {
    return null;
  }
}


// ==========================================
// HOMEPAGE PHOTO COLLAGE
// ==========================================

function renderHeroCollage() {
  const collage = document.getElementById("heroCollage");

  const photos = [
    {
      city: "Lyon",
      url: cities[0].image,
      className: "collage-one",
      caption: "Lyon ♡"
    },
    {
      city: "Nice",
      url: cities[1].image,
      className: "collage-two",
      caption: "Nice, by the sea"
    },
    {
      city: "Strasbourg",
      url: cities[2].image,
      className: "collage-three",
      caption: "Postcards from France"
    }
  ];

  collage.innerHTML = photos.map(photo => `
    <figure class="collage-photo ${photo.className}">
      <img src="${photo.url}" alt="${photo.city}"
        onerror="this.alt='${photo.city} photograph unavailable'">
      <figcaption>${photo.caption}</figcaption>
    </figure>
  `).join("");
}


// ==========================================
// CITY GALLERY
// ==========================================

function renderCityGallery() {
  const gallery = document.getElementById("cityGallery");

  gallery.innerHTML = cities.map(city => `
    <article class="city-card" data-city="${city.id}"
      tabindex="0" role="button" aria-label="${city.name}">
      <img src="${city.image}" alt="${city.name}"
        onerror="this.style.display='none'">
      <div class="city-card-copy">
        <small>${text("DISCOVER", "DÉCOUVRIR")}</small>
        <h3>${city.name}</h3>
      </div>
    </article>
  `).join("");

  gallery.querySelectorAll(".city-card").forEach(card => {
    const openCity = () => {
      selectCity(card.dataset.city);
      document.getElementById("guide").scrollIntoView({
        behavior: "smooth"
      });
    };

    card.addEventListener("click", openCity);

    card.addEventListener("keydown", event => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        openCity();
      }
    });
  });
}


// ==========================================
// CITY TABS
// ==========================================

function renderCityTabs() {
  const tabs = document.getElementById("cityTabs");

  tabs.innerHTML = cities.map(city => `
    <button class="city-tab ${city.id === currentCity ? "active" : ""}"
      type="button" data-city="${city.id}"
      aria-pressed="${city.id === currentCity}">
      ${city.name}
    </button>
  `).join("");

  tabs.querySelectorAll(".city-tab").forEach(button => {
    button.addEventListener("click", () => {
      selectCity(button.dataset.city);
    });
  });
}


// ==========================================
// CONTENT CARDS AND OFFICIAL LINKS
// ==========================================

function renderItems(items, type) {
  return items.map(item => {
    const title = currentLanguage === "fr"
      ? (item.fr || item.name)
      : item.name;

    const description = currentLanguage === "fr"
      ? (item.desc || item.fr || item.en || "")
      : (item.en || "");

    const url = safeUrl(item.url);

    const link = url
      ? `<a class="place-link" href="${url}"
           target="_blank" rel="noopener noreferrer">
           ${text("OFFICIAL WEBSITE ↗", "SITE OFFICIEL ↗")}
         </a>`
      : "";

    return `
      <article class="${type === "food" ? "food-item" : "place-item"}">
        <h4>${title}</h4>
        <p>${description}</p>
        ${link}
      </article>
    `;
  }).join("");
}

function renderSection(title, items, type = "place") {
  const gridClass = type === "food"
    ? "food-list"
    : "content-grid";

  return `
    <section class="content-section">
      <h3>${title}</h3>
      <div class="${gridClass}">
        ${renderItems(items, type)}
      </div>
    </section>
  `;
}


// ==========================================
// INDIVIDUAL CITY GUIDE
// ==========================================

function renderCity(cityId) {
  const city = cities.find(item => item.id === cityId);

  if (!city) return;

  currentCity = cityId;

  const description = city.description[currentLanguage];
  const content = document.getElementById("cityContent");

  const officialLink = safeUrl(city.official);

  content.innerHTML = `
    <article class="city-detail">

      <header class="city-detail-header">

        <div>
          <p class="eyebrow">
            ${text("YOUR CITY GUIDE", "VOTRE GUIDE DE VILLE")}
          </p>

          <h2>${city.name}</h2>

          <p>${description}</p>

          <a class="official-link"
             href="${officialLink}"
             target="_blank"
             rel="noopener noreferrer">
            ${text(
              "VISIT THE OFFICIAL TOURISM WEBSITE ↗",
              "VISITER LE SITE OFFICIEL DU TOURISME ↗"
            )}
          </a>
        </div>

        <img src="${city.image}" alt="${city.name}"
          onerror="this.style.display='none'">

      </header>

      ${renderSection(
        text("Places to visit", "Lieux à visiter"),
        city.attractions
      )}

      ${renderSection(
        text("Local food to try", "Spécialités locales à goûter"),
        city.foods,
        "food"
      )}

      ${renderSection(
        text("Restaurants", "Restaurants"),
        city.restaurants
      )}

      ${renderSection(
        text("Where to stay", "Où séjourner"),
        city.hotels
      )}

      ${renderSection(
        text("Cultural experiences", "Expériences culturelles"),
        city.culture
      )}

      <section class="content-section">
        <h3>${text("More photographs", "Plus de photographies")}</h3>

        <div class="content-grid">
          <div class="place-item">
            <img src="${city.image}" alt="${city.name}"
              style="width:100%;height:190px;object-fit:cover;border-radius:5px;">
            <p>${city.name}</p>
          </div>

          <div class="place-item">
            <img src="${city.secondImage}" alt="${city.name}"
              style="width:100%;height:190px;object-fit:cover;border-radius:5px;">
            <p>${city.name}</p>
          </div>
        </div>
      </section>

    </article>
  `;

  renderCityTabs();
}


// ==========================================
// CHANGE CITY
// ==========================================

function selectCity(cityId) {
  currentCity = cityId;
  renderCityTabs();
  renderCity(cityId);
}


// ==========================================
// ENGLISH / FRENCH SWITCH
// ==========================================

function updateStaticText() {
  document.documentElement.lang = currentLanguage;

  document.querySelectorAll("[data-en][data-fr]").forEach(element => {
    element.textContent = element.dataset[currentLanguage];
  });

  document.getElementById("languageButton").textContent =
    currentLanguage === "en" ? "EN / FR" : "FR / EN";

  renderHeroCollage();
  renderCityGallery();
  renderCityTabs();
  renderCity(currentCity);
}

document.getElementById("languageButton").addEventListener("click", () => {
  currentLanguage = currentLanguage === "en" ? "fr" : "en";
  updateStaticText();
});


// ==========================================
// START WEBSITE
// ==========================================

updateStaticText();
// Register the service worker for the installable app
if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("./service-worker.js")
      .then(() => console.log("Bonjour France app is ready!"))
      .catch(error => console.error("App setup error:", error));
  });
}