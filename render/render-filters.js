import { addFilter, filtersList } from "../data/filters.js";
import { renderModal } from "./render-modal.js";

const tagFiltersDiv = document.querySelector('.tag-filters')
let isGettingAdded = false

export function renderFilters(){
    let filterTagHtmlContent = ''
    filtersList.forEach((filter) => {
        filterTagHtmlContent += `<button class="tag tag-filter ${filter.status ? 'active' : ''}" data-id="${filter.id}">
                                    ${filter.topic}
                                    <span class="tag-remove" data-id="${filter.id}">×</span>
                                </button>`
    })
    if(isGettingAdded){
        filterTagHtmlContent += `<input
                                    type="text"
                                    class="tag tag-input"
                                    placeholder="New tag"
                                    autofocus
                                />`
    }
    filterTagHtmlContent += `<button class="tag add-tag">＋</button>`
    tagFiltersDiv.innerHTML = filterTagHtmlContent

    renderModal()
}

export function addFilterInputBox(){
    isGettingAdded = true
    renderFilters()
}

export function saveFilter(){
    let inputFilter = document.querySelector('.tag-input').value
    isGettingAdded = false
    if(!inputFilter || !inputFilter.trim()){
        renderFilters()
        return
    }

    document.querySelector('.tag-input').value = ''
    addFilter(inputFilter)
}   