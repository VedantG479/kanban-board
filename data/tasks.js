import { renderTasks } from "../render/render-tasks.js";
import { createId } from "../utils.js";

export let taskList = [{
    id: '34132fbwahr32q2',
    heading: 'Adding new color tokens',
    details: 'Define semantic color tokens for the design system.',
    tag: 'Design',
    progress:'todo'
}, {
    id: '5235bjsfbu3442',
    heading: 'Wireframe login page',
    details: 'Create low-fidelity wireframes for auth screens.',
    tag: 'Design',
    progress:'in-progress'
}, {
    id: '34235gjdfg935',
    heading: 'Present form designs',
    details: 'Final stakeholder review completed.',
    tag: 'Front-end',
    progress:'done'
}, {
    id: 'gbeiwbt4fw3523',
    heading: 'Wireframe login page',
    details: 'Create low-fidelity wireframes for auth screens.',
    tag: 'Front-end',
    progress:'in-progress'
}, {
    id: 'g4h64ehierh23',
    heading: 'Present form designs',
    details: 'Final stakeholder review completed.',
    tag: 'Design',
    progress:'done'
}]

export function addTask(task){
    taskList.push({
        id: createId(),
        ...task,
        progress: 'todo'
    })
    renderTasks()
}

export function deleteTask(taskId){
    let newTaskList = []
    taskList.forEach((task) => {
        if(task.id != taskId)   newTaskList.push(task)
    })
    taskList = newTaskList
    renderTasks()
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
    renderTasks()
}

export function changeProgress(taskId, newProgress){
    //change progress
    renderTasks()
}

export function getMatchingTask(taskId){
    let matchingTask 
    taskList.forEach((task) => {
        if(task.id == taskId)   matchingTask = task
    })
    return matchingTask
}