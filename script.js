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
  Sc: { name: "Scandium", number: 21, mass: 44.955, valence: 3, group: 3 },
  Ti: { name: "Titanium", number: 22, mass: 47.867, valence: 4, group: 4 },
  V: { name: "Vanadium", number: 23, mass: 50.942, valence: 5, group: 5 },
  Cr: { name: "Chromium", number: 24, mass: 51.996, valence: 6, group: 6 },
  Mn: { name: "Manganese", number: 25, mass: 54.938, valence: 7, group: 7 },
  Fe: { name: "Iron", number: 26, mass: 55.845, valence: 8, group: 8 },
  Co: { name: "Cobalt", number: 27, mass: 58.933, valence: 9, group: 9 },
  Ni: { name: "Nickel", number: 28, mass: 58.693, valence: 10, group: 10 },
  Cu: { name: "Copper", number: 29, mass: 63.546, valence: 11, group: 11 },
  Zn: { name: "Zinc", number: 30, mass: 65.38, valence: 12, group: 12 },
  Ga: { name: "Gallium", number: 31, mass: 69.723, valence: 3, group: 13 },
  Ge: { name: "Germanium", number: 32, mass: 72.63, valence: 4, group: 14 },
  As: { name: "Arsenic", number: 33, mass: 74.922, valence: 5, group: 15 },
  Se: { name: "Selenium", number: 34, mass: 78.971, valence: 6, group: 16 },
  Br: { name: "Bromine", number: 35, mass: 79.904, valence: 7, group: 17 },
  Kr: { name: "Krypton", number: 36, mass: 83.798, valence: 8, group: 18 },
  Rb: { name: "Rubidium", number: 37, mass: 85.468, valence: 1, group: 1 },
  Sr: { name: "Strontium", number: 38, mass: 87.62, valence: 2, group: 2 },
  Y: { name: "Yttrium", number: 39, mass: 88.906, valence: 3, group: 3 },
  Zr: { name: "Zirconium", number: 40, mass: 91.224, valence: 4, group: 4 },
  Nb: { name: "Niobium", number: 41, mass: 92.906, valence: 5, group: 5 },
  Mo: { name: "Molybdenum", number: 42, mass: 95.95, valence: 6, group: 6 },
  Tc: { name: "Technetium", number: 43, mass: 98, valence: 7, group: 7 },
  Ru: { name: "Ruthenium", number: 44, mass: 101.07, valence: 8, group: 8 },
  Rh: { name: "Rhodium", number: 45, mass: 102.91, valence: 9, group: 9 },
  Pd: { name: "Palladium", number: 46, mass: 106.42, valence: 10, group: 10 },
  Ag: { name: "Silver", number: 47, mass: 107.87, valence: 11, group: 11 },
  Cd: { name: "Cadmium", number: 48, mass: 112.41, valence: 12, group: 12 },
  In: { name: "Indium", number: 49, mass: 114.82, valence: 3, group: 13 },
  Sn: { name: "Tin", number: 50, mass: 118.71, valence: 4, group: 14 },
  Sb: { name: "Antimony", number: 51, mass: 121.76, valence: 5, group: 15 },
  Te: { name: "Tellurium", number: 52, mass: 127.6, valence: 6, group: 16 },
  I: { name: "Iodine", number: 53, mass: 126.90, valence: 7, group: 17 },
  Xe: { name: "Xenon", number: 54, mass: 131.29, valence: 8, group: 18 },
  Cs: { name: "Cesium", number: 55, mass: 132.91, valence: 1, group: 1 },
  Ba: { name: "Barium", number: 56, mass: 137.33, valence: 2, group: 2 },
  La: { name: "Lanthanum", number: 57, mass: 138.91, valence: 3, group: "Lanthanide" },
  Ce: { name: "Cerium", number: 58, mass: 140.12, valence: 4, group: "Lanthanide" },
  Pr: { name: "Praseodymium", number: 59, mass: 140.91, valence: 3, group: "Lanthanide" },
  Nd: { name: "Neodymium", number: 60, mass: 144.24, valence: 3, group: "Lanthanide" },
  Pm: { name: "Promethium", number: 61, mass: 145, valence: 3, group: "Lanthanide" },
  Sm: { name: "Samarium", number: 62, mass: 150.36, valence: 3, group: "Lanthanide" },
  Eu: { name: "Europium", number: 63, mass: 151.96, valence: 2, group: "Lanthanide" },
  Gd: { name: "Gadolinium", number: 64, mass: 157.25, valence: 3, group: "Lanthanide" },
  Tb: { name: "Terbium", number: 65, mass: 158.93, valence: 3, group: "Lanthanide" },
  Dy: { name: "Dysprosium", number: 66, mass: 162.50, valence: 3, group: "Lanthanide" }
};

let compound = [];
let lewisElements = [];
const tableContainer = document.getElementById("periodic-table");
const elementInfo = document.getElementById("element-info");
const compoundList = document.getElementById("compound-list");
const lewisWorkspace = document.getElementById("lewis-workspace");

// Build periodic table
for (const sym in elements) {
  const el = elements[sym];
  const div = document.createElement("div");
  div.className = `element ${el.type}`;
  div.innerHTML = `${sym}<br>${el.mass}`;
  div.title = el.name;
  div.addEventListener("mouseover", () => showInfo(sym));
  div.addEventListener("click", () => addToLewis(sym));
  tableContainer.appendChild(div);
}

function showInfo(sym) {
  const el = elements[sym];
  elementInfo.innerHTML = `
    <p><b>${el.name} (${sym})</b></p>
    <p>Atomic Mass: ${el.mass} g/mol</p>
    <p>Valence Electrons: ${el.valence}</p>
    <p>Electron Count: ${el.electrons}</p>
    <p>Type: ${el.type}</p>
  `;
}

// Add element to compound and compute molar mass
function addElement() {
  const symbol = prompt("Enter element symbol:").trim();
  const quantity = parseInt(prompt("Enter quantity:"));
  if (elements[symbol] && !isNaN(quantity)) {
    compound.push({ symbol, quantity });
    updateCompoundList();
    updateMolarMass();
  } else {
    alert("Invalid input");
  }
}

function updateCompoundList() {
  compoundList.innerHTML = "";
  compound.forEach(el => {
    const p = document.createElement("p");
    p.textContent = `${el.symbol} x ${el.quantity}`;
    compoundList.appendChild(p);
  });
}

function updateMolarMass() {
  let total = 0;
  compound.forEach(el => total += elements[el.symbol].mass * el.quantity);
  document.getElementById("total-mass").innerText = total.toFixed(3);
}

// Lewis diagram functionality
function addToLewis(sym) {
  const el = document.createElement("div");
  el.className = "lewis-element";
  el.textContent = sym;
  el.draggable = true;
  el.addEventListener("dragstart", e => e.dataTransfer.setData("text/plain", sym));
  lewisWorkspace.appendChild(el);
}

// Drag and drop workspace
lewisWorkspace.addEventListener("dragover", e => e.preventDefault());
lewisWorkspace.addEventListener("drop", e => {
  e.preventDefault();
  const sym = e.dataTransfer.getData("text");
  addToLewis(sym);
});

// Search functionality
document.getElementById("search").addEventListener("input", e => {
  const val = e.target.value.toLowerCase();
  [...tableContainer.children].forEach(div => {
    const sym = div.innerText.split("\n")[0].toLowerCase();
    const name = div.title.toLowerCase();
    div.style.display = sym.includes(val) || name.includes(val) ? "block" : "none";
  });
});
