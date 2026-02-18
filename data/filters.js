import { renderFilters } from "../render/render-filters.js"
import { renderModal } from "../render/render-modal.js"
import { renderTasks } from "../render/render-tasks.js"
import { createId } from "../utils.js"
import { deleteAllTasks } from "./tasks.js"

export let filtersList = JSON.parse(localStorage.getItem('filtersList')) || [{
    id: createId(),
    topic: 'No Tag',
    status: true
}]
export let activeFilters = JSON.parse(localStorage.getItem('activeFilters')) || ["No Tag"]

export function addFilter(filter){
    filtersList.push({
        id: createId(),
        topic: filter, 
        status: true
    })
    activeFilters.push(filter)
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

    activeFilters.forEach((filter, index) => {
        if(filter == filterDelete)  activeFilters.splice(index, 1)
    })
    deleteAllTasks(filterDelete)
    saveToStorage()
}

export function toggleActive(filterToToggle){
    let filterToggle, status
    filtersList.forEach((filter) => {
        if(filter.id == filterToToggle){
            filter.status = !filter.status
            filterToggle = filter.topic
            status = filter.status
        }
    })

    if(status)  activeFilters.push(filterToggle)
    else{
        activeFilters.forEach((filter, index) => {
            if(filter == filterToggle)  activeFilters.splice(index, 1)
        })
    }
    saveToStorage()
}

function saveToStorage(){
    localStorage.setItem('filtersList', JSON.stringify(filtersList))
    localStorage.setItem('activeFilters', JSON.stringify(activeFilters))
    renderFilters()
    renderTasks()
    renderModal()
}