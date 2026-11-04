# Atividade 04 — JWT e segurança de APIs (cookie httpOnly)

Login/registro com JWT guardado em cookie httpOnly; `sub` lido no servidor.
Rotas de Tarefas e Projetos protegidas com `JwtAuthGuard`.

```bash
docker compose up --build -d     # frontend (5173) + Postgres
cd backend && npm install && npm run migration:run && npm run seed && npm run start:dev
```

Testes com curl (cookie jar):

```bash
curl -X POST localhost:3000/api/auth/register -H 'Content-Type: application/json' -d '{"email":"aluno@uncisal.edu.br","senha":"123456"}'   # 201
curl -X POST localhost:3000/api/auth/register -H 'Content-Type: application/json' -d '{"email":"xxx","senha":"123456"}'                    # 400
curl -c cookies.txt -X POST localhost:3000/api/auth/login -H 'Content-Type: application/json' -d '{"email":"aluno@uncisal.edu.br","senha":"123456"}'  # 201 + cookie
curl -b cookies.txt localhost:3000/api/auth/me          # 200 { userId, email }
curl -b cookies.txt localhost:3000/api/tarefas          # 200
curl localhost:3000/api/tarefas                         # 401 (sem cookie)
curl -X POST localhost:3000/api/auth/login -H 'Content-Type: application/json' -d '{"email":"aluno@uncisal.edu.br","senha":"errada"}'  # 401
curl -b cookies.txt -X POST localhost:3000/api/auth/logout
```
