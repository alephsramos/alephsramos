// Função para carregar HTML de outro arquivo
function loadHTML(file, elementId) {
    fetch(file)
        .then(response => response.text())
        .then(data => {
            document.getElementById(elementId).innerHTML = data;
        });
}

// Função para carregar CSS e JS de includes.html
function loadIncludes(file) {
    fetch(file)
        .then(response => response.text())
        .then(data => {
            const includesDiv = document.createElement('div');
            includesDiv.innerHTML = data;
            document.head.appendChild(includesDiv);
        });
}

// Carregar componentes HTML
document.addEventListener("DOMContentLoaded", function() {
    loadHTML('includes/header.html', 'header-placeholder');
    loadHTML('includes/footer.html', 'footer-placeholder');
});
