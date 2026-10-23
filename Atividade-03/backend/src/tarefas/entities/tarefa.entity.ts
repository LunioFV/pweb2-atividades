import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

// Os decorators descrevem a tabela "tarefas" no PostgreSQL.
@Entity('tarefas')
export class Tarefa {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  titulo: string;

  @Column({ type: 'text', nullable: true })
  descricao?: string;

  @Column({ default: false })
  concluida: boolean;
}
