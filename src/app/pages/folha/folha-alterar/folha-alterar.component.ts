import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Folha } from 'src/app/models/folha.model';
import { Funcionario } from 'src/app/models/funcionario.model';

@Component({
  selector: 'app-folha-alterar',
  templateUrl: './folha-alterar.component.html',
  styleUrls: ['./folha-alterar.component.css']
})
export class FolhaAlterarComponent {
    valor: number = 0;
    quantidade: number = 0;
    mes: number = 0;
    ano: number = 0;
    funcionarioId?: number;
    salarioBruto: number = 0;
    id?: number;
    funcionarios: Funcionario[] = [];
  
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
            .get<Folha>(`https://localhost:7114/api/folha/listar/`)
            .subscribe({
              next: (folha) =>  { this.http.get <Funcionario[]>('https://localhost:7114/api/funcionario/listar')
              .subscribe({
                  next:(funcionario) => {
                    this.funcionarios = funcionario;
                    console.table(funcionario);
                    this.valor = folha.valor!;
                    this.quantidade = folha.quantidade!;
                    this.mes = folha.mes!;
                    this.ano = folha.ano!;
                    this.funcionarioId = folha.funcionarioId!;
                    this.salarioBruto = folha.salarioBruto!;
                  }
              })
                
              },
            });
        }
      });
    }
  
    alterar(): void {
      let folha: Folha = {
        folhaId: this.id!,
        valor: this.valor,
        quantidade: this.quantidade,
        mes: this.mes,
        ano: this.ano,
        funcionarioId: this.funcionarioId!,
        salarioBruto: this.salarioBruto,
      };
  
      this.http
        .put<Folha>(`https://localhost:7114/api/folha/alterar/${this.id}`, folha)
        .subscribe({
          next: (folha) => {
            this.router.navigate(["pages/folha/listar"]);
          },
          error: (error) => {
            console.error("Algum erro aconteceu!", error);
          },
        });
    }
  
  
}
