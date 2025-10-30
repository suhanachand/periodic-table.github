import { elements } from './elements.js';

let compound = [];

// -------------------- Molar Mass Calculator --------------------
function addElement() {
  const symbol = prompt("Enter element symbol:");
  const quantity = parseInt(prompt("Enter quantity:"));
  if(elements[symbol]){
    compound.push({symbol, quantity});
    updateMolarMass();
    renderCompoundList();
  } else alert("Invalid element");
}

function updateMolarMass(){
  let total = 0;
  compound.forEach(el => {
    total += elements[el.symbol].mass * el.quantity;
  });
  document.getElementById("total-mass").innerText = total.toFixed(3);
}

function renderCompoundList(){
  const list = document.getElementById("compound-list");
  list.innerHTML = '';
  compound.forEach(el => {
    const li = document.createElement('li');
    li.innerText = `${el.symbol} × ${el.quantity} (${elements[el.symbol].name})`;
    list.appendChild(li);
  });
}

// -------------------- Lewis Diagram --------------------
const lewisContainer = document.getElementById("lewis-diagram");

function createLewisDot(elementSymbol){
  const valence = elements[elementSymbol].valence;
  lewisContainer.innerHTML = '';
  for(let i = 0; i < valence; i++){
    const dot = document.createElement("div");
    dot.classList.add("dot");
    dot.setAttribute("draggable", true);
    dot.innerText = "•";
    lewisContainer.appendChild(dot);
  }
}

// Drag & Drop functionality for Lewis dots
lewisContainer.addEventListener("dragstart", e => {
  e.dataTransfer.setData("text/plain", e.target.innerText);
});

lewisContainer.addEventListener("dragover", e => {
  e.preventDefault();
});

lewisContainer.addEventListener("drop", e => {
  e.preventDefault();
  const dot = document.createElement("div");
  dot.classList.add("dot");
  dot.innerText = e.dataTransfer.getData("text/plain");
  lewisContainer.appendChild(dot);
});

// -------------------- Periodic Table --------------------
const tableContainer = document.getElementById("periodic-table");

for(const symbol in elements){
  const el = document.createElement("div");
  el.classList.add("element");
  el.style.backgroundColor = getColor(elements[symbol].group); // Scientific color coding
  el.innerText = symbol;
  el.title = `
    ${elements[symbol].name}
    Atomic #: ${elements[symbol].atomicNumber}
    Mass: ${elements[symbol].mass}
    Valence: ${elements[symbol].valence}
    Group: ${elements[symbol].group}, Period: ${elements[symbol].period}
  `;
  el.addEventListener("click", () => createLewisDot(symbol));
  tableContainer.appendChild(el);
}

function getColor(group){
  // Simple color scheme by group type
  if(group === 1) return "#FF6666";       // Alkali metals
  if(group === 2) return "#FFDEAD";       // Alkaline earth
  if(group >= 3 && group <= 12) return "#FFD700"; // Transition metals
  if(group >= 13 && group <= 16) return "#66CDAA"; // Metalloids & other
  if(group === 17) return "#00BFFF";      // Halogens
  if(group === 18) return "#D3D3D3";      // Noble gases
  return "#FFFFFF";
}

// -------------------- Buttons --------------------
document.getElementById("add-element").addEventListener("click", addElement);
