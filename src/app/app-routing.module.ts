import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
	{
		path: '',
		loadComponent: () => import('./pages/pages.component').then(mod => mod.PagesComponent),
		children: [
			{ path: 'dashboard', loadComponent: () => import('./pages/dashboard/dashboard.component').then(mod => mod.DashboardComponent) },
			{ path: 'progress', loadComponent: () => import('./pages/progress/progress.component').then(mod => mod.ProgressComponent) },
			{ path: 'graficas-1', loadComponent: () => import('./pages/graph-one/graph-one.component').then(mod => mod.GraphOneComponent) },
			{ path: '', redirectTo: '/dashboard', pathMatch: 'full' },
		]
	},
	{ path: 'login', loadComponent: () => import('./login/login.component').then(mod => mod.LoginComponent) },
	{ path: 'register', loadComponent: () => import('./login/register.component').then(mod => mod.RegisterComponent) },
	{ path: '**', loadComponent: () => import('./shared/no-page-found/no-page-found.component').then(mod => mod.NoPageFoundComponent) },
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
