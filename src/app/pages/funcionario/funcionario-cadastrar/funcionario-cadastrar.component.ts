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
  funcionarios: Funcionario[] = []; 
  id: number = 0;  

  constructor(private client: HttpClient, private router: Router) {}

  ngOnInit(): void {
    this.client.get<Funcionario[]>("https://localhost:7114/api/funcionario/listar").subscribe({
      next: (funcionarios) => {
        console.table(funcionarios);
        this.funcionarios = funcionarios;
      },
      error: (erro) => {
        console.log("Erro ao obter a lista de funcionários", erro);
      },
    });
  }
  
  cadastrar(): void {
    let funcionario: Funcionario = {
      nome: this.nome,
      cpf: this.cpf,
      id: this.id,
    };

    this.client.post<Funcionario>("https://localhost:7114/api/funcionario/cadastrar", funcionario).subscribe({
      next: (funcionario) => {
        console.log("Funcionário cadastrado com sucesso", funcionario);
        this.router.navigate(["pages/funcionario/listar"]);
      },
      error: (erro) => {
        console.log("Erro ao cadastrar o funcionário", erro);
      },
    });
  }

  
}
