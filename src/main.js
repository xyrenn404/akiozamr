/*

- Creator By: Fauzialifatah
https://whatsapp.com/channel/0029VawsCnQ9mrGkOuburC1z

*/
lucide.createIcons();

// Loading screen
window.addEventListener('load', () => {
  setTimeout(() => {
    document.getElementById('loading-screen').classList.add('hidden');
  }, 1500);
});

/*

- Creator By: Fauzialifatah
https://whatsapp.com/channel/0029VawsCnQ9mrGkOuburC1z

*/
const menuToggle = document.getElementById('menu-toggle');
const closeSidebar = document.getElementById('close-sidebar');
const sidebar = document.getElementById('sidebar');
let sidebarOverlay;

function createOverlay() {
  sidebarOverlay = document.createElement('div');
  sidebarOverlay.className = 'sidebar-overlay';
  document.body.appendChild(sidebarOverlay);

  sidebarOverlay.addEventListener('click', closeSidebarMenu);
}

function openSidebarMenu() {
  sidebar.classList.add('open');
  document.body.style.overflow = 'hidden';
  createOverlay();
  setTimeout(() => {
    sidebarOverlay.classList.add('visible');
  }, 0);
}

function closeSidebarMenu() {
  sidebar.classList.remove('open');
  document.body.style.overflow = '';
  sidebarOverlay.classList.remove('visible');
  setTimeout(() => {
    sidebarOverlay.remove();
  }, 300);
}

menuToggle.addEventListener('click', openSidebarMenu);
closeSidebar.addEventListener('click', closeSidebarMenu);

/*

- Creator By: Fauzialifatah
https://whatsapp.com/channel/0029VawsCnQ9mrGkOuburC1z

*/
document.querySelectorAll('.sidebar-link').forEach(link => {
  link.addEventListener('click', closeSidebarMenu);
});


document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && sidebar.classList.contains('open')) {
    closeSidebarMenu();
  }
});

/*

- Creator By: Fauzialifatah
https://whatsapp.com/channel/0029VawsCnQ9mrGkOuburC1z

*/
document.querySelectorAll('.code-block').forEach(block => {
  const copyButton = block.querySelector('.copy-button');
  const codeContent = block.querySelector('code').textContent;

  copyButton.addEventListener('click', async () => {
    try {
      await navigator.clipboard.writeText(codeContent);

      const icon = copyButton.querySelector('i');
      icon.setAttribute('data-lucide', 'check');
      lucide.createIcons();

      setTimeout(() => {
        icon.setAttribute('data-lucide', 'copy');
        lucide.createIcons();
      }, 2000);
    } catch (err) {
      console.error('Failed to copy code:', err);
    }
  });
});