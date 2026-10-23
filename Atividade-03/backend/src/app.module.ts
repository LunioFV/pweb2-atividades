import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TarefasModule } from './tarefas/tarefas.module';
import { ProjetosModule } from './projetos/projetos.module';
import { dataSourceOptions } from './data-source';

// Módulo raiz: conecta no banco (TypeORM) e importa os módulos de recursos.
@Module({
  imports: [TypeOrmModule.forRoot(dataSourceOptions), TarefasModule, ProjetosModule],
})
export class AppModule {}
