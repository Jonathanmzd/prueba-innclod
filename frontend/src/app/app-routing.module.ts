import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { DocumentsComponent } from './pages/documents/documents.component';
import { authGuard } from './guards/AuthGuard';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  {
    path: 'documentos',
    component: DocumentsComponent,
    canActivate: [authGuard],
  },
  { path: "**", redirectTo: 'documentos' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
