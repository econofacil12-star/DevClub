let car = [
    {
        product: 'maçã',
        price: 10,
        category: 'fruta'
    },

    {
        product: 'patinho',
        price: 30.50,
        category: 'carne vermelha'
    },

    {
        product: 'brahma',
        price: 15.99,
        category: 'bebida alcoólica'
    },

    {
        product: 'banana',
        price: 8.00,
        category: 'fruta'
    },
]

let total = 0

    function totalCompra() {

        car.forEach((element) => {
        total += element.price
    });

    value = total - (total*0.1)
     console.log(`você teve 10% de desconto!`)
     console.log(`o valor da sua compra deu R$ ${value.toFixed(2).replace('.',',')}`)

    return value
    
}

totalCompra()





