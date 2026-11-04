# Atividade 03 — ORM com NestJS (PostgreSQL + TypeORM): Tarefas + Projetos

Tarefas e Projetos agora persistem no PostgreSQL via TypeORM (entities, migrations, seed, Repository nos services).

```bash
docker compose up -d db          # banco
cd backend
npm install
npm run migration:run            # cria as tabelas tarefas e projetos
npm run seed                     # dados iniciais
npm run start:dev                # http://localhost:3000/api
```

Reinicie o backend: os dados permanecem. Os testes de `/api/projetos` da atividade 02 continuam valendo.
