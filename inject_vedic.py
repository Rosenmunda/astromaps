import re
import json

def get_vedic_mapping(name):
    mappings = {
        "Aries": {"sanskrit": "Mesha Rashi", "dev": "Mangala (Mars)", "mantra": "Om Mangalaya Namaha", "fact": "Signifies courage, strength, and raw cosmic energy."},
        "Taurus": {"sanskrit": "Vrishabha / Krittika / Rohini", "dev": "Agni \u0026 Brahma", "mantra": "Om Shukraya Namaha", "fact": "Embodies the cosmic bull of stability and earthly accumulation."},
        "Gemini": {"sanskrit": "Mithuna", "dev": "Budha (Mercury)", "mantra": "Om Budhaya Namaha", "fact": "Represents cosmic duality and communication pathways."},
        "Cancer": {"sanskrit": "Karka / Pushya", "dev": "Chandra (Moon)", "mantra": "Om Somaya Namaha", "fact": "The nurturing heart of the celestial waters."},
        "Leo": {"sanskrit": "Simha / Magha", "dev": "Surya (Sun) \u0026 Pitris", "mantra": "Om Suryaya Namaha", "fact": "The royal lion, carrying the fire of ancestral lineage."},
        "Virgo": {"sanskrit": "Kanya / Chitra", "dev": "Budha (Mercury)", "mantra": "Om Vishnave Namaha", "fact": "The divine maiden of earthly purity and intellectual order."},
        "Libra": {"sanskrit": "Tula", "dev": "Shukra (Venus)", "mantra": "Om Shukraya Namaha", "fact": "Cosmic balance, maintaining harmony across the heavenly spheres."},
        "Scorpius": {"sanskrit": "Vrishchika / Jyeshtha", "dev": "Indra", "mantra": "Om Indraya Namaha", "fact": "The elder constellation holding domain over hidden mystical depths."},
        "Sagittarius": {"sanskrit": "Dhanu / Mula", "dev": "Brihaspati (Jupiter)", "mantra": "Om Gurave Namaha", "fact": "The cosmic archer pointing towards divine spiritual truth."},
        "Capricornus": {"sanskrit": "Makara", "dev": "Shani (Saturn)", "mantra": "Om Shanicharaya Namaha", "fact": "The celestial sea-monster presiding over karma and structure."},
        "Aquarius": {"sanskrit": "Kumbha", "dev": "Shani / Varuna", "mantra": "Om Varunaya Namaha", "fact": "The mystical water bearer, dissolving worldly attachments."},
        "Pisces": {"sanskrit": "Meena", "dev": "Brihaspati (Jupiter)", "mantra": "Om Gurave Namaha", "fact": "The ethereal ocean where profound liberation is attained."},
        "Orion": {"sanskrit": "Mrigashira / Ardra", "dev": "Soma \u0026 Rudra", "mantra": "Om Rudraya Namaha", "fact": "The mighty cosmic hunter harboring the turbulent storm of Rudra."},
        "Ursa Major": {"sanskrit": "Saptarishi", "dev": "The Seven Sages", "mantra": "Om Saptarishibhyo Namaha", "fact": "Revered as the seven enlightened ascetics watching over humanity."},
        "Cygnus": {"sanskrit": "Hamsa", "dev": "Brahma", "mantra": "Om Hamsaya Namaha", "fact": "The cosmic swan possessing the ultimate discriminative wisdom (Neera-Ksheera Viveka)."},
        "Canis Major": {"sanskrit": "Lubdhaka (Sirius)", "dev": "Rudra / Shiva", "mantra": "Om Namah Shivaya", "fact": "Sirius represents the fierce hunter aspect of Lord Shiva."},
        "Perseus": {"sanskrit": "Parashurama", "dev": "Vishnu Avatar", "mantra": "Om Parashuramaya Namaha", "fact": "The celestial warrior bearing the cosmic axe."},
        "Ophiuchus": {"sanskrit": "Dhanvantari", "dev": "God of Ayurveda", "mantra": "Om Dhanvantaraye Namaha", "fact": "The celestial healer holding the divine nectar of immortality (Amrita)."}
    }
    
    if name in mappings:
        return mappings[name]
    else:
        return {
            "sanskrit": "Cosmic Expanse (Approximate)",
            "dev": "Navagraha & Cosmic Deities",
            "mantra": "Om Namo Narayana",
            "fact": "A deep-space stellar collective mapped onto universal cosmic reverence. *[Flagged: Yet to discuss with official texts]*"
        }

def process():
    file_path = '/Users/anuragsen/Desktop/constiltion/script.js'
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()

    def replacer(match):
        obj_str = match.group(0)
        name_match = re.search(r'name\s*:\s*["\'](.*?)["\']', obj_str)
        if not name_match:
            return obj_str
        name = name_match.group(1)
        
        wiki_url = f"https://en.wikipedia.org/wiki/{name.replace(' ', '_')}"
        yt_url = f"https://www.youtube.com/results?search_query={name.replace(' ', '+')}+constellation+mythology"
        
        vedic = get_vedic_mapping(name)
        
        vedic_str = f"vedic:{{sanskrit:\"{vedic['sanskrit']}\",dev:\"{vedic['dev']}\",mantra:\"{vedic['mantra']}\",fact:\"{vedic['fact']}\"}}"
        links_str = f"wiki:\"{wiki_url}\",yt:\"{yt_url}\""
        
        if 'vedic:' in obj_str:
            return obj_str
            
        new_obj_str = re.sub(r'(desc:)', f"{links_str},\n   {vedic_str},\n   \\1", obj_str)
        return new_obj_str

    # Modified Regex to cleanly capture the end of the object
    new_content = re.sub(r'\{name:\s*["\'][^"\']+["\'].*?tags:\s*\[[^\}]+\n\s*\}', replacer, content, flags=re.DOTALL)
    
    with open(file_path, 'w', encoding='utf-8') as f:
        f.write(new_content)
        
    print("Injected Vedic & Links successfully.")

if __name__ == '__main__':
    process()
