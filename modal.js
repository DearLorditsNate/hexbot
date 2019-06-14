document.getElementById("modal-btn").onclick = () => {
    let modalDiv = document.getElementById("modal");
    let container = document.getElementById("container");

    if (modalDiv.classList.contains("modal-hide")) {
        modalDiv.classList.remove("modal-hide");
        modalDiv.classList.add("modal-show");
        container.classList.add("is-blurred");
    } else {
        modalDiv.classList.remove("modal-show");
        modalDiv.classList.add("modal-hide");
        container.classList.remove("is-blurred");
    }
}