import { Funcionario } from './../../../models/funcionario.model';
import { Component } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: "app-funcionario-listar",
  templateUrl: "./funcionario-listar.component.html",
  styleUrls: ["./funcionario-listar.component.css"],
})
export class FuncionarioListarComponent {
  funcionarios: Funcionario[] = [];

  constructor(private client: HttpClient) {}

  ngOnInit(): void {
    console.log("O componente foi carregado!");
    this.client.get<Funcionario[]>("https://localhost:7114/api/funcionario/listar").subscribe({
      next: (funcionarios) => {
        this.funcionarios = funcionarios;
        console.table(funcionarios);
      },
      error: (erro) => {
        console.error('Erro ao obter a lista de funcionários:', erro);
      },
    });
  }

  deletar(funcionarioId: number | undefined) {
    if (funcionarioId !== undefined) {
      this.client.delete<Funcionario[]>(`https://localhost:7114/api/funcionario/deletar/${funcionarioId}`)
        .subscribe({
          next: (funcionarios) => {
            this.funcionarios = funcionarios;
          },
          error: (erro) => {
            console.error('Erro ao excluir funcionário:', erro);
          },
        });
    }
  }
}
