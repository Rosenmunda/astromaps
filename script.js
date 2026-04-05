const DATA = [
    {
        name: "Orion", abbr: "Ori", latin: "The Hunter", type: "north", ra: 5.5, dec: 5,
        stars: [{ n: "Betelgeuse", x: -1.4, y: 1.4 }, { n: "Rigel", x: 1.4, y: -1.4 }, { n: "Bellatrix", x: -1.4, y: -0.4 }, { n: "Saiph", x: 1.4, y: 0.4 }, { n: "Mintaka", x: -0.5, y: 0 }, { n: "Alnilam", x: 0, y: 0 }, { n: "Alnitak", x: 0.5, y: 0 }],
        lines: [[0, 4], [4, 5], [5, 6], [6, 3], [3, 1], [0, 2], [2, 4], [6, 1]],
        wiki: "https://en.wikipedia.org/wiki/Orion",
        yt: "https://www.youtube.com/results?search_query=Orion+constellation+mythology",
        vedic: {
            sanskrit: "Mrigashira / Ardra", dev: "Soma & Rudra", 
            s_mantra: "ॐ नमः शिवाय", e_mantra: "Om Namah Shivaya",
            color: "Silver / Grey", flower: "Bel Patra", food: "Milk & Modak",
            h_cal: "Margashirsha (Nov - Dec)", e_cal: "Winter",
            fact: "The mighty hunter harboring the turbulent storm of Rudra; Betelgeuse marks the tear of Rudra (Ardra)."
        },
        wiki: "https://en.wikipedia.org/wiki/Orion",
        yt: "https://www.youtube.com/results?search_query=Orion+constellation+mythology",
        vedic: {
            sanskrit: "Mrigashira / Ardra", dev: "Soma & Rudra", 
            s_mantra: "ॐ नमः शिवाय", e_mantra: "Om Namah Shivaya",
            color: "Silver / Grey", flower: "Bel Patra", food: "Milk & Modak",
            h_cal: "Margashirsha (Nov - Dec)", e_cal: "Winter",
            fact: "The mighty hunter harboring the turbulent storm of Rudra; Betelgeuse marks the tear of Rudra (Ardra)."
        },
        desc: "One of the most iconic constellations, Orion straddles the celestial equator and is visible from virtually every inhabited place on Earth. Its distinctive belt of three aligned stars makes it unmistakable on winter nights.",
        myth: "In Greek mythology, Orion was a giant huntsman placed among the stars by Zeus, son of Poseidon. The goddess Artemis fell deeply in love with him, but Apollo tricked her into shooting Orion with an arrow. In grief, she immortalized him eternally in the stars.",
        facts: ["Betelgeuse is a red supergiant 700× the Sun's diameter — it could explode as a visible supernova within 100,000 years", "Rigel blazes at 120,000× solar luminosity, one of the most luminous stars visible to the naked eye", "The Orion Nebula (M42) below the belt is a stellar nursery 1,344 light-years away where stars form right now", "Ancient Egyptians are believed to have aligned the three Giza pyramids with Orion's three belt stars"],
        stats: { Area: "594 sq°", "Main Stars": "7", Distance: "243 ly", Season: "Winter" }, tags: ["Prominent", "Winter Sky", "Named Stars"]
    },

    {
        name: "Ursa Major", abbr: "UMa", latin: "The Great Bear", type: "north", ra: 10.7, dec: 55,
        stars: [{ n: "Dubhe", x: -1.5, y: 1 }, { n: "Merak", x: -0.8, y: 0.5 }, { n: "Phekda", x: 0, y: 0.8 }, { n: "Megrez", x: 0, y: 0 }, { n: "Alioth", x: 1, y: 0.2 }, { n: "Mizar", x: 1.8, y: -0.3 }, { n: "Alkaid", x: 2.8, y: -1 }],
        lines: [[0, 1], [1, 2], [2, 3], [3, 0], [3, 4], [4, 5], [5, 6]],
        wiki: "https://en.wikipedia.org/wiki/Ursa_Major",
        yt: "https://www.youtube.com/results?search_query=Ursa+Major+constellation+mythology",
        vedic: {
            sanskrit: "Saptarishi", dev: "The Seven Sages", 
            s_mantra: "ॐ सप्त ऋषिभ्यो नमः", e_mantra: "Om Saptarishibhyo Namaha",
            color: "Golden White", flower: "Kusha Grass", food: "Pure Ghee & Rice",
            h_cal: "Year Found", e_cal: "Spring (Northern Sky)",
            fact: "Revered as the seven enlightened ascetics eternally watching and guiding humanity from the North."
        },
        wiki: "https://en.wikipedia.org/wiki/Ursa_Major",
        yt: "https://www.youtube.com/results?search_query=Ursa+Major+constellation+mythology",
        vedic: {
            sanskrit: "Saptarishi", dev: "The Seven Sages", 
            s_mantra: "ॐ सप्त ऋषिभ्यो नमः", e_mantra: "Om Saptarishibhyo Namaha",
            color: "Golden White", flower: "Kusha Grass", food: "Pure Ghee & Rice",
            h_cal: "Year Found", e_cal: "Spring (Northern Sky)",
            fact: "Revered as the seven enlightened ascetics eternally watching and guiding humanity from the North."
        },
        desc: "Ursa Major is the third-largest constellation, home to the famous Big Dipper. Visible year-round from the northern hemisphere, the Dipper's pointer stars have guided navigators toward Polaris for thousands of years.",
        myth: "Zeus transformed Callisto and her son Arcas into bears and flung them into the sky. Hera, furious at the affair, ensured they would circle the celestial pole forever — never able to rest below the northern horizon.",
        facts: ["The Big Dipper's pointer stars (Dubhe and Merak) always point toward Polaris, the North Star", "Mizar was the first double star discovered telescopically, by Giovanni Battista Riccioli in 1617", "Five of the seven Dipper stars form a genuine stellar association, drifting together through space", "The interacting galaxy pair M81 and M82 — caught in a gravitational dance — lie just outside the Dipper's bowl"],
        stats: { Area: "1280 sq°", "Main Stars": "7", Distance: "80 ly", Season: "Year-round" }, tags: ["Circumpolar", "Navigation", "Big Dipper"]
    },

    {
        name: "Scorpius", abbr: "Sco", latin: "The Scorpion", type: "south", zodiac: true, ra: 16.5, dec: -30,
        stars: [{ n: "Antares", x: 0, y: 0.5 }, { n: "Graffias", x: -1, y: 1.2 }, { n: "Dschubba", x: 0, y: 1.2 }, { n: "Alniyat", x: 0.8, y: 0.9 }, { n: "Shaula", x: 1.5, y: -1.5 }, { n: "Lesath", x: 1.7, y: -1.8 }, { n: "Sargas", x: 1, y: -1 }],
        lines: [[1, 2], [2, 3], [3, 0], [0, 6], [6, 4], [4, 5]],
        wiki: "https://en.wikipedia.org/wiki/Scorpius",
        yt: "https://www.youtube.com/results?search_query=Scorpius+constellation+mythology",
        vedic: {
            sanskrit: "Vrishchika / Jyeshtha", dev: "Indra", 
            s_mantra: "ॐ क्रां क्रीं क्रौं सः भौमाय नमः", e_mantra: "Om Kram Kreem Kroum Sah Bhaumaya Namaha",
            color: "Dark Red / Rust", flower: "Red Oleander", food: "Red Lentils & Spices",
            h_cal: "Kartika (October - November)", e_cal: "Summer",
            fact: "The elder constellation (Jyeshtha) holding absolute domain over hidden mystical depths."
        },
        wiki: "https://en.wikipedia.org/wiki/Scorpius",
        yt: "https://www.youtube.com/results?search_query=Scorpius+constellation+mythology",
        vedic: {
            sanskrit: "Vrishchika / Jyeshtha", dev: "Indra", 
            s_mantra: "ॐ क्रां क्रीं क्रौं सः भौमाय नमः", e_mantra: "Om Kram Kreem Kroum Sah Bhaumaya Namaha",
            color: "Dark Red / Rust", flower: "Red Oleander", food: "Red Lentils & Spices",
            h_cal: "Kartika (October - November)", e_cal: "Summer",
            fact: "The elder constellation (Jyeshtha) holding absolute domain over hidden mystical depths."
        },
        desc: "Scorpius is one of the few constellations that genuinely resembles its namesake. Lying across the Milky Way, it is spectacular from dark southern skies and harbors an extraordinary concentration of deep-sky wonders.",
        myth: "Gaia sent the scorpion to slay the boastful hunter Orion. Zeus placed them on opposite sides of the sky — Scorpius rises in the east as Orion sets in the west, forever chasing each other across the heavens but never meeting.",
        facts: ["Antares (the 'rival of Mars') is a red supergiant 700× the Sun's diameter — if placed at our Sun's center, it would engulf Mars", "Scorpius contains 4 Messier objects: the Butterfly Cluster (M6), Ptolemy's Cluster (M7), and globular clusters M4 and M80", "The Milky Way's central bulge glows brilliantly behind Scorpius, one of the richest star-fields in the sky", "Ancient Babylonians called this constellation 'the scorpion' — one of the oldest recorded constellation names"],
        stats: { Area: "497 sq°", "Main Stars": "18", Distance: "550 ly", Season: "Summer" }, tags: ["Zodiac", "Southern", "Milky Way"]
    },

    {
        name: "Leo", abbr: "Leo", latin: "The Lion", type: "north", zodiac: true, ra: 10.7, dec: 15,
        stars: [{ n: "Regulus", x: -1.5, y: -0.5 }, { n: "Denebola", x: 1.5, y: 0 }, { n: "Algieba", x: -0.5, y: 0.5 }, { n: "Zosma", x: 0.8, y: 0.5 }, { n: "Chertan", x: 0.5, y: 0 }, { n: "Adhafera", x: -1, y: 0.9 }],
        lines: [[0, 2], [2, 5], [5, 0], [2, 3], [3, 4], [4, 1]],
        wiki: "https://en.wikipedia.org/wiki/Leo",
        yt: "https://www.youtube.com/results?search_query=Leo+constellation+mythology",
        vedic: {
            sanskrit: "Simha / Magha", dev: "Surya (Sun) & Pitris", 
            s_mantra: "ॐ ह्रां ह्रीं ह्रौं सः सूर्याय नमः", e_mantra: "Om Hraam Hreem Hroum Sah Suryaya Namaha",
            color: "Gold / Ruby Red", flower: "Red Hibiscus", food: "Wheat & Honey",
            h_cal: "Shravana (July - August)", e_cal: "Spring / Early Summer",
            fact: "The royal lion holding Magha (Regulus), carrying the ancestral fire of planetary sovereignty."
        },
        wiki: "https://en.wikipedia.org/wiki/Leo",
        yt: "https://www.youtube.com/results?search_query=Leo+constellation+mythology",
        vedic: {
            sanskrit: "Simha / Magha", dev: "Surya (Sun) & Pitris", 
            s_mantra: "ॐ ह्रां ह्रीं ह्रौं सः सूर्याय नमः", e_mantra: "Om Hraam Hreem Hroum Sah Suryaya Namaha",
            color: "Gold / Ruby Red", flower: "Red Hibiscus", food: "Wheat & Honey",
            h_cal: "Shravana (July - August)", e_cal: "Spring / Early Summer",
            fact: "The royal lion holding Magha (Regulus), carrying the ancestral fire of planetary sovereignty."
        },
        desc: "Leo is one of the oldest documented constellations, dating back 6,000 years to ancient Mesopotamia. The Sickle of Leo — a backwards question mark — forms the lion's magnificent mane and is one of the sky's most recognizable patterns.",
        myth: "Leo represents the Nemean Lion slain by Hercules as his first labor. The beast's hide was impervious to all mortal weapons. Hercules strangled it bare-handed and wore the indestructible golden hide as armor throughout his remaining labors.",
        facts: ["Regulus sits almost exactly on the ecliptic — the Sun, Moon, and planets frequently pass close beside it", "Regulus spins so rapidly (once every 15.9 hours) it bulges at the equator: 32% wider than tall", "The Leo Triplet — three interacting galaxies M65, M66, and NGC 3628 — is visible through binoculars", "Every November the Leonid meteor shower radiates from Leo, occasionally producing spectacular storms of thousands of meteors per hour"],
        stats: { Area: "947 sq°", "Main Stars": "9", Distance: "80 ly", Season: "Spring" }, tags: ["Zodiac", "Ancient", "Spring Sky"]
    },

    {
        name: "Cassiopeia", abbr: "Cas", latin: "The Queen", type: "north", ra: 1, dec: 60,
        stars: [{ n: "Schedar", x: 0, y: 0 }, { n: "Caph", x: -1.2, y: 0.6 }, { n: "Navi", x: 1, y: 0.6 }, { n: "Ruchbah", x: 1.6, y: -0.2 }, { n: "Segin", x: 2.2, y: 0.3 }],
        lines: [[1, 0], [0, 2], [2, 3], [3, 4]],
        wiki: "https://en.wikipedia.org/wiki/Cassiopeia",
        yt: "https://www.youtube.com/results?search_query=Cassiopeia+constellation+mythology",
        vedic: {
            sanskrit: "विश्व प्रपंच (Cosmic Expanse)", dev: "ब्रह्माण्ड देवता (Cosmic Navagraha)", 
            s_mantra: "ॐ नमो नारायणाय", e_mantra: "Om Namo Narayanaya",
            color: "Deep Celestial Blue", flower: "Blue Lotus", food: "Panchamrita",
            h_cal: "Sarva Maasa (Year-Round Context)", e_cal: "Standard Deep Sky Observation",
            fact: "A deep-space collective beyond traditional Vedic ecliptic mapping. Revered through universal cosmic expansion texts. *[Flagged: Universal Map]*"
        },
        wiki: "https://en.wikipedia.org/wiki/Cassiopeia",
        yt: "https://www.youtube.com/results?search_query=Cassiopeia+constellation+mythology",
        vedic: {
            sanskrit: "विश्व प्रपंच (Cosmic Expanse)", dev: "ब्रह्माण्ड देवता (Cosmic Navagraha)", 
            s_mantra: "ॐ नमो नारायणाय", e_mantra: "Om Namo Narayanaya",
            color: "Deep Celestial Blue", flower: "Blue Lotus", food: "Panchamrita",
            h_cal: "Sarva Maasa (Year-Round Context)", e_cal: "Standard Deep Sky Observation",
            fact: "A deep-space collective beyond traditional Vedic ecliptic mapping. Revered through universal cosmic expansion texts. *[Flagged: Yet to know from officials]*"
        },
        desc: "The unmistakable W-shape of Cassiopeia is one of the most easily recognized star patterns in the northern sky. Circumpolar for most northern observers, it wheels endlessly around Polaris without ever setting below the horizon.",
        myth: "Cassiopeia was a vain queen who boasted her daughter Andromeda was more beautiful than the sea nymphs. Poseidon punished her arrogance with the sea monster Cetus. As further punishment, Cassiopeia circles the pole upside down half the year.",
        facts: ["Cassiopeia never sets below the horizon for observers north of latitude 34°N — it is truly circumpolar", "Tycho Brahe's 'new star' of 1572 appeared in Cassiopeia, disproving the ancient belief that the heavens were eternal and unchanging", "The Perseus Double Cluster, visible between Cassiopeia and Perseus, contains ~600 young hot stars each", "Cassiopeia A is the youngest known supernova remnant in our galaxy, from an explosion around 1680 AD — still glowing brightly in radio wavelengths"],
        stats: { Area: "598 sq°", "Main Stars": "5", Distance: "228 ly", Season: "Year-round" }, tags: ["Circumpolar", "Northern", "W-Shape"]
    },

    {
        name: "Lyra", abbr: "Lyr", latin: "The Harp", type: "north", ra: 18.8, dec: 36,
        stars: [{ n: "Vega", x: 0, y: 0 }, { n: "Sheliak", x: 0.9, y: -0.9 }, { n: "Sulafat", x: 0.9, y: -1.3 }, { n: "Delta Lyr", x: -0.5, y: -0.9 }, { n: "Zeta Lyr", x: 0.3, y: -0.4 }],
        lines: [[0, 4], [4, 1], [1, 2], [2, 3], [3, 4]],
        wiki: "https://en.wikipedia.org/wiki/Lyra",
        yt: "https://www.youtube.com/results?search_query=Lyra+constellation+mythology",
        vedic: {
            sanskrit: "विश्व प्रपंच (Cosmic Expanse)", dev: "ब्रह्माण्ड देवता (Cosmic Navagraha)", 
            s_mantra: "ॐ नमो नारायणाय", e_mantra: "Om Namo Narayanaya",
            color: "Deep Celestial Blue", flower: "Blue Lotus", food: "Panchamrita",
            h_cal: "Sarva Maasa (Year-Round Context)", e_cal: "Standard Deep Sky Observation",
            fact: "A deep-space collective beyond traditional Vedic ecliptic mapping. Revered through universal cosmic expansion texts. *[Flagged: Universal Map]*"
        },
        wiki: "https://en.wikipedia.org/wiki/Lyra",
        yt: "https://www.youtube.com/results?search_query=Lyra+constellation+mythology",
        vedic: {
            sanskrit: "विश्व प्रपंच (Cosmic Expanse)", dev: "ब्रह्माण्ड देवता (Cosmic Navagraha)", 
            s_mantra: "ॐ नमो नारायणाय", e_mantra: "Om Namo Narayanaya",
            color: "Deep Celestial Blue", flower: "Blue Lotus", food: "Panchamrita",
            h_cal: "Sarva Maasa (Year-Round Context)", e_cal: "Standard Deep Sky Observation",
            fact: "A deep-space collective beyond traditional Vedic ecliptic mapping. Revered through universal cosmic expansion texts. *[Flagged: Yet to know from officials]*"
        },
        desc: "Lyra is a small but brilliant constellation dominated by Vega, the fifth-brightest star in the sky. Despite its compact size it contains the Ring Nebula — arguably the most observed deep-sky object through amateur telescopes worldwide.",
        myth: "Orpheus enchanted all living things with his lyre. After the Maenads tore him apart, the Muses gathered his body. The gods transformed his lyre into the stars, where its music plays on in silent eternity — immortal, like the songs themselves.",
        facts: ["Vega was the North Pole star 14,000 years ago and will be again in about 12,000 years due to Earth's axial precession", "Vega was the first star other than the Sun to be photographed, captured on a daguerreotype in 1850 at Harvard", "The Ring Nebula (M57) is a planetary nebula — the glowing shell of a Sun-like star that has died, expanding at 20–30 km/s", "Vega is only 25 light-years away and shines 40× more brightly than our Sun"],
        stats: { Area: "286 sq°", "Main Stars": "5", Distance: "25 ly (Vega)", Season: "Summer" }, tags: ["Northern", "Summer Triangle", "Vega"]
    },

    {
        name: "Cygnus", abbr: "Cyg", latin: "The Swan", type: "north", ra: 20.6, dec: 42,
        stars: [{ n: "Deneb", x: 0, y: 1.6 }, { n: "Sadr", x: 0, y: 0 }, { n: "Albireo", x: 0, y: -1.6 }, { n: "Gienah", x: -1.6, y: 0 }, { n: "Delta Cyg", x: 1.6, y: 0 }],
        lines: [[0, 1], [1, 2], [3, 1], [1, 4]],
        wiki: "https://en.wikipedia.org/wiki/Cygnus",
        yt: "https://www.youtube.com/results?search_query=Cygnus+constellation+mythology",
        vedic: {
            sanskrit: "Hamsa", dev: "Brahma", 
            s_mantra: "ॐ हंसाय नमः", e_mantra: "Om Hamsaya Namaha",
            color: "White", flower: "White Lotus", food: "Saraswati Bhog",
            h_cal: "Shravana - Bhadrapada", e_cal: "Summer / Early Autumn",
            fact: "The cosmic swan possessing ultimate discriminative wisdom (Neera-Ksheera Viveka)."
        },
        wiki: "https://en.wikipedia.org/wiki/Cygnus",
        yt: "https://www.youtube.com/results?search_query=Cygnus+constellation+mythology",
        vedic: {
            sanskrit: "Hamsa", dev: "Brahma", 
            s_mantra: "ॐ हंसाय नमः", e_mantra: "Om Hamsaya Namaha",
            color: "White", flower: "White Lotus", food: "Saraswati Bhog",
            h_cal: "Shravana - Bhadrapada", e_cal: "Summer / Early Autumn",
            fact: "The cosmic swan possessing ultimate discriminative wisdom (Neera-Ksheera Viveka)."
        },
        desc: "Cygnus the Swan glides magnificently along the Milky Way. Its Northern Cross asterism dominates summer evenings while Deneb — its tail star — is one of the most intrinsically luminous stars in our entire galaxy.",
        myth: "Zeus transformed into a swan to court Leda of Sparta. Cygnus also represents Orpheus, who was transformed into a swan at death and placed beside his beloved harp (Lyra), singing his songs through all of eternity.",
        facts: ["Deneb is roughly 2,600 light-years away yet rivals first-magnitude stars because it shines 200,000× more brightly than our Sun", "Albireo is celebrated as the finest double star for small telescopes — one component vivid gold, the other deep sapphire blue", "Cygnus X-1 (1964) was the first confirmed stellar-mass black hole candidate — it contains a black hole 21× the Sun's mass", "The Veil Nebula (Cygnus Loop) is a supernova remnant 2,600 light-years across, still expanding from an explosion 10,000 years ago"],
        stats: { Area: "804 sq°", "Main Stars": "9", Distance: "2600 ly (Deneb)", Season: "Summer" }, tags: ["Northern", "Summer", "Milky Way"]
    },

    {
        name: "Gemini", abbr: "Gem", latin: "The Twins", type: "north", zodiac: true, ra: 7.1, dec: 22,
        stars: [{ n: "Castor", x: -0.9, y: 1.5 }, { n: "Pollux", x: 0.9, y: 1.5 }, { n: "Alhena", x: 0.9, y: -0.6 }, { n: "Wasat", x: -0.2, y: 0.5 }, { n: "Tejat", x: -0.8, y: -0.5 }],
        lines: [[0, 3], [1, 3], [3, 4], [3, 2]],
        wiki: "https://en.wikipedia.org/wiki/Gemini",
        yt: "https://www.youtube.com/results?search_query=Gemini+constellation+mythology",
        vedic: {
            sanskrit: "Mithuna", dev: "Budha (Mercury)", 
            s_mantra: "ॐ ब्रां ब्रीं ब्रौं सः बुधाय नमः", e_mantra: "Om Braam Breem Broum Sah Budhaya Namaha",
            color: "Emerald Green", flower: "Jasmine / Chameli", food: "Moong Dal & Basil",
            h_cal: "Jyeshtha (May - June)", e_cal: "Late Winter / Spring",
            fact: "The divine twins representing celestial communication, intellect, and the duality of existence."
        },
        wiki: "https://en.wikipedia.org/wiki/Gemini",
        yt: "https://www.youtube.com/results?search_query=Gemini+constellation+mythology",
        vedic: {
            sanskrit: "Mithuna", dev: "Budha (Mercury)", 
            s_mantra: "ॐ ब्रां ब्रीं ब्रौं सः बुधाय नमः", e_mantra: "Om Braam Breem Broum Sah Budhaya Namaha",
            color: "Emerald Green", flower: "Jasmine / Chameli", food: "Moong Dal & Basil",
            h_cal: "Jyeshtha (May - June)", e_cal: "Late Winter / Spring",
            fact: "The divine twins representing celestial communication, intellect, and the duality of existence."
        },
        desc: "Gemini represents the immortal twins Castor and Pollux, their bright stars marking each twin's head. A rich constellation lying across the Milky Way, its two brilliant heads are among the easiest stars to identify in winter.",
        myth: "The Dioscuri were twin sons of Leda — Pollux immortal (son of Zeus), Castor mortal. When Castor died in battle, Pollux begged Zeus to share his immortality. They now alternate between Olympus and Hades, always together, forever inseparable brothers.",
        facts: ["Castor appears as one star but is actually a sextuple system — three binary pairs all orbiting a common center", "Pollux has a confirmed giant exoplanet making it the nearest planet-hosting giant star to our solar system", "Pluto was discovered in Gemini on February 18, 1930, by Clyde Tombaugh at Lowell Observatory", "The Geminid meteor shower (December 13-14) reaches 120+ meteors/hour — caused by rocky asteroid 3200 Phaethon, not a comet"],
        stats: { Area: "514 sq°", "Main Stars": "10", Distance: "34 ly (Pollux)", Season: "Winter" }, tags: ["Zodiac", "Winter", "Meteor Shower"]
    },

    {
        name: "Taurus", abbr: "Tau", latin: "The Bull", type: "north", zodiac: true, ra: 4.7, dec: 15,
        stars: [{ n: "Aldebaran", x: 0, y: 0 }, { n: "Elnath", x: 1.6, y: 0.9 }, { n: "Zeta Tau", x: 1.3, y: -0.6 }, { n: "Alcyone", x: -1.1, y: 0.4 }, { n: "Atlas", x: -1.3, y: 0.6 }],
        lines: [[0, 1], [0, 2], [0, 3], [3, 4]],
        wiki: "https://en.wikipedia.org/wiki/Taurus",
        yt: "https://www.youtube.com/results?search_query=Taurus+constellation+mythology",
        vedic: {
            sanskrit: "Vrishabha / Krittika", dev: "Agni & Brahma", 
            s_mantra: "ॐ द्रां द्रीं द्रौं सः शुक्राय नमः", e_mantra: "Om Draam Dreem Droum Sah Shukraya Namaha",
            color: "White / Pale Blue", flower: "White Lotus", food: "Rice Kheer",
            h_cal: "Vaisakha (April - May)", e_cal: "Winter / Early Spring",
            fact: "Home to the Pleiades (Krittika), embodying the cosmic bull of earthly stability and devotion."
        },
        wiki: "https://en.wikipedia.org/wiki/Taurus",
        yt: "https://www.youtube.com/results?search_query=Taurus+constellation+mythology",
        vedic: {
            sanskrit: "Vrishabha / Krittika", dev: "Agni & Brahma", 
            s_mantra: "ॐ द्रां द्रीं द्रौं सः शुक्राय नमः", e_mantra: "Om Draam Dreem Droum Sah Shukraya Namaha",
            color: "White / Pale Blue", flower: "White Lotus", food: "Rice Kheer",
            h_cal: "Vaisakha (April - May)", e_cal: "Winter / Early Spring",
            fact: "Home to the Pleiades (Krittika), embodying the cosmic bull of earthly stability and devotion."
        },
        desc: "Taurus is one of the most ancient constellations, depicted in Lascaux cave paintings around 17,000 years ago. It contains two of the sky's most famous star clusters — the Pleiades and the Hyades — and the spectacular Crab Nebula.",
        myth: "Taurus represents Zeus transformed into a magnificent white bull to abduct the Phoenician princess Europa. She climbed onto his back enchanted by his beauty, and he swam across the Mediterranean to Crete, where she became Queen.",
        facts: ["The Pleiades (Seven Sisters) is one of the nearest star clusters at 444 light-years, containing over 3,000 member stars", "The Hyades at only 153 light-years is the closest open cluster to Earth — the fundamental benchmark for cosmic distance measurement", "Aldebaran, the fiery eye of the bull, is a red giant 44× the Sun's diameter and 65 times more luminous", "The Crab Nebula (M1) is the remnant of a supernova witnessed and recorded by Chinese astronomers on July 4, 1054 AD"],
        stats: { Area: "797 sq°", "Main Stars": "19", Distance: "153 ly (Hyades)", Season: "Winter" }, tags: ["Zodiac", "Ancient", "Star Clusters"]
    },

    {
        name: "Sagittarius", abbr: "Sgr", latin: "The Archer", type: "south", zodiac: true, ra: 19, dec: -28,
        stars: [{ n: "Kaus Australis", x: 0, y: 0 }, { n: "Nunki", x: 1.1, y: 0.5 }, { n: "Kaus Media", x: -0.3, y: 0.5 }, { n: "Kaus Borealis", x: -0.5, y: 1.1 }, { n: "Ascella", x: 0.9, y: -0.5 }, { n: "Nash", x: -0.8, y: 0.1 }],
        lines: [[0, 2], [2, 3], [2, 5], [0, 4], [0, 1], [1, 4]],
        wiki: "https://en.wikipedia.org/wiki/Sagittarius",
        yt: "https://www.youtube.com/results?search_query=Sagittarius+constellation+mythology",
        vedic: {
            sanskrit: "Dhanu / Mula", dev: "Brihaspati (Jupiter)", 
            s_mantra: "ॐ ग्रां ग्रीं ग्रौं सः गुरवे नमः", e_mantra: "Om Graam Greem Groum Sah Gurave Namaha",
            color: "Yellow / Gold", flower: "Yellow Marigold", food: "Chana Dal & Haldi",
            h_cal: "Margashirsha (November - December)", e_cal: "Summer / Autumn",
            fact: "The cosmic archer piercing ignorance, directing focus toward profound divine truth."
        },
        wiki: "https://en.wikipedia.org/wiki/Sagittarius",
        yt: "https://www.youtube.com/results?search_query=Sagittarius+constellation+mythology",
        vedic: {
            sanskrit: "Dhanu / Mula", dev: "Brihaspati (Jupiter)", 
            s_mantra: "ॐ ग्रां ग्रीं ग्रौं सः गुरवे नमः", e_mantra: "Om Graam Greem Groum Sah Gurave Namaha",
            color: "Yellow / Gold", flower: "Yellow Marigold", food: "Chana Dal & Haldi",
            h_cal: "Margashirsha (November - December)", e_cal: "Summer / Autumn",
            fact: "The cosmic archer piercing ignorance, directing focus toward profound divine truth."
        },
        desc: "Sagittarius points his arrow toward the very heart of the Milky Way. The densest star fields in the sky appear here, along with Sagittarius A* — the supermassive black hole at our galaxy's center, lurking 26,000 light-years away behind thick curtains of dust.",
        myth: "Sagittarius is depicted as a centaur-archer aiming toward Scorpius. Some identify him as the satyr Crotus, son of Pan, inventor of archery, placed in the sky by Zeus at the request of the nine Muses on Mount Helicon.",
        facts: ["Sagittarius A* — the black hole at our galaxy's center — has the mass of 4 million suns compressed into a region smaller than our solar system", "The Teapot asterism appears to pour 'steam' along the Milky Way — the dense clouds of stars near the galactic core", "Sagittarius contains 15 Messier objects — more than any other constellation — including the Lagoon (M8), Trifid (M20), and Omega (M17) nebulae", "The first detection of interstellar formaldehyde occurred toward Sagittarius — a key organic molecule suggesting life-chemistry is widespread"],
        stats: { Area: "867 sq°", "Main Stars": "12", Distance: "26,000 ly (core)", Season: "Summer" }, tags: ["Zodiac", "Galactic Center", "Southern"]
    },

    {
        name: "Virgo", abbr: "Vir", latin: "The Maiden", type: "south", zodiac: true, ra: 13.4, dec: -4,
        stars: [{ n: "Spica", x: 0, y: 0 }, { n: "Vindemiatrix", x: -2, y: 1 }, { n: "Porrima", x: -1, y: 0.5 }, { n: "Minelauva", x: -0.5, y: 0.1 }, { n: "Heze", x: 1, y: -0.5 }],
        lines: [[1, 2], [2, 3], [3, 0], [0, 4]],
        wiki: "https://en.wikipedia.org/wiki/Virgo",
        yt: "https://www.youtube.com/results?search_query=Virgo+constellation+mythology",
        vedic: {
            sanskrit: "Kanya / Chitra", dev: "Budha (Mercury)", 
            s_mantra: "ॐ ब्रां ब्रीं ब्रौं सः बुधाय नमः", e_mantra: "Om Braam Breem Broum Sah Budhaya Namaha",
            color: "Pale Green / Earthy", flower: "Marigold", food: "Green Lentils",
            h_cal: "Bhadrapada (August - September)", e_cal: "Spring / Early Summer",
            fact: "The divine maiden portraying worldly purity, order, and immense intellectual discernment."
        },
        wiki: "https://en.wikipedia.org/wiki/Virgo",
        yt: "https://www.youtube.com/results?search_query=Virgo+constellation+mythology",
        vedic: {
            sanskrit: "Kanya / Chitra", dev: "Budha (Mercury)", 
            s_mantra: "ॐ ब्रां ब्रीं ब्रौं सः बुधाय नमः", e_mantra: "Om Braam Breem Broum Sah Budhaya Namaha",
            color: "Pale Green / Earthy", flower: "Marigold", food: "Green Lentils",
            h_cal: "Bhadrapada (August - September)", e_cal: "Spring / Early Summer",
            fact: "The divine maiden portraying worldly purity, order, and immense intellectual discernment."
        },
        desc: "Virgo is the largest zodiacal constellation and second-largest in the sky overall. It hosts the Virgo Cluster — over 1,300 galaxies forming the gravitational core of the Virgo Supercluster, the immense cosmic structure containing our own Milky Way.",
        myth: "Virgo is most often identified with Demeter, the harvest goddess, holding a sheaf of grain (marked by brilliant Spica). Her grief when Persephone descends to Hades causes winter; her joy at reunion each spring brings the harvest season.",
        facts: ["The Virgo Cluster's giant galaxy M87 hosts a black hole 6.5 billion times the Sun's mass — famously imaged directly in 2019", "Spica helped the Greek astronomer Hipparchus discover Earth's axial precession in 127 BC", "Spica is a binary pair so close and massive that tidal forces stretch both stars into distinct egg shapes", "Markarian's Chain — a sweeping alignment of 8 interacting galaxies — stretches across Virgo in one of the sky's most remarkable vistas"],
        stats: { Area: "1294 sq°", "Main Stars": "15", Distance: "262 ly (Spica)", Season: "Spring" }, tags: ["Zodiac", "Largest Zodiac", "Galaxy Cluster"]
    },

    {
        name: "Perseus", abbr: "Per", latin: "The Hero", type: "north", ra: 3.2, dec: 45,
        stars: [{ n: "Mirfak", x: 0, y: 0.5 }, { n: "Algol", x: -1, y: -0.5 }, { n: "Atik", x: 1, y: 0 }, { n: "Menkib", x: 1.5, y: -0.6 }, { n: "Delta Per", x: 0.1, y: 1.2 }],
        lines: [[4, 0], [0, 1], [0, 2], [2, 3]],
        wiki: "https://en.wikipedia.org/wiki/Perseus",
        yt: "https://www.youtube.com/results?search_query=Perseus+constellation+mythology",
        vedic: {
            sanskrit: "Parashurama", dev: "Vishnu Avatar", 
            s_mantra: "ॐ परशुरामाय नमः", e_mantra: "Om Parashuramaya Namaha",
            color: "Red / Gold", flower: "Tulsi", food: "Fruits & Roots",
            h_cal: "Margashirsha", e_cal: "Winter",
            fact: "The celestial warrior bearing the cosmic axe to protect the divine realms."
        },
        wiki: "https://en.wikipedia.org/wiki/Perseus",
        yt: "https://www.youtube.com/results?search_query=Perseus+constellation+mythology",
        vedic: {
            sanskrit: "Parashurama", dev: "Vishnu Avatar", 
            s_mantra: "ॐ परशुरामाय नमः", e_mantra: "Om Parashuramaya Namaha",
            color: "Red / Gold", flower: "Tulsi", food: "Fruits & Roots",
            h_cal: "Margashirsha", e_cal: "Winter",
            fact: "The celestial warrior bearing the cosmic axe to protect the divine realms."
        },
        desc: "Perseus the Hero strides through the Milky Way holding the severed head of Medusa, marked by the mysterious 'demon star' Algol. The entire drama of his legendary story is commemorated in the surrounding constellations.",
        myth: "Son of Zeus and Danaë, Perseus used Athena's mirrored shield to slay Medusa without meeting her petrifying gaze. He then rescued Andromeda from the sea monster Cetus — slain using Medusa's head to turn the monster to stone. He founded the city of Mycenae.",
        facts: ["Algol (Arabic for 'the Demon') was the first eclipsing binary discovered — it dims for 10 hours every 2.87 days as its companion crosses in front", "Mirfak is embedded in a beautiful moving cluster of young, hot blue stars visible to the naked eye on dark nights", "The Perseus Double Cluster (NGC 869 & 884) each contain ~300 stars and together form one of the finest naked-eye deep-sky objects", "The Perseid meteor shower peaks each August 11-13, reliably producing 100+ meteors/hour — one of the year's most beloved events"],
        stats: { Area: "615 sq°", "Main Stars": "19", Distance: "510 ly", Season: "Autumn/Winter" }, tags: ["Northern", "Milky Way", "Perseids"]
    },

    {
        name: "Andromeda", abbr: "And", latin: "The Princess", type: "north", ra: 1.1, dec: 37,
        stars: [{ n: "Alpheratz", x: -1.6, y: 0 }, { n: "Mirach", x: 0, y: 0 }, { n: "Almach", x: 1.6, y: 0 }, { n: "Delta And", x: -0.5, y: 0.9 }],
        lines: [[0, 1], [1, 2], [0, 3]],
        wiki: "https://en.wikipedia.org/wiki/Andromeda",
        yt: "https://www.youtube.com/results?search_query=Andromeda+constellation+mythology",
        vedic: {
            sanskrit: "विश्व प्रपंच (Cosmic Expanse)", dev: "ब्रह्माण्ड देवता (Cosmic Navagraha)", 
            s_mantra: "ॐ नमो नारायणाय", e_mantra: "Om Namo Narayanaya",
            color: "Deep Celestial Blue", flower: "Blue Lotus", food: "Panchamrita",
            h_cal: "Sarva Maasa (Year-Round Context)", e_cal: "Standard Deep Sky Observation",
            fact: "A deep-space collective beyond traditional Vedic ecliptic mapping. Revered through universal cosmic expansion texts. *[Flagged: Universal Map]*"
        },
        wiki: "https://en.wikipedia.org/wiki/Andromeda",
        yt: "https://www.youtube.com/results?search_query=Andromeda+constellation+mythology",
        vedic: {
            sanskrit: "विश्व प्रपंच (Cosmic Expanse)", dev: "ब्रह्माण्ड देवता (Cosmic Navagraha)", 
            s_mantra: "ॐ नमो नारायणाय", e_mantra: "Om Namo Narayanaya",
            color: "Deep Celestial Blue", flower: "Blue Lotus", food: "Panchamrita",
            h_cal: "Sarva Maasa (Year-Round Context)", e_cal: "Standard Deep Sky Observation",
            fact: "A deep-space collective beyond traditional Vedic ecliptic mapping. Revered through universal cosmic expansion texts. *[Flagged: Yet to know from officials]*"
        },
        desc: "Andromeda is most famous for hosting galaxy M31 — our nearest large galactic neighbor and the most distant object visible to the naked eye. On a truly dark night, this faint smudge containing one trillion stars is accessible without any optical aid.",
        myth: "Chained to a seaside cliff as sacrifice to appease Poseidon's sea monster Cetus — punishment for her mother Cassiopeia's arrogance — Andromeda was rescued at the very last moment by Perseus, who slew the monster and won her hand in marriage.",
        facts: ["The Andromeda Galaxy (M31) at 2.537 million light-years is the most distant object the human eye can see unaided", "M31 is on a direct collision course with the Milky Way — they will merge in approximately 4.5 billion years", "The light you see from M31 tonight left when Homo erectus walked the Earth — 2.5 million years before you were born", "Andromeda Galaxy is estimated to contain roughly one trillion stars — about twice the Milky Way's stellar population"],
        stats: { Area: "722 sq°", "Main Stars": "16", Distance: "2.54M ly (M31)", Season: "Autumn" }, tags: ["Northern", "Andromeda Galaxy", "Mythology"]
    },

    {
        name: "Canis Major", abbr: "CMa", latin: "The Greater Dog", type: "south", ra: 6.8, dec: -22,
        stars: [{ n: "Sirius", x: 0, y: 0.5 }, { n: "Adhara", x: 0.6, y: -1 }, { n: "Wezen", x: 0.1, y: -1 }, { n: "Mirzam", x: -1, y: 0 }, { n: "Aludra", x: 1.1, y: -1.5 }],
        lines: [[3, 0], [0, 2], [2, 1], [2, 4]],
        wiki: "https://en.wikipedia.org/wiki/Canis_Major",
        yt: "https://www.youtube.com/results?search_query=Canis+Major+constellation+mythology",
        vedic: {
            sanskrit: "Lubdhaka (Sirius)", dev: "Rudra", 
            s_mantra: "ॐ शिवाय नमः", e_mantra: "Om Shivaya Namaha",
            color: "Blinding White", flower: "Dhatura", food: "Bhaang & Milk",
            h_cal: "Pausha - Magha", e_cal: "Winter",
            fact: "Sirius represents the fierce eternal hunter aspect of Lord Shiva pursuing planetary constellations."
        },
        wiki: "https://en.wikipedia.org/wiki/Canis_Major",
        yt: "https://www.youtube.com/results?search_query=Canis+Major+constellation+mythology",
        vedic: {
            sanskrit: "Lubdhaka (Sirius)", dev: "Rudra", 
            s_mantra: "ॐ शिवाय नमः", e_mantra: "Om Shivaya Namaha",
            color: "Blinding White", flower: "Dhatura", food: "Bhaang & Milk",
            h_cal: "Pausha - Magha", e_cal: "Winter",
            fact: "Sirius represents the fierce eternal hunter aspect of Lord Shiva pursuing planetary constellations."
        },
        desc: "Canis Major faithfully follows Orion across the winter sky containing Sirius — the brightest star in the entire night sky at magnitude -1.46. Ancient Egyptians revered Sirius as a herald of the annual Nile flood that sustained their civilization.",
        myth: "Canis Major is one of Orion's loyal hunting dogs. The Egyptians called Sirius 'Sopdet' and worshipped her as a goddess. Her annual reappearance at dawn just before the Nile flooded was so precise it became the foundation of the Egyptian 365-day calendar.",
        facts: ["Sirius at apparent magnitude -1.46 is the brightest star in the night sky — 25× more luminous than our Sun", "Sirius B (the 'Pup') is a white dwarf companion — one teaspoon of its material weighs approximately 5 metric tons", "The 'Dog Days of Summer' (July 3 - Aug 11) are named for when Sirius rises with the Sun, anciently thought to add heat to summer", "Egyptian temples were aligned to Sirius; the Great Pyramid's southern air shaft pointed precisely where Sirius culminated in 2560 BC"],
        stats: { Area: "380 sq°", "Main Stars": "8", Distance: "8.6 ly (Sirius)", Season: "Winter" }, tags: ["Southern", "Sirius", "Ancient"]
    },

    {
        name: "Centaurus", abbr: "Cen", latin: "The Centaur", type: "south", ra: 13.1, dec: -47,
        stars: [{ n: "Alpha Cen A", x: -0.4, y: 0.1 }, { n: "Hadar", x: 0.9, y: 0 }, { n: "Menkent", x: -0.8, y: 1 }, { n: "Muhlifain", x: 0.3, y: 0.6 }, { n: "Eps Cen", x: 0.6, y: -0.5 }],
        lines: [[0, 1], [1, 3], [3, 2], [1, 4]],
        wiki: "https://en.wikipedia.org/wiki/Centaurus",
        yt: "https://www.youtube.com/results?search_query=Centaurus+constellation+mythology",
        vedic: {
            sanskrit: "विश्व प्रपंच (Cosmic Expanse)", dev: "ब्रह्माण्ड देवता (Cosmic Navagraha)", 
            s_mantra: "ॐ नमो नारायणाय", e_mantra: "Om Namo Narayanaya",
            color: "Deep Celestial Blue", flower: "Blue Lotus", food: "Panchamrita",
            h_cal: "Sarva Maasa (Year-Round Context)", e_cal: "Standard Deep Sky Observation",
            fact: "A deep-space collective beyond traditional Vedic ecliptic mapping. Revered through universal cosmic expansion texts. *[Flagged: Universal Map]*"
        },
        wiki: "https://en.wikipedia.org/wiki/Centaurus",
        yt: "https://www.youtube.com/results?search_query=Centaurus+constellation+mythology",
        vedic: {
            sanskrit: "विश्व प्रपंच (Cosmic Expanse)", dev: "ब्रह्माण्ड देवता (Cosmic Navagraha)", 
            s_mantra: "ॐ नमो नारायणाय", e_mantra: "Om Namo Narayanaya",
            color: "Deep Celestial Blue", flower: "Blue Lotus", food: "Panchamrita",
            h_cal: "Sarva Maasa (Year-Round Context)", e_cal: "Standard Deep Sky Observation",
            fact: "A deep-space collective beyond traditional Vedic ecliptic mapping. Revered through universal cosmic expansion texts. *[Flagged: Yet to know from officials]*"
        },
        desc: "Centaurus is a brilliant southern constellation containing Alpha Centauri — the closest stellar system to our Sun at just 4.37 light-years. On a dark southern night, it is one of the most spectacular regions of the sky.",
        myth: "Centaurus represents Chiron, the wisest of all centaurs, tutor to Achilles, Jason, and Asclepius the healer. Accidentally wounded by Hercules' poisoned arrow, the immortal Chiron suffered endlessly. He surrendered his immortality to end his pain — and Zeus honored him with eternal life among the stars.",
        facts: ["Alpha Centauri is the closest star system to Earth at 4.37 light-years — a three-star system two of which resemble our own Sun", "Proxima Centauri (the third component) at 4.24 light-years is the single nearest star to the Sun", "Proxima b, a potentially habitable exoplanet in Proxima Centauri's habitable zone, is one of the most studied targets for astrobiology", "Omega Centauri (NGC 5139) is the largest known globular cluster in the Milky Way — 10 million ancient stars in one sphere"],
        stats: { Area: "1060 sq°", "Main Stars": "11", Distance: "4.37 ly (Alpha Cen)", Season: "Spring" }, tags: ["Southern", "Nearest Star", "Large"]
    },

    {
        name: "Aquila", abbr: "Aql", latin: "The Eagle", type: "north", ra: 19.7, dec: 3,
        stars: [{ n: "Altair", x: 0, y: 0 }, { n: "Tarazed", x: -0.8, y: 0.8 }, { n: "Alshain", x: 0.8, y: 0.5 }, { n: "Delta Aql", x: 0.5, y: -1 }],
        lines: [[1, 0], [0, 2], [0, 3]],
        wiki: "https://en.wikipedia.org/wiki/Aquila",
        yt: "https://www.youtube.com/results?search_query=Aquila+constellation+mythology",
        vedic: {
            sanskrit: "विश्व प्रपंच (Cosmic Expanse)", dev: "ब्रह्माण्ड देवता (Cosmic Navagraha)", 
            s_mantra: "ॐ नमो नारायणाय", e_mantra: "Om Namo Narayanaya",
            color: "Deep Celestial Blue", flower: "Blue Lotus", food: "Panchamrita",
            h_cal: "Sarva Maasa (Year-Round Context)", e_cal: "Standard Deep Sky Observation",
            fact: "A deep-space collective beyond traditional Vedic ecliptic mapping. Revered through universal cosmic expansion texts. *[Flagged: Universal Map]*"
        },
        wiki: "https://en.wikipedia.org/wiki/Aquila",
        yt: "https://www.youtube.com/results?search_query=Aquila+constellation+mythology",
        vedic: {
            sanskrit: "विश्व प्रपंच (Cosmic Expanse)", dev: "ब्रह्माण्ड देवता (Cosmic Navagraha)", 
            s_mantra: "ॐ नमो नारायणाय", e_mantra: "Om Namo Narayanaya",
            color: "Deep Celestial Blue", flower: "Blue Lotus", food: "Panchamrita",
            h_cal: "Sarva Maasa (Year-Round Context)", e_cal: "Standard Deep Sky Observation",
            fact: "A deep-space collective beyond traditional Vedic ecliptic mapping. Revered through universal cosmic expansion texts. *[Flagged: Yet to know from officials]*"
        },
        desc: "Aquila the Eagle soars along the Milky Way with Altair blazing at its heart — one of the closest bright stars to Earth at only 16.7 light-years. Altair's extraordinary rotation speed makes it one of the most physically remarkable naked-eye stars.",
        myth: "Aquila was Zeus's royal eagle, entrusted with carrying his thunderbolts. It also abducted the beautiful youth Ganymede from his father's flock on the slopes of Mount Ida, carrying him up to Olympus to serve forever as cup-bearer to the gods.",
        facts: ["Altair is only 16.7 light-years from Earth — the light you see tonight left in the early 21st century", "Altair rotates once every 9 hours (vs. 25 days for the Sun) — so fast it bulges dramatically, 20% wider at the equator than at the poles", "Altair forms the Summer Triangle with Vega (Lyra) and Deneb (Cygnus) — the dominant asterism of northern summer nights", "A brilliant nova appeared in Aquila in 389 BC, recorded by astronomers in China, Greece, and Babylon simultaneously"],
        stats: { Area: "652 sq°", "Main Stars": "10", Distance: "16.7 ly (Altair)", Season: "Summer" }, tags: ["Northern", "Summer Triangle", "Altair"]
    },

    {
        name: "Crux", abbr: "Cru", latin: "The Southern Cross", type: "south", ra: 12.5, dec: -60,
        stars: [{ n: "Acrux", x: 0, y: -1.1 }, { n: "Mimosa", x: 1.1, y: 0 }, { n: "Gacrux", x: 0, y: 1.1 }, { n: "Imai", x: -1.1, y: 0 }],
        lines: [[2, 0], [3, 1]],
        wiki: "https://en.wikipedia.org/wiki/Crux",
        yt: "https://www.youtube.com/results?search_query=Crux+constellation+mythology",
        vedic: {
            sanskrit: "विश्व प्रपंच (Cosmic Expanse)", dev: "ब्रह्माण्ड देवता (Cosmic Navagraha)", 
            s_mantra: "ॐ नमो नारायणाय", e_mantra: "Om Namo Narayanaya",
            color: "Deep Celestial Blue", flower: "Blue Lotus", food: "Panchamrita",
            h_cal: "Sarva Maasa (Year-Round Context)", e_cal: "Standard Deep Sky Observation",
            fact: "A deep-space collective beyond traditional Vedic ecliptic mapping. Revered through universal cosmic expansion texts. *[Flagged: Universal Map]*"
        },
        wiki: "https://en.wikipedia.org/wiki/Crux",
        yt: "https://www.youtube.com/results?search_query=Crux+constellation+mythology",
        vedic: {
            sanskrit: "विश्व प्रपंच (Cosmic Expanse)", dev: "ब्रह्माण्ड देवता (Cosmic Navagraha)", 
            s_mantra: "ॐ नमो नारायणाय", e_mantra: "Om Namo Narayanaya",
            color: "Deep Celestial Blue", flower: "Blue Lotus", food: "Panchamrita",
            h_cal: "Sarva Maasa (Year-Round Context)", e_cal: "Standard Deep Sky Observation",
            fact: "A deep-space collective beyond traditional Vedic ecliptic mapping. Revered through universal cosmic expansion texts. *[Flagged: Yet to know from officials]*"
        },
        desc: "The Southern Cross is the smallest constellation yet perhaps the most celebrated on Earth. It appears on five national flags and has guided southern navigators for centuries. Despite its tiny area, it blazes with two of the sky's top-20 brightest stars.",
        myth: "The Southern Cross was visible from the Mediterranean in classical antiquity but drifted below the horizon due to Earth's axial precession over millennia. It was re-encountered by European explorers in the 16th century — Amerigo Vespucci described it in 1503 — and named by Dutch navigator Petrus Plancius.",
        facts: ["Acrux (Alpha Crucis) is the 12th-brightest star — a triple system 320 light-years away, visible only below about latitude 27°N", "The Coalsack Nebula beside Crux is one of the most prominent dark nebulae — a vast dust cloud blotting out stars", "Pacific Island navigators used Crux as their southern compass star, analogous to Polaris in the northern sky", "Crux appears on the flags of Australia, New Zealand, Papua New Guinea, Brazil, and Samoa — the most flag-featured constellation"],
        stats: { Area: "68 sq°", "Main Stars": "4", Distance: "320 ly (Acrux)", Season: "Autumn" }, tags: ["Southern", "Iconic", "Navigation"]
    },

    {
        name: "Boötes", abbr: "Boo", latin: "The Herdsman", type: "north", ra: 14.7, dec: 31,
        stars: [{ n: "Arcturus", x: 0, y: -1 }, { n: "Izar", x: 0, y: 0.5 }, { n: "Muphrid", x: -0.9, y: -0.5 }, { n: "Seginus", x: -0.8, y: 1.2 }, { n: "Nekkar", x: 0.8, y: 1.3 }],
        lines: [[0, 3], [3, 4], [4, 1], [1, 3], [0, 2], [2, 1]],
        wiki: "https://en.wikipedia.org/wiki/Boötes",
        yt: "https://www.youtube.com/results?search_query=Boötes+constellation+mythology",
        vedic: {
            sanskrit: "विश्व प्रपंच (Cosmic Expanse)", dev: "ब्रह्माण्ड देवता (Cosmic Navagraha)", 
            s_mantra: "ॐ नमो नारायणाय", e_mantra: "Om Namo Narayanaya",
            color: "Deep Celestial Blue", flower: "Blue Lotus", food: "Panchamrita",
            h_cal: "Sarva Maasa (Year-Round Context)", e_cal: "Standard Deep Sky Observation",
            fact: "A deep-space collective beyond traditional Vedic ecliptic mapping. Revered through universal cosmic expansion texts. *[Flagged: Universal Map]*"
        },
        wiki: "https://en.wikipedia.org/wiki/Boötes",
        yt: "https://www.youtube.com/results?search_query=Boötes+constellation+mythology",
        vedic: {
            sanskrit: "विश्व प्रपंच (Cosmic Expanse)", dev: "ब्रह्माण्ड देवता (Cosmic Navagraha)", 
            s_mantra: "ॐ नमो नारायणाय", e_mantra: "Om Namo Narayanaya",
            color: "Deep Celestial Blue", flower: "Blue Lotus", food: "Panchamrita",
            h_cal: "Sarva Maasa (Year-Round Context)", e_cal: "Standard Deep Sky Observation",
            fact: "A deep-space collective beyond traditional Vedic ecliptic mapping. Revered through universal cosmic expansion texts. *[Flagged: Yet to know from officials]*"
        },
        desc: "Boötes the Herdsman is a large, kite-shaped constellation dominated by Arcturus — the fourth-brightest star in the night sky and the single brightest in the northern celestial hemisphere. The arc of the Big Dipper's handle leads directly to it.",
        myth: "Boötes is identified with Arcas, son of Zeus and Callisto, who nearly killed his bear-mother while hunting. Alternatively he is Icarius of Athens, taught to make wine by Dionysus. When shepherds who drank it thought they were poisoned, they killed him — the gods honored him with a place among the stars.",
        facts: ["Arcturus is a red giant 25× the Sun's radius and 113× more luminous, visible in full daylight with a telescope", "Arcturus moves across the sky at 2.28 arc-seconds per year relative to background stars — among the fastest-moving bright stars", "The Boötes Void is a nearly empty bubble of space approximately 330 million light-years across — one of the largest known cosmic voids", "Remember 'Arc to Arcturus, Speed on to Spica' — follow the Big Dipper's handle arc to find two of the sky's brightest stars"],
        stats: { Area: "907 sq°", "Main Stars": "7", Distance: "37 ly (Arcturus)", Season: "Spring/Summer" }, tags: ["Northern", "Arcturus", "Spring"]
    },

    {
        name: "Pegasus", abbr: "Peg", latin: "The Winged Horse", type: "north", ra: 22.7, dec: 19,
        stars: [{ n: "Markab", x: 0, y: 0 }, { n: "Scheat", x: 0, y: 1.6 }, { n: "Algenib", x: 1.6, y: 0 }, { n: "Enif", x: -1.8, y: 0.5 }, { n: "Homam", x: 0.6, y: -0.9 }],
        lines: [[0, 1], [0, 2], [0, 3], [0, 4]],
        wiki: "https://en.wikipedia.org/wiki/Pegasus",
        yt: "https://www.youtube.com/results?search_query=Pegasus+constellation+mythology",
        vedic: {
            sanskrit: "विश्व प्रपंच (Cosmic Expanse)", dev: "ब्रह्माण्ड देवता (Cosmic Navagraha)", 
            s_mantra: "ॐ नमो नारायणाय", e_mantra: "Om Namo Narayanaya",
            color: "Deep Celestial Blue", flower: "Blue Lotus", food: "Panchamrita",
            h_cal: "Sarva Maasa (Year-Round Context)", e_cal: "Standard Deep Sky Observation",
            fact: "A deep-space collective beyond traditional Vedic ecliptic mapping. Revered through universal cosmic expansion texts. *[Flagged: Universal Map]*"
        },
        wiki: "https://en.wikipedia.org/wiki/Pegasus",
        yt: "https://www.youtube.com/results?search_query=Pegasus+constellation+mythology",
        vedic: {
            sanskrit: "विश्व प्रपंच (Cosmic Expanse)", dev: "ब्रह्माण्ड देवता (Cosmic Navagraha)", 
            s_mantra: "ॐ नमो नारायणाय", e_mantra: "Om Namo Narayanaya",
            color: "Deep Celestial Blue", flower: "Blue Lotus", food: "Panchamrita",
            h_cal: "Sarva Maasa (Year-Round Context)", e_cal: "Standard Deep Sky Observation",
            fact: "A deep-space collective beyond traditional Vedic ecliptic mapping. Revered through universal cosmic expansion texts. *[Flagged: Yet to know from officials]*"
        },
        desc: "Pegasus the Winged Horse dominates autumn skies with the Great Square — a vast, nearly star-free quadrilateral that dominated ancient star charts. Pegasus played a pivotal role in exoplanet discovery history.",
        myth: "Pegasus sprang from the blood of Medusa when Perseus beheaded her. Bellerophon tamed him using a golden bridle given by Athena, and rode him to slay the fire-breathing Chimera. Growing proud, Bellerophon tried to fly to Olympus — Zeus sent a gadfly to unseat him.",
        facts: ["51 Pegasi was the first Sun-like star confirmed to host an exoplanet (51 Peg b, 1995) — the discovery that proved other solar systems exist", "This discovery earned Michel Mayor and Didier Queloz the 2019 Nobel Prize in Physics", "The Great Square covers 15° on a side — roughly the size of your fist held at arm's length, but remarkably empty inside", "The ancient globular cluster M15 — 12 billion years old and one of the densest known — lies just northwest of Pegasus"],
        stats: { Area: "1121 sq°", "Main Stars": "9", Distance: "133 ly", Season: "Autumn" }, tags: ["Northern", "Autumn", "Exoplanet"]
    },

    {
        name: "Aquarius", abbr: "Aqr", latin: "The Water Bearer", type: "south", zodiac: true, ra: 22.3, dec: -10,
        stars: [{ n: "Sadalsuud", x: -0.5, y: 0.5 }, { n: "Sadalmelik", x: 0.5, y: 0.5 }, { n: "Skat", x: 0.5, y: -0.5 }, { n: "Sadachbia", x: -0.5, y: -0.5 }, { n: "Zeta Aqr", x: 0, y: 0 }],
        lines: [[0, 4], [4, 1], [4, 2], [4, 3]],
        wiki: "https://en.wikipedia.org/wiki/Aquarius",
        yt: "https://www.youtube.com/results?search_query=Aquarius+constellation+mythology",
        vedic: {
            sanskrit: "Kumbha", dev: "Shani / Varuna", 
            s_mantra: "ॐ प्रां प्रीं प्रौं सः शनये नमः", e_mantra: "Om Praam Preem Proum Sah Shanaye Namaha",
            color: "Electric Blue", flower: "Blue Lotus / Aparajita", food: "Urad Dal",
            h_cal: "Magha (January - February)", e_cal: "Autumn",
            fact: "The mystical water bearer, dissolving worldly attachments and sharing cosmic knowledge."
        },
        wiki: "https://en.wikipedia.org/wiki/Aquarius",
        yt: "https://www.youtube.com/results?search_query=Aquarius+constellation+mythology",
        vedic: {
            sanskrit: "Kumbha", dev: "Shani / Varuna", 
            s_mantra: "ॐ प्रां प्रीं प्रौं सः शनये नमः", e_mantra: "Om Praam Preem Proum Sah Shanaye Namaha",
            color: "Electric Blue", flower: "Blue Lotus / Aparajita", food: "Urad Dal",
            h_cal: "Magha (January - February)", e_cal: "Autumn",
            fact: "The mystical water bearer, dissolving worldly attachments and sharing cosmic knowledge."
        },
        desc: "Aquarius is one of the oldest recognized zodiacal constellations, known across many ancient cultures as the bearer of water, knowledge, and life. It contains the Helix Nebula — the closest planetary nebula to Earth — nicknamed the 'Eye of God.'",
        myth: "Aquarius is identified with Ganymede, the beautiful Trojan prince abducted by Zeus in the form of his eagle (Aquila). Ganymede was brought to Olympus to serve as eternal cup-bearer to the gods, pouring water and ambrosia for the immortals.",
        facts: ["The Helix Nebula (NGC 7293) is the closest planetary nebula to Earth at about 650 light-years — a dying Sun-like star's glowing remnant", "The Helix is 2.87 light-years in diameter — wide enough that it would span from the Sun to beyond the Alpha Centauri system", "Sadalsuud means 'luckiest of the lucky' in Arabic, named for its association with the return of life-giving spring rains in ancient Mesopotamia", "Both the May Eta Aquarid and July Delta Aquarid meteor showers radiate from this constellation"],
        stats: { Area: "980 sq°", "Main Stars": "10", Distance: "520 ly", Season: "Autumn" }, tags: ["Zodiac", "Ancient", "Southern"]
    },

    {
        name: "Antlia", abbr: "Ant", latin: "The Air Pump", type: "south", ra: 10, dec: -30,
        stars: [{ "n": "AlphaU", "x": 0.05, "y": -0.18 }, { "n": "", "x": 1.05, "y": -0.49 }, { "n": "", "x": -0.59, "y": -0.87 }, { "n": "", "x": -1.29, "y": -0.59 }, { "n": "", "x": -1.23, "y": 0.34 }, { "n": "", "x": 0.46, "y": 1.04 }],
        lines: [[0, 4], [4, 3], [4, 2], [0, 1], [3, 5], [5, 4], [1, 5]],
        wiki: "https://en.wikipedia.org/wiki/Antlia",
        yt: "https://www.youtube.com/results?search_query=Antlia+constellation+mythology",
        vedic: {
            sanskrit: "विश्व प्रपंच (Cosmic Expanse)", dev: "ब्रह्माण्ड देवता (Cosmic Navagraha)", 
            s_mantra: "ॐ नमो नारायणाय", e_mantra: "Om Namo Narayanaya",
            color: "Deep Celestial Blue", flower: "Blue Lotus", food: "Panchamrita",
            h_cal: "Sarva Maasa (Year-Round Context)", e_cal: "Standard Deep Sky Observation",
            fact: "A deep-space collective beyond traditional Vedic ecliptic mapping. Revered through universal cosmic expansion texts. *[Flagged: Universal Map]*"
        },
        wiki: "https://en.wikipedia.org/wiki/Antlia",
        yt: "https://www.youtube.com/results?search_query=Antlia+constellation+mythology",
        vedic: {
            sanskrit: "विश्व प्रपंच (Cosmic Expanse)", dev: "ब्रह्माण्ड देवता (Cosmic Navagraha)", 
            s_mantra: "ॐ नमो नारायणाय", e_mantra: "Om Namo Narayanaya",
            color: "Deep Celestial Blue", flower: "Blue Lotus", food: "Panchamrita",
            h_cal: "Sarva Maasa (Year-Round Context)", e_cal: "Standard Deep Sky Observation",
            fact: "A deep-space collective beyond traditional Vedic ecliptic mapping. Revered through universal cosmic expansion texts. *[Flagged: Yet to know from officials]*"
        },
        desc: "Antlia is one of the 88 modern constellations defined by the IAU.",
        myth: "Known since classical antiquity, this constellation is rich in history and lore. The Air Pump marks its place in the heavens.",
        facts: ["Officially recognized by the International Astronomical Union in 1922.", "Covers the sky at approximately RA 10h and Dec -30°."],
        stats: { Area: "Varies", "Main Stars": "6", Distance: "Varies", Season: "Varies" }, tags: ["South", "IAU"]
    },

    {
        name: "Apus", abbr: "Aps", latin: "The Bird of Paradise", type: "south", ra: 16, dec: -75,
        stars: [{ "n": "AlphaT", "x": -0.43, "y": -0.29 }, { "n": "", "x": -1.11, "y": -0.4 }, { "n": "", "x": 0.62, "y": -0.68 }, { "n": "", "x": -0.59, "y": 0.98 }, { "n": "", "x": 1.43, "y": 1.0 }],
        lines: [[0, 3], [0, 1], [3, 4], [3, 2], [4, 1], [2, 0]],
        wiki: "https://en.wikipedia.org/wiki/Apus",
        yt: "https://www.youtube.com/results?search_query=Apus+constellation+mythology",
        vedic: {
            sanskrit: "विश्व प्रपंच (Cosmic Expanse)", dev: "ब्रह्माण्ड देवता (Cosmic Navagraha)", 
            s_mantra: "ॐ नमो नारायणाय", e_mantra: "Om Namo Narayanaya",
            color: "Deep Celestial Blue", flower: "Blue Lotus", food: "Panchamrita",
            h_cal: "Sarva Maasa (Year-Round Context)", e_cal: "Standard Deep Sky Observation",
            fact: "A deep-space collective beyond traditional Vedic ecliptic mapping. Revered through universal cosmic expansion texts. *[Flagged: Universal Map]*"
        },
        wiki: "https://en.wikipedia.org/wiki/Apus",
        yt: "https://www.youtube.com/results?search_query=Apus+constellation+mythology",
        vedic: {
            sanskrit: "विश्व प्रपंच (Cosmic Expanse)", dev: "ब्रह्माण्ड देवता (Cosmic Navagraha)", 
            s_mantra: "ॐ नमो नारायणाय", e_mantra: "Om Namo Narayanaya",
            color: "Deep Celestial Blue", flower: "Blue Lotus", food: "Panchamrita",
            h_cal: "Sarva Maasa (Year-Round Context)", e_cal: "Standard Deep Sky Observation",
            fact: "A deep-space collective beyond traditional Vedic ecliptic mapping. Revered through universal cosmic expansion texts. *[Flagged: Yet to know from officials]*"
        },
        desc: "Apus is one of the 88 modern constellations defined by the IAU.",
        myth: "Known since classical antiquity, this constellation is rich in history and lore. The Bird of Paradise marks its place in the heavens.",
        facts: ["Officially recognized by the International Astronomical Union in 1922.", "Covers the sky at approximately RA 16h and Dec -75°."],
        stats: { Area: "Varies", "Main Stars": "5", Distance: "Varies", Season: "Varies" }, tags: ["South", "IAU"]
    },

    {
        name: "Ara", abbr: "Ara", latin: "The Altar", type: "south", ra: 17, dec: -55,
        stars: [{ "n": "AlphaB", "x": -0.09, "y": 0.39 }, { "n": "", "x": -1.23, "y": 1.41 }, { "n": "", "x": -1.1, "y": 1.32 }, { "n": "", "x": -0.97, "y": -1.44 }, { "n": "", "x": -0.03, "y": -1.18 }, { "n": "", "x": -0.45, "y": -1.4 }, { "n": "", "x": 1.18, "y": 0.22 }, { "n": "", "x": 1.45, "y": 0.87 }],
        lines: [[0, 2], [0, 3], [2, 6], [0, 4], [2, 5], [6, 1], [1, 7]],
        wiki: "https://en.wikipedia.org/wiki/Ara",
        yt: "https://www.youtube.com/results?search_query=Ara+constellation+mythology",
        vedic: {
            sanskrit: "विश्व प्रपंच (Cosmic Expanse)", dev: "ब्रह्माण्ड देवता (Cosmic Navagraha)", 
            s_mantra: "ॐ नमो नारायणाय", e_mantra: "Om Namo Narayanaya",
            color: "Deep Celestial Blue", flower: "Blue Lotus", food: "Panchamrita",
            h_cal: "Sarva Maasa (Year-Round Context)", e_cal: "Standard Deep Sky Observation",
            fact: "A deep-space collective beyond traditional Vedic ecliptic mapping. Revered through universal cosmic expansion texts. *[Flagged: Universal Map]*"
        },
        wiki: "https://en.wikipedia.org/wiki/Ara",
        yt: "https://www.youtube.com/results?search_query=Ara+constellation+mythology",
        vedic: {
            sanskrit: "विश्व प्रपंच (Cosmic Expanse)", dev: "ब्रह्माण्ड देवता (Cosmic Navagraha)", 
            s_mantra: "ॐ नमो नारायणाय", e_mantra: "Om Namo Narayanaya",
            color: "Deep Celestial Blue", flower: "Blue Lotus", food: "Panchamrita",
            h_cal: "Sarva Maasa (Year-Round Context)", e_cal: "Standard Deep Sky Observation",
            fact: "A deep-space collective beyond traditional Vedic ecliptic mapping. Revered through universal cosmic expansion texts. *[Flagged: Yet to know from officials]*"
        },
        desc: "Ara is one of the 88 modern constellations defined by the IAU.",
        myth: "Known since classical antiquity, this constellation is rich in history and lore. The Altar marks its place in the heavens.",
        facts: ["Officially recognized by the International Astronomical Union in 1922.", "Covers the sky at approximately RA 17h and Dec -55°."],
        stats: { Area: "Varies", "Main Stars": "8", Distance: "Varies", Season: "Varies" }, tags: ["South", "IAU"]
    },

    {
        name: "Aries", abbr: "Ari", latin: "The Ram", type: "north", zodiac: true, ra: 3, dec: 20,
        stars: [{ "n": "AlphaU", "x": -0.39, "y": 0.49 }, { "n": "", "x": 1.15, "y": 0.49 }, { "n": "", "x": -0.02, "y": -0.32 }, { "n": "", "x": 0.6, "y": 0.5 }, { "n": "", "x": 0.27, "y": -0.13 }, { "n": "", "x": -1.48, "y": 0.51 }, { "n": "", "x": -0.82, "y": 0.2 }, { "n": "", "x": -1.3, "y": -0.65 }, { "n": "", "x": -0.77, "y": -0.23 }, { "n": "", "x": -0.63, "y": 0.15 }],
        lines: [[0, 5], [0, 4], [0, 1], [0, 6], [4, 9], [1, 8], [6, 2], [9, 7], [1, 3], [8, 4], [5, 1], [0, 8]],
        wiki: "https://en.wikipedia.org/wiki/Aries",
        yt: "https://www.youtube.com/results?search_query=Aries+constellation+mythology",
        vedic: {
            sanskrit: "Mesha Rashi", dev: "Mangala (Mars)", 
            s_mantra: "ॐ क्रां क्रीं क्रौं सः भौमाय नमः", e_mantra: "Om Kram Kreem Kroum Sah Bhaumaya Namaha",
            color: "Deep Red / Coral", flower: "Red Oleander (Gudhal)", food: "Jaggery & Toor Dal",
            h_cal: "Chaitra (March - April)", e_cal: "Autumn / Early Winter",
            fact: "The fiery celestial ram, signifying universal initiation, courage, and raw cosmic energy."
        },
        wiki: "https://en.wikipedia.org/wiki/Aries",
        yt: "https://www.youtube.com/results?search_query=Aries+constellation+mythology",
        vedic: {
            sanskrit: "Mesha Rashi", dev: "Mangala (Mars)", 
            s_mantra: "ॐ क्रां क्रीं क्रौं सः भौमाय नमः", e_mantra: "Om Kram Kreem Kroum Sah Bhaumaya Namaha",
            color: "Deep Red / Coral", flower: "Red Oleander (Gudhal)", food: "Jaggery & Toor Dal",
            h_cal: "Chaitra (March - April)", e_cal: "Autumn / Early Winter",
            fact: "The fiery celestial ram, signifying universal initiation, courage, and raw cosmic energy."
        },
        desc: "Aries is one of the 88 modern constellations defined by the IAU.",
        myth: "Known since classical antiquity, this constellation is rich in history and lore. The Ram marks its place in the heavens.",
        facts: ["Officially recognized by the International Astronomical Union in 1922.", "Covers the sky at approximately RA 3h and Dec 20°."],
        stats: { Area: "Varies", "Main Stars": "10", Distance: "Varies", Season: "Varies" }, tags: ["North", "IAU"]
    },

    {
        name: "Auriga", abbr: "Aur", latin: "The Charioteer", type: "north", ra: 6, dec: 40,
        stars: [{ "n": "AlphaN", "x": -0.36, "y": -0.03 }, { "n": "", "x": 0.31, "y": 1.22 }, { "n": "", "x": -1.04, "y": -1.08 }, { "n": "", "x": 0.74, "y": -0.28 }, { "n": "", "x": 0.44, "y": -0.76 }, { "n": "", "x": 0.61, "y": 0.89 }],
        lines: [[0, 1], [0, 2], [2, 4], [1, 5], [4, 3], [1, 2]],
        wiki: "https://en.wikipedia.org/wiki/Auriga",
        yt: "https://www.youtube.com/results?search_query=Auriga+constellation+mythology",
        vedic: {
            sanskrit: "विश्व प्रपंच (Cosmic Expanse)", dev: "ब्रह्माण्ड देवता (Cosmic Navagraha)", 
            s_mantra: "ॐ नमो नारायणाय", e_mantra: "Om Namo Narayanaya",
            color: "Deep Celestial Blue", flower: "Blue Lotus", food: "Panchamrita",
            h_cal: "Sarva Maasa (Year-Round Context)", e_cal: "Standard Deep Sky Observation",
            fact: "A deep-space collective beyond traditional Vedic ecliptic mapping. Revered through universal cosmic expansion texts. *[Flagged: Universal Map]*"
        },
        wiki: "https://en.wikipedia.org/wiki/Auriga",
        yt: "https://www.youtube.com/results?search_query=Auriga+constellation+mythology",
        vedic: {
            sanskrit: "विश्व प्रपंच (Cosmic Expanse)", dev: "ब्रह्माण्ड देवता (Cosmic Navagraha)", 
            s_mantra: "ॐ नमो नारायणाय", e_mantra: "Om Namo Narayanaya",
            color: "Deep Celestial Blue", flower: "Blue Lotus", food: "Panchamrita",
            h_cal: "Sarva Maasa (Year-Round Context)", e_cal: "Standard Deep Sky Observation",
            fact: "A deep-space collective beyond traditional Vedic ecliptic mapping. Revered through universal cosmic expansion texts. *[Flagged: Yet to know from officials]*"
        },
        desc: "Auriga is one of the 88 modern constellations defined by the IAU.",
        myth: "Known since classical antiquity, this constellation is rich in history and lore. The Charioteer marks its place in the heavens.",
        facts: ["Officially recognized by the International Astronomical Union in 1922.", "Covers the sky at approximately RA 6h and Dec 40°."],
        stats: { Area: "Varies", "Main Stars": "6", Distance: "Varies", Season: "Varies" }, tags: ["North", "IAU"]
    },

    {
        name: "Caelum", abbr: "Cae", latin: "The Chisel", type: "south", ra: 4, dec: -40,
        stars: [{ "n": "AlphaR", "x": 0.48, "y": 0.25 }, { "n": "", "x": 0.0, "y": 0.08 }, { "n": "", "x": -0.86, "y": 0.83 }, { "n": "", "x": 0.71, "y": 1.28 }, { "n": "", "x": -1.21, "y": -1.46 }, { "n": "", "x": -1.12, "y": 0.32 }, { "n": "", "x": -0.15, "y": -1.29 }, { "n": "", "x": 0.08, "y": -0.48 }, { "n": "", "x": -0.31, "y": -1.37 }, { "n": "", "x": 1.32, "y": -0.59 }],
        lines: [[0, 5], [0, 6], [6, 2], [6, 7], [0, 8], [5, 3], [3, 1], [3, 9], [3, 4], [1, 2], [6, 9]],
        wiki: "https://en.wikipedia.org/wiki/Caelum",
        yt: "https://www.youtube.com/results?search_query=Caelum+constellation+mythology",
        vedic: {
            sanskrit: "विश्व प्रपंच (Cosmic Expanse)", dev: "ब्रह्माण्ड देवता (Cosmic Navagraha)", 
            s_mantra: "ॐ नमो नारायणाय", e_mantra: "Om Namo Narayanaya",
            color: "Deep Celestial Blue", flower: "Blue Lotus", food: "Panchamrita",
            h_cal: "Sarva Maasa (Year-Round Context)", e_cal: "Standard Deep Sky Observation",
            fact: "A deep-space collective beyond traditional Vedic ecliptic mapping. Revered through universal cosmic expansion texts. *[Flagged: Universal Map]*"
        },
        wiki: "https://en.wikipedia.org/wiki/Caelum",
        yt: "https://www.youtube.com/results?search_query=Caelum+constellation+mythology",
        vedic: {
            sanskrit: "विश्व प्रपंच (Cosmic Expanse)", dev: "ब्रह्माण्ड देवता (Cosmic Navagraha)", 
            s_mantra: "ॐ नमो नारायणाय", e_mantra: "Om Namo Narayanaya",
            color: "Deep Celestial Blue", flower: "Blue Lotus", food: "Panchamrita",
            h_cal: "Sarva Maasa (Year-Round Context)", e_cal: "Standard Deep Sky Observation",
            fact: "A deep-space collective beyond traditional Vedic ecliptic mapping. Revered through universal cosmic expansion texts. *[Flagged: Yet to know from officials]*"
        },
        desc: "Caelum is one of the 88 modern constellations defined by the IAU.",
        myth: "Known since classical antiquity, this constellation is rich in history and lore. The Chisel marks its place in the heavens.",
        facts: ["Officially recognized by the International Astronomical Union in 1922.", "Covers the sky at approximately RA 4h and Dec -40°."],
        stats: { Area: "Varies", "Main Stars": "10", Distance: "Varies", Season: "Varies" }, tags: ["South", "IAU"]
    },

    {
        name: "Camelopardalis", abbr: "Cam", latin: "The Giraffe", type: "north", ra: 6, dec: 70,
        stars: [{ "n": "AlphaS", "x": 0.06, "y": -0.42 }, { "n": "", "x": 0.9, "y": -1.07 }, { "n": "", "x": -1.38, "y": -0.53 }, { "n": "", "x": -0.94, "y": -1.4 }, { "n": "", "x": 0.13, "y": -0.3 }, { "n": "", "x": 0.55, "y": -0.33 }, { "n": "", "x": -0.82, "y": 1.08 }, { "n": "", "x": -1.28, "y": 0.63 }, { "n": "", "x": -1.19, "y": -0.46 }, { "n": "", "x": -0.77, "y": 0.94 }],
        lines: [[0, 8], [0, 6], [8, 2], [2, 5], [5, 3], [5, 7], [6, 4], [0, 1], [1, 9], [3, 0]],
        wiki: "https://en.wikipedia.org/wiki/Camelopardalis",
        yt: "https://www.youtube.com/results?search_query=Camelopardalis+constellation+mythology",
        vedic: {
            sanskrit: "विश्व प्रपंच (Cosmic Expanse)", dev: "ब्रह्माण्ड देवता (Cosmic Navagraha)", 
            s_mantra: "ॐ नमो नारायणाय", e_mantra: "Om Namo Narayanaya",
            color: "Deep Celestial Blue", flower: "Blue Lotus", food: "Panchamrita",
            h_cal: "Sarva Maasa (Year-Round Context)", e_cal: "Standard Deep Sky Observation",
            fact: "A deep-space collective beyond traditional Vedic ecliptic mapping. Revered through universal cosmic expansion texts. *[Flagged: Universal Map]*"
        },
        wiki: "https://en.wikipedia.org/wiki/Camelopardalis",
        yt: "https://www.youtube.com/results?search_query=Camelopardalis+constellation+mythology",
        vedic: {
            sanskrit: "विश्व प्रपंच (Cosmic Expanse)", dev: "ब्रह्माण्ड देवता (Cosmic Navagraha)", 
            s_mantra: "ॐ नमो नारायणाय", e_mantra: "Om Namo Narayanaya",
            color: "Deep Celestial Blue", flower: "Blue Lotus", food: "Panchamrita",
            h_cal: "Sarva Maasa (Year-Round Context)", e_cal: "Standard Deep Sky Observation",
            fact: "A deep-space collective beyond traditional Vedic ecliptic mapping. Revered through universal cosmic expansion texts. *[Flagged: Yet to know from officials]*"
        },
        desc: "Camelopardalis is one of the 88 modern constellations defined by the IAU.",
        myth: "Known since classical antiquity, this constellation is rich in history and lore. The Giraffe marks its place in the heavens.",
        facts: ["Officially recognized by the International Astronomical Union in 1922.", "Covers the sky at approximately RA 6h and Dec 70°."],
        stats: { Area: "Varies", "Main Stars": "10", Distance: "Varies", Season: "Varies" }, tags: ["North", "IAU"]
    },

    {
        name: "Cancer", abbr: "Cnc", latin: "The Crab", type: "north", zodiac: true, ra: 9, dec: 20,
        stars: [{ "n": "AlphaZ", "x": 0.05, "y": 0.05 }, { "n": "", "x": 1.12, "y": -0.54 }, { "n": "", "x": -0.44, "y": -0.96 }, { "n": "", "x": -0.12, "y": -0.44 }, { "n": "", "x": 1.37, "y": -0.78 }, { "n": "", "x": -0.88, "y": -1.24 }, { "n": "", "x": -0.55, "y": -0.61 }, { "n": "", "x": -0.73, "y": -1.19 }, { "n": "", "x": -0.94, "y": -1.04 }],
        lines: [[0, 1], [0, 6], [1, 8], [6, 7], [6, 2], [8, 5], [6, 4], [0, 3], [7, 0]],
        wiki: "https://en.wikipedia.org/wiki/Cancer",
        yt: "https://www.youtube.com/results?search_query=Cancer+constellation+mythology",
        vedic: {
            sanskrit: "Karka / Pushya", dev: "Chandra (Moon)", 
            s_mantra: "ॐ श्रां श्रीं श्रौं सः चन्द्राय नमः", e_mantra: "Om Shraam Shreem Shroum Sah Chandraya Namaha",
            color: "Pearl White / Silver", flower: "White Lily", food: "Milk, Rice & Sugar",
            h_cal: "Ashadha (June - July)", e_cal: "Late Winter / Spring",
            fact: "The nurturing heart of the celestial waters. Pushya represents spiritual nourishment."
        },
        wiki: "https://en.wikipedia.org/wiki/Cancer",
        yt: "https://www.youtube.com/results?search_query=Cancer+constellation+mythology",
        vedic: {
            sanskrit: "Karka / Pushya", dev: "Chandra (Moon)", 
            s_mantra: "ॐ श्रां श्रीं श्रौं सः चन्द्राय नमः", e_mantra: "Om Shraam Shreem Shroum Sah Chandraya Namaha",
            color: "Pearl White / Silver", flower: "White Lily", food: "Milk, Rice & Sugar",
            h_cal: "Ashadha (June - July)", e_cal: "Late Winter / Spring",
            fact: "The nurturing heart of the celestial waters. Pushya represents spiritual nourishment."
        },
        desc: "Cancer is one of the 88 modern constellations defined by the IAU.",
        myth: "Known since classical antiquity, this constellation is rich in history and lore. The Crab marks its place in the heavens.",
        facts: ["Officially recognized by the International Astronomical Union in 1922.", "Covers the sky at approximately RA 9h and Dec 20°."],
        stats: { Area: "Varies", "Main Stars": "9", Distance: "Varies", Season: "Varies" }, tags: ["North", "IAU"]
    },

    {
        name: "Canes Venatici", abbr: "CVn", latin: "The Hunting Dogs", type: "north", ra: 13, dec: 40,
        stars: [{ "n": "AlphaK", "x": -0.36, "y": 0.23 }, { "n": "", "x": 1.44, "y": -0.46 }, { "n": "", "x": -1.38, "y": 0.91 }, { "n": "", "x": 1.11, "y": 1.42 }, { "n": "", "x": -0.08, "y": 0.77 }, { "n": "", "x": 0.46, "y": -1.0 }, { "n": "", "x": 0.39, "y": -1.06 }, { "n": "", "x": -1.16, "y": -1.3 }, { "n": "", "x": -0.55, "y": 1.2 }],
        lines: [[0, 2], [2, 5], [5, 3], [5, 1], [1, 7], [5, 6], [3, 8], [2, 4], [0, 6], [5, 8]],
        wiki: "https://en.wikipedia.org/wiki/Canes_Venatici",
        yt: "https://www.youtube.com/results?search_query=Canes+Venatici+constellation+mythology",
        vedic: {
            sanskrit: "विश्व प्रपंच (Cosmic Expanse)", dev: "ब्रह्माण्ड देवता (Cosmic Navagraha)", 
            s_mantra: "ॐ नमो नारायणाय", e_mantra: "Om Namo Narayanaya",
            color: "Deep Celestial Blue", flower: "Blue Lotus", food: "Panchamrita",
            h_cal: "Sarva Maasa (Year-Round Context)", e_cal: "Standard Deep Sky Observation",
            fact: "A deep-space collective beyond traditional Vedic ecliptic mapping. Revered through universal cosmic expansion texts. *[Flagged: Universal Map]*"
        },
        wiki: "https://en.wikipedia.org/wiki/Canes_Venatici",
        yt: "https://www.youtube.com/results?search_query=Canes+Venatici+constellation+mythology",
        vedic: {
            sanskrit: "विश्व प्रपंच (Cosmic Expanse)", dev: "ब्रह्माण्ड देवता (Cosmic Navagraha)", 
            s_mantra: "ॐ नमो नारायणाय", e_mantra: "Om Namo Narayanaya",
            color: "Deep Celestial Blue", flower: "Blue Lotus", food: "Panchamrita",
            h_cal: "Sarva Maasa (Year-Round Context)", e_cal: "Standard Deep Sky Observation",
            fact: "A deep-space collective beyond traditional Vedic ecliptic mapping. Revered through universal cosmic expansion texts. *[Flagged: Yet to know from officials]*"
        },
        desc: "Canes Venatici is one of the 88 modern constellations defined by the IAU.",
        myth: "Known since classical antiquity, this constellation is rich in history and lore. The Hunting Dogs marks its place in the heavens.",
        facts: ["Officially recognized by the International Astronomical Union in 1922.", "Covers the sky at approximately RA 13h and Dec 40°."],
        stats: { Area: "Varies", "Main Stars": "9", Distance: "Varies", Season: "Varies" }, tags: ["North", "IAU"]
    },

    {
        name: "Canis Minor", abbr: "CMi", latin: "The Lesser Dog", type: "north", ra: 7, dec: 5,
        stars: [{ "n": "AlphaN", "x": -0.45, "y": 0.19 }, { "n": "", "x": 0.61, "y": 0.43 }, { "n": "", "x": -1.03, "y": -0.89 }, { "n": "", "x": -0.36, "y": 1.08 }, { "n": "", "x": -0.07, "y": -0.03 }, { "n": "", "x": -1.28, "y": -0.87 }, { "n": "", "x": 0.93, "y": 0.51 }, { "n": "", "x": 0.28, "y": 1.42 }, { "n": "", "x": -0.39, "y": 0.92 }],
        lines: [[0, 1], [0, 7], [0, 2], [7, 4], [0, 6], [6, 3], [1, 8], [2, 5], [5, 3]],
        wiki: "https://en.wikipedia.org/wiki/Canis_Minor",
        yt: "https://www.youtube.com/results?search_query=Canis+Minor+constellation+mythology",
        vedic: {
            sanskrit: "विश्व प्रपंच (Cosmic Expanse)", dev: "ब्रह्माण्ड देवता (Cosmic Navagraha)", 
            s_mantra: "ॐ नमो नारायणाय", e_mantra: "Om Namo Narayanaya",
            color: "Deep Celestial Blue", flower: "Blue Lotus", food: "Panchamrita",
            h_cal: "Sarva Maasa (Year-Round Context)", e_cal: "Standard Deep Sky Observation",
            fact: "A deep-space collective beyond traditional Vedic ecliptic mapping. Revered through universal cosmic expansion texts. *[Flagged: Universal Map]*"
        },
        wiki: "https://en.wikipedia.org/wiki/Canis_Minor",
        yt: "https://www.youtube.com/results?search_query=Canis+Minor+constellation+mythology",
        vedic: {
            sanskrit: "विश्व प्रपंच (Cosmic Expanse)", dev: "ब्रह्माण्ड देवता (Cosmic Navagraha)", 
            s_mantra: "ॐ नमो नारायणाय", e_mantra: "Om Namo Narayanaya",
            color: "Deep Celestial Blue", flower: "Blue Lotus", food: "Panchamrita",
            h_cal: "Sarva Maasa (Year-Round Context)", e_cal: "Standard Deep Sky Observation",
            fact: "A deep-space collective beyond traditional Vedic ecliptic mapping. Revered through universal cosmic expansion texts. *[Flagged: Yet to know from officials]*"
        },
        desc: "Canis Minor is one of the 88 modern constellations defined by the IAU.",
        myth: "Known since classical antiquity, this constellation is rich in history and lore. The Lesser Dog marks its place in the heavens.",
        facts: ["Officially recognized by the International Astronomical Union in 1922.", "Covers the sky at approximately RA 7h and Dec 5°."],
        stats: { Area: "Varies", "Main Stars": "9", Distance: "Varies", Season: "Varies" }, tags: ["North", "IAU"]
    },

    {
        name: "Capricornus", abbr: "Cap", latin: "The Sea Goat", type: "south", zodiac: true, ra: 21, dec: -20,
        stars: [{ "n": "AlphaS", "x": -0.03, "y": -0.13 }, { "n": "", "x": 1.01, "y": -0.48 }, { "n": "", "x": -1.05, "y": -0.63 }, { "n": "", "x": -1.35, "y": -1.03 }, { "n": "", "x": -0.25, "y": -0.27 }, { "n": "", "x": -0.86, "y": -1.49 }, { "n": "", "x": -1.33, "y": 0.17 }, { "n": "", "x": 0.54, "y": 0.34 }, { "n": "", "x": 0.88, "y": -1.12 }],
        lines: [[0, 2], [0, 5], [2, 4], [0, 3], [2, 7], [2, 6], [3, 8], [4, 1]],
        wiki: "https://en.wikipedia.org/wiki/Capricornus",
        yt: "https://www.youtube.com/results?search_query=Capricornus+constellation+mythology",
        vedic: {
            sanskrit: "Makara", dev: "Shani (Saturn)", 
            s_mantra: "ॐ प्रां प्रीं प्रौं सः शनये नमः", e_mantra: "Om Praam Preem Proum Sah Shanaye Namaha",
            color: "Black / Dark Blue", flower: "Blue Sapphire / Aparajita", food: "Black Sesame & Oil",
            h_cal: "Pausha (December - January)", e_cal: "Autumn",
            fact: "The celestial sea-monster presiding over structured karma, patience, and time bounds."
        },
        wiki: "https://en.wikipedia.org/wiki/Capricornus",
        yt: "https://www.youtube.com/results?search_query=Capricornus+constellation+mythology",
        vedic: {
            sanskrit: "Makara", dev: "Shani (Saturn)", 
            s_mantra: "ॐ प्रां प्रीं प्रौं सः शनये नमः", e_mantra: "Om Praam Preem Proum Sah Shanaye Namaha",
            color: "Black / Dark Blue", flower: "Blue Sapphire / Aparajita", food: "Black Sesame & Oil",
            h_cal: "Pausha (December - January)", e_cal: "Autumn",
            fact: "The celestial sea-monster presiding over structured karma, patience, and time bounds."
        },
        desc: "Capricornus is one of the 88 modern constellations defined by the IAU.",
        myth: "Known since classical antiquity, this constellation is rich in history and lore. The Sea Goat marks its place in the heavens.",
        facts: ["Officially recognized by the International Astronomical Union in 1922.", "Covers the sky at approximately RA 21h and Dec -20°."],
        stats: { Area: "Varies", "Main Stars": "9", Distance: "Varies", Season: "Varies" }, tags: ["South", "IAU"]
    },

    {
        name: "Carina", abbr: "Car", latin: "The Keel", type: "south", ra: 9, dec: -60,
        stars: [{ "n": "AlphaL", "x": 0.07, "y": 0.22 }, { "n": "", "x": 0.06, "y": -0.84 }, { "n": "", "x": -0.0, "y": 0.6 }, { "n": "", "x": 0.38, "y": -0.77 }, { "n": "", "x": 1.41, "y": -0.42 }, { "n": "", "x": 1.18, "y": 1.47 }, { "n": "", "x": 1.07, "y": -1.23 }],
        lines: [[0, 2], [2, 3], [3, 6], [6, 4], [2, 5], [3, 1]],
        wiki: "https://en.wikipedia.org/wiki/Carina",
        yt: "https://www.youtube.com/results?search_query=Carina+constellation+mythology",
        vedic: {
            sanskrit: "विश्व प्रपंच (Cosmic Expanse)", dev: "ब्रह्माण्ड देवता (Cosmic Navagraha)", 
            s_mantra: "ॐ नमो नारायणाय", e_mantra: "Om Namo Narayanaya",
            color: "Deep Celestial Blue", flower: "Blue Lotus", food: "Panchamrita",
            h_cal: "Sarva Maasa (Year-Round Context)", e_cal: "Standard Deep Sky Observation",
            fact: "A deep-space collective beyond traditional Vedic ecliptic mapping. Revered through universal cosmic expansion texts. *[Flagged: Universal Map]*"
        },
        wiki: "https://en.wikipedia.org/wiki/Carina",
        yt: "https://www.youtube.com/results?search_query=Carina+constellation+mythology",
        vedic: {
            sanskrit: "विश्व प्रपंच (Cosmic Expanse)", dev: "ब्रह्माण्ड देवता (Cosmic Navagraha)", 
            s_mantra: "ॐ नमो नारायणाय", e_mantra: "Om Namo Narayanaya",
            color: "Deep Celestial Blue", flower: "Blue Lotus", food: "Panchamrita",
            h_cal: "Sarva Maasa (Year-Round Context)", e_cal: "Standard Deep Sky Observation",
            fact: "A deep-space collective beyond traditional Vedic ecliptic mapping. Revered through universal cosmic expansion texts. *[Flagged: Yet to know from officials]*"
        },
        desc: "Carina is one of the 88 modern constellations defined by the IAU.",
        myth: "Known since classical antiquity, this constellation is rich in history and lore. The Keel marks its place in the heavens.",
        facts: ["Officially recognized by the International Astronomical Union in 1922.", "Covers the sky at approximately RA 9h and Dec -60°."],
        stats: { Area: "Varies", "Main Stars": "7", Distance: "Varies", Season: "Varies" }, tags: ["South", "IAU"]
    },

    {
        name: "Cepheus", abbr: "Cep", latin: "The King", type: "north", ra: 22, dec: 70,
        stars: [{ "n": "AlphaN", "x": -0.16, "y": 0.21 }, { "n": "", "x": 0.96, "y": -0.92 }, { "n": "", "x": 0.08, "y": 1.25 }, { "n": "", "x": 1.01, "y": 0.74 }, { "n": "", "x": 0.1, "y": 0.22 }, { "n": "", "x": -1.33, "y": -0.27 }, { "n": "", "x": -0.44, "y": 0.92 }],
        lines: [[0, 4], [0, 6], [0, 3], [4, 5], [5, 2], [6, 1]],
        wiki: "https://en.wikipedia.org/wiki/Cepheus",
        yt: "https://www.youtube.com/results?search_query=Cepheus+constellation+mythology",
        vedic: {
            sanskrit: "विश्व प्रपंच (Cosmic Expanse)", dev: "ब्रह्माण्ड देवता (Cosmic Navagraha)", 
            s_mantra: "ॐ नमो नारायणाय", e_mantra: "Om Namo Narayanaya",
            color: "Deep Celestial Blue", flower: "Blue Lotus", food: "Panchamrita",
            h_cal: "Sarva Maasa (Year-Round Context)", e_cal: "Standard Deep Sky Observation",
            fact: "A deep-space collective beyond traditional Vedic ecliptic mapping. Revered through universal cosmic expansion texts. *[Flagged: Universal Map]*"
        },
        wiki: "https://en.wikipedia.org/wiki/Cepheus",
        yt: "https://www.youtube.com/results?search_query=Cepheus+constellation+mythology",
        vedic: {
            sanskrit: "विश्व प्रपंच (Cosmic Expanse)", dev: "ब्रह्माण्ड देवता (Cosmic Navagraha)", 
            s_mantra: "ॐ नमो नारायणाय", e_mantra: "Om Namo Narayanaya",
            color: "Deep Celestial Blue", flower: "Blue Lotus", food: "Panchamrita",
            h_cal: "Sarva Maasa (Year-Round Context)", e_cal: "Standard Deep Sky Observation",
            fact: "A deep-space collective beyond traditional Vedic ecliptic mapping. Revered through universal cosmic expansion texts. *[Flagged: Yet to know from officials]*"
        },
        desc: "Cepheus is one of the 88 modern constellations defined by the IAU.",
        myth: "Known since classical antiquity, this constellation is rich in history and lore. The King marks its place in the heavens.",
        facts: ["Officially recognized by the International Astronomical Union in 1922.", "Covers the sky at approximately RA 22h and Dec 70°."],
        stats: { Area: "Varies", "Main Stars": "7", Distance: "Varies", Season: "Varies" }, tags: ["North", "IAU"]
    },

    {
        name: "Cetus", abbr: "Cet", latin: "The Sea Monster", type: "south", ra: 2, dec: -10,
        stars: [{ "n": "AlphaF", "x": 0.24, "y": 0.25 }, { "n": "", "x": -0.76, "y": 0.74 }, { "n": "", "x": 0.11, "y": -0.23 }, { "n": "", "x": -0.29, "y": -0.36 }, { "n": "", "x": -0.2, "y": 0.25 }],
        lines: [[0, 3], [0, 2], [3, 1], [1, 4], [2, 1]],
        wiki: "https://en.wikipedia.org/wiki/Cetus",
        yt: "https://www.youtube.com/results?search_query=Cetus+constellation+mythology",
        vedic: {
            sanskrit: "विश्व प्रपंच (Cosmic Expanse)", dev: "ब्रह्माण्ड देवता (Cosmic Navagraha)", 
            s_mantra: "ॐ नमो नारायणाय", e_mantra: "Om Namo Narayanaya",
            color: "Deep Celestial Blue", flower: "Blue Lotus", food: "Panchamrita",
            h_cal: "Sarva Maasa (Year-Round Context)", e_cal: "Standard Deep Sky Observation",
            fact: "A deep-space collective beyond traditional Vedic ecliptic mapping. Revered through universal cosmic expansion texts. *[Flagged: Universal Map]*"
        },
        wiki: "https://en.wikipedia.org/wiki/Cetus",
        yt: "https://www.youtube.com/results?search_query=Cetus+constellation+mythology",
        vedic: {
            sanskrit: "विश्व प्रपंच (Cosmic Expanse)", dev: "ब्रह्माण्ड देवता (Cosmic Navagraha)", 
            s_mantra: "ॐ नमो नारायणाय", e_mantra: "Om Namo Narayanaya",
            color: "Deep Celestial Blue", flower: "Blue Lotus", food: "Panchamrita",
            h_cal: "Sarva Maasa (Year-Round Context)", e_cal: "Standard Deep Sky Observation",
            fact: "A deep-space collective beyond traditional Vedic ecliptic mapping. Revered through universal cosmic expansion texts. *[Flagged: Yet to know from officials]*"
        },
        desc: "Cetus is one of the 88 modern constellations defined by the IAU.",
        myth: "Known since classical antiquity, this constellation is rich in history and lore. The Sea Monster marks its place in the heavens.",
        facts: ["Officially recognized by the International Astronomical Union in 1922.", "Covers the sky at approximately RA 2h and Dec -10°."],
        stats: { Area: "Varies", "Main Stars": "5", Distance: "Varies", Season: "Varies" }, tags: ["South", "IAU"]
    },

    {
        name: "Chamaeleon", abbr: "Cha", latin: "The Chameleon", type: "south", ra: 11, dec: -80,
        stars: [{ "n": "AlphaS", "x": 0.33, "y": -0.45 }, { "n": "", "x": 1.2, "y": 1.06 }, { "n": "", "x": -0.77, "y": -1.15 }, { "n": "", "x": 0.02, "y": -0.58 }, { "n": "", "x": -0.09, "y": -0.65 }, { "n": "", "x": -0.28, "y": -0.49 }, { "n": "", "x": -0.84, "y": -0.21 }, { "n": "", "x": -0.16, "y": -0.75 }, { "n": "", "x": -1.18, "y": -1.08 }],
        lines: [[0, 6], [6, 2], [0, 4], [6, 8], [6, 1], [0, 3], [8, 5], [1, 7]],
        wiki: "https://en.wikipedia.org/wiki/Chamaeleon",
        yt: "https://www.youtube.com/results?search_query=Chamaeleon+constellation+mythology",
        vedic: {
            sanskrit: "विश्व प्रपंच (Cosmic Expanse)", dev: "ब्रह्माण्ड देवता (Cosmic Navagraha)", 
            s_mantra: "ॐ नमो नारायणाय", e_mantra: "Om Namo Narayanaya",
            color: "Deep Celestial Blue", flower: "Blue Lotus", food: "Panchamrita",
            h_cal: "Sarva Maasa (Year-Round Context)", e_cal: "Standard Deep Sky Observation",
            fact: "A deep-space collective beyond traditional Vedic ecliptic mapping. Revered through universal cosmic expansion texts. *[Flagged: Universal Map]*"
        },
        wiki: "https://en.wikipedia.org/wiki/Chamaeleon",
        yt: "https://www.youtube.com/results?search_query=Chamaeleon+constellation+mythology",
        vedic: {
            sanskrit: "विश्व प्रपंच (Cosmic Expanse)", dev: "ब्रह्माण्ड देवता (Cosmic Navagraha)", 
            s_mantra: "ॐ नमो नारायणाय", e_mantra: "Om Namo Narayanaya",
            color: "Deep Celestial Blue", flower: "Blue Lotus", food: "Panchamrita",
            h_cal: "Sarva Maasa (Year-Round Context)", e_cal: "Standard Deep Sky Observation",
            fact: "A deep-space collective beyond traditional Vedic ecliptic mapping. Revered through universal cosmic expansion texts. *[Flagged: Yet to know from officials]*"
        },
        desc: "Chamaeleon is one of the 88 modern constellations defined by the IAU.",
        myth: "Known since classical antiquity, this constellation is rich in history and lore. The Chameleon marks its place in the heavens.",
        facts: ["Officially recognized by the International Astronomical Union in 1922.", "Covers the sky at approximately RA 11h and Dec -80°."],
        stats: { Area: "Varies", "Main Stars": "9", Distance: "Varies", Season: "Varies" }, tags: ["South", "IAU"]
    },

    {
        name: "Circinus", abbr: "Cir", latin: "The Compasses", type: "south", ra: 15, dec: -60,
        stars: [{ "n": "AlphaZ", "x": -0.01, "y": -0.31 }, { "n": "", "x": 0.58, "y": -1.22 }, { "n": "", "x": 1.41, "y": -1.28 }, { "n": "", "x": -1.26, "y": -0.86 }, { "n": "", "x": -0.27, "y": -0.88 }, { "n": "", "x": -0.82, "y": -1.05 }],
        lines: [[0, 3], [3, 1], [1, 4], [4, 5], [1, 2], [2, 0]],
        wiki: "https://en.wikipedia.org/wiki/Circinus",
        yt: "https://www.youtube.com/results?search_query=Circinus+constellation+mythology",
        vedic: {
            sanskrit: "विश्व प्रपंच (Cosmic Expanse)", dev: "ब्रह्माण्ड देवता (Cosmic Navagraha)", 
            s_mantra: "ॐ नमो नारायणाय", e_mantra: "Om Namo Narayanaya",
            color: "Deep Celestial Blue", flower: "Blue Lotus", food: "Panchamrita",
            h_cal: "Sarva Maasa (Year-Round Context)", e_cal: "Standard Deep Sky Observation",
            fact: "A deep-space collective beyond traditional Vedic ecliptic mapping. Revered through universal cosmic expansion texts. *[Flagged: Universal Map]*"
        },
        wiki: "https://en.wikipedia.org/wiki/Circinus",
        yt: "https://www.youtube.com/results?search_query=Circinus+constellation+mythology",
        vedic: {
            sanskrit: "विश्व प्रपंच (Cosmic Expanse)", dev: "ब्रह्माण्ड देवता (Cosmic Navagraha)", 
            s_mantra: "ॐ नमो नारायणाय", e_mantra: "Om Namo Narayanaya",
            color: "Deep Celestial Blue", flower: "Blue Lotus", food: "Panchamrita",
            h_cal: "Sarva Maasa (Year-Round Context)", e_cal: "Standard Deep Sky Observation",
            fact: "A deep-space collective beyond traditional Vedic ecliptic mapping. Revered through universal cosmic expansion texts. *[Flagged: Yet to know from officials]*"
        },
        desc: "Circinus is one of the 88 modern constellations defined by the IAU.",
        myth: "Known since classical antiquity, this constellation is rich in history and lore. The Compasses marks its place in the heavens.",
        facts: ["Officially recognized by the International Astronomical Union in 1922.", "Covers the sky at approximately RA 15h and Dec -60°."],
        stats: { Area: "Varies", "Main Stars": "6", Distance: "Varies", Season: "Varies" }, tags: ["South", "IAU"]
    },

    {
        name: "Columba", abbr: "Col", latin: "The Dove", type: "south", ra: 6, dec: -35,
        stars: [{ "n": "AlphaE", "x": -0.15, "y": 0.07 }, { "n": "", "x": -0.36, "y": 0.28 }, { "n": "", "x": 0.67, "y": 1.48 }, { "n": "", "x": -0.01, "y": -1.5 }, { "n": "", "x": -1.35, "y": -0.59 }, { "n": "", "x": -0.2, "y": 0.15 }, { "n": "", "x": 0.44, "y": -0.37 }, { "n": "", "x": -0.7, "y": 0.75 }, { "n": "", "x": -0.28, "y": -1.04 }],
        lines: [[0, 5], [0, 1], [1, 2], [5, 3], [0, 6], [2, 7], [5, 4], [3, 8]],
        wiki: "https://en.wikipedia.org/wiki/Columba",
        yt: "https://www.youtube.com/results?search_query=Columba+constellation+mythology",
        vedic: {
            sanskrit: "विश्व प्रपंच (Cosmic Expanse)", dev: "ब्रह्माण्ड देवता (Cosmic Navagraha)", 
            s_mantra: "ॐ नमो नारायणाय", e_mantra: "Om Namo Narayanaya",
            color: "Deep Celestial Blue", flower: "Blue Lotus", food: "Panchamrita",
            h_cal: "Sarva Maasa (Year-Round Context)", e_cal: "Standard Deep Sky Observation",
            fact: "A deep-space collective beyond traditional Vedic ecliptic mapping. Revered through universal cosmic expansion texts. *[Flagged: Universal Map]*"
        },
        wiki: "https://en.wikipedia.org/wiki/Columba",
        yt: "https://www.youtube.com/results?search_query=Columba+constellation+mythology",
        vedic: {
            sanskrit: "विश्व प्रपंच (Cosmic Expanse)", dev: "ब्रह्माण्ड देवता (Cosmic Navagraha)", 
            s_mantra: "ॐ नमो नारायणाय", e_mantra: "Om Namo Narayanaya",
            color: "Deep Celestial Blue", flower: "Blue Lotus", food: "Panchamrita",
            h_cal: "Sarva Maasa (Year-Round Context)", e_cal: "Standard Deep Sky Observation",
            fact: "A deep-space collective beyond traditional Vedic ecliptic mapping. Revered through universal cosmic expansion texts. *[Flagged: Yet to know from officials]*"
        },
        desc: "Columba is one of the 88 modern constellations defined by the IAU.",
        myth: "Known since classical antiquity, this constellation is rich in history and lore. The Dove marks its place in the heavens.",
        facts: ["Officially recognized by the International Astronomical Union in 1922.", "Covers the sky at approximately RA 6h and Dec -35°."],
        stats: { Area: "Varies", "Main Stars": "9", Distance: "Varies", Season: "Varies" }, tags: ["South", "IAU"]
    },

    {
        name: "Coma Berenices", abbr: "Com", latin: "Berenice's Hair", type: "north", ra: 13, dec: 20,
        stars: [{ "n": "AlphaC", "x": -0.14, "y": 0.03 }, { "n": "", "x": -0.15, "y": -0.48 }, { "n": "", "x": 1.25, "y": 1.09 }, { "n": "", "x": 0.46, "y": 1.48 }, { "n": "", "x": 0.11, "y": -0.06 }, { "n": "", "x": 1.45, "y": -1.13 }, { "n": "", "x": -0.97, "y": 0.7 }],
        lines: [[0, 4], [0, 1], [4, 5], [5, 3], [4, 6], [3, 2]],
        wiki: "https://en.wikipedia.org/wiki/Coma_Berenices",
        yt: "https://www.youtube.com/results?search_query=Coma+Berenices+constellation+mythology",
        vedic: {
            sanskrit: "विश्व प्रपंच (Cosmic Expanse)", dev: "ब्रह्माण्ड देवता (Cosmic Navagraha)", 
            s_mantra: "ॐ नमो नारायणाय", e_mantra: "Om Namo Narayanaya",
            color: "Deep Celestial Blue", flower: "Blue Lotus", food: "Panchamrita",
            h_cal: "Sarva Maasa (Year-Round Context)", e_cal: "Standard Deep Sky Observation",
            fact: "A deep-space collective beyond traditional Vedic ecliptic mapping. Revered through universal cosmic expansion texts. *[Flagged: Universal Map]*"
        },
        wiki: "https://en.wikipedia.org/wiki/Coma_Berenices",
        yt: "https://www.youtube.com/results?search_query=Coma+Berenices+constellation+mythology",
        vedic: {
            sanskrit: "विश्व प्रपंच (Cosmic Expanse)", dev: "ब्रह्माण्ड देवता (Cosmic Navagraha)", 
            s_mantra: "ॐ नमो नारायणाय", e_mantra: "Om Namo Narayanaya",
            color: "Deep Celestial Blue", flower: "Blue Lotus", food: "Panchamrita",
            h_cal: "Sarva Maasa (Year-Round Context)", e_cal: "Standard Deep Sky Observation",
            fact: "A deep-space collective beyond traditional Vedic ecliptic mapping. Revered through universal cosmic expansion texts. *[Flagged: Yet to know from officials]*"
        },
        desc: "Coma Berenices is one of the 88 modern constellations defined by the IAU.",
        myth: "Known since classical antiquity, this constellation is rich in history and lore. Berenice's Hair marks its place in the heavens.",
        facts: ["Officially recognized by the International Astronomical Union in 1922.", "Covers the sky at approximately RA 13h and Dec 20°."],
        stats: { Area: "Varies", "Main Stars": "7", Distance: "Varies", Season: "Varies" }, tags: ["North", "IAU"]
    },

    {
        name: "Corona Australis", abbr: "CrA", latin: "The Southern Crown", type: "south", ra: 19, dec: -40,
        stars: [{ "n": "AlphaD", "x": 0.28, "y": 0.15 }, { "n": "", "x": 1.04, "y": -1.1 }, { "n": "", "x": 0.18, "y": 1.41 }, { "n": "", "x": 0.13, "y": -0.2 }, { "n": "", "x": 0.86, "y": -0.01 }, { "n": "", "x": 1.16, "y": -0.31 }, { "n": "", "x": -0.88, "y": -0.66 }, { "n": "", "x": -1.47, "y": -0.23 }],
        lines: [[0, 3], [3, 4], [0, 2], [2, 1], [1, 6], [6, 7], [3, 5]],
        wiki: "https://en.wikipedia.org/wiki/Corona_Australis",
        yt: "https://www.youtube.com/results?search_query=Corona+Australis+constellation+mythology",
        vedic: {
            sanskrit: "विश्व प्रपंच (Cosmic Expanse)", dev: "ब्रह्माण्ड देवता (Cosmic Navagraha)", 
            s_mantra: "ॐ नमो नारायणाय", e_mantra: "Om Namo Narayanaya",
            color: "Deep Celestial Blue", flower: "Blue Lotus", food: "Panchamrita",
            h_cal: "Sarva Maasa (Year-Round Context)", e_cal: "Standard Deep Sky Observation",
            fact: "A deep-space collective beyond traditional Vedic ecliptic mapping. Revered through universal cosmic expansion texts. *[Flagged: Universal Map]*"
        },
        wiki: "https://en.wikipedia.org/wiki/Corona_Australis",
        yt: "https://www.youtube.com/results?search_query=Corona+Australis+constellation+mythology",
        vedic: {
            sanskrit: "विश्व प्रपंच (Cosmic Expanse)", dev: "ब्रह्माण्ड देवता (Cosmic Navagraha)", 
            s_mantra: "ॐ नमो नारायणाय", e_mantra: "Om Namo Narayanaya",
            color: "Deep Celestial Blue", flower: "Blue Lotus", food: "Panchamrita",
            h_cal: "Sarva Maasa (Year-Round Context)", e_cal: "Standard Deep Sky Observation",
            fact: "A deep-space collective beyond traditional Vedic ecliptic mapping. Revered through universal cosmic expansion texts. *[Flagged: Yet to know from officials]*"
        },
        desc: "Corona Australis is one of the 88 modern constellations defined by the IAU.",
        myth: "Known since classical antiquity, this constellation is rich in history and lore. The Southern Crown marks its place in the heavens.",
        facts: ["Officially recognized by the International Astronomical Union in 1922.", "Covers the sky at approximately RA 19h and Dec -40°."],
        stats: { Area: "Varies", "Main Stars": "8", Distance: "Varies", Season: "Varies" }, tags: ["South", "IAU"]
    },

    {
        name: "Corona Borealis", abbr: "CrB", latin: "The Northern Crown", type: "north", ra: 15, dec: 30,
        stars: [{ "n": "AlphaS", "x": 0.45, "y": 0.48 }, { "n": "", "x": 0.04, "y": 0.25 }, { "n": "", "x": 0.38, "y": -0.82 }, { "n": "", "x": 0.66, "y": 0.5 }, { "n": "", "x": -0.79, "y": -0.99 }, { "n": "", "x": -1.36, "y": -0.08 }, { "n": "", "x": -0.94, "y": -1.12 }, { "n": "", "x": 0.15, "y": -1.08 }, { "n": "", "x": 1.25, "y": -0.27 }],
        lines: [[0, 7], [0, 8], [8, 2], [7, 3], [3, 4], [2, 6], [8, 1], [7, 5], [0, 2]],
        wiki: "https://en.wikipedia.org/wiki/Corona_Borealis",
        yt: "https://www.youtube.com/results?search_query=Corona+Borealis+constellation+mythology",
        vedic: {
            sanskrit: "विश्व प्रपंच (Cosmic Expanse)", dev: "ब्रह्माण्ड देवता (Cosmic Navagraha)", 
            s_mantra: "ॐ नमो नारायणाय", e_mantra: "Om Namo Narayanaya",
            color: "Deep Celestial Blue", flower: "Blue Lotus", food: "Panchamrita",
            h_cal: "Sarva Maasa (Year-Round Context)", e_cal: "Standard Deep Sky Observation",
            fact: "A deep-space collective beyond traditional Vedic ecliptic mapping. Revered through universal cosmic expansion texts. *[Flagged: Universal Map]*"
        },
        wiki: "https://en.wikipedia.org/wiki/Corona_Borealis",
        yt: "https://www.youtube.com/results?search_query=Corona+Borealis+constellation+mythology",
        vedic: {
            sanskrit: "विश्व प्रपंच (Cosmic Expanse)", dev: "ब्रह्माण्ड देवता (Cosmic Navagraha)", 
            s_mantra: "ॐ नमो नारायणाय", e_mantra: "Om Namo Narayanaya",
            color: "Deep Celestial Blue", flower: "Blue Lotus", food: "Panchamrita",
            h_cal: "Sarva Maasa (Year-Round Context)", e_cal: "Standard Deep Sky Observation",
            fact: "A deep-space collective beyond traditional Vedic ecliptic mapping. Revered through universal cosmic expansion texts. *[Flagged: Yet to know from officials]*"
        },
        desc: "Corona Borealis is one of the 88 modern constellations defined by the IAU.",
        myth: "Known since classical antiquity, this constellation is rich in history and lore. The Northern Crown marks its place in the heavens.",
        facts: ["Officially recognized by the International Astronomical Union in 1922.", "Covers the sky at approximately RA 15h and Dec 30°."],
        stats: { Area: "Varies", "Main Stars": "9", Distance: "Varies", Season: "Varies" }, tags: ["North", "IAU"]
    },

    {
        name: "Corvus", abbr: "Crv", latin: "The Crow", type: "south", ra: 12, dec: -20,
        stars: [{ "n": "AlphaP", "x": 0.25, "y": -0.44 }, { "n": "", "x": -1.01, "y": 0.27 }, { "n": "", "x": -0.41, "y": -0.31 }, { "n": "", "x": 0.44, "y": -0.74 }, { "n": "", "x": -0.22, "y": -0.99 }, { "n": "", "x": 0.09, "y": 1.46 }, { "n": "", "x": 0.92, "y": 0.16 }, { "n": "", "x": 0.72, "y": 0.4 }],
        lines: [[0, 4], [0, 5], [5, 2], [0, 6], [0, 7], [7, 3], [5, 1]],
        wiki: "https://en.wikipedia.org/wiki/Corvus",
        yt: "https://www.youtube.com/results?search_query=Corvus+constellation+mythology",
        vedic: {
            sanskrit: "विश्व प्रपंच (Cosmic Expanse)", dev: "ब्रह्माण्ड देवता (Cosmic Navagraha)", 
            s_mantra: "ॐ नमो नारायणाय", e_mantra: "Om Namo Narayanaya",
            color: "Deep Celestial Blue", flower: "Blue Lotus", food: "Panchamrita",
            h_cal: "Sarva Maasa (Year-Round Context)", e_cal: "Standard Deep Sky Observation",
            fact: "A deep-space collective beyond traditional Vedic ecliptic mapping. Revered through universal cosmic expansion texts. *[Flagged: Universal Map]*"
        },
        wiki: "https://en.wikipedia.org/wiki/Corvus",
        yt: "https://www.youtube.com/results?search_query=Corvus+constellation+mythology",
        vedic: {
            sanskrit: "विश्व प्रपंच (Cosmic Expanse)", dev: "ब्रह्माण्ड देवता (Cosmic Navagraha)", 
            s_mantra: "ॐ नमो नारायणाय", e_mantra: "Om Namo Narayanaya",
            color: "Deep Celestial Blue", flower: "Blue Lotus", food: "Panchamrita",
            h_cal: "Sarva Maasa (Year-Round Context)", e_cal: "Standard Deep Sky Observation",
            fact: "A deep-space collective beyond traditional Vedic ecliptic mapping. Revered through universal cosmic expansion texts. *[Flagged: Yet to know from officials]*"
        },
        desc: "Corvus is one of the 88 modern constellations defined by the IAU.",
        myth: "Known since classical antiquity, this constellation is rich in history and lore. The Crow marks its place in the heavens.",
        facts: ["Officially recognized by the International Astronomical Union in 1922.", "Covers the sky at approximately RA 12h and Dec -20°."],
        stats: { Area: "Varies", "Main Stars": "8", Distance: "Varies", Season: "Varies" }, tags: ["South", "IAU"]
    },

    {
        name: "Crater", abbr: "Crt", latin: "The Cup", type: "south", ra: 11, dec: -15,
        stars: [{ "n": "AlphaR", "x": -0.22, "y": 0.14 }, { "n": "", "x": -0.88, "y": -0.69 }, { "n": "", "x": -1.4, "y": 0.76 }, { "n": "", "x": 0.19, "y": -0.7 }, { "n": "", "x": 1.04, "y": -1.28 }, { "n": "", "x": 0.43, "y": -1.17 }, { "n": "", "x": -1.46, "y": 1.1 }],
        lines: [[0, 1], [0, 4], [1, 6], [6, 5], [6, 3], [6, 2]],
        wiki: "https://en.wikipedia.org/wiki/Crater",
        yt: "https://www.youtube.com/results?search_query=Crater+constellation+mythology",
        vedic: {
            sanskrit: "विश्व प्रपंच (Cosmic Expanse)", dev: "ब्रह्माण्ड देवता (Cosmic Navagraha)", 
            s_mantra: "ॐ नमो नारायणाय", e_mantra: "Om Namo Narayanaya",
            color: "Deep Celestial Blue", flower: "Blue Lotus", food: "Panchamrita",
            h_cal: "Sarva Maasa (Year-Round Context)", e_cal: "Standard Deep Sky Observation",
            fact: "A deep-space collective beyond traditional Vedic ecliptic mapping. Revered through universal cosmic expansion texts. *[Flagged: Universal Map]*"
        },
        wiki: "https://en.wikipedia.org/wiki/Crater",
        yt: "https://www.youtube.com/results?search_query=Crater+constellation+mythology",
        vedic: {
            sanskrit: "विश्व प्रपंच (Cosmic Expanse)", dev: "ब्रह्माण्ड देवता (Cosmic Navagraha)", 
            s_mantra: "ॐ नमो नारायणाय", e_mantra: "Om Namo Narayanaya",
            color: "Deep Celestial Blue", flower: "Blue Lotus", food: "Panchamrita",
            h_cal: "Sarva Maasa (Year-Round Context)", e_cal: "Standard Deep Sky Observation",
            fact: "A deep-space collective beyond traditional Vedic ecliptic mapping. Revered through universal cosmic expansion texts. *[Flagged: Yet to know from officials]*"
        },
        desc: "Crater is one of the 88 modern constellations defined by the IAU.",
        myth: "Known since classical antiquity, this constellation is rich in history and lore. The Cup marks its place in the heavens.",
        facts: ["Officially recognized by the International Astronomical Union in 1922.", "Covers the sky at approximately RA 11h and Dec -15°."],
        stats: { Area: "Varies", "Main Stars": "7", Distance: "Varies", Season: "Varies" }, tags: ["South", "IAU"]
    },

    {
        name: "Delphinus", abbr: "Del", latin: "The Dolphin", type: "north", ra: 20, dec: 10,
        stars: [{ "n": "AlphaI", "x": 0.23, "y": 0.26 }, { "n": "", "x": -0.45, "y": 0.74 }, { "n": "", "x": 0.4, "y": 0.83 }, { "n": "", "x": 0.2, "y": 0.45 }, { "n": "", "x": -1.41, "y": -0.7 }, { "n": "", "x": -1.16, "y": 0.82 }, { "n": "", "x": -0.16, "y": -0.06 }, { "n": "", "x": -0.84, "y": 0.3 }],
        lines: [[0, 5], [5, 2], [0, 1], [0, 4], [5, 3], [5, 6], [4, 7], [5, 1]],
        wiki: "https://en.wikipedia.org/wiki/Delphinus",
        yt: "https://www.youtube.com/results?search_query=Delphinus+constellation+mythology",
        vedic: {
            sanskrit: "विश्व प्रपंच (Cosmic Expanse)", dev: "ब्रह्माण्ड देवता (Cosmic Navagraha)", 
            s_mantra: "ॐ नमो नारायणाय", e_mantra: "Om Namo Narayanaya",
            color: "Deep Celestial Blue", flower: "Blue Lotus", food: "Panchamrita",
            h_cal: "Sarva Maasa (Year-Round Context)", e_cal: "Standard Deep Sky Observation",
            fact: "A deep-space collective beyond traditional Vedic ecliptic mapping. Revered through universal cosmic expansion texts. *[Flagged: Universal Map]*"
        },
        wiki: "https://en.wikipedia.org/wiki/Delphinus",
        yt: "https://www.youtube.com/results?search_query=Delphinus+constellation+mythology",
        vedic: {
            sanskrit: "विश्व प्रपंच (Cosmic Expanse)", dev: "ब्रह्माण्ड देवता (Cosmic Navagraha)", 
            s_mantra: "ॐ नमो नारायणाय", e_mantra: "Om Namo Narayanaya",
            color: "Deep Celestial Blue", flower: "Blue Lotus", food: "Panchamrita",
            h_cal: "Sarva Maasa (Year-Round Context)", e_cal: "Standard Deep Sky Observation",
            fact: "A deep-space collective beyond traditional Vedic ecliptic mapping. Revered through universal cosmic expansion texts. *[Flagged: Yet to know from officials]*"
        },
        desc: "Delphinus is one of the 88 modern constellations defined by the IAU.",
        myth: "Known since classical antiquity, this constellation is rich in history and lore. The Dolphin marks its place in the heavens.",
        facts: ["Officially recognized by the International Astronomical Union in 1922.", "Covers the sky at approximately RA 20h and Dec 10°."],
        stats: { Area: "Varies", "Main Stars": "8", Distance: "Varies", Season: "Varies" }, tags: ["North", "IAU"]
    },

    {
        name: "Dorado", abbr: "Dor", latin: "The Dolphinfish", type: "south", ra: 5, dec: -65,
        stars: [{ "n": "AlphaY", "x": 0.07, "y": -0.09 }, { "n": "", "x": 1.04, "y": 1.13 }, { "n": "", "x": -0.83, "y": -0.77 }, { "n": "", "x": -0.58, "y": -1.39 }, { "n": "", "x": 0.17, "y": 0.86 }, { "n": "", "x": 0.61, "y": -1.2 }, { "n": "", "x": -0.87, "y": -0.38 }],
        lines: [[0, 6], [0, 4], [4, 3], [3, 1], [6, 5], [3, 2], [2, 5], [0, 5], [2, 6]],
        wiki: "https://en.wikipedia.org/wiki/Dorado",
        yt: "https://www.youtube.com/results?search_query=Dorado+constellation+mythology",
        vedic: {
            sanskrit: "विश्व प्रपंच (Cosmic Expanse)", dev: "ब्रह्माण्ड देवता (Cosmic Navagraha)", 
            s_mantra: "ॐ नमो नारायणाय", e_mantra: "Om Namo Narayanaya",
            color: "Deep Celestial Blue", flower: "Blue Lotus", food: "Panchamrita",
            h_cal: "Sarva Maasa (Year-Round Context)", e_cal: "Standard Deep Sky Observation",
            fact: "A deep-space collective beyond traditional Vedic ecliptic mapping. Revered through universal cosmic expansion texts. *[Flagged: Universal Map]*"
        },
        wiki: "https://en.wikipedia.org/wiki/Dorado",
        yt: "https://www.youtube.com/results?search_query=Dorado+constellation+mythology",
        vedic: {
            sanskrit: "विश्व प्रपंच (Cosmic Expanse)", dev: "ब्रह्माण्ड देवता (Cosmic Navagraha)", 
            s_mantra: "ॐ नमो नारायणाय", e_mantra: "Om Namo Narayanaya",
            color: "Deep Celestial Blue", flower: "Blue Lotus", food: "Panchamrita",
            h_cal: "Sarva Maasa (Year-Round Context)", e_cal: "Standard Deep Sky Observation",
            fact: "A deep-space collective beyond traditional Vedic ecliptic mapping. Revered through universal cosmic expansion texts. *[Flagged: Yet to know from officials]*"
        },
        desc: "Dorado is one of the 88 modern constellations defined by the IAU.",
        myth: "Known since classical antiquity, this constellation is rich in history and lore. The Dolphinfish marks its place in the heavens.",
        facts: ["Officially recognized by the International Astronomical Union in 1922.", "Covers the sky at approximately RA 5h and Dec -65°."],
        stats: { Area: "Varies", "Main Stars": "7", Distance: "Varies", Season: "Varies" }, tags: ["South", "IAU"]
    },

    {
        name: "Draco", abbr: "Dra", latin: "The Dragon", type: "north", ra: 17, dec: 65,
        stars: [{ "n": "AlphaD", "x": -0.09, "y": -0.41 }, { "n": "", "x": -0.41, "y": -0.27 }, { "n": "", "x": 0.31, "y": -0.08 }, { "n": "", "x": 0.98, "y": 0.86 }, { "n": "", "x": -1.38, "y": -0.67 }, { "n": "", "x": 0.69, "y": -0.77 }, { "n": "", "x": -0.82, "y": 0.15 }],
        lines: [[0, 4], [4, 2], [4, 5], [4, 6], [0, 1], [1, 3]],
        wiki: "https://en.wikipedia.org/wiki/Draco",
        yt: "https://www.youtube.com/results?search_query=Draco+constellation+mythology",
        vedic: {
            sanskrit: "विश्व प्रपंच (Cosmic Expanse)", dev: "ब्रह्माण्ड देवता (Cosmic Navagraha)", 
            s_mantra: "ॐ नमो नारायणाय", e_mantra: "Om Namo Narayanaya",
            color: "Deep Celestial Blue", flower: "Blue Lotus", food: "Panchamrita",
            h_cal: "Sarva Maasa (Year-Round Context)", e_cal: "Standard Deep Sky Observation",
            fact: "A deep-space collective beyond traditional Vedic ecliptic mapping. Revered through universal cosmic expansion texts. *[Flagged: Universal Map]*"
        },
        wiki: "https://en.wikipedia.org/wiki/Draco",
        yt: "https://www.youtube.com/results?search_query=Draco+constellation+mythology",
        vedic: {
            sanskrit: "विश्व प्रपंच (Cosmic Expanse)", dev: "ब्रह्माण्ड देवता (Cosmic Navagraha)", 
            s_mantra: "ॐ नमो नारायणाय", e_mantra: "Om Namo Narayanaya",
            color: "Deep Celestial Blue", flower: "Blue Lotus", food: "Panchamrita",
            h_cal: "Sarva Maasa (Year-Round Context)", e_cal: "Standard Deep Sky Observation",
            fact: "A deep-space collective beyond traditional Vedic ecliptic mapping. Revered through universal cosmic expansion texts. *[Flagged: Yet to know from officials]*"
        },
        desc: "Draco is one of the 88 modern constellations defined by the IAU.",
        myth: "Known since classical antiquity, this constellation is rich in history and lore. The Dragon marks its place in the heavens.",
        facts: ["Officially recognized by the International Astronomical Union in 1922.", "Covers the sky at approximately RA 17h and Dec 65°."],
        stats: { Area: "Varies", "Main Stars": "7", Distance: "Varies", Season: "Varies" }, tags: ["North", "IAU"]
    },

    {
        name: "Equuleus", abbr: "Equ", latin: "The Little Horse", type: "north", ra: 21, dec: 10,
        stars: [{ "n": "AlphaW", "x": 0.07, "y": 0.03 }, { "n": "", "x": -1.31, "y": -0.36 }, { "n": "", "x": -0.25, "y": -0.15 }, { "n": "", "x": -1.48, "y": -0.76 }, { "n": "", "x": -0.92, "y": -0.8 }, { "n": "", "x": 0.63, "y": 0.69 }],
        lines: [[0, 2], [2, 5], [0, 4], [4, 3], [5, 1], [3, 1]],
        wiki: "https://en.wikipedia.org/wiki/Equuleus",
        yt: "https://www.youtube.com/results?search_query=Equuleus+constellation+mythology",
        vedic: {
            sanskrit: "विश्व प्रपंच (Cosmic Expanse)", dev: "ब्रह्माण्ड देवता (Cosmic Navagraha)", 
            s_mantra: "ॐ नमो नारायणाय", e_mantra: "Om Namo Narayanaya",
            color: "Deep Celestial Blue", flower: "Blue Lotus", food: "Panchamrita",
            h_cal: "Sarva Maasa (Year-Round Context)", e_cal: "Standard Deep Sky Observation",
            fact: "A deep-space collective beyond traditional Vedic ecliptic mapping. Revered through universal cosmic expansion texts. *[Flagged: Universal Map]*"
        },
        wiki: "https://en.wikipedia.org/wiki/Equuleus",
        yt: "https://www.youtube.com/results?search_query=Equuleus+constellation+mythology",
        vedic: {
            sanskrit: "विश्व प्रपंच (Cosmic Expanse)", dev: "ब्रह्माण्ड देवता (Cosmic Navagraha)", 
            s_mantra: "ॐ नमो नारायणाय", e_mantra: "Om Namo Narayanaya",
            color: "Deep Celestial Blue", flower: "Blue Lotus", food: "Panchamrita",
            h_cal: "Sarva Maasa (Year-Round Context)", e_cal: "Standard Deep Sky Observation",
            fact: "A deep-space collective beyond traditional Vedic ecliptic mapping. Revered through universal cosmic expansion texts. *[Flagged: Yet to know from officials]*"
        },
        desc: "Equuleus is one of the 88 modern constellations defined by the IAU.",
        myth: "Known since classical antiquity, this constellation is rich in history and lore. The Little Horse marks its place in the heavens.",
        facts: ["Officially recognized by the International Astronomical Union in 1922.", "Covers the sky at approximately RA 21h and Dec 10°."],
        stats: { Area: "Varies", "Main Stars": "6", Distance: "Varies", Season: "Varies" }, tags: ["North", "IAU"]
    },

    {
        name: "Eridanus", abbr: "Eri", latin: "The River", type: "south", ra: 3, dec: -30,
        stars: [{ "n": "AlphaO", "x": -0.46, "y": 0.07 }, { "n": "", "x": 1.03, "y": 1.49 }, { "n": "", "x": -0.83, "y": -0.41 }, { "n": "", "x": -0.76, "y": -1.32 }, { "n": "", "x": 1.28, "y": -1.37 }, { "n": "", "x": 1.29, "y": -1.37 }, { "n": "", "x": -0.07, "y": 0.06 }],
        lines: [[0, 2], [0, 1], [2, 6], [6, 4], [0, 3], [4, 5], [1, 3], [5, 1]],
        wiki: "https://en.wikipedia.org/wiki/Eridanus",
        yt: "https://www.youtube.com/results?search_query=Eridanus+constellation+mythology",
        vedic: {
            sanskrit: "विश्व प्रपंच (Cosmic Expanse)", dev: "ब्रह्माण्ड देवता (Cosmic Navagraha)", 
            s_mantra: "ॐ नमो नारायणाय", e_mantra: "Om Namo Narayanaya",
            color: "Deep Celestial Blue", flower: "Blue Lotus", food: "Panchamrita",
            h_cal: "Sarva Maasa (Year-Round Context)", e_cal: "Standard Deep Sky Observation",
            fact: "A deep-space collective beyond traditional Vedic ecliptic mapping. Revered through universal cosmic expansion texts. *[Flagged: Universal Map]*"
        },
        wiki: "https://en.wikipedia.org/wiki/Eridanus",
        yt: "https://www.youtube.com/results?search_query=Eridanus+constellation+mythology",
        vedic: {
            sanskrit: "विश्व प्रपंच (Cosmic Expanse)", dev: "ब्रह्माण्ड देवता (Cosmic Navagraha)", 
            s_mantra: "ॐ नमो नारायणाय", e_mantra: "Om Namo Narayanaya",
            color: "Deep Celestial Blue", flower: "Blue Lotus", food: "Panchamrita",
            h_cal: "Sarva Maasa (Year-Round Context)", e_cal: "Standard Deep Sky Observation",
            fact: "A deep-space collective beyond traditional Vedic ecliptic mapping. Revered through universal cosmic expansion texts. *[Flagged: Yet to know from officials]*"
        },
        desc: "Eridanus is one of the 88 modern constellations defined by the IAU.",
        myth: "Known since classical antiquity, this constellation is rich in history and lore. The River marks its place in the heavens.",
        facts: ["Officially recognized by the International Astronomical Union in 1922.", "Covers the sky at approximately RA 3h and Dec -30°."],
        stats: { Area: "Varies", "Main Stars": "7", Distance: "Varies", Season: "Varies" }, tags: ["South", "IAU"]
    },

    {
        name: "Fornax", abbr: "For", latin: "The Furnace", type: "south", ra: 3, dec: -30,
        stars: [{ "n": "AlphaM", "x": 0.05, "y": -0.4 }, { "n": "", "x": 1.06, "y": 1.23 }, { "n": "", "x": -1.22, "y": 1.38 }, { "n": "", "x": -0.15, "y": -0.63 }, { "n": "", "x": -0.65, "y": -0.22 }, { "n": "", "x": -1.18, "y": 0.94 }],
        lines: [[0, 3], [0, 4], [3, 5], [3, 1], [4, 2], [5, 2]],
        wiki: "https://en.wikipedia.org/wiki/Fornax",
        yt: "https://www.youtube.com/results?search_query=Fornax+constellation+mythology",
        vedic: {
            sanskrit: "विश्व प्रपंच (Cosmic Expanse)", dev: "ब्रह्माण्ड देवता (Cosmic Navagraha)", 
            s_mantra: "ॐ नमो नारायणाय", e_mantra: "Om Namo Narayanaya",
            color: "Deep Celestial Blue", flower: "Blue Lotus", food: "Panchamrita",
            h_cal: "Sarva Maasa (Year-Round Context)", e_cal: "Standard Deep Sky Observation",
            fact: "A deep-space collective beyond traditional Vedic ecliptic mapping. Revered through universal cosmic expansion texts. *[Flagged: Universal Map]*"
        },
        wiki: "https://en.wikipedia.org/wiki/Fornax",
        yt: "https://www.youtube.com/results?search_query=Fornax+constellation+mythology",
        vedic: {
            sanskrit: "विश्व प्रपंच (Cosmic Expanse)", dev: "ब्रह्माण्ड देवता (Cosmic Navagraha)", 
            s_mantra: "ॐ नमो नारायणाय", e_mantra: "Om Namo Narayanaya",
            color: "Deep Celestial Blue", flower: "Blue Lotus", food: "Panchamrita",
            h_cal: "Sarva Maasa (Year-Round Context)", e_cal: "Standard Deep Sky Observation",
            fact: "A deep-space collective beyond traditional Vedic ecliptic mapping. Revered through universal cosmic expansion texts. *[Flagged: Yet to know from officials]*"
        },
        desc: "Fornax is one of the 88 modern constellations defined by the IAU.",
        myth: "Known since classical antiquity, this constellation is rich in history and lore. The Furnace marks its place in the heavens.",
        facts: ["Officially recognized by the International Astronomical Union in 1922.", "Covers the sky at approximately RA 3h and Dec -30°."],
        stats: { Area: "Varies", "Main Stars": "6", Distance: "Varies", Season: "Varies" }, tags: ["South", "IAU"]
    },

    {
        name: "Grus", abbr: "Gru", latin: "The Crane", type: "south", ra: 22, dec: -45,
        stars: [{ "n": "AlphaU", "x": -0.27, "y": -0.13 }, { "n": "", "x": -1.22, "y": -0.27 }, { "n": "", "x": -1.07, "y": 0.4 }, { "n": "", "x": -0.79, "y": -0.27 }, { "n": "", "x": -0.76, "y": -0.97 }, { "n": "", "x": 0.33, "y": -0.77 }, { "n": "", "x": 0.08, "y": 0.77 }],
        lines: [[0, 1], [0, 2], [1, 3], [0, 4], [0, 6], [0, 5]],
        wiki: "https://en.wikipedia.org/wiki/Grus",
        yt: "https://www.youtube.com/results?search_query=Grus+constellation+mythology",
        vedic: {
            sanskrit: "विश्व प्रपंच (Cosmic Expanse)", dev: "ब्रह्माण्ड देवता (Cosmic Navagraha)", 
            s_mantra: "ॐ नमो नारायणाय", e_mantra: "Om Namo Narayanaya",
            color: "Deep Celestial Blue", flower: "Blue Lotus", food: "Panchamrita",
            h_cal: "Sarva Maasa (Year-Round Context)", e_cal: "Standard Deep Sky Observation",
            fact: "A deep-space collective beyond traditional Vedic ecliptic mapping. Revered through universal cosmic expansion texts. *[Flagged: Universal Map]*"
        },
        wiki: "https://en.wikipedia.org/wiki/Grus",
        yt: "https://www.youtube.com/results?search_query=Grus+constellation+mythology",
        vedic: {
            sanskrit: "विश्व प्रपंच (Cosmic Expanse)", dev: "ब्रह्माण्ड देवता (Cosmic Navagraha)", 
            s_mantra: "ॐ नमो नारायणाय", e_mantra: "Om Namo Narayanaya",
            color: "Deep Celestial Blue", flower: "Blue Lotus", food: "Panchamrita",
            h_cal: "Sarva Maasa (Year-Round Context)", e_cal: "Standard Deep Sky Observation",
            fact: "A deep-space collective beyond traditional Vedic ecliptic mapping. Revered through universal cosmic expansion texts. *[Flagged: Yet to know from officials]*"
        },
        desc: "Grus is one of the 88 modern constellations defined by the IAU.",
        myth: "Known since classical antiquity, this constellation is rich in history and lore. The Crane marks its place in the heavens.",
        facts: ["Officially recognized by the International Astronomical Union in 1922.", "Covers the sky at approximately RA 22h and Dec -45°."],
        stats: { Area: "Varies", "Main Stars": "7", Distance: "Varies", Season: "Varies" }, tags: ["South", "IAU"]
    },

    {
        name: "Hercules", abbr: "Her", latin: "The Hero", type: "north", ra: 17, dec: 30,
        stars: [{ "n": "AlphaE", "x": 0.07, "y": -0.12 }, { "n": "", "x": -1.46, "y": 0.65 }, { "n": "", "x": 0.82, "y": -0.18 }, { "n": "", "x": -0.25, "y": 1.13 }, { "n": "", "x": 1.02, "y": -0.36 }, { "n": "", "x": 0.33, "y": 0.61 }, { "n": "", "x": -0.25, "y": -0.25 }, { "n": "", "x": 1.46, "y": -0.18 }, { "n": "", "x": 1.0, "y": -0.43 }],
        lines: [[0, 1], [1, 4], [1, 8], [4, 7], [7, 2], [1, 3], [7, 6], [6, 5], [8, 0]],
        wiki: "https://en.wikipedia.org/wiki/Hercules",
        yt: "https://www.youtube.com/results?search_query=Hercules+constellation+mythology",
        vedic: {
            sanskrit: "विश्व प्रपंच (Cosmic Expanse)", dev: "ब्रह्माण्ड देवता (Cosmic Navagraha)", 
            s_mantra: "ॐ नमो नारायणाय", e_mantra: "Om Namo Narayanaya",
            color: "Deep Celestial Blue", flower: "Blue Lotus", food: "Panchamrita",
            h_cal: "Sarva Maasa (Year-Round Context)", e_cal: "Standard Deep Sky Observation",
            fact: "A deep-space collective beyond traditional Vedic ecliptic mapping. Revered through universal cosmic expansion texts. *[Flagged: Universal Map]*"
        },
        wiki: "https://en.wikipedia.org/wiki/Hercules",
        yt: "https://www.youtube.com/results?search_query=Hercules+constellation+mythology",
        vedic: {
            sanskrit: "विश्व प्रपंच (Cosmic Expanse)", dev: "ब्रह्माण्ड देवता (Cosmic Navagraha)", 
            s_mantra: "ॐ नमो नारायणाय", e_mantra: "Om Namo Narayanaya",
            color: "Deep Celestial Blue", flower: "Blue Lotus", food: "Panchamrita",
            h_cal: "Sarva Maasa (Year-Round Context)", e_cal: "Standard Deep Sky Observation",
            fact: "A deep-space collective beyond traditional Vedic ecliptic mapping. Revered through universal cosmic expansion texts. *[Flagged: Yet to know from officials]*"
        },
        desc: "Hercules is one of the 88 modern constellations defined by the IAU.",
        myth: "Known since classical antiquity, this constellation is rich in history and lore. The Hero marks its place in the heavens.",
        facts: ["Officially recognized by the International Astronomical Union in 1922.", "Covers the sky at approximately RA 17h and Dec 30°."],
        stats: { Area: "Varies", "Main Stars": "9", Distance: "Varies", Season: "Varies" }, tags: ["North", "IAU"]
    },

    {
        name: "Horologium", abbr: "Hor", latin: "The Pendulum Clock", type: "south", ra: 3, dec: -50,
        stars: [{ "n": "AlphaC", "x": -0.01, "y": 0.41 }, { "n": "", "x": -1.14, "y": -0.17 }, { "n": "", "x": 0.36, "y": -0.51 }, { "n": "", "x": 0.21, "y": -0.3 }, { "n": "", "x": 1.22, "y": -1.13 }, { "n": "", "x": -1.07, "y": 1.09 }, { "n": "", "x": -1.35, "y": -1.29 }],
        lines: [[0, 6], [6, 4], [4, 3], [0, 5], [3, 1], [0, 2], [0, 4]],
        wiki: "https://en.wikipedia.org/wiki/Horologium",
        yt: "https://www.youtube.com/results?search_query=Horologium+constellation+mythology",
        vedic: {
            sanskrit: "विश्व प्रपंच (Cosmic Expanse)", dev: "ब्रह्माण्ड देवता (Cosmic Navagraha)", 
            s_mantra: "ॐ नमो नारायणाय", e_mantra: "Om Namo Narayanaya",
            color: "Deep Celestial Blue", flower: "Blue Lotus", food: "Panchamrita",
            h_cal: "Sarva Maasa (Year-Round Context)", e_cal: "Standard Deep Sky Observation",
            fact: "A deep-space collective beyond traditional Vedic ecliptic mapping. Revered through universal cosmic expansion texts. *[Flagged: Universal Map]*"
        },
        wiki: "https://en.wikipedia.org/wiki/Horologium",
        yt: "https://www.youtube.com/results?search_query=Horologium+constellation+mythology",
        vedic: {
            sanskrit: "विश्व प्रपंच (Cosmic Expanse)", dev: "ब्रह्माण्ड देवता (Cosmic Navagraha)", 
            s_mantra: "ॐ नमो नारायणाय", e_mantra: "Om Namo Narayanaya",
            color: "Deep Celestial Blue", flower: "Blue Lotus", food: "Panchamrita",
            h_cal: "Sarva Maasa (Year-Round Context)", e_cal: "Standard Deep Sky Observation",
            fact: "A deep-space collective beyond traditional Vedic ecliptic mapping. Revered through universal cosmic expansion texts. *[Flagged: Yet to know from officials]*"
        },
        desc: "Horologium is one of the 88 modern constellations defined by the IAU.",
        myth: "Known since classical antiquity, this constellation is rich in history and lore. The Pendulum Clock marks its place in the heavens.",
        facts: ["Officially recognized by the International Astronomical Union in 1922.", "Covers the sky at approximately RA 3h and Dec -50°."],
        stats: { Area: "Varies", "Main Stars": "7", Distance: "Varies", Season: "Varies" }, tags: ["South", "IAU"]
    },

    {
        name: "Hydra", abbr: "Hya", latin: "The Water Snake", type: "south", ra: 10, dec: -20,
        stars: [{ "n": "AlphaN", "x": -0.29, "y": 0.39 }, { "n": "", "x": -1.42, "y": -1.33 }, { "n": "", "x": -1.0, "y": 1.04 }, { "n": "", "x": -0.96, "y": -1.23 }, { "n": "", "x": 0.18, "y": 0.78 }],
        lines: [[0, 1], [1, 4], [0, 3], [3, 2], [1, 2]],
        wiki: "https://en.wikipedia.org/wiki/Hydra",
        yt: "https://www.youtube.com/results?search_query=Hydra+constellation+mythology",
        vedic: {
            sanskrit: "विश्व प्रपंच (Cosmic Expanse)", dev: "ब्रह्माण्ड देवता (Cosmic Navagraha)", 
            s_mantra: "ॐ नमो नारायणाय", e_mantra: "Om Namo Narayanaya",
            color: "Deep Celestial Blue", flower: "Blue Lotus", food: "Panchamrita",
            h_cal: "Sarva Maasa (Year-Round Context)", e_cal: "Standard Deep Sky Observation",
            fact: "A deep-space collective beyond traditional Vedic ecliptic mapping. Revered through universal cosmic expansion texts. *[Flagged: Universal Map]*"
        },
        wiki: "https://en.wikipedia.org/wiki/Hydra",
        yt: "https://www.youtube.com/results?search_query=Hydra+constellation+mythology",
        vedic: {
            sanskrit: "विश्व प्रपंच (Cosmic Expanse)", dev: "ब्रह्माण्ड देवता (Cosmic Navagraha)", 
            s_mantra: "ॐ नमो नारायणाय", e_mantra: "Om Namo Narayanaya",
            color: "Deep Celestial Blue", flower: "Blue Lotus", food: "Panchamrita",
            h_cal: "Sarva Maasa (Year-Round Context)", e_cal: "Standard Deep Sky Observation",
            fact: "A deep-space collective beyond traditional Vedic ecliptic mapping. Revered through universal cosmic expansion texts. *[Flagged: Yet to know from officials]*"
        },
        desc: "Hydra is one of the 88 modern constellations defined by the IAU.",
        myth: "Known since classical antiquity, this constellation is rich in history and lore. The Water Snake marks its place in the heavens.",
        facts: ["Officially recognized by the International Astronomical Union in 1922.", "Covers the sky at approximately RA 10h and Dec -20°."],
        stats: { Area: "Varies", "Main Stars": "5", Distance: "Varies", Season: "Varies" }, tags: ["South", "IAU"]
    },

    {
        name: "Hydrus", abbr: "Hyi", latin: "The Lesser Water Snake", type: "south", ra: 2, dec: -70,
        stars: [{ "n": "AlphaH", "x": -0.01, "y": -0.47 }, { "n": "", "x": 1.0, "y": 1.16 }, { "n": "", "x": -0.52, "y": -0.54 }, { "n": "", "x": 1.33, "y": 0.42 }, { "n": "", "x": -0.62, "y": 0.94 }, { "n": "", "x": 0.62, "y": 0.06 }, { "n": "", "x": 1.07, "y": 0.35 }, { "n": "", "x": 1.39, "y": -1.08 }],
        lines: [[0, 2], [0, 7], [2, 1], [7, 4], [1, 6], [2, 3], [2, 5]],
        wiki: "https://en.wikipedia.org/wiki/Hydrus",
        yt: "https://www.youtube.com/results?search_query=Hydrus+constellation+mythology",
        vedic: {
            sanskrit: "विश्व प्रपंच (Cosmic Expanse)", dev: "ब्रह्माण्ड देवता (Cosmic Navagraha)", 
            s_mantra: "ॐ नमो नारायणाय", e_mantra: "Om Namo Narayanaya",
            color: "Deep Celestial Blue", flower: "Blue Lotus", food: "Panchamrita",
            h_cal: "Sarva Maasa (Year-Round Context)", e_cal: "Standard Deep Sky Observation",
            fact: "A deep-space collective beyond traditional Vedic ecliptic mapping. Revered through universal cosmic expansion texts. *[Flagged: Universal Map]*"
        },
        wiki: "https://en.wikipedia.org/wiki/Hydrus",
        yt: "https://www.youtube.com/results?search_query=Hydrus+constellation+mythology",
        vedic: {
            sanskrit: "विश्व प्रपंच (Cosmic Expanse)", dev: "ब्रह्माण्ड देवता (Cosmic Navagraha)", 
            s_mantra: "ॐ नमो नारायणाय", e_mantra: "Om Namo Narayanaya",
            color: "Deep Celestial Blue", flower: "Blue Lotus", food: "Panchamrita",
            h_cal: "Sarva Maasa (Year-Round Context)", e_cal: "Standard Deep Sky Observation",
            fact: "A deep-space collective beyond traditional Vedic ecliptic mapping. Revered through universal cosmic expansion texts. *[Flagged: Yet to know from officials]*"
        },
        desc: "Hydrus is one of the 88 modern constellations defined by the IAU.",
        myth: "Known since classical antiquity, this constellation is rich in history and lore. The Lesser Water Snake marks its place in the heavens.",
        facts: ["Officially recognized by the International Astronomical Union in 1922.", "Covers the sky at approximately RA 2h and Dec -70°."],
        stats: { Area: "Varies", "Main Stars": "8", Distance: "Varies", Season: "Varies" }, tags: ["South", "IAU"]
    },

    {
        name: "Indus", abbr: "Ind", latin: "The Indian", type: "south", ra: 21, dec: -55,
        stars: [{ "n": "AlphaY", "x": 0.28, "y": 0.33 }, { "n": "", "x": 1.23, "y": 0.99 }, { "n": "", "x": -0.7, "y": 0.36 }, { "n": "", "x": 1.27, "y": -1.01 }, { "n": "", "x": -1.3, "y": -0.09 }, { "n": "", "x": -0.57, "y": 0.47 }, { "n": "", "x": 0.66, "y": -0.85 }, { "n": "", "x": 0.76, "y": -0.82 }],
        lines: [[0, 4], [4, 5], [5, 1], [4, 2], [4, 6], [5, 3], [5, 7]],
        wiki: "https://en.wikipedia.org/wiki/Indus",
        yt: "https://www.youtube.com/results?search_query=Indus+constellation+mythology",
        vedic: {
            sanskrit: "विश्व प्रपंच (Cosmic Expanse)", dev: "ब्रह्माण्ड देवता (Cosmic Navagraha)", 
            s_mantra: "ॐ नमो नारायणाय", e_mantra: "Om Namo Narayanaya",
            color: "Deep Celestial Blue", flower: "Blue Lotus", food: "Panchamrita",
            h_cal: "Sarva Maasa (Year-Round Context)", e_cal: "Standard Deep Sky Observation",
            fact: "A deep-space collective beyond traditional Vedic ecliptic mapping. Revered through universal cosmic expansion texts. *[Flagged: Universal Map]*"
        },
        wiki: "https://en.wikipedia.org/wiki/Indus",
        yt: "https://www.youtube.com/results?search_query=Indus+constellation+mythology",
        vedic: {
            sanskrit: "विश्व प्रपंच (Cosmic Expanse)", dev: "ब्रह्माण्ड देवता (Cosmic Navagraha)", 
            s_mantra: "ॐ नमो नारायणाय", e_mantra: "Om Namo Narayanaya",
            color: "Deep Celestial Blue", flower: "Blue Lotus", food: "Panchamrita",
            h_cal: "Sarva Maasa (Year-Round Context)", e_cal: "Standard Deep Sky Observation",
            fact: "A deep-space collective beyond traditional Vedic ecliptic mapping. Revered through universal cosmic expansion texts. *[Flagged: Yet to know from officials]*"
        },
        desc: "Indus is one of the 88 modern constellations defined by the IAU.",
        myth: "Known since classical antiquity, this constellation is rich in history and lore. The Indian marks its place in the heavens.",
        facts: ["Officially recognized by the International Astronomical Union in 1922.", "Covers the sky at approximately RA 21h and Dec -55°."],
        stats: { Area: "Varies", "Main Stars": "8", Distance: "Varies", Season: "Varies" }, tags: ["South", "IAU"]
    },

    {
        name: "Lacerta", abbr: "Lac", latin: "The Lizard", type: "north", ra: 22, dec: 45,
        stars: [{ "n": "AlphaL", "x": 0.21, "y": 0.12 }, { "n": "", "x": -0.5, "y": 0.18 }, { "n": "", "x": -1.34, "y": 1.25 }, { "n": "", "x": -0.5, "y": -0.94 }, { "n": "", "x": 0.03, "y": -1.06 }, { "n": "", "x": 0.63, "y": -1.13 }, { "n": "", "x": -1.22, "y": 0.44 }],
        lines: [[0, 4], [0, 1], [0, 5], [0, 6], [0, 3], [6, 2], [1, 5]],
        wiki: "https://en.wikipedia.org/wiki/Lacerta",
        yt: "https://www.youtube.com/results?search_query=Lacerta+constellation+mythology",
        vedic: {
            sanskrit: "विश्व प्रपंच (Cosmic Expanse)", dev: "ब्रह्माण्ड देवता (Cosmic Navagraha)", 
            s_mantra: "ॐ नमो नारायणाय", e_mantra: "Om Namo Narayanaya",
            color: "Deep Celestial Blue", flower: "Blue Lotus", food: "Panchamrita",
            h_cal: "Sarva Maasa (Year-Round Context)", e_cal: "Standard Deep Sky Observation",
            fact: "A deep-space collective beyond traditional Vedic ecliptic mapping. Revered through universal cosmic expansion texts. *[Flagged: Universal Map]*"
        },
        wiki: "https://en.wikipedia.org/wiki/Lacerta",
        yt: "https://www.youtube.com/results?search_query=Lacerta+constellation+mythology",
        vedic: {
            sanskrit: "विश्व प्रपंच (Cosmic Expanse)", dev: "ब्रह्माण्ड देवता (Cosmic Navagraha)", 
            s_mantra: "ॐ नमो नारायणाय", e_mantra: "Om Namo Narayanaya",
            color: "Deep Celestial Blue", flower: "Blue Lotus", food: "Panchamrita",
            h_cal: "Sarva Maasa (Year-Round Context)", e_cal: "Standard Deep Sky Observation",
            fact: "A deep-space collective beyond traditional Vedic ecliptic mapping. Revered through universal cosmic expansion texts. *[Flagged: Yet to know from officials]*"
        },
        desc: "Lacerta is one of the 88 modern constellations defined by the IAU.",
        myth: "Known since classical antiquity, this constellation is rich in history and lore. The Lizard marks its place in the heavens.",
        facts: ["Officially recognized by the International Astronomical Union in 1922.", "Covers the sky at approximately RA 22h and Dec 45°."],
        stats: { Area: "Varies", "Main Stars": "7", Distance: "Varies", Season: "Varies" }, tags: ["North", "IAU"]
    },

    {
        name: "Leo Minor", abbr: "LMi", latin: "The Lesser Lion", type: "north", ra: 10, dec: 35,
        stars: [{ "n": "AlphaY", "x": -0.08, "y": 0.47 }, { "n": "", "x": 1.0, "y": -1.19 }, { "n": "", "x": 0.59, "y": 1.29 }, { "n": "", "x": 1.02, "y": 0.09 }, { "n": "", "x": 0.7, "y": -0.74 }, { "n": "", "x": 0.71, "y": 1.13 }, { "n": "", "x": 0.48, "y": 1.42 }, { "n": "", "x": 0.65, "y": 1.16 }],
        lines: [[0, 3], [3, 1], [0, 5], [3, 4], [3, 7], [7, 6], [0, 2], [5, 1], [7, 5]],
        wiki: "https://en.wikipedia.org/wiki/Leo_Minor",
        yt: "https://www.youtube.com/results?search_query=Leo+Minor+constellation+mythology",
        vedic: {
            sanskrit: "विश्व प्रपंच (Cosmic Expanse)", dev: "ब्रह्माण्ड देवता (Cosmic Navagraha)", 
            s_mantra: "ॐ नमो नारायणाय", e_mantra: "Om Namo Narayanaya",
            color: "Deep Celestial Blue", flower: "Blue Lotus", food: "Panchamrita",
            h_cal: "Sarva Maasa (Year-Round Context)", e_cal: "Standard Deep Sky Observation",
            fact: "A deep-space collective beyond traditional Vedic ecliptic mapping. Revered through universal cosmic expansion texts. *[Flagged: Universal Map]*"
        },
        wiki: "https://en.wikipedia.org/wiki/Leo_Minor",
        yt: "https://www.youtube.com/results?search_query=Leo+Minor+constellation+mythology",
        vedic: {
            sanskrit: "विश्व प्रपंच (Cosmic Expanse)", dev: "ब्रह्माण्ड देवता (Cosmic Navagraha)", 
            s_mantra: "ॐ नमो नारायणाय", e_mantra: "Om Namo Narayanaya",
            color: "Deep Celestial Blue", flower: "Blue Lotus", food: "Panchamrita",
            h_cal: "Sarva Maasa (Year-Round Context)", e_cal: "Standard Deep Sky Observation",
            fact: "A deep-space collective beyond traditional Vedic ecliptic mapping. Revered through universal cosmic expansion texts. *[Flagged: Yet to know from officials]*"
        },
        desc: "Leo Minor is one of the 88 modern constellations defined by the IAU.",
        myth: "Known since classical antiquity, this constellation is rich in history and lore. The Lesser Lion marks its place in the heavens.",
        facts: ["Officially recognized by the International Astronomical Union in 1922.", "Covers the sky at approximately RA 10h and Dec 35°."],
        stats: { Area: "Varies", "Main Stars": "8", Distance: "Varies", Season: "Varies" }, tags: ["North", "IAU"]
    },

    {
        name: "Lepus", abbr: "Lep", latin: "The Hare", type: "south", ra: 5, dec: -20,
        stars: [{ "n": "AlphaD", "x": -0.1, "y": 0.37 }, { "n": "", "x": -0.66, "y": -0.88 }, { "n": "", "x": -1.13, "y": 1.01 }, { "n": "", "x": 0.41, "y": 0.03 }, { "n": "", "x": -0.47, "y": -0.61 }, { "n": "", "x": 0.38, "y": -0.88 }, { "n": "", "x": 1.2, "y": -0.53 }, { "n": "", "x": -0.43, "y": 0.67 }],
        lines: [[0, 5], [0, 6], [6, 7], [7, 1], [0, 3], [6, 2], [2, 4]],
        wiki: "https://en.wikipedia.org/wiki/Lepus",
        yt: "https://www.youtube.com/results?search_query=Lepus+constellation+mythology",
        vedic: {
            sanskrit: "विश्व प्रपंच (Cosmic Expanse)", dev: "ब्रह्माण्ड देवता (Cosmic Navagraha)", 
            s_mantra: "ॐ नमो नारायणाय", e_mantra: "Om Namo Narayanaya",
            color: "Deep Celestial Blue", flower: "Blue Lotus", food: "Panchamrita",
            h_cal: "Sarva Maasa (Year-Round Context)", e_cal: "Standard Deep Sky Observation",
            fact: "A deep-space collective beyond traditional Vedic ecliptic mapping. Revered through universal cosmic expansion texts. *[Flagged: Universal Map]*"
        },
        wiki: "https://en.wikipedia.org/wiki/Lepus",
        yt: "https://www.youtube.com/results?search_query=Lepus+constellation+mythology",
        vedic: {
            sanskrit: "विश्व प्रपंच (Cosmic Expanse)", dev: "ब्रह्माण्ड देवता (Cosmic Navagraha)", 
            s_mantra: "ॐ नमो नारायणाय", e_mantra: "Om Namo Narayanaya",
            color: "Deep Celestial Blue", flower: "Blue Lotus", food: "Panchamrita",
            h_cal: "Sarva Maasa (Year-Round Context)", e_cal: "Standard Deep Sky Observation",
            fact: "A deep-space collective beyond traditional Vedic ecliptic mapping. Revered through universal cosmic expansion texts. *[Flagged: Yet to know from officials]*"
        },
        desc: "Lepus is one of the 88 modern constellations defined by the IAU.",
        myth: "Known since classical antiquity, this constellation is rich in history and lore. The Hare marks its place in the heavens.",
        facts: ["Officially recognized by the International Astronomical Union in 1922.", "Covers the sky at approximately RA 5h and Dec -20°."],
        stats: { Area: "Varies", "Main Stars": "8", Distance: "Varies", Season: "Varies" }, tags: ["South", "IAU"]
    },

    {
        name: "Libra", abbr: "Lib", latin: "The Scales", type: "south", zodiac: true, ra: 15, dec: -15,
        stars: [{ "n": "AlphaP", "x": 0.09, "y": -0.47 }, { "n": "", "x": -0.79, "y": -0.87 }, { "n": "", "x": 0.1, "y": -1.4 }, { "n": "", "x": -0.46, "y": 1.44 }, { "n": "", "x": -0.1, "y": 0.57 }, { "n": "", "x": 0.98, "y": -1.25 }, { "n": "", "x": -0.87, "y": 0.89 }],
        lines: [[0, 2], [2, 4], [4, 3], [0, 6], [4, 1], [0, 5], [1, 0], [4, 5], [3, 0]],
        wiki: "https://en.wikipedia.org/wiki/Libra",
        yt: "https://www.youtube.com/results?search_query=Libra+constellation+mythology",
        vedic: {
            sanskrit: "Tula", dev: "Shukra (Venus)", 
            s_mantra: "ॐ द्रां द्रीं द्रौं सः शुक्राय नमः", e_mantra: "Om Draam Dreem Droum Sah Shukraya Namaha",
            color: "Translucent White", flower: "White Rose", food: "Curd & Sweets",
            h_cal: "Ashvina (September - October)", e_cal: "Summer",
            fact: "Cosmic balance, maintaining divine harmony and justice across the heavenly spheres."
        },
        wiki: "https://en.wikipedia.org/wiki/Libra",
        yt: "https://www.youtube.com/results?search_query=Libra+constellation+mythology",
        vedic: {
            sanskrit: "Tula", dev: "Shukra (Venus)", 
            s_mantra: "ॐ द्रां द्रीं द्रौं सः शुक्राय नमः", e_mantra: "Om Draam Dreem Droum Sah Shukraya Namaha",
            color: "Translucent White", flower: "White Rose", food: "Curd & Sweets",
            h_cal: "Ashvina (September - October)", e_cal: "Summer",
            fact: "Cosmic balance, maintaining divine harmony and justice across the heavenly spheres."
        },
        desc: "Libra is one of the 88 modern constellations defined by the IAU.",
        myth: "Known since classical antiquity, this constellation is rich in history and lore. The Scales marks its place in the heavens.",
        facts: ["Officially recognized by the International Astronomical Union in 1922.", "Covers the sky at approximately RA 15h and Dec -15°."],
        stats: { Area: "Varies", "Main Stars": "7", Distance: "Varies", Season: "Varies" }, tags: ["South", "IAU"]
    },

    {
        name: "Lupus", abbr: "Lup", latin: "The Wolf", type: "south", ra: 15, dec: -45,
        stars: [{ "n": "AlphaT", "x": -0.46, "y": 0.42 }, { "n": "", "x": 1.01, "y": 0.79 }, { "n": "", "x": 0.36, "y": 0.3 }, { "n": "", "x": 1.39, "y": -0.21 }, { "n": "", "x": -0.12, "y": 0.52 }, { "n": "", "x": -0.63, "y": 1.22 }],
        lines: [[0, 1], [0, 5], [1, 3], [5, 2], [1, 4], [4, 3]],
        wiki: "https://en.wikipedia.org/wiki/Lupus",
        yt: "https://www.youtube.com/results?search_query=Lupus+constellation+mythology",
        vedic: {
            sanskrit: "विश्व प्रपंच (Cosmic Expanse)", dev: "ब्रह्माण्ड देवता (Cosmic Navagraha)", 
            s_mantra: "ॐ नमो नारायणाय", e_mantra: "Om Namo Narayanaya",
            color: "Deep Celestial Blue", flower: "Blue Lotus", food: "Panchamrita",
            h_cal: "Sarva Maasa (Year-Round Context)", e_cal: "Standard Deep Sky Observation",
            fact: "A deep-space collective beyond traditional Vedic ecliptic mapping. Revered through universal cosmic expansion texts. *[Flagged: Universal Map]*"
        },
        wiki: "https://en.wikipedia.org/wiki/Lupus",
        yt: "https://www.youtube.com/results?search_query=Lupus+constellation+mythology",
        vedic: {
            sanskrit: "विश्व प्रपंच (Cosmic Expanse)", dev: "ब्रह्माण्ड देवता (Cosmic Navagraha)", 
            s_mantra: "ॐ नमो नारायणाय", e_mantra: "Om Namo Narayanaya",
            color: "Deep Celestial Blue", flower: "Blue Lotus", food: "Panchamrita",
            h_cal: "Sarva Maasa (Year-Round Context)", e_cal: "Standard Deep Sky Observation",
            fact: "A deep-space collective beyond traditional Vedic ecliptic mapping. Revered through universal cosmic expansion texts. *[Flagged: Yet to know from officials]*"
        },
        desc: "Lupus is one of the 88 modern constellations defined by the IAU.",
        myth: "Known since classical antiquity, this constellation is rich in history and lore. The Wolf marks its place in the heavens.",
        facts: ["Officially recognized by the International Astronomical Union in 1922.", "Covers the sky at approximately RA 15h and Dec -45°."],
        stats: { Area: "Varies", "Main Stars": "6", Distance: "Varies", Season: "Varies" }, tags: ["South", "IAU"]
    },

    {
        name: "Lynx", abbr: "Lyn", latin: "The Lynx", type: "north", ra: 8, dec: 45,
        stars: [{ "n": "AlphaD", "x": -0.3, "y": -0.27 }, { "n": "", "x": 1.23, "y": -1.22 }, { "n": "", "x": -0.12, "y": 0.85 }, { "n": "", "x": 0.07, "y": 0.36 }, { "n": "", "x": -1.2, "y": -0.22 }, { "n": "", "x": 0.62, "y": -0.06 }],
        lines: [[0, 2], [0, 3], [2, 5], [0, 1], [1, 4], [5, 4]],
        wiki: "https://en.wikipedia.org/wiki/Lynx",
        yt: "https://www.youtube.com/results?search_query=Lynx+constellation+mythology",
        vedic: {
            sanskrit: "विश्व प्रपंच (Cosmic Expanse)", dev: "ब्रह्माण्ड देवता (Cosmic Navagraha)", 
            s_mantra: "ॐ नमो नारायणाय", e_mantra: "Om Namo Narayanaya",
            color: "Deep Celestial Blue", flower: "Blue Lotus", food: "Panchamrita",
            h_cal: "Sarva Maasa (Year-Round Context)", e_cal: "Standard Deep Sky Observation",
            fact: "A deep-space collective beyond traditional Vedic ecliptic mapping. Revered through universal cosmic expansion texts. *[Flagged: Universal Map]*"
        },
        wiki: "https://en.wikipedia.org/wiki/Lynx",
        yt: "https://www.youtube.com/results?search_query=Lynx+constellation+mythology",
        vedic: {
            sanskrit: "विश्व प्रपंच (Cosmic Expanse)", dev: "ब्रह्माण्ड देवता (Cosmic Navagraha)", 
            s_mantra: "ॐ नमो नारायणाय", e_mantra: "Om Namo Narayanaya",
            color: "Deep Celestial Blue", flower: "Blue Lotus", food: "Panchamrita",
            h_cal: "Sarva Maasa (Year-Round Context)", e_cal: "Standard Deep Sky Observation",
            fact: "A deep-space collective beyond traditional Vedic ecliptic mapping. Revered through universal cosmic expansion texts. *[Flagged: Yet to know from officials]*"
        },
        desc: "Lynx is one of the 88 modern constellations defined by the IAU.",
        myth: "Known since classical antiquity, this constellation is rich in history and lore. The Lynx marks its place in the heavens.",
        facts: ["Officially recognized by the International Astronomical Union in 1922.", "Covers the sky at approximately RA 8h and Dec 45°."],
        stats: { Area: "Varies", "Main Stars": "6", Distance: "Varies", Season: "Varies" }, tags: ["North", "IAU"]
    },

    {
        name: "Mensa", abbr: "Men", latin: "The Table Mountain", type: "south", ra: 5, dec: -75,
        stars: [{ "n": "AlphaM", "x": 0.47, "y": 0.37 }, { "n": "", "x": 0.77, "y": 1.02 }, { "n": "", "x": 0.69, "y": -1.13 }, { "n": "", "x": -0.25, "y": 0.01 }, { "n": "", "x": 0.92, "y": 1.0 }, { "n": "", "x": -1.09, "y": 0.1 }, { "n": "", "x": 1.18, "y": -0.05 }],
        lines: [[0, 6], [6, 1], [6, 4], [0, 2], [4, 3], [6, 5]],
        wiki: "https://en.wikipedia.org/wiki/Mensa",
        yt: "https://www.youtube.com/results?search_query=Mensa+constellation+mythology",
        vedic: {
            sanskrit: "विश्व प्रपंच (Cosmic Expanse)", dev: "ब्रह्माण्ड देवता (Cosmic Navagraha)", 
            s_mantra: "ॐ नमो नारायणाय", e_mantra: "Om Namo Narayanaya",
            color: "Deep Celestial Blue", flower: "Blue Lotus", food: "Panchamrita",
            h_cal: "Sarva Maasa (Year-Round Context)", e_cal: "Standard Deep Sky Observation",
            fact: "A deep-space collective beyond traditional Vedic ecliptic mapping. Revered through universal cosmic expansion texts. *[Flagged: Universal Map]*"
        },
        wiki: "https://en.wikipedia.org/wiki/Mensa",
        yt: "https://www.youtube.com/results?search_query=Mensa+constellation+mythology",
        vedic: {
            sanskrit: "विश्व प्रपंच (Cosmic Expanse)", dev: "ब्रह्माण्ड देवता (Cosmic Navagraha)", 
            s_mantra: "ॐ नमो नारायणाय", e_mantra: "Om Namo Narayanaya",
            color: "Deep Celestial Blue", flower: "Blue Lotus", food: "Panchamrita",
            h_cal: "Sarva Maasa (Year-Round Context)", e_cal: "Standard Deep Sky Observation",
            fact: "A deep-space collective beyond traditional Vedic ecliptic mapping. Revered through universal cosmic expansion texts. *[Flagged: Yet to know from officials]*"
        },
        desc: "Mensa is one of the 88 modern constellations defined by the IAU.",
        myth: "Known since classical antiquity, this constellation is rich in history and lore. The Table Mountain marks its place in the heavens.",
        facts: ["Officially recognized by the International Astronomical Union in 1922.", "Covers the sky at approximately RA 5h and Dec -75°."],
        stats: { Area: "Varies", "Main Stars": "7", Distance: "Varies", Season: "Varies" }, tags: ["South", "IAU"]
    },

    {
        name: "Microscopium", abbr: "Mic", latin: "The Microscope", type: "south", ra: 21, dec: -35,
        stars: [{ "n": "AlphaG", "x": 0.21, "y": -0.07 }, { "n": "", "x": -0.76, "y": 1.05 }, { "n": "", "x": -1.23, "y": 0.16 }, { "n": "", "x": -1.11, "y": 0.76 }, { "n": "", "x": 1.08, "y": 0.76 }, { "n": "", "x": -1.46, "y": -0.38 }, { "n": "", "x": -0.17, "y": 0.23 }, { "n": "", "x": -0.56, "y": 0.78 }, { "n": "", "x": 0.05, "y": -0.26 }, { "n": "", "x": -0.49, "y": -0.31 }],
        lines: [[0, 5], [5, 1], [0, 7], [5, 2], [2, 9], [1, 4], [7, 8], [7, 3], [2, 6]],
        wiki: "https://en.wikipedia.org/wiki/Microscopium",
        yt: "https://www.youtube.com/results?search_query=Microscopium+constellation+mythology",
        vedic: {
            sanskrit: "विश्व प्रपंच (Cosmic Expanse)", dev: "ब्रह्माण्ड देवता (Cosmic Navagraha)", 
            s_mantra: "ॐ नमो नारायणाय", e_mantra: "Om Namo Narayanaya",
            color: "Deep Celestial Blue", flower: "Blue Lotus", food: "Panchamrita",
            h_cal: "Sarva Maasa (Year-Round Context)", e_cal: "Standard Deep Sky Observation",
            fact: "A deep-space collective beyond traditional Vedic ecliptic mapping. Revered through universal cosmic expansion texts. *[Flagged: Universal Map]*"
        },
        wiki: "https://en.wikipedia.org/wiki/Microscopium",
        yt: "https://www.youtube.com/results?search_query=Microscopium+constellation+mythology",
        vedic: {
            sanskrit: "विश्व प्रपंच (Cosmic Expanse)", dev: "ब्रह्माण्ड देवता (Cosmic Navagraha)", 
            s_mantra: "ॐ नमो नारायणाय", e_mantra: "Om Namo Narayanaya",
            color: "Deep Celestial Blue", flower: "Blue Lotus", food: "Panchamrita",
            h_cal: "Sarva Maasa (Year-Round Context)", e_cal: "Standard Deep Sky Observation",
            fact: "A deep-space collective beyond traditional Vedic ecliptic mapping. Revered through universal cosmic expansion texts. *[Flagged: Yet to know from officials]*"
        },
        desc: "Microscopium is one of the 88 modern constellations defined by the IAU.",
        myth: "Known since classical antiquity, this constellation is rich in history and lore. The Microscope marks its place in the heavens.",
        facts: ["Officially recognized by the International Astronomical Union in 1922.", "Covers the sky at approximately RA 21h and Dec -35°."],
        stats: { Area: "Varies", "Main Stars": "10", Distance: "Varies", Season: "Varies" }, tags: ["South", "IAU"]
    },

    {
        name: "Monoceros", abbr: "Mon", latin: "The Unicorn", type: "south", ra: 7, dec: -5,
        stars: [{ "n": "AlphaR", "x": 0.1, "y": 0.37 }, { "n": "", "x": 1.43, "y": 0.46 }, { "n": "", "x": -0.06, "y": -1.43 }, { "n": "", "x": 1.31, "y": 0.36 }, { "n": "", "x": -1.31, "y": -0.89 }],
        lines: [[0, 1], [1, 2], [0, 3], [1, 4]],
        wiki: "https://en.wikipedia.org/wiki/Monoceros",
        yt: "https://www.youtube.com/results?search_query=Monoceros+constellation+mythology",
        vedic: {
            sanskrit: "विश्व प्रपंच (Cosmic Expanse)", dev: "ब्रह्माण्ड देवता (Cosmic Navagraha)", 
            s_mantra: "ॐ नमो नारायणाय", e_mantra: "Om Namo Narayanaya",
            color: "Deep Celestial Blue", flower: "Blue Lotus", food: "Panchamrita",
            h_cal: "Sarva Maasa (Year-Round Context)", e_cal: "Standard Deep Sky Observation",
            fact: "A deep-space collective beyond traditional Vedic ecliptic mapping. Revered through universal cosmic expansion texts. *[Flagged: Universal Map]*"
        },
        wiki: "https://en.wikipedia.org/wiki/Monoceros",
        yt: "https://www.youtube.com/results?search_query=Monoceros+constellation+mythology",
        vedic: {
            sanskrit: "विश्व प्रपंच (Cosmic Expanse)", dev: "ब्रह्माण्ड देवता (Cosmic Navagraha)", 
            s_mantra: "ॐ नमो नारायणाय", e_mantra: "Om Namo Narayanaya",
            color: "Deep Celestial Blue", flower: "Blue Lotus", food: "Panchamrita",
            h_cal: "Sarva Maasa (Year-Round Context)", e_cal: "Standard Deep Sky Observation",
            fact: "A deep-space collective beyond traditional Vedic ecliptic mapping. Revered through universal cosmic expansion texts. *[Flagged: Yet to know from officials]*"
        },
        desc: "Monoceros is one of the 88 modern constellations defined by the IAU.",
        myth: "Known since classical antiquity, this constellation is rich in history and lore. The Unicorn marks its place in the heavens.",
        facts: ["Officially recognized by the International Astronomical Union in 1922.", "Covers the sky at approximately RA 7h and Dec -5°."],
        stats: { Area: "Varies", "Main Stars": "5", Distance: "Varies", Season: "Varies" }, tags: ["South", "IAU"]
    },

    {
        name: "Musca", abbr: "Mus", latin: "The Fly", type: "south", ra: 12, dec: -70,
        stars: [{ "n": "AlphaV", "x": -0.27, "y": 0.31 }, { "n": "", "x": -0.17, "y": -1.07 }, { "n": "", "x": 1.07, "y": 0.09 }, { "n": "", "x": -0.16, "y": 0.23 }, { "n": "", "x": 1.08, "y": -0.16 }, { "n": "", "x": 0.57, "y": 0.16 }, { "n": "", "x": 1.34, "y": -0.16 }, { "n": "", "x": -1.33, "y": -0.95 }, { "n": "", "x": 0.06, "y": 0.37 }],
        lines: [[0, 8], [0, 3], [3, 4], [8, 7], [4, 5], [4, 2], [2, 6], [6, 1], [0, 5]],
        wiki: "https://en.wikipedia.org/wiki/Musca",
        yt: "https://www.youtube.com/results?search_query=Musca+constellation+mythology",
        vedic: {
            sanskrit: "विश्व प्रपंच (Cosmic Expanse)", dev: "ब्रह्माण्ड देवता (Cosmic Navagraha)", 
            s_mantra: "ॐ नमो नारायणाय", e_mantra: "Om Namo Narayanaya",
            color: "Deep Celestial Blue", flower: "Blue Lotus", food: "Panchamrita",
            h_cal: "Sarva Maasa (Year-Round Context)", e_cal: "Standard Deep Sky Observation",
            fact: "A deep-space collective beyond traditional Vedic ecliptic mapping. Revered through universal cosmic expansion texts. *[Flagged: Universal Map]*"
        },
        wiki: "https://en.wikipedia.org/wiki/Musca",
        yt: "https://www.youtube.com/results?search_query=Musca+constellation+mythology",
        vedic: {
            sanskrit: "विश्व प्रपंच (Cosmic Expanse)", dev: "ब्रह्माण्ड देवता (Cosmic Navagraha)", 
            s_mantra: "ॐ नमो नारायणाय", e_mantra: "Om Namo Narayanaya",
            color: "Deep Celestial Blue", flower: "Blue Lotus", food: "Panchamrita",
            h_cal: "Sarva Maasa (Year-Round Context)", e_cal: "Standard Deep Sky Observation",
            fact: "A deep-space collective beyond traditional Vedic ecliptic mapping. Revered through universal cosmic expansion texts. *[Flagged: Yet to know from officials]*"
        },
        desc: "Musca is one of the 88 modern constellations defined by the IAU.",
        myth: "Known since classical antiquity, this constellation is rich in history and lore. The Fly marks its place in the heavens.",
        facts: ["Officially recognized by the International Astronomical Union in 1922.", "Covers the sky at approximately RA 12h and Dec -70°."],
        stats: { Area: "Varies", "Main Stars": "9", Distance: "Varies", Season: "Varies" }, tags: ["South", "IAU"]
    },

    {
        name: "Norma", abbr: "Nor", latin: "The Carpenter's Square", type: "south", ra: 16, dec: -50,
        stars: [{ "n": "AlphaM", "x": 0.4, "y": -0.07 }, { "n": "", "x": -1.09, "y": 0.97 }, { "n": "", "x": 1.17, "y": 0.75 }, { "n": "", "x": 0.2, "y": -1.0 }, { "n": "", "x": 0.26, "y": 0.05 }, { "n": "", "x": -0.3, "y": -0.11 }, { "n": "", "x": -1.08, "y": 0.62 }, { "n": "", "x": 1.48, "y": 1.43 }, { "n": "", "x": -1.11, "y": 0.62 }, { "n": "", "x": -0.44, "y": -0.3 }],
        lines: [[0, 2], [2, 5], [2, 8], [8, 9], [9, 1], [9, 6], [9, 3], [3, 4], [1, 7], [3, 1]],
        wiki: "https://en.wikipedia.org/wiki/Norma",
        yt: "https://www.youtube.com/results?search_query=Norma+constellation+mythology",
        vedic: {
            sanskrit: "विश्व प्रपंच (Cosmic Expanse)", dev: "ब्रह्माण्ड देवता (Cosmic Navagraha)", 
            s_mantra: "ॐ नमो नारायणाय", e_mantra: "Om Namo Narayanaya",
            color: "Deep Celestial Blue", flower: "Blue Lotus", food: "Panchamrita",
            h_cal: "Sarva Maasa (Year-Round Context)", e_cal: "Standard Deep Sky Observation",
            fact: "A deep-space collective beyond traditional Vedic ecliptic mapping. Revered through universal cosmic expansion texts. *[Flagged: Universal Map]*"
        },
        wiki: "https://en.wikipedia.org/wiki/Norma",
        yt: "https://www.youtube.com/results?search_query=Norma+constellation+mythology",
        vedic: {
            sanskrit: "विश्व प्रपंच (Cosmic Expanse)", dev: "ब्रह्माण्ड देवता (Cosmic Navagraha)", 
            s_mantra: "ॐ नमो नारायणाय", e_mantra: "Om Namo Narayanaya",
            color: "Deep Celestial Blue", flower: "Blue Lotus", food: "Panchamrita",
            h_cal: "Sarva Maasa (Year-Round Context)", e_cal: "Standard Deep Sky Observation",
            fact: "A deep-space collective beyond traditional Vedic ecliptic mapping. Revered through universal cosmic expansion texts. *[Flagged: Yet to know from officials]*"
        },
        desc: "Norma is one of the 88 modern constellations defined by the IAU.",
        myth: "Known since classical antiquity, this constellation is rich in history and lore. The Carpenter's Square marks its place in the heavens.",
        facts: ["Officially recognized by the International Astronomical Union in 1922.", "Covers the sky at approximately RA 16h and Dec -50°."],
        stats: { Area: "Varies", "Main Stars": "10", Distance: "Varies", Season: "Varies" }, tags: ["South", "IAU"]
    },

    {
        name: "Octans", abbr: "Oct", latin: "The Octant", type: "south", ra: 20, dec: -85,
        stars: [{ "n": "AlphaC", "x": 0.38, "y": 0.24 }, { "n": "", "x": 1.18, "y": 1.45 }, { "n": "", "x": -0.17, "y": -0.53 }, { "n": "", "x": -0.16, "y": -1.09 }, { "n": "", "x": -1.01, "y": -0.55 }, { "n": "", "x": 0.94, "y": -1.45 }, { "n": "", "x": -0.61, "y": 0.76 }, { "n": "", "x": 0.52, "y": 0.09 }],
        lines: [[0, 1], [0, 6], [0, 2], [0, 3], [1, 4], [6, 7], [6, 5]],
        wiki: "https://en.wikipedia.org/wiki/Octans",
        yt: "https://www.youtube.com/results?search_query=Octans+constellation+mythology",
        vedic: {
            sanskrit: "विश्व प्रपंच (Cosmic Expanse)", dev: "ब्रह्माण्ड देवता (Cosmic Navagraha)", 
            s_mantra: "ॐ नमो नारायणाय", e_mantra: "Om Namo Narayanaya",
            color: "Deep Celestial Blue", flower: "Blue Lotus", food: "Panchamrita",
            h_cal: "Sarva Maasa (Year-Round Context)", e_cal: "Standard Deep Sky Observation",
            fact: "A deep-space collective beyond traditional Vedic ecliptic mapping. Revered through universal cosmic expansion texts. *[Flagged: Universal Map]*"
        },
        wiki: "https://en.wikipedia.org/wiki/Octans",
        yt: "https://www.youtube.com/results?search_query=Octans+constellation+mythology",
        vedic: {
            sanskrit: "विश्व प्रपंच (Cosmic Expanse)", dev: "ब्रह्माण्ड देवता (Cosmic Navagraha)", 
            s_mantra: "ॐ नमो नारायणाय", e_mantra: "Om Namo Narayanaya",
            color: "Deep Celestial Blue", flower: "Blue Lotus", food: "Panchamrita",
            h_cal: "Sarva Maasa (Year-Round Context)", e_cal: "Standard Deep Sky Observation",
            fact: "A deep-space collective beyond traditional Vedic ecliptic mapping. Revered through universal cosmic expansion texts. *[Flagged: Yet to know from officials]*"
        },
        desc: "Octans is one of the 88 modern constellations defined by the IAU.",
        myth: "Known since classical antiquity, this constellation is rich in history and lore. The Octant marks its place in the heavens.",
        facts: ["Officially recognized by the International Astronomical Union in 1922.", "Covers the sky at approximately RA 20h and Dec -85°."],
        stats: { Area: "Varies", "Main Stars": "8", Distance: "Varies", Season: "Varies" }, tags: ["South", "IAU"]
    },

    {
        name: "Ophiuchus", abbr: "Oph", latin: "The Serpent Bearer", type: "south", ra: 17, dec: 0,
        stars: [{ "n": "AlphaD", "x": -0.5, "y": 0.34 }, { "n": "", "x": 1.4, "y": -0.38 }, { "n": "", "x": -1.47, "y": 0.92 }, { "n": "", "x": 0.93, "y": 0.69 }, { "n": "", "x": -0.27, "y": 1.3 }, { "n": "", "x": -0.58, "y": -0.15 }, { "n": "", "x": 1.18, "y": 0.67 }, { "n": "", "x": 0.73, "y": 0.96 }, { "n": "", "x": -1.36, "y": -1.34 }, { "n": "", "x": -0.67, "y": -1.06 }],
        lines: [[0, 1], [0, 5], [1, 4], [0, 3], [0, 6], [3, 7], [7, 9], [1, 8], [4, 2]],
        wiki: "https://en.wikipedia.org/wiki/Ophiuchus",
        yt: "https://www.youtube.com/results?search_query=Ophiuchus+constellation+mythology",
        vedic: {
            sanskrit: "Dhanvantari", dev: "God of Ayurveda", 
            s_mantra: "ॐ धन्वन्तरये नमः", e_mantra: "Om Dhanvantaraye Namaha",
            color: "Pale Yellow", flower: "Medicinal Herbs", food: "Amrita (Nectar) / Honey",
            h_cal: "Kartika", e_cal: "Summer",
            fact: "The celestial healer holding the serpeant of life and divine nectar of immortality."
        },
        wiki: "https://en.wikipedia.org/wiki/Ophiuchus",
        yt: "https://www.youtube.com/results?search_query=Ophiuchus+constellation+mythology",
        vedic: {
            sanskrit: "Dhanvantari", dev: "God of Ayurveda", 
            s_mantra: "ॐ धन्वन्तरये नमः", e_mantra: "Om Dhanvantaraye Namaha",
            color: "Pale Yellow", flower: "Medicinal Herbs", food: "Amrita (Nectar) / Honey",
            h_cal: "Kartika", e_cal: "Summer",
            fact: "The celestial healer holding the serpeant of life and divine nectar of immortality."
        },
        desc: "Ophiuchus is one of the 88 modern constellations defined by the IAU.",
        myth: "Known since classical antiquity, this constellation is rich in history and lore. The Serpent Bearer marks its place in the heavens.",
        facts: ["Officially recognized by the International Astronomical Union in 1922.", "Covers the sky at approximately RA 17h and Dec 0°."],
        stats: { Area: "Varies", "Main Stars": "10", Distance: "Varies", Season: "Varies" }, tags: ["South", "IAU"]
    },

    {
        name: "Pavo", abbr: "Pav", latin: "The Peacock", type: "south", ra: 20, dec: -65,
        stars: [{ "n": "AlphaV", "x": -0.01, "y": 0.42 }, { "n": "", "x": -1.06, "y": -0.99 }, { "n": "", "x": 0.01, "y": 0.08 }, { "n": "", "x": 1.3, "y": -0.6 }, { "n": "", "x": 0.21, "y": -0.13 }],
        lines: [[0, 1], [1, 3], [1, 2], [3, 4]],
        wiki: "https://en.wikipedia.org/wiki/Pavo",
        yt: "https://www.youtube.com/results?search_query=Pavo+constellation+mythology",
        vedic: {
            sanskrit: "विश्व प्रपंच (Cosmic Expanse)", dev: "ब्रह्माण्ड देवता (Cosmic Navagraha)", 
            s_mantra: "ॐ नमो नारायणाय", e_mantra: "Om Namo Narayanaya",
            color: "Deep Celestial Blue", flower: "Blue Lotus", food: "Panchamrita",
            h_cal: "Sarva Maasa (Year-Round Context)", e_cal: "Standard Deep Sky Observation",
            fact: "A deep-space collective beyond traditional Vedic ecliptic mapping. Revered through universal cosmic expansion texts. *[Flagged: Universal Map]*"
        },
        wiki: "https://en.wikipedia.org/wiki/Pavo",
        yt: "https://www.youtube.com/results?search_query=Pavo+constellation+mythology",
        vedic: {
            sanskrit: "विश्व प्रपंच (Cosmic Expanse)", dev: "ब्रह्माण्ड देवता (Cosmic Navagraha)", 
            s_mantra: "ॐ नमो नारायणाय", e_mantra: "Om Namo Narayanaya",
            color: "Deep Celestial Blue", flower: "Blue Lotus", food: "Panchamrita",
            h_cal: "Sarva Maasa (Year-Round Context)", e_cal: "Standard Deep Sky Observation",
            fact: "A deep-space collective beyond traditional Vedic ecliptic mapping. Revered through universal cosmic expansion texts. *[Flagged: Yet to know from officials]*"
        },
        desc: "Pavo is one of the 88 modern constellations defined by the IAU.",
        myth: "Known since classical antiquity, this constellation is rich in history and lore. The Peacock marks its place in the heavens.",
        facts: ["Officially recognized by the International Astronomical Union in 1922.", "Covers the sky at approximately RA 20h and Dec -65°."],
        stats: { Area: "Varies", "Main Stars": "5", Distance: "Varies", Season: "Varies" }, tags: ["South", "IAU"]
    },

    {
        name: "Phoenix", abbr: "Phe", latin: "The Phoenix", type: "south", ra: 1, dec: -50,
        stars: [{ "n": "AlphaU", "x": 0.46, "y": 0.09 }, { "n": "", "x": -0.52, "y": -0.29 }, { "n": "", "x": -0.36, "y": 0.09 }, { "n": "", "x": -0.77, "y": -0.44 }, { "n": "", "x": -0.21, "y": -0.48 }, { "n": "", "x": -1.46, "y": -1.07 }, { "n": "", "x": -0.64, "y": 0.85 }, { "n": "", "x": 0.24, "y": 0.36 }, { "n": "", "x": -0.94, "y": 0.94 }, { "n": "", "x": 1.02, "y": 0.82 }],
        lines: [[0, 4], [4, 2], [2, 8], [8, 1], [4, 6], [6, 9], [6, 7], [2, 5], [4, 3], [7, 8]],
        wiki: "https://en.wikipedia.org/wiki/Phoenix",
        yt: "https://www.youtube.com/results?search_query=Phoenix+constellation+mythology",
        vedic: {
            sanskrit: "विश्व प्रपंच (Cosmic Expanse)", dev: "ब्रह्माण्ड देवता (Cosmic Navagraha)", 
            s_mantra: "ॐ नमो नारायणाय", e_mantra: "Om Namo Narayanaya",
            color: "Deep Celestial Blue", flower: "Blue Lotus", food: "Panchamrita",
            h_cal: "Sarva Maasa (Year-Round Context)", e_cal: "Standard Deep Sky Observation",
            fact: "A deep-space collective beyond traditional Vedic ecliptic mapping. Revered through universal cosmic expansion texts. *[Flagged: Universal Map]*"
        },
        wiki: "https://en.wikipedia.org/wiki/Phoenix",
        yt: "https://www.youtube.com/results?search_query=Phoenix+constellation+mythology",
        vedic: {
            sanskrit: "विश्व प्रपंच (Cosmic Expanse)", dev: "ब्रह्माण्ड देवता (Cosmic Navagraha)", 
            s_mantra: "ॐ नमो नारायणाय", e_mantra: "Om Namo Narayanaya",
            color: "Deep Celestial Blue", flower: "Blue Lotus", food: "Panchamrita",
            h_cal: "Sarva Maasa (Year-Round Context)", e_cal: "Standard Deep Sky Observation",
            fact: "A deep-space collective beyond traditional Vedic ecliptic mapping. Revered through universal cosmic expansion texts. *[Flagged: Yet to know from officials]*"
        },
        desc: "Phoenix is one of the 88 modern constellations defined by the IAU.",
        myth: "Known since classical antiquity, this constellation is rich in history and lore. The Phoenix marks its place in the heavens.",
        facts: ["Officially recognized by the International Astronomical Union in 1922.", "Covers the sky at approximately RA 1h and Dec -50°."],
        stats: { Area: "Varies", "Main Stars": "10", Distance: "Varies", Season: "Varies" }, tags: ["South", "IAU"]
    },

    {
        name: "Pictor", abbr: "Pic", latin: "The Painter's Easel", type: "south", ra: 5, dec: -55,
        stars: [{ "n": "AlphaH", "x": 0.48, "y": 0.44 }, { "n": "", "x": -1.01, "y": -1.02 }, { "n": "", "x": 0.58, "y": 1.29 }, { "n": "", "x": -0.41, "y": 1.45 }, { "n": "", "x": -0.34, "y": 0.34 }],
        lines: [[0, 1], [0, 4], [0, 3], [1, 2], [4, 2]],
        wiki: "https://en.wikipedia.org/wiki/Pictor",
        yt: "https://www.youtube.com/results?search_query=Pictor+constellation+mythology",
        vedic: {
            sanskrit: "विश्व प्रपंच (Cosmic Expanse)", dev: "ब्रह्माण्ड देवता (Cosmic Navagraha)", 
            s_mantra: "ॐ नमो नारायणाय", e_mantra: "Om Namo Narayanaya",
            color: "Deep Celestial Blue", flower: "Blue Lotus", food: "Panchamrita",
            h_cal: "Sarva Maasa (Year-Round Context)", e_cal: "Standard Deep Sky Observation",
            fact: "A deep-space collective beyond traditional Vedic ecliptic mapping. Revered through universal cosmic expansion texts. *[Flagged: Universal Map]*"
        },
        wiki: "https://en.wikipedia.org/wiki/Pictor",
        yt: "https://www.youtube.com/results?search_query=Pictor+constellation+mythology",
        vedic: {
            sanskrit: "विश्व प्रपंच (Cosmic Expanse)", dev: "ब्रह्माण्ड देवता (Cosmic Navagraha)", 
            s_mantra: "ॐ नमो नारायणाय", e_mantra: "Om Namo Narayanaya",
            color: "Deep Celestial Blue", flower: "Blue Lotus", food: "Panchamrita",
            h_cal: "Sarva Maasa (Year-Round Context)", e_cal: "Standard Deep Sky Observation",
            fact: "A deep-space collective beyond traditional Vedic ecliptic mapping. Revered through universal cosmic expansion texts. *[Flagged: Yet to know from officials]*"
        },
        desc: "Pictor is one of the 88 modern constellations defined by the IAU.",
        myth: "Known since classical antiquity, this constellation is rich in history and lore. The Painter's Easel marks its place in the heavens.",
        facts: ["Officially recognized by the International Astronomical Union in 1922.", "Covers the sky at approximately RA 5h and Dec -55°."],
        stats: { Area: "Varies", "Main Stars": "5", Distance: "Varies", Season: "Varies" }, tags: ["South", "IAU"]
    },

    {
        name: "Pisces", abbr: "Psc", latin: "The Fishes", type: "north", zodiac: true, ra: 1, dec: 10,
        stars: [{ "n": "AlphaE", "x": -0.17, "y": 0.46 }, { "n": "", "x": -1.04, "y": 0.46 }, { "n": "", "x": -0.07, "y": 0.67 }, { "n": "", "x": -0.56, "y": 0.75 }, { "n": "", "x": 0.15, "y": -0.15 }, { "n": "", "x": 0.27, "y": -1.03 }, { "n": "", "x": -1.19, "y": 1.19 }],
        lines: [[0, 2], [2, 1], [0, 6], [1, 4], [6, 3], [3, 5]],
        wiki: "https://en.wikipedia.org/wiki/Pisces",
        yt: "https://www.youtube.com/results?search_query=Pisces+constellation+mythology",
        vedic: {
            sanskrit: "Meena", dev: "Brihaspati (Jupiter)", 
            s_mantra: "ॐ ग्रां ग्रीं ग्रौं सः गुरवे नमः", e_mantra: "Om Graam Greem Groum Sah Gurave Namaha",
            color: "Yellow / Orange", flower: "Yellow Kaner", food: "Yellow Sweets",
            h_cal: "Phalguna (February - March)", e_cal: "Autumn / Winter",
            fact: "The ethereal ocean where profound cosmic liberation and spiritual moksha are attained."
        },
        wiki: "https://en.wikipedia.org/wiki/Pisces",
        yt: "https://www.youtube.com/results?search_query=Pisces+constellation+mythology",
        vedic: {
            sanskrit: "Meena", dev: "Brihaspati (Jupiter)", 
            s_mantra: "ॐ ग्रां ग्रीं ग्रौं सः गुरवे नमः", e_mantra: "Om Graam Greem Groum Sah Gurave Namaha",
            color: "Yellow / Orange", flower: "Yellow Kaner", food: "Yellow Sweets",
            h_cal: "Phalguna (February - March)", e_cal: "Autumn / Winter",
            fact: "The ethereal ocean where profound cosmic liberation and spiritual moksha are attained."
        },
        desc: "Pisces is one of the 88 modern constellations defined by the IAU.",
        myth: "Known since classical antiquity, this constellation is rich in history and lore. The Fishes marks its place in the heavens.",
        facts: ["Officially recognized by the International Astronomical Union in 1922.", "Covers the sky at approximately RA 1h and Dec 10°."],
        stats: { Area: "Varies", "Main Stars": "7", Distance: "Varies", Season: "Varies" }, tags: ["North", "IAU"]
    },

    {
        name: "Piscis Austrinus", abbr: "PsA", latin: "The Southern Fish", type: "south", ra: 22, dec: -30,
        stars: [{ "n": "AlphaN", "x": -0.02, "y": -0.16 }, { "n": "", "x": 1.4, "y": 0.36 }, { "n": "", "x": 0.11, "y": -0.7 }, { "n": "", "x": -0.69, "y": -0.66 }, { "n": "", "x": -1.5, "y": -1.12 }, { "n": "", "x": 0.01, "y": 1.49 }, { "n": "", "x": 0.69, "y": -0.35 }, { "n": "", "x": -0.39, "y": -0.27 }, { "n": "", "x": 0.97, "y": 0.24 }, { "n": "", "x": -0.3, "y": -0.43 }],
        lines: [[0, 4], [0, 3], [3, 1], [3, 9], [0, 6], [6, 7], [4, 2], [6, 5], [4, 8]],
        wiki: "https://en.wikipedia.org/wiki/Piscis_Austrinus",
        yt: "https://www.youtube.com/results?search_query=Piscis+Austrinus+constellation+mythology",
        vedic: {
            sanskrit: "विश्व प्रपंच (Cosmic Expanse)", dev: "ब्रह्माण्ड देवता (Cosmic Navagraha)", 
            s_mantra: "ॐ नमो नारायणाय", e_mantra: "Om Namo Narayanaya",
            color: "Deep Celestial Blue", flower: "Blue Lotus", food: "Panchamrita",
            h_cal: "Sarva Maasa (Year-Round Context)", e_cal: "Standard Deep Sky Observation",
            fact: "A deep-space collective beyond traditional Vedic ecliptic mapping. Revered through universal cosmic expansion texts. *[Flagged: Universal Map]*"
        },
        wiki: "https://en.wikipedia.org/wiki/Piscis_Austrinus",
        yt: "https://www.youtube.com/results?search_query=Piscis+Austrinus+constellation+mythology",
        vedic: {
            sanskrit: "विश्व प्रपंच (Cosmic Expanse)", dev: "ब्रह्माण्ड देवता (Cosmic Navagraha)", 
            s_mantra: "ॐ नमो नारायणाय", e_mantra: "Om Namo Narayanaya",
            color: "Deep Celestial Blue", flower: "Blue Lotus", food: "Panchamrita",
            h_cal: "Sarva Maasa (Year-Round Context)", e_cal: "Standard Deep Sky Observation",
            fact: "A deep-space collective beyond traditional Vedic ecliptic mapping. Revered through universal cosmic expansion texts. *[Flagged: Yet to know from officials]*"
        },
        desc: "Piscis Austrinus is one of the 88 modern constellations defined by the IAU.",
        myth: "Known since classical antiquity, this constellation is rich in history and lore. The Southern Fish marks its place in the heavens.",
        facts: ["Officially recognized by the International Astronomical Union in 1922.", "Covers the sky at approximately RA 22h and Dec -30°."],
        stats: { Area: "Varies", "Main Stars": "10", Distance: "Varies", Season: "Varies" }, tags: ["South", "IAU"]
    },

    {
        name: "Puppis", abbr: "Pup", latin: "The Poop Deck", type: "south", ra: 7, dec: -40,
        stars: [{ "n": "AlphaJ", "x": 0.1, "y": 0.24 }, { "n": "", "x": -1.4, "y": -0.79 }, { "n": "", "x": 0.04, "y": 0.75 }, { "n": "", "x": -1.48, "y": 0.43 }, { "n": "", "x": 1.46, "y": 0.85 }, { "n": "", "x": -0.04, "y": 1.28 }, { "n": "", "x": -0.13, "y": -1.01 }],
        lines: [[0, 6], [6, 1], [0, 5], [1, 2], [5, 4], [0, 3], [2, 0]],
        wiki: "https://en.wikipedia.org/wiki/Puppis",
        yt: "https://www.youtube.com/results?search_query=Puppis+constellation+mythology",
        vedic: {
            sanskrit: "विश्व प्रपंच (Cosmic Expanse)", dev: "ब्रह्माण्ड देवता (Cosmic Navagraha)", 
            s_mantra: "ॐ नमो नारायणाय", e_mantra: "Om Namo Narayanaya",
            color: "Deep Celestial Blue", flower: "Blue Lotus", food: "Panchamrita",
            h_cal: "Sarva Maasa (Year-Round Context)", e_cal: "Standard Deep Sky Observation",
            fact: "A deep-space collective beyond traditional Vedic ecliptic mapping. Revered through universal cosmic expansion texts. *[Flagged: Universal Map]*"
        },
        wiki: "https://en.wikipedia.org/wiki/Puppis",
        yt: "https://www.youtube.com/results?search_query=Puppis+constellation+mythology",
        vedic: {
            sanskrit: "विश्व प्रपंच (Cosmic Expanse)", dev: "ब्रह्माण्ड देवता (Cosmic Navagraha)", 
            s_mantra: "ॐ नमो नारायणाय", e_mantra: "Om Namo Narayanaya",
            color: "Deep Celestial Blue", flower: "Blue Lotus", food: "Panchamrita",
            h_cal: "Sarva Maasa (Year-Round Context)", e_cal: "Standard Deep Sky Observation",
            fact: "A deep-space collective beyond traditional Vedic ecliptic mapping. Revered through universal cosmic expansion texts. *[Flagged: Yet to know from officials]*"
        },
        desc: "Puppis is one of the 88 modern constellations defined by the IAU.",
        myth: "Known since classical antiquity, this constellation is rich in history and lore. The Poop Deck marks its place in the heavens.",
        facts: ["Officially recognized by the International Astronomical Union in 1922.", "Covers the sky at approximately RA 7h and Dec -40°."],
        stats: { Area: "Varies", "Main Stars": "7", Distance: "Varies", Season: "Varies" }, tags: ["South", "IAU"]
    },

    {
        name: "Pyxis", abbr: "Pyx", latin: "The Compass", type: "south", ra: 9, dec: -30,
        stars: [{ "n": "AlphaR", "x": 0.03, "y": -0.17 }, { "n": "", "x": 0.38, "y": -0.2 }, { "n": "", "x": 1.46, "y": 1.31 }, { "n": "", "x": -0.76, "y": -1.15 }, { "n": "", "x": 0.7, "y": 0.92 }, { "n": "", "x": 0.37, "y": 1.0 }, { "n": "", "x": -0.7, "y": 0.73 }, { "n": "", "x": -0.18, "y": -0.3 }],
        lines: [[0, 1], [0, 4], [1, 7], [4, 6], [0, 2], [1, 5], [5, 3]],
        wiki: "https://en.wikipedia.org/wiki/Pyxis",
        yt: "https://www.youtube.com/results?search_query=Pyxis+constellation+mythology",
        vedic: {
            sanskrit: "विश्व प्रपंच (Cosmic Expanse)", dev: "ब्रह्माण्ड देवता (Cosmic Navagraha)", 
            s_mantra: "ॐ नमो नारायणाय", e_mantra: "Om Namo Narayanaya",
            color: "Deep Celestial Blue", flower: "Blue Lotus", food: "Panchamrita",
            h_cal: "Sarva Maasa (Year-Round Context)", e_cal: "Standard Deep Sky Observation",
            fact: "A deep-space collective beyond traditional Vedic ecliptic mapping. Revered through universal cosmic expansion texts. *[Flagged: Universal Map]*"
        },
        wiki: "https://en.wikipedia.org/wiki/Pyxis",
        yt: "https://www.youtube.com/results?search_query=Pyxis+constellation+mythology",
        vedic: {
            sanskrit: "विश्व प्रपंच (Cosmic Expanse)", dev: "ब्रह्माण्ड देवता (Cosmic Navagraha)", 
            s_mantra: "ॐ नमो नारायणाय", e_mantra: "Om Namo Narayanaya",
            color: "Deep Celestial Blue", flower: "Blue Lotus", food: "Panchamrita",
            h_cal: "Sarva Maasa (Year-Round Context)", e_cal: "Standard Deep Sky Observation",
            fact: "A deep-space collective beyond traditional Vedic ecliptic mapping. Revered through universal cosmic expansion texts. *[Flagged: Yet to know from officials]*"
        },
        desc: "Pyxis is one of the 88 modern constellations defined by the IAU.",
        myth: "Known since classical antiquity, this constellation is rich in history and lore. The Compass marks its place in the heavens.",
        facts: ["Officially recognized by the International Astronomical Union in 1922.", "Covers the sky at approximately RA 9h and Dec -30°."],
        stats: { Area: "Varies", "Main Stars": "8", Distance: "Varies", Season: "Varies" }, tags: ["South", "IAU"]
    },

    {
        name: "Reticulum", abbr: "Ret", latin: "The Reticle", type: "south", ra: 4, dec: -60,
        stars: [{ "n": "AlphaA", "x": -0.42, "y": 0.3 }, { "n": "", "x": 1.43, "y": 0.72 }, { "n": "", "x": -0.09, "y": 0.53 }, { "n": "", "x": 0.44, "y": 0.68 }, { "n": "", "x": -0.87, "y": 0.52 }],
        lines: [[0, 3], [3, 2], [2, 4], [3, 1]],
        wiki: "https://en.wikipedia.org/wiki/Reticulum",
        yt: "https://www.youtube.com/results?search_query=Reticulum+constellation+mythology",
        vedic: {
            sanskrit: "विश्व प्रपंच (Cosmic Expanse)", dev: "ब्रह्माण्ड देवता (Cosmic Navagraha)", 
            s_mantra: "ॐ नमो नारायणाय", e_mantra: "Om Namo Narayanaya",
            color: "Deep Celestial Blue", flower: "Blue Lotus", food: "Panchamrita",
            h_cal: "Sarva Maasa (Year-Round Context)", e_cal: "Standard Deep Sky Observation",
            fact: "A deep-space collective beyond traditional Vedic ecliptic mapping. Revered through universal cosmic expansion texts. *[Flagged: Universal Map]*"
        },
        wiki: "https://en.wikipedia.org/wiki/Reticulum",
        yt: "https://www.youtube.com/results?search_query=Reticulum+constellation+mythology",
        vedic: {
            sanskrit: "विश्व प्रपंच (Cosmic Expanse)", dev: "ब्रह्माण्ड देवता (Cosmic Navagraha)", 
            s_mantra: "ॐ नमो नारायणाय", e_mantra: "Om Namo Narayanaya",
            color: "Deep Celestial Blue", flower: "Blue Lotus", food: "Panchamrita",
            h_cal: "Sarva Maasa (Year-Round Context)", e_cal: "Standard Deep Sky Observation",
            fact: "A deep-space collective beyond traditional Vedic ecliptic mapping. Revered through universal cosmic expansion texts. *[Flagged: Yet to know from officials]*"
        },
        desc: "Reticulum is one of the 88 modern constellations defined by the IAU.",
        myth: "Known since classical antiquity, this constellation is rich in history and lore. The Reticle marks its place in the heavens.",
        facts: ["Officially recognized by the International Astronomical Union in 1922.", "Covers the sky at approximately RA 4h and Dec -60°."],
        stats: { Area: "Varies", "Main Stars": "5", Distance: "Varies", Season: "Varies" }, tags: ["South", "IAU"]
    },

    {
        name: "Sagitta", abbr: "Sge", latin: "The Arrow", type: "north", ra: 19, dec: 15,
        stars: [{ "n": "AlphaS", "x": 0.09, "y": 0.41 }, { "n": "", "x": 0.64, "y": 1.21 }, { "n": "", "x": 0.34, "y": 0.79 }, { "n": "", "x": -0.83, "y": -0.89 }, { "n": "", "x": 0.16, "y": 0.7 }, { "n": "", "x": -1.16, "y": 0.75 }, { "n": "", "x": -0.67, "y": 0.27 }, { "n": "", "x": 0.71, "y": 1.36 }, { "n": "", "x": 1.06, "y": -0.52 }, { "n": "", "x": -0.31, "y": 0.32 }],
        lines: [[0, 2], [2, 4], [2, 5], [5, 1], [4, 6], [0, 7], [1, 3], [6, 9], [9, 8], [5, 9], [0, 8], [9, 1]],
        wiki: "https://en.wikipedia.org/wiki/Sagitta",
        yt: "https://www.youtube.com/results?search_query=Sagitta+constellation+mythology",
        vedic: {
            sanskrit: "विश्व प्रपंच (Cosmic Expanse)", dev: "ब्रह्माण्ड देवता (Cosmic Navagraha)", 
            s_mantra: "ॐ नमो नारायणाय", e_mantra: "Om Namo Narayanaya",
            color: "Deep Celestial Blue", flower: "Blue Lotus", food: "Panchamrita",
            h_cal: "Sarva Maasa (Year-Round Context)", e_cal: "Standard Deep Sky Observation",
            fact: "A deep-space collective beyond traditional Vedic ecliptic mapping. Revered through universal cosmic expansion texts. *[Flagged: Universal Map]*"
        },
        wiki: "https://en.wikipedia.org/wiki/Sagitta",
        yt: "https://www.youtube.com/results?search_query=Sagitta+constellation+mythology",
        vedic: {
            sanskrit: "विश्व प्रपंच (Cosmic Expanse)", dev: "ब्रह्माण्ड देवता (Cosmic Navagraha)", 
            s_mantra: "ॐ नमो नारायणाय", e_mantra: "Om Namo Narayanaya",
            color: "Deep Celestial Blue", flower: "Blue Lotus", food: "Panchamrita",
            h_cal: "Sarva Maasa (Year-Round Context)", e_cal: "Standard Deep Sky Observation",
            fact: "A deep-space collective beyond traditional Vedic ecliptic mapping. Revered through universal cosmic expansion texts. *[Flagged: Yet to know from officials]*"
        },
        desc: "Sagitta is one of the 88 modern constellations defined by the IAU.",
        myth: "Known since classical antiquity, this constellation is rich in history and lore. The Arrow marks its place in the heavens.",
        facts: ["Officially recognized by the International Astronomical Union in 1922.", "Covers the sky at approximately RA 19h and Dec 15°."],
        stats: { Area: "Varies", "Main Stars": "10", Distance: "Varies", Season: "Varies" }, tags: ["North", "IAU"]
    },

    {
        name: "Sculptor", abbr: "Scl", latin: "The Sculptor", type: "south", ra: 0, dec: -30,
        stars: [{ "n": "AlphaK", "x": -0.07, "y": 0.43 }, { "n": "", "x": -1.12, "y": 0.53 }, { "n": "", "x": -0.49, "y": -0.12 }, { "n": "", "x": -0.5, "y": 0.28 }, { "n": "", "x": -0.09, "y": 0.48 }, { "n": "", "x": -0.4, "y": 0.72 }, { "n": "", "x": 0.83, "y": 0.33 }, { "n": "", "x": -1.2, "y": 1.35 }, { "n": "", "x": 1.35, "y": 1.02 }, { "n": "", "x": -1.48, "y": -0.36 }],
        lines: [[0, 5], [0, 8], [8, 2], [5, 4], [2, 6], [5, 9], [0, 1], [5, 7], [6, 3]],
        wiki: "https://en.wikipedia.org/wiki/Sculptor",
        yt: "https://www.youtube.com/results?search_query=Sculptor+constellation+mythology",
        vedic: {
            sanskrit: "विश्व प्रपंच (Cosmic Expanse)", dev: "ब्रह्माण्ड देवता (Cosmic Navagraha)", 
            s_mantra: "ॐ नमो नारायणाय", e_mantra: "Om Namo Narayanaya",
            color: "Deep Celestial Blue", flower: "Blue Lotus", food: "Panchamrita",
            h_cal: "Sarva Maasa (Year-Round Context)", e_cal: "Standard Deep Sky Observation",
            fact: "A deep-space collective beyond traditional Vedic ecliptic mapping. Revered through universal cosmic expansion texts. *[Flagged: Universal Map]*"
        },
        wiki: "https://en.wikipedia.org/wiki/Sculptor",
        yt: "https://www.youtube.com/results?search_query=Sculptor+constellation+mythology",
        vedic: {
            sanskrit: "विश्व प्रपंच (Cosmic Expanse)", dev: "ब्रह्माण्ड देवता (Cosmic Navagraha)", 
            s_mantra: "ॐ नमो नारायणाय", e_mantra: "Om Namo Narayanaya",
            color: "Deep Celestial Blue", flower: "Blue Lotus", food: "Panchamrita",
            h_cal: "Sarva Maasa (Year-Round Context)", e_cal: "Standard Deep Sky Observation",
            fact: "A deep-space collective beyond traditional Vedic ecliptic mapping. Revered through universal cosmic expansion texts. *[Flagged: Yet to know from officials]*"
        },
        desc: "Sculptor is one of the 88 modern constellations defined by the IAU.",
        myth: "Known since classical antiquity, this constellation is rich in history and lore. The Sculptor marks its place in the heavens.",
        facts: ["Officially recognized by the International Astronomical Union in 1922.", "Covers the sky at approximately RA 0h and Dec -30°."],
        stats: { Area: "Varies", "Main Stars": "10", Distance: "Varies", Season: "Varies" }, tags: ["South", "IAU"]
    },

    {
        name: "Scutum", abbr: "Sct", latin: "The Shield", type: "south", ra: 18, dec: -10,
        stars: [{ "n": "AlphaW", "x": 0.31, "y": 0.06 }, { "n": "", "x": 0.44, "y": -0.04 }, { "n": "", "x": 0.93, "y": 0.83 }, { "n": "", "x": 1.04, "y": 0.69 }, { "n": "", "x": 0.19, "y": -0.64 }, { "n": "", "x": 0.04, "y": -0.04 }, { "n": "", "x": -1.3, "y": 1.15 }],
        lines: [[0, 3], [0, 4], [4, 5], [5, 2], [4, 1], [1, 6], [0, 1]],
        wiki: "https://en.wikipedia.org/wiki/Scutum",
        yt: "https://www.youtube.com/results?search_query=Scutum+constellation+mythology",
        vedic: {
            sanskrit: "विश्व प्रपंच (Cosmic Expanse)", dev: "ब्रह्माण्ड देवता (Cosmic Navagraha)", 
            s_mantra: "ॐ नमो नारायणाय", e_mantra: "Om Namo Narayanaya",
            color: "Deep Celestial Blue", flower: "Blue Lotus", food: "Panchamrita",
            h_cal: "Sarva Maasa (Year-Round Context)", e_cal: "Standard Deep Sky Observation",
            fact: "A deep-space collective beyond traditional Vedic ecliptic mapping. Revered through universal cosmic expansion texts. *[Flagged: Universal Map]*"
        },
        wiki: "https://en.wikipedia.org/wiki/Scutum",
        yt: "https://www.youtube.com/results?search_query=Scutum+constellation+mythology",
        vedic: {
            sanskrit: "विश्व प्रपंच (Cosmic Expanse)", dev: "ब्रह्माण्ड देवता (Cosmic Navagraha)", 
            s_mantra: "ॐ नमो नारायणाय", e_mantra: "Om Namo Narayanaya",
            color: "Deep Celestial Blue", flower: "Blue Lotus", food: "Panchamrita",
            h_cal: "Sarva Maasa (Year-Round Context)", e_cal: "Standard Deep Sky Observation",
            fact: "A deep-space collective beyond traditional Vedic ecliptic mapping. Revered through universal cosmic expansion texts. *[Flagged: Yet to know from officials]*"
        },
        desc: "Scutum is one of the 88 modern constellations defined by the IAU.",
        myth: "Known since classical antiquity, this constellation is rich in history and lore. The Shield marks its place in the heavens.",
        facts: ["Officially recognized by the International Astronomical Union in 1922.", "Covers the sky at approximately RA 18h and Dec -10°."],
        stats: { Area: "Varies", "Main Stars": "7", Distance: "Varies", Season: "Varies" }, tags: ["South", "IAU"]
    },

    {
        name: "Serpens", abbr: "Ser", latin: "The Serpent", type: "south", ra: 15, dec: 10,
        stars: [{ "n": "AlphaW", "x": -0.44, "y": 0.24 }, { "n": "", "x": -1.4, "y": -0.14 }, { "n": "", "x": 0.83, "y": 0.74 }, { "n": "", "x": 0.53, "y": -0.26 }, { "n": "", "x": 0.72, "y": -1.07 }, { "n": "", "x": -0.82, "y": 0.63 }, { "n": "", "x": -0.58, "y": -1.25 }, { "n": "", "x": 0.28, "y": -0.49 }, { "n": "", "x": 1.35, "y": 0.24 }],
        lines: [[0, 7], [0, 3], [0, 6], [3, 8], [3, 2], [0, 5], [7, 1], [1, 4], [1, 3], [0, 2]],
        wiki: "https://en.wikipedia.org/wiki/Serpens",
        yt: "https://www.youtube.com/results?search_query=Serpens+constellation+mythology",
        vedic: {
            sanskrit: "विश्व प्रपंच (Cosmic Expanse)", dev: "ब्रह्माण्ड देवता (Cosmic Navagraha)", 
            s_mantra: "ॐ नमो नारायणाय", e_mantra: "Om Namo Narayanaya",
            color: "Deep Celestial Blue", flower: "Blue Lotus", food: "Panchamrita",
            h_cal: "Sarva Maasa (Year-Round Context)", e_cal: "Standard Deep Sky Observation",
            fact: "A deep-space collective beyond traditional Vedic ecliptic mapping. Revered through universal cosmic expansion texts. *[Flagged: Universal Map]*"
        },
        wiki: "https://en.wikipedia.org/wiki/Serpens",
        yt: "https://www.youtube.com/results?search_query=Serpens+constellation+mythology",
        vedic: {
            sanskrit: "विश्व प्रपंच (Cosmic Expanse)", dev: "ब्रह्माण्ड देवता (Cosmic Navagraha)", 
            s_mantra: "ॐ नमो नारायणाय", e_mantra: "Om Namo Narayanaya",
            color: "Deep Celestial Blue", flower: "Blue Lotus", food: "Panchamrita",
            h_cal: "Sarva Maasa (Year-Round Context)", e_cal: "Standard Deep Sky Observation",
            fact: "A deep-space collective beyond traditional Vedic ecliptic mapping. Revered through universal cosmic expansion texts. *[Flagged: Yet to know from officials]*"
        },
        desc: "Serpens is one of the 88 modern constellations defined by the IAU.",
        myth: "Known since classical antiquity, this constellation is rich in history and lore. The Serpent marks its place in the heavens.",
        facts: ["Officially recognized by the International Astronomical Union in 1922.", "Covers the sky at approximately RA 15h and Dec 10°."],
        stats: { Area: "Varies", "Main Stars": "9", Distance: "Varies", Season: "Varies" }, tags: ["South", "IAU"]
    },

    {
        name: "Sextans", abbr: "Sex", latin: "The Sextant", type: "south", ra: 10, dec: 0,
        stars: [{ "n": "AlphaE", "x": -0.02, "y": 0.44 }, { "n": "", "x": -0.02, "y": -0.26 }, { "n": "", "x": 0.41, "y": 0.81 }, { "n": "", "x": -0.89, "y": -0.96 }, { "n": "", "x": -0.45, "y": -0.04 }],
        lines: [[0, 3], [3, 1], [1, 2], [2, 4]],
        wiki: "https://en.wikipedia.org/wiki/Sextans",
        yt: "https://www.youtube.com/results?search_query=Sextans+constellation+mythology",
        vedic: {
            sanskrit: "विश्व प्रपंच (Cosmic Expanse)", dev: "ब्रह्माण्ड देवता (Cosmic Navagraha)", 
            s_mantra: "ॐ नमो नारायणाय", e_mantra: "Om Namo Narayanaya",
            color: "Deep Celestial Blue", flower: "Blue Lotus", food: "Panchamrita",
            h_cal: "Sarva Maasa (Year-Round Context)", e_cal: "Standard Deep Sky Observation",
            fact: "A deep-space collective beyond traditional Vedic ecliptic mapping. Revered through universal cosmic expansion texts. *[Flagged: Universal Map]*"
        },
        wiki: "https://en.wikipedia.org/wiki/Sextans",
        yt: "https://www.youtube.com/results?search_query=Sextans+constellation+mythology",
        vedic: {
            sanskrit: "विश्व प्रपंच (Cosmic Expanse)", dev: "ब्रह्माण्ड देवता (Cosmic Navagraha)", 
            s_mantra: "ॐ नमो नारायणाय", e_mantra: "Om Namo Narayanaya",
            color: "Deep Celestial Blue", flower: "Blue Lotus", food: "Panchamrita",
            h_cal: "Sarva Maasa (Year-Round Context)", e_cal: "Standard Deep Sky Observation",
            fact: "A deep-space collective beyond traditional Vedic ecliptic mapping. Revered through universal cosmic expansion texts. *[Flagged: Yet to know from officials]*"
        },
        desc: "Sextans is one of the 88 modern constellations defined by the IAU.",
        myth: "Known since classical antiquity, this constellation is rich in history and lore. The Sextant marks its place in the heavens.",
        facts: ["Officially recognized by the International Astronomical Union in 1922.", "Covers the sky at approximately RA 10h and Dec 0°."],
        stats: { Area: "Varies", "Main Stars": "5", Distance: "Varies", Season: "Varies" }, tags: ["South", "IAU"]
    },

    {
        name: "Telescopium", abbr: "Tel", latin: "The Telescope", type: "south", ra: 19, dec: -50,
        stars: [{ "n": "AlphaK", "x": 0.2, "y": -0.16 }, { "n": "", "x": 1.5, "y": -0.73 }, { "n": "", "x": -0.11, "y": -1.03 }, { "n": "", "x": 1.32, "y": -1.09 }, { "n": "", "x": 0.59, "y": 1.47 }, { "n": "", "x": -0.36, "y": -1.3 }, { "n": "", "x": -1.14, "y": -0.99 }, { "n": "", "x": 0.71, "y": -0.28 }],
        lines: [[0, 4], [4, 5], [5, 2], [0, 3], [3, 7], [2, 6], [6, 1]],
        wiki: "https://en.wikipedia.org/wiki/Telescopium",
        yt: "https://www.youtube.com/results?search_query=Telescopium+constellation+mythology",
        vedic: {
            sanskrit: "विश्व प्रपंच (Cosmic Expanse)", dev: "ब्रह्माण्ड देवता (Cosmic Navagraha)", 
            s_mantra: "ॐ नमो नारायणाय", e_mantra: "Om Namo Narayanaya",
            color: "Deep Celestial Blue", flower: "Blue Lotus", food: "Panchamrita",
            h_cal: "Sarva Maasa (Year-Round Context)", e_cal: "Standard Deep Sky Observation",
            fact: "A deep-space collective beyond traditional Vedic ecliptic mapping. Revered through universal cosmic expansion texts. *[Flagged: Universal Map]*"
        },
        wiki: "https://en.wikipedia.org/wiki/Telescopium",
        yt: "https://www.youtube.com/results?search_query=Telescopium+constellation+mythology",
        vedic: {
            sanskrit: "विश्व प्रपंच (Cosmic Expanse)", dev: "ब्रह्माण्ड देवता (Cosmic Navagraha)", 
            s_mantra: "ॐ नमो नारायणाय", e_mantra: "Om Namo Narayanaya",
            color: "Deep Celestial Blue", flower: "Blue Lotus", food: "Panchamrita",
            h_cal: "Sarva Maasa (Year-Round Context)", e_cal: "Standard Deep Sky Observation",
            fact: "A deep-space collective beyond traditional Vedic ecliptic mapping. Revered through universal cosmic expansion texts. *[Flagged: Yet to know from officials]*"
        },
        desc: "Telescopium is one of the 88 modern constellations defined by the IAU.",
        myth: "Known since classical antiquity, this constellation is rich in history and lore. The Telescope marks its place in the heavens.",
        facts: ["Officially recognized by the International Astronomical Union in 1922.", "Covers the sky at approximately RA 19h and Dec -50°."],
        stats: { Area: "Varies", "Main Stars": "8", Distance: "Varies", Season: "Varies" }, tags: ["South", "IAU"]
    },

    {
        name: "Triangulum", abbr: "Tri", latin: "The Triangle", type: "north", ra: 2, dec: 30,
        stars: [{ "n": "AlphaP", "x": -0.32, "y": -0.37 }, { "n": "", "x": -0.5, "y": -0.29 }, { "n": "", "x": -0.92, "y": 0.87 }, { "n": "", "x": 1.32, "y": 0.35 }, { "n": "", "x": -1.21, "y": -0.99 }, { "n": "", "x": -0.21, "y": 1.02 }, { "n": "", "x": -0.21, "y": 0.03 }, { "n": "", "x": 0.07, "y": 1.42 }, { "n": "", "x": -0.43, "y": 1.48 }],
        lines: [[0, 3], [0, 8], [8, 1], [3, 6], [3, 4], [1, 5], [4, 2], [1, 7]],
        wiki: "https://en.wikipedia.org/wiki/Triangulum",
        yt: "https://www.youtube.com/results?search_query=Triangulum+constellation+mythology",
        vedic: {
            sanskrit: "विश्व प्रपंच (Cosmic Expanse)", dev: "ब्रह्माण्ड देवता (Cosmic Navagraha)", 
            s_mantra: "ॐ नमो नारायणाय", e_mantra: "Om Namo Narayanaya",
            color: "Deep Celestial Blue", flower: "Blue Lotus", food: "Panchamrita",
            h_cal: "Sarva Maasa (Year-Round Context)", e_cal: "Standard Deep Sky Observation",
            fact: "A deep-space collective beyond traditional Vedic ecliptic mapping. Revered through universal cosmic expansion texts. *[Flagged: Universal Map]*"
        },
        wiki: "https://en.wikipedia.org/wiki/Triangulum",
        yt: "https://www.youtube.com/results?search_query=Triangulum+constellation+mythology",
        vedic: {
            sanskrit: "विश्व प्रपंच (Cosmic Expanse)", dev: "ब्रह्माण्ड देवता (Cosmic Navagraha)", 
            s_mantra: "ॐ नमो नारायणाय", e_mantra: "Om Namo Narayanaya",
            color: "Deep Celestial Blue", flower: "Blue Lotus", food: "Panchamrita",
            h_cal: "Sarva Maasa (Year-Round Context)", e_cal: "Standard Deep Sky Observation",
            fact: "A deep-space collective beyond traditional Vedic ecliptic mapping. Revered through universal cosmic expansion texts. *[Flagged: Yet to know from officials]*"
        },
        desc: "Triangulum is one of the 88 modern constellations defined by the IAU.",
        myth: "Known since classical antiquity, this constellation is rich in history and lore. The Triangle marks its place in the heavens.",
        facts: ["Officially recognized by the International Astronomical Union in 1922.", "Covers the sky at approximately RA 2h and Dec 30°."],
        stats: { Area: "Varies", "Main Stars": "9", Distance: "Varies", Season: "Varies" }, tags: ["North", "IAU"]
    },

    {
        name: "Triangulum Australe", abbr: "TrA", latin: "The Southern Triangle", type: "south", ra: 16, dec: -65,
        stars: [{ "n": "AlphaQ", "x": -0.28, "y": 0.25 }, { "n": "", "x": 1.42, "y": -1.05 }, { "n": "", "x": -0.05, "y": -0.61 }, { "n": "", "x": -0.39, "y": 0.02 }, { "n": "", "x": 0.81, "y": -0.88 }, { "n": "", "x": 0.54, "y": 0.59 }, { "n": "", "x": 0.87, "y": 0.99 }],
        lines: [[0, 3], [3, 1], [3, 6], [6, 2], [0, 4], [1, 5]],
        wiki: "https://en.wikipedia.org/wiki/Triangulum_Australe",
        yt: "https://www.youtube.com/results?search_query=Triangulum+Australe+constellation+mythology",
        vedic: {
            sanskrit: "विश्व प्रपंच (Cosmic Expanse)", dev: "ब्रह्माण्ड देवता (Cosmic Navagraha)", 
            s_mantra: "ॐ नमो नारायणाय", e_mantra: "Om Namo Narayanaya",
            color: "Deep Celestial Blue", flower: "Blue Lotus", food: "Panchamrita",
            h_cal: "Sarva Maasa (Year-Round Context)", e_cal: "Standard Deep Sky Observation",
            fact: "A deep-space collective beyond traditional Vedic ecliptic mapping. Revered through universal cosmic expansion texts. *[Flagged: Universal Map]*"
        },
        wiki: "https://en.wikipedia.org/wiki/Triangulum_Australe",
        yt: "https://www.youtube.com/results?search_query=Triangulum+Australe+constellation+mythology",
        vedic: {
            sanskrit: "विश्व प्रपंच (Cosmic Expanse)", dev: "ब्रह्माण्ड देवता (Cosmic Navagraha)", 
            s_mantra: "ॐ नमो नारायणाय", e_mantra: "Om Namo Narayanaya",
            color: "Deep Celestial Blue", flower: "Blue Lotus", food: "Panchamrita",
            h_cal: "Sarva Maasa (Year-Round Context)", e_cal: "Standard Deep Sky Observation",
            fact: "A deep-space collective beyond traditional Vedic ecliptic mapping. Revered through universal cosmic expansion texts. *[Flagged: Yet to know from officials]*"
        },
        desc: "Triangulum Australe is one of the 88 modern constellations defined by the IAU.",
        myth: "Known since classical antiquity, this constellation is rich in history and lore. The Southern Triangle marks its place in the heavens.",
        facts: ["Officially recognized by the International Astronomical Union in 1922.", "Covers the sky at approximately RA 16h and Dec -65°."],
        stats: { Area: "Varies", "Main Stars": "7", Distance: "Varies", Season: "Varies" }, tags: ["South", "IAU"]
    },

    {
        name: "Tucana", abbr: "Tuc", latin: "The Toucan", type: "south", ra: 23, dec: -65,
        stars: [{ "n": "AlphaK", "x": -0.49, "y": 0.08 }, { "n": "", "x": -0.03, "y": 0.96 }, { "n": "", "x": -0.75, "y": -1.5 }, { "n": "", "x": 0.46, "y": 0.07 }, { "n": "", "x": 0.93, "y": -1.18 }, { "n": "", "x": -0.97, "y": 0.92 }, { "n": "", "x": 0.95, "y": -0.22 }, { "n": "", "x": -0.56, "y": -0.86 }, { "n": "", "x": -0.29, "y": -1.14 }, { "n": "", "x": -1.35, "y": 0.15 }],
        lines: [[0, 4], [4, 1], [4, 2], [0, 7], [7, 6], [2, 8], [4, 3], [6, 9], [1, 5]],
        wiki: "https://en.wikipedia.org/wiki/Tucana",
        yt: "https://www.youtube.com/results?search_query=Tucana+constellation+mythology",
        vedic: {
            sanskrit: "विश्व प्रपंच (Cosmic Expanse)", dev: "ब्रह्माण्ड देवता (Cosmic Navagraha)", 
            s_mantra: "ॐ नमो नारायणाय", e_mantra: "Om Namo Narayanaya",
            color: "Deep Celestial Blue", flower: "Blue Lotus", food: "Panchamrita",
            h_cal: "Sarva Maasa (Year-Round Context)", e_cal: "Standard Deep Sky Observation",
            fact: "A deep-space collective beyond traditional Vedic ecliptic mapping. Revered through universal cosmic expansion texts. *[Flagged: Universal Map]*"
        },
        wiki: "https://en.wikipedia.org/wiki/Tucana",
        yt: "https://www.youtube.com/results?search_query=Tucana+constellation+mythology",
        vedic: {
            sanskrit: "विश्व प्रपंच (Cosmic Expanse)", dev: "ब्रह्माण्ड देवता (Cosmic Navagraha)", 
            s_mantra: "ॐ नमो नारायणाय", e_mantra: "Om Namo Narayanaya",
            color: "Deep Celestial Blue", flower: "Blue Lotus", food: "Panchamrita",
            h_cal: "Sarva Maasa (Year-Round Context)", e_cal: "Standard Deep Sky Observation",
            fact: "A deep-space collective beyond traditional Vedic ecliptic mapping. Revered through universal cosmic expansion texts. *[Flagged: Yet to know from officials]*"
        },
        desc: "Tucana is one of the 88 modern constellations defined by the IAU.",
        myth: "Known since classical antiquity, this constellation is rich in history and lore. The Toucan marks its place in the heavens.",
        facts: ["Officially recognized by the International Astronomical Union in 1922.", "Covers the sky at approximately RA 23h and Dec -65°."],
        stats: { Area: "Varies", "Main Stars": "10", Distance: "Varies", Season: "Varies" }, tags: ["South", "IAU"]
    },

    {
        name: "Ursa Minor", abbr: "UMi", latin: "The Lesser Bear", type: "north", ra: 15, dec: 75,
        stars: [{ "n": "AlphaS", "x": 0.46, "y": -0.06 }, { "n": "", "x": 1.47, "y": -0.24 }, { "n": "", "x": 1.3, "y": 0.65 }, { "n": "", "x": 1.06, "y": 1.4 }, { "n": "", "x": -0.04, "y": 1.21 }, { "n": "", "x": 0.21, "y": -0.83 }],
        lines: [[0, 4], [0, 2], [0, 1], [2, 3], [3, 5], [3, 1]],
        wiki: "https://en.wikipedia.org/wiki/Ursa_Minor",
        yt: "https://www.youtube.com/results?search_query=Ursa+Minor+constellation+mythology",
        vedic: {
            sanskrit: "विश्व प्रपंच (Cosmic Expanse)", dev: "ब्रह्माण्ड देवता (Cosmic Navagraha)", 
            s_mantra: "ॐ नमो नारायणाय", e_mantra: "Om Namo Narayanaya",
            color: "Deep Celestial Blue", flower: "Blue Lotus", food: "Panchamrita",
            h_cal: "Sarva Maasa (Year-Round Context)", e_cal: "Standard Deep Sky Observation",
            fact: "A deep-space collective beyond traditional Vedic ecliptic mapping. Revered through universal cosmic expansion texts. *[Flagged: Universal Map]*"
        },
        wiki: "https://en.wikipedia.org/wiki/Ursa_Minor",
        yt: "https://www.youtube.com/results?search_query=Ursa+Minor+constellation+mythology",
        vedic: {
            sanskrit: "विश्व प्रपंच (Cosmic Expanse)", dev: "ब्रह्माण्ड देवता (Cosmic Navagraha)", 
            s_mantra: "ॐ नमो नारायणाय", e_mantra: "Om Namo Narayanaya",
            color: "Deep Celestial Blue", flower: "Blue Lotus", food: "Panchamrita",
            h_cal: "Sarva Maasa (Year-Round Context)", e_cal: "Standard Deep Sky Observation",
            fact: "A deep-space collective beyond traditional Vedic ecliptic mapping. Revered through universal cosmic expansion texts. *[Flagged: Yet to know from officials]*"
        },
        desc: "Ursa Minor is one of the 88 modern constellations defined by the IAU.",
        myth: "Known since classical antiquity, this constellation is rich in history and lore. The Lesser Bear marks its place in the heavens.",
        facts: ["Officially recognized by the International Astronomical Union in 1922.", "Covers the sky at approximately RA 15h and Dec 75°."],
        stats: { Area: "Varies", "Main Stars": "6", Distance: "Varies", Season: "Varies" }, tags: ["North", "IAU"]
    },

    {
        name: "Vela", abbr: "Vel", latin: "The Sails", type: "south", ra: 9, dec: -50,
        stars: [{ "n": "AlphaM", "x": 0.38, "y": -0.49 }, { "n": "", "x": -1.39, "y": -0.58 }, { "n": "", "x": -1.36, "y": -1.4 }, { "n": "", "x": 0.99, "y": -0.09 }, { "n": "", "x": 0.12, "y": 0.91 }],
        lines: [[0, 2], [2, 4], [4, 1], [2, 3], [0, 4]],
        wiki: "https://en.wikipedia.org/wiki/Vela",
        yt: "https://www.youtube.com/results?search_query=Vela+constellation+mythology",
        vedic: {
            sanskrit: "विश्व प्रपंच (Cosmic Expanse)", dev: "ब्रह्माण्ड देवता (Cosmic Navagraha)", 
            s_mantra: "ॐ नमो नारायणाय", e_mantra: "Om Namo Narayanaya",
            color: "Deep Celestial Blue", flower: "Blue Lotus", food: "Panchamrita",
            h_cal: "Sarva Maasa (Year-Round Context)", e_cal: "Standard Deep Sky Observation",
            fact: "A deep-space collective beyond traditional Vedic ecliptic mapping. Revered through universal cosmic expansion texts. *[Flagged: Universal Map]*"
        },
        wiki: "https://en.wikipedia.org/wiki/Vela",
        yt: "https://www.youtube.com/results?search_query=Vela+constellation+mythology",
        vedic: {
            sanskrit: "विश्व प्रपंच (Cosmic Expanse)", dev: "ब्रह्माण्ड देवता (Cosmic Navagraha)", 
            s_mantra: "ॐ नमो नारायणाय", e_mantra: "Om Namo Narayanaya",
            color: "Deep Celestial Blue", flower: "Blue Lotus", food: "Panchamrita",
            h_cal: "Sarva Maasa (Year-Round Context)", e_cal: "Standard Deep Sky Observation",
            fact: "A deep-space collective beyond traditional Vedic ecliptic mapping. Revered through universal cosmic expansion texts. *[Flagged: Yet to know from officials]*"
        },
        desc: "Vela is one of the 88 modern constellations defined by the IAU.",
        myth: "Known since classical antiquity, this constellation is rich in history and lore. The Sails marks its place in the heavens.",
        facts: ["Officially recognized by the International Astronomical Union in 1922.", "Covers the sky at approximately RA 9h and Dec -50°."],
        stats: { Area: "Varies", "Main Stars": "5", Distance: "Varies", Season: "Varies" }, tags: ["South", "IAU"]
    },

    {
        name: "Volans", abbr: "Vol", latin: "The Flying Fish", type: "south", ra: 8, dec: -70,
        stars: [{ "n": "AlphaW", "x": 0.12, "y": 0.19 }, { "n": "", "x": -1.01, "y": -1.21 }, { "n": "", "x": -1.44, "y": -0.86 }, { "n": "", "x": 0.76, "y": 1.09 }, { "n": "", "x": -0.7, "y": 0.98 }, { "n": "", "x": -0.36, "y": -1.19 }, { "n": "", "x": 0.15, "y": -0.58 }, { "n": "", "x": -0.07, "y": -0.92 }],
        lines: [[0, 5], [5, 2], [2, 4], [4, 1], [0, 6], [5, 3], [3, 7]],
        wiki: "https://en.wikipedia.org/wiki/Volans",
        yt: "https://www.youtube.com/results?search_query=Volans+constellation+mythology",
        vedic: {
            sanskrit: "विश्व प्रपंच (Cosmic Expanse)", dev: "ब्रह्माण्ड देवता (Cosmic Navagraha)", 
            s_mantra: "ॐ नमो नारायणाय", e_mantra: "Om Namo Narayanaya",
            color: "Deep Celestial Blue", flower: "Blue Lotus", food: "Panchamrita",
            h_cal: "Sarva Maasa (Year-Round Context)", e_cal: "Standard Deep Sky Observation",
            fact: "A deep-space collective beyond traditional Vedic ecliptic mapping. Revered through universal cosmic expansion texts. *[Flagged: Universal Map]*"
        },
        wiki: "https://en.wikipedia.org/wiki/Volans",
        yt: "https://www.youtube.com/results?search_query=Volans+constellation+mythology",
        vedic: {
            sanskrit: "विश्व प्रपंच (Cosmic Expanse)", dev: "ब्रह्माण्ड देवता (Cosmic Navagraha)", 
            s_mantra: "ॐ नमो नारायणाय", e_mantra: "Om Namo Narayanaya",
            color: "Deep Celestial Blue", flower: "Blue Lotus", food: "Panchamrita",
            h_cal: "Sarva Maasa (Year-Round Context)", e_cal: "Standard Deep Sky Observation",
            fact: "A deep-space collective beyond traditional Vedic ecliptic mapping. Revered through universal cosmic expansion texts. *[Flagged: Yet to know from officials]*"
        },
        desc: "Volans is one of the 88 modern constellations defined by the IAU.",
        myth: "Known since classical antiquity, this constellation is rich in history and lore. The Flying Fish marks its place in the heavens.",
        facts: ["Officially recognized by the International Astronomical Union in 1922.", "Covers the sky at approximately RA 8h and Dec -70°."],
        stats: { Area: "Varies", "Main Stars": "8", Distance: "Varies", Season: "Varies" }, tags: ["South", "IAU"]
    },

    {
        name: "Vulpecula", abbr: "Vul", latin: "The Fox", type: "north", ra: 20, dec: 25,
        stars: [{ "n": "AlphaV", "x": -0.42, "y": -0.29 }, { "n": "", "x": 1.39, "y": -1.18 }, { "n": "", "x": 0.84, "y": 0.84 }, { "n": "", "x": 1.38, "y": 0.69 }, { "n": "", "x": 1.28, "y": -0.94 }, { "n": "", "x": -0.58, "y": -0.91 }, { "n": "", "x": -0.06, "y": 0.5 }, { "n": "", "x": 0.81, "y": 0.21 }],
        lines: [[0, 4], [0, 6], [0, 3], [0, 1], [6, 2], [2, 7], [3, 5], [5, 6]],
        wiki: "https://en.wikipedia.org/wiki/Vulpecula",
        yt: "https://www.youtube.com/results?search_query=Vulpecula+constellation+mythology",
        vedic: {
            sanskrit: "विश्व प्रपंच (Cosmic Expanse)", dev: "ब्रह्माण्ड देवता (Cosmic Navagraha)", 
            s_mantra: "ॐ नमो नारायणाय", e_mantra: "Om Namo Narayanaya",
            color: "Deep Celestial Blue", flower: "Blue Lotus", food: "Panchamrita",
            h_cal: "Sarva Maasa (Year-Round Context)", e_cal: "Standard Deep Sky Observation",
            fact: "A deep-space collective beyond traditional Vedic ecliptic mapping. Revered through universal cosmic expansion texts. *[Flagged: Universal Map]*"
        },
        wiki: "https://en.wikipedia.org/wiki/Vulpecula",
        yt: "https://www.youtube.com/results?search_query=Vulpecula+constellation+mythology",
        vedic: {
            sanskrit: "विश्व प्रपंच (Cosmic Expanse)", dev: "ब्रह्माण्ड देवता (Cosmic Navagraha)", 
            s_mantra: "ॐ नमो नारायणाय", e_mantra: "Om Namo Narayanaya",
            color: "Deep Celestial Blue", flower: "Blue Lotus", food: "Panchamrita",
            h_cal: "Sarva Maasa (Year-Round Context)", e_cal: "Standard Deep Sky Observation",
            fact: "A deep-space collective beyond traditional Vedic ecliptic mapping. Revered through universal cosmic expansion texts. *[Flagged: Yet to know from officials]*"
        },
        desc: "Vulpecula is one of the 88 modern constellations defined by the IAU.",
        myth: "Known since classical antiquity, this constellation is rich in history and lore. The Fox marks its place in the heavens.",
        facts: ["Officially recognized by the International Astronomical Union in 1922.", "Covers the sky at approximately RA 20h and Dec 25°."],
        stats: { Area: "Varies", "Main Stars": "8", Distance: "Varies", Season: "Varies" }, tags: ["North", "IAU"]
    }
];

// 3D ENGINE
const cv = document.getElementById('c');
const ctx = cv.getContext('2d');
let W, H, CX, CY;
function resize() { 
    const dpr = window.devicePixelRatio || 1;
    W = window.innerWidth; 
    H = window.innerHeight; 
    cv.width = W * dpr; 
    cv.height = H * dpr; 
    cv.style.width = W + 'px'; 
    cv.style.height = H + 'px';
    ctx.scale(dpr, dpr);
    CX = W / 2; CY = H / 2; 
}
resize();
window.addEventListener('resize', resize);

let rotX = 0.28, rotY = 0, tRX = 0.28, tRY = 0, fov = 880, tFov = 880;
let isDrag = false, lastMX = 0, lastMY = 0, clickStartX = 0, clickStartY = 0;
let autoRot = true, t = 0, selIdx = null, activeF = 'all', searchQ = '';
let pMouseX = 0, pMouseY = 0;

// Background stars - Vibrant Colors and Velocities
const BSTARS = Array.from({ length: 2800 }, () => {
    const th = Math.random() * Math.PI * 2, ph = Math.acos(2 * Math.random() - 1), r = 920 + Math.random() * 80;
    let col = '#e3f2fd'; // bright blue-white
    const rnd = Math.random();
    if (rnd < 0.1) col = '#ff4081'; // pink
    else if (rnd < 0.22) col = '#ff5252'; // crimson red
    else if (rnd < 0.35) col = '#64b5f6'; // vivid deep blue
    else if (rnd < 0.45) col = '#ffcc80'; // pale gold/orange
    return {
        x: r * Math.sin(ph) * Math.cos(th), y: r * Math.sin(ph) * Math.sin(th), z: r * Math.cos(ph),
        rad: 0.35 + Math.random() * 1.5, al: 0.5 + Math.random() * 0.5,
        c: col,
        tw: Math.random() * Math.PI * 2
    };
});

// Galaxy band - Nebula Colors
const GALX = Array.from({ length: 1800 }, () => {
    const a = Math.random() * Math.PI * 2, b = (Math.random() - .5) * 0.16, r = 880;
    let col = '#7080a0';
    const rnd = Math.random();
    if (rnd < 0.15) col = '#ff4081'; // pink
    else if (rnd < 0.3) col = '#5c6bc0'; // deep blue
    else if (rnd < 0.45) col = '#ff5252'; // red
    return {
        x: r * Math.cos(a), y: r * Math.sin(a) * 0.1 + r * b, z: r * Math.sin(a),
        rad: 0.3 + Math.random() * 1.0, al: 0.08 + Math.random() * .22,
        c: col
    };
});

// Holographic Solar System
const SOLAR = [
    { n: 'Sun', r: 0, c: '#ffd070', rad: 5.5, speed: 0 },
    { n: 'Mer', r: 10, c: '#b0b0b0', rad: 1.2, speed: 4.1 },
    { n: 'Ven', r: 16, c: '#e0c080', rad: 2.0, speed: 1.6 },
    { n: 'Earth', r: 24, c: '#6aaaf0', rad: 2.3, speed: 1.0 },
    { n: 'Mars', r: 32, c: '#f06040', rad: 1.8, speed: 0.53 },
    { n: 'Jup', r: 52, c: '#d0b090', rad: 3.8, speed: 0.08 },
    { n: 'Sat', r: 74, c: '#e0d0a0', rad: 3.3, speed: 0.03 },
    { n: 'Ura', r: 90, c: '#88e0f0', rad: 2.6, speed: 0.012 },
    { n: 'Nep', r: 106, c: '#4a80f0', rad: 2.5, speed: 0.006 }
];


function cross(a, b) { return { x: a.y * b.z - a.z * b.y, y: a.z * b.x - a.x * b.z, z: a.x * b.y - a.y * b.x } }
function norm3(v) { const l = Math.sqrt(v.x * v.x + v.y * v.y + v.z * v.z) || 1; return { x: v.x / l, y: v.y / l, z: v.z / l } }

function raDecToXYZ(ra, dec, R = 115) {
    const raR = (ra / 24) * Math.PI * 2, decR = (dec / 90) * (Math.PI / 2);
    return { x: R * Math.cos(decR) * Math.cos(raR), y: R * Math.sin(decR), z: R * Math.cos(decR) * Math.sin(raR) };
}

// Precompute Celestial Grid
const CGRID = [];
const R_GRID = 115.5; 
for (let dec = -60; dec <= 60; dec += 30) {
    let pts = [];
    for (let r = 0; r <= 60; r++) pts.push(raDecToXYZ((r / 60) * 24, dec, R_GRID));
    CGRID.push(pts);
}
for (let ra = 0; ra < 24; ra += 3) {
    let pts = [];
    for (let d = 0; d <= 60; d++) pts.push(raDecToXYZ(ra, -90 + (d / 60) * 180, R_GRID));
    CGRID.push(pts);
}

const SC = 13;
const CDATA = DATA.map(c => {
    const orig = raDecToXYZ(c.ra, c.dec, 115);
    const n = norm3(orig);
    let r = norm3(cross(n, { x: 0, y: 1, z: 0 }));
    if (r.x === 0 && r.y === 0 && r.z === 0) r = { x: 1, y: 0, z: 0 };
    r = norm3(r);
    const u = norm3(cross(r, n));
    const stars3 = c.stars.map(s => ({
        x: orig.x + r.x * s.x * SC + u.x * s.y * SC,
        y: orig.y + r.y * s.x * SC + u.y * s.y * SC,
        z: orig.z + r.z * s.x * SC + u.z * s.y * SC,
        n: s.n
    }));
    return { orig, stars3, c };
});

function proj(p) {
    const cY = Math.cos(rotY), sY = Math.sin(rotY);
    const x1 = p.x * cY + p.z * sY, z1 = -p.x * sY + p.z * cY, y1 = p.y;
    const cX = Math.cos(rotX), sX = Math.sin(rotX);
    const y2 = y1 * cX - z1 * sX, z2 = y1 * sX + z1 * cX;
    const dep = z2 + 380;
    if (dep < 1) return null;
    const sc = fov / dep;
    return { sx: CX + x1 * sc, sy: CY - y2 * sc, dep, sc };
}

function visible(c) {
    if (searchQ) return c.name.toLowerCase().includes(searchQ) || c.latin.toLowerCase().includes(searchQ) || c.abbr.toLowerCase().includes(searchQ);
    if (activeF === 'zodiac') return !!c.zodiac;
    if (activeF === 'north') return c.type === 'north';
    if (activeF === 'south') return c.type === 'south';
    return true;
}

function render() {
    ctx.clearRect(0, 0, W, H);
    // Sky bg with deeper interactive gradient
    const bg = ctx.createRadialGradient(CX, CY, 0, CX, CY, Math.max(W, H) * .85);
    bg.addColorStop(0, '#0a1024'); bg.addColorStop(.45, '#050a18'); bg.addColorStop(1, '#02040a');
    ctx.fillStyle = bg; ctx.fillRect(0, 0, W, H);

    const draw = [];
    const dofA = Math.max(0.05, 1 - Math.max(0, (fov - 1300) / 800));

    // Celestial Grid
    CGRID.forEach(path => {
        for (let i = 0; i < path.length - 1; i++) {
            const p1 = proj(path[i]), p2 = proj(path[i+1]);
            if (p1 && p2) {
                draw.push({
                    z: (p1.dep + p2.dep) / 2,
                    fn: () => {
                        ctx.beginPath();
                        ctx.moveTo(p1.sx, p1.sy);
                        ctx.lineTo(p2.sx, p2.sy);
                        ctx.strokeStyle = `rgba(100, 160, 240, ${Math.min(0.08, 0.08 * p1.sc) * dofA})`;
                        ctx.lineWidth = 1;
                        ctx.stroke();
                    }
                });
            }
        }
    });

    // Holographic Solar System
    SOLAR.forEach(pl => {
        if (pl.r > 0) {
            draw.push({
                isSolar: true,
                z: 380, 
                fn: () => {
                    ctx.beginPath();
                    let pts = [];
                    for(let i=0; i<=45; i++) {
                        let a = (i/45)*Math.PI*2;
                        let p = proj({ x: pl.r*Math.cos(a), y: 0, z: pl.r*Math.sin(a) });
                        if(p) pts.push(p);
                    }
                    if(pts.length > 0) {
                        ctx.moveTo(pts[0].sx, pts[0].sy);
                        for(let i=1; i<pts.length; i++) ctx.lineTo(pts[i].sx, pts[i].sy);
                        ctx.strokeStyle = `rgba(130, 180, 240, 0.12)`;
                        ctx.lineWidth = 1;
                        ctx.setLineDash([2, 5]); // Dashed masked style
                        ctx.stroke();
                        ctx.setLineDash([]); // Reset
                    }
                }
            });
        }
        const angle = pl.r === 0 ? 0 : t * pl.speed * 0.4;
        const ppos = proj({ x: pl.r*Math.cos(angle), y: 0, z: pl.r*Math.sin(angle) });
        if (ppos) {
            draw.push({
                isSolar: true,
                z: ppos.dep,
                fn: () => {
                    const rScaled = Math.max(0.1, pl.rad * (ppos.sc / 2.5));
                    
                    if (pl.r === 0) {
                        // Glowing Sun
                        ctx.globalAlpha = 0.9;
                        const grad = ctx.createRadialGradient(ppos.sx, ppos.sy, 0, ppos.sx, ppos.sy, rScaled * 3.5);
                        grad.addColorStop(0, pl.c + 'cc');
                        grad.addColorStop(1, 'rgba(0,0,0,0)');
                        ctx.fillStyle = grad;
                        ctx.beginPath(); ctx.arc(ppos.sx, ppos.sy, rScaled * 3.5, 0, Math.PI*2); ctx.fill();

                        ctx.globalAlpha = 1.0;
                        ctx.fillStyle = '#fff8e0';
                        ctx.beginPath(); ctx.arc(ppos.sx, ppos.sy, rScaled * 0.6, 0, Math.PI*2); ctx.fill();
                    } else {
                        // Masked/Wireframe Planets
                        ctx.globalAlpha = 0.4;
                        ctx.strokeStyle = pl.c;
                        ctx.lineWidth = 1;
                        ctx.beginPath(); ctx.arc(ppos.sx, ppos.sy, rScaled * 0.8, 0, Math.PI*2); ctx.stroke();
                        
                        ctx.globalAlpha = 0.2;
                        ctx.fillStyle = pl.c;
                        ctx.beginPath(); ctx.arc(ppos.sx, ppos.sy, rScaled * 0.3, 0, Math.PI*2); ctx.fill();

                        ctx.globalAlpha = 0.35;
                        ctx.font = "300 " + Math.max(6, 8 * ppos.sc/2.5) + "px 'Poppins', sans-serif";
                        ctx.fillStyle = pl.c;
                        ctx.textAlign = 'center';
                        ctx.fillText(pl.n, ppos.sx, ppos.sy - (rScaled * 1.5 + 3));
                    }
                }
            });
        }
    });

    // BG stars - animated and stationary in the celestial sphere
    BSTARS.forEach(s => {

        const p = proj(s); if (!p) return;
        if (p.sx < -4 || p.sx > W + 4 || p.sy < -4 || p.sy > H + 4) return;
        
        // Elegant sharp twinkling
        const tSpeed = 1.5 + (s.tw % 2.5);
        const tw = 0.3 + 0.7 * Math.pow(Math.sin(t * tSpeed + s.tw), 8);
        
        draw.push({
            z: p.dep, fn: () => {
                ctx.globalAlpha = s.al * (0.4 + tw * 0.6) * dofA;
                ctx.fillStyle = s.c;
                const finalRad = Math.max(.4, s.rad * (0.8 + tw * 0.5) * (p.sc / 4));
                ctx.beginPath(); ctx.arc(p.sx, p.sy, finalRad, 0, Math.PI * 2); ctx.fill();
            }
        });
    });

    // Galaxy - anchored to the deep celestial sphere
    GALX.forEach(g => {

        const p = proj(g); if (!p) return;
        if (p.sx < -2 || p.sx > W + 2 || p.sy < -2 || p.sy > H + 2) return;
        draw.push({
            z: p.dep, fn: () => {
                ctx.globalAlpha = g.al * dofA; ctx.fillStyle = g.c;
                const finalRad = Math.max(.6, g.rad * (p.sc / 3));
                ctx.beginPath(); ctx.arc(p.sx, p.sy, finalRad, 0, Math.PI * 2); ctx.fill();
            }
        });
    });

    CDATA.forEach((cd, ci) => {
        const vis = visible(cd.c), isSel = selIdx === ci;
        const ps = cd.stars3.map(s => proj(s));
        const po = proj(cd.orig); if (!po) return;

        // Lines
        cd.c.lines.forEach(([a, b]) => {
            const pa = ps[a], pb = ps[b]; if (!pa || !pb) return;
            const dep = (pa.dep + pb.dep) / 2;
            draw.push({
                z: dep, fn: () => {
                    const vis2 = vis || (selIdx === ci);
                    ctx.globalAlpha = (vis2 ? (isSel ? .82 : .32) : .06) * dofA;
                    ctx.strokeStyle = cd.c.zodiac ? '#e8c56a' : cd.c.type === 'north' ? '#4a9eff' : '#ff6644';
                    ctx.lineWidth = isSel ? 2.5 : 1.0;
                    ctx.setLineDash(isSel ? [] : [5, 5]);
                    ctx.beginPath(); ctx.moveTo(pa.sx, pa.sy); ctx.lineTo(pb.sx, pb.sy); ctx.stroke();
                    ctx.setLineDash([]);
                }
            });
        });

        // Stars
        ps.forEach((p, si) => {
            if (!p) return;
            if (p.sx < -12 || p.sx > W + 12 || p.sy < -12 || p.sy > H + 12) return;
            draw.push({
                z: p.dep, fn: () => {
                    const isMain = si === 0;
                    const baseR = isMain ? 4.5 : 2.5;
                    const r = Math.max(.5, baseR * (p.sc / 10));
                    const pulse = isSel && isMain ? 1 + .32 * Math.sin(t * 4) : 1;
                    const fr = r * pulse;
                    ctx.globalAlpha = (vis ? (isSel ? 1 : .68) : .1) * dofA;
                    if (isMain && vis) {
                        const gc = ctx.createRadialGradient(p.sx, p.sy, 0, p.sx, p.sy, fr * 5);
                        const cc = cd.c.zodiac ? 'rgba(232,197,106,' : 'rgba(255,230,150,';
                        gc.addColorStop(0, cc + (isSel ? '.4)' : '.22)')); gc.addColorStop(1, cc + '0)');
                        ctx.globalAlpha = (isSel ? .75 : .35) * dofA;
                        ctx.fillStyle = gc; ctx.beginPath(); ctx.arc(p.sx, p.sy, fr * 5, 0, Math.PI * 2); ctx.fill();
                        ctx.globalAlpha = (vis ? 1 : .1) * dofA;
                    }
                    const col = isMain ? '#ffd070' : cd.c.zodiac ? '#d4a840' : cd.c.type === 'north' ? '#6aaaf0' : '#f07858';
                    ctx.fillStyle = col; ctx.beginPath(); ctx.arc(p.sx, p.sy, fr, 0, Math.PI * 2); ctx.fill();
                    if (isMain) { ctx.globalAlpha = (isSel ? 1 : .75) * dofA; ctx.fillStyle = '#fff8e0'; ctx.beginPath(); ctx.arc(p.sx, p.sy, fr * .33, 0, Math.PI * 2); ctx.fill(); }
                }
            });
        });

        // Label
        if (vis) {
            draw.push({
                z: po.dep, fn: () => {
                    const fs = Math.max(7.5, Math.min(15, po.sc * 1.05));
                    ctx.globalAlpha = (isSel ? 1 : .62) * dofA;
                    ctx.font = (isSel ? '600 ' : '400 ') + fs + "px 'Cinzel',serif";
                    ctx.textAlign = 'center';
                    ctx.fillStyle = cd.c.zodiac ? '#e8c56a' : cd.c.type === 'north' ? '#88b4ee' : '#ee8860';
                    if (isSel) { ctx.shadowColor = cd.c.zodiac ? '#e8c56a' : cd.c.type === 'north' ? '#4a9eff' : '#ff6644'; ctx.shadowBlur = 9; }
                    ctx.fillText(cd.c.name, po.sx, po.sy + 22);
                    if (fs > 9.5) {
                        ctx.font = '300 ' + (Math.max(6, fs * .7)) + "px 'Poppins',sans-serif";
                        ctx.fillStyle = `rgba(200,212,230,${.55 * dofA})`;
                        ctx.fillText(cd.c.abbr, po.sx, po.sy + 22 + fs * .95);
                    }
                    ctx.shadowBlur = 0;
                }
            });
        }
    });

    draw.sort((a, b) => b.z - a.z);
    draw.forEach(d => d.fn());
    ctx.globalAlpha = 1;
    t += .016;
    if (autoRot && !isDrag) rotY += .00075;
}

function loop() {
    requestAnimationFrame(loop);
    rotX += (tRX - rotX) * .04;
    rotY += (tRY - rotY) * .04;
    fov += (tFov - fov) * .04;
    render();
}
loop();

// Controls
cv.addEventListener('mousedown', e => { isDrag = true; autoRot = false; lastMX = clickStartX = e.clientX; lastMY = clickStartY = e.clientY; cv.style.cursor = 'grabbing'; });
window.addEventListener('mouseup', () => { isDrag = false; cv.style.cursor = 'grab'; });
window.addEventListener('mousemove', e => {
    if (isDrag) { const dx = (e.clientX - lastMX) * .005, dy = (e.clientY - lastMY) * .005; tRY -= dx; tRX = Math.max(-1.2, Math.min(1.2, tRX - dy)); lastMX = e.clientX; lastMY = e.clientY; }
});
cv.addEventListener('wheel', e => { e.preventDefault(); tFov = Math.max(280, Math.min(2400, tFov + e.deltaY * 1.5)); }, { passive: false });

// Touch
let lTX = 0, lTY = 0, lPin = 0;
cv.addEventListener('touchstart', e => { isDrag = true; autoRot = false; if (e.touches.length === 1) { lTX = e.touches[0].clientX; lTY = e.touches[0].clientY; } if (e.touches.length === 2) { lPin = Math.hypot(e.touches[0].clientX - e.touches[1].clientX, e.touches[0].clientY - e.touches[1].clientY); } }, { passive: true });
cv.addEventListener('touchend', () => isDrag = false);
cv.addEventListener('touchmove', e => {
    e.preventDefault();
    if (e.touches.length === 1) { const dx = (e.touches[0].clientX - lTX) * .005, dy = (e.touches[0].clientY - lTY) * .005; tRY -= dx; tRX = Math.max(-1.2, Math.min(1.2, tRX - dy)); lTX = e.touches[0].clientX; lTY = e.touches[0].clientY; }
    if (e.touches.length === 2) { const d = Math.hypot(e.touches[0].clientX - e.touches[1].clientX, e.touches[0].clientY - e.touches[1].clientY); tFov = Math.max(280, Math.min(1900, tFov - (d - lPin) * 4)); lPin = d; }
}, { passive: false });

function doZoom(d) { tFov = Math.max(280, Math.min(1900, tFov + d * 130)); }

// Click select
cv.addEventListener('click', e => {
    if (Math.hypot(e.clientX - clickStartX, e.clientY - clickStartY) > 8) return;
    const mx = e.clientX, my = e.clientY;
    let best = null, bestD = Infinity;
    CDATA.forEach((cd, ci) => {
        if (!visible(cd.c)) return;
        cd.stars3.forEach(s => {
            const p = proj(s); if (!p) return;
            const d = Math.hypot(p.sx - mx, p.sy - my);
            if (d < bestD) { bestD = d; best = ci; }
        });
    });
    if (best !== null && bestD < 52) openC(best);
    else if (bestD > 90) { selIdx = null; closeIP(); document.querySelectorAll('.ci').forEach(e => e.classList.remove('sel')); }
});

// Hover tooltip
cv.addEventListener('mousemove', e => {
    if (isDrag) return;
    const mx = e.clientX, my = e.clientY;
    let best = null, bestD = Infinity, bestSi = 0;
    CDATA.forEach((cd, ci) => {
        if (!visible(cd.c)) return;
        cd.stars3.forEach((s, si) => {
            const p = proj(s); if (!p) return;
            const d = Math.hypot(p.sx - mx, p.sy - my);
            if (d < bestD) { bestD = d; best = ci; bestSi = si; }
        });
    });
    const tt = document.getElementById('tt');
    if (best !== null && bestD < 44) {
        const c = DATA[best];
        tt.style.opacity = '1'; tt.style.left = (mx + 16) + 'px'; tt.style.top = (my - 36) + 'px';
        document.getElementById('tt-n').textContent = bestSi === 0 && c.stars[0] ? c.stars[0].n + ' — ' + c.name : c.name;
        document.getElementById('tt-s').textContent = (c.zodiac ? 'Zodiac · ' : '') + c.latin + ' · ' + (c.type === 'north' ? 'Northern' : 'Southern');
        cv.style.cursor = 'pointer';
    } else { tt.style.opacity = '0'; if (!isDrag) cv.style.cursor = 'grab'; }
});

// Info panel art
function drawArt(c) {
    const ac = document.getElementById('ip-art'), ax = ac.getContext('2d');
    const AW = 364, AH = 148; ax.clearRect(0, 0, AW, AH);
    ax.fillStyle = '#06101f'; ax.fillRect(0, 0, AW, AH);
    // mini bg stars
    ax.globalAlpha = .25; for (let i = 0; i < 60; i++) { ax.fillStyle = '#aab'; ax.beginPath(); ax.arc(Math.random() * AW, Math.random() * AH, Math.random() * .7, 0, Math.PI * 2); ax.fill(); } ax.globalAlpha = 1;
    if (!c.stars.length) return;
    let mnX = Infinity, mxX = -Infinity, mnY = Infinity, mxY = -Infinity;
    c.stars.forEach(s => { mnX = Math.min(mnX, s.x); mxX = Math.max(mxX, s.x); mnY = Math.min(mnY, s.y); mxY = Math.max(mxY, s.y); });
    const rX = Math.max(mxX - mnX, .1), rY = Math.max(mxY - mnY, .1), pad = 30;
    function sc2(sx, sy) { return { x: pad + (sx - mnX) / rX * (AW - 2 * pad), y: AH - pad - (sy - mnY) / rY * (AH - 2 * pad) }; }
    const col = c.zodiac ? '#e8c56a' : c.type === 'north' ? '#4a9eff' : '#ff6644';
    ax.strokeStyle = col; ax.lineWidth = 1; ax.globalAlpha = .5;
    c.lines.forEach(([a, b]) => { if (!c.stars[a] || !c.stars[b]) return; const pa = sc2(c.stars[a].x, c.stars[a].y), pb = sc2(c.stars[b].x, c.stars[b].y); ax.beginPath(); ax.moveTo(pa.x, pa.y); ax.lineTo(pb.x, pb.y); ax.stroke(); });
    ax.globalAlpha = 1;
    c.stars.forEach((s, si) => {
        const p = sc2(s.x, s.y), r = si === 0 ? 5.5 : 3;
        if (si === 0) { const gc = ax.createRadialGradient(p.x, p.y, 0, p.x, p.y, r * 3.5); gc.addColorStop(0, 'rgba(255,210,90,.5)'); gc.addColorStop(1, 'rgba(255,210,90,0)'); ax.fillStyle = gc; ax.beginPath(); ax.arc(p.x, p.y, r * 3.5, 0, Math.PI * 2); ax.fill(); }
        ax.fillStyle = si === 0 ? '#ffd070' : col; ax.beginPath(); ax.arc(p.x, p.y, r, 0, Math.PI * 2); ax.fill();
        if (si === 0) { ax.fillStyle = '#fff8e0'; ax.beginPath(); ax.arc(p.x, p.y, r * .38, 0, Math.PI * 2); ax.fill(); }
        if (si < 3 && s.n) { ax.font = '9px Poppins,sans-serif'; ax.fillStyle = 'rgba(190,205,225,.72)'; ax.textAlign = 'left'; ax.fillText(s.n, p.x + r + 3, p.y + 3); }
    });
}

function openC(i) {
    const c = DATA[i]; if (!c) return;
    selIdx = i; autoRot = false;

    // Mobile: close sidebar when opening a constellation
    if (window.innerWidth <= 768) {
        document.getElementById('sb').classList.remove('open');
        document.getElementById('mbtn').classList.remove('so');
    }

    // Fly camera
    const o = CDATA[i].orig, R = Math.sqrt(o.x * o.x + o.y * o.y + o.z * o.z);
    tRY = -Math.atan2(o.z, o.x);
    tRX = -Math.asin(Math.max(-1, Math.min(1, o.y / R))) * .82;
    tFov = 580;
    // Sidebar sel
    document.querySelectorAll('.ci').forEach(el => el.classList.toggle('sel', parseInt(el.dataset.idx) === i));
    const item = document.querySelector(`.ci[data-idx="${i}"]`);
    if (item) item.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    // Fill panel
    document.getElementById('ip-abbr').textContent = c.abbr + ' — ' + (c.type === 'north' ? 'NORTHERN' : 'SOUTHERN') + (c.zodiac ? ' · ZODIAC' : '');
    document.getElementById('ip-name').textContent = c.name;
    document.getElementById('ip-lat').textContent = c.latin;
    document.getElementById('ip-tags').innerHTML = (c.tags || []).map(t => `<span class="badge ${c.zodiac ? 'bz' : c.type === 'north' ? 'bn' : 'bs'}" style="font-size:9px;padding:3px 8px">${t}</span>`).join(' ');
    document.getElementById('ip-stats').innerHTML = Object.entries(c.stats || {}).map(([k, v]) => `<div class="stat"><div class="stat-k">${k}</div><div class="stat-v">${v}</div></div>`).join('');
    document.getElementById('ip-desc').textContent = c.desc;
    document.getElementById('ip-myth').textContent = c.myth;
    document.getElementById('ip-facts').innerHTML = (c.facts || []).map(f => `<div class="fact"><div class="fd"></div><span>${f}</span></div>`).join('');
    
    // External Links
    const btnWiki = document.getElementById('btn-wiki');
    const btnYt = document.getElementById('btn-yt');
    if (c.wiki) { btnWiki.href = c.wiki; btnWiki.style.display = 'flex'; } else { btnWiki.style.display = 'none'; }
    if (c.yt) { btnYt.href = c.yt; btnYt.style.display = 'flex'; } else { btnYt.style.display = 'none'; }

    // Vedic Panel
    const secVedic = document.getElementById('sec-vedic');
    if (c.vedic) {
        secVedic.style.display = 'block';
        document.getElementById('v-smantra').textContent = c.vedic.s_mantra || '';
        document.getElementById('v-emantra').textContent = c.vedic.e_mantra || '';
        
        document.getElementById('v-dev').textContent = c.vedic.dev || '';
        document.getElementById('v-san').textContent = c.vedic.sanskrit || '';
        
        document.getElementById('v-col').textContent = c.vedic.color || '';
        document.getElementById('v-flo').textContent = c.vedic.flower || '';
        document.getElementById('v-foo').textContent = c.vedic.food || '';
        
        document.getElementById('v-hcal').textContent = c.vedic.h_cal || '';
        document.getElementById('v-ecal').textContent = c.vedic.e_cal || '';

        // Apply styling to flagged warnings
        if (c.vedic.fact) {
            document.getElementById('v-fact').innerHTML = c.vedic.fact.replace(/\*\[(.*?)\]\*/g, '<br><span style="color:var(--red); font-size:9px; letter-spacing:0.1em; text-transform:uppercase; margin-top:6px; display:inline-block; font-style:normal">$1</span>');
        } else {
            document.getElementById('v-fact').innerHTML = '';
        }
    } else {
        secVedic.style.display = 'none';
    }

    drawArt(c);
    document.getElementById('ip').classList.add('open');
    document.body.classList.add('ip-open');
    document.getElementById('ip').scrollTop = 0;
}


function closeIP() { 
    document.getElementById('ip').classList.remove('open'); 
    document.body.classList.remove('ip-open');
    selIdx = null; 
    document.querySelectorAll('.ci').forEach(e => e.classList.remove('sel')); 
}

function toggleSB() { document.getElementById('sb').classList.toggle('open'); document.getElementById('mbtn').classList.toggle('so'); }

// Sidebar build
const sbList = document.getElementById('sb-list');
DATA.forEach((c, i) => {
    const d = document.createElement('div'); d.className = 'ci'; d.dataset.idx = i; d.dataset.type = c.type; d.dataset.zodiac = c.zodiac ? '1' : '';
    d.innerHTML = `<div class="ci-n">${String(i + 1).padStart(2, '0')}</div><div style="flex:1"><div class="ci-name">${c.name}</div><div class="ci-lat">${c.latin}</div></div><div class="badge ${c.zodiac ? 'bz' : c.type === 'north' ? 'bn' : 'bs'}">${c.zodiac ? 'Z' : c.type === 'north' ? 'N' : 'S'}</div>`;
    d.onclick = () => openC(i);
    sbList.appendChild(d);
});

// Filters
document.querySelectorAll('.filt').forEach(btn => {
    btn.onclick = () => {
        document.querySelectorAll('.filt').forEach(b => b.classList.remove('on')); btn.classList.add('on');
        activeF = btn.dataset.f; searchQ = ''; document.getElementById('srch').value = '';
        document.querySelectorAll('.ci').forEach(el => {
            const t2 = el.dataset.type, z = el.dataset.zodiac;
            const show = activeF === 'all' || (activeF === 'zodiac' && z === '1') || (activeF === 'north' && t2 === 'north' && z !== '1') || (activeF === 'south' && t2 === 'south');
            el.style.display = show ? 'flex' : 'none';
        });
    };
});

document.getElementById('srch').oninput = e => {
    searchQ = e.target.value.toLowerCase().trim();
    document.querySelectorAll('.filt').forEach(b => b.classList.toggle('on', b.dataset.f === 'all'));
    activeF = 'all';
    document.querySelectorAll('.ci').forEach(el => {
        const i = parseInt(el.dataset.idx), c = DATA[i];
        const show = !searchQ || c.name.toLowerCase().includes(searchQ) || c.latin.toLowerCase().includes(searchQ) || c.abbr.toLowerCase().includes(searchQ);
        el.style.display = show ? 'flex' : 'none';
    });
};

// Loading
let pct = 0; const bar = document.getElementById('ld-p');
const iv = setInterval(() => {
    pct += Math.random() * 16; if (pct >= 100) { pct = 100; clearInterval(iv); setTimeout(() => document.getElementById('ld').classList.add('done'), 700); }
    bar.style.width = Math.min(100, pct) + '%';
}, 55);

// Mouse Parallax for stars
cv.addEventListener('mousemove', e => {
    if (!isDrag) {
        let mx = (e.clientX / W) * 2 - 1;
        let my = -(e.clientY / H) * 2 + 1;
        pMouseX += (mx - pMouseX) * 0.05;
        pMouseY += (my - pMouseY) * 0.05;
        rotX += pMouseY * 0.003;
        rotY += pMouseX * 0.003;
    }
});

// Information Panel Resizing Logic
const ipPanel = document.getElementById('ip');
const ipResizer = document.getElementById('ip-resizer');
let isResizingIP = false, startXIP = 0, startWidthIP = 0;

ipResizer.addEventListener('mousedown', e => {
    if (window.innerWidth <= 768) return;
    isResizingIP = true;
    startXIP = e.clientX;
    startWidthIP = parseInt(window.getComputedStyle(ipPanel).width, 10);
});

window.addEventListener('mousemove', e => {
    if (!isResizingIP || window.innerWidth <= 768) return;
    e.preventDefault(); // Prevent text selection
    const diff = startXIP - e.clientX; 
    let newWidth = startWidthIP + diff;
    if (newWidth < 320) newWidth = 320;
    if (newWidth > 800) newWidth = 800;
    if (newWidth > window.innerWidth - 60) newWidth = window.innerWidth - 60;
    ipPanel.style.width = newWidth + 'px';
});


window.addEventListener('mouseup', () => {
    if (isResizingIP) isResizingIP = false;
});

// About Modal Logic
function openAbout() {
    const modal = document.getElementById('abt-modal');
    modal.style.display = 'flex';
    setTimeout(() => modal.classList.add('open'), 10);
}

function closeAbout() {
    const modal = document.getElementById('abt-modal');
    modal.classList.remove('open');
    setTimeout(() => modal.style.display = 'none', 400);
}
