document.addEventListener('DOMContentLoaded', () => {
    const sidebar = document.getElementById('sidebar');
    const openBtn = document.getElementById('open_btn');
    const openBtnIcon = document.getElementById('open_btn_icon');
    let isResizing = false;
    const maxWidth = 150; // Defina a largura máxima que a barra lateral pode atingir

    const startResizing = (e) => {
        let clientX = e.clientX || e.touches[0].clientX;
        if (clientX > sidebar.offsetWidth - 10) {
            isResizing = true;
            document.body.style.cursor = 'ew-resize';
        }
    };

    const resizeSidebar = (e) => {
        if (isResizing) {
            let clientX = e.clientX || e.touches[0].clientX;
            let newWidth = clientX;
            if (newWidth > 82 && newWidth <= maxWidth) {
                sidebar.style.minWidth = newWidth + 'px';
                if (newWidth >= 150) {
                    sidebar.classList.add('open-sidebar');
                } else {
                    sidebar.classList.remove('open-sidebar');
                }
            }
        }
    };

    const stopResizing = () => {
        if (isResizing) {
            isResizing = false;
            document.body.style.cursor = 'default';
        }
    };

    sidebar.addEventListener('mousedown', startResizing);
    sidebar.addEventListener('touchstart', startResizing);

    document.addEventListener('mousemove', resizeSidebar);
    document.addEventListener('touchmove', resizeSidebar);

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
