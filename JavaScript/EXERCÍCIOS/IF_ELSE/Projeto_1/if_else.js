let nota1txt = document.getElementById('nota1');
let nota2txt = document.getElementById('nota2');
let nota3txt = document.getElementById('nota3');
let nota4txt = document.getElementById('nota4');


function pesquisar() {
    let nota1 = Number(nota1txt.value)
    let nota2 = Number(nota2txt.value)
    let nota3 = Number(nota3txt.value)
    let nota4 = Number(nota4txt.value)
    let notaFinal = (nota1 + nota2 + nota3 + nota4)/4
    let res = document.querySelector('h2')

    if(nota1 < 0  || nota2 < 0 ||  nota3 < 0  || nota4 < 0 ) {
        window.alert('digite somente números maiores ou iguais a 0')
    } else if (nota1txt.value == "" || nota2txt.value == "" || nota3txt.value == "" || nota4txt.value == "") {
        window.alert('não pode ter campos vazios')
    }else if (notaFinal < 5) {
        res.innerHTML = `Sua nota final é <u>${notaFinal.toFixed(2)}</u> e você está reprovado(a)!`
    } else if (notaFinal >= 7) {
        res.innerHTML = `sua nota final é <u>${notaFinal.toFixed(2)}</u>, parabéns você está aprovado(a)!`
    } else if (notaFinal >= 5 || notaFinal < 7) {
        res.innerHTML = `sua nota final é <u>${notaFinal.toFixed(2)}</u> e você está de recuperação!`
    }
}