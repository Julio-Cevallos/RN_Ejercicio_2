# Ejercicio 2 - Navegación por medio de menú lateral (Drawer/Hamburguesa)

## Conceptos Claves

### ¿Qué es Drawer Navigation?
**Drawer Navegation** es un patrón de navegacióm en React Native donde un menú deslizante aparece desde el lado izquierdo o derecho de la pantalla. El usuario
puede abrir el munú presionando un icono de hamburguesa (☰). Es ideal para aplicaciones con muchas secciones, ya que permite organizarlas sin ocupar espacio
permanente en la interfaz.

### ¿Qué es navegación anidada?
**Navegacion Anidada** es la tecnica de combinar diferentes tipos de navegadores dentro de otros navegadores en React Native. Esto crea jerarquias de
navegacion complejas, como por ejemplo: [Drawer -> Tabs -> Stack -> Pantallas]. Es fundamental para crear aplicaciones reales donde necesitas múltiples 
niveles de navegación. Cada nivel mantiene su propio estado de navegación independiente, lo que permite experiencias de usuario sofisticadas y organizadas.

### ¿Por qué se reutilizan pantallas en lugar de duplicarlas?
Reutilizar pantallas en lugar de duplicarlas es una buena práctica porque evita la repetición de código siguiendo el principio DRY (Don't Repeat Yourself), 
lo que reduce errores y simplifica el mantenimiento. Además, garantiza una experiencia consistente en toda la aplicación, ya que el diseño y el comportamiento 
se mantienen iguales sin importar desde dónde se acceda. También facilita la corrección de errores y la incorporación de mejoras, optimiza recursos al 
disminuir el tamaño del proyecto y el uso de memoria, y hace que la aplicación sea más escalable y fácil de gestionar a medida que crece.