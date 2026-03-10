
const menuOptions = [

    { name: 'X-Salada', price: 30, vegan: false, src: '../imagens/xsalada.jpeg' },

    { name: 'X-Bacon', price: 34, vegan: false, src: '../imagens/xbacon.png' },

    { name: 'X-Bacon Egg', price: 39, vegan: false, src: '../imagens/bacon-egg.png' },

    { name: 'Monstruoso', price: 50, vegan: false, src: '../imagens/monstruoso.png' },

    { name: 'Big Vegano', price: 55, vegan: true, src: '../imagens/xvegan.png' },

    { name: 'X-Vegan', price: 45, vegan: true, src: '../imagens/monstruoso-vegan.png' },

]

let menu = document.getElementById('menu')
let showAllButton = document.getElementById('show-all')
let mapButton = document.getElementById('mapButton')
let reduceButton = document.getElementById('reduceButton')
let filterButton = document.getElementById('filterButton')
let myMenu = ""

function showAll() {
menu.innerHTML = ""

    menuOptions.forEach(elements => {
        menu.innerHTML += `
        <div id="hamburguer">
            <img src="${elements.src}" alt="imagem">
            <h3>R$ ${elements.price.toFixed(2).replace('.', ',')}</h3>
            <h2>${elements.name}</h2>
        </div>
     
    `
    })

}
showAllButton.addEventListener('click', showAll)


function mapAll(){
    menu.innerHTML = ""
    myMenu = menuOptions.map(elements => {

        let newPrice = elements.price*0.9

        menu.innerHTML += `
        <div id="hamburguer">
            <img src="${elements.src}" alt="imagem">
            <h3>R$ ${newPrice.toFixed(2).replace('.', ',')}</h3>
            <h2>${elements.name}</h2>
        </div>
        `
        return newPrice
    })

    

    return myMenu

}
mapButton.addEventListener('click',mapAll)


function reduceAll() {
    mapAll()

    menu.innerHTML = ""

    const totalPrices = myMenu.reduce((acc,itens)=>{
        return acc + itens
    },0)

    menu.innerHTML = `
    <div id="hamburguer" style="height: 100px;">
            <h3>O valor total do cardápio é de :</h3>
            <h2>R$ ${totalPrices.toFixed(2).replace('.',',')}</h2>
        </div>
    
    `
    return totalPrices
}


reduceButton.addEventListener('click',reduceAll)

function filterAll(){
    menu.innerHTML = ""

   menuOptions.filter(elements=> {
        if(elements.vegan) {
            let newPrice = elements.price*0.9

            menu.innerHTML += `
            <div id="hamburguer">
                <img src="${elements.src}" alt="imagem">
                <h3>R$ ${newPrice.toFixed(2).replace('.', ',')}</h3>
                <h2>${elements.name}</h2>
            </div>
            `
        }

    })

    
}


filterButton.addEventListener('click',filterAll)



