# bsale-test
Bienvenidos al backend de la aplicación BSALE.

Ruta: https://evening-taiga-78339.herokuapp.com

Endpoints:

GET '/data/'
Entrega todos los productos de la tabla product utilizando la query 'SELECT * FROM product'

GET '/data/:producto'
Entrega rutas personalizadas para cada producto en base a la categoría a la que pertenecen, utilizando la query: `SELECT * from product WHERE category IN (SELECT id FROM category WHERE name = "${producto}")`

GET '/search'
Realiza una búsqueda utilizando query strings en base al parámetro ingresado en el input search del lado del cliente. Su query es: `SELECT * FROM product WHERE name LIKE "%${producto}%"`

Para usar localmente, clone el repositorio en su equipo y en su terminal ejecute dentro de la ubicación del archivo los comdandos 'npm install' para descargar los módulos necesarios.

Ante cualquier consulta no dude en contactar al desarrollador en: https://www.daniela-dev.cl 