<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

# 🎵 Tracks API - Proyecto NestJS

Este proyecto es una API RESTful desarrollada con **NestJS** para gestionar una colección de canciones (tracks).

Permite realizar operaciones básicas de **CRUD**:

- Listar todos los tracks
- Consultar un track por ID
- Crear un nuevo track
- Actualizar un track existente
- Eliminar un track

---

## 📦 Estructura del Proyecto

```plaintext
src/
└── tracks/
    ├── dto/
    │   ├── create-track.dto.ts
    │   └── update-track.dto.ts
    ├── entities/
    │   └── track.entity.ts
    ├── mocks/
    │   └── tracks.mock.json
    ├── tracks.controller.ts
    ├── tracks.module.ts
    └── tracks.service.ts
├── app.module.ts
└── main.ts