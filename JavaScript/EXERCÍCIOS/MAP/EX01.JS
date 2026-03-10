const menu = [
    {plate: 'X-salada', price: 10},
    {plate: 'X-tudo', price: 17},
    {plate: 'X-egg', price: 15.99},
    {plate: 'X-bacon', price: 18},
    {plate: 'X-egg-bacon', price: 21.50},
    {plate: 'X-picanha', price: 30},
]

let totalPrice = 0
let newPrice = 0

menu.forEach(itens => {
    

    totalPrice += itens.price
});

console.log(`R$ ${totalPrice.toFixed(2).replace('.',',')}`)

const descount = menu.map(itens => {
    const newMenu = {
        plate: itens.plate,
        price: itens.price > 20 ? (itens.price - (itens.price * 0.2)) : itens.price
    }
    return newMenu
})

console.log(descount)


descount.forEach(prices => {
    newPrice += prices.price
});

console.log(`o preço total do menu com os 20% de desconto é de R$ ${newPrice.toFixed(2).replace('.',',')}`)