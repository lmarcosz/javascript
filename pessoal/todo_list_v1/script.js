var task_num = 0
var task_field = document.getElementById('task_field')



function adicionarTarefa(){
    task_num++

    let task_row = document.createElement('div')
    task_row.name = `tsk_${task_num}`
    task_field.appendChild(task_row)

    let check = document.createElement('input')
    check.type = "checkbox"
    task_row.appendChild(check)

    let description = document.createElement('input')
    description.type = "text"
    task_row.appendChild(description)

    let create = document.createElement('input')
    create.type = "button"
    create.value = "Create"
    create.onclick = `criarTarefa()`
    task_row.appendChild(create)
}

function criarTarefa(){
    window.alert('oooooo')

}

function removerTarefa(){

}