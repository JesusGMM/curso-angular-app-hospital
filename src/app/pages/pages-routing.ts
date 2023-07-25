import { Route, RouterModule } from '@angular/router';
import { PagesComponent } from './pages.component';
import { NgModule } from '@angular/core';

export const childrenRoutes: Route[] = [
	{
		path: '',
		component: PagesComponent,
		children: [
			{ path: 'dashboard', loadComponent: () => import('./dashboard/dashboard.component').then(mod => mod.DashboardComponent) },
			{ path: 'progress', loadComponent: () => import('./progress/progress.component').then(mod => mod.ProgressComponent) },
			{ path: 'graficas-1', loadComponent: () => import('./graph-one/graph-one.component').then(mod => mod.GraphOneComponent) },
			{ path: '', redirectTo: '/dashboard', pathMatch: 'full' },
		]
	},
];


@NgModule({
	imports: [RouterModule.forChild(childrenRoutes)],
	exports: [RouterModule]
})
export class PagesRoutingModule { }