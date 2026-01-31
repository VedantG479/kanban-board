import { filtersList } from "../data/filters.js"

const modalTagsBox = document.querySelector('.tag-modal')

export function renderModal(){
    let filtersHTML = ''
    filtersList.forEach((filter) => {
        filtersHTML += `<option data-id=${filter}>${filter}</option>`
    })
    modalTagsBox.innerHTML = filtersHTML
}