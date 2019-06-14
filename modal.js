document.getElementById("modal-btn").onclick = () => {
    let modalDiv = document.getElementById("modal");

    if (modalDiv.classList.contains("modal-hide")) {
        modalDiv.classList.remove("modal-hide");
        modalDiv.classList.add("modal-show");
        document.body.classList.add("is-blurred");
    } else {
        modalDiv.classList.remove("modal-show");
        modalDiv.classList.add("modal-hide");
        document.body.classList.remove("is-blurred");
    }
}