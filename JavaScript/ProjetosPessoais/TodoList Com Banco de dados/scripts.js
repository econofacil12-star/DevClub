const text = document.getElementById('text')
const divTask = document.getElementById('tasks')
const add = document.getElementById('add')
const ul = document.getElementById('unorderList')

const verificador = document.getElementById('list')

verificador.addEventListener('change', filtrarTarefas)

function filtrarTarefas() {
    const valor = verificador.value
    const tasks = document.querySelectorAll('#unorderList li')

    tasks.forEach(li => {
        const concluida = li.classList.contains('completedTask')

        
        if (valor === 'all') {
            li.style.display = "flex"; 
        }
        else if (valor === 'completed' && concluida) {
            li.style.display = "flex";
        }
        else if (valor === 'completed' && !concluida) {
            li.style.display = "none";
        }
        else if (valor === 'pending' && !concluida) {
            li.style.display = "flex";
        }
        else if (valor === 'pending' && concluida) {
            li.style.display = "none";
        }
        
    })
}



async function loadTask() {  // essa função serve para pegar as tarefas do meu banco de dados
    try {
        const resp = await fetch('http://localhost:3000/user')  // essa const serve para puxar o meu servidor pro front-end
        const tarefas = await resp.json()  // essa const serve para tratar os dados e ler como json

        ul.innerHTML = ''
        tarefas.forEach(tarefas => {  // eu uso o ForEach para pegar cada tarefa e exibir na tela e o valor do <p>, tarefas.task, é a variavel do meu banco de dados
            ul.innerHTML += `
            <li data-id= "${tarefas.id}" class="${tarefas.done ? 'completedTask' : ''}">
            <p>${tarefas.task}</p>  
            
            <span>
                <button class="complete" onclick = 'complete(this)'>concluida</button>
                <button class="edit" onclick = 'edit(this)'>editar</button>
                <button class="delet" onclick = 'delet(this)'>excluir</button>
            </span>
            </li>
            `
        });
    } catch (erro) {
        console.log('erro ao carregar tarefas:', erro)
    }
}


async function addTask() {
    const novaTask = text.value.trim()
    try {
        const resp = await fetch('http://localhost:3000/user', {  // coloca o texto digitado no input.text no task do banco de dados
            method: 'POST',
            headers: {'content-Type': 'application/json'},
            body: JSON.stringify({task: novaTask})
        })

        if (!resp.ok) {
            console.log('erro ao adicionar tarefa ao banco de dados')
        }

        const tarefacriada = await resp.json()  // carrega a tarefa do banco dados no meu front-end 
        

        ul.innerHTML += `
   
            <li data-id= "${tarefacriada.id}">
            <p>${tarefacriada.task}</p>
            
            <span>
                <button class="complete" onclick = 'complete(this)'>concluida</button>
                <button class="edit" onclick = 'edit(this)'>editar</button>
                <button class="delet" onclick = 'delet(this)'>excluir</button>
            </span>
            </li>
  
    `
        text.value = ""
    } catch(erro) {
        console.log('erro ao criar tarefa:', erro)
    }
}





text.addEventListener('keypress',function(event) {
    if(event.key === 'Enter') {
        addTask()
    }
})

async function complete(button) {
    const li = button.closest('li')
    const id = li.getAttribute('data-id')

    li.classList.toggle('completedTask')
    const done = li.classList.contains('completedTask')

    try {
        const resp = await fetch(`http://localhost:3000/user/${id}`, {
            method: "PUT",
            headers: {"content-Type": "application/json"},
            body: JSON.stringify({done})
        })

        if (!resp.ok) {
            console.log('erro ao atualizar tarefa');
        }
    } catch (error) {
        console.log('erro ao atualizar status da tarefa', error)
    }
}

async function edit(button) {
   const li = button.closest('li')
   const id = li.getAttribute('data-id') 
   let editedTask = prompt('edite a sua tarefa')

   try {
    const resp = await fetch(`http://localhost:3000/user/${id}`, {
        method: 'PUT',
        headers: {'content-Type': 'application/json'},
        body: JSON.stringify({task: editedTask})
    });

    if(!resp.ok) {
        console.log('erro ao editar tarefa')
    }

    if(editedTask != null) {
    let p = button.closest('li').querySelector('p')
    p.innerHTML = editedTask
    }
   } catch (erro) {
    console.log('erro ao editar usuário', erro)
   }
    
}

async function delet(button) {
    const li = button.closest('li')
    const id = li.getAttribute('data-id')

    try {
        const resp = await fetch(`http://localhost:3000/user/${id}`, {method: 'DELETE'})  // essa linha serve para remover a tarefa do banco de dados
        if (!resp.ok) {
            console.log('erro ao excluir a tarefa do servidor')
        }
        li.remove() // essa linha serve para remover a tarefa do site
        console.log('tarefa excluida com sucesso')
    } catch(erro) {
        console.log('erro ao excluir tarefas:', erro)
    }
}

document.addEventListener('DOMContentLoaded',loadTask)