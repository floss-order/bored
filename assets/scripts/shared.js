export function appendTo(domElement, child) {
    return domElement.appendChild(child)
}

export function createDOMElement(domElement) {
    return document.createElement(domElement)
}

export function addClass(domElement, className) {
    domElement.classList.add(className)
    return domElement
}

export function setText(domElement, text) {
    domElement.textContent = text
    return domElement
}