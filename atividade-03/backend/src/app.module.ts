import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TarefasModule } from './tarefas/tarefas.module';
import { ProjetosModule } from './projetos/projetos.module';
import { dataSourceOptions } from './data-source';

// A app usa dataSourceOptions (SEM migrations): elas ficam só no DataSource da CLI.
@Module({
  imports: [TypeOrmModule.forRoot(dataSourceOptions), TarefasModule, ProjetosModule],
})
export class AppModule {}
