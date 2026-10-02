// Menú móvil
const toggle = document.querySelector('.nav-toggle');
const menu = document.getElementById('menu');
if (toggle && menu) {
  toggle.addEventListener('click', () => {
    const open = menu.classList.toggle('open');
    toggle.setAttribute('aria-expanded', String(open));
    toggle.setAttribute('aria-label', open ? 'Cerrar menú' : 'Abrir menú');
  });
  menu.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
    menu.classList.remove('open');
    toggle.setAttribute('aria-expanded', 'false');
    toggle.setAttribute('aria-label', 'Abrir menú');
  }));
}

// Formulario: arma el mensaje y abre WhatsApp
const WHATSAPP = '51965389994';
const form = document.getElementById('waForm');
if (form) {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const nombre = form.nombre.value.trim();
    const servicio = form.servicio.value;
    const extra = form.mensaje.value.trim();
    let texto = `Hola Lavipronto, soy ${nombre}. Quisiera consultar por: ${servicio}.`;
    if (extra) texto += ` ${extra}`;
    window.open(`https://wa.me/${WHATSAPP}?text=${encodeURIComponent(texto)}`, '_blank', 'noopener');
  });
}

// Año del pie de página
const y = document.getElementById('year');
if (y) y.textContent = new Date().getFullYear();
