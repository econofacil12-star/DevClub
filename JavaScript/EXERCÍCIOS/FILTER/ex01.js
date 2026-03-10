const companies = [
    {companyName: 'Facebook', value: 383, CEO: 'Mark Zukenberg', fundedOn: 2004},
    {companyName: 'Intel', value: 117, CEO: 'Brian Krzanich', fundedOn: 1968},
    {companyName: 'Apple', value: 845, CEO: 'Steve Jobs', fundedOn: 1976},
    {companyName: 'Spotify', value: 30, CEO: 'Daniel Ek', fundedOn: 2006},
]


const newCompanies = companies.filter(company => {
    return (company.value < 200 && company.fundedOn > 1900)
})

console.log(newCompanies)