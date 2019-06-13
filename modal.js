document.getElementById("modal-btn").onclick = () => {
    let modalDiv = document.getElementById("modal");

    if (modalDiv.getAttribute("style") === "visibility: hidden") {
        modalDiv.setAttribute("style", "visibility: visible");
    } else {
        modalDiv.setAttribute("style", "visibility: hidden");
    }
}