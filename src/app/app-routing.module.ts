import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { FuncionarioListarComponent } from "./pages/funcionario/funcionario-listar/funcionario-listar.component";
import { FuncionarioCadastrarComponent } from "./pages/funcionario/funcionario-cadastrar/funcionario-cadastrar.component";
import { FolhaCadastrarComponent } from "./pages/folha/folha-cadastrar/folha-cadastrar.component";
import { FolhaListarComponent } from "./pages/folha/folha-listar/folha-listar.component";
import { AlterarFuncionarioComponent } from "./pages/alterar/alterar-funcionario/alterar-funcionario.component";
import { FolhaAlterarComponent } from "./pages/folha/folha-alterar/folha-alterar.component";

const routes: Routes = [
  {
    path: "",
    redirectTo: "/pages/funcionario/listar",
    pathMatch: "full"
  },
  {
    path: "pages/funcionario/listar",
    component: FuncionarioListarComponent
  },
  {
    path: "pages/funcionario/cadastrar",
    component: FuncionarioCadastrarComponent
  },
  {
    path: "pages/folha/cadastrar",
    component: FolhaCadastrarComponent
  },
  {
    path: "pages/folha/listar",
    component: FolhaListarComponent
  },

  {
    path: "pages/alterar/alterar/:id",
    component: AlterarFuncionarioComponent,
  },
  {
    path: "pages/folha/alterar/:id",
     component : FolhaAlterarComponent

  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
