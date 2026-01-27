fetch(`http://localhost:3000`)
  .then((resp) => {
    if (!resp.ok) {
      console.log(resp.status)
    }
    return resp.json()
  })
  .then((data) => {
    console.log(data)
    const name1 = document.getElementById(`d1`)
    name1.innerHTML = data.name
    // const img1 = document.getElementById(`img1`)
    // img1.src = data.sprites.front_default // знайти десь як ту єбучу картинку вставляти
  })
