const table = document.getElementById('periodic-table');
const popup = document.getElementById('popup');


const elements = [
  { symbol: "H", group: "nonmetal", row: 1, col: 1 },
  { symbol: "He", group: "noble", row: 1, col: 18 },

  { symbol: "Li", group: "alkali", row: 2, col: 1 },
  { symbol: "Be", group: "alkaline", row: 2, col: 2 },
  { symbol: "B", group: "metalloid", row: 2, col: 13 },
  { symbol: "C", group: "nonmetal", row: 2, col: 14 },
  { symbol: "N", group: "nonmetal", row: 2, col: 15 },
  { symbol: "O", group: "nonmetal", row: 2, col: 16 },
  { symbol: "F", group: "halogen", row: 2, col: 17 },
  { symbol: "Ne", group: "noble", row: 2, col: 18 },

  { symbol: "Na", group: "alkali", row: 3, col: 1 },
  { symbol: "Mg", group: "alkaline", row: 3, col: 2 },
  { symbol: "Al", group: "post-transition", row: 3, col: 13 },
  { symbol: "Si", group: "metalloid", row: 3, col: 14 },
  { symbol: "P", group: "nonmetal", row: 3, col: 15 },
  { symbol: "S", group: "nonmetal", row: 3, col: 16 },
  { symbol: "Cl", group: "halogen", row: 3, col: 17 },
  { symbol: "Ar", group: "noble", row: 3, col: 18 },

  { symbol: "K", group: "alkali", row: 4, col: 1 },
  { symbol: "Ca", group: "alkaline", row: 4, col: 2 },
  { symbol: "Sc", group: "transition", row: 4, col: 3 },
  { symbol: "Ti", group: "transition", row: 4, col: 4 },
  { symbol: "V", group: "transition", row: 4, col: 5 },
  { symbol: "Cr", group: "transition", row: 4, col: 6 },
  { symbol: "Mn", group: "transition", row: 4, col: 7 },
  { symbol: "Fe", group: "transition", row: 4, col: 8 },
  { symbol: "Co", group: "transition", row: 4, col: 9 },
  { symbol: "Ni", group: "transition", row: 4, col: 10 },
  { symbol: "Cu", group: "transition", row: 4, col: 11 },
  { symbol: "Zn", group: "transition", row: 4, col: 12 },
  { symbol: "Ga", group: "post-transition", row: 4, col: 13 },
  { symbol: "Ge", group: "metalloid", row: 4, col: 14 },
  { symbol: "As", group: "metalloid", row: 4, col: 15 },
  { symbol: "Se", group: "nonmetal", row: 4, col: 16 },
  { symbol: "Br", group: "halogen", row: 4, col: 17 },
  { symbol: "Kr", group: "noble", row: 4, col: 18 },

  { symbol: "Rb", group: "alkali", row: 5, col: 1 },
  { symbol: "Sr", group: "alkaline", row: 5, col: 2 },
  { symbol: "Y", group: "transition", row: 5, col: 3 },
  { symbol: "Zr", group: "transition", row: 5, col: 4 },
  { symbol: "Nb", group: "transition", row: 5, col: 5 },
  { symbol: "Mo", group: "transition", row: 5, col: 6 },
  { symbol: "Tc", group: "transition", row: 5, col: 7 },
  { symbol: "Ru", group: "transition", row: 5, col: 8 },
  { symbol: "Rh", group: "transition", row: 5, col: 9 },
  { symbol: "Pd", group: "transition", row: 5, col: 10 },
  { symbol: "Ag", group: "transition", row: 5, col: 11 },
  { symbol: "Cd", group: "transition", row: 5, col: 12 },
  { symbol: "In", group: "post-transition", row: 5, col: 13 },
  { symbol: "Sn", group: "post-transition", row: 5, col: 14 },
  { symbol: "Sb", group: "metalloid", row: 5, col: 15 },
  { symbol: "Te", group: "metalloid", row: 5, col: 16 },
  { symbol: "I", group: "halogen", row: 5, col: 17 },
  { symbol: "Xe", group: "noble", row: 5, col: 18 },

  { symbol: "Cs", group: "alkali", row: 6, col: 1 },
  { symbol: "Ba", group: "alkaline", row: 6, col: 2 },
  { symbol: "La", group: "lanthanide", row: 6, col: 3 },
  { symbol: "Ce", group: "lanthanide", row: 8, col: 4 },
  { symbol: "Pr", group: "lanthanide", row: 8, col: 5 },
  { symbol: "Nd", group: "lanthanide", row: 8, col: 6 },
  { symbol: "Pm", group: "lanthanide", row: 8, col: 7 },
  { symbol: "Sm", group: "lanthanide", row: 8, col: 8 },
  { symbol: "Eu", group: "lanthanide", row: 8, col: 9 },
  { symbol: "Gd", group: "lanthanide", row: 8, col: 10 },
  { symbol: "Tb", group: "lanthanide", row: 8, col: 11 },
  { symbol: "Dy", group: "lanthanide", row: 8, col: 12 },
  { symbol: "Ho", group: "lanthanide", row: 8, col: 13 },
  { symbol: "Er", group: "lanthanide", row: 8, col: 14 },
  { symbol: "Tm", group: "lanthanide", row: 8, col: 15 },
  { symbol: "Yb", group: "lanthanide", row: 8, col: 16 },
  { symbol: "Lu", group: "lanthanide", row: 8, col: 17 },

  { symbol: "Hf", group: "transition", row: 6, col: 4 },
  { symbol: "Ta", group: "transition", row: 6, col: 5 },
  { symbol: "W", group: "transition", row: 6, col: 6 },
  { symbol: "Re", group: "transition", row: 6, col: 7 },
  { symbol: "Os", group: "transition", row: 6, col: 8 },
  { symbol: "Ir", group: "transition", row: 6, col: 9 },
  { symbol: "Pt", group: "transition", row: 6, col: 10 },
  { symbol: "Au", group: "transition", row: 6, col: 11 },
  { symbol: "Hg", group: "transition", row: 6, col: 12 },
  { symbol: "Tl", group: "post-transition", row: 6, col: 13 },
  { symbol: "Pb", group: "post-transition", row: 6, col: 14 },
  { symbol: "Bi", group: "post-transition", row: 6, col: 15 },
  { symbol: "Po", group: "metalloid", row: 6, col: 16 },
  { symbol: "At", group: "halogen", row: 6, col: 17 },
  { symbol: "Rn", group: "noble", row: 6, col: 18 },

  { symbol: "Fr", group: "alkali", row: 7, col: 1 },
  { symbol: "Ra", group: "alkaline", row: 7, col: 2 },
  { symbol: "Ac", group: "actinide", row: 7, col: 3 },
  { symbol: "Th", group: "actinide", row: 9, col: 4 },
  { symbol: "Pa", group: "actinide", row: 9, col: 5 },
  { symbol: "U", group: "actinide", row: 9, col: 6 },
  { symbol: "Np", group: "actinide", row: 9, col: 7 },
  { symbol: "Pu", group: "actinide", row: 9, col: 8 },
  { symbol: "Am", group: "actinide", row: 9, col: 9 },
  { symbol: "Cm", group: "actinide", row: 9, col: 10 },
  { symbol: "Bk", group: "actinide", row: 9, col: 11 },
  { symbol: "Cf", group: "actinide", row: 9, col: 12 },
  { symbol: "Es", group: "actinide", row: 9, col: 13 },
  { symbol: "Fm", group: "actinide", row: 9, col: 14 },
  { symbol: "Md", group: "actinide", row: 9, col: 15 },
  { symbol: "No", group: "actinide", row: 9, col: 16 },
  { symbol: "Lr", group: "actinide", row: 9, col: 17 },

  { symbol: "Rf", group: "transition", row: 7, col: 4 },
  { symbol: "Db", group: "transition", row: 7, col: 5 },
  { symbol: "Sg", group: "transition", row: 7, col: 6 },
  { symbol: "Bh", group: "transition", row: 7, col: 7 },
  { symbol: "Hs", group: "transition", row: 7, col: 8 },
  { symbol: "Mt", group: "transition", row: 7, col: 9 },
  { symbol: "Ds", group: "transition", row: 7, col: 10 },
  { symbol: "Rg", group: "transition", row: 7, col: 11 },
  { symbol: "Cn", group: "transition", row: 7, col: 12 },
  { symbol: "Nh", group: "post-transition", row: 7, col: 13 },
  { symbol: "Fl", group: "post-transition", row: 7, col: 14 },
  { symbol: "Mc", group: "post-transition", row: 7, col: 15 },
  { symbol: "Lv", group: "post-transition", row: 7, col: 16 },
  { symbol: "Ts", group: "halogen", row: 7, col: 17 },
  { symbol: "Og", group: "noble", row: 7, col: 18 },
];
elements.forEach(({ symbol, group, row, col }) => {
  const div = document.createElement("div");
  div.className = `element ${group}`;
  div.textContent = symbol;
  div.style.gridRow = row;
  div.style.gridColumn = col;

  div.addEventListener("mouseover", (e) => {
    showElement(symbol, e.pageX, e.pageY);
  });

  div.addEventListener("mouseout", hidePopup);

  table.appendChild(div);
});

function showElement(symbol, x, y) {
  fetch(`/element/${symbol}`)
    .then((res) => res.json())
    .then((data) => {
      if (data.error) return;

      popup.innerHTML = `
        <strong>${data.name} (${data.symbol})</strong><br>
        Atomic Number: ${data.number}<br>
        Atomic Mass: ${data.mass}<br>
        Density: ${data.density}<br>
        Boiling Point: ${data.boiling_point}<br>
        Melting Point: ${data.melting_point}
      `;

      popup.style.display = "block";
      popup.style.top = y + "px";
      popup.style.left = x + 20 + "px"; // offset to the right of cursor
    });
}

function hidePopup() {
  popup.style.display = "none";
}