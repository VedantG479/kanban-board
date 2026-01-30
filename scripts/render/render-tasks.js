import { taskList } from "../../data/tasks.js"

const todoBoard = document.querySelector('.js-todo-board-content')
const inProgressBoard = document.querySelector('.js-in-progress-board-content')
const doneBoard = document.querySelector('.js-done-board-content')

const todoBoardCount = document.querySelector('.js-todo-board .count')
const inProgressBoardCount = document.querySelector('.js-in-progress-board .count')
const doneBoardCount = document.querySelector('.js-done-board .count')

export function renderTasks(){
    let htmlTodoContent = '', htmlInProgressContent = '', htmlDoneContent = ''
    let countTodoContent = 0, countInProgressContent = 0, countDoneContent = 0

    taskList.forEach((task) => {
        const {id, heading, details, tag, progress} = task
        if(progress == 'todo'){
            countTodoContent++
            htmlTodoContent += `<article class="task-card js-task-card-${id}">
                                    <h3>${heading}</h3>
                                    <p>${details}</p>
                                    <div class="task-footer">
                                        <span class="task-tag">${tag}</span>
                                        <div class="task-actions">
                                        <button data-task-id=${id}>✎</button>
                                        <button data-task-id=${id}>🗑️</button>
                                        </div>
                                    </div>
                                </article>`
        }
        else if(progress == 'in-progress'){
            countInProgressContent++
            htmlInProgressContent += `<article class="task-card js-task-card-${id}">
                                    <h3>${heading}</h3>
                                    <p>${details}</p>
                                    <div class="task-footer">
                                        <span class="task-tag">${tag}</span>
                                        <div class="task-actions">
                                        <button data-task-id=${id}>✎</button>
                                        <button data-task-id=${id}>🗑️</button>
                                        </div>
                                    </div>
                                </article>`
        }
        else{
            countDoneContent++
            htmlDoneContent += `<article class="task-card js-task-card-${id}">
                                    <h3>${heading}</h3>
                                    <p>${details}</p>
                                    <div class="task-footer">
                                        <span class="task-tag">${tag}</span>
                                        <div class="task-actions">
                                        <button data-task-id=${id}>✎</button>
                                        <button data-task-id=${id}>🗑️</button>
                                        </div>
                                    </div>
                                </article>`
        }
    })

    todoBoard.innerHTML = htmlTodoContent
    inProgressBoard.innerHTML = htmlInProgressContent
    doneBoard.innerHTML = htmlDoneContent

    todoBoardCount.innerText = countTodoContent
    inProgressBoardCount.innerText = countInProgressContent
    doneBoardCount.innerText = countDoneContent
}