const http = require("http");

async function GetPokemon() {
  function getRandomInt(max) {
    let random_n = Math.floor(Math.random() * max);
    return random_n;
  }
  const n = getRandomInt(60);
  const apiUrl = `https://pokeapi.co/api/v2/pokemon/${n}`;
  try {
    const resp = await fetch(apiUrl);
    if (!resp.ok) {
      console.log(`щось не так нах я єбу сварка ${resp.status}`);
    }
    const data = await resp.json();
    const describer = await GetDescr(n);
    const RDate = {
      id: data.id,
      name: data.name,
      image: data.sprites.front_default,
      hp: data.stats[0].base_stat,
      describer: describer,
    };
    return RDate;
  } catch (error) {
    console.log(error.message);
  }
}

async function GetDescr(id) {
  const resp = await fetch(`https://pokeapi.co/api/v2/pokemon-species/${id}`);
  const data = await resp.json();
  if (!resp.ok) {
    console.log(`Щось не так з запитом опису`);
  }
  return data.flavor_text_entries[0].flavor_text;
}

const server = http.createServer(async (req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.writeHead(200, { "Content-Type": "application/json" });
  const data = await GetPokemon();

  res.end(JSON.stringify(data));
});

server.listen(3000, () => {
  console.log("РАКЕТА ВОРКАЄ йоу");
});
