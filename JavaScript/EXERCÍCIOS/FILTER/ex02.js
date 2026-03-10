const companies = [
    {companieName: 'Samsung', marketValue: 50, CEO: 'Kim Hyun Suk', foundedOn: 1938},
    {companieName: 'Microsoft', marketValue: 415, CEO: 'Satya Nadella', foundedOn: 1975},
    {companieName: 'Intel', marketValue: 117, CEO: 'Brian Krzanich', foundedOn: 1968},
    {companieName: 'Facebook', marketValue: 383, CEO: 'Mark Zuckerberg', foundedOn: 2004},
    {companieName: 'Spotify', marketValue: 30, CEO: 'Daniel Ek', foundedOn: 2006},
    {companieName: 'Apple', marketValue: 845, CEO: 'Tim Cook', foundedOn: 1976},
]

// DICIONAR 10% DE VALOR DE MERCADO ÀS EMPRESAS
// FILTRAR SOMENTE COMPANHIAS FUNDADAS A BAIXO DE 1990
// SOMAR O VALOR DE MERCADO DAS COMPANHIAS RESTANTES




const oldCompanies = companies.map(company => {
    const newCompanys = {
        companieName: company.companieName,
        marketValue: company.marketValue + (company.marketValue * 0.1),
        CEO: company.CEO,
        foundedOn: company.foundedOn
    }

    return newCompanys
}).filter(company => {return company.foundedOn < 1990}).reduce((acc,company) => {return acc + company.marketValue},0)


console.log(oldCompanies)