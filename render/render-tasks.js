import { filtersList } from "../data/filters.js"
import { filterTaskMap, taskList } from "../data/tasks.js"

const todoBoard = document.querySelector('.js-todo-board-content')
const inProgressBoard = document.querySelector('.js-in-progress-board-content')
const doneBoard = document.querySelector('.js-done-board-content')

const todoBoardCount = document.querySelector('.js-todo-board .count')
const inProgressBoardCount = document.querySelector('.js-in-progress-board .count')
const doneBoardCount = document.querySelector('.js-done-board .count')

export function renderTasks(){
    console.log(filterTaskMap)
    todoBoard.textContent = ''
    inProgressBoard.textContent = ''
    doneBoard.textContent = ''

    let countTodoContent = 0
    let countInProgressContent = 0
    let countDoneContent = 0

    taskList.forEach((task) => {
        const { id, heading, details, tag, progress } = task

        filtersList.forEach((filter) => {
            if (filter.topic === tag && filter.status) {
                const article = document.createElement('article')
                article.className = 'task-card'
                article.draggable = true
                article.dataset.id = id

                const h3 = document.createElement('h3')
                h3.textContent = heading

                const p = document.createElement('p')
                p.textContent = details

                const footer = document.createElement('div')
                footer.className = 'task-footer'

                if (tag !== 'No Tag') {
                    const tagSpan = document.createElement('span')
                    tagSpan.className = 'task-tag'
                    tagSpan.textContent = tag
                    footer.appendChild(tagSpan)
                }

                const actions = document.createElement('div')
                actions.className = 'task-actions'

                const editBtn = document.createElement('button')
                editBtn.className = 'edit-btn'
                editBtn.dataset.taskId = id
                editBtn.textContent = '✎'

                const deleteBtn = document.createElement('button')
                deleteBtn.className = 'delete-btn'
                deleteBtn.dataset.taskId = id
                deleteBtn.textContent = '🗑️'

                actions.append(editBtn, deleteBtn)
                footer.appendChild(actions)

                article.append(h3, p, footer)

                if (progress === 'todo') {
                    countTodoContent++
                    todoBoard.appendChild(article)
                } else if (progress === 'in-progress') {
                    countInProgressContent++
                    inProgressBoard.appendChild(article)
                } else {
                    countDoneContent++
                    doneBoard.appendChild(article)
                }
            }
        })
    })

    todoBoardCount.innerText = countTodoContent
    inProgressBoardCount.innerText = countInProgressContent
    doneBoardCount.innerText = countDoneContent
}