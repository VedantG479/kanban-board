import { exportModal } from "./scripts/modal.js";
import { renderTasks } from "./scripts/render-tasks.js";

const addTaskBtn = document.querySelector('.add-task-btn')
const modalWindow = document.querySelector('.modal-backdrop')

renderTasks()
exportModal()

addTaskBtn.addEventListener('click', () => {
    modalWindow.classList.toggle('hidden')
})
