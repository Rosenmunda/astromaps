const fs = require('fs');

const mappings = {
    "Aries": {"sanskrit": "Mesha Rashi", "dev": "Mangala (Mars)", "mantra": "Om Mangalaya Namaha", "fact": "Signifies courage, strength, and raw cosmic energy."},
    "Taurus": {"sanskrit": "Vrishabha / Krittika / Rohini", "dev": "Agni & Brahma", "mantra": "Om Shukraya Namaha", "fact": "Embodies the cosmic bull of stability and earthly accumulation."},
    "Gemini": {"sanskrit": "Mithuna", "dev": "Budha (Mercury)", "mantra": "Om Budhaya Namaha", "fact": "Represents cosmic duality and communication pathways."},
    "Cancer": {"sanskrit": "Karka / Pushya", "dev": "Chandra (Moon)", "mantra": "Om Somaya Namaha", "fact": "The nurturing heart of the celestial waters."},
    "Leo": {"sanskrit": "Simha / Magha", "dev": "Surya (Sun) & Pitris", "mantra": "Om Suryaya Namaha", "fact": "The royal lion, carrying the fire of ancestral lineage."},
    "Virgo": {"sanskrit": "Kanya / Chitra", "dev": "Budha (Mercury)", "mantra": "Om Vishnave Namaha", "fact": "The divine maiden of earthly purity and intellectual order."},
    "Libra": {"sanskrit": "Tula", "dev": "Shukra (Venus)", "mantra": "Om Shukraya Namaha", "fact": "Cosmic balance, maintaining harmony across the heavenly spheres."},
    "Scorpius": {"sanskrit": "Vrishchika / Jyeshtha", "dev": "Indra", "mantra": "Om Indraya Namaha", "fact": "The elder constellation holding domain over hidden mystical depths."},
    "Sagittarius": {"sanskrit": "Dhanu / Mula", "dev": "Brihaspati (Jupiter)", "mantra": "Om Gurave Namaha", "fact": "The cosmic archer pointing towards divine spiritual truth."},
    "Capricornus": {"sanskrit": "Makara", "dev": "Shani (Saturn)", "mantra": "Om Shanicharaya Namaha", "fact": "The celestial sea-monster presiding over karma and structure."},
    "Aquarius": {"sanskrit": "Kumbha", "dev": "Shani / Varuna", "mantra": "Om Varunaya Namaha", "fact": "The mystical water bearer, dissolving worldly attachments."},
    "Pisces": {"sanskrit": "Meena", "dev": "Brihaspati (Jupiter)", "mantra": "Om Gurave Namaha", "fact": "The ethereal ocean where profound liberation is attained."},
    "Orion": {"sanskrit": "Mrigashira / Ardra", "dev": "Soma & Rudra", "mantra": "Om Rudraya Namaha", "fact": "The mighty cosmic hunter harboring the turbulent storm of Rudra."},
    "Ursa Major": {"sanskrit": "Saptarishi", "dev": "The Seven Sages", "mantra": "Om Saptarishibhyo Namaha", "fact": "Revered as the seven enlightened ascetics watching over humanity."},
    "Cygnus": {"sanskrit": "Hamsa", "dev": "Brahma", "mantra": "Om Hamsaya Namaha", "fact": "The cosmic swan possessing the ultimate discriminative wisdom (Neera-Ksheera Viveka)."},
    "Canis Major": {"sanskrit": "Lubdhaka (Sirius)", "dev": "Rudra / Shiva", "mantra": "Om Namah Shivaya", "fact": "Sirius represents the fierce hunter aspect of Lord Shiva."},
    "Perseus": {"sanskrit": "Parashurama", "dev": "Vishnu Avatar", "mantra": "Om Parashuramaya Namaha", "fact": "The celestial warrior bearing the cosmic axe."},
    "Ophiuchus": {"sanskrit": "Dhanvantari", "dev": "God of Ayurveda", "mantra": "Om Dhanvantaraye Namaha", "fact": "The celestial healer holding the divine nectar of immortality (Amrita)."}
};

let code = fs.readFileSync('/Users/anuragsen/Desktop/constiltion/script.js', 'utf8');

// Be careful not to double inject
if (!code.includes('vedic: {')) {
    code = code.replace(/desc:\s*"/g, (match, offset, str) => {
        const before = str.substring(Math.max(0, offset - 400), offset);
        const m = before.match(/name:\s*["']([^"']+)["']/);
        const name = m ? m[1] : '';
        
        const wiki_url = `https://en.wikipedia.org/wiki/${name.replace(/ /g, '_')}`;
        const yt_url = `https://www.youtube.com/results?search_query=${name.replace(/ /g, '+')}+constellation+mythology`;
        
        const v = mappings[name] || {
            sanskrit: "Cosmic Expanse (Approximate)",
            dev: "Navagraha & Cosmic Deities",
            mantra: "Om Namo Narayana",
            fact: "A deep-space stellar collective mapped onto universal cosmic reverence. *[Flagged: Yet to discuss with official texts]*"
        };
        
        return `wiki: "${wiki_url}",
        yt: "${yt_url}",
        vedic: {sanskrit: "${v.sanskrit}", dev: "${v.dev}", mantra: "${v.mantra}", fact: "${v.fact}"},
        desc: "`;
    });
    
    fs.writeFileSync('/Users/anuragsen/Desktop/constiltion/script.js', code);
    console.log("Injected correctly!");
} else {
    console.log("Already injected.");
}
