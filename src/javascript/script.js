document.addEventListener('DOMContentLoaded', () => {
    const sidebar = document.getElementById('sidebar');
    const openBtn = document.getElementById('open_btn');
    const maxWidth = 230; // Defina a largura máxima que a barra lateral pode atingir

    const startResizing = (e) => {
        let clientX = e.clientX || e.touches[0].clientX;
        // Se a largura atual é menor que a máxima e o clique é próximo à borda, abre completamente a sidebar
        if (sidebar.offsetWidth < maxWidth) {
            sidebar.style.minWidth = maxWidth + 'px';
            sidebar.classList.add('open-sidebar');
        }
    };

    const stopResizing = () => {
        document.body.style.cursor = 'default';
    };

    sidebar.addEventListener('mousedown', startResizing);
    sidebar.addEventListener('touchstart', startResizing);

    document.addEventListener('mouseup', stopResizing);
    document.addEventListener('touchend', stopResizing);

    openBtn.addEventListener('click', () => {
        sidebar.classList.toggle('open-sidebar');
        if (sidebar.classList.contains('open-sidebar')) {
            sidebar.style.minWidth = '150px';
        } else {
            sidebar.style.minWidth = '82px';
        }
    });
});

