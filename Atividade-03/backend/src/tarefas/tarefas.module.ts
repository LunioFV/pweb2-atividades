import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TarefasController } from './tarefas.controller';
import { TarefasService } from './tarefas.service';
import { Tarefa } from './entities/tarefa.entity';

// Um módulo agrupa um recurso: aqui, o controller e o service de "tarefas".
// forFeature registra a entidade Tarefa para podermos injetar o Repository.
@Module({
  imports: [TypeOrmModule.forFeature([Tarefa])],
  controllers: [TarefasController],
  providers: [TarefasService],
})
export class TarefasModule {}
