document.addEventListener('DOMContentLoaded', () => {
    const sidebar = document.getElementById('sidebar');
    const openBtn = document.getElementById('open_btn');
    const openBtnIcon = document.getElementById('open_btn_icon');
    let isResizing = false;
    const maxWidth = 150; // Defina a largura máxima que a barra lateral pode atingir

    sidebar.addEventListener('mousedown', (e) => {
        if (e.offsetX > sidebar.offsetWidth - 10) {
            isResizing = true;
            document.body.style.cursor = 'ew-resize';
        }
    });

    document.addEventListener('mousemove', (e) => {
        if (isResizing) {
            let newWidth = e.clientX;
            if (newWidth > 82 && newWidth <= maxWidth) {
                sidebar.style.minWidth = newWidth + 'px';
                if (newWidth >= 150) {
                    sidebar.classList.add('open-sidebar');
                } else {
                    sidebar.classList.remove('open-sidebar');
                }
            }
        }
    });

    document.addEventListener('mouseup', () => {
        if (isResizing) {
            isResizing = false;
            document.body.style.cursor = 'default';
        }
    });

    openBtn.addEventListener('click', () => {
        sidebar.classList.toggle('open-sidebar');
        if (sidebar.classList.contains('open-sidebar')) {
            sidebar.style.minWidth = '150px';
        } else {
            sidebar.style.minWidth = '82px';
        }
    });
});
