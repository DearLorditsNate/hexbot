let modalDiv = document.getElementById("modal");
let container = document.getElementById("container");

document.getElementById("modal-btn").onclick = () => {
    modalDiv.classList.remove("modal-hide");
    modalDiv.classList.add("modal-show");
    container.classList.add("is-blurred");
    container.setAttribute("data-open-status", "isOpen");
}

document.getElementById("close-btn").onclick = () => {
    modalDiv.classList.remove("modal-show");
    modalDiv.classList.add("modal-hide");
    container.classList.remove("is-blurred");
    container.setAttribute("data-open-status", "isClosed");
}

window.onclick = function(e) {
    if (e.target == modalDiv) {
        modalDiv.classList.remove("modal-show");
        modalDiv.classList.add("modal-hide");
        container.classList.remove("is-blurred");
        container.setAttribute("data-open-status", "isClosed");
    }
}