import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

// Tabela "projetos" no PostgreSQL.
@Entity('projetos')
export class Projeto {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 60 })
  nome: string;

  @Column({ type: 'varchar', length: 200, nullable: true })
  descricao?: string;

  @Column({ type: 'varchar' })
  cor: string;
}
