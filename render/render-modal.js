import { filtersList } from "../data/filters.js"

const modalTagsBox = document.querySelector('.tag-modal')

export function renderModal(){
    modalTagsBox.textContent = ''
    filtersList.forEach((filter) => {
        const option = document.createElement('option')
        option.dataset.id = filter.id
        option.textContent = filter.topic
        modalTagsBox.appendChild(option)
    })
}