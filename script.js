import { removeFilter, toggleActive } from "./data/filters.js";
import { deleteTask } from "./data/tasks.js";
import { applyListenersModal, prefillModal } from "./modal.js";
import { addFilterInputBox, saveFilter, renderFilters } from "./render/render-filters.js";
import { renderTasks } from "./render/render-tasks.js";

const addTaskBtn = document.querySelector('.add-task-btn')
const modalWindow = document.querySelector('.modal-backdrop')
let isAddingFilter = false

renderTasks()
renderFilters()
applyListenersModal()

addTaskBtn.addEventListener('click', () => {
    modalWindow.classList.toggle('hidden')
})

document.body.addEventListener('click', (e) => {
    if(e.target.classList.contains('edit-btn')){
        modalWindow.classList.toggle('hidden')
        prefillModal(e.target.dataset.taskId)
    }
    else if(e.target.classList.contains('delete-btn')){
        deleteTask(e.target.dataset.taskId)
    }
    else if(e.target.classList.contains('add-tag')){
        isAddingFilter = true
        addFilterInputBox()
    }
    else if(e.target.classList.contains('tag-filter')){
        toggleActive(e.target.dataset.id)
        renderTasks()
    }
    else if(e.target.classList.contains('task-card')){
        //drag - drop
        console.log('drag-drop')
    }
    else if(e.target.classList.contains('tag-remove')){
        removeFilter(e.target.dataset.id) 
    }
    else if(isAddingFilter && !e.target.classList.contains('tag-input')){  
        saveFilter()
        isAddingFilter = false
    }
})

document.body.addEventListener('keydown', (e) => {
    if(e.key == 'Enter' && isAddingFilter){
        saveFilter()
        isAddingFilter = false
    }
})