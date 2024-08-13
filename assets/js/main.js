document.querySelectorAll('.websites-item').forEach(item => {
    item.addEventListener('mouseenter', () => {
        document.querySelectorAll('.websites-item').forEach(i => {
            i.classList.add('inactive');
        });
        item.classList.remove('inactive');
        item.classList.add('active');
    });

    item.addEventListener('mouseleave', () => {
        document.querySelectorAll('.websites-item').forEach(i => {
            i.classList.remove('inactive');
        });
        item.classList.remove('active');
    });
});

function updateWebsiteCounter() {
    const websiteElements = document.querySelectorAll('#website_counter');
    document.getElementById('num_websites').textContent = "Total: " + websiteElements.length;
}

updateWebsiteCounter();



