import { getChildren } from "./database.js"

const children = getChildren()

export const Kids = () => {
    let html = "<ol>"

    for (const child of children) {
        html += `<li data-id="${child.id}" 
                    data-type="child" 
                    data-wish="${child.wish}"
                    data-name="${child.name}">
                    ${child.name}
                    </li>`
    }

    html += "</ol>"
    return html
}

document.addEventListener(
    "click",
    (clickEvent) => {
        const kidClicked = clickEvent.target

        if (kidClicked.dataset.type === "child") {
            window.alert (`${kidClicked.dataset.name} wish is ${kidClicked.dataset.wish}`)
        }
    }
)