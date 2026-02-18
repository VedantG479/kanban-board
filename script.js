import { addFilter, removeFilter, toggleActive } from "./data/filters.js";
import { changeProgress, deleteTask } from "./data/tasks.js";
import { prefillModal } from "./modal.js";
import { renderFilterInputBox, renderFilters } from "./render/render-filters.js";
import { renderModal } from "./render/render-modal.js";
import { renderTasks } from "./render/render-tasks.js";

const addTaskBtn = document.querySelector('.add-task-btn')
const modalWindow = document.querySelector('.modal-backdrop')
let isAddingFilter = false, draggedTask = null
let prevClosestBoard = null, closestBoard = null

renderTasks()
renderFilters()
renderModal()

document.body.addEventListener('click', (e) => {
    if(e.target == addTaskBtn)   modalWindow.classList.toggle('hidden')
    else if(e.target.classList.contains('edit-btn')){
        modalWindow.classList.toggle('hidden')
        prefillModal(e.target.dataset.taskId)
    }
    else if(e.target.classList.contains('delete-btn')){
        deleteTask(e.target.dataset.taskId)
    }
    else if(e.target.classList.contains('add-tag')){
        isAddingFilter = true
        renderFilterInputBox()
    }
    else if(e.target.classList.contains('tag-filter')){
        toggleActive(e.target.dataset.id)
    }
    else if(e.target.classList.contains('tag-remove')){
        removeFilter(e.target.dataset.id) 
    }
    else if(isAddingFilter && !e.target.classList.contains('tag-input'))    saveFilter()
})

document.body.addEventListener('keydown', (e) => {
    if(e.key == 'Enter' && isAddingFilter)  saveFilter()
})

function saveFilter(){
    isAddingFilter = false
    let inputFilter = document.querySelector('.tag-input').value
    if(!inputFilter || !inputFilter.trim()){
        renderFilters()
        return
    }
    document.querySelector('.tag-input').value = ''
    addFilter(inputFilter)
}

document.addEventListener('dragstart', (e) => {
    if (e.target.classList.contains('task-card')) {
        draggedTask = e.target;
        e.target.classList.add('dragging');
    }
});

document.addEventListener('dragover', (e) => {
    if(!cleanCSS(e))    return
    closestBoard.classList.add('drag-over')
});

document.addEventListener('drop', (e) => {
    if(!cleanCSS(e))    return
    changeProgress(draggedTask.dataset.id, closestBoard.dataset.statusId)
});

document.addEventListener('dragend', () => {
    if(draggedTask){
        draggedTask.classList.remove('dragging')
        draggedTask = null;
    }
    if(closestBoard)    closestBoard.classList.remove('drag-over')
});

function cleanCSS(e){
    prevClosestBoard = closestBoard
    if(prevClosestBoard)    prevClosestBoard.classList.remove('drag-over')

    closestBoard = e.target.closest('.board-content')
    if(!closestBoard)   return false

    e.preventDefault()
    return true
}