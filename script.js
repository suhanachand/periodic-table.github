const elements = {
  H: { name: "Hydrogen", mass: 1.008, valence: 1, group: "nonmetal", row: 1, col: 1 },
  He: { name: "Helium", mass: 4.0026, valence: 2, group: "noble gas", row: 1, col: 18 },
  Li: { name: "Lithium", mass: 6.94, valence: 1, group: "alkali metal", row: 2, col: 1 },
  Be: { name: "Beryllium", mass: 9.0122, valence: 2, group: "alkaline earth metal", row: 2, col: 2 },
  B: { name: "Boron", mass: 10.81, valence: 3, group: "metalloid", row: 2, col: 13 },
  C: { name: "Carbon", mass: 12.011, valence: 4, group: "nonmetal", row: 2, col: 14 },
  N: { name: "Nitrogen", mass: 14.007, valence: 5, group: "nonmetal", row: 2, col: 15 },
  O: { name: "Oxygen", mass: 15.999, valence: 6, group: "nonmetal", row: 2, col: 16 },
  F: { name: "Fluorine", mass: 18.998, valence: 7, group: "halogen", row: 2, col: 17 },
  Ne: { name: "Neon", mass: 20.18, valence: 8, group: "noble gas", row: 2, col: 18 },
  Na: { name: "Sodium", mass: 22.99, valence: 1, group: "alkali metal", row: 3, col: 1 },
  Mg: { name: "Magnesium", mass: 24.305, valence: 2, group: "alkaline earth metal", row: 3, col: 2 },
  Al: { name: "Aluminium", mass: 26.982, valence: 3, group: "post-transition", row: 3, col: 13 },
  Si: { name: "Silicon", mass: 28.085, valence: 4, group: "metalloid", row: 3, col: 14 },
  P: { name: "Phosphorus", mass: 30.974, valence: 5, group: "nonmetal", row: 3, col: 15 },
  S: { name: "Sulfur", mass: 32.06, valence: 6, group: "nonmetal", row: 3, col: 16 },
  Cl: { name: "Chlorine", mass: 35.45, valence: 7, group: "halogen", row: 3, col: 17 },
  Ar: { name: "Argon", mass: 39.948, valence: 8, group: "noble gas", row: 3, col: 18 },
  K: { name: "Potassium", mass: 39.098, valence: 1, group: "alkali metal", row: 4, col: 1 },
  Ca: { name: "Calcium", mass: 40.078, valence: 2, group: "alkaline earth metal", row: 4, col: 2 },
  Sc: { name: "Scandium", mass: 44.956, valence: 3, group: "transition metal", row: 4, col: 3 },
  Ti: { name: "Titanium", mass: 47.867, valence: 4, group: "transition metal", row: 4, col: 4 },
  V: { name: "Vanadium", mass: 50.942, valence: 5, group: "transition metal", row: 4, col: 5 },
  Cr: { name: "Chromium", mass: 51.996, valence: 6, group: "transition metal", row: 4, col: 6 },
  Mn: { name: "Manganese", mass: 54.938, valence: 7, group: "transition metal", row: 4, col: 7 },
  Fe: { name: "Iron", mass: 55.845, valence: 8, group: "transition metal", row: 4, col: 8 },
  Co: { name: "Cobalt", mass: 58.933, valence: 9, group: "transition metal", row: 4, col: 9 },
  Ni: { name: "Nickel", mass: 58.693, valence: 10, group: "transition metal", row: 4, col: 10 },
  Cu: { name: "Copper", mass: 63.546, valence: 11, group: "transition metal", row: 4, col: 11 },
  Zn: { name: "Zinc", mass: 65.38, valence: 12, group: "transition metal", row: 4, col: 12 },
  Ga: { name: "Gallium", mass: 69.723, valence: 3, group: "post-transition", row: 4, col: 13 },
  Ge: { name: "Germanium", mass: 72.63, valence: 4, group: "metalloid", row: 4, col: 14 },
  As: { name: "Arsenic", mass: 74.922, valence: 5, group: "metalloid", row: 4, col: 15 },
  Se: { name: "Selenium", mass: 78.971, valence: 6, group: "nonmetal", row: 4, col: 16 },
  Br: { name: "Bromine", mass: 79.904, valence: 7, group: "halogen", row: 4, col: 17 },
  Kr: { name: "Krypton", mass: 83.798, valence: 8, group: "noble gas", row: 4, col: 18 },
Rb: { name: "Rubidium", mass: 85.468, valence: 1, group: "alkali metal", row: 5, col: 1 },
Sr: { name: "Strontium", mass: 87.62, valence: 2, group: "alkaline earth metal", row: 5, col: 2 },
Y: { name: "Yttrium", mass: 88.906, valence: 3, group: "transition metal", row: 5, col: 3 },
Zr: { name: "Zirconium", mass: 91.224, valence: 4, group: "transition metal", row: 5, col: 4 },
Nb: { name: "Niobium", mass: 92.906, valence: 5, group: "transition metal", row: 5, col: 5 },
Mo: { name: "Molybdenum", mass: 95.95, valence: 6, group: "transition metal", row: 5, col: 6 },
Tc: { name: "Technetium", mass: 98, valence: 7, group: "transition metal", row: 5, col: 7 },
Ru: { name: "Ruthenium", mass: 101.07, valence: 8, group: "transition metal", row: 5, col: 8 },
Rh: { name: "Rhodium", mass: 102.91, valence: 9, group: "transition metal", row: 5, col: 9 },
Pd: { name: "Palladium", mass: 106.42, valence: 10, group: "transition metal", row: 5, col: 10 },
Ag: { name: "Silver", mass: 107.87, valence: 11, group: "transition metal", row: 5, col: 11 },
Cd: { name: "Cadmium", mass: 112.41, valence: 12, group: "transition metal", row: 5, col: 12 },
In: { name: "Indium", mass: 114.82, valence: 3, group: "post-transition", row: 5, col: 13 },
Sn: { name: "Tin", mass: 118.71, valence: 4, group: "post-transition", row: 5, col: 14 },
Sb: { name: "Antimony", mass: 121.76, valence: 5, group: "metalloid", row: 5, col: 15 },
Te: { name: "Tellurium", mass: 127.6, valence: 6, group: "metalloid", row: 5, col: 16 },
I: { name: "Iodine", mass: 126.9, valence: 7, group: "halogen", row: 5, col: 17 },
Xe: { name: "Xenon", mass: 131.29, valence: 8, group: "noble gas", row: 5, col: 18 },
Cs: { name: "Cesium", mass: 132.91, valence: 1, group: "alkali metal", row: 6, col: 1 },
Ba: { name: "Barium", mass: 137.33, valence: 2, group: "alkaline earth metal", row: 6, col: 2 },
Hf: { name: "Hafnium", mass: 178.49, valence: 4, group: "transition metal", row: 6, col: 4 },
Ta: { name: "Tantalum", mass: 180.95, valence: 5, group: "transition metal", row: 6, col: 5 },
W: { name: "Tungsten", mass: 183.84, valence: 6, group: "transition metal", row: 6, col: 6 },
Re: { name: "Rhenium", mass: 186.21, valence: 7, group: "transition metal", row: 6, col: 7 },
Os: { name: "Osmium", mass: 190.23, valence: 8, group: "transition metal", row: 6, col: 8 },
Ir: { name: "Iridium", mass: 192.22, valence: 9, group: "transition metal", row: 6, col: 9 },
Pt: { name: "Platinum", mass: 195.08, valence: 10, group: "transition metal", row: 6, col: 10 },
Au: { name: "Gold", mass: 196.97, valence: 11, group: "transition metal", row: 6, col: 11 },
Hg: { name: "Mercury", mass: 200.59, valence: 12, group: "transition metal", row: 6, col: 12 },
Tl: { name: "Thallium", mass: 204.38, valence: 3, group: "post-transition", row: 6, col: 13 },
Pb: { name: "Lead", mass: 207.2, valence: 4, group: "post-transition", row: 6, col: 14 },
Bi: { name: "Bismuth", mass: 208.98, valence: 5, group: "post-transition", row: 6, col: 15 },
Po: { name: "Polonium", mass: 209, valence: 6, group: "metalloid", row: 6, col: 16 },
At: { name: "Astatine", mass: 210, valence: 7, group: "halogen", row: 6, col: 17 },
Rn: { name: "Radon", mass: 222, valence: 8, group: "noble gas", row: 6, col: 18 },
Fr: { name: "Francium", mass: 223, valence: 1, group: "alkali metal", row: 7, col: 1 },
Ra: { name: "Radium", mass: 226, valence: 2, group: "alkaline earth metal", row: 7, col: 2 },
Rf: { name: "Rutherfordium", mass: 267, valence: 4, group: "transition metal", row: 7, col: 4 },
Db: { name: "Dubnium", mass: 270, valence: 5, group: "transition metal", row: 7, col: 5 },
Sg: { name: "Seaborgium", mass: 271, valence: 6, group: "transition metal", row: 7, col: 6 },
Bh: { name: "Bohrium", mass: 270, valence: 7, group: "transition metal", row: 7, col: 7 },
Hs: { name: "Hassium", mass: 277, valence: 8, group: "transition metal", row: 7, col: 8 },
Mt: { name: "Meitnerium", mass: 278, valence: 9, group: "transition metal", row: 7, col: 9 },
Ds: { name: "Darmstadtium", mass: 281, valence: 10, group: "transition metal", row: 7, col: 10 },
Rg: { name: "Roentgenium", mass: 282, valence: 11, group: "transition metal", row: 7, col: 11 },
Cn: { name: "Copernicium", mass: 285, valence: 12, group: "transition metal", row: 7, col: 12 },
Nh: { name: "Nihonium", mass: 286, valence: 3, group: "post-transition", row: 7, col: 13 },
Fl: { name: "Flerovium", mass: 289, valence: 4, group: "post-transition", row: 7, col: 14 },
Mc: { name: "Moscovium", mass: 288, valence: 5, group: "post-transition", row: 7, col: 15 },
Lv: { name: "Livermorium", mass: 293, valence: 6, group: "post-transition", row: 7, col: 16 },
Ts: { name: "Tennessine", mass: 294, valence: 7, group: "halogen", row: 7, col: 17 },
Og: { name: "Oganesson", mass: 294, valence: 8, group: "noble gas", row: 7, col: 18 },
  La: { name: "Lanthanum", mass: 138.905, valence: 3, group: "lanthanide", row: 8, col: 4 },
  Ce: { name: "Cerium", mass: 140.116, valence: 4, group: "lanthanide", row: 8, col: 5 },
  Pr: { name: "Praseodymium", mass: 140.907, valence: 3, group: "lanthanide", row: 8, col: 6 },
  Nd: { name: "Neodymium", mass: 144.242, valence: 3, group: "lanthanide", row: 8, col: 7 },
  Pm: { name: "Promethium", mass: 145, valence: 3, group: "lanthanide", row: 8, col: 8 },
  Sm: { name: "Samarium", mass: 150.36, valence: 3, group: "lanthanide", row: 8, col: 9 },
  Eu: { name: "Europium", mass: 151.964, valence: 2, group: "lanthanide", row: 8, col: 10 },
  Gd: { name: "Gadolinium", mass: 157.25, valence: 3, group: "lanthanide", row: 8, col: 11 },
  Tb: { name: "Terbium", mass: 158.925, valence: 3, group: "lanthanide", row: 8, col: 12 },
  Dy: { name: "Dysprosium", mass: 162.5, valence: 3, group: "lanthanide", row: 8, col: 13 },
  Ho: { name: "Holmium", mass: 164.93, valence: 3, group: "lanthanide", row: 8, col: 14 },
  Er: { name: "Erbium", mass: 167.259, valence: 3, group: "lanthanide", row: 8, col: 15 },
  Tm: { name: "Thulium", mass: 168.934, valence: 3, group: "lanthanide", row: 8, col: 16 },
  Yb: { name: "Ytterbium", mass: 173.045, valence: 2, group: "lanthanide", row: 8, col: 17 },
  Lu: { name: "Lutetium", mass: 174.967, valence: 3, group: "lanthanide", row: 8, col: 18 },
  Ac: { name: "Actinium", mass: 227, valence: 3, group: "actinide", row: 9, col: 4 },
  Th: { name: "Thorium", mass: 232.038, valence: 4, group: "actinide", row: 9, col: 5 },
  Pa: { name: "Protactinium", mass: 231.036, valence: 5, group: "actinide", row: 9, col: 6 },
  U: { name: "Uranium", mass: 238.029, valence: 6, group: "actinide", row: 9, col: 7 },
  Np: { name: "Neptunium", mass: 237, valence: 5, group: "actinide", row: 9, col: 8 },
  Pu: { name: "Plutonium", mass: 244, valence: 6, group: "actinide", row: 9, col: 9 },
  Am: { name: "Americium", mass: 243, valence: 6, group: "actinide", row: 9, col: 10 },
  Cm: { name: "Curium", mass: 247, valence: 6, group: "actinide", row: 9, col: 11 },
  Bk: { name: "Berkelium", mass: 247, valence: 7, group: "actinide", row: 9, col: 12 },
  Cf: { name: "Californium", mass: 251, valence: 8, group: "actinide", row: 9, col: 13 },
  Es: { name: "Einsteinium", mass: 252, valence: 8, group: "actinide", row: 9, col: 14 },
  Fm: { name: "Fermium", mass: 257, valence: 8, group: "actinide", row: 9, col: 15 },
  Md: { name: "Mendelevium", mass: 258, valence: 8, group: "actinide", row: 9, col: 16 },
  No: { name: "Nobelium", mass: 259, valence: 8, group: "actinide", row: 9, col: 17 },
  Lr: { name: "Lawrencium", mass: 262, valence: 3, group: "actinide", row: 9, col: 18 }
};

const groupColors = {
  "alkali metal": "#f54242",
  "alkaline earth metal": "#f5a142",
  "transition metal": "#f5de42",
  "post-transition": "#ffe066",
  "metalloid": "#42f554",
  "nonmetal": "#4287f5",
  "halogen": "#9b42f5",
  "noble gas": "#f5429e",
  "lanthanide": "#42f5f5",
  "actinide": "#f5f542"
};

const table = document.getElementById("periodic-table");

for (const [symbol, info] of Object.entries(elements)) {
  const el = document.createElement("div");
  el.className = "element";
  el.style.backgroundColor = groupColors[info.group] || "#555";
  el.style.gridRow = info.row;
  el.style.gridColumn = info.col;
  el.innerHTML = `<strong>${symbol}</strong><br><small>${info.mass}</small>`;
  el.title = `${info.name}\nValence: ${info.valence}\nMass: ${info.mass}`;
  el.addEventListener("click", () => showLewisDiagram(symbol, info.valence));
  table.appendChild(el);
}

function showLewisDiagram(symbol, valence) {
  const area = document.getElementById("diagramArea");
  area.innerHTML = "";
  const circle = document.createElement("div");
  circle.className = "diagram-circle";
  circle.textContent = symbol;
  area.appendChild(circle);

  for (let i = 0; i < valence; i++) {
    const dot = document.createElement("div");
    dot.className = "dot";
    const angle = (i / valence) * 2 * Math.PI;
    dot.style.left = `${35 + 30 * Math.cos(angle)}px`;
    dot.style.top = `${35 + 30 * Math.sin(angle)}px`;
    circle.appendChild(dot);
  }
}

const elementSelects = document.getElementById("elementSelects");
const totalMassDisplay = document.getElementById("totalMass");
const elementLog = document.getElementById("elementLog");
let compound = [];

function createDropdown() {
  const select = document.createElement("select");
  select.className = "element-select";
  for (const sym in elements) {
    const opt = document.createElement("option");
    opt.value = sym;
    opt.textContent = `${sym} (${elements[sym].name})`;
    select.appendChild(opt);
  }

  const qtyInput = document.createElement("input");
  qtyInput.type = "number";
  qtyInput.min = 1;
  qtyInput.value = 1;

  elementSelects.appendChild(select);
  elementSelects.appendChild(qtyInput);
}

document.getElementById("addElementBtn").addEventListener("click", () => {
  const selects = document.querySelectorAll(".element-select");
  const inputs = elementSelects.querySelectorAll("input[type='number']");
  compound = [];
  elementLog.innerHTML = "";
  let total = 0;
  selects.forEach((sel, idx) => {
    const sym = sel.value;
    const qty = parseInt(inputs[idx].value);
    compound.push({ sym, qty });
    const li = document.createElement("li");
    li.textContent = `${qty} × ${sym} (${elements[sym].mass})`;
    elementLog.appendChild(li);
    total += elements[sym].mass * qty;
  });
  totalMassDisplay.textContent = total.toFixed(3);
});

document.getElementById("clearBtn").addEventListener("click", () => {
  elementSelects.innerHTML = "";
  compound = [];
  totalMassDisplay.textContent = "0.000";
  elementLog.innerHTML = "";
  createDropdown();
});

createDropdown();