const cart = [
    {productName: 'Abóbora', pricePerKg: 5, Kg: 1},
    {productName: 'Pepino', pricePerKg: 3.55, Kg: 1.3},
    {productName: 'Limão', pricePerKg: 1.2, Kg: 2},
    {productName: 'Abacate', pricePerKg: 5.4, Kg: 1.67},
    {productName: 'Morango', pricePerKg: 11.9, Kg: 3},
]


const totalPriceCart = cart.reduce((acc,priceItens) => {
    return acc + (priceItens.pricePerKg * priceItens.Kg)
}, 0)

console.log(`Total: ${totalPriceCart.toFixed(2).replace('.',',')}`)

const descount = cart.map(intens => {
    const newPrices = {
        productName: intens.productName,
        price: (intens.pricePerKg * intens.Kg) > 5 ? ((intens.pricePerKg * intens.Kg) - (intens.pricePerKg * intens.Kg)*0.05) : (intens.pricePerKg * intens.Kg)
    }

    return newPrices
})

const newPrices = descount.reduce((acc,prices) => {
    return acc + (prices.price)
}, 0)


console.log(`o valor total com 5% de desconto é de R$ ${newPrices.toFixed(2).replace('.',',')}`)