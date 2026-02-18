import { addTask, editTask, getMatchingTask } from "./data/tasks.js"

const modalWindow = document.querySelector('.modal-backdrop')
const modalWindowSaveBtn = document.querySelector('.save-task')
const modalWindowDiscardBtn = document.querySelector('.discard-task')
const modalWindowHeading = document.querySelector('.heading-modal')
const modalWindowDesc = document.querySelector('.desc-modal')
const modalWindowTag = document.querySelector('.tag-modal')
let editingTaskId

modalWindowSaveBtn.addEventListener('click', () => {
    const heading = modalWindowHeading.value
    const details = modalWindowDesc.value
    const tag = modalWindowTag.value

    if((!heading || !heading.trim()) && (!details || !details.trim()))  return;
    if(editingTaskId){
        editTask(editingTaskId, {heading, details, tag})
        editingTaskId = null
    }
    else    addTask({heading, details, tag})

    closeModal()
})

modalWindowDiscardBtn.addEventListener('click', () => {
    closeModal()
})

export function prefillModal(taskId){
    editingTaskId = taskId
    const {heading, details, tag} = getMatchingTask(taskId)
    modalWindowHeading.value = heading
    modalWindowDesc.value = details
    modalWindowTag.value = tag
}

function closeModal(){
    modalWindowHeading.value = ''
    modalWindowDesc.value = ''
    modalWindow.classList.toggle('hidden')
}