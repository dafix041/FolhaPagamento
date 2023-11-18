import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Funcionario } from 'src/app/models/funcionario.model';

@Component({
  selector: 'app-funcionario-cadastrar',
  templateUrl: './funcionario-cadastrar.component.html',
  styleUrls: ['./funcionario-cadastrar.component.css'],
})
export class FuncionarioCadastrarComponent implements OnInit {
  nome: string = '';
  cpf: string = '';
  funcionarioId: number = 0;
  cadastroFuncionarioForm: FormGroup = this.formBuilder.group({
    nome: ['', [Validators.required]],
    cpf: ['', [Validators.required, Validators.minLength(11), Validators.maxLength(11)]],
    funcionarioId: [''],
  });

  constructor(private formBuilder: FormBuilder, private router: Router) {}

  ngOnInit() {}

  cadastrar(): void {
    if (this.cadastroFuncionarioForm.valid) {
      let funcionario: Funcionario = this.cadastroFuncionarioForm.value;

      // Realizar a lógica de cadastro, por exemplo, enviar para o backend

      // Após o cadastro, navegar para a lista de funcionários
      this.router.navigate(['pages/funcionario/listar']);
    }
  }
}
