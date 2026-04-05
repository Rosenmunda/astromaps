const fs = require('fs');

const mappings = {
    "Aries": {
        sanskrit: "Mesha Rashi", dev: "Mangala (Mars)", 
        s_mantra: "ॐ क्रां क्रीं क्रौं सः भौमाय नमः", e_mantra: "Om Kram Kreem Kroum Sah Bhaumaya Namaha",
        color: "Deep Red / Coral", flower: "Red Oleander (Gudhal)", food: "Jaggery & Toor Dal",
        h_cal: "Chaitra (March - April)", e_cal: "Autumn / Early Winter", 
        fact: "The fiery celestial ram, signifying universal initiation, courage, and raw cosmic energy."
    },
    "Taurus": {
        sanskrit: "Vrishabha / Krittika", dev: "Agni & Brahma", 
        s_mantra: "ॐ द्रां द्रीं द्रौं सः शुक्राय नमः", e_mantra: "Om Draam Dreem Droum Sah Shukraya Namaha",
        color: "White / Pale Blue", flower: "White Lotus", food: "Rice Kheer",
        h_cal: "Vaisakha (April - May)", e_cal: "Winter / Early Spring", 
        fact: "Home to the Pleiades (Krittika), embodying the cosmic bull of earthly stability and devotion."
    },
    "Gemini": {
        sanskrit: "Mithuna", dev: "Budha (Mercury)", 
        s_mantra: "ॐ ब्रां ब्रीं ब्रौं सः बुधाय नमः", e_mantra: "Om Braam Breem Broum Sah Budhaya Namaha",
        color: "Emerald Green", flower: "Jasmine / Chameli", food: "Moong Dal & Basil",
        h_cal: "Jyeshtha (May - June)", e_cal: "Late Winter / Spring", 
        fact: "The divine twins representing celestial communication, intellect, and the duality of existence."
    },
    "Cancer": {
        sanskrit: "Karka / Pushya", dev: "Chandra (Moon)", 
        s_mantra: "ॐ श्रां श्रीं श्रौं सः चन्द्राय नमः", e_mantra: "Om Shraam Shreem Shroum Sah Chandraya Namaha",
        color: "Pearl White / Silver", flower: "White Lily", food: "Milk, Rice & Sugar",
        h_cal: "Ashadha (June - July)", e_cal: "Late Winter / Spring", 
        fact: "The nurturing heart of the celestial waters. Pushya represents spiritual nourishment."
    },
    "Leo": {
        sanskrit: "Simha / Magha", dev: "Surya (Sun) & Pitris", 
        s_mantra: "ॐ ह्रां ह्रीं ह्रौं सः सूर्याय नमः", e_mantra: "Om Hraam Hreem Hroum Sah Suryaya Namaha",
        color: "Gold / Ruby Red", flower: "Red Hibiscus", food: "Wheat & Honey",
        h_cal: "Shravana (July - August)", e_cal: "Spring / Early Summer", 
        fact: "The royal lion holding Magha (Regulus), carrying the ancestral fire of planetary sovereignty."
    },
    "Virgo": {
        sanskrit: "Kanya / Chitra", dev: "Budha (Mercury)", 
        s_mantra: "ॐ ब्रां ब्रीं ब्रौं सः बुधाय नमः", e_mantra: "Om Braam Breem Broum Sah Budhaya Namaha",
        color: "Pale Green / Earthy", flower: "Marigold", food: "Green Lentils",
        h_cal: "Bhadrapada (August - September)", e_cal: "Spring / Early Summer", 
        fact: "The divine maiden portraying worldly purity, order, and immense intellectual discernment."
    },
    "Libra": {
        sanskrit: "Tula", dev: "Shukra (Venus)", 
        s_mantra: "ॐ द्रां द्रीं द्रौं सः शुक्राय नमः", e_mantra: "Om Draam Dreem Droum Sah Shukraya Namaha",
        color: "Translucent White", flower: "White Rose", food: "Curd & Sweets",
        h_cal: "Ashvina (September - October)", e_cal: "Summer", 
        fact: "Cosmic balance, maintaining divine harmony and justice across the heavenly spheres."
    },
    "Scorpius": {
        sanskrit: "Vrishchika / Jyeshtha", dev: "Indra", 
        s_mantra: "ॐ क्रां क्रीं क्रौं सः भौमाय नमः", e_mantra: "Om Kram Kreem Kroum Sah Bhaumaya Namaha",
        color: "Dark Red / Rust", flower: "Red Oleander", food: "Red Lentils & Spices",
        h_cal: "Kartika (October - November)", e_cal: "Summer", 
        fact: "The elder constellation (Jyeshtha) holding absolute domain over hidden mystical depths."
    },
    "Sagittarius": {
        sanskrit: "Dhanu / Mula", dev: "Brihaspati (Jupiter)", 
        s_mantra: "ॐ ग्रां ग्रीं ग्रौं सः गुरवे नमः", e_mantra: "Om Graam Greem Groum Sah Gurave Namaha",
        color: "Yellow / Gold", flower: "Yellow Marigold", food: "Chana Dal & Haldi",
        h_cal: "Margashirsha (November - December)", e_cal: "Summer / Autumn", 
        fact: "The cosmic archer piercing ignorance, directing focus toward profound divine truth."
    },
    "Capricornus": {
        sanskrit: "Makara", dev: "Shani (Saturn)", 
        s_mantra: "ॐ प्रां प्रीं प्रौं सः शनये नमः", e_mantra: "Om Praam Preem Proum Sah Shanaye Namaha",
        color: "Black / Dark Blue", flower: "Blue Sapphire / Aparajita", food: "Black Sesame & Oil",
        h_cal: "Pausha (December - January)", e_cal: "Autumn", 
        fact: "The celestial sea-monster presiding over structured karma, patience, and time bounds."
    },
    "Aquarius": {
        sanskrit: "Kumbha", dev: "Shani / Varuna", 
        s_mantra: "ॐ प्रां प्रीं प्रौं सः शनये नमः", e_mantra: "Om Praam Preem Proum Sah Shanaye Namaha",
        color: "Electric Blue", flower: "Blue Lotus / Aparajita", food: "Urad Dal",
        h_cal: "Magha (January - February)", e_cal: "Autumn", 
        fact: "The mystical water bearer, dissolving worldly attachments and sharing cosmic knowledge."
    },
    "Pisces": {
        sanskrit: "Meena", dev: "Brihaspati (Jupiter)", 
        s_mantra: "ॐ ग्रां ग्रीं ग्रौं सः गुरवे नमः", e_mantra: "Om Graam Greem Groum Sah Gurave Namaha",
        color: "Yellow / Orange", flower: "Yellow Kaner", food: "Yellow Sweets",
        h_cal: "Phalguna (February - March)", e_cal: "Autumn / Winter", 
        fact: "The ethereal ocean where profound cosmic liberation and spiritual moksha are attained."
    },
    "Orion": {
        sanskrit: "Mrigashira / Ardra", dev: "Soma & Rudra", 
        s_mantra: "ॐ नमः शिवाय", e_mantra: "Om Namah Shivaya",
        color: "Silver / Grey", flower: "Bel Patra", food: "Milk & Modak",
        h_cal: "Margashirsha (Nov - Dec)", e_cal: "Winter", 
        fact: "The mighty hunter harboring the turbulent storm of Rudra; Betelgeuse marks the tear of Rudra (Ardra)."
    },
    "Ursa Major": {
        sanskrit: "Saptarishi", dev: "The Seven Sages", 
        s_mantra: "ॐ सप्त ऋषिभ्यो नमः", e_mantra: "Om Saptarishibhyo Namaha",
        color: "Golden White", flower: "Kusha Grass", food: "Pure Ghee & Rice",
        h_cal: "Year Found", e_cal: "Spring (Northern Sky)", 
        fact: "Revered as the seven enlightened ascetics eternally watching and guiding humanity from the North."
    },
    "Cygnus": {
        sanskrit: "Hamsa", dev: "Brahma", 
        s_mantra: "ॐ हंसाय नमः", e_mantra: "Om Hamsaya Namaha",
        color: "White", flower: "White Lotus", food: "Saraswati Bhog",
        h_cal: "Shravana - Bhadrapada", e_cal: "Summer / Early Autumn", 
        fact: "The cosmic swan possessing ultimate discriminative wisdom (Neera-Ksheera Viveka)."
    },
    "Canis Major": {
        sanskrit: "Lubdhaka (Sirius)", dev: "Rudra", 
        s_mantra: "ॐ शिवाय नमः", e_mantra: "Om Shivaya Namaha",
        color: "Blinding White", flower: "Dhatura", food: "Bhaang & Milk",
        h_cal: "Pausha - Magha", e_cal: "Winter", 
        fact: "Sirius represents the fierce eternal hunter aspect of Lord Shiva pursuing planetary constellations."
    },
    "Perseus": {
        sanskrit: "Parashurama", dev: "Vishnu Avatar", 
        s_mantra: "ॐ परशुरामाय नमः", e_mantra: "Om Parashuramaya Namaha",
        color: "Red / Gold", flower: "Tulsi", food: "Fruits & Roots",
        h_cal: "Margashirsha", e_cal: "Winter", 
        fact: "The celestial warrior bearing the cosmic axe to protect the divine realms."
    },
    "Ophiuchus": {
        sanskrit: "Dhanvantari", dev: "God of Ayurveda", 
        s_mantra: "ॐ धन्वन्तरये नमः", e_mantra: "Om Dhanvantaraye Namaha",
        color: "Pale Yellow", flower: "Medicinal Herbs", food: "Amrita (Nectar) / Honey",
        h_cal: "Kartika", e_cal: "Summer", 
        fact: "The celestial healer holding the serpeant of life and divine nectar of immortality."
    }
};

let code = fs.readFileSync('/Users/anuragsen/Desktop/constiltion/script.js', 'utf8');

// 1. Strip the old injection exactly.
code = code.replace(/wiki:\s*".*?",\s*yt:\s*".*?",\s*vedic:\s*\{.*?\},\s*desc:/g, 'desc:');

// 2. Perform the new precise injection.
const regex = /name:\s*["']([^"']+)["'](?:.|\n|\r)*?desc:/g;

code = code.replace(regex, (match, name) => {
    
    // Create URLs flawlessly
    const wiki_url = `https://en.wikipedia.org/wiki/${name.replace(/ /g, '_')}`;
    const yt_url = `https://www.youtube.com/results?search_query=${name.replace(/ /g, '+')}+constellation+mythology`;
    
    // Apply Mappings
    const v = mappings[name] || {
        sanskrit: "विश्व प्रपंच (Cosmic Expanse)", dev: "ब्रह्माण्ड देवता (Cosmic Navagraha)", 
        s_mantra: "ॐ नमो नारायणाय", e_mantra: "Om Namo Narayanaya",
        color: "Deep Celestial Blue", flower: "Blue Lotus", food: "Panchamrita",
        h_cal: "Sarva Maasa (Year-Round Context)", e_cal: "Standard Deep Sky Observation", 
        fact: "A deep-space collective beyond traditional Vedic ecliptic mapping. Revered through universal cosmic expansion texts. *[Flagged: Yet to know from officials]*"
    };
    
    // Escape quotes in factual strings just in case
    const safeFact = v.fact.replace(/"/g, '\\"');
    
    const injected = `wiki: "${wiki_url}",
        yt: "${yt_url}",
        vedic: {
            sanskrit: "${v.sanskrit}", dev: "${v.dev}", 
            s_mantra: "${v.s_mantra}", e_mantra: "${v.e_mantra}",
            color: "${v.color}", flower: "${v.flower}", food: "${v.food}",
            h_cal: "${v.h_cal}", e_cal: "${v.e_cal}",
            fact: "${safeFact}"
        },
        desc:`;
        
    return match.substring(0, match.length - 5) + injected;
});

fs.writeFileSync('/Users/anuragsen/Desktop/constiltion/script.js', code);
console.log("Deep Hindu Vedic Injection Complete!");
