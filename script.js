// Collapsing the menu items
function initNavToggle() {
  document.querySelectorAll('.nav-item').forEach(navItem => {

    // Only attach to items that have a chevron ∨ (expandable ones)
    // Items with › chevron are external links — skip them
    const chevron = navItem.querySelector('.chevron');
    if (!chevron || chevron.textContent.trim() === '›') return;

    // Set initial chevron style
    chevron.style.display = 'inline-block';
    chevron.style.transition = 'transform 0.2s ease';

    navItem.addEventListener('click', function () {
      const isCollapsed = this.classList.toggle('collapsed');

      // Walk siblings until next .nav-item or hr.nav-divider
      let el = this.nextElementSibling;
      while (el && !el.classList.contains('nav-item') && el.tagName !== 'HR') {
        el.style.display = isCollapsed ? 'none' : '';
        el = el.nextElementSibling;
      }

      // Rotate chevron
    //   chevron.style.transform = isCollapsed ? 'rotate(0deg)' : 'rotate(-90deg)';
    });
    // Collapse on page load
    let el = navItem.nextElementSibling;
    while (el && !el.classList.contains('nav-item') && el.tagName !== 'HR') {
    el.style.display = 'none';
    el = el.nextElementSibling;
    }
    navItem.classList.add('collapsed');
    // chevron.style.transform = 'rotate(-90deg)';
    });
    }

document.addEventListener('DOMContentLoaded', initNavToggle);

