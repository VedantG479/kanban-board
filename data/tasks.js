import { renderTasks } from "../render/render-tasks.js";
import { createId } from "../utils.js";

export let taskList = JSON.parse(localStorage.getItem('taskList')) || []

export function addTask(task){
    taskList.push({
        id: createId(),
        ...task,
        progress: 'todo'
    })
    saveToStorage()
}

export function deleteTask(taskId){
    let newTaskList = []
    taskList.forEach((task) => {
        if(task.id != taskId)   newTaskList.push(task)
    })
    taskList = newTaskList
    saveToStorage()
}

export function deleteAllTasks(filter){
    let newTaskList = []
    taskList.forEach((task) => {
        if(task.tag != filter)  newTaskList.push(task)
    })
    taskList = newTaskList
    saveToStorage()
}

export function editTask(taskId, task){
    let matchingTask = getMatchingTask(taskId)
    const {heading, details, tag} = task

    matchingTask.heading = heading
    matchingTask.details = details
    matchingTask.tag = tag

    let newTaskList = taskList.map((task) => {
        if(task.id == taskId)   return matchingTask
        return task
    })
    taskList = newTaskList
    saveToStorage()
}

export function changeProgress(taskId, newProgress){
    taskList.forEach((task) => {
        if(task.id == taskId)   task.progress = newProgress
    })
    saveToStorage()
}

export function getMatchingTask(taskId){
    let matchingTask 
    taskList.forEach((task) => {
        if(task.id == taskId)   matchingTask = task
    })
    return matchingTask
}

function saveToStorage(){
    localStorage.setItem('taskList', JSON.stringify(taskList))
    renderTasks()
}