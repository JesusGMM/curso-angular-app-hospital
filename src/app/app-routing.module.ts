import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { childrenRoutes } from './pages/pages-routing';


const routes: Routes = [
	{
		path: '',
		loadComponent: () => import('./pages/pages.component').then(mod => mod.PagesComponent),
		children: childrenRoutes
	},
	{ path: 'login', loadComponent: () => import('./login/login.component').then(mod => mod.LoginComponent) },
	{ path: 'register', loadComponent: () => import('./login/login.component').then(mod => mod.LoginComponent) },
	{ path: '**', loadComponent: () => import('./shared/no-page-found/no-page-found.component').then(mod => mod.NoPageFoundComponent) },
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
