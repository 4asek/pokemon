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
  card.addEventListener(`click`, () => {
    addModal(chuvak);
  });
  return card;
}

const modal = document.getElementById("modal_id");
const close = document.querySelector(".close");
const modal_img = document.getElementById("modal_img");
const title_m = document.getElementById("title_m");
function addModal(chuvak) {
  modal_img.src = chuvak.image;
  title_m.textContent = chuvak.name;
  modal.style.display = "flex";
}

modal.addEventListener(`click`, (e) => {
  if (e.target === modal) {
    modal.style = "none";
  }
});
modal.addEventListener(`click`, (e) => {
  modal.style = "none";
});

const grid = document.getElementById(`grid`);
async function getPok(count) {
  grid.innerHTML = ` `;
  for (let i = 0; i < count; i++) {
    const resp = await fetch("http://localhost:3000");
    const chuvak = await resp.json();
    grid.append(creatCard(chuvak));
  }
}
getPok(20);

// function addModal(chuvak) {
//   const modalka = document.getElementById(`modal`);

// }
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
