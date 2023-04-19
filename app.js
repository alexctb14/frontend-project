let searchButton = document.querySelector(".search-button");
let searchBar = document.querySelector(".search-bar");
let container = $(".character-container");
let characterImage = document.querySelector(".image");

searchButton.addEventListener("click", () => {
    $.get('https://bobsburgers-api.herokuapp.com/characters/', (data) => {
        
         
        for (let i = 0; i < 3; i++) {
            // debugger
            let div = $(`<div class = 'cards'></div>`)
            
            const name = data[i].name;
            const image = data[i].image;
            
            const html = `
            <h1 class = 'card-title'>${name}</h1>
            <img class="image" src=${image} alt="">`
        console.log(html)
        div.append(html)
        console.log(div)
        $('.character-container').append(div);
        }
        
    });

})
