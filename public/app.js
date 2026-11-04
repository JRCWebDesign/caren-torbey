const icons = document.querySelectorAll('[data-icon]');
for (const placeholder of icons) {
  const icon = document.createElement('img');
  icon.src = `assets/icons/${placeholder.dataset.icon}.svg`;
  icon.alt = '';
  icon.setAttribute('aria-hidden', 'true');
  icon.className = `icon ${placeholder.className}`;
  // SVG files come from the Phosphor icon library; CSS masks inherit their context color.
  const wrapper = document.createElement('span');
  wrapper.className = icon.className;
  wrapper.style.maskImage = `url("${icon.src}")`;
  wrapper.style.webkitMaskImage = `url("${icon.src}")`;
  wrapper.style.maskSize = 'contain';
  wrapper.style.maskRepeat = 'no-repeat';
  wrapper.style.maskPosition = 'center';
  wrapper.style.backgroundColor = 'currentColor';
  wrapper.setAttribute('aria-hidden', 'true');
  placeholder.replaceWith(wrapper);
}
const menu = document.querySelector('.menu-toggle');
const navigation = document.querySelector('#navigation');
function closeMenu() { navigation.classList.remove('is-open'); menu.setAttribute('aria-expanded', 'false'); }
menu.addEventListener('click', () => {
  const open = menu.getAttribute('aria-expanded') !== 'true';
  menu.setAttribute('aria-expanded', String(open));
  navigation.classList.toggle('is-open', open);
});
navigation.addEventListener('click', event => { if (event.target.closest('a')) closeMenu(); });
document.addEventListener('keydown', event => { if (event.key === 'Escape') { closeMenu(); if (navigation.contains(document.activeElement)) menu.focus(); } });
document.addEventListener('click', event => { if (!event.target.closest('.header')) closeMenu(); });
const defaultMessage = 'Hola Caren, quisiera consultarte por un trámite.';
for (const link of document.querySelectorAll('[data-whatsapp]')) link.href = `https://wa.me/59891682154?text=${encodeURIComponent(defaultMessage)}`;
const form = document.querySelector('#contact-form');
const status = document.querySelector('#form-status');
form.addEventListener('submit', event => {
  event.preventDefault();
  if (!form.reportValidity()) return;
  const data = new FormData(form);
  const name = String(data.get('nombre')).trim();
  const consultation = String(data.get('consulta')).trim();
  if (!name || !consultation) { status.textContent = 'Completá tu nombre y el motivo de la consulta.'; return; }
  const message = [`Hola Caren, soy ${name}.`, '', consultation];
  if (String(data.get('telefono')).trim()) message.push(`Teléfono: ${String(data.get('telefono')).trim()}`);
  if (String(data.get('email')).trim()) message.push(`Correo: ${String(data.get('email')).trim()}`);
  const url = `https://wa.me/59891682154?text=${encodeURIComponent(message.join('\n'))}`;
  const tab = window.open(url, '_blank', 'noopener,noreferrer');
  if (tab) tab.opener = null;
  status.replaceChildren(document.createTextNode('Tu consulta está preparada. '));
  const fallback = document.createElement('a');
  fallback.href = url; fallback.target = '_blank'; fallback.rel = 'noopener noreferrer';
  fallback.textContent = 'Abrir WhatsApp para revisarla y enviarla.';
  status.append(fallback);
});
document.querySelector('#year').textContent = new Date().getFullYear();
if ('IntersectionObserver' in window) {
  const sticky = document.querySelector('.mobile-contact');
  new IntersectionObserver(entries => { sticky.classList.toggle('is-hidden', entries[0].isIntersecting); }, { threshold: .1 }).observe(form);
  const links = [...navigation.querySelectorAll('a')];
  const observer = new IntersectionObserver(entries => {
    for (const entry of entries) if (entry.isIntersecting) {
      for (const link of links) { const active = link.hash === '#' + entry.target.id; link.classList.toggle('active', active); if (active) link.setAttribute('aria-current', 'location'); else link.removeAttribute('aria-current'); }
    }
  }, { rootMargin: '-10% 0px -65% 0px' });
  for (const link of links) { const section = document.querySelector(link.hash); if (section) observer.observe(section); }
}
