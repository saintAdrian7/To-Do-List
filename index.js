const inputTask = document.getElementById("input-task")
const addTask = document.getElementById("add-task")
const taskContainer = document.getElementById("task-container")

addTask.addEventListener('click',function(){
    let task = document.createElement('div')
    task.classList.add('task')
    let Li = document.createElement('li')
    Li.innerText = `${inputTask.value}`;
    task.appendChild(Li);

    let checkButton = document.createElement('button')
    checkButton.classList.add('check-btn')
    checkButton.innerHTML = `<i class="fas fa-check"></i>`;
    task.appendChild(checkButton);

    let deleteButton = document.createElement('button')
    deleteButton.classList.add('delete-btn')
    deleteButton.innerHTML = `<i class="fas fa-trash"></i>`;
    task.appendChild(deleteButton);

    if(inputTask.value === ''){
        alert("Please enter a Task")
    }else{
        taskContainer.appendChild(task);
    }
    inputTask.value = ''
    
    checkButton.addEventListener('click',function(){
        Li.style.textDecoration ='line-through'
    })

    deleteButton.addEventListener('click', function(e){
        let Target = e.target

        Target.parentElement.remove();
    } )

})