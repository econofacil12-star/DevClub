
let products = [
    {
        item: "nada",
        price: 0,
    },

    {
        item: "macarrão",
        price: 10,
    },

    {
        item: "sofá",
        price: 200,
    },

    {
        item: "tv",
        price: 1500,
    },

    {
        item: "microondas",
        price: 600,
    },

    {
        item: "guarda roupas",
        price: 800,
    }
]


function calcular() {
    let item1 = document.getElementById('item1')
    let item2 = document.getElementById('item2')    
    let item3 = document.getElementById('item3')    
    let item4 = document.getElementById('item4')    
    let item5 = document.getElementById('item5')  
    let c1 = 0
    let c2 = 0
    let c3 = 0
    let c4 = 0
    let c5 = 0
    let exibir = document.querySelector('h2')
    let local = document.getElementById('cidade')

    if (item1.value == 'nada') {
         c1 = 0
    } else if (item1.value == 'macarrão') {
         c1 = 1
    }else if (item1.value == 'sofá') {
         c1 = 2
    }else if (item1.value == 'tv') {
         c1 = 3
    }else if (item1.value == 'microondas') {
         c1 = 4
    }else if (item1.value == 'guarda roupas') {
         c1 = 5  
    } 

    if (item2.value == 'nada') {
         c2 = 0
    } else if (item2.value == 'macarrão') {
         c2 = 1
    }else if (item2.value == 'sofá') {
         c2 = 2
    }else if (item2.value == 'tv') {
         c2 = 3
    }else if (item2.value == 'microondas') {
         c2 = 4
    }else if (item2.value == 'guarda roupas') {
         c2 = 5  
    }

    if (item3.value == 'nada') {
         c3 = 0
    } else if (item3.value == 'macarrão') {
         c3 = 1
    }else if (item3.value == 'sofá') {
         c3 = 2
    }else if (item3.value == 'tv') {
         c3 = 3
    }else if (item3.value == 'microondas') {
         c3 = 4
    }else if (item3.value == 'guarda roupas') {
         c3 = 5  
    }

    if (item4.value == 'nada') {
         c4 = 0
    } else if (item4.value == 'macarrão') {
         c4 = 1
    }else if (item4.value == 'sofá') {
         c4 = 2
    }else if (item4.value == 'tv') {
         c4 = 3
    }else if (item4.value == 'microondas') {
         c4 = 4
    }else if (item4.value == 'guarda roupas') {
         c4 = 5  
    }

    if (item5.value == 'nada') {
         c5 = 0
    } else if (item5.value == 'macarrão') {
         c5 = 1
    }else if (item5.value == 'sofá') {
         c5 = 2
    }else if (item5.value == 'tv') {
         c5 = 3
    }else if (item5.value == 'microondas') {
         c5 = 4
    }else if (item5.value == 'guarda roupas') {
         c5 = 5  
    }

    let fretePrice = products[c1].price + products[c2].price + products[c3].price + products[c4].price + products[c5].price

    if (fretePrice == 0) {
        exibir.innerHTML = 'você precisa comprar algo para calcular o frete'
    } else if (local.value == 'RJ' || local.value == 'SP') {
        let frete = 0

        let precoFinal = fretePrice + frete 

        exibir.innerHTML = `o valor da sua compra de R$ ${fretePrice} e o frete custa R$ ${frete}. então o valor total da sua compra é de R$ ${precoFinal}`

    } else if (local.value == 'SC' || local.value == 'RS' || local.value == 'MT') {
        let frete = 100

        let precoFinal = fretePrice + frete

        exibir.innerHTML = `o valor da sua compra de R$ ${fretePrice} e o frete custa R$ ${frete}. então o valor total da sua compra é de R$ ${precoFinal}`       
    } else if (local.value == 'BH' || local.value == 'AM') {
        let frete = 200

        let precoFinal = fretePrice + frete

        exibir.innerHTML = `o valor da sua compra de R$ ${fretePrice} e o frete custa R$ ${frete}. então o valor total da sua compra é de R$ ${precoFinal}`       
    }

}



