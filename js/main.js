// Footer year
document.querySelectorAll('#year').forEach(el => { el.textContent = new Date().getFullYear(); });

// Card filters (All / Research / Projects) on the home page
const buttons = document.querySelectorAll('.filters button');
const cards = document.querySelectorAll('.cards .card');
buttons.forEach(btn => {
  btn.addEventListener('click', () => {
    const f = btn.dataset.filter;
    buttons.forEach(b => b.setAttribute('aria-pressed', String(b === btn)));
    cards.forEach(c => { c.hidden = !(f === 'all' || c.dataset.type === f); });
  });
});
