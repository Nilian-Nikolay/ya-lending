document.addEventListener('DOMContentLoaded', function() {
    const prevButton = document.querySelector('.Participants-navigation-button.prev');
    const nextButton = document.querySelector('.Participants-navigation-button.next');
    const pages = document.querySelectorAll('.Participants-page');
    const currentPageSpan = document.getElementById('current-page');
    const totalParticipantsSpan = document.querySelector('.Participants-navigation-text');
    let currentPage = 0;

    const participantsPerPage = 3;
    const totalParticipants = pages.length * participantsPerPage;

    function updatePageDisplay(pageIndex) {
        const startParticipant = pageIndex * participantsPerPage + 1;
        const endParticipant = Math.min((pageIndex + 1) * participantsPerPage, totalParticipants);
        totalParticipantsSpan.textContent = `${endParticipant}/${totalParticipants}`;
    }

    function showPage(pageIndex) {
        if (pageIndex < 0) {
            pageIndex = pages.length - 1;
        } else if (pageIndex >= pages.length) {
            pageIndex = 0;
        }

        pages.forEach((page, index) => {
            if (index === pageIndex) {
                page.classList.add('active');
            } else {
                page.classList.remove('active');
            }
        });
        updatePageDisplay(pageIndex);
        currentPage = pageIndex;
    }

    prevButton.addEventListener('click', function() {
        showPage(currentPage - 1);
    });

    nextButton.addEventListener('click', function() {
        showPage(currentPage + 1);
    });

    // Инициализация отображения
    updatePageDisplay(0);
});