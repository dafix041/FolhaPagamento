// app.module.ts

import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { FuncionarioListarComponent } from "./pages/funcionario/funcionario-listar/funcionario-listar.component";
import { FuncionarioCadastrarComponent } from "./pages/funcionario/funcionario-cadastrar/funcionario-cadastrar.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { FolhaCadastrarComponent } from './pages/folha/folha-cadastrar/folha-cadastrar.component';
import { FolhaListarComponent } from './pages/folha/folha-listar/folha-listar.component';

// Adicione os seguintes imports para os módulos do Angular Material
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field'; // Adicione esta linha


@NgModule({
  declarations: [
    AppComponent,
    FuncionarioListarComponent,
    FuncionarioCadastrarComponent,
    FolhaCadastrarComponent,
    FolhaListarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule, // Adicione este import para suportar ReactiveForms
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    MatFormFieldModule, // Adicione esta linha
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
