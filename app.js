let searchButton = document.querySelector(".search-button");
let searchInput = document.querySelector(".user-search");
let container = $(".character-container");
let characterImage = document.querySelector(".image");

let characters = []

$.get('https://bobsburgers-api.herokuapp.com/characters/', (data) => {
    for (let i = 0; i < data.length; i++) {
       let div = $(`<div class = 'cards'></div>`)
       const name = data[i].name;
       const image = data[i].image;
       const html = `<h1 class = 'card-title'>${name}</h1><img class="image" src=${image} alt="">`
       div.append(html)
       $('.character-container').append(div);
       characters.push({name: name, image: image, element: div})
   }
});

searchButton.addEventListener("click", () => {
    let userSearch = searchInput.value.toLowerCase()
    console.log(userSearch)
    characters.forEach(character => {
        let showCard = character.name.toLowerCase().includes(userSearch)
        if (showCard) {
            character.element.show()
        } else {
            character.element.hide()
        }
    })
    
    console.log(userSearch)
})
