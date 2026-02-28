let user = { Myname : 'renan', age: 28}

for (const person in user) {
    console.log(`${person}: ${user[person]}`)
}