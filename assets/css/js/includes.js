// Função para carregar HTML de outro arquivo
function loadHTML(file, elementId) {
    fetch(file)
        .then(response => response.text())
        .then(data => {
            document.getElementById(elementId).innerHTML = data;
        });
}

// Carregar componentes HTML
document.addEventListener("DOMContentLoaded", function() {
    loadHTML('includes/header.html', 'header-placeholder');
    loadHTML('includes/footer.html', 'footer-placeholder');
});
