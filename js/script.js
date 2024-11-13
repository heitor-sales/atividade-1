const usuarios = [
    {
     "nome": "Ana",
     "idade": 20,
     "cpf": "123.456.789-10"   
    },
    
    {
     "nome": "Carla",
     "idade": 25,
     "cpf": "987.654.321-00"   
    },
    
    {
     "nome": "Ana",
     "idade": 29,
     "cpf": "111.222.333-44"   
    }
]

const listaUsuariosElement = document.createElement('ul');
document.body.appendChild(listaUsuariosElement);

for (let usuario of usuarios) {
    inserirUsuarioNaLista(usuario);
}

function inserirUsuario() {
    const inputNomeElement = document.querySelector('#nome');
    const inputIdadeElement = document.querySelector('#idade');
    const inputCpfElement = document.querySelector('#cpf');

    const novoUsuario = {
        nome: inputNomeElement.value,
        idade: parseInt(inputIdadeElement.value),
        cpf: inputCpfElement.value
    };

    inserirUsuarioNaLista(novoUsuario);
}

function inserirUsuarioNaLista(usuario) {
    const liElement = document.createElement('li');

    const botaoRemoverElement = document.createElement('button');
    botaoRemoverElement.textContent = 'X';
    botaoRemoverElement.addEventListener('click', () => {
        liElement.remove();
    });

    const spanElement = document.createElement('span');
    spanElement.innerHTML = `
        <strong>Nome:</strong> ${usuario.nome}<br>
        <strong>Idade:</strong> ${usuario.idade}<br>
        <strong>CPF:</strong> ${usuario.cpf}
    `;

    spanElement.addEventListener('click', () => {
        const inputNome = document.createElement('input');
        inputNome.value = usuario.nome;

        const inputIdade = document.createElement('input');
        inputIdade.type = 'number';
        inputIdade.value = usuario.idade;

        const inputCpf = document.createElement('input');
        inputCpf.value = usuario.cpf;

        liElement.appendChild(inputNome);
        liElement.appendChild(inputIdade);
        liElement.appendChild(inputCpf);
        spanElement.remove();
    });

    liElement.appendChild(spanElement);
    liElement.appendChild(botaoRemoverElement);

    listaUsuariosElement.appendChild(liElement);
}




