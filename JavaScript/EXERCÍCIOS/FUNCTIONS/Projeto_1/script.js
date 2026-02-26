let nome = document.getElementById('nameid')
let born = document.getElementById('bornid')
let motherName = document.getElementById('mother_nameid')
let civil = document.getElementById('stateid')
let tel = document.getElementById('telNumberid')
let adress = document.getElementById('adressid')
let resp = document.querySelector('h2')



function send() {
    if (nome.value == "" && born.value == "" && motherName.value == "" && civil.value == ""  && tel.value == "" && adress.value == "") {

        resp.innerHTML = 'preencha TODOS os campos para proseguir'
    } else if (nome.value == "") {
        resp.innerHTML = 'Preencha o campo de NOME'
    } else if (born.value == "") {
        resp.innerHTML = 'Preencha o campo de DATA DE NASCIMENTO'
    } else if (motherName.value == "") {
        resp.innerHTML = 'Preencha o campo de NOME DA MÃE'
    } else if (civil.value == "") {
        resp.innerHTML = 'Preencha o campo de ESTADO CIVIL'
    } else if (tel.value == "") {
        resp.innerHTML = 'Preencha o campo de TELEFONE'
    } else if (adress.value == "") {
        resp.innerHTML = 'Preencha o campo de ENDEREÇO'
    } else {
        window.location.href = "home.html"
    }
}