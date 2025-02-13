function openCard() {
    document.querySelector('.card').classList.add('open');
}

function closeCard(event) {
    event.stopPropagation(); // Prevent re-opening when clicking close
    document.querySelector('.card').classList.remove('open');
}
