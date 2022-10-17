import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/public/login/login.component';
import { NotFoundComponent } from './pages/public/not-found/not-found.component';



// const routes: Routes = [
//   { path: '', component: LoginComponent, pathMatch: 'full' },
//   { path: 'login', component: LoginComponent },
//   {
//     path: 'private',
    
//     loadChildren: 'src/app/pages/private/private.module#PrivateModule',
  
//   },
//   { path: '**', component: NotFoundComponent }
// ];
const routes: Routes = [
  { path: '', component: LoginComponent, pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  // {
  //   path: 'private',loadChildren: 'src/app/pages/private/private.module#PrivateModule',
  // },
  
  { 
    path: 'private',
    loadChildren: () => import('../app/pages/private/private.module').then(mod => mod.PrivateModule),
 },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [CommonModule,RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
