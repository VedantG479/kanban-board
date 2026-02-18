import { renderTasks } from "../render/render-tasks.js";
import { createId } from "../utils.js";

export let taskList = JSON.parse(localStorage.getItem('taskList')) || []
const parsedArray = JSON.parse(localStorage.getItem('map'))
export let filterTaskMap

if(parsedArray) filterTaskMap = new Map(parsedArray)
else    filterTaskMap = new Map()

export function addTask(task){
    const taskToAdd = {
        id: createId(),
        ...task,
        progress: 'todo'
    }
    taskList.push(taskToAdd)

    const filter = task.tag
    if(filterTaskMap.has(filter))   filterTaskMap.get(filter).push(taskToAdd)
    else    filterTaskMap.set(filter, [taskToAdd])

    saveToStorage()
}

export function deleteTask(taskId){
    let newTaskList = []
    let filter
    taskList.forEach((task) => {
        if(task.id != taskId)   newTaskList.push(task)
        else    filter = task.tag
    })

    taskList = newTaskList

    let arr = filterTaskMap.get(filter)
    arr.forEach((task, index) => {
        if(task.id == taskId)   arr.splice(index, 1)
    })
    if(arr.length == 0) filterTaskMap.delete(filter)

    saveToStorage()
}

export function deleteAllTasks(filter){
    let newTaskList = []
    taskList.forEach((task) => {
        if(task.tag != filter)  newTaskList.push(task)
    })

    filterTaskMap.delete(filter)
    taskList = newTaskList
    saveToStorage()
}

export function editTask(taskId, task){
    let matchingTask = getMatchingTask(taskId)
    const {heading, details, tag} = task

    let prevTag = matchingTask.tag
    matchingTask.heading = heading
    matchingTask.details = details
    matchingTask.tag = tag

    let newTaskList = taskList.map((task) => {
        if(task.id == taskId)   return matchingTask
        return task
    })

    if(prevTag === tag){
        filterTaskMap.get(prevTag).forEach((task, index) => {
            if(task.id == taskId)   filterTaskMap.get(prevTag)[index] = matchingTask
        })
    }
    else{
        let arr = filterTaskMap.get(prevTag)
        arr.forEach((task, index) => {
            if(task.id == taskId)   arr.splice(index, 1)
        })
        if(arr.length == 0) filterTaskMap.delete(prevTag)
        
        if(filterTaskMap.has(tag))   filterTaskMap.get(tag).push(matchingTask)
        else    filterTaskMap.set(tag, [matchingTask])
    }
    
    taskList = newTaskList
    saveToStorage()
}

export function changeProgress(taskId, newProgress){
    let filter 
    taskList.forEach((task) => {
        if(task.id == taskId){
            task.progress = newProgress
            filter = task.tag
        }
    })

    let arr = filterTaskMap.get(filter)
    arr.forEach((task, index) => {
        if(task.id == taskId)       filterTaskMap.get(filter)[index].progress = newProgress
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
    localStorage.setItem('map', JSON.stringify(Array.from(filterTaskMap.entries())))
    renderTasks()
}