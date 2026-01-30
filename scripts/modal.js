import { addTask } from "../data/tasks.js"

const modalWindow = document.querySelector('.modal-backdrop')
const modalWindowSaveBtn = document.querySelector('.save-task')
const modalWindowDiscardBtn = document.querySelector('.discard-task')
const modalWindowHeading = document.querySelector('.heading-modal')
const modalWindowDesc = document.querySelector('.desc-modal')
const modalWindowTag = document.querySelector('.tag-modal')

export function exportModal(){
    modalWindowSaveBtn.addEventListener('click', () => {
        const heading = modalWindowHeading.value
        const details = modalWindowDesc.value
        const tag = modalWindowTag.value

        console.log(heading, details, tag)
        modalWindow.classList.toggle('hidden')  
        if((!heading || !heading.trim()) && (!details || !details.trim()))  return;
        addTask({heading, details, tag})
    })

    modalWindowDiscardBtn.addEventListener('click', () => {
        modalWindowHeading.value = ''
        modalWindowDesc.value = ''
        modalWindow.classList.toggle('hidden')
    })
}
