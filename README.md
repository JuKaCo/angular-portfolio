# Portfolio Personal en Angular

Este proyecto es un portfolio personal desarrollado con Angular, diseñado para mostrar proyectos, habilidades y experiencia de una manera moderna y profesional.

## 🚀 Requisitos Previos

Antes de comenzar, asegúrate de tener instalado:

- [Node.js](https://nodejs.org/) (versión 12.x o superior)
- [npm](https://www.npmjs.com/) (normalmente viene con Node.js)
- [Angular CLI](https://github.com/angular/angular-cli) (versión 14.x)

## 💻 Instalación y Ejecución Local

1. **Clonar el repositorio**
   ```bash
   git clone https://github.com/JuKaCo/angular-portfolio.git
   cd angular-portfolio
   ```

2. **Instalar dependencias**
   ```bash
   npm install
   ```

3. **Ejecutar el servidor de desarrollo**
   ```bash
   ng serve
   ```

4. **Abrir el navegador**
   Navega a `http://localhost:4200/`. La aplicación se recargará automáticamente si cambias alguno de los archivos fuente.

## 🌐 Despliegue en GitHub Pages

### Método Manual

1. **Construir el proyecto para producción**
   ```bash
   ng build --configuration production --base-href "https://jukaco.github.io/angular-portfolio/"
   ```

2. **Desplegar en GitHub Pages**
   ```bash
   npx angular-cli-ghpages --dir=dist/my-portfolio
   ```

### Método Automatizado

Este proyecto incluye un script de despliegue preconfigurado. Para usarlo:

1. **Ejecutar el comando de despliegue**
   ```bash
   npm run deploy
   ```

Este comando realizará automáticamente la construcción y el despliegue en GitHub Pages.

## 🛠️ Comandos Útiles

- `ng serve`: Inicia el servidor de desarrollo
- `ng build`: Construye el proyecto
- `ng test`: Ejecuta los tests unitarios
- `ng e2e`: Ejecuta los tests end-to-end
- `npm run deploy`: Construye y despliega en GitHub Pages

## 📝 Notas Adicionales

- Asegúrate de tener configurado correctamente el repositorio de GitHub antes de hacer el despliegue
- El sitio estará disponible en `https://jukaco.github.io/angular-portfolio/`
- Cualquier cambio en la rama principal actualizará automáticamente el sitio desplegado

## 🤝 Contribuciones

Las contribuciones son bienvenidas. Por favor, abre un issue primero para discutir los cambios que te gustaría realizar.
