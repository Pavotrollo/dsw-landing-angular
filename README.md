# DSW Landing Angular

Proyecto correspondiente a la **Participación 4: Introducción a Angular 20** de la materia *Desarrollo de Sitios Web* (Facultad de Ciencias de la Computación, BUAP).

---

## 🚀 Tecnologías y Librerías

- **Framework:** Angular 20 (Standalone Components, Signals, nuevo control de flujo `@for`)
- **Estilos y Maquetación:** Bootstrap 5.3
- **Iconografía:** Bootstrap Icons
- **Diseño de Componentes:** Angular Material (Tema Material 3 configurado)
- **Tipografía:** Nexa (Light, Regular, Bold) integrada localmente

---

## 📂 Pantallas y Características

- **Home (`/home`):** Título, descripción y 3 tarjetas informativas generadas dinámicamente con `@for`.
- **Perfil (`/perfil`):** Fotografía local e información de contacto del estudiante.
- **Documentación (`/documentacion`):** Enlace directo a la documentación oficial de Angular y carrusel de tecnologías (Node.js, TypeScript, Angular, NPM).
- **Navegación:** Menú persistente en todas las pantallas con detección visual de ruta activa (`routerLinkActive`) y sin recarga de página.
- **Enrutamiento:** Redirección automática a Home y gestión de rutas no encontradas mediante ruta comodín (`**`).

---

## 🛠️ Instalación y Ejecución

### Prerrequisitos
- Node.js (versión 20 o superior recomendada)
- Angular CLI 20

### Pasos
1. Clonar el repositorio:
   ```bash
   git clone https://github.com/Pavotrollo/dsw-landing-angular.git
   cd dsw-landing-angular
   ```

2. Instalar dependencias:
   ```bash
   npm install
   ```

3. Iniciar el servidor de desarrollo:
   ```bash
   ng serve
   ```
   Navega a `http://localhost:4200/` en tu navegador.

4. Compilar para producción:
   ```bash
   ng build
   ```
