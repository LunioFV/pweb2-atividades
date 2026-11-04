import dataSource from './data-source';
import { Tarefa } from './tarefas/entities/tarefa.entity';
import { Projeto } from './projetos/entities/projeto.entity';

// Seeder simples: popula as tabelas com dados iniciais.
async function seed() {
  await dataSource.initialize();

  await dataSource.query('TRUNCATE TABLE "tarefas", "projetos" RESTART IDENTITY');

  await dataSource.getRepository(Tarefa).save([
    { titulo: 'Estudar ORM', descricao: 'TypeORM + PostgreSQL', concluida: false },
    { titulo: 'Preparar a aula de hoje', concluida: true },
  ]);

  await dataSource.getRepository(Projeto).save([
    { nome: 'Faculdade', descricao: 'Trabalhos e estudos da UNCISAL', cor: 'azul' },
    { nome: 'Casa', cor: 'verde' },
  ]);

  console.log('Seed concluído!');
  await dataSource.destroy();
}

seed();
