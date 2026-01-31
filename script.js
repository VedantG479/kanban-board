import { deleteTask } from "./data/tasks.js";
import { exportModal, prefillModal } from "./scripts/modal.js";
import { renderTasks } from "./scripts/render-tasks.js";

const addTaskBtn = document.querySelector('.add-task-btn')
const modalWindow = document.querySelector('.modal-backdrop')
const boardWindow = document.querySelector('.board-container')

renderTasks()
exportModal()

addTaskBtn.addEventListener('click', () => {
    modalWindow.classList.toggle('hidden')
})

boardWindow.addEventListener('click', (e) => {
    if(e.target.classList.contains('edit-btn')){
        modalWindow.classList.toggle('hidden')
        prefillModal(e.target.dataset.taskId)
    }
    else if(e.target.classList.contains('delete-btn')){
        deleteTask(e.target.dataset.taskId)
    }
    else{
        //drag - drop
        console.log('drag-drop')
    }
})