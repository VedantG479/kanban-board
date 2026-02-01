import { addFilter, filtersList } from "../data/filters.js";
import { renderModal } from "./render-modal.js";

const tagFiltersDiv = document.querySelector('.tag-filters')
let isGettingAdded = false

export function renderFilters(){
    tagFiltersDiv.textContent = ''

    filtersList.forEach((filter) => {
        if (filter.topic !== 'No Tag') {
            const button = document.createElement('button')
            button.className = `tag tag-filter${filter.status ? ' active' : ''}`
            button.dataset.id = filter.id

            const textNode = document.createTextNode(filter.topic)
            button.appendChild(textNode)

            const removeSpan = document.createElement('span')
            removeSpan.className = 'tag-remove'
            removeSpan.dataset.id = filter.id
            removeSpan.textContent = '×'

            button.appendChild(removeSpan)
            tagFiltersDiv.appendChild(button)
        }
    })

    if (isGettingAdded) {
        const input = document.createElement('input')
        input.type = 'text'
        input.className = 'tag tag-input'
        input.placeholder = 'New tag'
        input.autofocus = true

        tagFiltersDiv.appendChild(input)
    }

    const addTagButton = document.createElement('button')
    addTagButton.className = 'tag add-tag'
    addTagButton.textContent = '＋'
    tagFiltersDiv.appendChild(addTagButton)

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