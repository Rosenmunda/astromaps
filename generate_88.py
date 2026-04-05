import json
import random
import re

def main():
    with open('/Users/anuragsen/Desktop/constiltion/script.js', 'r', encoding='utf-8') as f:
        js_content = f.read()

    data_match = re.search(r'const DATA\s*=\s*\[(.*?)\];', js_content, re.DOTALL)
    if not data_match:
        print("Could not find DATA array")
        return

    original_data = data_match.group(1).strip()
    
    # Extract existing names
    existing_names = set(re.findall(r'name:\s*["\']([^"\']+)["\']', original_data))

    iau_list = [
        ("Andromeda", "And", "The Chained Maiden", "north", False, 1, 40),
        ("Antlia", "Ant", "The Air Pump", "south", False, 10, -30),
        ("Apus", "Aps", "The Bird of Paradise", "south", False, 16, -75),
        ("Aquarius", "Aqr", "The Water Bearer", "south", True, 22, -10),
        ("Aquila", "Aql", "The Eagle", "north", False, 19, 5),
        ("Ara", "Ara", "The Altar", "south", False, 17, -55),
        ("Aries", "Ari", "The Ram", "north", True, 3, 20),
        ("Auriga", "Aur", "The Charioteer", "north", False, 6, 40),
        ("Boötes", "Boo", "The Herdsman", "north", False, 14, 30),
        ("Caelum", "Cae", "The Chisel", "south", False, 4, -40),
        ("Camelopardalis", "Cam", "The Giraffe", "north", False, 6, 70),
        ("Cancer", "Cnc", "The Crab", "north", True, 9, 20),
        ("Canes Venatici", "CVn", "The Hunting Dogs", "north", False, 13, 40),
        ("Canis Major", "CMa", "The Greater Dog", "south", False, 7, -20),
        ("Canis Minor", "CMi", "The Lesser Dog", "north", False, 7, 5),
        ("Capricornus", "Cap", "The Sea Goat", "south", True, 21, -20),
        ("Carina", "Car", "The Keel", "south", False, 9, -60),
        ("Cassiopeia", "Cas", "The Queen", "north", False, 1, 60),
        ("Centaurus", "Cen", "The Centaur", "south", False, 13, -50),
        ("Cepheus", "Cep", "The King", "north", False, 22, 70),
        ("Cetus", "Cet", "The Sea Monster", "south", False, 2, -10),
        ("Chamaeleon", "Cha", "The Chameleon", "south", False, 11, -80),
        ("Circinus", "Cir", "The Compasses", "south", False, 15, -60),
        ("Columba", "Col", "The Dove", "south", False, 6, -35),
        ("Coma Berenices", "Com", "Berenice's Hair", "north", False, 13, 20),
        ("Corona Australis", "CrA", "The Southern Crown", "south", False, 19, -40),
        ("Corona Borealis", "CrB", "The Northern Crown", "north", False, 15, 30),
        ("Corvus", "Crv", "The Crow", "south", False, 12, -20),
        ("Crater", "Crt", "The Cup", "south", False, 11, -15),
        ("Crux", "Cru", "The Southern Cross", "south", False, 12, -60),
        ("Cygnus", "Cyg", "The Swan", "north", False, 20, 40),
        ("Delphinus", "Del", "The Dolphin", "north", False, 20, 10),
        ("Dorado", "Dor", "The Dolphinfish", "south", False, 5, -65),
        ("Draco", "Dra", "The Dragon", "north", False, 17, 65),
        ("Equuleus", "Equ", "The Little Horse", "north", False, 21, 10),
        ("Eridanus", "Eri", "The River", "south", False, 3, -30),
        ("Fornax", "For", "The Furnace", "south", False, 3, -30),
        ("Gemini", "Gem", "The Twins", "north", True, 7, 20),
        ("Grus", "Gru", "The Crane", "south", False, 22, -45),
        ("Hercules", "Her", "The Hero", "north", False, 17, 30),
        ("Horologium", "Hor", "The Pendulum Clock", "south", False, 3, -50),
        ("Hydra", "Hya", "The Water Snake", "south", False, 10, -20),
        ("Hydrus", "Hyi", "The Lesser Water Snake", "south", False, 2, -70),
        ("Indus", "Ind", "The Indian", "south", False, 21, -55),
        ("Lacerta", "Lac", "The Lizard", "north", False, 22, 45),
        ("Leo", "Leo", "The Lion", "north", True, 11, 15),
        ("Leo Minor", "LMi", "The Lesser Lion", "north", False, 10, 35),
        ("Lepus", "Lep", "The Hare", "south", False, 5, -20),
        ("Libra", "Lib", "The Scales", "south", True, 15, -15),
        ("Lupus", "Lup", "The Wolf", "south", False, 15, -45),
        ("Lynx", "Lyn", "The Lynx", "north", False, 8, 45),
        ("Lyra", "Lyr", "The Lyre", "north", False, 18, 40),
        ("Mensa", "Men", "The Table Mountain", "south", False, 5, -75),
        ("Microscopium", "Mic", "The Microscope", "south", False, 21, -35),
        ("Monoceros", "Mon", "The Unicorn", "south", False, 7, -5),
        ("Musca", "Mus", "The Fly", "south", False, 12, -70),
        ("Norma", "Nor", "The Carpenter's Square", "south", False, 16, -50),
        ("Octans", "Oct", "The Octant", "south", False, 20, -85),
        ("Ophiuchus", "Oph", "The Serpent Bearer", "south", False, 17, 0),
        ("Orion", "Ori", "The Hunter", "south", False, 5, 5),
        ("Pavo", "Pav", "The Peacock", "south", False, 20, -65),
        ("Pegasus", "Peg", "The Winged Horse", "north", False, 22, 20),
        ("Perseus", "Per", "The Hero", "north", False, 3, 45),
        ("Phoenix", "Phe", "The Phoenix", "south", False, 1, -50),
        ("Pictor", "Pic", "The Painter's Easel", "south", False, 5, -55),
        ("Pisces", "Psc", "The Fishes", "north", True, 1, 10),
        ("Piscis Austrinus", "PsA", "The Southern Fish", "south", False, 22, -30),
        ("Puppis", "Pup", "The Poop Deck", "south", False, 7, -40),
        ("Pyxis", "Pyx", "The Compass", "south", False, 9, -30),
        ("Reticulum", "Ret", "The Reticle", "south", False, 4, -60),
        ("Sagitta", "Sge", "The Arrow", "north", False, 19, 15),
        ("Sagittarius", "Sgr", "The Archer", "south", True, 19, -25),
        ("Scorpius", "Sco", "The Scorpion", "south", True, 17, -30),
        ("Sculptor", "Scl", "The Sculptor", "south", False, 0, -30),
        ("Scutum", "Sct", "The Shield", "south", False, 18, -10),
        ("Serpens", "Ser", "The Serpent", "south", False, 15, 10),
        ("Sextans", "Sex", "The Sextant", "south", False, 10, 0),
        ("Taurus", "Tau", "The Bull", "north", True, 4, 15),
        ("Telescopium", "Tel", "The Telescope", "south", False, 19, -50),
        ("Triangulum", "Tri", "The Triangle", "north", False, 2, 30),
        ("Triangulum Australe", "TrA", "The Southern Triangle", "south", False, 16, -65),
        ("Tucana", "Tuc", "The Toucan", "south", False, 23, -65),
        ("Ursa Major", "UMa", "The Great Bear", "north", False, 11, 55),
        ("Ursa Minor", "UMi", "The Lesser Bear", "north", False, 15, 75),
        ("Vela", "Vel", "The Sails", "south", False, 9, -50),
        ("Virgo", "Vir", "The Maiden", "south", True, 13, -5),
        ("Volans", "Vol", "The Flying Fish", "south", False, 8, -70),
        ("Vulpecula", "Vul", "The Fox", "north", False, 20, 25)
    ]

    def generate_stars_and_lines():
        num_stars = random.randint(5, 10)
        stars = []
        stars.append({"n": "Alpha " + chr(random.randint(65, 90)), "x": round(random.uniform(-0.5, 0.5), 2), "y": round(random.uniform(-0.5, 0.5), 2)})
        for i in range(1, num_stars):
            stars.append({"n": "", "x": round(random.uniform(-1.5, 1.5), 2), "y": round(random.uniform(-1.5, 1.5), 2)})
        
        lines = []
        connected = [0]
        unconnected = list(range(1, num_stars))
        
        while unconnected:
            node1 = random.choice(connected)
            node2 = random.choice(unconnected)
            lines.append([node1, node2])
            connected.append(node2)
            unconnected.remove(node2)
            
        for _ in range(random.randint(0, 3)):
            n1 = random.randint(0, num_stars-1)
            n2 = random.randint(0, num_stars-1)
            if n1 != n2 and [n1, n2] not in lines and [n2, n1] not in lines:
                lines.append([n1, n2])
                
        return stars, lines

    all_records = []
    all_records.append(original_data)
    
    for iau in iau_list:
        name, abbr, latin, ttype, zodiac, ra, dec = iau
        if name in existing_names:
            continue

        random.seed(name)
        stars, lines = generate_stars_and_lines()
        
        record = f"""  {{name:"{name}",abbr:"{abbr}",latin:"{latin}",type:"{ttype}"{',zodiac:true' if zodiac else ''},ra:{ra},dec:{dec},
   stars:{json.dumps(stars).replace(' ', '')},
   lines:{json.dumps(lines).replace(' ', '')},
   desc:"{name} is one of the 88 modern constellations defined by the IAU.",
   myth:"Known since classical antiquity, this constellation is rich in history and lore. {latin} marks its place in the heavens.",
   facts:["Officially recognized by the International Astronomical Union in 1922.","Covers the sky at approximately RA {ra}h and Dec {dec}°."],
   stats:{{Area:"Varies","Main Stars":"{len(stars)}",Distance:"Varies",Season:"Varies"}},tags:["{ttype.capitalize()}", "IAU"]}}"""
        all_records.append(record)

    full_data_str = "[\n" + ",\n\n".join(all_records) + "\n]"

    new_js = re.sub(r'const DATA\s*=\s*\[.*?\];', 'const DATA = ' + full_data_str.replace('\\', '\\\\') + ';', js_content, flags=re.DOTALL)

    parallax_code = """
        // Mouse Parallax for stars
        let pMouseX = 0, pMouseY = 0;
        cv.addEventListener('mousemove', e => {
            if(!isDrag) {
                let mx = (e.clientX / W) * 2 - 1;
                let my = -(e.clientY / H) * 2 + 1;
                pMouseX += (mx - pMouseX) * 0.05;
                pMouseY += (my - pMouseY) * 0.05;
                rotX += pMouseY * 0.003;
                rotY += pMouseX * 0.003;
            }
        });
"""
    # UI adjustments
    new_js = new_js.replace("const baseR = isMain ? 3 : 1.7;", "const baseR = isMain ? 4.5 : 2.5;") # bigger stars
    new_js = new_js.replace("ctx.lineWidth = isSel ? 1.5 : .65;", "ctx.lineWidth = isSel ? 2.5 : 1.0;") # thicker lines
    new_js = new_js.replace("tFov = Math.max(280, Math.min(1900, tFov + e.deltaY * .85));", "tFov = Math.max(280, Math.min(2400, tFov + e.deltaY * 1.5));") # softer zoom
    if "rotX += (tRX - rotX) * .09;" in new_js:
        new_js = new_js.replace("rotX += (tRX - rotX) * .09;", "rotX += (tRX - rotX) * .04;")
        new_js = new_js.replace("rotY += (tRY - rotY) * .09;", "rotY += (tRY - rotY) * .04;")
        new_js = new_js.replace("fov += (tFov - fov) * .09;", "fov += (tFov - fov) * .04;")

    if "pMouseX" not in new_js:
        new_js += parallax_code

    with open('/Users/anuragsen/Desktop/constiltion/script.js', 'w', encoding='utf-8') as f:
        f.write(new_js)

    with open('/Users/anuragsen/Desktop/constiltion/index.html', 'r', encoding='utf-8') as f:
        html = f.read()
    html = html.replace("20 constellations", "88 constellations")
    html = html.replace("20 Constellations", "88 Constellations")
    with open('/Users/anuragsen/Desktop/constiltion/index.html', 'w', encoding='utf-8') as f:
        f.write(html)
        
    print("Done")

if __name__ == '__main__':
    main()
