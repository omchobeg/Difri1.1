// --- Modal Logic ---
const modal = document.getElementById('newsModal');
const closeIcon = document.querySelector('.close-modal');
const closeBtn = document.getElementById('closeModalBtn');

// Show modal when page loads
window.addEventListener('DOMContentLoaded', () => {
  // Optional: Check if user has seen it before
  if (!localStorage.getItem('newsSeen')) {
    modal.style.display = 'flex';
  }
});

const hideModal = () => {
  modal.style.display = 'none';
  localStorage.setItem('newsSeen', 'true'); // Prevents showing every time
};

closeIcon.onclick = hideModal;
closeBtn.onclick = hideModal;

// Close if clicking outside the modal box
window.onclick = (e) => {
  if (e.target == modal) hideModal();
};

// --- Smooth Scrolling ---
document.querySelectorAll('nav a, .btn-secondary').forEach(link => {
  link.addEventListener('click', e => {
    const targetId = link.getAttribute('href');
    if (!targetId.startsWith('#')) return;

    e.preventDefault();
    const target = document.querySelector(targetId);
    if (target) {
      window.scrollTo({
        top: target.offsetTop - 100,
        behavior: 'smooth'
      });
    }
  });
});

const discordLink = document.getElementById('discordLink');
const copyStatus = document.getElementById('copyStatus');

if (discordLink) {
    discordLink.addEventListener('click', (e) => {
        const myUsername = 'idk201167';
        
        // 1. Copy the name to clipboard so they can paste it to search
        navigator.clipboard.writeText(myUsername);
        
        // 2. Show the status message
        copyStatus.style.opacity = '1';
        discordLink.innerText = 'Opening...';

        // 3. Fallback: If the deep link fails to open the app, open the web version
        setTimeout(() => {
            copyStatus.style.opacity = '0';
            discordLink.innerText = 'Message me on Discord';
            // Opens the web search/login if the app protocol didn't work
            window.open('https://discord.com/channels/@me', '_blank');
        }, 2500);
    });
}