/* ======================================================================
   TUS PRODUCTOS
   Para subir un producto nuevo: copia uno de los bloques { ... },
   pégalo debajo (con su coma al final) y cambia los datos.

   - id:          un nombre corto SIN espacios y que no se repita (ej: "mochila-negra")
   - nombre:      como lo verá el cliente
   - precio:      solo el número, sin puntos (ej: 85000). Si no quieres mostrar
                  precio, borra esa línea y saldrá "Precio por consultar"
   - categoria:   sirve para los filtros de arriba (ej: "Mochilas", "Maletas")
   - descripcion: texto corto (opcional)
   - fotos:       una o varias fotos, guardadas en la carpeta "fotos".
                  La primera es la que se ve en la tarjeta.
                  Usa nombres SIN espacios ni tildes: mochila-negra-1.jpg
   - agotado:     true si ya no tienes. (opcional)
   ====================================================================== */
const PRODUCTOS = [
  {
    id: "producto-1",
    nombre: "Producto de ejemplo 1",
    precio: 85000,
    categoria: "Categoría A",
    descripcion: "Descripción corta del producto.",
    fotos: ["fotos/producto-1.jpg"]
  },
  {
    id: "producto-2",
    nombre: "Producto de ejemplo 2",
    precio: 120000,
    categoria: "Categoría A",
    descripcion: "Otra descripción corta.",
    fotos: ["fotos/producto-2.jpg", "fotos/producto-2b.jpg"]
  },
  {
    id: "producto-3",
    nombre: "Producto de ejemplo 3",
    precio: 60000,
    categoria: "Categoría B",
    descripcion: "",
    fotos: ["fotos/producto-3.jpg"]
  },
  {
    id: "producto-4",
    nombre: "Producto de ejemplo 4",
    precio: 95000,
    categoria: "Categoría B",
    descripcion: "Este está agotado, solo para mostrar cómo se ve.",
    fotos: ["fotos/producto-4.jpg"],
    agotado: true
  }
];
