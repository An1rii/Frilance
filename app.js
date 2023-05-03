"use strict"
document.querySelectorAll('nav a').forEach((link) => {
    link.addEventListener('click', (event) => {

        const sectionId = event.target.getAttribute('data-section');


        localStorage.setItem('selected_section', sectionId);
    });
});
document.addEventListener('DOMContentLoaded', () => {

    const selectedSection = localStorage.getItem('selected_section');


    if (selectedSection) {

        const sectionElement = document.querySelector(`#${selectedSection}`);

        if (sectionElement) {

            sectionElement.classList.add('open');
        }


        localStorage.removeItem('selected_section');
    }
});
