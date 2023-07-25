import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
	{
		path: '',
		loadChildren: () => import('./pages/pages.module').then((m) => m.PagesModule),
	},
	{
		path: 'login',
		loadComponent: () => import('./login/login.component').then(mod => mod.LoginComponent)
	},
	{
		path: 'register',
		loadComponent: () => import('./login/login.component').then(mod => mod.LoginComponent)
	},
	{
		path: '**',
		loadComponent: () => import('./shared/no-page-found/no-page-found.component').then(mod => mod.NoPageFoundComponent)
	},
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
