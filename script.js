const periodicTable = document.getElementById("periodic-table");
const popup = document.getElementById("popup");
const selectedDisplay = document.getElementById("selected-elements");
const totalMassDisplay = document.getElementById("total-mass");
const molesOutput = document.getElementById("moles-output");
const gramsInput = document.getElementById("grams");
const calcButton = document.getElementById("calc-moles");
const clearBtn = document.getElementById("clear-selection");

let selectedElements = [];
let totalMass = 0;


const elements = [
  {num:1,symbol:"H",name:"Hydrogen",mass:1.008,type:"nonmetal",x:1,y:1},
  {num:2,symbol:"He",name:"Helium",mass:4.0026,type:"noble",x:18,y:1},
  {num:3,symbol:"Li",name:"Lithium",mass:6.94,type:"alkali",x:1,y:2},
  {num:4,symbol:"Be",name:"Beryllium",mass:9.0122,type:"alkaline",x:2,y:2},
  {num:5,symbol:"B",name:"Boron",mass:10.81,type:"metalloid",x:13,y:2},
  {num:6,symbol:"C",name:"Carbon",mass:12.011,type:"nonmetal",x:14,y:2},
  {num:7,symbol:"N",name:"Nitrogen",mass:14.007,type:"nonmetal",x:15,y:2},
  {num:8,symbol:"O",name:"Oxygen",mass:15.999,type:"nonmetal",x:16,y:2},
  {num:9,symbol:"F",name:"Fluorine",mass:18.998,type:"halogen",x:17,y:2},
  {num:10,symbol:"Ne",name:"Neon",mass:20.180,type:"noble",x:18,y:2},
  {num:11,symbol:"Na",name:"Sodium",mass:22.990,type:"alkali",x:1,y:3},
  {num:12,symbol:"Mg",name:"Magnesium",mass:24.305,type:"alkaline",x:2,y:3},
  {num:13,symbol:"Al",name:"Aluminium",mass:26.982,type:"post-transition",x:13,y:3},
  {num:14,symbol:"Si",name:"Silicon",mass:28.085,type:"metalloid",x:14,y:3},
  {num:15,symbol:"P",name:"Phosphorus",mass:30.974,type:"nonmetal",x:15,y:3},
  {num:16,symbol:"S",name:"Sulfur",mass:32.06,type:"nonmetal",x:16,y:3},
  {num:17,symbol:"Cl",name:"Chlorine",mass:35.45,type:"halogen",x:17,y:3},
  {num:18,symbol:"Ar",name:"Argon",mass:39.948,type:"noble",x:18,y:3},
  {num:19,symbol:"K",name:"Potassium",mass:39.098,type:"alkali",x:1,y:4},
  {num:20,symbol:"Ca",name:"Calcium",mass:40.078,type:"alkaline",x:2,y:4},
  {num:21,symbol:"Sc",name:"Scandium",mass:44.956,type:"transition",x:3,y:4},
  {num:22,symbol:"Ti",name:"Titanium",mass:47.867,type:"transition",x:4,y:4},
  {num:23,symbol:"V",name:"Vanadium",mass:50.942,type:"transition",x:5,y:4},
  {num:24,symbol:"Cr",name:"Chromium",mass:51.996,type:"transition",x:6,y:4},
  {num:25,symbol:"Mn",name:"Manganese",mass:54.938,type:"transition",x:7,y:4},
  {num:26,symbol:"Fe",name:"Iron",mass:55.845,type:"transition",x:8,y:4},
  {num:27,symbol:"Co",name:"Cobalt",mass:58.933,type:"transition",x:9,y:4},
  {num:28,symbol:"Ni",name:"Nickel",mass:58.693,type:"transition",x:10,y:4},
  {num:29,symbol:"Cu",name:"Copper",mass:63.546,type:"transition",x:11,y:4},
  {num:30,symbol:"Zn",name:"Zinc",mass:65.38,type:"transition",x:12,y:4},
  {num:31,symbol:"Ga",name:"Gallium",mass:69.723,type:"post-transition",x:13,y:4},
  {num:32,symbol:"Ge",name:"Germanium",mass:72.63,type:"metalloid",x:14,y:4},
  {num:33,symbol:"As",name:"Arsenic",mass:74.922,type:"metalloid",x:15,y:4},
  {num:34,symbol:"Se",name:"Selenium",mass:78.971,type:"nonmetal",x:16,y:4},
  {num:35,symbol:"Br",name:"Bromine",mass:79.904,type:"halogen",x:17,y:4},
  {num:36,symbol:"Kr",name:"Krypton",mass:83.798,type:"noble",x:18,y:4},
  {num:37,symbol:"Rb",name:"Rubidium",mass:85.468,type:"alkali",x:1,y:5},
  {num:38,symbol:"Sr",name:"Strontium",mass:87.62,type:"alkaline",x:2,y:5},
  {num:39,symbol:"Y",name:"Yttrium",mass:88.906,type:"transition",x:3,y:5},
  {num:40,symbol:"Zr",name:"Zirconium",mass:91.224,type:"transition",x:4,y:5},
  {num:41,symbol:"Nb",name:"Niobium",mass:92.906,type:"transition",x:5,y:5},
  {num:42,symbol:"Mo",name:"Molybdenum",mass:95.95,type:"transition",x:6,y:5},
  {num:43,symbol:"Tc",name:"Technetium",mass:98,type:"transition",x:7,y:5},
  {num:44,symbol:"Ru",name:"Ruthenium",mass:101.07,type:"transition",x:8,y:5},
  {num:45,symbol:"Rh",name:"Rhodium",mass:102.91,type:"transition",x:9,y:5},
  {num:46,symbol:"Pd",name:"Palladium",mass:106.42,type:"transition",x:10,y:5},
  {num:47,symbol:"Ag",name:"Silver",mass:107.87,type:"transition",x:11,y:5},
  {num:48,symbol:"Cd",name:"Cadmium",mass:112.41,type:"transition",x:12,y:5},
  {num:49,symbol:"In",name:"Indium",mass:114.82,type:"post-transition",x:13,y:5},
  {num:50,symbol:"Sn",name:"Tin",mass:118.71,type:"post-transition",x:14,y:5},
  {num:51,symbol:"Sb",name:"Antimony",mass:121.76,type:"metalloid",x:15,y:5},
  {num:52,symbol:"Te",name:"Tellurium",mass:127.6,type:"metalloid",x:16,y:5},
  {num:53,symbol:"I",name:"Iodine",mass:126.90,type:"halogen",x:17,y:5},
  {num:54,symbol:"Xe",name:"Xenon",mass:131.29,type:"noble",x:18,y:5},
  {num:55,symbol:"Cs",name:"Cesium",mass:132.91,type:"alkali",x:1,y:6},
  {num:56,symbol:"Ba",name:"Barium",mass:137.33,type:"alkaline",x:2,y:6},
  {num:57,symbol:"La",name:"Lanthanum",mass:138.91,type:"lanthanide",x:4,y:8},
  {num:58,symbol:"Ce",name:"Cerium",mass:140.12,type:"lanthanide",x:5,y:8},
  {num:59,symbol:"Pr",name:"Praseodymium",mass:140.91,type:"lanthanide",x:6,y:8},
  {num:60,symbol:"Nd",name:"Neodymium",mass:144.24,type:"lanthanide",x:7,y:8},
  {num:61,symbol:"Pm",name:"Promethium",mass:145,type:"lanthanide",x:8,y:8},
  {num:62,symbol:"Sm",name:"Samarium",mass:150.36,type:"lanthanide",x:9,y:8},
  {num:63,symbol:"Eu",name:"Europium",mass:151.96,type:"lanthanide",x:10,y:8},
  {num:64,symbol:"Gd",name:"Gadolinium",mass:157.25,type:"lanthanide",x:11,y:8},
  {num:65,symbol:"Tb",name:"Terbium",mass:158.93,type:"lanthanide",x:12,y:8},
  {num:66,symbol:"Dy",name:"Dysprosium",mass:162.50,type:"lanthanide",x:13,y:8},
  {num:67,symbol:"Ho",name:"Holmium",mass:164.93,type:"lanthanide",x:14,y:8},
  {num:68,symbol:"Er",name:"Erbium",mass:167.26,type:"lanthanide",x:15,y:8},
  {num:69,symbol:"Tm",name:"Thulium",mass:168.93,type:"lanthanide",x:16,y:8},
  {num:70,symbol:"Yb",name:"Ytterbium",mass:173.05,type:"lanthanide",x:17,y:8},
  {num:71,symbol:"Lu",name:"Lutetium",mass:174.97,type:"lanthanide",x:18,y:8},
  {num:72,symbol:"Hf",name:"Hafnium",mass:178.49,type:"transition",x:4,y:6},
  {num:73,symbol:"Ta",name:"Tantalum",mass:180.95,type:"transition",x:5,y:6},
  {num:74,symbol:"W",name:"Tungsten",mass:183.84,type:"transition",x:6,y:6},
  {num:75,symbol:"Re",name:"Rhenium",mass:186.21,type:"transition",x:7,y:6},
  {num:76,symbol:"Os",name:"Osmium",mass:190.23,type:"transition",x:8,y:6},
  {num:77,symbol:"Ir",name:"Iridium",mass:192.22,type:"transition",x:9,y:6},
  {num:78,symbol:"Pt",name:"Platinum",mass:195.08,type:"transition",x:10,y:6},
  {num:79,symbol:"Au",name:"Gold",mass:196.97,type:"transition",x:11,y:6},
  {num:80,symbol:"Hg",name:"Mercury",mass:200.59,type:"transition",x:12,y:6},
  {num:81,symbol:"Tl",name:"Thallium",mass:204.38,type:"post-transition",x:13,y:6},
  {num:82,symbol:"Pb",name:"Lead",mass:207.2,type:"post-transition",x:14,y:6},
  {num:83,symbol:"Bi",name:"Bismuth",mass:208.98,type:"post-transition",x:15,y:6},
  {num:84,symbol:"Po",name:"Polonium",mass:209,type:"metalloid",x:16,y:6},
  {num:85,symbol:"At",name:"Astatine",mass:210,type:"halogen",x:17,y:6},
  {num:86,symbol:"Rn",name:"Radon",mass:222,type:"noble",x:18,y:6},
  {num:87,symbol:"Fr",name:"Francium",mass:223,type:"alkali",x:1,y:7},
  {num:88,symbol:"Ra",name:"Radium",mass:226,type:"alkaline",x:2,y:7},
  {num:89,symbol:"Ac",name:"Actinium",mass:227,type:"actinide",x:4,y:9},
  {num:90,symbol:"Th",name:"Thorium",mass:232.04,type:"actinide",x:5,y:9},
  {num:91,symbol:"Pa",name:"Protactinium",mass:231.04,type:"actinide",x:6,y:9},
  {num:92,symbol:"U",name:"Uranium",mass:238.03,type:"actinide",x:7,y:9},
  {num:93,symbol:"Np",name:"Neptunium",mass:237,type:"actinide",x:8,y:9},
  {num:94,symbol:"Pu",name:"Plutonium",mass:244,type:"actinide",x:9,y:9},
  {num:95,symbol:"Am",name:"Americium",mass:243,type:"actinide",x:10,y:9},
  {num:96,symbol:"Cm",name:"Curium",mass:247,type:"actinide",x:11,y:9},
  {num:97,symbol:"Bk",name:"Berkelium",mass:247,type:"actinide",x:12,y:9},
  {num:98,symbol:"Cf",name:"Californium",mass:251,type:"actinide",x:13,y:9},
  {num:99,symbol:"Es",name:"Einsteinium",mass:252,type:"actinide",x:14,y:9},
  {num:100,symbol:"Fm",name:"Fermium",mass:257,type:"actinide",x:15,y:9},
  {num:101,symbol:"Md",name:"Mendelevium",mass:258,type:"actinide",x:16,y:9},
  {num:102,symbol:"No",name:"Nobelium",mass:259,type:"actinide",x:17,y:9},
  {num:103,symbol:"Lr",name:"Lawrencium",mass:266,type:"actinide",x:18,y:9},
  {num:104,symbol:"Rf",name:"Rutherfordium",mass:267,type:"transition",x:4,y:7},
  {num:105,symbol:"Db",name:"Dubnium",mass:268,type:"transition",x:5,y:7},
  {num:106,symbol:"Sg",name:"Seaborgium",mass:269,type:"transition",x:6,y:7},
  {num:107,symbol:"Bh",name:"Bohrium",mass:270,type:"transition",x:7,y:7},
  {num:108,symbol:"Hs",name:"Hassium",mass:277,type:"transition",x:8,y:7},
  {num:109,symbol:"Mt",name:"Meitnerium",mass:278,type:"transition",x:9,y:7},
  {num:110,symbol:"Ds",name:"Darmstadtium",mass:281,type:"transition",x:10,y:7},
  {num:111,symbol:"Rg",name:"Roentgenium",mass:282,type:"transition",x:11,y:7},
  {num:112,symbol:"Cn",name:"Copernicium",mass:285,type:"transition",x:12,y:7},
  {num:113,symbol:"Nh",name:"Nihonium",mass:286,type:"post-transition",x:13,y:7},
  {num:114,symbol:"Fl",name:"Flerovium",mass:289,type:"post-transition",x:14,y:7},
  {num:115,symbol:"Mc",name:"Moscovium",mass:288,type:"post-transition",x:15,y:7},
  {num:116,symbol:"Lv",name:"Livermorium",mass:293,type:"post-transition",x:16,y:7},
  {num:117,symbol:"Ts",name:"Tennessine",mass:294,type:"halogen",x:17,y:7},
  {num:118,symbol:"Og",name:"Oganesson",mass:294,type:"noble",x:18,y:7}
];


elements.forEach(el => {
  const div = document.createElement("div");
  div.classList.add("element", el.type);
  div.style.gridColumn = el.x;
  div.style.gridRow = el.y;
  div.innerHTML = `<div class="number">${el.num}</div><div class="symbol">${el.symbol}</div><div class="name">${el.name}</div>`;
  periodicTable.appendChild(div);

  div.addEventListener("mouseenter", e => {
    popup.style.display = "block";
    popup.style.left = e.pageX + 10 + "px";
    popup.style.top = e.pageY + 10 + "px";
    popup.innerHTML = `<b>${el.name}</b><br>Atomic Number: ${el.num}<br>Mass: ${el.mass} g/mol`;
  });

  div.addEventListener("mouseleave", () => popup.style.display = "none");

  div.addEventListener("click", () => {
    if (selectedElements.includes(el)) {
      selectedElements = selectedElements.filter(e => e !== el);
      div.classList.remove("selected");
    } else {
      selectedElements.push(el);
      div.classList.add("selected");
    }
    updateSelected();
  });
});

// Update info panel
function updateSelected() {
  if (selectedElements.length === 0) {
    selectedDisplay.textContent = "Selected: None";
    totalMassDisplay.textContent = "Total Molar Mass: 0 g/mol";
    totalMass = 0;
    return;
  }
  const symbols = selectedElements.map(e => e.symbol).join(", ");
  totalMass = selectedElements.reduce((sum, e) => sum + e.mass, 0);
  selectedDisplay.textContent = `Selected: ${symbols}`;
  totalMassDisplay.textContent = `Total Molar Mass: ${totalMass.toFixed(3)} g/mol`;
}

// Calculate moles
calcButton.addEventListener("click", () => {
  const grams = parseFloat(gramsInput.value);
  if (!grams || totalMass === 0) {
    molesOutput.textContent = "Moles: -";
    return;
  }
  const moles = grams / totalMass;
  molesOutput.textContent = `Moles: ${moles.toFixed(5)}`;
});

// Clear selection
clearBtn.addEventListener("click", () => {
  selectedElements = [];
  totalMass = 0;
  document.querySelectorAll('.element').forEach(div => div.classList.remove("selected"));
  updateSelected();
});

const canvas = document.getElementById("lewis-canvas");
const ctx = canvas.getContext("2d");
let atoms = [];

canvas.addEventListener("click", e => {
  const symbol = prompt("Which element?");
  if(symbol && elements[symbol]){
    atoms.push({x:e.offsetX, y:e.offsetY, symbol, valence: elements[symbol].valence});
    drawAtoms();
  }
});

function drawAtoms(){
  ctx.clearRect(0,0,canvas.width,canvas.height);
  atoms.forEach(atom => {
    ctx.beginPath();
    ctx.arc(atom.x, atom.y, 20, 0, 2*Math.PI);
    ctx.fillStyle="lightblue";
    ctx.fill();
    ctx.stroke();
    ctx.fillStyle="black";
    ctx.fillText(atom.symbol, atom.x-5, atom.y+5);
    // draw valence electrons as dots around
    let angleStep = 2*Math.PI / atom.valence;
    for(let i=0; i<atom.valence; i++){
      let ex = atom.x + 30*Math.cos(i*angleStep);
      let ey = atom.y + 30*Math.sin(i*angleStep);
      ctx.beginPath();
      ctx.arc(ex, ey, 3, 0, 2*Math.PI);
      ctx.fill();
    }
  });
}

const elements = {
  H:  { mass: 1.008, valence: 1 },
  He: { mass: 4.0026, valence: 2 },
  Li: { mass: 6.94, valence: 1 },
  Be: { mass: 9.0122, valence: 2 },
  B:  { mass: 10.81, valence: 3 },
  C:  { mass: 12.01, valence: 4 },
  N:  { mass: 14.007, valence: 5 },
  O:  { mass: 16.00, valence: 6 },
  F:  { mass: 18.998, valence: 7 },
  Ne: { mass: 20.180, valence: 8 },
  Na: { mass: 22.990, valence: 1 },
  Mg: { mass: 24.305, valence: 2 },
  Al: { mass: 26.982, valence: 3 },
  Si: { mass: 28.085, valence: 4 },
  P:  { mass: 30.974, valence: 5 },
  S:  { mass: 32.06, valence: 6 },
  Cl: { mass: 35.45, valence: 7 },
  Ar: { mass: 39.948, valence: 8 },
  K:  { mass: 39.098, valence: 1 },
  Ca: { mass: 40.078, valence: 2 },
  Sc: { mass: 44.956, valence: 3 },
  Ti: { mass: 47.867, valence: 4 },
  V:  { mass: 50.942, valence: 5 },
  Cr: { mass: 51.996, valence: 6 },
  Mn: { mass: 54.938, valence: 7 },
  Fe: { mass: 55.845, valence: 2 },
  Co: { mass: 58.933, valence: 2 },
  Ni: { mass: 58.693, valence: 2 },
  Cu: { mass: 63.546, valence: 1 },
  Zn: { mass: 65.38, valence: 2 },
  Ga: { mass: 69.723, valence: 3 },
  Ge: { mass: 72.63, valence: 4 },
  As: { mass: 74.922, valence: 5 },
  Se: { mass: 78.971, valence: 6 },
  Br: { mass: 79.904, valence: 7 },
  Kr: { mass: 83.798, valence: 8 },
  Rb: { mass: 85.468, valence: 1 },
  Sr: { mass: 87.62, valence: 2 },
  Y:  { mass: 88.906, valence: 3 },
  Zr: { mass: 91.224, valence: 4 },
  Nb: { mass: 92.906, valence: 5 },
  Mo: { mass: 95.95, valence: 6 },
  Tc: { mass: 98, valence: 7 },
  Ru: { mass: 101.07, valence: 8 },
  Rh: { mass: 102.91, valence: 3 },
  Pd: { mass: 106.42, valence: 2 },
  Ag: { mass: 107.87, valence: 1 },
  Cd: { mass: 112.41, valence: 2 },
  In: { mass: 114.82, valence: 3 },
  Sn: { mass: 118.71, valence: 4 },
  Sb: { mass: 121.76, valence: 5 },
  Te: { mass: 127.60, valence: 6 },
  I:  { mass: 126.90, valence: 7 },
  Xe: { mass: 131.29, valence: 8 },
  Cs: { mass: 132.91, valence: 1 },
  Ba: { mass: 137.33, valence: 2 },
  La: { mass: 138.91, valence: 3 },
  Ce: { mass: 140.12, valence: 3 },
  Pr: { mass: 140.91, valence: 3 },
  Nd: { mass: 144.24, valence: 3 },
  Pm: { mass: 145, valence: 3 },
  Sm: { mass: 150.36, valence: 3 },
  Eu: { mass: 151.96, valence: 3 },
  Gd: { mass: 157.25, valence: 3 },
  Tb: { mass: 158.93, valence: 3 },
  Dy: { mass: 162.50, valence: 3 },
  Ho: { mass: 164.93, valence: 3 },
  Er: { mass: 167.26, valence: 3 },
  Tm: { mass: 168.93, valence: 3 },
  Yb: { mass: 173.05, valence: 2 },
  Lu: { mass: 174.97, valence: 3 },
  Hf: { mass: 178.49, valence: 4 },
  Ta: { mass: 180.95, valence: 5 },
  W:  { mass: 183.84, valence: 6 },
  Re: { mass: 186.21, valence: 7 },
  Os: { mass: 190.23, valence: 8 },
  Ir: { mass: 192.22, valence: 9 },
  Pt: { mass: 195.08, valence: 10 },
  Au: { mass: 196.97, valence: 1 },
  Hg: { mass: 200.59, valence: 2 },
  Tl: { mass: 204.38, valence: 3 },
  Pb: { mass: 207.2, valence: 4 },
  Bi: { mass: 208.98, valence: 5 },
  Po: { mass: 209, valence: 6 },
  At: { mass: 210, valence: 7 },
  Rn: { mass: 222, valence: 8 },
  Fr: { mass: 223, valence: 1 },
  Ra: { mass: 226, valence: 2 },
  Ac: { mass: 227, valence: 3 },
  Th: { mass: 232.04, valence: 4 },
  Pa: { mass: 231.04, valence: 5 },
  U:  { mass: 238.03, valence: 6 },
  Np: { mass: 237, valence: 7 },
  Pu: { mass: 244, valence: 8 },
  Am: { mass: 243, valence: 3 },
  Cm: { mass: 247, valence: 3 },
  Bk: { mass: 247, valence: 3 },
  Cf: { mass: 251, valence: 3 },
  Es: { mass: 252, valence: 3 },
  Fm: { mass: 257, valence: 3 },
  Md: { mass: 258, valence: 3 },
  No: { mass: 259, valence: 3 },
  Lr: { mass: 262, valence: 3 },
  Rf: { mass: 267, valence: 4 },
  Db: { mass: 270, valence: 5 },
  Sg: { mass: 271, valence: 6 },
  Bh: { mass: 270, valence: 7 },
  Hs: { mass: 277, valence: 8 },
  Mt: { mass: 278, valence: 8 },
  Ds: { mass: 281, valence: 8 },
  Rg: { mass: 282, valence: 1 },
  Cn: { mass: 285, valence: 2 },
  Fl: { mass: 289, valence: 3 },
  Lv: { mass: 293, valence: 4 },
  Ts: { mass: 294, valence: 5 },
  Og: { mass: 294, valence: 8 }
};

let compound = [];

function addElement() {
  const symbol = prompt("Enter element symbol:");
  const quantity = parseInt(prompt("Enter quantity:"));
  if(elements[symbol]){
    compound.push({symbol, quantity});
    updateMolarMass();
  } else alert("Invalid element");
}

function updateMolarMass(){
  let total = 0;
  compound.forEach(el => {
    total += elements[el.symbol].mass * el.quantity;
  });
  document.getElementById("total-mass").innerText = total.toFixed(3);
}
