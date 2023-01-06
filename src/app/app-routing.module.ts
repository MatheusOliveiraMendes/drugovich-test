import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewClientComponent } from './modules/new-client/new-client.component';
import { ListClientComponent } from './modules/list-client/list-client.component';

const routes: Routes = [
  { path: "", redirectTo: "clientes", pathMatch: "full" },
  { path: "clientes", component: ListClientComponent },
  { path: "cliente", component: NewClientComponent  },
  { path: "cliente/:id", component: NewClientComponent  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
