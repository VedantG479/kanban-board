import { renderFilters } from "../render/render-filters.js"
import { renderTasks } from "../render/render-tasks.js"
import { createId } from "../utils.js"
import { deleteAllTasks } from "./tasks.js"

export let filtersList = JSON.parse(localStorage.getItem('filtersList')) || [{
    id: createId(),
    topic: 'No Tag',
    status: true
}]

export function addFilter(filter){
    filtersList.push({
        id: createId(),
        topic: filter, 
        status: true
    })
    saveToStorage()
}

export function removeFilter(filterToRemove){
    let newFiltersList = []
    let filterDelete
    filtersList.forEach((filter) => {
        if(filter.id != filterToRemove)    newFiltersList.push(filter)
        else    filterDelete = filter.topic
    })
    filtersList = newFiltersList
    deleteAllTasks(filterDelete)
    saveToStorage()
}

export function toggleActive(filterToToggle){
    filtersList.forEach((filter) => {
        if(filter.id == filterToToggle) filter.status = !filter.status
    })
    saveToStorage()
}

function saveToStorage(){
    localStorage.setItem('filtersList', JSON.stringify(filtersList))
    renderFilters()
    renderTasks()
}