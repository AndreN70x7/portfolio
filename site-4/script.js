const inputTarefa = document.getElementById("input-tarefa");
const btnAdd = document.getElementById("btn-adicionar");
const listaTarefas = document.getElementById("lista-tarefas");

btnAdd.addEventListener('click' , function(){

    if (inputTarefa.value != ""){

        const novoItem = document.createElement('li');
        novoItem.textContent = inputTarefa.value;
        
        listaTarefas.appendChild(novoItem);

        inputTarefa.value = "";
        inputTarefa.focus();
    }
})