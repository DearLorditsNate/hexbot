let modalDiv = document.getElementById("modal");
let container = document.getElementById("container");

document.getElementById("modal-btn").onclick = () => {
    window.fetch("https://api.noopschallenge.com/hexbot")
    .then(response => {
        return response.json()
    })
    .then(responseJson => {
        let color = responseJson.colors[0].value;
        console.log(color);
        document.getElementById("modal-content").setAttribute("style", `background-color: ${color}`);
        modalDiv.classList.remove("modal-hide");
        modalDiv.classList.add("modal-show");
        container.classList.add("is-blurred");
        container.setAttribute("data-open-status", "isOpen");
    });
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