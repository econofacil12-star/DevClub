
let contatcts_list = [
    {
        contatc_name: 'renan alfenas',
        contact_number: 21973944958,
    },
    {
        contatc_name: 'patrik alfenas',
        contact_number: 21945678990,
    },
    {
        contatc_name: 'clarisse galvão',
        contact_number: 21948213498,
    },
    {
        contatc_name: 'jorge de souza',
        contact_number: 21988766134,
    },
]

    let find_button = document.getElementById('find')
    let resp = document.querySelector('h2')
    let person_name = document.getElementById('person-name')
    let creat_button_index = document.getElementById("create-contact-index")
    let back = document.getElementById('back')

    let create_name = document.getElementById('create-name')
    let create_number = document.getElementById('create-number')
    let create_contact_button = document.getElementById('crate-contact-button')

   

    const formatarTelefone = (tel) => {
  const cleaned = ('' + tel).replace(/\D/g, '');
  const match = cleaned.match(/^(\d{2})(\d{4,5})(\d{4})$/);
  
  if (match) {
    return `(${match[1]}) ${match[2]}-${match[3]}`;
  }
  return tel; // Retorna o original caso não corresponda
};

    if(find_button) {
        find_button.addEventListener('click', function(){
            for (let i = 0; i < contatcts_list.length; i++) {
                let name_show = contatcts_list[i].contatc_name.toLocaleLowerCase()
                let number_show = contatcts_list[i].contact_number

                if(name_show == person_name.value.toLocaleLowerCase()) {
                // resp.innerHTML = `${name_show}: ${number_show}`
                resp.innerHTML = `${name_show}: ${formatarTelefone(number_show)}`
                person_name.value = ""
                break
                } else {
                    resp.innerHTML = 'Contato não econtrado. Por favor, crie um contato a baixo!'
                }
            }
        })
    }

if(creat_button_index) {
    creat_button_index.addEventListener('click', function(){
        window.location.href = 'form.html'
    })
}

if(back) {
    back.addEventListener('click', function(){
        window.location.href = 'index.html'
    })
}


if (create_contact_button) {
    
    create_contact_button.addEventListener('click', function(){
        if (create_number.value.length == 9) {
        let new_contact = {
        contatc_name: create_name.value,
        contact_number: create_number.value,
        };

        contatcts_list.push(new_contact)
        console.log(contatcts_list)

        create_name.value = ""
        create_number.value = ""
    } else {
        alert('digite um numero de telefone no formato válido. sem o código de estado')
    }
    })

}

