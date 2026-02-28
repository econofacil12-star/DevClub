const car = [10,244,20,27,36,130,12,50,100,73.40]

//produtos a cima de R$ 30,00 recebem um desconto de 10%
let priceDescount = 0
let fullPrice = 0


function calc(price,desc){
    let res = (price*desc)/100
    return res
}

car.forEach(elements => {
    if (elements > 30){
        priceDescount = priceDescount + elements - calc(elements,10)
    } else {
        priceDescount += elements
    }
});


car.forEach(value => {
    fullPrice += value
})

let comparation = fullPrice - priceDescount

console.log(`o valor total da sua compra foi de R$ ${fullPrice.toFixed(2).replace('.',',')}. Porém, você teve 10% de desconto em itens que custam mais de R$ 30,00.
Por isso o valor da sua compra foi de R$ ${priceDescount.toFixed(2).replace('.',',')}. Você economizou R$ ${comparation.toFixed(2).replace('.',',')}`)