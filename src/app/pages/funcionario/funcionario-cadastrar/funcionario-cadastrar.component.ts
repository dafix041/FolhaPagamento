import { HttpClient } from "@angular/common/http";
import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { Funcionario } from "src/app/models/funcionario.model";

@Component({
  selector: "app-funcionario-cadastrar",
  templateUrl: "./funcionario-cadastrar.component.html",
  styleUrls: ["./funcionario-cadastrar.component.css"],
})
export class FuncionarioCadastrarComponent {
  nome: string = "";
  cpf: string = "";
  funcionarioId: number = 0;

  constructor(private client: HttpClient, private router: Router) {}

  cadastrar(): void {
    let funcionario: Funcionario = {
      nome: this.nome,
      cpf: this.cpf,
      funcionarioId: this.funcionarioId,
    };

    this.client
      .post<Funcionario>(
        "https://localhost:7114/api/funcionario/cadastrar",
        funcionario
      )
      .subscribe({
        // A requisição funcionou
        next: (funcionario) => {
          this.router.navigate(["pages/funcionario/listar"]);
        },
        // A requisição não funcionou
        error: (erro) => {
          console.log(erro);
        },
      });
  }
}
