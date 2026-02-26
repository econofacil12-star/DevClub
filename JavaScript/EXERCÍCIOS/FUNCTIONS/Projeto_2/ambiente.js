let products = [
    {
        nome: '',
        type: '',
        price: 0,
    }, 

    {
        nome: 'Brahma',
        type: 'cerveja',
        price: 12.5,
    }, 

    {
        nome: 'Stella',
        type: 'cerveja',
        price: 15.0,
    },

    {
        nome: 'Choquito',
        type: 'chocolate',
        price: 5.30,
    },

    {
        nome: 'Diamate Negro',
        type: 'chocolate',
        price: 6.0,
    },

    {
        nome: 'Coca-Cola',
        type: 'refrigerante em lata',
        price: 7.50,
    },

    {
        nome: 'Guaraná Antártica',
        type: 'refrigerante em lata',
        price: 7.50,
    },

    {
        nome: 'Pepsi',
        type: 'refrigerante em lata',
        price: 12.5,
    },
]


// digite a baixo o código do array do produto que você quer colocar no carrinho
let c1 = 1
let c2 = 4
let c3 = 5

let carrinhoProducts = `

${products[c1].nome}: R$ ${products[c1].price} 
${products[c2].nome}: R$ ${products[c2].price} 
${products[c3].nome}: R$ ${products[c3].price}

`

let carrinhoPrice = products[c1].price + products[c2].price + products[c3].price 

function car() {
    console.log(carrinhoProducts)

    if (products[c1].type == 'cerveja' || products[c2].type == 'cerveja' || products[c3].type == 'cerveja') {

        let newPrice = carrinhoPrice + (carrinhoPrice*0.2)

        console.log(`sua compra contem itens com imposto e por isso foi acrescido um imposto de 20% ao valor da sua compra.`)
        console.log(`Por isso, o valor total da sua compra é R$ ${newPrice}`)
    } else {
        console.log(`o valor da sua compra é de ${carrinhoPrice}`)
    }

}

car()
