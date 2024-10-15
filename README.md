
# API para Generación de Enlaces de Certificación y Rutas de Aprendizaje

Este proyecto es una API que permite generar enlaces relacionados con exámenes de certificación y rutas de aprendizaje de Microsoft Learn. Está construido usando [Bun](https://bun.sh/), un nuevo runtime de JavaScript, y sigue una estructura modular para manejar las peticiones y respuestas.

## Instalación

1. Clona este repositorio en tu máquina local.
   ```bash
   git clone https://github.com/tu-usuario/tu-repositorio.git
   ```
2. Navega al directorio del proyecto.
   ```bash
   cd tu-repositorio
   ```
3. Instala las dependencias necesarias.
   ```bash
   bun install
   ```

## Uso

Para ejecutar la API en tu máquina local, utiliza el siguiente comando:

```bash
bun run index.js
```

La API estará disponible en [http://localhost:3000](http://localhost:3000).

### Endpoints

#### `/api?url=<url>`

Este es el único endpoint de la API. Dependiendo del parámetro `url`, la API generará enlaces para exámenes de certificación o para rutas de aprendizaje.

**Parámetros:**

- `url` (string): La URL de Microsoft Learn que corresponde a un examen de certificación o una ruta de aprendizaje.

**Ejemplo de uso:**

```bash
curl "http://localhost:3000/api?url=https://learn.microsoft.com/es-es/credentials/certifications/exams/az-900/"
```

#### Respuestas

- **Exámenes de Certificación**: Devuelve un JSON con los enlaces a los módulos de estudio asociados al examen de certificación.

  ```json
  {
    "https://learn.microsoft.com/api/hierarchy/modules/xxxx?locale=es-es": [
      "https://learn.microsoft.com/en-us/learn/modules/xxxx-1/",
      "https://learn.microsoft.com/en-us/learn/modules/xxxx-2/"
    ]
  }
  ```

- **Rutas de Aprendizaje**: Devuelve un JSON con los enlaces a los módulos y unidades de la ruta de aprendizaje.

  ```json
  {
    "https://learn.microsoft.com/path/to/module/": [
      {
        "title": "Título de la unidad",
        "url": "https://learn.microsoft.com/path/to/unit"
      }
    ]
  }
  ```

- **Errores**: Devuelve un JSON con un mensaje de error y un código de estado HTTP apropiado.

  ```json
  {
    "error": "No se proporcionó la URL principal"
  }
  ```

### Estructura del Proyecto

- `index.js`: Punto de entrada principal de la API.
- `src/api.js`: Futuras funcionalidades relacionadas con la API se agregarán aquí.
- `src/routes.js`: Gestión de rutas y enrutamiento de solicitudes.
- `src/controllers/`: Controladores para manejar la lógica de las solicitudes.
  - `certificationController.js`: Lógica específica para las URLs de certificaciones.
  - `trainingPathController.js`: Lógica específica para las URLs de rutas de aprendizaje.
- `src/services/`: Servicios para manejar la lógica del negocio.
  - `certificationService.js`: Genera los enlaces para los exámenes de certificación.
  - `trainingPathService.js`: Genera los enlaces para las rutas de aprendizaje.
- `src/utils/`: Utilidades comunes para la API.
  - `fetchUtils.js`: Funciones para realizar fetch a la API de Microsoft Learn.
  - `responseUtils.js`: Funciones para crear respuestas HTTP JSON.

### Licencia

Este proyecto está bajo la licencia MIT. Consulta el archivo `LICENSE` para más detalles.

### Contribuciones

Las contribuciones son bienvenidas. Por favor, sigue los lineamientos estándar de GitHub para abrir issues y pull requests.

### Contacto

Para preguntas o soporte, por favor contacta al autor [tu-correo@ejemplo.com](mailto:tu-correo@ejemplo.com).
