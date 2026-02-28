let cadastro = [
    {
        personName: 'renan',
        adress: 'rua pedro ernesto'
    },

    {
        personName: 'patrik',
        adress: 'rua pedro ernesto'
    },

    {
        personName: 'clarisse',
        adress: 'rua marcilio dias'
    }
]

let find = 'clarisse'

for (const Myname of cadastro) {
    if (Myname.personName == find ) {
        console.log(`${Myname.personName} seu endereço é ${Myname.adress}`)
        break
    }
}