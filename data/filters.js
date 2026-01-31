import { renderFilters } from "../render/render-filters.js"

export let filtersList = ['Design', 'Front-end', 'UI']

export function addFilter(filter){
    filtersList.push(filter)
    renderFilters()
}

export function removeFilter(filterToRemove){
    let newFiltersList = []
    filtersList.forEach((filter) => {
        if(filter != filterToRemove)    newFiltersList.push(filter)
    })
    filtersList = newFiltersList
    renderFilters()
}