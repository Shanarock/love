const cardWrapper = document.getElementById('card-wrapper');
const mainCard = document.getElementById('main-card');
const nextBtn = document.getElementById('next-btn');
const finalSurprise = document.getElementById('final-surprise');

// Function to create floating hearts
function createHeart() {
    const heart = document.createElement('div');
    heart.classList.add('heart');
    heart.innerHTML = '❤️';
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.animationDuration = (Math.random() * 2 + 3) + 's';
    document.body.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 3000);
}

// Stage 1: Click to open card
cardWrapper.addEventListener('click', function(e) {
    if (mainCard.style.display !== 'block') {
        mainCard.style.display = 'block';
        // Release hearts
        for(let i=0; i<15; i++) {
            setTimeout(createHeart, i * 100);
        }
    }
});

// Stage 2: Click "Next" to see the "I Love You" message
nextBtn.addEventListener('click', function(e) {
    e.stopPropagation(); // Prevents triggering the wrapper click
    cardWrapper.classList.add('hidden');
    finalSurprise.classList.remove('hidden');
    
    // Continuous hearts for the final screen
    setInterval(createHeart, 300);
});