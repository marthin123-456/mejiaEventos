// scripts.js

// Inicializar contador de cotización
let cotizacion = [];

// Agrega un servicio al carrito de cotización
function addToCart(nombre, precio) {
  cotizacion.push({ nombre, precio });
  updateCotizacion();
}

// Actualiza el resumen de servicios cotizados
function updateCotizacion() {
  const cartItems = document.getElementById('cartItems');
  const cartCount = document.getElementById('cartCount');

  if (cartItems && cartCount) {
    cartItems.innerHTML = '';

    cotizacion.forEach((item, index) => {
      const li = document.createElement('li');
      li.className = 'dropdown-item d-flex justify-content-between align-items-center';
      li.innerHTML = `
        <div>
          <strong>${item.nombre}</strong><br>
          <span class="text-success">$${item.precio.toLocaleString('es-CL')}</span>
        </div>
        <button class="btn btn-sm btn-danger" onclick="removeItem(${index})">
          <i class="fas fa-times"></i>
        </button>
      `;
      cartItems.appendChild(li);
    });

    cartCount.textContent = cotizacion.length;
  }
}

// Elimina un servicio del carrito
function removeItem(index) {
  cotizacion.splice(index, 1);
  updateCotizacion();
}

// Alerta de confirmación de envío de formularios
document.addEventListener('DOMContentLoaded', () => {
  const forms = document.querySelectorAll('form');
  forms.forEach(form => {
    form.addEventListener('submit', e => {
      e.preventDefault();
      alert('Gracias por tu mensaje. Te contactaremos pronto.');
      form.reset();
    });
  });
});

// Agrega efecto suave al hacer scroll en los enlaces del menú
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});
