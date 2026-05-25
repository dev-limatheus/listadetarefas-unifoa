botao_novatarefa = document.getElementById('novatarefa')
tarefas = document.getElementById('tarefas')
adicionar = document.getElementById('adicionar')
cancelar = document.getElementById('cancelar')
texto = document.getElementById('inp-tarefa')
lista = document.getElementById('lista')


function nova_tarefa() {
    console.log('clicou')
    tarefas.style.display = 'block'
    botao_novatarefa.style.display = 'none'
}

function adicionar_tarefa() {
    const valor = texto.value;
    if (!valor || valor.trim() === '') {
        alert('Digite sua tarefa');
        return;
    } else {
        const novaTarefa = document.createElement('li');
        novaTarefa.textContent = valor.trim();

        const botaoExcluir = document.createElement('button');
        botaoExcluir.textContent = 'X';

        
        novaTarefa.addEventListener('click', () => {
            novaTarefa.classList.toggle('concluida');
        });
        
        lista.appendChild(novaTarefa);
        novaTarefa.appendChild(botaoExcluir);
        lista.style.display = 'block';

        botaoExcluir.addEventListener('click', () => {
            novaTarefa.remove()
        });
        
        texto.value = '';
    }
}

function cancelar_tarefa() {
    tarefas.style.display = 'none'
    botao_novatarefa.style.display = 'block'
}