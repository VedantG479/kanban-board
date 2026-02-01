import { renderFilters } from "../render/render-filters.js"
import { renderTasks } from "../render/render-tasks.js"
import { createId } from "../utils.js"

export let filtersList = [{
    id: '3253wtesdeg35',
    topic: 'Design',
    status: true
},
{
    id: '42353steghset53',
    topic: 'Front-end',
    status: true
},
{
    id: 'sfr35364edyd',
    topic: 'UI',
    status: true
}]

export function addFilter(filter){
    filtersList.push({
        id: createId(),
        topic: filter, 
        status: true
    })
    renderFilters()
}

export function removeFilter(filterToRemove){
    let newFiltersList = []
    filtersList.forEach((filter) => {
        if(filter.id != filterToRemove)    newFiltersList.push(filter)
    })
    filtersList = newFiltersList
    renderFilters()
    renderTasks()
}

export function toggleActive(filterToToggle){
    filtersList.forEach((filter) => {
        if(filter.id == filterToToggle) filter.status = !filter.status
    })
    renderFilters()
}