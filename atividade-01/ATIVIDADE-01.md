# Atividade 01 — Backend de Categorias

- Projeto 2 (Laravel MVC): `CategoriaController`, rotas `/categorias` e `/categorias/{id}`, views `categorias/index` e `categorias/show`.
- Projeto 3 (API Node/Express): `GET /api/categorias` e `GET /api/categorias/:id` (categoria + produtos; 404 com `{ "error": "Categoria não encontrada" }`).

```bash
docker compose up --build
# MVC:  http://localhost:8092/categorias   (e /categorias/999 -> 404)
curl http://localhost:8093/api/categorias
curl http://localhost:8093/api/categorias/1
curl -i http://localhost:8093/api/categorias/999
# React: http://localhost:8094/categorias
```
