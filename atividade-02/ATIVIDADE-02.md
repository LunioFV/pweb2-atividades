# Atividade 02 — CRUD de Projetos (NestJS)

Pasta principal da entrega: `backend/src/projetos/` (module, controller, service, dto, entity).
Os dados ficam em memória (somem ao reiniciar). Mensagens personalizadas nos validadores (desafio opcional) já incluídas.

```bash
cd backend && npm install && npm run start:dev
```

Testes (critérios de aceite):

```bash
curl -i http://localhost:3000/api/projetos                                  # 200
curl -i -X POST localhost:3000/api/projetos -H 'Content-Type: application/json' -d '{"nome":"Faculdade","cor":"azul"}'   # 201
curl -i -X POST localhost:3000/api/projetos -H 'Content-Type: application/json' -d '{"nome":"ab","cor":"azul"}'           # 400
curl -i -X POST localhost:3000/api/projetos -H 'Content-Type: application/json' -d '{"nome":"Trabalho","cor":"rosa"}'     # 400
curl -i -X POST localhost:3000/api/projetos -H 'Content-Type: application/json' -d '{"nome":"Trabalho","cor":"azul","xpto":1}'  # 400
curl -i http://localhost:3000/api/projetos/999                              # 404
curl -i -X PUT localhost:3000/api/projetos/1 -H 'Content-Type: application/json' -d '{"nome":"Faculdade 2026"}'          # 200
curl -i -X DELETE localhost:3000/api/projetos/1                             # 204
```
