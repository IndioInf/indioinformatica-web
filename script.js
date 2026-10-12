const products = [
  {
    id: "iphone-16-base",
    category: "iphone",
    categoryLabel: "iPhone",
    name: "Apple iPhone 16",
    subtitle: "128 GB · Modelo base",
    image: "assets/productos/iphone-16-base.jpeg",
    alt: "Apple iPhone 16 base en color negro, vista frontal y trasera",
    description: "Un iPhone rápido y versátil para el día a día, con pantalla OLED, cámara principal de alta resolución y herramientas sencillas para capturar fotos y video.",
    highlights: ["128 GB", "Pantalla OLED de 6,1″", "Chip A18", "Cámara principal 48 MP"],
    colors: ["Negro", "Blanco", "Rosa", "Verde azulado", "Ultramarino"],
    colorValues: ["#272727", "#f8f8f5", "#f2b8c9", "#90b9b0", "#4c64bc"],
    specs: [
      { section: "Pantalla y diseño", rows: [["Pantalla", "Super Retina XDR OLED de 6,1 pulgadas"], ["Resolución", "2.556 × 1.179 píxeles a 460 ppp"], ["Construcción", "Diseño de aluminio; frente Ceramic Shield"], ["Resistencia", "Clasificación IP68"], ["Peso", "170 g"]] },
      { section: "Rendimiento y almacenamiento", rows: [["Chip", "Apple A18"], ["CPU", "6 núcleos: 2 de rendimiento y 4 de eficiencia"], ["GPU", "5 núcleos"], ["Neural Engine", "16 núcleos"], ["Capacidad de esta versión", "128 GB"]] },
      { section: "Cámaras y video", rows: [["Cámara principal", "Fusion de 48 MP, apertura f/1.6 y estabilización óptica por desplazamiento del sensor"], ["Ultra gran angular", "12 MP, campo de visión de 120°"], ["Cámara frontal", "TrueDepth de 12 MP"], ["Video", "Grabación 4K Dolby Vision hasta 60 fps"], ["Zoom óptico", "2× de acercamiento y 2× de alejamiento"]] },
      { section: "Conectividad y carga", rows: [["Conector", "USB‑C"], ["Conectividad", "Wi‑Fi 7, Bluetooth 5.3 y NFC (según especificación del modelo)"], ["Carga inalámbrica", "MagSafe y Qi2"]] }
    ],
    note: "La imagen de muestra representa el iPhone 16 base. Los colores indicados son los acabados oficiales del modelo; consultar qué color está disponible al momento de la compra."
  },
  {
    id: "ipad-a16-11",
    category: "ipad",
    categoryLabel: "iPad",
    name: "Apple iPad A16",
    subtitle: "11 pulgadas · 128 GB",
    image: "assets/productos/ipad-a16-11.jpeg",
    alt: "Apple iPad de 11 pulgadas con chip A16, vista frontal y trasera",
    description: "Una tablet para estudiar, leer, mirar contenido, hacer videollamadas y organizar el día. Su pantalla amplia y la compatibilidad con Apple Pencil la hacen práctica para tomar apuntes.",
    highlights: ["128 GB", "Pantalla de 11″", "Chip A16", "Compatible con Apple Pencil"],
    colors: ["Plata", "Azul", "Rosa", "Amarillo"],
    colorValues: ["#d8d8d4", "#6f9ecb", "#efb5c6", "#ead56a"],
    specs: [
      { section: "Pantalla y diseño", rows: [["Pantalla", "Liquid Retina IPS de 11 pulgadas"], ["Resolución", "2.360 × 1.640 píxeles a 264 ppp"], ["Brillo", "500 nits"], ["Biometría", "Touch ID integrado en el botón superior"], ["Peso", "477 g Wi‑Fi / 481 g Wi‑Fi + Cellular"]] },
      { section: "Rendimiento y memoria", rows: [["Chip", "Apple A16"], ["CPU", "5 núcleos"], ["GPU", "4 núcleos"], ["Neural Engine", "16 núcleos"], ["Capacidad de esta versión", "128 GB"]] },
      { section: "Cámaras y audio", rows: [["Cámara trasera", "Gran angular de 12 MP, apertura f/1.8"], ["Cámara frontal", "12 MP con Encuadre Centrado, ubicada para uso horizontal"], ["Video trasero", "Grabación 4K hasta 60 fps"], ["Audio", "Bocinas estéreo en horizontal y dos micrófonos"]] },
      { section: "Conectividad y accesorios", rows: [["Conector", "USB‑C"], ["Conectividad inalámbrica", "Wi‑Fi 6 y Bluetooth 5.3"], ["Versión celular", "Existe versión Wi‑Fi + Cellular con 5G; confirmar la variante del equipo ofrecido"], ["Lápiz compatible", "Apple Pencil USB‑C y Apple Pencil de 1.ª generación con adaptador"]] }
    ],
    note: "La ficha corresponde a iPad A16 de 11 pulgadas y 128 GB. La conectividad exacta (Wi‑Fi o Wi‑Fi + Cellular) debe coincidir con la unidad disponible."
  },
  {
    id: "ipad-air-m4-11",
    category: "ipad",
    categoryLabel: "iPad",
    name: "Apple iPad Air M4",
    subtitle: "11 pulgadas · 128 GB",
    image: "assets/productos/ipad-air-m4-11.jpeg",
    alt: "Apple iPad Air de 11 pulgadas, generación con chip M4, vista frontal y trasera",
    description: "Una opción más potente para multitarea, creatividad y trabajo con accesorios. La pantalla laminada con amplia gama de colores acompaña muy bien el uso con Apple Pencil.",
    highlights: ["128 GB", "Chip M4", "12 GB de memoria unificada", "Apple Pencil Pro"],
    colors: ["Azul", "Púrpura", "Blanco estelar", "Gris espacial"],
    colorValues: ["#7aa9cf", "#b9a4d4", "#e5e1d8", "#777a7e"],
    specs: [
      { section: "Pantalla y diseño", rows: [["Pantalla", "Liquid Retina IPS de 11 pulgadas"], ["Resolución", "2.360 × 1.640 píxeles a 264 ppp"], ["Brillo", "500 nits"], ["Tratamientos", "Pantalla laminada, antirreflejo, P3 y True Tone"], ["Peso", "464 g Wi‑Fi / 465 g Wi‑Fi + Cellular"]] },
      { section: "Rendimiento y memoria", rows: [["Chip", "Apple M4"], ["CPU", "8 núcleos: 3 de rendimiento y 5 de eficiencia"], ["GPU", "9 núcleos"], ["Neural Engine", "16 núcleos"], ["Memoria unificada", "12 GB"], ["Capacidad de esta versión", "128 GB"]] },
      { section: "Cámaras y audio", rows: [["Cámara trasera", "Gran angular de 12 MP"], ["Cámara frontal", "12 MP con Encuadre Centrado, ubicada para uso horizontal"], ["Audio", "Bocinas estéreo en orientación horizontal y micrófonos integrados"]] },
      { section: "Conectividad y accesorios", rows: [["Conector", "USB‑C"], ["Identificación", "Touch ID en botón superior"], ["Lápiz compatible", "Apple Pencil Pro y Apple Pencil USB‑C"], ["Conectividad", "Versiones Wi‑Fi y Wi‑Fi + Cellular; confirmar la variante disponible"]] }
    ],
    note: "La ficha describe la familia iPad Air M4 de 11 pulgadas. Confirmar la conectividad y capacidad exactas de la unidad al cargar el producto definitivo."
  },
  {
    id: "macbook-neo-512",
    category: "macbook",
    categoryLabel: "MacBook",
    name: "Apple MacBook Neo",
    subtitle: "13 pulgadas · A18 Pro · 8 GB · SSD 512 GB · Touch ID",
    image: "assets/productos/macbook-neo-512.jpeg",
    alt: "MacBook Neo de 13 pulgadas mostrando varios colores oficiales",
    description: "Una notebook liviana para estudiar, trabajar, navegar y usar aplicaciones cotidianas con fluidez. El chip A18 Pro, el diseño compacto y la batería de larga duración la convierten en una opción práctica para llevar a todos lados.",
    highlights: ["A18 Pro", "8 GB unificados", "SSD 512 GB", "Touch ID"],
    colors: ["Plata", "Rosa rubor", "Amarillo cítrico", "Índigo"],
    colorValues: ["#c8c9ca", "#e6b9c9", "#d4d65a", "#435477"],
    specs: [
      { section: "Pantalla y diseño", rows: [["Pantalla", "Liquid Retina IPS de 13 pulgadas"], ["Resolución", "2.408 × 1.506 píxeles a 219 ppp"], ["Brillo", "500 nits"], ["Peso", "1,23 kg"], ["Grosor", "1,27 cm"]] },
      { section: "Rendimiento y almacenamiento", rows: [["Chip", "Apple A18 Pro"], ["CPU", "6 núcleos: 2 de rendimiento y 4 de eficiencia"], ["GPU", "5 núcleos"], ["Neural Engine", "16 núcleos"], ["Memoria unificada", "8 GB"], ["Almacenamiento", "SSD de 512 GB"]] },
      { section: "Cámara, audio y seguridad", rows: [["Cámara", "FaceTime HD de 1080p"], ["Audio", "Dos parlantes y sistema de dos micrófonos"], ["Teclado", "Magic Keyboard con Touch ID en esta configuración"], ["Trackpad", "Multi‑Touch"]] },
      { section: "Conectividad y batería", rows: [["Puertos", "1 USB‑C USB 3 (hasta 10 Gb/s), 1 USB‑C USB 2 (hasta 480 Mb/s) y auriculares de 3,5 mm"], ["Inalámbrico", "Wi‑Fi 6E y Bluetooth 6"], ["Autonomía anunciada", "Hasta 16 horas de streaming de video"], ["Batería", "36,5 Wh"], ["Teclado", "Distribución en español, según la variante listada"]] }
    ],
    note: "Las especificaciones distinguen la versión de 512 GB con Touch ID. Los colores oficiales de la familia no implican disponibilidad inmediata: consultar color disponible."
  },
  {
    id: "macbook-air-m5-13",
    category: "macbook",
    categoryLabel: "MacBook",
    name: "Apple MacBook Air M5",
    subtitle: "13 pulgadas · 16 GB · SSD 512 GB",
    image: "assets/productos/macbook-air-m5-13.jpeg",
    alt: "MacBook Air M5 de 13 pulgadas, vista frontal",
    description: "Una notebook delgada y silenciosa pensada para trabajar, estudiar y crear. Combina el chip M5 con una pantalla de alta definición y autonomía para acompañar una jornada fuera de casa.",
    highlights: ["Chip M5", "16 GB unificados", "SSD 512 GB", "Pantalla Liquid Retina"],
    colors: ["Azul cielo", "Plata", "Blanco estelar", "Medianoche"],
    colorValues: ["#98c5e8", "#c8c9c9", "#eee5d6", "#242a35"],
    specs: [
      { section: "Pantalla y diseño", rows: [["Pantalla", "Liquid Retina IPS de 13,6 pulgadas"], ["Resolución", "2.560 × 1.664 píxeles a 224 ppp"], ["Brillo", "500 nits; P3 y True Tone"], ["Diseño", "Carcasa delgada de aluminio"]] },
      { section: "Rendimiento y memoria", rows: [["Chip", "Apple M5"], ["CPU", "10 núcleos: 4 supernúcleos y 6 de eficiencia"], ["GPU", "8 núcleos en la configuración base identificada"], ["Neural Engine", "16 núcleos"], ["Memoria unificada", "16 GB"], ["Almacenamiento", "SSD de 512 GB"]] },
      { section: "Cámara, teclado y audio", rows: [["Cámara", "12 MP con Center Stage"], ["Teclado", "Magic Keyboard retroiluminado con Touch ID"], ["Audio", "Sistema de sonido integrado y micrófonos para videollamadas"], ["Auriculares", "Conector de 3,5 mm"]] },
      { section: "Conectividad y batería", rows: [["Puertos", "MagSafe 3 y dos Thunderbolt 4 (USB‑C)"], ["Inalámbrico", "Wi‑Fi 7 y Bluetooth 6"], ["Autonomía anunciada", "Hasta 18 horas de streaming de video"], ["Adaptador", "Adaptador dinámico de 40 W; admite carga rápida con fuente USB‑PD de 70 W o más"]] }
    ],
    note: "La configuración usada para la prueba es 13 pulgadas, M5, 16 GB y SSD de 512 GB. Confirmar distribución de teclado y configuración exacta del equipo antes de publicar una unidad concreta."
  }
];

const grid = document.querySelector('#product-grid');
const count = document.querySelector('#product-count');
const filterButtons = [...document.querySelectorAll('.filter-btn')];

function esc(value) {
  return String(value).replace(/[&<>"']/g, char => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[char]));
}

function buildSpecs(sections) {
  return sections.map(section => `
    <h4>${esc(section.section)}</h4>
    <ul class="spec-list">
      ${section.rows.map(([label, value]) => `<li><span class="spec-label">${esc(label)}</span><span class="spec-value">${esc(value)}</span></li>`).join('')}
    </ul>
  `).join('');
}

function renderProducts(filter = 'todos') {
  const list = filter === 'todos' ? products : products.filter(p => p.category === filter);
  count.textContent = `${list.length} ${list.length === 1 ? 'producto' : 'productos'}`;
  if (!list.length) {
    grid.innerHTML = '<div class="empty-state">No hay productos en esta categoría todavía.</div>';
    return;
  }
  grid.innerHTML = list.map((p, index) => `
    <article class="product-card" data-product="${esc(p.id)}">
      <div class="product-image-wrap">
        <img class="product-image" src="${esc(p.image)}" alt="${esc(p.alt)}" loading="${index > 2 ? 'lazy' : 'eager'}">
      </div>
      <div class="product-body">
        <span class="product-category">${esc(p.categoryLabel)}</span>
        <h3>${esc(p.name)}</h3>
        <div class="product-subtitle">${esc(p.subtitle)}</div>
        <p class="product-description">${esc(p.description)}</p>
        <div class="highlights">${p.highlights.map(h => `<span class="highlight">${esc(h)}</span>`).join('')}</div>
        <div class="color-panel">
          <div class="color-title"><span>Colores oficiales</span><span class="color-dots">${p.colorValues.map(c => `<i class="color-dot" style="background:${esc(c)}" aria-hidden="true"></i>`).join('')}</span></div>
          <div class="color-names">${p.colors.map(esc).join(' · ')}</div>
          <span class="color-consult">CONSULTAR COLOR DISPONIBLE</span>
        </div>
        <button type="button" class="details-btn" aria-expanded="false" aria-controls="details-${esc(p.id)}">
          <span>Ver ficha técnica completa</span><span class="plus" aria-hidden="true">+</span>
        </button>
        <div class="tech-details" id="details-${esc(p.id)}" hidden>
          ${buildSpecs(p.specs)}
          <p class="tech-footnote">${esc(p.note)}</p>
        </div>
      </div>
    </article>
  `).join('');
}

filterButtons.forEach(button => {
  button.addEventListener('click', () => {
    filterButtons.forEach(other => {
      const active = other === button;
      other.classList.toggle('active', active);
      other.setAttribute('aria-pressed', String(active));
    });
    renderProducts(button.dataset.filter);
  });
});

grid.addEventListener('click', event => {
  const button = event.target.closest('.details-btn');
  if (!button) return;
  const isOpen = button.getAttribute('aria-expanded') === 'true';
  const panel = document.getElementById(button.getAttribute('aria-controls'));
  button.setAttribute('aria-expanded', String(!isOpen));
  panel.hidden = isOpen;
  button.querySelector('span:first-child').textContent = isOpen ? 'Ver ficha técnica completa' : 'Ocultar ficha técnica';
});

renderProducts();
