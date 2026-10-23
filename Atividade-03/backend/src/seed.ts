import dataSource from './data-source';
import { Tarefa } from './tarefas/entities/tarefa.entity';
import { Projeto } from './projetos/entities/projeto.entity';

// Popula as tabelas com dados iniciais. Rode com: npm run seed
async function seed() {
  await dataSource.initialize();

  const tarefaRepo = dataSource.getRepository(Tarefa);
  await tarefaRepo.clear();
  await tarefaRepo.save([
    { titulo: 'Estudar ORM', descricao: 'TypeORM + PostgreSQL', concluida: false },
    { titulo: 'Preparar a aula de hoje', concluida: true },
  ]);

  const projetoRepo = dataSource.getRepository(Projeto);
  await projetoRepo.clear();
  await projetoRepo.save([
    { nome: 'Faculdade', descricao: 'Trabalhos da UNCISAL', cor: 'azul' },
    { nome: 'Pessoal', cor: 'verde' },
  ]);

  console.log('Seed concluído!');
  await dataSource.destroy();
}

seed();
