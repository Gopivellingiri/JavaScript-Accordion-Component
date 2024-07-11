
    const accordionContent = document.querySelectorAll(".accordion-content");

accordionContent.forEach((item, index) => {
    const header = item.querySelector("header");
    const description = item.querySelector('.description');
    const icon = item.querySelector('i');

    header.addEventListener("click", () => {
        const isOpen = item.classList.toggle("open");
        icon.classList.replace(isOpen ? 'fa-plus' : 'fa-minus', isOpen ? 'fa-minus' : 'fa-plus');
        description.style.height = isOpen ? `${description.scrollHeight + 20}px` : '0px';

        // Close other accordion items
        if (isOpen) {
            closeOthers(index);
        }
    });
});

function closeOthers(currentIndex) {
    accordionContent.forEach((item, index) => {
        if (currentIndex !== index && item.classList.contains('open')) {
            item.classList.remove('open');
            item.querySelector('.description').style.height = '0px';
            item.querySelector('i').classList.replace('fa-minus', 'fa-plus');
        }
    });
}
