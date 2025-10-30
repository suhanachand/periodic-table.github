const tooltip = document.getElementById("tooltip");
const periodicTable = document.getElementById("periodic-table");
const compoundList = document.getElementById("compound-list");
const totalMassSpan = document.getElementById("total-mass");
const lewisDiagram = document.getElementById("lewis-diagram");

const elements = [
  // Period 1
  { symbol: "H", name: "Hydrogen", mass: 1.008, valence: 1, group: "nonmetal", row: 1, col: 1 },
  { symbol: "He", name: "Helium", mass: 4.0026, valence: 2, group: "noble", row: 1, col: 18 },

  // Period 2
  { symbol: "Li", name: "Lithium", mass: 6.94, valence: 1, group: "alkali", row: 2, col: 1 },
  { symbol: "Be", name: "Beryllium", mass: 9.0122, valence: 2, group: "alkaline", row: 2, col: 2 },
  { symbol: "B", name: "Boron", mass: 10.81, valence: 3, group: "metalloid", row: 2, col: 13 },
  { symbol: "C", name: "Carbon", mass: 12.011, valence: 4, group: "nonmetal", row: 2, col: 14 },
  { symbol: "N", name: "Nitrogen", mass: 14.007, valence: 5, group: "nonmetal", row: 2, col: 15 },
  { symbol: "O", name: "Oxygen", mass: 15.999, valence: 6, group: "nonmetal", row: 2, col: 16 },
  { symbol: "F", name: "Fluorine", mass: 18.998, valence: 7, group: "halogen", row: 2, col: 17 },
  { symbol: "Ne", name: "Neon", mass: 20.180, valence: 8, group: "noble", row: 2, col: 18 },

  // Period 3
  { symbol: "Na", name: "Sodium", mass: 22.990, valence: 1, group: "alkali", row: 3, col: 1 },
  { symbol: "Mg", name: "Magnesium", mass: 24.305, valence: 2, group: "alkaline", row: 3, col: 2 },
  { symbol: "Al", name: "Aluminum", mass: 26.982, valence: 3, group: "post-transition", row: 3, col: 13 },
  { symbol: "Si", name: "Silicon", mass: 28.085, valence: 4, group: "metalloid", row: 3, col: 14 },
  { symbol: "P", name: "Phosphorus", mass: 30.974, valence: 5, group: "nonmetal", row: 3, col: 15 },
  { symbol: "S", name: "Sulfur", mass: 32.06, valence: 6, group: "nonmetal", row: 3, col: 16 },
  { symbol: "Cl", name: "Chlorine", mass: 35.45, valence: 7, group: "halogen", row: 3, col: 17 },
  { symbol: "Ar", name: "Argon", mass: 39.948, valence: 8, group: "noble", row: 3, col: 18 },

  // Period 4
  { symbol: "K", name: "Potassium", mass: 39.098, valence: 1, group: "alkali", row: 4, col: 1 },
  { symbol: "Ca", name: "Calcium", mass: 40.078, valence: 2, group: "alkaline", row: 4, col: 2 },
  { symbol: "Sc", name: "Scandium", mass: 44.956, valence: 3, group: "transition", row: 4, col: 3 },
  { symbol: "Ti", name: "Titanium", mass: 47.867, valence: 4, group: "transition", row: 4, col: 4 },
  { symbol: "V", name: "Vanadium", mass: 50.942, valence: 5, group: "transition", row: 4, col: 5 },
  { symbol: "Cr", name: "Chromium", mass: 51.996, valence: 6, group: "transition", row: 4, col: 6 },
  { symbol: "Mn", name: "Manganese", mass: 54.938, valence: 7, group: "transition", row: 4, col: 7 },
  { symbol: "Fe", name: "Iron", mass: 55.845, valence: 2, group: "transition", row: 4, col: 8 },
  { symbol: "Co", name: "Cobalt", mass: 58.933, valence: 2, group: "transition", row: 4, col: 9 },
  { symbol: "Ni", name: "Nickel", mass: 58.693, valence: 2, group: "transition", row: 4, col: 10 },
  { symbol: "Cu", name: "Copper", mass: 63.546, valence: 1, group: "transition", row: 4, col: 11 },
  { symbol: "Zn", name: "Zinc", mass: 65.38, valence: 2, group: "transition", row: 4, col: 12 },
  { symbol: "Ga", name: "Gallium", mass: 69.723, valence: 3, group: "post-transition", row: 4, col: 13 },
  { symbol: "Ge", name: "Germanium", mass: 72.630, valence: 4, group: "metalloid", row: 4, col: 14 },
  { symbol: "As", name: "Arsenic", mass: 74.922, valence: 5, group: "metalloid", row: 4, col: 15 },
  { symbol: "Se", name: "Selenium", mass: 78.971, valence: 6, group: "nonmetal", row: 4, col: 16 },
  { symbol: "Br", name: "Bromine", mass: 79.904, valence: 7, group: "halogen", row: 4, col: 17 },
  { symbol: "Kr", name: "Krypton", mass: 83.798, valence: 8, group: "noble", row: 4, col: 18 },

  // Period 5
  { symbol: "Rb", name: "Rubidium", mass: 85.468, valence: 1, group: "alkali", row: 5, col: 1 },
  { symbol: "Sr", name: "Strontium", mass: 87.62, valence: 2, group: "alkaline", row: 5, col: 2 },
  { symbol: "Y", name: "Yttrium", mass: 88.906, valence: 3, group: "transition", row: 5, col: 3 },
  { symbol: "Zr", name: "Zirconium", mass: 91.224, valence: 4, group: "transition", row: 5, col: 4 },
  { symbol: "Nb", name: "Niobium", mass: 92.906, valence: 5, group: "transition", row: 5, col: 5 },
  { symbol: "Mo", name: "Molybdenum", mass: 95.95, valence: 6, group: "transition", row: 5, col: 6 },
  { symbol: "Tc", name: "Technetium", mass: 98, valence: 7, group: "transition", row: 5, col: 7 },
  { symbol: "Ru", name: "Ruthenium", mass: 101.07, valence: 8, group: "transition", row: 5, col: 8 },
  { symbol: "Rh", name: "Rhodium", mass: 102.91, valence: 3, group: "transition", row: 5, col: 9 },
  { symbol: "Pd", name: "Palladium", mass: 106.42, valence: 2, group: "transition", row: 5, col: 10 },
  { symbol: "Ag", name: "Silver", mass: 107.87, valence: 1, group: "transition", row: 5, col: 11 },
  { symbol: "Cd", name: "Cadmium", mass: 112.41, valence: 2, group: "transition", row: 5, col: 12 },
  { symbol: "In", name: "Indium", mass: 114.82, valence: 3, group: "post-transition", row: 5, col: 13 },
  { symbol: "Sn", name: "Tin", mass: 118.71, valence: 4, group: "post-transition", row: 5, col: 14 },
  { symbol: "Sb", name: "Antimony", mass: 121.76, valence: 5, group: "metalloid", row: 5, col: 15 },
  { symbol: "Te", name: "Tellurium", mass: 127.60, valence: 6, group: "metalloid", row: 5, col: 16 },
  { symbol: "I", name: "Iodine", mass: 126.90, valence: 7, group: "halogen", row: 5, col: 17 },
  { symbol: "Xe", name: "Xenon", mass: 131.29, valence: 8, group: "noble", row: 5, col: 18 },

  // Period 6 (lanthanides simplified)
  { symbol: "Cs", name: "Cesium", mass: 132.91, valence: 1, group: "alkali", row: 6, col: 1 },
  { symbol: "Ba", name: "Barium", mass: 137.33, valence: 2, group: "alkaline", row: 6, col: 2 },
  { symbol: "La", name: "Lanthanum", mass: 138.91, valence: 3, group: "lanthanide", row: 9, col: 3 },
  { symbol: "Hf", name: "Hafnium", mass: 178.49, valence: 4, group: "transition", row: 6, col: 4 },
  { symbol: "Ta", name: "Tantalum", mass: 180.95, valence: 5, group: "transition", row: 6, col: 5 },
  { symbol: "W", name: "Tungsten", mass: 183.84, valence: 6, group: "transition", row: 6, col: 6 },
  { symbol: "Re", name: "Rhenium", mass: 186.21, valence: 7, group: "transition", row: 6, col: 7 },
  { symbol: "Os", name: "Osmium", mass: 190.23, valence: 8, group: "transition", row: 6, col: 8 },
  { symbol: "Ir", name: "Iridium", mass: 192.22, valence: 3, group: "transition", row: 6, col: 9 },
  { symbol: "Pt", name: "Platinum", mass: 195.08, valence: 2, group: "transition", row: 6, col: 10 },
  { symbol: "Au", name: "Gold", mass: 196.97, valence: 1, group: "transition", row: 6, col: 11 },
  { symbol: "Hg", name: "Mercury", mass: 200.59, valence: 2, group: "transition", row: 6, col: 12 },
  { symbol: "Tl", name: "Thallium", mass: 204.38, valence: 3, group: "post-transition", row: 6, col: 13 },
  { symbol: "Pb", name: "Lead", mass: 207.2, valence: 4, group: "post-transition", row: 6, col: 14 },
  { symbol: "Bi", name: "Bismuth", mass: 208.98, valence: 5, group: "post-transition", row: 6, col: 15 },
  { symbol: "Po", name: "Polonium", mass: 209, valence: 6, group: "metalloid", row: 6, col: 16 },
  { symbol: "At", name: "Astatine", mass: 210, valence: 7, group: "halogen", row: 6, col: 17 },
  { symbol: "Rn", name: "Radon", mass: 222, valence: 8, group: "noble", row: 6, col: 18 },

  // Period 7 (actinides simplified)
  { symbol: "Fr", name: "Francium", mass: 223, valence: 1, group: "alkali", row: 7, col: 1 },
  { symbol: "Ra", name: "Radium", mass: 226, valence: 2, group: "alkaline", row: 7, col: 2 },
  { symbol: "Ac", name: "Actinium", mass: 227, valence: 3, group: "actinide", row: 10, col: 3 },
  { symbol: "Th", name: "Thorium", mass: 232.04, valence: 4, group: "actinide", row: 10, col: 4 },
  { symbol: "Pa", name: "Protactinium", mass: 231.04, valence: 5, group: "actinide", row: 10, col: 5 },
  { symbol: "U", name: "Uranium", mass: 238.03, valence: 6, group: "actinide", row: 10, col: 6 },
  { symbol: "Np", name: "Neptunium", mass: 237, valence: 7, group: "actinide", row: 10, col: 7 },
  { symbol: "Pu", name: "Plutonium", mass: 244, valence: 8, group: "actinide", row: 10, col: 8 },
  { symbol: "Am", name: "Americium", mass: 243, valence: 3, group: "actinide", row: 10, col: 9 },
  { symbol: "Cm", name: "Curium", mass: 247, valence: 3, group: "actinide", row: 10, col: 10 },
  { symbol: "Bk", name: "Berkelium", mass: 247, valence: 3, group: "actinide", row: 10, col: 11 },
  { symbol: "Cf", name: "Californium", mass: 251, valence: 3, group: "actinide", row: 10, col: 12 },
  { symbol: "Es", name: "Einsteinium", mass: 252, valence: 3, group: "actinide", row: 10, col: 13 },
  { symbol: "Fm", name: "Fermium", mass: 257, valence: 3, group: "actinide", row: 10, col: 14 },
  { symbol: "Md", name: "Mendelevium", mass: 258, valence: 3, group: "actinide", row: 10, col: 15 },
  { symbol: "No", name: "Nobelium", mass: 259, valence: 2, group: "actinide", row: 10, col: 16 },
  { symbol: "Lr", name: "Lawrencium", mass: 266, valence: 3, group: "actinide", row: 10, col: 17 },
  { symbol: "Rf", name: "Rutherfordium", mass: 267, valence: 4, group: "transition", row: 7, col: 4 },
  { symbol: "Db", name: "Dubnium", mass: 268, valence: 5, group: "transition", row: 7, col: 5 },
  { symbol: "Sg", name: "Seaborgium", mass: 269, valence: 6, group: "transition", row: 7, col: 6 },
  { symbol: "Bh", name: "Bohrium", mass: 270, valence: 7, group: "transition", row: 7,

];

let compound = [];

// === Build table visually ===
elements.forEach(el => {
  const div = document.createElement("div");
  div.className = `element ${el.group}`;
  div.style.gridRow = el.row;
  div.style.gridColumn = el.col;
  div.textContent = el.symbol;

  div.addEventListener("mouseover", (e) => {
    tooltip.style.display = "block";
    tooltip.style.left = e.pageX + 15 + "px";
    tooltip.style.top = e.pageY + 15 + "px";
    tooltip.innerHTML = `<strong>${el.name} (${el.symbol})</strong><br>
      Mass: ${el.mass}<br>Valence: ${el.valence}`;
  });

  div.addEventListener("mouseout", () => tooltip.style.display = "none");
  div.addEventListener("click", () => addElement(el));

  periodicTable.appendChild(div);
});

// === Compound builder ===
document.getElementById("add-btn").addEventListener("click", () => {
  const sym = prompt("Enter element symbol:");
  const qty = parseInt(prompt("Enter quantity:"));
  const found = elements.find(e => e.symbol === sym);
  if (found && qty > 0) {
    compound.push({ symbol: sym, quantity: qty });
    updateCompound();
  } else {
    alert("Invalid input.");
  }
});

function addElement(el) {
  const qty = parseInt(prompt(`Enter quantity for ${el.symbol}:`));
  if (qty > 0) {
    compound.push({ symbol: el.symbol, quantity: qty });
    updateCompound();
  }
}

function updateCompound() {
  compoundList.innerHTML = "";
  let total = 0;
  compound.forEach(item => {
    const el = elements.find(e => e.symbol === item.symbol);
    if (el) {
      total += el.mass * item.quantity;
      const entry = document.createElement("div");
      entry.textContent = `${el.symbol} × ${item.quantity}  (Valence: ${el.valence})`;
      compoundList.appendChild(entry);
    }
  });
  totalMassSpan.textContent = total.toFixed(3);
  drawLewisDiagram();
}

// === Lewis Diagram ===
function drawLewisDiagram() {
  lewisDiagram.innerHTML = "";
  compound.forEach(item => {
    const el = elements.find(e => e.symbol === item.symbol);
    for (let i = 0; i < item.quantity; i++) {
      const atom = document.createElement("div");
      atom.className = "atom";
      atom.style.margin = "10px";
      atom.innerHTML = `<strong>${el.symbol}</strong>`;
      for (let j = 0; j < el.valence; j++) {
        const electron = document.createElement("div");
        electron.className = "electron";
        electron.draggable = true;
        electron.addEventListener("dragstart", ev => {
          ev.dataTransfer.setData("text/plain", el.symbol);
        });
        atom.appendChild(electron);
      }
      lewisDiagram.appendChild(atom);
    }
  });

  lewisDiagram.ondragover = (e) => e.preventDefault();
  lewisDiagram.ondrop = (e) => {
    e.preventDefault();
    const target = e.target;
    if (target.classList.contains("electron")) {
      target.style.background = "red"; // show bonding visually
    }
  };
}
