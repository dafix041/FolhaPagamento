import { HttpClient } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Folha } from "src/app/models/folha.model";
import { Funcionario } from "src/app/models/funcionario.model";

@Component({
  selector: "app-folha-cadastrar",
  templateUrl: "./folha-cadastrar.component.html",
  styleUrls: ["./folha-cadastrar.component.css"],
})
export class FolhaCadastrarComponent {
  folha: Folha = {
    folhaId: 0,
    valor: 0,
    quantidade: 0,
    mes: 0,
    ano: 0,
    funcionarioId: 0,
    salarioBruto: 0,
  };

  funcionarios: Funcionario[] = [];

  constructor(private client: HttpClient, private router: Router) {}

  ngOnInit(): void {
    this.client.get<Funcionario[]>("https://localhost:7114/api/funcionario/listar").subscribe({
      next: (funcionarios) => {
        console.table(funcionarios);
        this.funcionarios = funcionarios;
      },
      error: (erro) => {
        console.log("deu ruim aqui antes mano");
      },
    });
  }

  cadastrar(): void {
    this.client.post<Folha>("https://localhost:7114/api/folha/cadastrar", this.folha).subscribe({
      next: (folha) => {
        this.router.navigate(["pages/folha/listar"]);
      },
      error: (erro) => {
        console.log("deu ruim");
      },
    });
  }
}
