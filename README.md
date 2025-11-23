# Recipe App

Una aplicación web moderna para explorar y gestionar recetas de cocina, construida con React y TypeScript. Permite a los usuarios navegar por diferentes categorías de recetas, marcar sus favoritas y visualizar información detallada de cada plato.

## Características

- **Diseño Responsive**: Optimizado para dispositivos móviles, tablets y desktop
- **Sistema de Favoritos**: Guarda tus recetas favoritas usando Context API y localStorage
- **Categorías de Recetas**: Vegetarianos, Platos Principales, Tortas, Comida Rápida, Menú Niños y Sopas
- **Interfaz Moderna**: Diseño atractivo con animaciones y efectos hover
- **Integración con API**: Obtiene recetas de la API de Spoonacular
- **Carga Optimizada**: Skeleton loaders y manejo de estados de carga/error

## Tecnologías Utilizadas

### Frontend

- **React 19** - Biblioteca de JavaScript para construir interfaces de usuario
- **TypeScript** - Superset de JavaScript con tipado estático
- **Sass (SCSS)** - Preprocesador CSS para estilos más mantenibles
- **Vite** - Build tool y dev server ultrarrápido

### Gestión de Estado y Datos

- **React Query (@tanstack/react-query)** - Gestión de estado del servidor, caché y sincronización de datos
- **Context API** - Gestión de estado global para favoritos
- **Axios** - Cliente HTTP para peticiones a la API

### Enrutamiento

- **React Router v7** - Navegación y enrutamiento declarativo

### Containerización

- **Docker** - Containerización de la aplicación
- **Nginx** - Servidor web para producción

## Requisitos Previos

- Node.js 22 o superior
- npm o yarn
- Docker (opcional, para containerización)

## Instalación y Configuración

### 1. Clonar el repositorio

```bash
git clone <url-del-repositorio>
cd recipe-app
```

### 2. Instalar dependencias

```bash
npm install
```

### 3. Configurar variables de entorno

Crea un archivo `.env` en la raíz del proyecto:

```bash
VITE_API_KEY=tu_api_key_de_spoonacular
```

> **Nota**: Obtén tu API key gratuita en [Spoonacular API](https://spoonacular.com/food-api)

## Comandos de Desarrollo

### Ejecutar en modo desarrollo

```bash
npm run dev
```

La aplicación estará disponible en `http://localhost:5173`

### Compilar para producción

```bash
npm run build
```

### Previsualizar build de producción

```bash
npm run preview
```

### Ejecutar linter

```bash
npm run lint
```

## Docker

### Construir la imagen de Docker

```bash
docker build -t recipe-app .
```

### Ejecutar el contenedor

```bash
docker run -p 8080:8080 recipe-app
```

La aplicación estará disponible en `http://localhost:8080`

## Estructura del Proyecto

```
recipe-app/
├── src/
│   ├── assets/          # Imágenes, íconos y recursos estáticos
│   ├── components/      # Componentes reutilizables
│   │   ├── Banner/
│   │   ├── CategoryCards/
│   │   ├── Navbar/
│   │   ├── NewRecipes/
│   │   ├── PageTitle/
│   │   ├── RecipeCard/
│   │   └── Sponsorship/
│   ├── context/         # Context API (FavoritesContext)
│   ├── pages/           # Páginas de la aplicación
│   │   ├── Home.tsx
│   │   ├── Vegetarians.tsx
│   │   ├── MainDishes.tsx
│   │   ├── Cakes.tsx
│   │   ├── FastFood.tsx
│   │   ├── KidsMenu.tsx
│   │   ├── Soups.tsx
│   │   └── Favorites.tsx
│   ├── services/        # Servicios de API (recipeService)
│   ├── types/           # Definiciones de TypeScript
│   ├── utils/           # Utilidades y datos estáticos
│   ├── App.tsx          # Componente principal
│   ├── main.tsx         # Punto de entrada
│   └── index.scss       # Estilos globales
├── nginx/               # Configuración de Nginx
├── Dockerfile           # Configuración de Docker
├── package.json         # Dependencias y scripts
└── README.md           # Este archivo
```

## Características de Diseño

- **Metodología BEM**: Nomenclatura de clases CSS consistente
- **Variables CSS**: Colores y fuentes centralizadas
- **Animaciones Suaves**: Transiciones y efectos hover
- **Grid Responsive**: Layout adaptable a diferentes tamaños de pantalla
- **Skeleton Loaders**: Indicadores visuales de carga

## Funcionalidades Principales

### Sistema de Favoritos

- Marca/desmarca recetas como favoritas
- Persistencia en localStorage
- Página dedicada para ver todas las favoritas
- Ícono de corazón interactivo

### Navegación por Categorías

- Vegetarianos
- Platos Principales
- Tortas
- Comida Rápida
- Menú Niños
- Sopas

### Detalles de Recetas

- Imagen del plato
- Nombre de la receta
- Calificación
- Tamaño de porción
- Tiempo de preparación
- Nivel de dificultad
