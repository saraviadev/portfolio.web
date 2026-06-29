<div align="center">

# 🏋️‍♂️ Looserfit Web & E-Commerce

**Plataforma de E-Commerce y Marca Interactiva de Fitness de Alto Rendimiento**

<p align="center">
  <img src="https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white" alt="Next.js" />
  <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" alt="React" />
  <img src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="Tailwind" />
  <img src="https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white" alt="Node" />
  <img src="https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white" alt="MongoDB" />
</p>

</div>

---

## 📖 Sobre el Proyecto

**Looserfit** es una plataforma de e-commerce moderna desarrollada para una marca de ropa y accesorios de fitness. Está diseñada con una arquitectura Fullstack enfocada en el rendimiento, la escalabilidad y una experiencia de usuario (UX) premium y fluida.

El sistema maneja desde la visualización dinámica del catálogo de productos hasta la pasarela de pagos segura y la administración de inventario a través de un panel de control personalizado.

---

## ✨ Características Principales (Features)

- 🛒 **Catálogo Dinámico:** Filtrado, búsqueda y visualización de productos en tiempo real.
- 💳 **Pasarela de Pagos Segura:** Integración completa para el procesamiento de compras.
- 🔒 **Autenticación y Roles:** Sistema de inicio de sesión seguro con JWT (JSON Web Tokens) diferenciando entre usuarios comunes y administradores.
- ⚙️ **Panel de Administración (Dashboard):** Interfaz protegida para gestionar el stock, subir nuevos productos y ver estadísticas de ventas.
- 📱 **Diseño 100% Responsivo:** Interfaz adaptable a celulares, tablets y pantallas grandes con animaciones fluidas usando Tailwind CSS y Framer Motion.
- 🚀 **Optimización SEO:** SSR (Server-Side Rendering) aprovechando las bondades de Next.js para posicionamiento rápido en buscadores.

---

## 🛠️ Arquitectura y Tecnologías

El proyecto fue construido separando la lógica de la interfaz (Frontend) y el servidor (Backend).

### Frontend
- **Framework:** Next.js (React)
- **Estilos:** Tailwind CSS
- **Animaciones:** Framer Motion

### Backend & Base de Datos
- **Servidor:** Node.js con Express.js
- **Base de Datos:** MongoDB (Mongoose para modelado de datos)
- **Seguridad:** Bcrypt para contraseñas, JWT para manejo de sesiones.

---

## ⚙️ Instalación y Ejecución Local

Si querés probar este proyecto en tu propia computadora, seguí estos pasos:

### 1. Clonar el repositorio
```bash
git clone https://github.com/tu-usuario/looserfit.git
cd looserfit
```

### 2. Instalar las dependencias
```bash
npm install
```

### 3. Configurar variables de entorno
Creá un archivo `.env.local` en la raíz del proyecto y agregá tus variables (Base de datos, secretos de JWT, etc.):
```env
MONGODB_URI=tu_conexion_de_mongo
JWT_SECRET=tu_secreto_seguro
```

### 4. Iniciar el servidor de desarrollo
```bash
npm run dev
```
Abrí [http://localhost:3000](http://localhost:3000) en tu navegador para ver la aplicación funcionando.

---

## 👨‍💻 Autor

**Theo Saravia**
*Fullstack Developer*

- [LinkedIn](https://www.linkedin.com/in/theo-saravia-239688364/)
- [Portafolio](https://saraviadev.vercel.app/)
- [GitHub](https://github.com/46theosaravia46-cyber)
