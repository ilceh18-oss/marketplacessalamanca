// CARRUSEL
let slideActual = 0;
const slides = document.querySelectorAll('.carousel-item');
const dots = document.querySelectorAll('.dot');

function mostrarSlide(n) {
    // Ajustar el índice si está fuera de rango
    if (n >= slides.length) {
        slideActual = 0;
    } else if (n < 0) {
        slideActual = slides.length - 1;
    } else {
        slideActual = n;
    }
    
    // Remover la clase active de todos
    slides.forEach(slide => slide.classList.remove('active'));
    dots.forEach(dot => dot.classList.remove('active'));
    
    // Agregar active al slide y dot actual
    slides[slideActual].classList.add('active');
    dots[slideActual].classList.add('active');
}

function cambiarSlide(direccion) {
    mostrarSlide(slideActual + direccion);
}

function irASlide(n) {
    mostrarSlide(n);
}

// Auto-avanzar cada 5 segundos
setInterval(() => {
    cambiarSlide(1);
}, 5000);

        // BASE DE DATOS DE NEGOCIOS
        const negocios = {
            ropa: [
                { nombre: "Boutique Eleganza", icono: "👗", descripcion: "Ropa de mujer elegante y moderna. Vestidos, blusas y accesorios exclusivos.", telefono: "4771234567", horario: "Lunes a Sábado: 10:00 AM - 8:00 PM<br>Domingos: 11:00 AM - 6:00 PM", direccion: "Calle Hidalgo #123, Centro, Salamanca, Gto." },
                { nombre: "Estilo Urbano MX", icono: "👕", descripcion: "Moda urbana para hombre y mujer. Streetwear y tendencias actuales.", telefono: "4771234568", horario: "Lunes a Viernes: 9:00 AM - 7:00 PM<br>Sábados: 10:00 AM - 6:00 PM<br>Domingos: Cerrado", direccion: "Av. Juárez #456, Col. Centro, Salamanca, Gto." },
                { nombre: "Zapatos El Paso", icono: "👞", descripcion: "Calzado de calidad para toda la familia. Marcas nacionales e importadas.", telefono: "4771234569", horario: "Lunes a Sábado: 9:00 AM - 8:00 PM<br>Domingos: 10:00 AM - 5:00 PM", direccion: "Portal Guerrero #78, Centro, Salamanca, Gto." },
                { nombre: "Telas y Más", icono: "🧵", descripcion: "Telas finas, hilos y accesorios para confección. Todo para tu creatividad.", telefono: "4771234570", horario: "Lunes a Viernes: 8:30 AM - 6:30 PM<br>Sábados: 9:00 AM - 5:00 PM<br>Domingos: Cerrado", direccion: "Calle Morelos #234, Centro, Salamanca, Gto." },
                { nombre: "Ropa Infantil Cielo", icono: "👶", descripcion: "Ropa para bebés y niños. Prendas cómodas y adorables de 0 a 12 años.", telefono: "4771234571", horario: "Lunes a Sábado: 10:00 AM - 7:00 PM<br>Domingos: 11:00 AM - 4:00 PM", direccion: "Plaza Principal #56, Centro, Salamanca, Gto." }
            ],
            hogar: [
                { nombre: "Casa Bonita Deco", icono: "🏠", descripcion: "Decoración moderna para tu hogar. Cuadros, plantas y accesorios únicos.", telefono: "4771234572", horario: "Lunes a Viernes: 9:00 AM - 7:00 PM<br>Sábados: 10:00 AM - 6:00 PM<br>Domingos: Cerrado", direccion: "Calle Allende #89, Centro, Salamanca, Gto." },
                { nombre: "Muebles Salamanca", icono: "🛋️", descripcion: "Muebles artesanales de madera. Salas, comedores y recámaras a tu medida.", telefono: "4771234573", horario: "Lunes a Sábado: 9:00 AM - 7:00 PM<br>Domingos: 10:00 AM - 3:00 PM", direccion: "Blvd. Insurgentes #345, Col. Industrial, Salamanca, Gto." },
                { nombre: "Textiles del Hogar", icono: "🛏️", descripcion: "Sábanas, cortinas y edredones de alta calidad. Confort para tu casa.", telefono: "4771234574", horario: "Lunes a Viernes: 9:00 AM - 6:00 PM<br>Sábados: 10:00 AM - 5:00 PM<br>Domingos: Cerrado", direccion: "Av. Guerrero #167, Centro, Salamanca, Gto." },
                { nombre: "Cocina Pro", icono: "🍳", descripcion: "Utensilios y accesorios para cocina. Todo lo que necesitas para cocinar.", telefono: "4771234575", horario: "Lunes a Sábado: 8:00 AM - 8:00 PM<br>Domingos: 9:00 AM - 5:00 PM", direccion: "Calle 5 de Mayo #234, Centro, Salamanca, Gto." },
                { nombre: "Jardines Verdes", icono: "🌱", descripcion: "Plantas, macetas y accesorios de jardinería. Dale vida a tus espacios.", telefono: "4771234576", horario: "Martes a Domingo: 8:00 AM - 6:00 PM<br>Lunes: Cerrado", direccion: "Carretera Salamanca-Celaya Km 2.5, Salamanca, Gto." }
            ],
            alimentos: [
                { nombre: "Panadería El Trigo", icono: "🥖", descripcion: "Pan artesanal recién horneado. Bolillo, telera y pan dulce tradicional.", telefono: "4771234577", horario: "Todos los días: 6:00 AM - 9:00 PM", direccion: "Calle Zaragoza #45, Centro, Salamanca, Gto." },
                { nombre: "Jugos Naturales Vita", icono: "🥤", descripcion: "Jugos, smoothies y licuados naturales. Frescura y salud en cada vaso.", telefono: "4771234578", horario: "Lunes a Sábado: 8:00 AM - 8:00 PM<br>Domingos: 9:00 AM - 6:00 PM", direccion: "Jardín Principal #12, Centro, Salamanca, Gto." },
                { nombre: "Carnes Don Pedro", icono: "🥩", descripcion: "Carnes frescas de primera calidad. Res, cerdo, pollo y cortes especiales.", telefono: "4771234579", horario: "Lunes a Sábado: 7:00 AM - 7:00 PM<br>Domingos: 7:00 AM - 3:00 PM", direccion: "Mercado Municipal, Local 45, Salamanca, Gto." },
                { nombre: "Dulces Tradicionales", icono: "🍬", descripcion: "Dulces típicos mexicanos. Alegrías, palanquetas y cajeta artesanal.", telefono: "4771234580", horario: "Lunes a Domingo: 9:00 AM - 8:00 PM", direccion: "Portal de Artesanos #23, Centro, Salamanca, Gto." },
                { nombre: "Verduras Frescas GTO", icono: "🥬", descripcion: "Verduras frescas directo del campo. Productos orgánicos y de temporada.", telefono: "4771234581", horario: "Martes, Jueves y Sábados: 7:00 AM - 2:00 PM", direccion: "Mercado Hidalgo, Puesto 67, Salamanca, Gto." }
            ],
            arte: [
                { nombre: "Galería Arte Local", icono: "🎨", descripcion: "Pinturas y obras de arte originales. Artistas salmantinos talentosos.", telefono: "4771234582", horario: "Miércoles a Domingo: 11:00 AM - 7:00 PM<br>Lunes y Martes: Cerrado", direccion: "Calle Independencia #89, Centro, Salamanca, Gto." },
                { nombre: "Cerámica Artesanal", icono: "🏺", descripcion: "Piezas de cerámica hechas a mano. Vajillas, jarrones y decoración única.", telefono: "4771234583", horario: "Lunes a Sábado: 10:00 AM - 6:00 PM<br>Domingos: Cerrado", direccion: "Callejón del Arte #34, Centro, Salamanca, Gto." },
                { nombre: "Joyería Plata y Piedra", icono: "💎", descripcion: "Joyería artesanal en plata. Anillos, aretes y collares con diseños únicos.", telefono: "4771234584", horario: "Lunes a Viernes: 10:00 AM - 7:00 PM<br>Sábados: 10:00 AM - 5:00 PM<br>Domingos: Cerrado", direccion: "Plaza de la Constitución #78, Centro, Salamanca, Gto." },
                { nombre: "Fotografía Momentos", icono: "📸", descripcion: "Sesiones fotográficas profesionales. Bodas, eventos y retratos artísticos.", telefono: "4771234585", horario: "Lunes a Viernes: 9:00 AM - 6:00 PM<br>Sábados: Bajo cita previa<br>Domingos: Cerrado", direccion: "Av. Madero #156, Col. Centro, Salamanca, Gto." },
                { nombre: "Bordados Mexicanos", icono: "🧶", descripcion: "Textiles bordados a mano. Blusas, manteles y piezas decorativas tradicionales.", telefono: "4771234586", horario: "Lunes a Sábado: 9:00 AM - 6:00 PM<br>Domingos: Cerrado", direccion: "Casa de la Cultura, Planta Baja, Salamanca, Gto." }
            ]
        };

        const infoCategoria = {
            ropa: { titulo: "Negocios de Ropa", descripcion: "Encuentra las mejores tiendas de moda y calzado en Salamanca" },
            hogar: { titulo: "Negocios de Hogar", descripcion: "Todo para decorar y equipar tu hogar con estilo" },
            alimentos: { titulo: "Negocios de Alimentos", descripcion: "Productos frescos y deliciosos de emprendedores locales" },
            arte: { titulo: "Negocios de Arte", descripcion: "Arte y artesanías únicas hechas por talentosos artistas salmantinos" }
        };

        function abrirCategoria(categoria) {
            // Ocultar página principal
            document.getElementById('mainPage').classList.add('hidden');
            
            // Mostrar página de categoría
            document.getElementById('categoriaPage').classList.add('active');
            
            // Actualizar título y descripción
            document.getElementById('categoriaTitulo').textContent = infoCategoria[categoria].titulo;
            document.getElementById('categoriaDescripcion').textContent = infoCategoria[categoria].descripcion;
            
            // Cargar negocios
            const negociosGrid = document.getElementById('negociosGrid');
            negociosGrid.innerHTML = '';
            
            negocios[categoria].forEach(negocio => {
                const card = document.createElement('div');
                card.className = 'negocio-card';
                card.innerHTML = `
                    <div class="negocio-logo">
                        <img src="${negocio.imagen || 'https://via.placeholder.com/90?text=' + negocio.icono}" alt="${negocio.nombre}" class="negocio-img" onerror="this.parentElement.innerHTML='${negocio.icono}'">
                    </div>
                    <div class="negocio-info">
                        <h3>${negocio.nombre}</h3>
                        <p>${negocio.descripcion}</p>
                        <div class="negocio-actions">
                            <a href="#" class="btn-vermas" onclick="abrirModal('${negocio.nombre}', '${negocio.icono}', \`${negocio.descripcion}\`, \`${negocio.horario}\`, \`${negocio.direccion}\`, '${negocio.telefono}', '${negocio.imagen || ''}'); return false;">Ver más</a>
                            <a href="https://wa.me/52${negocio.telefono}" class="btn-whatsapp" target="_blank">
                                <span>📱</span>
                                <span>WhatsApp</span>
                            </a>
                        </div>
                    </div>
                `;
                negociosGrid.appendChild(card);
            });
            
            // Scroll al inicio
            window.scrollTo(0, 0);
        }

        function volverInicio() {
            document.getElementById('mainPage').classList.remove('hidden');
            document.getElementById('categoriaPage').classList.remove('active');
            document.getElementById('planesPage').classList.remove('active');
            window.scrollTo(0, 0);
        }

        function abrirPlanesPublicidad() {
            document.getElementById('mainPage').classList.add('hidden');
            document.getElementById('categoriaPage').classList.remove('active');
            document.getElementById('planesPage').classList.add('active');
            window.scrollTo(0, 0);
        }

        function buscar() {
            const termino = document.getElementById('searchInput').value.toLowerCase();
            console.log('Buscando:', termino);
        }

        function abrirModal(nombre, icono, descripcion, horario, direccion, telefono, imagen) {
            const modalIcono = document.getElementById('modalIcono');
            if (imagen) {
                modalIcono.innerHTML = `<img src="${imagen}" alt="${nombre}" style="width: 80px; height: 80px; border-radius: 10px; object-fit: cover;" onerror="this.parentElement.innerHTML='${icono}'">`;
            } else {
                modalIcono.textContent = icono;
            }
            document.getElementById('modalNombre').textContent = nombre;
            document.getElementById('modalDescripcion').textContent = descripcion;
            document.getElementById('modalHorario').innerHTML = horario;
            document.getElementById('modalDireccion').textContent = direccion;
            document.getElementById('modalWhatsapp').href = `https://wa.me/52${telefono}`;
            document.getElementById('modalNegocio').classList.add('active');
        }

        function cerrarModal(event) {
            if (!event || event.target.id === 'modalNegocio') {
                document.getElementById('modalNegocio').classList.remove('active');
            }
        }

        document.getElementById('searchInput').addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                buscar();
            }
        });
  