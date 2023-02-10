window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", (event) => {
    document.getElementById("body").setAttribute("data-bs-theme", event.matches ? "dark" : "light");
});