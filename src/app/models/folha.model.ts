import { Funcionario } from './funcionario.model';

export interface Folha {
  folhaId: number;
  valor: number;
  quantidade: number;
  mes: number;
  ano: number;
  funcionarioId: number;
  funcionario?: Funcionario [];
  salarioBruto: number;
}
