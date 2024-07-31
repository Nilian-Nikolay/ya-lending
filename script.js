document.addEventListener('DOMContentLoaded', function() {
    const carouselContainer = document.querySelector('.Participants-carousel');
    const prevButton = document.querySelector('.Participants-navigation-button.prev');
    const nextButton = document.querySelector('.Participants-navigation-button.next');
    let pages = document.querySelectorAll('.Participants-page');
    const totalParticipantsSpan = document.querySelector('.Participants-navigation-text');
    let currentPage = 0;

    let participantsPerPage = window.innerWidth <= 440 ? 1 : 3;
    let totalParticipants = pages.length * participantsPerPage;

    function createPages() {
        const participants = document.querySelectorAll('.Participants-human');
        const numPages = Math.ceil(participants.length / participantsPerPage);
        carouselContainer.innerHTML = ''; 
    
        for (let i = 0; i < numPages; i++) {
            const page = document.createElement('div');
            page.className = 'Participants-page';
            for (let j = 0; j < participantsPerPage; j++) {
                const index = i * participantsPerPage + j;
                if (index < participants.length) {
                    page.appendChild(participants[index]);
                }
            }
            carouselContainer.appendChild(page);
        }
        pages = document.querySelectorAll('.Participants-page'); 
        showPage(0); 
    }

    function updatePageDisplay(pageIndex) {
        
        const totalPages = pages.length;
        totalParticipantsSpan.textContent = `${pageIndex + 1}/${totalPages}`;
    }

    function showPage(pageIndex) {
        if (pageIndex < 0) {
            pageIndex = pages.length - 1;
        } else if (pageIndex >= pages.length) {
            pageIndex = 0;
        }

        pages.forEach((page, index) => {
            page.classList.toggle('active', index === pageIndex);
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

    window.addEventListener('resize', function() {
        participantsPerPage = window.innerWidth <= 440 ? 1 : 3;
        createPages(); 
    });

    createPages(); 
});





document.addEventListener('DOMContentLoaded', function() {
    const stageCards = document.querySelectorAll('.stage-card');
    const prevButton = document.querySelector('.stage-prev');
    const nextButton = document.querySelector('.stage-next');
    let currentCard = 0;

    function showCard(cardIndex) {
        stageCards.forEach((card, index) => {
            card.classList.toggle('active', index === cardIndex);
        });
    }

    prevButton.addEventListener('click', function() {
        currentCard = (currentCard - 1 + stageCards.length) % stageCards.length;
        showCard(currentCard);
    });

    nextButton.addEventListener('click', function() {
        currentCard = (currentCard + 1) % stageCards.length;
        showCard(currentCard);
    });

    showCard(0); 
});