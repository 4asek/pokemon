function creatCard(chuvak) {
  const card = document.createElement(`div`);
  card.className = "card_p";
  const img = document.createElement(`img`);
  img.src = chuvak.image;
  img.className = "img_p";
  const text = document.createElement(`span`);
  text.className = "text";
  text.textContent = chuvak.name;
  card.append(img, text);
  return card;
}
const grid = document.getElementById(`grid`);
async function getPok(count) {
  grid.innerHTML = ` `;
  for (let i = 0; i < count; i++) {
    const resp = await fetch("http://localhost:3000");
    const chuvak = await resp.json();
    grid.append(creatCard(chuvak));
  }
  const pokemon = await Promise.all(req);
  pokemon.forEach((p) => grid.append(creatCard(p)));
}

getPok(20);

// fetch(`http://localhost:3000`)
//   .then((resp) => {
//     if (!resp.ok) {
//       console.log(resp.status)
//     }
//     return resp.json()
//   })
//   .then((data) => {
//     console.log(data)

//   })
