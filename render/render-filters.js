import { filtersList } from "../data/filters.js";

const tagFiltersDiv = document.querySelector('.tag-filters')

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

    const addTagButton = document.createElement('button')
    addTagButton.className = 'tag add-tag'
    addTagButton.textContent = '＋'
    tagFiltersDiv.appendChild(addTagButton)
}

export function renderFilterInputBox(){
    const input = document.createElement('input')
    input.type = 'text'
    input.className = 'tag tag-input'
    input.placeholder = 'New tag'
    input.autofocus = true

    tagFiltersDiv.appendChild(input)
}