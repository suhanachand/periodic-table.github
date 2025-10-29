/* script.js */
const table = document.getElementById('periodic-table');
const popup = document.getElementById('popup');

const selectedDisplay = document.getElementById('selected-elements');
const totalMassDisplay = document.getElementById('total-mass');
const calcButton = document.getElementById('calc-moles');
const gramsInput = document.getElementById('grams');
const molesOutput = document.getElementById('moles-output');

let selectedElements = []; // { symbol, mass, number, name }
let totalMass = 0.0;

/*
 Full element layout (118 elements) — includes period (row) and group (column).
 row values correspond to grid-row and lanthanides/actinides placed in rows 8 & 9
*/
const elements = [
  { symbol: "H", name: "Hydrogen", number: 1, group: "nonmetal", row: 1, col: 1 },
  { symbol: "He", name: "Helium", number: 2, group: "noble", row: 1, col: 18 },

  { symbol: "Li", name: "Lithium", number: 3, group: "alkali", row: 2, col: 1 },
  { symbol: "Be", name: "Beryllium", number: 4, group: "alkaline", row: 2, col: 2 },
  { symbol: "B", name: "Boron", number: 5, group: "metalloid", row: 2, col: 13 },
  { symbol: "C", name: "Carbon", number: 6, group: "nonmetal", row: 2, col: 14 },
  { symbol: "N", name: "Nitrogen", number: 7, group: "nonmetal", row: 2, col: 15 },
  { symbol: "O", name: "Oxygen", number: 8, group: "nonmetal", row: 2, col: 16 },
  { symbol: "F", name: "Fluorine", number: 9, group: "halogen", row: 2, col: 17 },
  { symbol: "Ne", name: "Neon", number: 10, group: "noble", row: 2, col: 18 },

  { symbol: "Na", name: "Sodium", number: 11, group: "alkali", row: 3, col: 1 },
  { symbol: "Mg", name: "Magnesium", number: 12, group: "alkaline", row: 3, col: 2 },
  { symbol: "Al", name: "Aluminium", number: 13, group: "post-transition", row: 3, col: 13 },
  { symbol: "Si", name: "Silicon", number: 14, group: "metalloid", row: 3, col: 14 },
  { symbol: "P", name: "Phosphorus", number: 15, group: "nonmetal", row: 3, col: 15 },
  { symbol: "S", name: "Sulfur", number: 16, group: "nonmetal", row: 3, col: 16 },
  { symbol: "Cl", name: "Chlorine", number: 17, group: "halogen", row: 3, col: 17 },
  { symbol: "Ar", name: "Argon", number: 18, group: "noble", row: 3, col: 18 },

  { symbol: "K", name: "Potassium", number: 19, group: "alkali", row: 4, col: 1 },
  { symbol: "Ca", name: "Calcium", number: 20, group: "alkaline", row: 4, col: 2 },
  { symbol: "Sc", name: "Scandium", number: 21, group: "transition", row: 4, col: 3 },
  { symbol: "Ti", name: "Titanium", number: 22, group: "transition", row: 4, col: 4 },
  { symbol: "V", name: "Vanadium", number: 23, group: "transition", row: 4, col: 5 },
  { symbol: "Cr", name: "Chromium", number: 24, group: "transition", row: 4, col: 6 },
  { symbol: "Mn", name: "Manganese", number: 25, group: "transition", row: 4, col: 7 },
  { symbol: "Fe", name: "Iron", number: 26, group: "transition", row: 4, col: 8 },
  { symbol: "Co", name: "Cobalt", number: 27, group: "transition", row: 4, col: 9 },
  { symbol: "Ni", name: "Nickel", number: 28, group: "transition", row: 4, col: 10 },
  { symbol: "Cu", name: "Copper", number: 29, group: "transition", row: 4, col: 11 },
  { symbol: "Zn", name: "Zinc", number: 30, group: "transition", row: 4, col: 12 },
  { symbol: "Ga", name: "Gallium", number: 31, group: "post-transition", row: 4, col: 13 },
  { symbol: "Ge", name: "Germanium", number: 32, group: "metalloid", row: 4, col: 14 },
  { symbol: "As", name: "Arsenic", number: 33, group: "metalloid", row: 4, col: 15 },
  { symbol: "Se", name: "Selenium", number: 34, group: "nonmetal", row: 4, col: 16 },
  { symbol: "Br", name: "Bromine", number: 35, group: "halogen", row: 4, col: 17 },
  { symbol: "Kr", name: "Krypton", number: 36, group: "noble", row: 4, col: 18 },

  { symbol: "Rb", name: "Rubidium", number: 37, group: "alkali", row: 5, col: 1 },
  { symbol: "Sr", name: "Strontium", number: 38, group: "alkaline", row: 5, col: 2 },
  { symbol: "Y", name: "Yttrium", number: 39, group: "transition", row: 5, col: 3 },
  { symbol: "Zr", name: "Zirconium", number: 40, group: "transition", row: 5, col: 4 },
  { symbol: "Nb", name: "Niobium", number: 41, group: "transition", row: 5, col: 5 },
  { symbol: "Mo", name: "Molybdenum", number: 42, group: "transition", row: 5, col: 6 },
  { symbol: "Tc", name: "Technetium", number: 43, group: "transition", row: 5, col: 7 },
  { symbol: "Ru", name: "Ruthenium", number: 44, group: "transition", row: 5, col: 8 },
  { symbol: "Rh", name: "Rhodium", number: 45, group: "transition", row: 5, col: 9 },
  { symbol: "Pd", name: "Palladium", number: 46, group: "transition", row: 5, col: 10 },
  { symbol: "Ag", name: "Silver", number: 47, group: "transition", row: 5, col: 11 },
  { symbol: "Cd", name: "Cadmium", number: 48, group: "transition", row: 5, col: 12 },
  { symbol: "In", name: "Indium", number: 49, group: "post-transition", row: 5, col: 13 },
  { symbol: "Sn", name: "Tin", number: 50, group: "post-transition", row: 5, col: 14 },
  { symbol: "Sb", name: "Antimony", number: 51, group: "metalloid", row: 5, col: 15 },
  { symbol: "Te", name: "Tellurium", number: 52, group: "metalloid", row: 5, col: 16 },
  { symbol: "I", name: "Iodine", number: 53, group: "halogen", row: 5, col: 17 },
  { symbol: "Xe", name: "Xenon", number: 54, group: "noble", row: 5, col: 18 },

  { symbol: "Cs", name: "Cesium", number: 55, group: "alkali", row: 6, col: 1 },
  { symbol: "Ba", name: "Barium", number: 56, group: "alkaline", row: 6, col: 2 },
  { symbol: "La", name: "Lanthanum", number: 57, group: "lanthanide", row: 6, col: 3 },
  { symbol: "Ce", name: "Cerium", number: 58, group: "lanthanide", row: 8, col: 4 },
  { symbol: "Pr", name: "Praseodymium", number: 59, group: "lanthanide", row: 8, col: 5 },
  { symbol: "Nd", name: "Neodymium", number: 60, group: "lanthanide", row: 8, col: 6 },
  { symbol: "Pm", name: "Promethium", number: 61, group: "lanthanide", row: 8, col: 7 },
  { symbol: "Sm", name: "Samarium", number: 62, group: "lanthanide", row: 8, col: 8 },
  { symbol: "Eu", name: "Europium", number: 63, group: "lanthanide", row: 8, col: 9 },
  { symbol: "Gd", name: "Gadolinium", number: 64, group: "lanthanide", row: 8, col: 10 },
  { symbol: "Tb", name: "Terbium", number: 65, group: "lanthanide", row: 8, col: 11 },
  { symbol: "Dy", name: "Dysprosium", number: 66, group: "lanthanide", row: 8, col: 12 },
  { symbol: "Ho", name: "Holmium", number: 67, group: "lanthanide", row: 8, col: 13 },
  { symbol: "Er", name: "Erbium", number: 68, group: "lanthanide", row: 8, col: 14 },
  { symbol: "Tm", name: "Thulium", number: 69, group: "lanthanide", row: 8, col: 15 },
  { symbol: "Yb", name: "Ytterbium", number: 70, group: "lanthanide", row: 8, col: 16 },
  { symbol: "Lu", name: "Lutetium", number: 71, group: "lanthanide", row: 8, col: 17 },

  { symbol: "Hf", name: "Hafnium", number: 72, group: "transition", row: 6, col: 4 },
  { symbol: "Ta", name: "Tantalum", number: 73, group: "transition", row: 6, col: 5 },
  { symbol: "W", name: "Tungsten", number: 74, group: "transition", row: 6, col: 6 },
  { symbol: "Re", name: "Rhenium", number: 75, group: "transition", row: 6, col: 7 },
  { symbol: "Os", name: "Osmium", number: 76, group: "transition", row: 6, col: 8 },
  { symbol: "Ir", name: "Iridium", number: 77, group: "transition", row: 6, col: 9 },
  { symbol: "Pt", name: "Platinum", number: 78, group: "transition", row: 6, col: 10 },
  { symbol: "Au", name: "Gold", number: 79, group: "transition", row: 6, col: 11 },
  { symbol: "Hg", name: "Mercury", number: 80, group: "transition", row: 6, col: 12 },
  { symbol: "Tl", name: "Thallium", number: 81, group: "post-transition", row: 6, col: 13 },
  { symbol: "Pb", name: "Lead", number: 82, group: "post-transition", row: 6, col: 14 },
  { symbol: "Bi", name: "Bismuth", number: 83, group: "post-transition", row: 6, col: 15 },
  { symbol: "Po", name: "Polonium", number: 84, group: "metalloid", row: 6, col: 16 },
  { symbol: "At", name: "Astatine", number: 85, group: "halogen", row: 6, col: 17 },
  { symbol: "Rn", name: "Radon", number: 86, group: "noble", row: 6, col: 18 },

  { symbol: "Fr", name: "Francium", number: 87, group: "alkali", row: 7, col: 1 },
  { symbol: "Ra", name: "Radium", number: 88, group: "alkaline", row: 7, col: 2 },
  { symbol: "Ac", name: "Actinium", number: 89, group: "actinide", row: 7, col: 3 },
  { symbol: "Th", name: "Thorium", number: 90, group: "actinide", row: 9, col: 4 },
  { symbol: "Pa", name: "Protactinium", number: 91, group: "actinide", row: 9, col: 5 },
  { symbol: "U", name: "Uranium", number: 92, group: "actinide", row: 9, col: 6 },
  { symbol: "Np", name: "Neptunium", number: 93, group: "actinide", row: 9, col: 7 },
  { symbol: "Pu", name: "Plutonium", number: 94, group: "actinide", row: 9, col: 8 },
  { symbol: "Am", name: "Americium", number: 95, group: "actinide", row: 9, col: 9 },
  { symbol: "Cm", name: "Curium", number: 96, group: "actinide", row: 9, col: 10 },
  { symbol: "Bk", name: "Berkelium", number: 97, group: "actinide", row: 9, col: 11 },
  { symbol: "Cf", name: "Californium", number: 98, group: "actinide", row: 9, col: 12 },
  { symbol: "Es", name: "Einsteinium", number: 99, group: "actinide", row: 9, col: 13 },
  { symbol: "Fm", name: "Fermium", number: 100, group: "actinide", row: 9, col: 14 },
  { symbol: "Md", name: "Mendelevium", number: 101, group: "actinide", row: 9, col: 15 },
  { symbol: "No", name: "Nobelium", number: 102, group: "actinide", row: 9, col: 16 },
  { symbol: "Lr", name: "Lawrencium", number: 103, group: "actinide", row: 9, col: 17 },

  { symbol: "Rf", name: "Rutherfordium", number: 104, group: "transition", row: 7, col: 4 },
  { symbol: "Db", name: "Dubnium", number: 105, group: "transition", row: 7, col: 5 },
  { symbol: "Sg", name: "Seaborgium", number: 106, group: "transition", row: 7, col: 6 },
  { symbol: "Bh", name: "Bohrium", number: 107, group: "transition", row: 7, col: 7 },
  { symbol: "Hs", name: "Hassium", number: 108, group: "transition", row: 7, col: 8 },
  { symbol: "Mt", name: "Meitnerium", number: 109, group: "transition", row: 7, col: 9 },
  { symbol: "Ds", name: "Darmstadtium", number: 110, group: "transition", row: 7, col: 10 },
  { symbol: "Rg", name: "Roentgenium", number: 111, group: "transition", row: 7, col: 11 },
  { symbol: "Cn", name: "Copernicium", number: 112, group: "transition", row: 7, col: 12 },
  { symbol: "Nh", name: "Nihonium", number: 113, group: "post-transition", row: 7, col: 13 },
  { symbol: "Fl", name: "Flerovium", number: 114, group: "post-transition", row: 7, col: 14 },
  { symbol: "Mc", name: "Moscovium", number: 115, group: "post-transition", row: 7, col: 15 },
  { symbol: "Lv", name: "Livermorium", number: 116, group: "post-transition", row: 7, col: 16 },
  { symbol: "Ts", name: "Tennessine", number: 117, group: "halogen", row: 7, col: 17 },
  { symbol: "Og", name: "Oganesson", number: 118, group: "noble", row: 7, col: 18 },
];

/* Build the table cells */
elements.forEach(el => {
  const div = document.createElement('div');
  div.className = `element ${el.group || 'unknown'}`;
  div.dataset.symbol = el.symbol;
  div.dataset.number = el.number;
  div.dataset.name = el.name;

  div.style.gridRow = el.row;
  div.style.gridColumn = el.col;

  // inner structure: atomic number, symbol, short name
  div.innerHTML = `<div class="num">${el.number}</div>
                   <div class="sym">${el.symbol}</div>
                   <div class="name">${el.name}</div>`;

  // hover to show tooltip: fetch details from backend
  div.addEventListener('mousemove', (e) => showElement(el.symbol, e.pageX, e.pageY));
  div.addEventListener('mouseleave', hidePopup);

  // click to toggle selection
  div.addEventListener('click', () => toggleSelect(el.symbol, div));

  table.appendChild(div);
});

function showElement(symbol, x, y) {
  // fetch element info from Flask
  fetch(`/element/${symbol}`)
    .then(res => res.json())
    .then(data => {
      if (data.error) return;
      const massText = (data.mass !== null && data.mass !== undefined) ? `${data.mass.toFixed(3)} g/mol` : 'N/A';
      popup.innerHTML = `<strong>${data.name} (${data.symbol})</strong><br>
                         Atomic Number: ${data.number}<br>
                         Atomic Mass: ${massText}<br>
                         Density: ${data.density !== null ? data.density + ' g/cm³' : 'N/A'}<br>
                         Melting Point: ${data.melting_point !== null ? data.melting_point + ' K' : 'N/A'}<br>
                         Boiling Point: ${data.boiling_point !== null ? data.boiling_point + ' K' : 'N/A'}`;
      popup.style.display = 'block';
      popup.style.top = (y + 12) + 'px';
      popup.style.left = (x + 18) + 'px';
      popup.setAttribute('aria-hidden', 'false');
    })
    .catch(() => {});
}

function hidePopup() {
  popup.style.display = 'none';
  popup.setAttribute('aria-hidden', 'true');
}

function toggleSelect(symbol, div) {
  // if already selected, remove
  const found = selectedElements.findIndex(s => s.symbol === symbol);
  if (found !== -1) {
    selectedElements.splice(found, 1);
    div.classList.remove('selected');
    updateDisplay();
    return;
  }

  // else fetch element mass and add
  fetch(`/element/${symbol}`)
    .then(res => res.json())
    .then(data => {
      if (data.error) return;
      // if mass missing, treat as 0 but include the element (user will see N/A)
      const mass = (data.mass !== null && data.mass !== undefined) ? parseFloat(data.mass) : 0.0;
      selectedElements.push({ symbol: data.symbol, mass: mass, number: data.number, name: data.name });
      div.classList.add('selected');
      updateDisplay();
    })
    .catch(() => {});
}

function updateDisplay() {
  if (selectedElements.length === 0) {
    selectedDisplay.innerHTML = 'Selected: <em>None</em>';
    totalMass = 0.0;
    totalMassDisplay.textContent = 'Total Molar Mass: 0 g/mol';
    molesOutput.textContent = 'Moles: -';
    return;
  }
  const symbols = selectedElements.map(e => e.symbol).join(', ');
  totalMass = selectedElements.reduce((s, e) => s + (parseFloat(e.mass) || 0), 0);
  selectedDisplay.textContent = `Selected: ${symbols}`;
  totalMassDisplay.textContent = `Total Molar Mass: ${totalMass.toFixed(3)} g/mol`;
  molesOutput.textContent = 'Moles: -';
}

calcButton.addEventListener('click', () => {
  const grams = parseFloat(gramsInput.value);
  if (isNaN(grams) || grams <= 0) {
    molesOutput.textContent = 'Moles: - (enter grams)';
    return;
  }
  if (totalMass === 0) {
    molesOutput.textContent = 'Moles: - (select elements first)';
    return;
  }
  const moles = grams / totalMass;
  molesOutput.textContent = `Moles: ${moles.toFixed(6)}`;
});
