import { PartialType } from '@nestjs/mapped-types';
import { CreateProjetoDto } from './create-projeto.dto';

// Todos os campos viram opcionais, mantendo as mesmas validações.
export class UpdateProjetoDto extends PartialType(CreateProjetoDto) {}
