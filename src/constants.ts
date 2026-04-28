export interface Flower {
  name: string;
  description: string;
  image: string;
  funFact: string;
}

export interface ColorSection {
  id: string;
  name: string;
  color: string;
  bgLight: string;
  textColor: string;
  gradient: string;
  flowers: Flower[];
}

export const FLOWER_SECTIONS: ColorSection[] = [
  {
    id: "pink",
    name: "Pink",
    color: "#AD1457",
    bgLight: "#FFF0F5",
    textColor: "text-pink-900",
    gradient: "from-pink-50 to-pink-200",
    flowers: [
      { name: "Cherry Blossom", description: "Transient beauty of spring in Japan.", image: "https://images.unsplash.com/photo-1522383225653-ed111181a951?auto=format&fit=crop&q=80&w=600&h=800", funFact: "They're Japan's national flower and symbol of renewal." },
      { name: "Pink Rose", description: "Symbols of grace, elegance, and sweetness.", image: "https://images.unsplash.com/photo-1559563458-527698bf5295?auto=format&fit=crop&q=80&w=600&h=800", funFact: "Pink roses were the first color roses to be cultivated." },
      { name: "Peony", description: "Known as the king of flowers in China.", image: "https://images.unsplash.com/photo-1563241527-3004b7be09fe?auto=format&fit=crop&q=80&w=600&h=800", funFact: "Peony plants can live for up to 100 years!" },
      { name: "Pink Tulip", description: "Represents caring, attachment, and good wishes.", image: "https://images.unsplash.com/photo-1520412099551-62b6baf93a26?auto=format&fit=crop&q=80&w=600&h=800", funFact: "Tulip bulbs were once more valuable than gold." },
      { name: "Lotus", description: "Symbol of purity and spiritual awakening.", image: "https://images.unsplash.com/photo-1502010173711-5364ee8f3956?auto=format&fit=crop&q=80&w=600&h=800", funFact: "Lotus seeds can remain viable for over 1,000 years." },
      { name: "Dahlia", description: "Symbolizes inner strength and creativity.", image: "https://images.unsplash.com/photo-1508784411316-02b8cd4d3a3a?auto=format&fit=crop&q=80&w=600&h=800", funFact: "Dahlias are octoploids, having 8 sets of chromosomes." },
      { name: "Carnation", description: "Expresses gratitude and a mother's love.", image: "https://loremflickr.com/600/800/carnation,pink", funFact: "In some cultures, they signify deep respect." },
      { name: "Azalea", description: "Frequently associated with elegance and wealth.", image: "https://loremflickr.com/600/800/azalea,pink", funFact: "Azaleas are known as 'Think of Home' bush in China." },
      { name: "Camellia", description: "Symbols of desire, passion, and refinement.", image: "https://loremflickr.com/600/800/camellia,pink", funFact: "Their leaves are used to make tea." },
      { name: "Sweet Pea", description: "Famed for its intensely sweet fragrance.", image: "https://loremflickr.com/600/800/sweetpea,pink", funFact: "Used by Mendel for genetic research." },
      { name: "Bleeding Heart", description: "Quirky shape reflecting deep emotions.", image: "https://loremflickr.com/600/800/bleedingheart,pink", funFact: "They belong to the poppy family." },
      { name: "Snapdragon", description: "Brave flowers that resemble a dragon's face.", image: "https://loremflickr.com/600/800/snapdragon,pink", funFact: "The seed pods look like tiny skulls when they dry!" },
      { name: "Geranium", description: "Representing happiness and positive emotions.", image: "https://loremflickr.com/600/800/geranium,pink", funFact: "They can help repel mosquitoes." },
      { name: "Hollyhock", description: "Tall, stately flowers often found in cottages.", image: "https://loremflickr.com/600/800/hollyhock,pink", funFact: "Used in ancient times to treat respiratory issues." },
      { name: "Zinnia", description: "Bold blossoms that symbolize daily remembrance.", image: "https://loremflickr.com/600/800/zinnia,pink", funFact: "Zinnias were the first flowers grown in space!" }
    ]
  },
  {
    id: "red",
    name: "Red",
    color: "#B71C1C",
    bgLight: "#FFF5F5",
    textColor: "text-red-900",
    gradient: "from-red-50 to-red-200",
    flowers: [
      { name: "Red Rose", description: "The ultimate symbol of love and passion.", image: "https://images.unsplash.com/photo-1548844227-01f75d8cb47a?auto=format&fit=crop&q=80&w=600&h=800", funFact: "Red roses are the most popular valentine flower." },
      { name: "Poppy", description: "Symbols of remembrance and consolation.", image: "https://images.unsplash.com/photo-1501769752-a59fea93ca83?auto=format&fit=crop&q=80&w=600&h=800", funFact: "Their seeds are used in baking and medicine." },
      { name: "Hibiscus", description: "Represents delicate beauty and femininity.", image: "https://images.unsplash.com/photo-1545641203-7d072a14e3b2?auto=format&fit=crop&q=80&w=600&h=800", funFact: "The tea is high in Vitamin C." },
      { name: "Ranunculus", description: "Reflects charm and attractiveness.", image: "https://images.unsplash.com/photo-1596440265008-8df0cbdb15bf?auto=format&fit=crop&q=80&w=600&h=800", funFact: "Their layers can look like crepe paper." },
      { name: "Red Tulip", description: "A declaration of true and deep love.", image: "https://images.unsplash.com/photo-1520412099551-62b6baf93a26?auto=format&fit=crop&q=80&w=600&h=800", funFact: "Tulips are actually edible!" },
      { name: "Amaryllis", description: "Symbolizes pride and radiant beauty.", image: "https://loremflickr.com/600/800/amaryllis,red", funFact: "The word comes from Greek for 'to sparkle'." },
      { name: "Canna Lily", description: "Tropical blooms of vibrant energy.", image: "https://loremflickr.com/600/800/cannalily,red", funFact: "They are closely related to ginger and bananas." },
      { name: "Gerbera", description: "Cheers up any environment with its boldness.", image: "https://loremflickr.com/600/800/gerbera,red", funFact: "They are the fifth most popular cut flower." },
      { name: "Poinsettia", description: "Traditionally associated with Christmas joy.", image: "https://loremflickr.com/600/800/poinsettia,red", funFact: "The 'petals' are actually colored leaves (bracts)." },
      { name: "Salvia", description: "Known for attracting hummingbirds and bees.", image: "https://loremflickr.com/600/800/salvia,red", funFact: "There are nearly 1,000 species of Salvia." },
      { name: "Anemone", description: "Often called the 'windflower'.", image: "https://loremflickr.com/600/800/anemone,red", funFact: "The name means 'Daughter of the Wind' in Greek." },
      { name: "Anthurium", description: "Heart-shaped blooms of exotic beauty.", image: "https://loremflickr.com/600/800/anthurium,red", funFact: "Also known as the 'flamingo flower'." },
      { name: "Begonia", description: "Classic garden favorites with lush petals.", image: "https://loremflickr.com/600/800/begonia,red", funFact: "They can grow in both sun and shade." },
      { name: "Celosia", description: "Unique flame-like or coral-like shapes.", image: "https://loremflickr.com/600/800/celosia,red", funFact: "The name means 'burning' in Greek." },
      { name: "Scarlet Sage", description: "Tall spikes of intense red color.", image: "https://loremflickr.com/600/800/scarletsage,red", funFact: "Provides nectar for many pollinators." }
    ]
  },
  {
    id: "orange",
    name: "Orange",
    color: "#BF360C",
    bgLight: "#FFF9F2",
    textColor: "text-orange-900",
    gradient: "from-orange-50 to-orange-200",
    flowers: [
      { name: "Marigold", description: "Brings energy and warmth to autumn days.", image: "https://images.unsplash.com/photo-1596733430284-f7437764b1a9?auto=format&fit=crop&q=80&w=600&h=800", funFact: "Marigolds are known as 'the herb of the sun'." },
      { name: "Tiger Lily", description: "Represents wealth, pride, and prosperity.", image: "https://images.unsplash.com/photo-1541819777271-97b71387ca52?auto=format&fit=crop&q=80&w=600&h=800", funFact: "The black spots on petals resemble tiger patterns." },
      { name: "Nasturtium", description: "Edible flowers with a peppery kick.", image: "https://images.unsplash.com/photo-1614533036814-61c0f81d1139?auto=format&fit=crop&q=80&w=600&h=800", funFact: "The name means 'nose-twister' in Latin." },
      { name: "Bird of Paradise", description: "Iconic shape of freedom and excellence.", image: "https://images.unsplash.com/photo-1525286341282-3d8819597148?auto=format&fit=crop&q=80&w=600&h=800", funFact: "It's also known as the Crane Flower." },
      { name: "California Poppy", description: "Golden state's gift of wild beauty.", image: "https://images.unsplash.com/photo-1522204555132-9cf1ae1d6205?auto=format&fit=crop&q=80&w=600&h=800", funFact: "Closing its petals when it rains." },
      { name: "Calendula", description: "Known for its healing and soothing properties.", image: "https://loremflickr.com/600/800/calendula,orange", funFact: "Used in cooking as a saffron substitute." },
      { name: "Lantana", description: "Clusters of vibrant, sun-soaked energy.", image: "https://loremflickr.com/600/800/lantana,orange", funFact: "The flowers change color as they age." },
      { name: "Orange Tulip", description: "Symbols of enthusiasm and desire.", image: "https://loremflickr.com/600/800/tulip,orange", funFact: "They represent energy and happiness." },
      { name: "Strelitzia", description: "Bold architectural presence in any space.", image: "https://loremflickr.com/600/800/strelitzia,orange", funFact: "Pollinated by sunbirds." },
      { name: "Zinnia (Orange)", description: "Captures the glow of a setting sun.", image: "https://loremflickr.com/600/800/zinnia,orange", funFact: "Very attractive to butterflies." },
      { name: "Orange Gerbera", description: "A burst of cheer for any occasion.", image: "https://loremflickr.com/600/800/gerbera,orange", funFact: "Signifier of warmth and creativity." },
      { name: "Crossandra", description: "Commonly known as the Firecracker flower.", image: "https://loremflickr.com/600/800/crossandra,orange", funFact: "Native to Southern India and Sri Lanka." },
      { name: "Mexican Sunflower", description: "Huge blooms that thrive in high heat.", image: "https://loremflickr.com/600/800/tithonia,orange", funFact: "They grow as tall as 8 feet in a season." },
      { name: "Butterfly Weed", description: "Essential resource for monarch butterflies.", image: "https://loremflickr.com/600/800/asclepias,orange", funFact: "A tough perennial that loves the sun." },
      { name: "Cape Honeysuckle", description: "Climbing beauty with trumpet-shaped blooms.", image: "https://loremflickr.com/600/800/tecoma,orange", funFact: "Often used to attract sunbirds." }
    ]
  },
  {
    id: "yellow",
    name: "Yellow",
    color: "#827717",
    bgLight: "#FFFFF0",
    textColor: "text-yellow-900",
    gradient: "from-yellow-50 to-yellow-200",
    flowers: [
      { name: "Sunflower", description: "Follows the sun with loyalty and joy.", image: "https://images.unsplash.com/photo-1470509037663-253afd7f0f51?auto=format&fit=crop&q=80&w=600&h=800", funFact: "Sunflowers can reach up to 14 feet tall!" },
      { name: "Yellow Rose", description: "Symbols of friendship and delight.", image: "https://images.unsplash.com/photo-1559563458-527698bf5295?auto=format&fit=crop&q=80&w=600&h=800", funFact: "In the Victorian era, it meant jealousy." },
      { name: "Daffodil", description: "Harbinger of spring and new beginnings.", image: "https://images.unsplash.com/photo-1576014131795-d440191a8e8b?auto=format&fit=crop&q=80&w=600&h=800", funFact: "Squirrels won't eat them due to toxic crystals." },
      { name: "Buttercup", description: "Reflects humidity and youthful happiness.", image: "https://images.unsplash.com/photo-1501746768411-9004275be76b?auto=format&fit=crop&q=80&w=600&h=800", funFact: "The petals have a mirror-like finish." },
      { name: "Forsythia", description: "Bright yellow bells on early spring branches.", image: "https://images.unsplash.com/photo-1582230113110-3844f07a70c0?auto=format&fit=crop&q=80&w=600&h=800", funFact: "Introduced to the West by William Forsyth." },
      { name: "Acacia", description: "Elegant clusters of fluffy yellow joy.", image: "https://loremflickr.com/600/800/acacia,yellow", funFact: "Known for the intense, honey-like scent." },
      { name: "Coreopsis", description: "Reliable sunshine for any garden spot.", image: "https://loremflickr.com/600/800/coreopsis,yellow", funFact: "Commonly known as Tickseed." },
      { name: "Yellow Hibiscus", description: "Island beauty capturing golden light.", image: "https://loremflickr.com/600/800/hibiscus,yellow", funFact: "State flower of Hawaii." },
      { name: "Primrose", description: "The symbol of spring and eternal life.", image: "https://loremflickr.com/600/800/primrose,yellow", funFact: "The name means 'first rose' in Latin." },
      { name: "Goldenrod", description: "Sturdy symbols of encouragement and wealth.", image: "https://loremflickr.com/600/800/goldenrod,yellow", funFact: "Not actually the cause of hay fever!" },
      { name: "Yellow Tulip", description: "Used to mean 'hopeless love', now cheer.", image: "https://loremflickr.com/600/800/tulip,yellow", funFact: "17th-century 'Tulip Mania' was a massive bubble." },
      { name: "Black-eyed Susan", description: "Resilient blossoms of the prairies.", image: "https://loremflickr.com/600/800/susans,yellow", funFact: "The center is actualy a cluster of tiny flowers." },
      { name: "Marsh Marigold", description: "Bright yellow blooms of the wetlands.", image: "https://loremflickr.com/600/800/caltha,yellow", funFact: "The flowers contain nectar for early insects." },
      { name: "Mimosa", description: "Soft, fluffy puffs of sunny warmth.", image: "https://loremflickr.com/600/800/mimosa,yellow", funFact: "The leaves are often sensitive to touch." },
      { name: "Yellow Iris", description: "Elegant flags of the water's edge.", image: "https://loremflickr.com/600/800/iris,yellow", funFact: "Used historically as a decorative motif." }
    ]
  },
  {
    id: "green",
    name: "Green",
    color: "#1B5E20",
    bgLight: "#F5FFF5",
    textColor: "text-green-900",
    gradient: "from-green-50 to-green-200",
    flowers: [
      { name: "Bells of Ireland", description: "Luck and longevity in green spires.", image: "https://images.unsplash.com/photo-1596733430284-f7437764b1a9?auto=format&fit=crop&q=80&w=600&h=800", funFact: "They aren't actually from Ireland!" },
      { name: "Green Rose", description: "Nature's rare symbol of abundance.", image: "https://images.unsplash.com/photo-1559563458-527698bf5295?auto=format&fit=crop&q=80&w=600&h=800", funFact: "Green roses have been around since 1743." },
      { name: "Lady's Mantle", description: "Frothy chartreuse blooms on soft leaves.", image: "https://images.unsplash.com/photo-1545167622-3a6ac756afa4?auto=format&fit=crop&q=80&w=600&h=800", funFact: "Alchemists used dew from the leaves." },
      { name: "Envy Zinnia", description: "Cool lime-green petals for modern gardens.", image: "https://loremflickr.com/600/800/zinnia,green", funFact: "A unique color in the Zinnia family." },
      { name: "Green Chrysanthemum", description: "Symbols of rejuvenation and long life.", image: "https://loremflickr.com/600/800/chrysanthemum,green", funFact: "Often used in refreshing herbal teas." },
      { name: "Green Hydrangea", description: "Captures the magic of a summer garden.", image: "https://loremflickr.com/600/800/hydrangea,green", funFact: "The color can change based on soil acidity." },
      { name: "Green Hellebore", description: "Subtle beauty of the late winter garden.", image: "https://loremflickr.com/600/800/hellebore,green", funFact: "Also known as the 'lenten rose'." },
      { name: "Euphorbia", description: "Striking architectural forms in lime green.", image: "https://loremflickr.com/600/800/euphorbia,green", funFact: "The milky sap can be a skin irritant." },
      { name: "Green Orchid", description: "Fresh, modern, and deeply refreshing.", image: "https://loremflickr.com/600/800/orchid,green", funFact: "Symbolizes health, nature, and longevity." },
      { name: "Gladiolus (Green)", description: "Tall stalks of emerald elegance.", image: "https://loremflickr.com/600/800/gladiolus,green", funFact: "Named after the Latin 'gladius', meaning sword." },
      { name: "Jack-in-the-Pulpit", description: "Unique woodland beauty in forest green.", image: "https://loremflickr.com/600/800/arisaema,green", funFact: "Native American tribes used the roots as food." },
      { name: "Nicotiana", description: "Fragrant star-shaped blooms of lime green.", image: "https://loremflickr.com/600/800/nicotiana,green", funFact: "Also known as flowering tobacco." },
      { name: "Green Calla Lily", description: "Sleek and sophisticated architectural beauty.", image: "https://loremflickr.com/600/800/callalily,green", funFact: "Highly prized for minimalist floral designs." },
      { name: "Viridiflora Tulip", description: "Distinctive green streaks on vibrant petals.", image: "https://loremflickr.com/600/800/tulip,viridiflora", funFact: "The longest-lasting tulips in the garden." },
      { name: "Green Amaranth", description: "Cascading tassels of interesting texture.", image: "https://loremflickr.com/600/800/amaranth,green", funFact: "Symbolizes immortality in some cultures." }
    ]
  },
  {
    id: "skyblue",
    name: "Sky Blue",
    color: "#01579B",
    bgLight: "#F5FBFF",
    textColor: "text-sky-900",
    gradient: "from-sky-50 to-sky-200",
    flowers: [
      { name: "Forget-me-not", description: "True blue symbols of faithful love.", image: "https://images.unsplash.com/photo-1545167622-3a6ac756afa4?auto=format&fit=crop&q=80&w=600&h=800", funFact: "They were a symbol of luck for the King of England." },
      { name: "Baby Blue Eyes", description: "Charming wild blooms of the coast.", image: "https://images.unsplash.com/photo-1510619234155-220023a967f6?auto=format&fit=crop&q=80&w=600&h=800", funFact: "They create stunning blue fields in early spring." },
      { name: "Bluebell", description: "Magical woodland carpets of spring sky.", image: "https://images.unsplash.com/photo-1510109156477-8321db8541a0?auto=format&fit=crop&q=80&w=600&h=800", funFact: "Folklore says they are used by fairies for summoning." },
      { name: "Himalayan Blue Poppy", description: "Rare and stunning azure of the mountains.", image: "https://loremflickr.com/600/800/poppy,blue", funFact: "Notoriously difficult to grow in gardens." },
      { name: "Sky Blue Hydrangea", description: "Classic summer clouds of sky blue.", image: "https://loremflickr.com/600/800/hydrangea,skyblue", funFact: "Soil aluminum levels control the blue intensity." },
      { name: "Sky Blue Morning Glory", description: "Vibrant azure blooms for the early sun.", image: "https://loremflickr.com/600/800/morningglory,skyblue", funFact: "Flowers typically last for only one day." },
      { name: "Sky Blue Periwinkle", description: "Charming groundcover with star-like blooms.", image: "https://loremflickr.com/600/800/vinca,skyblue", funFact: "Also known as the 'flower of death' in Italy." },
      { name: "Blue Flax", description: "Wild blue flowers of the prairies.", image: "https://loremflickr.com/600/800/flax,blue", funFact: "Source of high-strength linen fibers." },
      { name: "Leadwort", description: "Vibrant cobalt blue in the late season.", image: "https://loremflickr.com/600/800/ceratostigma,blue", funFact: "The leaves turn brilliant red in autumn." },
      { name: "Blue Star", description: "Perennial stars that glow at dusk.", image: "https://loremflickr.com/600/800/amsonia,blue", funFact: "Known for its beautiful golden autumn foliage." },
      { name: "Sky Blue Cornflower", description: "The buttonhole flower of classic style.", image: "https://loremflickr.com/600/800/cornflower,skyblue", funFact: "It was the favorite flower of King William I." },
      { name: "Sky Blue Gentian", description: "Known for the deepest blues in nature.", image: "https://loremflickr.com/600/800/gentian,skyblue", funFact: "Used as a bittering agent in tonics." },
      { name: "Love-in-a-mist", description: "Unique blooms surrounded by airy foliage.", image: "https://loremflickr.com/600/800/nigella,skyblue", funFact: "The seed pods are used as decorative accents." },
      { name: "Scilla", description: "Dainty blue bells of the early spring.", image: "https://loremflickr.com/600/800/scilla,blue", funFact: "Often spreads to form beautiful blue carpets." },
      { name: "Tweedia", description: "Rare star-shaped blooms of pure sky blue.", image: "https://loremflickr.com/600/800/tweedia,blue", funFact: "Native to South America." }
    ]
  },
  {
    id: "blue",
    name: "Blue",
    color: "#0D47A1",
    bgLight: "#F5F5FF",
    textColor: "text-blue-900",
    gradient: "from-blue-50 to-blue-200",
    flowers: [
      { name: "Morning Glory", description: "Greet the day with vibrant azure.", image: "https://images.unsplash.com/photo-1551024601-bec78aea704b?auto=format&fit=crop&q=80&w=600&h=800", funFact: "Blooms only open in the early morning sun." },
      { name: "Blue Iris", description: "Symbols of wisdom and royal beauty.", image: "https://images.unsplash.com/photo-1548232930-91157121b6d1?auto=format&fit=crop&q=80&w=600&h=800", funFact: "The inspiration for the fleur-de-lis symbol." },
      { name: "Hydrangea", description: "Classic summer clouds of blue.", image: "https://images.unsplash.com/photo-1533316262963-8328c686e000?auto=format&fit=crop&q=80&w=600&h=800", funFact: "Aluminum in the soil creates their sky-blue hue." },
      { name: "Delphinium", description: "Regal towers of true summer blue.", image: "https://loremflickr.com/600/800/delphinium,blue", funFact: "The name means 'dolphin' due to the flower's shape." },
      { name: "Blue Thistle", description: "Architectural texture in deep indigo.", image: "https://loremflickr.com/600/800/thistle,blue", funFact: "It's a symbol of Scottish pride and resilience." },
      { name: "Lupine", description: "Wild spires of North American beauty.", image: "https://loremflickr.com/600/800/lupine,blue", funFact: "They fix nitrogen in the soil, helping other plants." },
      { name: "Balloon Flower", description: "Puffy buds that pop into blue stars.", image: "https://loremflickr.com/600/800/platycodon,blue", funFact: "The roots are often used in traditional medicine." },
      { name: "Agapanthus", description: "The lily of the Nile in azure shades.", image: "https://loremflickr.com/600/800/agapanthus,blue", funFact: "The name means 'Love Flower' in Greek." },
      { name: "Lobelia", description: "Trailing ribbons of electric blue joy.", image: "https://loremflickr.com/600/800/lobelia,blue", funFact: "Essential for vibrant garden containers." },
      { name: "Blue Ginger", description: "Tropical blooms of unique structure.", image: "https://loremflickr.com/600/800/dichorisandra,blue", funFact: "Not actually a true ginger, but looks like one." },
      { name: "Salvia (Blue)", description: "Vibrant spires that attract pollinators.", image: "https://loremflickr.com/600/800/salvia,blue", funFact: "Popular for their long-lasting summer color." },
      { name: "Monkshood", description: "Stunning but poisonous hooded blooms.", image: "https://loremflickr.com/600/800/aconitum,blue", funFact: "Also known as 'wolfsbane' in folklore." },
      { name: "Sea Holly", description: "Steely blue bracts with a metallic sheen.", image: "https://loremflickr.com/600/800/eryngium,blue", funFact: "Thrives in sandy, coastal environments." },
      { name: "Blue Anemone", description: "Delicate petals with a striking center.", image: "https://loremflickr.com/600/800/anemone,blue", funFact: "Often one of the earliest spring bloomers." },
      { name: "Browallia", description: "Charming blue flowers for shady spots.", image: "https://loremflickr.com/600/800/browallia,blue", funFact: "Also known as the 'amethyst flower'." }
    ]
  },
  {
    id: "purple",
    name: "Purple",
    color: "#800080",
    bgLight: "#FAF5FF",
    textColor: "text-purple-900",
    gradient: "from-purple-50 to-purple-200",
    flowers: [
      { name: "Lavender", description: "Fragrant symbol of calmness and purity.", image: "https://images.unsplash.com/photo-1595303661604-037130283c74?auto=format&fit=crop&q=80&w=600&h=800", funFact: "Used anciently for mummification and bathing." },
      { name: "Lilac", description: "Represents early love and youthful joy.", image: "https://images.unsplash.com/photo-1545638202-602058e578c7?auto=format&fit=crop&q=80&w=600&h=800", funFact: "The fragrance is most intense at midday." },
      { name: "Wisteria", description: "Cascading purple dreams of old gardens.", image: "https://images.unsplash.com/photo-1541819777271-97b71387ca52?auto=format&fit=crop&q=80&w=600&h=800", funFact: "Vines can grow up to 60 feet long." },
      { name: "Purple Rose", description: "Enchantment and love at first sight.", image: "https://loremflickr.com/600/800/rose,purple", funFact: "Highly symbolic in witchcraft and mystery." },
      { name: "Foxglove", description: "Spikes of purple bells for woodland shade.", image: "https://loremflickr.com/600/800/foxglove,purple", funFact: "Source of the heart medication 'Digitalis'." },
      { name: "Petunia", description: "Colorful favorites that bloom all summer.", image: "https://loremflickr.com/600/800/petunia,purple", funFact: "Closely related to tomatoes and chili peppers." },
      { name: "Verbena", description: "Clusters of small, vibrant purple stars.", image: "https://loremflickr.com/600/800/verbena,purple", funFact: "Symbols of healing and protection." },
      { name: "Crocus", description: "Early spring gems that brave the snow.", image: "https://loremflickr.com/600/800/crocus,purple", funFact: "The source of the expensive spice saffron." },
      { name: "Allium", description: "Dramatic globe-shaped blooms on tall stems.", image: "https://loremflickr.com/600/800/allium,purple", funFact: "They belong to the onion family." },
      { name: "Clematis", description: "The 'Queen of Climbers' with lush petals.", image: "https://loremflickr.com/600/800/clematis,purple", funFact: "Can bloom from early spring to late autumn." },
      { name: "Purple Coneflower", description: "Resilient blooms with healing properties.", image: "https://loremflickr.com/600/800/echinacea,purple", funFact: "Used in traditional medicine to boost immunity." },
      { name: "Lisianthus", description: "Elegant, rose-like blooms on slender stems.", image: "https://loremflickr.com/600/800/eustoma,purple", funFact: "Also known as the 'Texas bluebell'." },
      { name: "Purple Orchid", description: "Exotic beauty representing authority.", image: "https://loremflickr.com/600/800/orchid,purple", funFact: "Symbolizes respect, admiration, and dignity." },
      { name: "Heliotrope", description: "Fragrant clusters that smell like vanilla.", image: "https://loremflickr.com/600/800/heliotrope,purple", funFact: "The name means 'sun-turner' in Greek." },
      { name: "Campanula", description: "Charming bell-shaped blooms of the fields.", image: "https://loremflickr.com/600/800/campanula,purple", funFact: "Also known as the 'harebell' or 'bluebell'." }
    ]
  },
  {
    id: "white",
    name: "White",
    color: "#FFFFFF",
    bgLight: "#FDFDFD",
    textColor: "text-slate-900",
    gradient: "from-slate-50 to-slate-100",
    flowers: [
      { name: "White Rose", description: "Representing purity, innocence, and youthfulness.", image: "https://images.unsplash.com/photo-1560710121-8274ec88880c?auto=format&fit=crop&q=80&w=600&h=800", funFact: "Used by the House of York during the War of the Roses." },
      { name: "Jasmine", description: "Fragrant blooms representing love and sensuality.", image: "https://images.unsplash.com/photo-1545638202-602058e578c7?auto=format&fit=crop&q=80&w=600&h=800", funFact: "The scent is most powerful during a full moon." },
      { name: "Snowdrop", description: "The herald of spring, signifying hope.", image: "https://images.unsplash.com/photo-1582230113110-3844f07a70c0?auto=format&fit=crop&q=80&w=600&h=800", funFact: "The first flower of the year to emerge." },
      { name: "Daisy", description: "Representing innocence and true love.", image: "https://images.unsplash.com/photo-1490750967868-88aa4486c946?auto=format&fit=crop&q=80&w=600&h=800", funFact: "Double flowers with many petals." },
      { name: "Lily of the Valley", description: "Symbol of humility and rebirth.", image: "https://loremflickr.com/600/800/lilyofthevalley,white", funFact: "The flower represents the tears of the Virgin Mary." },
      { name: "Gardenia", description: "Symbols of secret love and purity.", image: "https://loremflickr.com/600/800/gardenia,white", funFact: "The national flower of Pakistan." },
      { name: "White Orchid", description: "Reflects elegance, beauty, and strength.", image: "https://loremflickr.com/600/800/orchid,white", funFact: "Once extremely rare and only for royalty." },
      { name: "Magnolia", description: "Symbols of nobility and love for nature.", image: "https://loremflickr.com/600/800/magnolia,white", funFact: "Fossils date back over 95 million years." },
      { name: "White Tulip", description: "Symbols of forgiveness and worthiness.", image: "https://loremflickr.com/600/800/tulip,white", funFact: "Used to show a deep respect for someone." },
      { name: "White Calla Lily", description: "Exuberant elegance often associated with weddings.", image: "https://loremflickr.com/600/800/callalily,white", funFact: "They aren't actual lilies, but Arums." },
      { name: "Peace Lily", description: "Sympathy, solitude, and purity.", image: "https://loremflickr.com/600/800/peacelily,white", funFact: "Known for its air-purifying qualities." },
      { name: "Moonflower", description: "Large, white blooms that open at night.", image: "https://loremflickr.com/600/800/moonflower,white", funFact: "The flowers appear to glow in the moonlight." },
      { name: "Stephanotis", description: "Fragrant wax flowers used in bridal bouquets.", image: "https://loremflickr.com/600/800/stephanotis,white", funFact: "Also known as 'Madagascar jasmine'." },
      { name: "Tuberose", description: "Intensely fragrant spikes of white flowers.", image: "https://loremflickr.com/600/800/tuberose,white", funFact: "Used anciently in perfumery and ceremonies." },
      { name: "Baby's Breath", description: "Delicate clouds of tiny white stars.", image: "https://loremflickr.com/600/800/gypsophila,white", funFact: "Symbolizes everlasting love and purity." }
    ]
  },
  {
    id: "black",
    name: "Black",
    color: "#1A1A1A",
    bgLight: "#F2F2F2",
    textColor: "text-slate-950",
    gradient: "from-slate-100 to-slate-200",
    flowers: [
      { name: "Queen of Night Tulip", description: "Deepest purple-black for dramatic elegance.", image: "https://images.unsplash.com/photo-1520412099551-62b6baf93a26?auto=format&fit=crop&q=80&w=600&h=800", funFact: "The result of centuries of selective breeding." },
      { name: "Black Velvet Petunia", description: "Darkest velvety petals in the garden.", image: "https://images.unsplash.com/photo-1545638202-602058e578c7?auto=format&fit=crop&q=80&w=600&h=800", funFact: "Actually a super-saturated deep purple." },
      { name: "Chocolate Cosmos", description: "Deep maroon-black with a cocoa scent.", image: "https://images.unsplash.com/photo-1596733430284-f7437764b1a9?auto=format&fit=crop&q=80&w=600&h=800", funFact: "The juice was used to make dye in Mexico." },
      { name: "Black Baccara Rose", description: "Hybrid tea rose with an almost black hue.", image: "https://loremflickr.com/600/800/rose,black", funFact: "The petals look like actual black velvet." },
      { name: "Black Calla Lily", description: "Sleek and sophisticated architectural beauty.", image: "https://loremflickr.com/600/800/callalily,black", funFact: "A favorite for minimal, modern decor." },
      { name: "Black Mamba Petunia", description: "Incredible midnight hue with a velvety texture.", image: "https://loremflickr.com/600/800/petunia,black", funFact: "One of the darkest flowers ever created." },
      { name: "Black Hollyhock", description: "Tall, dramatic charcoal-colored towers.", image: "https://loremflickr.com/600/800/hollyhock,black", funFact: "Thomas Jefferson grew these at Monticello." },
      { name: "Black Bat Flower", description: "Unique and eerie bat-shaped blooms.", image: "https://loremflickr.com/600/800/tacca,black", funFact: "Native to tropical regions of Southeast Asia." },
      { name: "Black Pansy", description: "Charming dark faces for small garden spots.", image: "https://loremflickr.com/600/800/pansy,black", funFact: "Symbolizes deep thoughts and remembrance." },
      { name: "Black Prince Snapdragon", description: "Deep crimson-black foliage and dark blooms.", image: "https://loremflickr.com/600/800/snapdragon,black", funFact: "Known for its contrasting light and dark colors." },
      { name: "Black Widow Cranesbill", description: "Elegant, nodding blooms of deepest maroon.", image: "https://loremflickr.com/600/800/geranium,black", funFact: "The petals reflex backwards dramatically." },
      { name: "Black Jewel Lily", description: "Vibrant maroon-black with a glossy sheen.", image: "https://loremflickr.com/600/800/lily,black", funFact: "A true standout in summer gardens." },
      { name: "Black Charm Lily", description: "Saturated dark color on strong stems.", image: "https://loremflickr.com/600/800/blacklily,flower", funFact: "One of the most popular lilies in the black series." },
      { name: "Black Forest Calla Lily", description: "Intense dark color from tip to base.", image: "https://loremflickr.com/600/800/forestcalla,black", funFact: "Highly sought after for dramatic floral arrangements." },
      { name: "Onyx Odyssey Hellebore", description: "Lush, double-petaled blooms of midnight.", image: "https://loremflickr.com/600/800/hellebore,black", funFact: "An extremely rare and prized winter bloomer." }
    ]
  }
];
