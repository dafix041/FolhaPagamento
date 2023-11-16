import { Folha } from './../../../models/folha.model';
import { Component } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: "app-folha-listar",
  templateUrl: "./folha-listar.component.html",
  styleUrls: ["./folha-listar.component.css"],
})
export class FolhaListarComponent {
  folhas: Folha[] = [];

  constructor(private client: HttpClient) {}
  ngOnInit(): void {
    console.log("O componente foi carregado!");
    this.client.get<Folha[]>("https://localhost:7114/api/folha/listar").subscribe({
      
      next: (folhas) => {
        this.folhas = folhas;
        console.table(folhas);
      },
      error: (erro) => {
        console.log(erro);
      },
    });
  }
}
