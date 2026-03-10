const companies = [
    {companyName: 'Facebook', value: 383, CEO: 'Mark Zukenberg', fundedOn: 2004},
    {companyName: 'Intel', value: 117, CEO: 'Brian Krzanich', fundedOn: 1968},
    {companyName: 'Apple', value: 845, CEO: 'Steve Jobs', fundedOn: 1976},
    {companyName: 'Spotify', value: 30, CEO: 'Daniel Ek', fundedOn: 2006},
]

let totalValue = companies.reduce((acc, priceAtual) => {
    return acc + priceAtual.value
}, 0)

console.log(totalValue)