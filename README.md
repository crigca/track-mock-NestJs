<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

Tracks API - Proyecto NestJS

Este proyecto es una API RESTful desarrollada con NestJS para gestionar una colección de canciones (tracks).

Permite realizar operaciones básicas de CRUD:

Listar todos los tracks

Consultar un track por ID

Crear un nuevo track

Actualizar un track existente

Eliminar un track

📦 Estructura del Proyecto

src/
 └── tracks/
      ├── dto/
      │    ├── create-track.dto.ts
      │    └── update-track.dto.ts
      ├── entities/
      │    └── track.entity.ts
      ├── mocks/
      │    └── tracks.mock.json
      ├── tracks.controller.ts
      ├── tracks.module.ts
      └── tracks.service.ts
 ├── app.module.ts
 └── main.ts

🚀 Instalación y ejecución

Clonar el repositorio:

git clone https://github.com/tu-usuario/track-mock-NestJs.git

Instalar dependencias:

npm install

Iniciar el servidor en modo desarrollo:

npm run start:dev

El servidor correrá por defecto en:

http://localhost:3000

📚 Endpoints disponibles

Método

URL

Descripción

GET

/tracks

Listar todos los tracks

GET

/tracks/:id

Obtener un track por ID

POST

/tracks

Crear un nuevo track

PUT

/tracks/:id

Actualizar un track existente

DELETE

/tracks/:id

Eliminar un track

🛠️ Tecnologías utilizadas

NestJS

TypeScript

Node.js

📋 Notas

Los datos de los tracks están mockeados en un archivo tracks.mock.json.

No se conecta a base de datos real (se trabaja en memoria).

Se utilizó arquitectura modular de NestJS (Modules, Controllers, Services, DTOs, Entities).