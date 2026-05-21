const novatarefa = document.getElementById('novatarefa')
const excluir = document.getElementById('excluir')
const tarefas = document.getElementById('tarefas')
const cancelar = document.getElementById('cancelar')
const adicionar = document.getElementById('adicionar')
const text = document.getElementById('inp-tarefa')

novatarefa.addEventListener('click', function tarefaopen() {
    tarefas.style.display = 'block';
});

cancelar.addEventListener('click', function cancelartarefa() {
    tarefas.style.display = 'none'
});

adicionar.addEventListener('click', (e) => {
    const valor = text.value.trim();
    if (!valor) { alert('Digite uma tarefa'); text.focus(); return }

    let lista = document.getElementById('lista-tarefas');
    if (!lista) {
        lista = document.createElement('ul');
        lista.id = 'lista-tarefas';
        document.querySelector('.container').appendChild(lista);
    }

    const li = document.createElement('li');
    li.textContent = valor;
    lista.appendChild(li);

    text.value = '';
});