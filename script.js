const elements = {
  H: { name: "Hydrogen", mass: 1.008, valence: 1, type: "nonmetal", electrons: 1 },
  He: { name: "Helium", mass: 4.0026, valence: 2, type: "noble", electrons: 2 },
  Li: { name: "Lithium", mass: 6.94, valence: 1, type: "alkali", electrons: 3 },
  Be: { name: "Beryllium", mass: 9.0122, valence: 2, type: "alkaline", electrons: 4 },
  B: { name: "Boron", mass: 10.81, valence: 3, type: "metalloid", electrons: 5 },
  C: { name: "Carbon", mass: 12.01, valence: 4, type: "nonmetal", electrons: 6 },
  N: { name: "Nitrogen", mass: 14.007, valence: 5, type: "nonmetal", electrons: 7 },
  O: { name: "Oxygen", mass: 16.00, valence: 6, type: "nonmetal", electrons: 8 },
  F: { name: "Fluorine", mass: 18.998, valence: 7, type: "nonmetal", electrons: 9 },
  Ne: { name: "Neon", mass: 20.180, valence: 8, type: "noble", electrons: 10 },
  Na: { name: "Sodium", mass: 22.990, valence: 1, type: "alkali", electrons: 11 },
  Mg: { name: "Magnesium", mass: 24.305, valence: 2, type: "alkaline", electrons: 12 },
  Al: { name: "Aluminum", mass: 26.982, valence: 3, type: "post-transition", electrons: 13 },
  Si: { name: "Silicon", mass: 28.085, valence: 4, type: "metalloid", electrons: 14 },
  P: { name: "Phosphorus", mass: 30.974, valence: 5, type: "nonmetal", electrons: 15 },
  S: { name: "Sulfur", mass: 32.06, valence: 6, type: "nonmetal", electrons: 16 },
  Cl: { name: "Chlorine", mass: 35.45, valence: 7, type: "nonmetal", electrons: 17 },
  Ar: { name: "Argon", mass: 39.948, valence: 8, type: "noble", electrons: 18 },
  K: { name: "Potassium", mass: 39.098, valence: 1, type: "alkali", electrons: 19 },
  Ca: { name: "Calcium", mass: 40.078, valence: 2, type: "alkaline", electrons: 20 },
  Sc: { name: "Scandium", mass: 44.96, valence: 3, type: "transition metal", electrons: 21 },
  Ti: { name: "Titanium", mass: 47.87, valence: 4, type: "transition metal", electrons: 22 },
  V: { name: "Vanadium", mass: 50.94, valence: 5, type: "transition metal", electrons: 23 },
  Cr: { name: "Chromium", mass: 52.00, valence: 6, type: "transition metal", electrons: 24 },
  Mn: { name: "Manganese", mass: 54.94, valence: 7, type: "transition metal", electrons: 25 },
  Fe: { name: "Iron", mass: 55.85, valence: 2, type: "transition metal", electrons: 26 },
  Co: { name: "Cobalt", mass: 58.93, valence: 2, type: "transition metal", electrons: 27 },
  Ni: { name: "Nickel", mass: 58.69, valence: 2, type: "transition metal", electrons: 28 },
  Cu: { name: "Copper", mass: 63.55, valence: 1, type: "transition metal", electrons: 29 },
  Zn: { name: "Zinc", mass: 65.38, valence: 2, type: "transition metal", electrons: 30 },
  Ga: { name: "Gallium", mass: 69.72, valence: 3, type: "post-transition metal", electrons: 31 },
  Ge: { name: "Germanium", mass: 72.63, valence: 4, type: "metalloid", electrons: 32 },
  As: { name: "Arsenic", mass: 74.92, valence: 5, type: "metalloid", electrons: 33 },
  Se: { name: "Selenium", mass: 78.97, valence: 6, type: "nonmetal", electrons: 34 },
  Br: { name: "Bromine", mass: 79.90, valence: 7, type: "halogen", electrons: 35 },
  Kr: { name: "Krypton", mass: 83.80, valence: 8, type: "noble gas", electrons: 36 },
  Rb: { name: "Rubidium", mass: 85.47, valence: 1, type: "alkali metal", electrons: 37 },
  Sr: { name: "Strontium", mass: 87.62, valence: 2, type: "alkaline earth metal", electrons: 38 },
  Y: { name: "Yttrium", mass: 88.91, valence: 3, type: "transition metal", electrons: 39 },
  Zr: { name: "Zirconium", mass: 91.22, valence: 4, type: "transition metal", electrons: 40 },
  Nb: { name: "Niobium", mass: 92.91, valence: 5, type: "transition metal", electrons: 41 },
  Mo: { name: "Molybdenum", mass: 95.95, valence: 6, type: "transition metal", electrons: 42 },
  Tc: { name: "Technetium", mass: 98.00, valence: 7, type: "transition metal", electrons: 43 },
  Ru: { name: "Ruthenium", mass: 101.07, valence: 8, type: "transition metal", electrons: 44 },
  Rh: { name: "Rhodium", mass: 102.91, valence: 3, type: "transition metal", electrons: 45 },
  Pd: { name: "Palladium", mass: 106.42, valence: 2, type: "transition metal", electrons: 46 },
  Ag: { name: "Silver", mass: 107.87, valence: 1, type: "transition metal", electrons: 47 },  
  Cd: { name: "Cadmium", mass: 112.41, valence: 2, type: "transition metal", electrons: 48 },
  In: { name: "Indium", mass: 114.82, valence: 3, type: "post-transition metal", electrons: 49 },
  Sn: { name: "Tin", mass: 118.71, valence: 4, type: "post-transition metal", electrons: 50 },
  Sb: { name: "Antimony", mass: 121.76, valence: 5, type: "metalloid", electrons: 51 },
  Te: { name: "Tellurium", mass: 127.60, valence: 6, type: "metalloid", electrons: 52 },
  I: { name: "Iodine", mass: 126.90, valence: 7, type: "halogen", electrons: 53 },
  Xe: { name: "Xenon", mass: 131.29, valence: 8, type: "noble gas", electrons: 54 },
  Cs: { name: "Cesium", mass: 132.91, valence: 1, type: "alkali metal", electrons: 55 },
  Ba: { name: "Barium", mass: 137.33, valence: 2, type: "alkaline earth metal", electrons: 56 },
  La: { name: "Lanthanum", mass: 138.91, valence: 3, type: "lanthanide", electrons: 57 },
  Ce: { name: "Cerium", mass: 140.12, valence: 4, type: "lanthanide", electrons: 58 },
  Pr: { name: "Praseodymium", mass: 140.91, valence: 3, type: "lanthanide", electrons: 59 },
  Nd: { name: "Neodymium", mass: 144.24, valence: 3, type: "lanthanide", electrons: 60 },
  Pm: { name: "Promethium", mass: 145.00, valence: 3, type: "lanthanide", electrons: 61 },
  Sm: { name: "Samarium", mass: 150.36, valence: 3, type: "lanthanide", electrons: 62 },
  Eu: { name: "Europium", mass: 151.96, valence: 2, type: "lanthanide", electrons: 63 },
  Gd: { name: "Gadolinium", mass: 157.25, valence: 3, type: "lanthanide", electrons: 64 },
  Tb: { name: "Terbium", mass: 158.93, valence: 3, type: "lanthanide", electrons: 65 },
  Dy: { name: "Dysprosium", mass: 162.50, valence: 3, type: "lanthanide", electrons: 66 },
  Ho: { name: "Holmium", mass: 164.93, valence: 3, type: "lanthanide", electrons: 67 },
  Er: { name: "Erbium", mass: 167.26, valence: 3, type: "lanthanide", electrons: 68 },
  Tm: { name: "Thulium", mass: 168.93, valence: 3, type: "lanthanide", electrons: 69 },
  Yb: { name: "Ytterbium", mass: 173.04, valence: 2, type: "lanthanide", electrons: 70 },
  Lu: { name: "Lutetium", mass: 174.97, valence: 3, type: "lanthanide", electrons: 71 },
  Hf: { name: "Hafnium", mass: 178.49, valence: 4, type: "transition metal", electrons: 72 },
  Ta: { name: "Tantalum", mass: 180.95, valence: 5, type: "transition metal", electrons: 73 },
  W: { name: "Tungsten", mass: 183.84, valence: 6, type: "transition metal", electrons: 74 },
  Re: { name: "Rhenium", mass: 186.21, valence: 7, type: "transition metal", electrons: 75 },
  Os: { name: "Osmium", mass: 190.23, valence: 8, type: "transition metal", electrons: 76 },
  Ir: { name: "Iridium", mass: 192.22, valence: 9, type: "transition metal", electrons: 77 },
  Pt: { name: "Platinum", mass: 195.08, valence: 2, type: "transition metal", electrons: 78 },
  Au: { name: "Gold", mass: 196.97, valence: 1, type: "transition metal", electrons: 79 },
  Hg: { name: "Mercury", mass: 200.59, valence: 2, type: "transition metal", electrons: 80 },
  Tl: { name: "Thallium", mass: 204.38, valence: 3, type: "post-transition metal", electrons: 81 },
  Pb: { name: "Lead", mass: 207.2, valence: 4, type: "post-transition metal", electrons: 82 },
  Bi: { name: "Bismuth", mass: 208.98, valence: 5, type: "post-transition metal", electrons: 83 },
  Po: { name: "Polonium", mass: 209.00, valence: 6, type: "metalloid", electrons: 84 },
  At: { name: "Astatine", mass: 210.00, valence: 7, type: "halogen", electrons: 85 },
  Rn: { name: "Radon", mass: 222.00, valence: 8, type: "noble gas", electrons: 86 },
  Fr: { name: "Francium", mass: 223.00, valence: 1, type: "alkali metal", electrons: 87 },
  Ra: { name: "Radium", mass: 226.00, valence: 2, type: "alkaline earth metal", electrons: 88 },
  Ac: { name: "Actinium", mass: 227.00, valence: 3, type: "actinide", electrons: 89 },
  Th: { name: "Thorium", mass: 232.04, valence: 4, type: "actinide", electrons: 90 },
  Pa: { name: "Protactinium", mass: 231.04, valence: 5, type: "actinide", electrons: 91 },
  U: { name: "Uranium", mass: 238.03, valence: 6, type: "actinide", electrons: 92 },
  Np: { name: "Neptunium", mass: 237.00, valence: 5, type: "actinide", electrons: 93 },
  Pu: { name: "Plutonium", mass: 244.00, valence: 6, type: "actinide", electrons: 94 },
  Am: { name: "Americium", mass: 243.00, valence: 3, type: "actinide", electrons: 95 },
  Cm: { name: "Curium", mass: 247.00, valence: 3, type: "actinide", electrons: 96 },
  Bk: { name: "Berkelium", mass: 247.00, valence: 3, type: "actinide", electrons: 97 },
  Cf: { name: "Californium", mass: 251.00, valence: 3, type: "actinide", electrons: 98 },
  Es: { name: "Einsteinium", mass: 252.00, valence: 3, type: "actinide", electrons: 99 },
  Fm: { name: "Fermium", mass: 257.00, valence: 3, type: "actinide", electrons: 100 },
  Md: { name: "Mendelevium", mass: 258.00, valence: 3, type: "actinide", electrons: 101 },  
  No: { name: "Nobelium", mass: 259.00, valence: 2, type: "actinide", electrons: 102 },
  Lr: { name: "Lawrencium", mass: 262.00, valence: 3, type: "actinide", electrons: 103 },
  Rf: { name: "Rutherfordium", mass: 267.00, valence: 4, type: "transition metal", electrons: 104 },
  Db: { name: "Dubnium", mass: 270.00, valence: 5, type: "transition metal", electrons: 105 },
  Sg: { name: "Seaborgium", mass: 271.00, valence: 6, type: "transition metal", electrons: 106 },
  Bh: { name: "Bohrium", mass: 270.00, valence: 7, type: "transition metal", electrons: 107 },
  Hs: { name: "Hassium", mass: 277.00, valence: 8, type: "transition metal", electrons: 108 },
  Mt: { name: "Meitnerium", mass: 278.00, valence: 9, type: "transition metal", electrons: 109 },
  Ds: { name: "Darmstadtium", mass: 281.00, valence: 10, type: "transition metal", electrons: 110 },
  Rg: { name: "Roentgenium", mass: 282.00, valence: 1, type: "transition metal", electrons: 111 },
  Cn: { name: "Copernicium", mass: 285.00, valence: 2, type: "transition metal", electrons: 112 },
  Nh: { name: "Nihonium", mass: 286.00, valence: 3, type: "post-transition metal", electrons: 113 },
  Fl: { name: "Flerovium", mass: 289.00, valence: 4, type: "post-transition metal", electrons: 114 },
  Mc: { name: "Moscovium", mass: 290.00, valence: 3, type: "post-transition metal", electrons: 115 },
  Lv: { name: "Livermorium", mass: 293.00, valence: 6, type: "post-transition metal", electrons: 116 },
  Ts: { name: "Tennessine", mass: 294.00, valence: 7, type: "halogen", electrons: 117 },
  Og: { name: "Oganesson", mass: 294.00, valence: 8, type: "noble gas", electrons: 118 }
};

const groupColors = {
  "alkali metal": "#f54242",
  "alkaline earth metal": "#f5a142",
  "transition metal": "#f5de42",
  "metalloid": "#42f554",
  "nonmetal": "#4287f5",
  "halogen": "#9b42f5",
  "noble gas": "#f5429e",
  "lanthanide": "#42f5f5",
  "actinide": "#f5f542"
};

const table = document.getElementById("periodic-table");
const tooltip = document.createElement("div");
tooltip.className = "tooltip";
document.body.appendChild(tooltip);

// === Render Periodic Table ===
for (const [symbol, info] of Object.entries(elements)) {
  const elDiv = document.createElement("div");
  elDiv.className = "element";
  elDiv.style.backgroundColor = groupColors[info.group] || "#555";
  elDiv.innerHTML = `<strong>${symbol}</strong>`;
  elDiv.addEventListener("mouseover", e => {
    tooltip.innerHTML = `<strong>${info.name}</strong><br>Mass: ${info.mass}<br>Valence: ${info.valence}`;
    tooltip.style.display = "block";
    tooltip.style.left = e.pageX + 10 + "px";
    tooltip.style.top = e.pageY + 10 + "px";
  });
  elDiv.addEventListener("mouseout", () => tooltip.style.display = "none");
  elDiv.addEventListener("click", () => showLewisDiagram(symbol, info.valence));
  table.appendChild(elDiv);
}

// === Periodic Trends Toggle ===
const toggleBtn = document.getElementById("toggleTrends");
const trendInfo = document.getElementById("trendInfo");
let trendsVisible = false;

toggleBtn.addEventListener("click", () => {
  trendsVisible = !trendsVisible;
  trendInfo.classList.toggle("hidden", !trendsVisible);
  toggleBtn.textContent = trendsVisible ? "Hide Periodic Trends" : "Show Periodic Trends";
  if (trendsVisible) {
    document.querySelectorAll(".element").forEach(el => {
      const sym = el.textContent.trim();
      const en = elements[sym]?.electronegativity;
      if (en) {
        const hue = 240 - (en / 4) * 240;
        el.style.backgroundColor = `hsl(${hue}, 70%, 50%)`;
      }
    });
  } else {
    document.querySelectorAll(".element").forEach(el => {
      const sym = el.textContent.trim();
      el.style.backgroundColor = groupColors[elements[sym].group] || "#555";
    });
  }
});

// === Molar Mass Calculator ===
const elementInputs = document.getElementById("elementInputs");
Object.keys(elements).forEach(sym => {
  const div = document.createElement("div");
  div.innerHTML = `${sym}: <input type="number" id="count-${sym}" min="0" value="0">`;
  elementInputs.appendChild(div);
});

document.getElementById("calcBtn").addEventListener("click", () => {
  let total = 0;
  const log = document.getElementById("elementLog");
  log.innerHTML = "";
  for (const [sym, info] of Object.entries(elements)) {
    const count = Number(document.getElementById(`count-${sym}`).value);
    if (count > 0) {
      total += count * info.mass;
      const li = document.createElement("li");
      li.textContent = `${count} × ${sym} (${info.mass})`;
      log.appendChild(li);
    }
  }
  document.getElementById("molarResult").textContent = `Molar Mass: ${total.toFixed(3)} g/mol`;
});

// === Lewis Diagram ===
function showLewisDiagram(symbol, valence) {
  const area = document.getElementById("diagramArea");
  area.innerHTML = `<h3>${symbol}</h3>`;
  const container = document.createElement("div");
  container.className = "draggable";
  container.style.width = "100px";
  container.style.height = "100px";
  container.style.border = "2px solid white";
  container.style.borderRadius = "50%";
  container.style.margin = "auto";
  container.style.position = "relative";
  container.textContent = symbol;

  for (let i = 0; i < valence; i++) {
    const dot = document.createElement("div");
    dot.style.position = "absolute";
    dot.style.width = "8px";
    dot.style.height = "8px";
    dot.style.background = "white";
    dot.style.borderRadius = "50%";
    const angle = (i / valence) * 2 * Math.PI;
    dot.style.left = `${45 + 35 * Math.cos(angle)}px`;
    dot.style.top = `${45 + 35 * Math.sin(angle)}px`;
    container.appendChild(dot);
  }
  makeDraggable(container);
  area.appendChild(container);
}

// === Drag & Drop Workshop ===
const workshop = document.getElementById("customWorkshop");
workshop.addEventListener("dragover", e => e.preventDefault());
workshop.addEventListener("drop", e => {
  e.preventDefault();
  const sym = e.dataTransfer.getData("text/plain");
  if (sym) {
    const newEl = document.createElement("div");
    newEl.textContent = sym;
    newEl.className = "draggable";
    newEl.style.left = `${e.offsetX}px`;
    newEl.style.top = `${e.offsetY}px`;
    workshop.appendChild(newEl);
    makeDraggable(newEl);
  }
});

function makeDraggable(el) {
  let offsetX, offsetY;
  el.onmousedown = function (e) {
    offsetX = e.offsetX;
    offsetY = e.offsetY;
    function moveAt(x, y) {
      el.style.left = x - offsetX + "px";
      el.style.top = y - offsetY + "px";
    }
    function onMouseMove(e) {
      moveAt(e.pageX - workshop.offsetLeft, e.pageY - workshop.offsetTop);
    }
    document.addEventListener("mousemove", onMouseMove);
    el.onmouseup = function () {
      document.removeEventListener("mousemove", onMouseMove);
      el.onmouseup = null;
    };
  };
}

// === Lewis Rules Toggle ===
document.getElementById("showRulesBtn").addEventListener("click", () => {
  document.getElementById("rules").classList.toggle("hidden");
});