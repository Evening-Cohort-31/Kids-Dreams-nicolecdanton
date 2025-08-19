import { getCelebrities } from "./database.js"

const celebrities = getCelebrities()

export const Celebrities = () => {
    let html = "<ol>"

    for (const celebrity of celebrities) {
        html += `<li 
                    data-id="${celebrity.id}" 
                    data-type="celebrity"
                    data-sport="${celebrity.sport}"
                    data-email="${celebrity.email}"
                    data-name="${celebrity.name}">
                    ${celebrity.name}
                </li>`
    }

    html += "</ol>"
    return html
}


document.addEventListener(
    "click",
    (clickEvent) => {
        const celebClicked = clickEvent.target

        if (celebClicked.dataset.type === "celebrity") {
            window.alert( `${celebClicked.dataset.name} is a ${celebClicked.dataset.sport} star`)
        }
    }
)