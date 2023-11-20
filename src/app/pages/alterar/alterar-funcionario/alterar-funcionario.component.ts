import { HttpClient } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Funcionario } from "src/app/models/funcionario.model";

@Component({
  selector: "app-alterar-funcionario",
  templateUrl: "./alterar-funcionario.component.html",
  styleUrls: ["./alterar-funcionario.component.css"],
})
export class AlterarFuncionarioComponent{
  nome: string = "";
  cpf: string = "";
  id?: number;
  funcionario!: Funcionario;

  constructor(
    private http: HttpClient,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      let { id } = params;
      if (id !== undefined) {
        this.id = id;
        this.http
          .get<Funcionario>(`https://localhost:7114/api/funcionario/buscar/${id}`)
          .subscribe({
            next: (funcionario) => {
              this.nome = funcionario.nome!;
              this.cpf = funcionario.cpf!;
              this.funcionario = funcionario;
              this.id = id;
            },
          });
      }
    });
  }

  alterar(): void {
    let funcionario : Funcionario = {
      nome : this.nome,
      cpf : this.cpf
    }
 

    this.http
      .put<Funcionario>(`https://localhost:7114/api/funcionario/alterar/${this.id}`, funcionario)
      .subscribe({
        next: (funcionario) => {
          this.router.navigate(["pages/funcionario/listar"]);
        },
        error: (error) => {
          console.error("Algum erro aconteceu!", error);
        },
      });
  }
}
