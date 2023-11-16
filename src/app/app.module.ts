// app.module.ts

import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { FuncionarioListarComponent } from "./pages/funcionario/funcionario-listar/funcionario-listar.component";
import { FuncionarioCadastrarComponent } from "./pages/funcionario/funcionario-cadastrar/funcionario-cadastrar.component";
import { FormsModule } from "@angular/forms";
import { FolhaCadastrarComponent } from './pages/folha/folha-cadastrar/folha-cadastrar.component';
import { FolhaListarComponent } from './pages/folha/folha-listar/folha-listar.component';

@NgModule({
  declarations: [
    AppComponent,
    FuncionarioListarComponent,
    FuncionarioCadastrarComponent,
    FolhaCadastrarComponent,
    FolhaListarComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
