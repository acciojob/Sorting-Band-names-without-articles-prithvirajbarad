const bands =['The Virupaksha Temple', 'Victoria Memorial', 'Tajmahal'];

function stripArticle(name) {
  return name.replace(/^(a |an |the )/i, "").trim();
}

const sortedBands = bands.sort((a, b) => stripArticle(a) > stripArticle(b) ? 1 : -1);

// Render the sorted band names without articles
const ul = document.querySelector("ul");
sortedBands.forEach(band => {
  const li = document.createElement("li");
  li.textContent = band;
  ul.appendChild(li);
});